/**
 * @class           {Array} Circles                             Collection of circle elements within an array
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Circles extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;

    _canvas  = undefined;

    _aspect  = new Aspect;
    _anchor  = new Anchor;
    #options = new Options;

    _storage = { type: Circle }

    /**
     * Create Circles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw   = UTILITIES.collection.draw;
            this.push   = UTILITIES.collection.push;
            this.redraw = UTILITIES.collection.redraw;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.combined.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.combined.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.combined.aspect       );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.combined.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.combined.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.combined.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.combined.perimeter    );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point        );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.combined.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.combined.aspectHeight );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX       );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY       );

        this.point  = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
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

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @public
         * @function
         * @return          {Aspect}                                    Aspect properties
         * @see             {@link PROPERTY_BLOCKS.combined.aspect}
         */
        get aspect ( ) { }


        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        get anchor ( ) { }

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

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawAnchor;}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

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
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
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

                if ( this.constructor.name === 'Ellipses' )

                    for ( let _object of this )
                    {
                        _left   = ( _object.x - _object.radius.x < _left   ) ? _object.x - _object.radius.x : _left;

                        _right  = ( _object.x + _object.radius.x > _right  ) ? _object.x + _object.radius.x : _right;

                        _top    = ( _object.y - _object.radius.y < _top    ) ? _object.y - _object.radius.y : _top;

                        _bottom = ( _object.y + _object.radius.y > _bottom ) ? _object.y + _object.radius.y : _bottom;
                    }

                else

                    for ( let _object of this )
                    {
                        _left   = ( _object.x - _object.radius < _left   ) ? _object.x - _object.radius : _left;

                        _right  = ( _object.x + _object.radius > _right  ) ? _object.x + _object.radius : _right;

                        _top    = ( _object.y - _object.radius < _top    ) ? _object.y - _object.radius : _top;

                        _bottom = ( _object.y + _object.radius > _bottom ) ? _object.y + _object.radius : _bottom;
                    }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width,    this._aspect.height   ] = [ _right - _left, _bottom - _top ];

            [ this._aspect.offset.x, this._aspect.offset.y ] = [ _left,          _top           ];
        }

        /**
         * Sets offset of child object against this constructor's point
         * @private
         * @function
         * @param           {Object} Object                             CanvasLab Object
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setPointOffset ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.area;}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.center;}
         */
        get center ( ) { }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.endPoint;}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.perimeter;}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push;}
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

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.collection.redraw}
         */
        redraw ( ) { }
}
