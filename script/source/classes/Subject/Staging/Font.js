/**
 * @class           {Object} Font                               Font base class for text objects
 * @property        {string} type                               Font type or face; typography name
 * @property        {number} [size=24]                          Size of font; in pixels
 * @property        {string} [weight='normal']                  Weight of font
 * @property        {number} maxWidth                           Font's maximum width
 * @property        {Point}  offset                             Point offset coordinates
 */
class Font
{
    _type     = undefined;
    _size     = 24;
    _weight   = 'normal';
    _maxWidth = undefined;
    _offset   = new Point;

    #_options = {  weight: [ 'normal', 'bold', 'italic' ]  }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set font type
         * @public
         * @name type
         * @function
         * @param           {string} value                              Type face; typography name
         */
        set type ( value )
        {
            this._type = ( typeof value === 'string' ) ? value : this._type;


            if ( value === undefined )

                if ( window.canvaslab instanceof canvasLab )
                {
                    let _regex = /(\w+(\s))?(?<size>\d+)px\s(?<type>\w.+)/;

                    let _font  = canvaslab.font;


                    this._type = ( _regex.test ( _font ) )

                                     ? _regex.exec ( _font ).groups [ 'type' ]

                                     : this._type;
                }
                else

                    console.warn ( 'canvaslab is not instantiated !' );
        }

        /**
         * Get type
         * @readOnly
         * @name type
         * @function
         * @return          {string}                                    Type face; typography name
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SIZE ]    ////////////////////////////////////

        /**
         * Set font size
         * @public
         * @name size
         * @function
         * @param           {number} value                              Font size
         */
        set size ( value )
        {
            this._size = ( typeof value === 'number'  ) ? value : this._size;
        }

        /**
         * Get font size
         * @readOnly
         * @name size
         * @function
         * @return          {number}                                    Font size
         */
        get size ( )
        {
            return this._size;
        }

    ////    [ WEIGHT ]  ////////////////////////////////////

        /**
         * Set font weight
         * @public
         * @name weight
         * @function
         * @param           {number} value                              Font weight
         */
        set weight ( value )
        {
            let _currentValue = this._weight;


            for ( let _option of this.#_options.weight )
            {
                this._weight = ( value == _option ) ? value : this._weight;


                if ( this._weight != _currentValue ) break;
            }
        }

        /**
         * Get font weight
         * @readOnly
         * @name weight
         * @function
         * @return          {number}                                    Font weight
         */
        get weight ( )
        {
            return this._weight;
        }

    ////    [ MAXWIDTH ]    ////////////////////////////////

        /**
         * Set font's max width
         * @public
         * @name maxWidth
         * @function
         * @param           {number} value                              Max width
         */
        set maxWidth ( value )
        {
            this._maxWidth = ( typeof value === 'number' ) ? value : this._maxWidth;
        }

        /**
         * Get font's max width
         * @readOnly
         * @name maxWidth
         * @function
         * @return          {number}                                    Max width
         */
        get maxWidth ( )
        {
            return this._maxWidth;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Get font's offset
         * @public
         * @name offset
         * @function
         * @return          {Point}                                     Font's offset; ( x, y )
         */
        get offset ( )
        {
            return this._offset;
        }

    ////    & EXTEND &   ///////////////////////////////////

        /**
         * Set font
         * @public
         * @name font
         * @function
         * @param           {string} value                              CSS style font property syntax
         */
        set font ( value )
        {
            this.font = ( /(\w+(-\w+?)?|[1-9][0][0]?)(\s?)\d{1,3}px\s\w.+/.test ( value ) ) ? value : this.font;
        }

        /**
         * Get font
         * @readOnly
         * @name font
         * @function
         * @return          {string}                                    CSS style font property syntax
         */
        get font ( )
        {
            return `${this._weight} ${this._size}px ${this._type}`;
        }
}
