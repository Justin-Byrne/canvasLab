/**
 * @class           {Object} Aspect                             Aspect dimensions of associated object
 * @property        {number} [width=0]                          Width
 * @property        {number} [height=0]                         Height
 */
class Aspect
{
    _width  = 0;
    _height = 0;

    /**
     * Create an aspect
     * @param           {number} width                              Width of aspect
     * @param           {number} height                             Height of aspect
     */
    constructor ( width, height )
    {
        this.width  = width;
        this.height = height;
    }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width
         * @public
         * @name width
         * @function
         * @param           {number} value                              Width value
         */
        set width ( value )
        {
            this._width = ( typeof value === 'number' && value > 0 ) ? value : this._width;
        }

        /**
         * Get width
         * @readOnly
         * @name width
         * @function
         * @return          {number}                                    Width value
         */
        get width ( )
        {
            return this._width;
        }

    ////    [ HEIGHT ]  ////////////////////////////////////

        /**
         * Set height
         * @public
         * @name height
         * @function
         * @param           {number} value                              Height value
         */
        set height ( value )
        {
            this._height = ( typeof value === 'number' && value > 0 ) ? value : this._height;
        }

        /**
         * Get height
         * @readOnly
         * @name height
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this._height;
        }

    ////    & EXTEND &   ///////////////////////////////////

        /**
         * Get center of height
         * @readOnly
         * @name heightCenter
         * @function
         * @return          {number}                                    Center of height
         */
        get heightCenter ( )
        {
            return this.height / 2;
        }

        /**
         * Get center of width
         * @readOnly
         * @name widthCenter
         * @function
         * @return          {number}                                    Center of with
         */
        get widthCenter ( )
        {
            return this.width / 2;
        }

        /**
         * Get center of aspect
         * @readOnly
         * @name center
         * @function
         * @return              {Point}                                 Center point of this aspect
         */
        get center ( )
        {
            return new Point ( this.widthCenter, this.heightCenter );
        }
}
