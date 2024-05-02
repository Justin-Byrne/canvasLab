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

			this._isAnchor = VALIDATION.isAnchor;
	}

	////    [ POINT ]   ////////////////////////////////////

		/**
         * Set x-axis value
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { this._point.x = value; }

        /**
         * Get x-axis value
         * @return          {number}                                    X coordinate value
         */
        get x ( )       { return this._point.x; }


        /**
         * Set the y-axis value
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { this._point.y = value; }

        /**
         * Get y-axis value
         * @return          {number}                                    Y coordinate value
         */
        get y ( )       { return this._point.y; }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set anchor alignment
         * @param           {string} value                              Anchor alignment
         */
        set align ( value )
        {
            this._align = ( this._isAnchor ( value ) ) ? value : this._align;
        }

        /**
         * Get anchor alignment
         * @return          {string}                                    Anchor alignment
         */
        get align ( )
        {
            return this._align;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isAnchor ( ) { }
}
