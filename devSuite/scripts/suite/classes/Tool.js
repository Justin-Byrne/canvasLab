/**
 * @class           {Object} Tool                       General helper class
 * @property        {Object} copy                       Standard HTML card template
 */
class Tool
{
    constructor ( ) { }

    _config =
    {
        minFontSize:            undefined,
        maxDivisionHeight:      undefined,
        previousDivisionHeight: undefined,
    }

    _get =
    {
        /**
         * Returns CSS font size of HTML element
         * @private
         * @function
         * @param           {HTMLElement} element           HTML DOM Element
         * @return          {string}                        CSS font size
         */
        fontSize ( element )
        {
            return this.numberFromPx ( window.getComputedStyle ( element ).fontSize );
        },

        /**
         * Returns CSS pixel value as number
         * @private
         * @function
         * @param           {string} value                  CSS pixel value
         * @return          {number}                        Number
         */
        numberFromPx ( value )
        {
            return Number ( value.replace ( 'px', '' ) );
        },

        /**
         * Returns the minimum height of a text element
         * @private
         * @function
         * @param           {HTMLElement} element           HTML DOM element
         * @return          {number}                        Minimum height
         */
        textMinHeight ( element )
        {
            let _originalText = element.innerHTML.replaceAll ( '\n', '' ).replaceAll ( '\t', '' );


            element.innerHTML = 'A';


            let _height       = element.clientHeight


            element.innerHTML = _originalText;


            return _height;
        }
    }

    ////    VALIDATORS    //////////////////////////////////////////////////////

        /**
         * Determine whether the passed element is active
         * @public
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         * @return          {boolean}                           True || False
         */
        isActive ( element )
        {
            return ( element.getAttribute ( 'data-bs-active' ) === 'true' );
        }

        /**
         * Determine whether the passed value is an 'Object' canvasLab category
         * @public
         * @function
         * @param           {string} value                      Object, i.e.: 'Line', 'Circle', 'Rectangle', etc...
         * @return          {boolean}                           True || False
         */
        isCanvasLabObject ( value )
        {
            return [ 'Line', 'Lines', 'Circle', 'Circles', 'Ellipse', 'Ellipses', 'Rectangle', 'Rectangles', 'RoundedRectangle', 'RoundedRectangles', 'Text', 'Texts', 'cImage', 'Group' ].includes ( value );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

            /**
             * Increments font size by 1px
             * @private
             * @function
             * @param           {HTMLElement} element           HTML DOM Element
             * @param           {boolean}     up                Increment up or down; True || False
             */
            _incrementFontSize ( element, up = false )
            {
                this._config.minFontSize = this._get.fontSize ( element );

                this._config.minFontSize = ( up ) ? this._config.minFontSize + 1 : this._config.minFontSize - 1;


                element.style.fontSize = `${this._config.minFontSize}px`;
            }

        ////    PUBLIC    //////////////////////////////////

            /**
             * Copy code to clipboard
             * @public
             * @async
             * @function
             */
            async copyCode ( )
            {
                let _code = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


                try
                {
                    await navigator.clipboard.writeText ( _code );

                    console.info ( 'Content copied to clipboard' );
                }
                catch ( err )
                {
                    console.error ( 'Failed to copy: ', err );
                }


                UI.alert ( 'Copied code !', 'success' );

                TOOL.delay ( 1000 ).then ( ( ) => document.querySelector ( '#copiedAlert' ).children [ 0 ].remove ( ) );
            }

            /**
             * Returns a copied object
             * @public
             * @function
             * @param           {Object} object                     Object to copy
             * @return          {Object}                            Copied object
             */
            copyObjectWithKey ( object )
            {
                let _copyFunction = ( func ) => func;

                let _result       = ( PAGE.handler ) ? JSON.parse ( JSON.stringify ( object [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] ) )

                                                     : JSON.parse ( JSON.stringify ( object [ PAGE.group ] [ PAGE.type ] ) );


                if ( PAGE.handler )

                    for ( let _entry in object [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] )

                        _result [ _entry ].code = _copyFunction ( object [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] [ _entry ].code );

                else

                    for ( let _entry in object [ PAGE.group ] [ PAGE.type ] )

                        _result [ _entry ].code = _copyFunction ( object [ PAGE.group ] [ PAGE.type ] [ _entry ].code );


                return _result;
            }

            /**
             * Simple programmatic delay
             * @public
             * @function
             * @param           {number} time                       Time to delay
             * @return          {Promise}                           An async promise
             */
            delay ( time )
            {
                return new Promise ( resolve => setTimeout ( resolve, time ) );
            }

            /**
             * Adjusts group of element font-sizes, with that groups min font-size
             * @private
             * @function
             * @param           {string} selector               CSS selector
             */
            scaleText ( selector )
            {
                let _textBoxes  = document.querySelectorAll ( selector );

                let _textBoxOne = _textBoxes [ 0 ];

                let _minHeight  = this._get.textMinHeight ( _textBoxOne );


                for ( let _textBox of _textBoxes )              // Check: for wrapped text boxes via element.clientHeight

                    while ( _textBox.clientHeight > _minHeight )

                        this._incrementFontSize ( _textBox );


                for ( let _textBox of _textBoxes )              // Resize: all text boxes to minimum font size

                    _textBox.style.fontSize = `${this._config.minFontSize}px`;


                for ( let _textBox of _textBoxes )              // Check: that all _textBox.clientHeights are equal
                {
                    if ( this._config.previousDivisionHeight === undefined )
                    {
                        this._config.previousDivisionHeight = _textBox.clientHeight;

                        continue;
                    }
                    else

                        if ( _textBox.clientHeight > this._config.previousDivisionHeight )

                            this.scaleText ( selector );


                    this._config.previousDivisionHeight = _textBox.clientHeight;
                }
            }
}
