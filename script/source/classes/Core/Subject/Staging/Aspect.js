/**
 * @class           {Object} Aspect                             Aspect dimensions of associated object
 * @property        {number} [width=0]                          Width
 * @property        {number} [height=0]                         Height
 */
class Aspect
{
    _width  = 0;
    _height = 0;

    #offset = new Point;

    /**
     * Create an aspect
     * @param           {number} width                              Width of aspect
     * @param           {number} height                             Height of aspect
     */
    constructor ( width, height )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint = VALIDATION.isPoint;

        this.width  = width;
        this.height = height;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ WIDTH ]    /////////////////////

            /**
             * Set width
             * @public
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
             * @function
             * @return          {number}                                    Width value
             */
            get width ( )
            {
                return this._width;
            }

        ////    [ HEIGHT ]    ////////////////////

            /**
             * Set height
             * @public
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
             * @function
             * @return          {number}                                    Height value
             */
            get height ( )
            {
                return this._height;
            }

        ////    [ OFFSET ]    ////////////////////

            /**
             * Get offset
             * @readOnly
             * @function
             * @return          {Point}                                     Aspect offset
             */
            get offset ( )
            {
                return this.#offset;
            }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Get center of aspect
         * @readOnly
         * @function
         * @return              {Point}                                 Center point of this aspect
         */
        get center ( )
        {
            let _point = new Point ( this.widthCenter, this.heightCenter );

            return _point;
        }

        /**
         * Get center of height
         * @readOnly
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
         * @function
         * @return          {number}                                    Center of with
         */
        get widthCenter ( )
        {
            return this.width / 2;
        }
}
