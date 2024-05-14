/**
 * Shared utility functions
 * @namespace       UTILITIES
 */
const UTILITIES =
{
    /**
     * Clears canvas
     * @public
     * @name clearCanvas
     * @function
     * @param           {boolean} value                             Whether to redraw background
     */
    clearCanvas ( value )
    {
        let _canvas = document.getElementById ( this.canvas );


        if ( value ) this._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
    },

    /**
     * Cycle colors for stroke
     * @public
     * @name strokeColorCycle
     * @function
     * @param           {Rgb}    start                              Starting RGB value
     * @param           {Rgb}    end                                Ending RGB value
     * @param           {number} progress                           Progress time unit; 0.00 - 1.00
     * @param           {number} [max=1]                            Maximum increments
     */
    strokeColorCycle ( start, end, progress, max = 1 )
    {
        let _clear = ( ) => this._clearCanvas ( true );

        let _draw  = ( ) => this.draw ( );


        this._stroke._color._cycle ( start, end, progress, max, _clear, _draw );
    },

    /**
     * Cycle colors for fill
     * @public
     * @name fillColorCycle
     * @function
     * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
     * @param           {Rgb}    start                              Starting RGB value
     * @param           {Rgb}    end                                Ending RGB value
     * @param           {number} [max=1]                            Maximum increments
     */
    fillColorCycle ( start, end, progress, max = 1 )
    {
        let _clear = ( ) => this._clearCanvas ( true );

        let _draw  = ( ) => this.draw ( );


        this._fill.color._cycle ( start, end, progress, max, _clear, _draw );
    },

    /**
     * Cycle colors for gradient
     * @public
     * @name gradientColorCycle
     * @function
     * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
     * @param           {Rgb}    start                              Starting RGB value
     * @param           {Rgb}    end                                Ending RGB value
     * @param           {number} stop                               Gradient color stop
     * @param           {number} [max=1]                            Maximum increments
     */
    gradientColorCycle ( start, end, progress, stop, max = 1 )
    {
        let _clear = ( ) => this._clearCanvas ( true );

        let _draw  = ( ) => this.draw ( );


        this._fill.gradient._stopColorCycle ( start, end, progress, stop, max, _clear, _draw );
    },

    /** @var            {Object} draw                                                               **/
    draw:
    {
        /**
         * Draws an axis for the associated object
         * @public
         * @name axis
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         */
        axis ( edgeOffset = 20, color = new Rgb ( 245, 80, 50 ) )
        {
            let _lines = new Lines ( new Line, new Line );


                _lines.stroke.color = color;

                _lines.point        = this.center;

                _lines.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                [  _lines [ 0 ].start.x, _lines [ 0 ].end.x  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];

                [  _lines [ 1 ].start.y, _lines [ 1 ].end.y  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];


                _lines.draw ( );
        },

        /**
         * Draws an axis for the associated object
         * @public
         * @name border
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         */
        border ( aspect, color = new Rgb ( 245, 80, 50 ) )
        {
            if ( this._isAspect ( aspect ) )
            {
                let _border = new Rectangle ( this.center, aspect );


                    _border.stroke.color     = color;

                    _border.fill.color.alpha = 0;

                    _border.canvas           = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                    _border.draw ( );
            }
            else

                console.warn ( `"${value}" is not a valid aspect !` );
        },
        /** @var            {Object} collection                                                     **/
        collection:
        {

            /**
             * Typical draw function for collections; Circles, Texts
             * @public
             * @name typical
             * @function
             * @param           {string} canvas                             Canvas Id
             */
            typical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )

                        for ( let _object of this )
                        {
                            _object.point = new Point (  ( _object.origin.x + this.x ), ( _object.origin.y + this.y )  );

                            _object.draw ( );
                        }

                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            },

            /**
             * A-typical draw function for collections; Circles, Texts
             * @public
             * @name aTypical
             * @function
             * @param           {string} canvas                             Canvas Id
             */
            aTypical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )
                    {
                        for ( let _object of this )
                        {
                            this._setAspect      ( );

                            this._setAnchorPoint ( );


                            _object._start = new Point (  ( _object.origin.start.x + this.x ), ( _object.origin.start.y + this.y )  );

                            _object._end   = new Point (  ( _object.origin.end.x   + this.x ), ( _object.origin.end.y   + this.y )  );


                            _object.draw ( );
                        }


                        this._drawOptions ( );
                    }
                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            }
        }
    },

    /**
     * Push or pops the passed object
     * @public
     * @name pushPop
     * @function
     * @param           {Object} object                             Object; Circle, Rectangle, Text
     */
    pushPop ( object )
    {
        let _index = undefined;


        if ( object instanceof this._storage.type )
        {
            if ( this._canvas != undefined )

                object.canvas = this.canvas;


            if ( this.length != 0 )
            {
                for ( let _id in this )

                    if ( this [ _id ] instanceof this._storage.type )

                        if ( this [ _id ].isThere ( object ) )

                            _index = _id;

                    else

                        break;


                ( _index != undefined )

                    ? this.splice ( _index, 1 )

                    : this.push   ( object );
            }
            else

                this [ 0 ] = object;
        }
        else

            console.warn ( `${this.constructor.name} only accepts '${this._storage.type.name}' objects !`);
    },

    /**
     * Rotates the origin point by the degree & distance passed
     * @private
     * @name rotatePoint
     * @function
     * @param           {Point}  origin                             Origin point
     * @param           {number} degree                             Degree to rotate
     * @param           {number} distance                           Distance from origin
     */
    rotatePoint ( origin = { x, y }, degree, distance )
    {
        let _point = new Point;

        let _angle = ( degree % 360 );


            _point.x = origin.x + Math.cos ( _angle * Math.PI / 180 ) * distance;

            _point.y = origin.y + Math.sin ( _angle * Math.PI / 180 ) * distance;


        return _point;
    },

    /** @var            {Object} set                                                                **/
    set:
    {
        /**
         * Sets all option values throughout a collection
         * @private
         * @name all
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         */
        all ( property, value )
        {
            let _ancestor = this.constructor.name.replace ( 'Collection', '' ).toLowerCase ( );


            this [ `_${property}` ] = value;                    // Set: parent element


            if ( this._master.length > 0 )

                for ( let _item of this._master )

                    _item [ _ancestor ] [ property ] = value;   // Set: child elements
        },

        /**
         * Sets shadow properties
         * @private
         * @name shadow
         * @function
         */
        shadow ( )
        {
            this._canvas.shadowBlur    = this._shadow.blur;

            this._canvas.shadowOffsetX = this._shadow.x;

            this._canvas.shadowOffsetY = this._shadow.y;

            this._canvas.shadowColor   = this._shadow.color.toCss ( );
        },

        /**
         * Sets fill type of the associated object
         * @private
         * @name fillType
         * @function
         */
        fillType ( )
        {
            /**
             * Sets stops for gradient fill types
             * @private
             * @name _setStops
             * @function
             * @param           {Object}        gradient                    [description]
             * @param           {Array.<Stops>} stops                       [description]
             */
            function _setStops ( gradient, stops )
            {
                for ( let _stop of stops )

                    gradient.addColorStop ( _stop.offset, _stop.color.toCss ( ) );


                return gradient;
            }

            switch ( this.fill.type )
            {
                case 'solid':   this._canvas.fillStyle = this.fill.color.toCss ( );                             break;

                case 'linear':  let _linear = this._canvas.createLinearGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.end.x, this.fill.gradient.end.y );

                                this._canvas.fillStyle = _setStops ( _linear, this.fill.gradient.stops );       break;

                case 'radial':  let _radial = this._canvas.createRadialGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.startRadius, this.fill.gradient.end.x, this.fill.gradient.end.y, this.fill.gradient.endRadius );

                                this._canvas.fillStyle = _setStops ( _radial, this.fill.gradient.stops );       break;

                case 'conic':   let _conic = this._canvas.createConicGradient ( this.fill.gradient.angle, this.fill.gradient.point.y, this.fill.gradient.point.x );

                                this._canvas.fillStyle = _setStops ( _conic, this.fill.gradient.stops );        break;
            }
        }
    },

    /**
     * Cycle colors for gradient stop(s)
     * @private
     * @name _stopColorCycle
     * @function
     * @param           {Object}   start                    Color model & values
     * @param           {Object}   end                      Color model & values
     * @param           {number}   progress                 Progress time unit; 0.00 - 1.00
     * @param           {number}   stop                     Color stop to cycle
     * @param           {number}   max                      Maximum number of steps between interpolation
     * @param           {function} clear                    Clear callback from root object
     * @param           {function} draw                     Draw callback from root object
     */
    _stopColorCycle ( start, end, progress, stop, max, clear, draw )
    {
        this.stops [ stop ].color._cycle ( start, end, progress, max, clear, draw );
    }
}
