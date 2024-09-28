/**
 * @class           {Object}            Position 				Position object
 * @property        {Point}             point 					Original X & Y coordinates for an object's position
 * @property        {number}            distance 				Distance from origin to destination
 * @property        {number}            direction 				Direction to move towards destination; in degrees
 * @property        {Stroke}            stroke 					Stroke properties
 * @property        {Fill}              fill 					Fill properties
 * @property        {Shadow}            shadow 					Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {clObject} 			master 					Master object
 */
class Position
{
	_origin          = undefined;

	_start           = undefined;
	_end             = undefined;

	_distance        = undefined;
	_direction       = undefined;

	_rotation        = 0;

	_aspect          = new Aspect;

	_controlPoints   = new ControlPoints;

	_fontSize        = 0;

	_master          = undefined;

	/**
	 * Create a Position object
	 * @property        {Point}  point                              Original X & Y coordinates for an object's position
	 * @property        {number} distance                  			Distance from origin to destination
	 * @property        {number} direction 							Direction to move towards destination; in degrees
	 */
	constructor ( origin, distance, direction )
	{
		////    COMPOSITION    /////////////////////////////

			this._isAspect  		= VALIDATION.isAspect;
			this._isBlur            = VALIDATION.isBlur;
			this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
			this._isControlPoint    = VALIDATION.isControlPoint;
			this._isNumber 			= VALIDATION.isNumber;
			this._isPoint 			= VALIDATION.isPoint;
			this._isWidth 			= VALIDATION.isWidth
			this._isHeight 			= VALIDATION.isHeight

			Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master  );

		this.origin    = origin;
		this.distance  = distance;
		this.direction = direction;
	}

	////    [ ORIGIN ]    //////////////////////////////////

		/**
		 * Set origin
		 * @public
		 * @function
		 * @param 			{Point} value 								X & Y coordinates
		 */
		set origin ( value )
		{
			this._origin = value;
		}

		/**
         * Get origin
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         */
		get origin ( )
		{
			return this._origin;
		}

	////    [ DISTANCE ]    ////////////////////////////////

		/**
		 * Set distance
		 * @public
		 * @function
		 * @param 			{number} value 								Distance from origin to destination
		 */
		set distance ( value )
		{
			if ( value != undefined  &&  this._isPoint ( value ) )

                this._distance = Math.sqrt (
                                               ( Math.pow ( value.x - this.master.x, 2 ) ) +

                                               ( Math.pow ( value.y - this.master.y, 2 ) )
                                           );
		}

		/**
		 * Get distance
		 * @public
		 * @function
		 * @return 			{number} 									Distance from origin to destination
		 */
		get distance ( )
		{
			return this._distance;
		}

	////    [ DIRECTION ]    ///////////////////////////////

		/**
		 * Set direction
		 * @public
		 * @function
		 * @param 			{number} value 								Direction in degrees
		 */
		set direction ( value )
		{
			if ( value != undefined  &&  this._isPoint ( value ) )

				this._direction = Math.atan2 ( value.y - this.master.y, value.x - this.master.x );
		}

		/**
		 * Get direction
		 * @public
		 * @function
		 * @return 			{number}									Direction in degrees
		 */
		get direction ( )
		{
			return this._direction;
		}

	////    [ ROTATION ]    ////////////////////////////////

		/**
		 * Set rotation
		 * @public
		 * @function
		 * @param 			{number} value 								Direction in degrees
		 */
		set rotation ( value )
		{
			this._rotation = value;
		}

		/**
		 * Get rotation
		 * @public
		 * @function
		 * @return 			{number}									Direction in degrees
		 */
		get rotation ( )
		{
			return this._rotation;
		}

	////    [ ASPECT ]    //////////////////////////////////

	    /**
	     * Set aspect
	     * @public
	     * @function
	     * @param 			{number} value 								Aspect of object
	     */
	    set aspect ( value )
	    {
	        this._aspect = ( this._isAspect ( value ) ) ? value : this._aspect;
	    }

	    /**
	     * Get aspect
	     * @public
	     * @function
	     * @return 			{number} 									Aspect of object
	     */
	    get aspect ( )
	    {
	        return this._aspect;
	    }

	////    [ WIDTH ]    ///////////////////////////////////

		/**
		 * Set width
		 * @public
		 * @function
		 * @param 			{number} value 								Width of object
		 */
		set width ( value )
		{
			this._aspect.width = value;
		}

		/**
		 * Get width
		 * @public
		 * @function
		 * @return 			{number}									Width of object
		 */
		get width ( )
		{
			return this._aspect.width;
		}

	////    [ HEIGHT ]    //////////////////////////////////

	    /**
	     * Set height
	     * @public
	     * @function
	     * @param 			{number} value 								Height of object
	     */
	    set height ( value )
	    {
	        this._aspect.height = value;
	    }

	    /**
	     * Get height
	     * @public
	     * @function
	     * @return 			{number}									Height of object
	     */
	    get height ( )
	    {
	        return this._aspect.height;
	    }

	////    [ CONTROLPOINTS ]    ///////////////////////////

	    /**
	     * Set controlPoints
	     * @public
	     * @function
	     * @param 			{Array.<number>} value 						ControlPoints of object
	     */
	    set controlPoints ( value )
	    {
	        this._controlPoints = ( this._isControlPoint ( value ) ) ? value : this._controlPoints;
	    }

	    /**
	     * Get controlPoints
	     * @public
	     * @function
	     * @return 			{Array.<number>} 							ControlPoints of object
	     */
	    get controlPoints ( )
	    {
	        return this._controlPoints;
	    }

	////    [ FONTSIZE ]    ////////////////////////////////

	    /**
	     * Set fontSize
	     * @public
	     * @function
	     * @param 			{number} value 								FontSize of object
	     */
	    set fontSize ( value )
	    {
	        this._fontSize = this._isNumber ( value ) ? value : this._fontSize;
	    }

	    /**
	     * Get fontSize
	     * @public
	     * @function
	     * @return 			{number}									FontSize of object
	     */
	    get fontSize ( )
	    {
	        return this._fontSize;
	    }

	////    [ MASTER ]    //////////////////////////////////

		/**
		 * Set master object
		 * @public
		 * @function
		 * @param 			{clObject} value 							Canvas Lab object
		 * @see             {@link PROPERTY_BLOCKS.individual.master}
		 */
		set master ( value ) { }

		/**
         * Get master object
         * @public
         * @function
         * @return          {clObject} 									Master Canvas Lab object
         * @see             {@link PROPERTY_BLOCKS.individual.master}
         */
		get master ( ) { }

	////    VALIDATION    //////////////////////////////////

		/**
	     * Returns whether the passed value is an Aspect
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Object} value                              Aspect or object equivalent
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isAspect}
	     */
	    _isAspect ( ) { }

	    /**
         * Returns whether the passed value is a blur value
         * @private
         * @function
         * @param           {number} value                              Blur value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isBlur}
         */
        _isBlur ( ) { }

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
	     * Returns whether the passed value is an array of Control Point values
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Array.<number>} value                      Array of Control Points
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isControlPoint}
	     */
	    _isControlPoint ( ) { }

	    /**
	     * Returns whether the passed value is a Number value
	     * @public
	     * @memberof VALIDATION
	     * @function
	     * @param           {number} value                              Number value
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isNumber}
	     */
	    _isNumber ( ) { }

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
	     * Returns whether the passed value is a width value
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {number} value                              Width value
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isWidth}
	     */
	    _isWidth ( ) { }

	    /**
	     * Returns whether the passed value is a height value
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {number} value                              Height value
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isHeight}
	     */
	    _isHeight ( ) { }
}
