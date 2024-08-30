/**
 * @class           {Object}            cImage                  cImage object
 * @property        {string}            source 				    Source path of image file
 * @property        {Object}            primary  			    Primary set of coordinates
 * @property        {Object}            secondary 			    Secondary set of coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 */
class cImage
{
	_source    = new Image;

	_primary   =
	{
		point:  new Point,
		aspect: new Aspect
	}

	_secondary =
	{
		point:  undefined,
		aspect: undefined
	}

	_canvas = undefined;

    _anchor   = new Anchor;
	#options  = new Options;
    #position = new Position;

	/**
     * Create a cImage object
     * @class           {Object}            cImage                  cImage object
 	 * @property        {string}            source                  Source path of image file
 	 * @property        {Object}            primary                 Primary set of coordinates
     * @property        {Object}            secondary               Secondary set of coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
	constructor (
				    source,
				    primary   = { point: { x: undefined, y: undefined }, aspect: { width: undefined, height: undefined } },
				    secondary = { point: { x: undefined, y: undefined }, aspect: { width: undefined, height: undefined } },
				    canvas
				)
	{
		////    COMPOSITION     ////////////////////////////

			this._isAspect       = VALIDATION.isAspect;
            this._isDegree       = VALIDATION.isDegree;
            this._isInDom        = VALIDATION.isInDom;
            this._isPoint        = VALIDATION.isPoint;
            this._isPointNAspect = VALIDATION.isPointNAspect;

            this._drawAnchor     = UTILITIES.individual.draw.anchor;
            this._drawAxis       = UTILITIES.individual.draw.axis;
            this._drawBorder     = UTILITIES.individual.draw.border;
            this._setAnchorPoint = UTILITIES.individual.set.anchorPoint;

            this.move   = UTILITIES.individual.misc.move;
            this.rotate = UTILITIES.individual.misc.rotate;

            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.individual.area      );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.individual.canvas    );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.individual.center    );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.individual.perimeter );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.source    = source;
	    this.primary   = primary;
	    this.secondary = secondary;
	    this.canvas    = canvas;
	}

	////    [ SOURCE ]    //////////////////////////////////

		/**
         * Sets source property value
         * @public
         * @function
         * @param           {string} value                              Path of image source
         */
        set source ( value )
        {
            if ( typeof value === 'string' )
            {
                let _image = new Image;

                    _image.src = value;


                this._source = _image;

                this.type     = 'source';
            }
        }

        /**
         * Gets source property value
         * @readOnly
         * @function
         * @return          {Image}                                   	Image source
         */
        get source ( )
        {
            return this._source;
        }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         */
        set point ( value )
        {
            this._primary.point = ( this._isPoint ( value ) ) ? value : this._primary.point;
        }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         */
        get point ( )
        {
            return this._primary.point;
        }


        /**
         * Set primary x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            this._primary.point.x = value;
        }

        /**
         * Get primary x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._primary.point.x;
        }


        /**
         * Set primary y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            this._primary.point.y = value;
        }

        /**
         * Get primary y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._primary.point.y;
        }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Set aspect properties
         * @public
         * @function
         * @param           {Aspect} value                              Aspect properties
         */
        set aspect ( value )
        {
            this._primary.aspect = ( this._isAspect ( value ) ) ? value : this._primary.aspect;
        }

        /**
         * Get aspect properties
         * @readOnly
         * @function
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            return this._primary.aspect;
        }


        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         */
        get width ( )
        {
            return this.source.width;
        }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this.source.height;
        }

	////    [ PRIMARY ]    /////////////////////////////////

		/**
         * Sets primary property value
         * @public
         * @function
         * @param           {string} value                              Path of image
         */
        set primary ( value )
        {
        	if ( this._isPointNAspect ( value ) )

        		[ this._primary.point, this._primary.aspect ] = [ value.point, value.aspect ];
        }

        /**
         * Gets primary property value
         * @readOnly
         * @function
         * @return          {Image}										Image object
         */
        get primary ( )
        {
            return this._primary;
        }

    ////    [ SECONDARY ]    ///////////////////////////////

		/**
         * Sets secondary property value
         * @public
         * @function
         * @param           {string} value                              Path of image
         */
        set secondary ( value )
        {
        	if ( this._isPointNAspect ( value ) )

        		[ this._secondary.point, this._secondary.aspect ] = [ value.point, value.aspect ];
        }

        /**
         * Gets secondary property value
         * @readOnly
         * @function
         * @return          {Image}										Image object
         */
        get secondary ( )
        {
            return this._secondary;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link individual.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link individual.canvas}
         */
        get canvas ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this._anchor;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @public
         * @function
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#options;
        }

    ////    [ LOCATION ]    ////////////////////////////////

        /**
         * Get position properties
         * @public
         * @function
         * @return          {Position}                                  Position properties
         */
        get position ( )
        {
            return this.#position;
        }

    ////    VALIDATION    //////////////////////////////////

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
	     * Returns whether the passed value is a Point & Aspect
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Object} value                              Object of a Point & Aspect
	     * @param           {Point}  value.point                        Point object
	     * @param           {Aspect} value.aspect                       Aspect object
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isPointNAspect}
	     */
	    _isPointNAspect ( ) { }

	////    UTILITIES    ///////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
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
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.individual.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( this.source.width + _offset, this.source.height + _offset );

            ////////////////////////////////////////////////////////////////////

            if ( this.#options.border      ) this._drawBorder     ( _aspect );

            if ( this.#options.axis        ) this._drawAxis       ( );

            if ( this.#options.anchor      ) this._drawAnchor     ( );

            if ( this.#options.coordinates ) this.showCoordinates ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.individual.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point position
         * @private
         * @function
         * @see             {@link UTILITIES.individual.set.anchorPoint}
         */
        _setAnchorPoint ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of this object
         * @see             {@link PROPERTY_BLOCKS.individual.area}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.individual.center}
         */
        get center ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.individual.center}
         */
        get perimeter ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         * @see             {@link UTILITIES.individual.misc.move}
         */
        move ( ) { }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link UTILITIES.individual.misc.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link UTILITIES.individual.misc.showCoordinates}
         */
        showCoordinates ( ) { }

	////    DRAW    ////////////////////////////////////////

	    /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
	    draw ( canvas )
	    {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                let _drawImage = ( this.secondary.point ) ? ( ) => this._canvas.drawImage ( this._source, this.secondary.point.x, this.secondary.point.y, this.secondary.aspect.width, this.secondary.aspect.height, this.anchor.x, this.anchor.y, this.primary.aspect.width, this.primary.aspect.height )

                                                          : ( ) => this._canvas.drawImage ( this._source, this.anchor.x,          this.anchor.y,          this._source.width,          this._source.height );

                this._source.onload = ( ) =>
                {
                    this._setAnchorPoint ( );

                    _drawImage ( );

                    this._drawOptions ( );
                }
            }
	    }
}
