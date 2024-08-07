/**
 * @class           {Object}  Options                           Options for collections
 * @property        {boolean} [anchor=false]                    Show anchor
 * @property        {boolean} [axis=false]                      Show axis
 * @property        {boolean} [border=false]                    Show border
 * @property        {boolean} [coordinates=false]               Show coordinates
 * @property        {boolean} [controlPoints=false]             Show control points
 * @property        {boolean} [points=false]                    Show points
 * @property        {boolean} [shadow=false]                    Show shadow
 * @property        {Object}  master                            Master object to reference
 */
class Options
{
    _anchor        = false;
    _axis          = false;
    _border        = false;
    _coordinates   = false;
    _controlPoints = false;
    _points        = false;
    _shadow        = false;

    _master = undefined;

    /**
     * Create an options object
     * @param           {boolean} anchor                            Show anchor
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} border                            Show border
     * @param           {boolean} coordinates                       Show coordinates
     * @param           {boolean} controlPoints                     Show control points
     * @param           {boolean} points                            Show points
     * @param           {boolean} shadow                            Show shadow
     */
    constructor ( anchor, axis, border, coordinates, controlPoints, points, shadow )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;

        this.axis          = axis;
        this.anchor        = anchor;
        this.border        = border;
        this.coordinates   = coordinates;
        this.controlPoints = controlPoints;
        this.points        = points;
        this.shadow        = shadow;
    }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor value
         * @public
         * @function
         * @param           {boolean} value                             Anchor; true | false
         */
        set anchor ( value )
        {
            this._anchor = ( typeof value == 'boolean' ) ? value : this._anchor;
        }

        /**
         * Get anchor value
         * @readOnly
         * @function
         * @return          {boolean}                                   Anchor; true | false
         */
        get anchor ( )
        {
            return this._anchor;
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
            this._axis = ( typeof value === 'boolean' ) ? value : this._axis;
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

    ////    [ BORDER ]  ////////////////////////////////////

        /**
         * Set border value
         * @public
         * @function
         * @param           {boolean} value                             Border; true | false
         */
        set border ( value )
        {
            this._border = ( typeof value === 'boolean' ) ? value : this._border;
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

    ////    [ COORDINATES ]     ////////////////////////////

        /**
         * Set coordinates value
         * @public
         * @function
         * @param           {boolean} value                             Coordinates; true | false
         */
        set coordinates ( value )
        {
            this._coordinates = ( typeof value === 'boolean' ) ? value : this._coordinates;
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
            this._controlPoints = ( typeof value === 'boolean' ) ? value : this._controlPoints;
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

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Set shadow value
         * @public
         * @function
         * @param           {boolean} value                             Shadow; true | false
         */
        set shadow ( value )
        {
            this._shadow = ( typeof value === 'boolean' ) ? value : this._shadow;
        }

        /**
         * Get shadow value
         * @public
         * @function
         * @return          {boolean}                                   Shadow; true | false
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ MASTER ]  ////////////////////////////////////

        /**
         * Set master object
         * @public
         * @function
         * @param           {Object} value                              CanvasLab Object
         */
        set master ( value )
        {
            this._master = ( this._isCanvasLabObject ( value ) ) ? value : this._master;
        }

        /**
         * Get master object
         * @public
         * @function
         * @return          {Object}                                    CanvasLab Object
         */
        get master ( )
        {
            return this._master;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }
}
