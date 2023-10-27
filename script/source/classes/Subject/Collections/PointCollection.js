/**
 * @class           {Object}  PointCollection                   X & Y coordinates for an object
 * @property        {number}  [x=0]                             X - x-axis coordinate
 * @property        {number}  [y=0]                             Y - y-axis coordinate
 * @property        {OptionsCollection} options                 Ancillary properties
 */
class PointCollection
{
    _x = 0;
    _y = 0;

    #_options = new OptionsCollection;

    /**
     * Create a point collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._setAll = UTILITIES.set.all;

            delete this.#_options._shadow;
            delete this.#_options._border;
    }

    ////    [ X ]   ////////////////////////////////////////

        /**
         * Set x-axis value
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            if ( typeof value === 'number' )  this._setAll ( 'x', value );
        }

        /**
         * Get x-axis value
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._x;
        }

    ////    [ Y ]   ////////////////////////////////////////

        /**
         * Set the y-axis value
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            if ( typeof value === 'number' )  this._setAll ( 'y', value );
        }

        /**
         * Get y-axis value
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._y;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @return          {OptionsCollection}                         Options collection object
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Invert x & y coordinate values
         */
        invert ( )
        {
            let _y = this.y;

            [ this.y, this.x ] = [ this.x, _y ];
        }

        _setAll ( ) { }
}
