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

            Object.defineProperty ( this, 'x', PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y', PROPERTY_BLOCKS.discrete.pointY );
	}

	////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         */
        get point ( ) { }


		/**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( ) {  }


        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( ) { }

    ////    [ TYPE ]    ////////////////////////////////////

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
         * @see             {@link Validation.isAnchor}
         */
        _isAnchor ( ) { }
}
