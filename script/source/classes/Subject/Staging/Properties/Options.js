/**
 * @class           {Object}  Options                           Options for shapes, lines, and groups
 * @property        {boolean} [shadow=false]                    Show shadow
 * @property        {boolean} [border=false]                    Show border
 * @property        {boolean} [axis=false]                      Show axis
 * @property        {boolean} [points=false]                    Show points
 * @property        {boolean} [anchor=false]                    Show anchor
 * @property        {boolean} [coordinates=false]               Show coordinates
 * @property        {boolean} [controlPoints=false]             Show control points
 * @property        {Object}  master                            Master object to reference
 */
class Options
{
    _shadow        = false;
    _border        = false;
    _axis          = false;
    _points        = false;
    _anchor        = false;
    _coordinates   = false;
    _controlPoints = false;

    _master = undefined;

    /**
     * Create an options object
     * @param           {boolean} shadow                            Show shadow
     * @param           {boolean} border                            Show border
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} points                            Show points
     * @param           {boolean} anchor                            Show anchor
     * @param           {boolean} coordinates                       Show coordinates
     * @param           {boolean} controlPoints                     Show control points
     */
    constructor ( shadow, border, axis, points, anchor, coordinates, controlPoints )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;

        this.shadow        = shadow;
        this.border        = border;
        this.axis          = axis;
        this.points        = points;
        this.anchor        = anchor;
        this.coordinates   = coordinates;
        this.controlPoints = controlPoints;
    }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Set shadow value
         * @public
         * @name shadow
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
         * @name shadow
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
         * @name border
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
         * @name border
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
         * @name axis
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
         * @name axis
         * @function
         * @return          {boolean}                                   Axis; true | false
         */
        get axis ( )
        {
            return this._axis;
        }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor value
         * @public
         * @name anchor
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
         * @name anchor
         * @function
         * @return          {boolean}                                   Anchor; true | false
         */
        get anchor ( )
        {
            return this._anchor;
        }

    ////    [ COORDINATES ]     ////////////////////////////

        /**
         * Set coordinates value
         * @public
         * @name coordinates
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
         * @name coordinates
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
         * @name controlPoints
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
         * @name controlPoints
         * @function
         * @return          {boolean}                                   Control points; true | false
         */
        get controlPoints ( )
        {
            return this._controlPoints;
        }

    ////    [ MASTER ]  ////////////////////////////////////

        /**
         * Set master object
         * @public
         * @name master
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
         * @name master
         * @function
         * @return          {Object}                                    CanvasLab Object
         */
        get master ( )
        {
            return this._master;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isCanvasLabObject ( ) { }
}
