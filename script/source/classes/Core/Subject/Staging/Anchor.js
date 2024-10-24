/**
 * @class           {Object} Anchor                             Anchor object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {string} align                              Anchor alignment
 */
class Anchor
{
	_point = new Point;

	_align = 'center';

	constructor ( )
	{
		//// 	COMPOSITION 	////////////////////////////

			this._isAlign = VALIDATION.isAlign;

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );
	}

    ////    PROPERTIES    //////////////////////////////////

    	////    [ POINT ]    ////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} point                               X & Y axis coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y axis coordinates
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
             * Set y-axis value
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

        ////    [ ALIGN ]    /////////////////////

            /**
             * Set anchor alignment
             * @public
             * @function
             * @param           {string} value                              Anchor alignment
             */
            set align ( value )
            {
                this._align = ( this._isAlign ( value ) ) ? value : this._align;
            }

            /**
             * Get anchor alignment
             * @readOnly
             * @function
             * @return          {string}                                    Anchor alignment
             */
            get align ( )
            {
                return this._align;
            }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Anchor alignment
         * @private
         * @function
         * @param           {string} value                              Anchor alignment
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAnchor}
         */
        _isAnchor ( ) { }
}
