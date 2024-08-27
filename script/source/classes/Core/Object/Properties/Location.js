/**
 * @class           {Object}            Location 				Location object
 * @property        {Point}             point 					Original X & Y coordinates for an object's position
 * @property        {number}            distance 				Distance from origin to destination
 * @property        {number}            direction 				Direction to move towards destination; in degrees
 * @property        {Stroke}            stroke 					Stroke properties
 * @property        {Fill}              fill 					Fill properties
 * @property        {Shadow}            shadow 					Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {clObject} 			master 					Master object
 */
class Location
{
	_origin    = undefined;
	_distance  = undefined;
	_direction = undefined;

	// _radius    = undefined;

	_master    = undefined;

	/**
	 * Create a Location object
	 * @property        {Point}  point                              Original X & Y coordinates for an object's position
	 * @property        {number} distance                  			Distance from origin to destination
	 * @property        {number} direction 							Direction to move towards destination; in degrees
	 */
	constructor ( origin, distance, direction )
	{
		////    COMPOSITION    /////////////////////////////

			this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
			this._isPoint 			= VALIDATION.isPoint;

			Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master );

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

	////    [ RADIUS ]    //////////////////////////////////

		// set radius ( value )
		// {
		// 	this._radius = value;
		// }

		// get radius ( )
		// {
		// 	return this._radius;
		// }

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
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

		/**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }
}
