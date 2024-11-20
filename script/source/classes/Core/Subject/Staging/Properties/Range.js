/**
 * @class           {Object} Range                              Range object
 * @property        {number} min                              	Minimum range
 * @property        {number} max                              	Maximum range
 * @property        {number} value                              Current value
 */
class Range
{
	_min   = 0;
	_max   = 100;
	_value = 0;

	/**
	 * Create a Range object
	 * @property        {number} min                              	Minimum range
	 * @property        {number} max                              	Maximum range
	 * @property        {number} value                              Current value
	 */
	constructor ( min, max, value )
	{
		this.min   = min;
		this.max   = max;
		this.value = value;

	}

    ////    PROPERTIES    //////////////////////////////////

		////    [ MIN ]    ///////////////////////////

		    /**
		     * Set min
		     * @public
		     * @function
		     * @param 			{number} value 								Min of object
		     */
		    set min ( value )
		    {
		        this._min = value;
		    }

		    /**
		     * Get min
		     * @public
		     * @function
		     * @return 			{number}									Min of object
		     */
		    get min ( )
		    {
		        return this._min;
		    }

		////    [ MAX ]    ///////////////////////////

		    /**
		     * Set max
		     * @public
		     * @function
		     * @param 			{number} value 								Max of object
		     */
		    set max ( value )
		    {
		        this._max = value;
		    }

		    /**
		     * Get max
		     * @public
		     * @function
		     * @return 			{number}									Max of object
		     */
		    get max ( )
		    {
		        return this._max;
		    }

		////    [ VALUE ]    /////////////////////////

		    /**
		     * Set value
		     * @public
		     * @function
		     * @param 			{number} value 								Value of object
		     */
		    set value ( value )
		    {
		        this._value = value;
		    }

		    /**
		     * Get value
		     * @public
		     * @function
		     * @return 			{number}									Value of object
		     */
		    get value ( )
		    {
		        return this._value;
		    }
}
