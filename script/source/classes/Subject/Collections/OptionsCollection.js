/**
 * @class           {Object}  OptionsCollection                 Options for shapes, lines, and groups
 * @property        {boolean} [shadow=false]                    Display shadow
 * @property        {boolean} [border=false]                    Display border
 * @property        {boolean} [axis=false]                      Display axis
 * @property        {boolean} [points=false]                    Display points
 * @property        {boolean} [coordinates=false]               Display coordinates
 * @property        {boolean} [controlPoints=false]             Display control points
 * @property        {boolean} [shadow=false]                    Display shadow
 */
class OptionsCollection
{
    _shadow        = false;
    _border        = false;
    _axis          = false;
    _points        = false;
    _coordinates   = false;
    _controlPoints = false;

    // _master = undefined;

    /**
     * Create an options collection
     * @param           {boolean} shadow                            Show shadow
     * @param           {boolean} border                            Show border
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} points                            Show points
     * @param           {boolean} coordinates                       Show coordinates
     */
    constructor ( shadow, border, axis, points, coordinates )
    {
        ////    COMPOSITION     ////////////////////////////

            this._setAll = UTILITIES.set.all;

        this.shadow      = shadow;
        this.border      = border;
        this.axis        = axis;
        this.points      = points;
        this.coordinates = coordinates;
    }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Set shadow value
         * @public
         * @function
         * @param           {boolean} value                             Shadow; true | false
         */
        set shadow ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'shadow', value );
        }

        /**
         * Get shadow value
         * @readOnly
         * @function
         * @return          {boolean}                                   Shadow; true | false
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ BORDER ]  ////////////////////////////////////

        /**
         * Set border value
         * @public
         * @function
         * @param           {boolean} value                             Border; true | false
         */
        set border ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'border', value );
        }

        /**
         * Get border value
         * @readOnly
         * @function
         * @return          {boolean}                                   Border; true | false
         */
        get border ( )
        {
            return this._border;
        }

    ////    [ AXIS ]    ////////////////////////////////////

        /**
         * Set axis value
         * @public
         * @function
         * @param           {boolean} value                             Axis; true | false
         */
        set axis ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'axis', value );
        }

        /**
         * Get axis value
         * @readOnly
         * @function
         * @return          {boolean}                                   Axis; true | false
         */
        get axis ( )
        {
            return this._axis;
        }

    ////    [ COORDINATES ]     ////////////////////////////

        /**
         * Set coordinates value
         * @public
         * @function
         * @param           {boolean} value                             Coordinates; true | false
         */
        set coordinates ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'coordinates', value );
        }

        /**
         * Get coordinates value
         * @readOnly
         * @function
         * @return          {boolean}                                   Coordinates; true | false
         */
        get coordinates ( )
        {
            return this._coordinates;
        }

    ////    [ CONTROL POINTS ]  ////////////////////////////

        /**
         * Set control points value
         * @public
         * @function
         * @param           {boolean} value                             Control points; true | false
         */
        set controlPoints ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'controlPoints', value );
        }

        /**
         * Get control points value
         * @readOnly
         * @function
         * @return          {boolean}                                   Control points; true | false
         */
        get controlPoints ( )
        {
            return this._controlPoints;
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link UTILITIES.set.all}
         */
        _setAll ( ) { }
}
