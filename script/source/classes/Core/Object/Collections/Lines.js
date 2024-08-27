/**
 * @class           {Array}             Lines                   Collection of Line objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {string}            lineCap                 Shape of end points
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 */
class Lines extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _lineCap = 'round';
    _aspect  = new Aspect;
    _anchor  = new Anchor;

    _canvas   = undefined;
    _template = undefined;

    #options = new Options;
    #storage = { type: Line }

    /**
     * Create a Lines object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;
            this._isTemplate        = VALIDATION.isTemplate;

            this._clearCanvas     = UTILITIES.individual.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.individual.draw.axis;
            this._drawBorder      = UTILITIES.individual.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;

            this.draw   = UTILITIES.collection.draw;
            this.push   = UTILITIES.collection.push;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.collection.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.collection.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.collection.aspect       );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.collection.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.collection.aspectHeight );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.collection.canvas       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.collection.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.collection.perimeter    );
            Object.defineProperty ( this, 'template',  PROPERTY_BLOCKS.collection.template     );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;

        this.stroke.master = this;

        ////    POPULATE COLLECTION     ////////////////////

            if ( arguments.length > 0 )

                this.push.apply ( this, arguments );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.individual.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.individual.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointX}
         */
        get x ( ) { }

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointY}
         */
        get y ( ) { }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ LINECAP ]  ///////////////////////////////////

        /**
         * Set line cap
         * @public
         * @function
         * @param           {string} value                              Line cap
         */
        set lineCap ( value )
        {
            this._lineCap = ( value === 'butt' || value === 'round' || value === 'square' ) ? value : this._lineCap;
        }

        /**
         * Get line cap
         * @readOnly
         * @function
         * @return          {string}                                    Line cap
         */
        get lineCap ( )
        {
            return this._lineCap;
        }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @public
         * @function
         * @return          {Aspect}                                    Aspect properties
         * @see             {@link PROPERTY_BLOCKS.collection.aspect}
         */
        get aspect ( ) { }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.collection.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.collection.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.collection.anchor}
         */
        get anchor ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link PROPERTY_BLOCKS.collection.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link PROPERTY_BLOCKS.collection.canvas}
         */
        get canvas ( ) { }

    ////    [ TEMPLATE ]  //////////////////////////////////

        /**
         * Set template
         * @public
         * @function
         * @param           {Template} value                            Template object
         * @see             {@link PROPERTY_BLOCKS.collection.template}
         */
        set template ( value ) { }

        /**
         * Get template
         * @readOnly
         * @function
         * @return          {Template}                                  Template object
         * @see             {@link PROPERTY_BLOCKS.collection.template}
         */
        get template ( ) { }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {Object}                                    Options object
         */
        get options ( )
        {
            return this.#options;
        }

    ////    [ STORAGE TYPE ]  //////////////////////////////

        /**
         * Returns this collection's storage type
         * @public
         * @function
         * @return          {clObject}                                  Canvas Lab object
         */
        get storageType ( )
        {
            return this.#storage.type;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.individual.collection.drawAnchor}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.individual.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.individual.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawOptionsPost}
         */
        _drawOptionsPost ( ) { }

        /**
         * Triggers associated pre-draw options
         * @private
         * @function
         * @param           {Object}  object                            CanvasLab Object
         * @param           {Options} options                           Options for collections
         */
        _drawOptionsPre ( object, options )
        {
            let _types = [ 'shadow', 'points', 'controlPoints', 'coordinates' ];


            for ( let _type of _types )

                if ( options [ _type ] )

                    object.options [ _type ] = true;
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.collection.setAnchorPoint}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            let [ _width, _height ] = [ this._canvas.canvas.clientWidth  * 2, this._canvas.canvas.clientHeight * 2 ]

            let [ _left,  _top    ] = [   _width,   _height ];

            let [ _right, _bottom ] = [ - _width, - _height ];


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    _left   = ( _object.start.x < _left   ) ? _object.start.x : _left;

                    _left   = ( _object.end.x   < _left   ) ? _object.end.x   : _left;


                    _right  = ( _object.start.x > _right  ) ? _object.start.x : _right;

                    _right  = ( _object.end.x   > _right  ) ? _object.end.x   : _right;


                    _top    = ( _object.start.y < _top    ) ? _object.start.y : _top;

                    _top    = ( _object.end.y   < _top    ) ? _object.end.y   : _top;


                    _bottom = ( _object.start.y > _bottom ) ? _object.start.y : _bottom;

                    _bottom = ( _object.end.y   > _bottom ) ? _object.end.y   : _bottom;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width, this._aspect.height ] = [ _right - _left, _bottom - _top ];
        }

        /**
         * Sets offset of child Line against this constructor's point
         * @private
         * @function
         * @param           {Line} Line                                 Line object
         */
        _setPointOffset ( Line )
        {
            Line.start.x += this.x;

            Line.end.x   += this.x;


            Line.start.y += this.y;

            Line.end.y   += this.y;
        }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.collection.area}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            const getMin = ( value, start, end ) => ( value === undefined ) ? start : ( start < end ) ? ( start < value ) ? start : value : ( end < value ) ? end : value;

            let _x, _y = undefined;


            for ( let _object of this )
            {
                _x = getMin ( _x, _object.start.x, _object.end.x );

                _y = getMin ( _y, _object.start.y, _object.end.y );
            }


            [ _x, _y ] = [ _x + ( this.width / 2 ), _y + ( this.height / 2 ) ];


            return new Point ( _x, _y );
        }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.collection.endPoint}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.collection.perimeter}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push}
         */
        push ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw function for collections
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.collection.draw}
         */
        draw ( ) { }
}
