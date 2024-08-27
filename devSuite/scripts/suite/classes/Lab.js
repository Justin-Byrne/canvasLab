/**
 * @class           {Object} Lab                        Lab with ace-editor
 * @property        {Object} editor                     Primary ace-editor object
 */
class Lab
{
    _editor = undefined;

    constructor ( ) { }

    ////    [ EDITOR ]    //////////////////////////////////////////////////////////////////////////

        /**
         * Sets editor
         * @public
         * @function
         * @param           {Object} editor                     Primary ace-editor object
         */
        set editor ( editor )
        {
            this._editor = ( typeof editor === 'object' ) ? editor : this._editor;
        }

        /**
         * Gets editor
         * @public
         * @function
         * @return          {Object}                            Primary ace-editor object
         */
        get editor ( )
        {
            return this._editor;
        }

    ////    GETTERS    /////////////////////////////////////////////////////////////////////////

        /**
         * Returns positions of bounding characters within the ace-editor
         * @private
         * @function
         * @param           {Array<string>} characters          Bounding characters
         * @param           {string}        data                Data to parse
         * @param           {number}        position            Cursor position; from ace-editor
         * @return          {Object}                            Bounding character's starting & ending position(s)
         */
        _getBoundingCharactersPositions ( characters, data, position )
        {
            return new Object ( { start: data.indexOf ( characters [ 0 ] ) + 1, end: data.indexOf ( characters [ 1 ] ) } );
        }

        /**
         * Returns a new color-picker object
         * @private
         * @function
         * @param           {string} id                         Element id
         * @return          {Object}                            Color-picker object
         */
        _getColorPicker ( id )
        {
            let _button  = document.getElementById ( id );

            let _options =
            {
                parent:         _button,                    // Which element the picker should be attached to.
                popup:          'top',                      // If the picker is used as a popup, where to place it relative to the parent. false to add the picker as a normal child element of the parent.
                template:       undefined,                  // Custom HTML string from which to build the picker. See /src/picker.pug for required elements and class names.
                layout:         undefined,                  // Suffix of a custom "layout_..." CSS class to handle the overall arrangement of the picker elements.
                alpha:          true,                       // Whether to enable adjusting the alpha channel.
                editor:         true,                       // Whether to show a text field for color value editing.
                editorFormat:   'rgb',                      // How to display the selected color in the text field (the text field still supports input in any format).
                cancelButton:   false,                      // Whether to have a "Cancel" button which closes the popup.
                color:          undefined,                  // Initial color for the picker.
                onChange:       undefined,                  // (callback) onChange
                onDone:         undefined,                  // (callback) onDone
                onOpen:         undefined,                  // (callback) onOpen
                onClose:        undefined                   // (callback) onClose
            };


            return new Picker ( _options );
        }

        /**
         * Gets menu popup item with the passed 'element' param
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _getMenuPopup ( element )
        {
            let _scripts = devSuite.getScripts ( );

            let _script  = _scripts [ element.srcElement.innerHTML ];


            this.loadScript ( _script );

            this.runCode ( );


            UI.toggle.labMenu ( );
        }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////

        /**
         * Sets color-picker's position within ace-editor
         * @private
         * @function
         */
        _setColorPickerPosition ( )
        {
            let _pickerBox  = document.querySelector ( '.picker_wrapper' );

            let _pickerRect = _pickerBox.getBoundingClientRect ( );

                _pickerBox.style.left = `-${_pickerRect.width}px`;
        }

        /**
         * Sets the font size within ace-editor up (+) or down (-)
         * @private
         * @function
         * @param           {boolean} up                        True (+) || false (-)
         */
        _setFontSize ( up = true )
        {
            let _size = document.getElementById ( this.editor.container.id ).style.fontSize;

                _size = ( up ) ? Number ( _size.replace ( 'px', '' ) ) + 1

                               : Number ( _size.replace ( 'px', '' ) ) - 1;


            document.getElementById ( this.editor.container.id ).style.fontSize = `${_size}px`;
        }

        /**
         * Sets numeric value within ace-editor up (+) or down (-)
         * @private
         * @function
         * @param           {boolean} up                        True (+) || false (-)
         */
        _setNumbericValue ( up = true )
        {
            let _cursor = this.editor.selection.getCursor ( );

            let _range  = this.editor.selection.getRange  ( );

            let _value  = this.editor.getSelectedText     ( );

            let _regex  = new RegExp ( /^\d+$/ );


            if ( _regex.test ( _value ) )
            {
                _value = this._incrementValue ( _value, up );


                this.editor.session.replace    ( _range, `${_value}` );

                this.editor.selection.setRange ( _range );


                this.runCode ( );
            }
        }

        /**
         * Sets the lab's menu items in relation to internal scripts
         * @private
         * @function
         */
        _setMenuPopups (  )
        {
            let _menu    = document.querySelector ( '.menu_popup' );

            let _scripts = devSuite.getScripts ( );

            let _show    = ( _menu.style.display === 'none' );


            if ( _show )

                for ( let _script in _scripts )
                {
                    let _li = document.createElement ( 'li' );

                        _li.innerHTML = _script;


                        _menu.appendChild ( _li );
                }
        }

        /**
         * Sets all event listeners for this object
         * @private
         * @function
         */
        _setEventListeners ( )
        {
            switch ( 'menu' )
            {
                case 'menu':

                    this._setMenuPopups ( );


                    let _menu   = document.querySelector    ( '#input-menu' );

                    let _popups = document.querySelectorAll ( '.menu_popup > li' );


                    _menu.addEventListener ( 'click', ( ) => UI.toggle.labMenu ( ) );


                    for ( let _popup of _popups )

                        _popup.addEventListener ( 'click', ( element ) => this._getMenuPopup ( element ) );

                case 'ruler':

                    let _ruler = document.getElementById ( 'input-ruler' );

                        _ruler.addEventListener ( 'click', ( ) => UI.toggle.ruler ( ) );

                case 'grid':

                    let _grid  = document.getElementById ( 'input-grid' );

                        _grid.addEventListener ( 'click', ( ) => UI.toggle.grid ( ) );

                case 'sidebar':

                    let _sidebar = document.querySelector ( '#input-sidebar' );

                        _sidebar.addEventListener ( 'click', ( ) => UI.toggle.navigation ( ) );

                case 'fullscreen':

                    let _fullscreen = document.querySelector ( '#input-full-screen' );

                        _fullscreen.addEventListener ( 'click', ( ) => UI.toggle.fullscreen ( ) );

                case 'clearConsole':

                    let _clear = document.querySelector ( '#input-clear' );

                        _clear.addEventListener ( 'click', ( ) => UI.toggle.labButton ( _clear ) );

                case 'boolean':

                    let _boolean = document.querySelector ( '#input-boolean' );

                        _boolean.addEventListener ( 'click', ( ) => UI.toggle.boolean ( ) );

                case 'valuePlus':

                    let _valuePlus = document.querySelector ( '#input-value-plus' );

                        _valuePlus.addEventListener ( 'click', ( ) => this._setNumbericValue ( true ) );

                case 'valueMinus':

                    let _minus = document.querySelector ( '#input-value-minus' );

                        _minus.addEventListener ( 'click', ( ) => this._setNumbericValue ( false ) );

                case 'colorPicker':

                    let _colorPicker = this._getColorPicker ( 'input-color-picker' );

                        _colorPicker.onOpen   = (       ) => this._setColorPickerPosition ( );

                        _colorPicker.onChange = ( color ) => this._swapRgbValue ( color );

                case 'fontPlus':

                    let _fontPlus = document.querySelector ( '#input-font-plus' );

                        _fontPlus.addEventListener ( 'click', ( ) => this._setFontSize ( true ) );

                case 'fontMinus':

                    let _fontMinus = document.querySelector ( '#input-font-minus' );

                        _fontMinus.addEventListener ( 'click', ( ) => this._setFontSize ( false ) );

                case 'wordWrap':

                    let _wordWrap = document.querySelector ( '#input-word-wrap' );

                        _wordWrap.addEventListener ( 'click', ( ) =>
                            {
                                let _wrapMode = this.editor.session.getUseWrapMode ( );


                                ( _wrapMode ) ? this.editor.session.setUseWrapMode ( false )

                                              : this.editor.session.setUseWrapMode ( true  );


                                UI.toggle.labButton ( _wordWrap );
                            } );

                case 'lock':

                    let _lock = document.querySelector ( '#input-lock' );

                    let _icon = _lock.querySelector    ( '.lock' );

                        _icon.addEventListener ( 'click', ( ) =>
                            {
                                let _readOnly = this.editor.getReadOnly ( );


                                ( _readOnly ) ? this.editor.setReadOnly ( false )

                                              : this.editor.setReadOnly ( true  );


                                ( _readOnly ) ? _icon.style.content = 'url("images/svg/General/unlock.svg")'

                                              : _icon.style.content = 'url("images/svg/General/lock.svg")';


                                UI.toggle.labButton ( _lock );
                            } );

                case 'download':

                    let _download = document.querySelector ( '#input-download' );

                        _download.addEventListener ( 'click', ( ) => UI.toggle.download ( ) );

                case 'output':

                    let _row    = document.querySelector ( '#output-row'    ).querySelector ( '.value' );

                    let _column = document.querySelector ( '#output-column' ).querySelector ( '.value' );

                    let _lines  = document.querySelector ( '#output-lines'  ).querySelector ( '.value' );


                    this.editor.session.selection.on ( 'changeCursor', ( event ) =>
                        {
                            let _cursor = this.editor.selection.getCursor ( );

                                _row.innerHTML    = _cursor.row;

                                _column.innerHTML = _cursor.column;

                                _lines.innerHTML  = this.editor.session.getLength ( );
                        } );

                case 'keyboardCommands':

                    Mousetrap.bind ( 'space',     ( ) => this.runCode ( )          );

                    Mousetrap.bind ( 'n',         ( ) => UI.toggle.navigation  ( ) );

                    Mousetrap.bind ( 'f',         ( ) => UI.toggle.fullscreen  ( ) );

                    Mousetrap.bind ( 'g',         ( ) => UI.toggle.grid        ( ) );

                    Mousetrap.bind ( 'r',         ( ) => UI.toggle.ruler       ( ) );

                    Mousetrap.bind ( 'd',         ( ) => UI.toggle.download    ( ) );
            }
        }

        /**
         * Sets the lab's canvas & ruler dimensions
         * @private
         * @async
         * @function
         */
        async setCanvasSize ( )
        {
            let _canvas      = document.querySelector ( '#canvas' );

            let _wrapper     = document.querySelector ( '#lab > div:nth-child(1)' );

            let _ruler       = document.querySelector ( '#ruler' );

            let _rulerWidth  = _ruler.querySelector   ( 'span.width' );

            let _rulerHeight = _ruler.querySelector   ( 'span.height' );


                _rulerWidth.innerHTML  = _canvas.width  = _wrapper.clientWidth;

                _rulerHeight.innerHTML = _canvas.height = _wrapper.clientHeight;


                _ruler.style.width   = `${_wrapper.clientWidth}px`;

                _ruler.style.opacity = 1;


            TOOL.delay ( 1000 ).then ( ( ) => document.querySelector ( '#ruler' ).style.opacity = 0 );
        }

        /**
         * Sets grid overlay
         * @public
         * @function
         */
        setGrid ( )
        {
            let _existing = document.getElementById ( 'grid' );


            if ( _existing )

                _existing.remove ( );

            ////    INSERT GRID    /////////////////////////////////////////////

                let _parent      = document.querySelector ( '#lab > div:nth-child(1)' );

                let _canvas      = document.querySelector ( '#canvas' );

                let _grid        = document.createElement ( 'canvas' );


                [ _grid.id, _grid.width, _grid.height ] = [ 'grid', _canvas.clientWidth, _canvas.clientHeight ];


                    _parent.insertBefore ( _grid, _canvas );

            ////    DRAW GRID    ///////////////////////////////////////////////

                let _multiplier      = 20;

                let _center          = { x: _grid.clientWidth / 2, y: _grid.clientHeight / 2 }

                let _centerLines     = new Lines;

                let _horizontalLines = new Lines;

                let _verticalLines   = new Lines;

            ////    CENTER LINES    ////////////////////////////////////////////

                _centerLines.push ( new Line ( { x: _center.x, y: 0         }, { x: _center.x,         y: _grid.clientHeight } ) );

                _centerLines.push ( new Line ( { x: 0,         y: _center.y }, { x: _grid.clientWidth, y: _center.y          } ) );

            ////    HORIZONTAL LINES    ////////////////////////////////////////

                let _y = _center.y - _multiplier;


                while ( _y > 0 )
                {
                    _horizontalLines.push ( new Line ( { x: 0, y: _y }, { x: _grid.clientWidth, y: _y } ) )

                    _y = _y - _multiplier;
                }


                    _y = _center.y + _multiplier;

                while ( _y < _grid.height )
                {
                    _horizontalLines.push ( new Line ( { x: 0, y: _y }, { x: _grid.clientWidth, y: _y } ) );

                    _y = _y + _multiplier;
                }

            ////    VERTICAL LINES    //////////////////////////////////////////

                let _x = _center.x - _multiplier;


                while ( _x > 0 )
                {
                    _verticalLines.push ( new Line ( { x: _x, y: 0 }, { x: _x, y: _grid.clientHeight } ) );

                    _x = _x - _multiplier;
                }


                    _x = _center.x + _multiplier;

                while ( _x < _grid.width )
                {
                    _verticalLines.push ( new Line ( { x: _x, y: 0 }, { x: _x, y: _grid.clientHeight } ) );

                    _x = _x + _multiplier;
                }

            ////    DRAW    ////////////////////////////////////////////////////

                _centerLines.stroke.color = new Rgb ( 255, 0, 0, 0.8 );

                _centerLines.draw ( 'grid' );


                _horizontalLines.stroke.color = new Rgb ( 0, 0, 0, 0.25 );

                _horizontalLines.draw ( 'grid' );


                _verticalLines.stroke.color = new Rgb ( 0, 0, 0, 0.25 );

                _verticalLines.draw ( 'grid' );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Cleans code of enumerators for ace-editor
         * @private
         * @function
         * @param           {Function} script                   JavaScript function; for ace-editor only
         * @return          {string}                            Function as a string
         */
        _cleanCode ( script )
        {
            let _code   = UI.clean.script ( script ).split ( /\n/g );

                _code   = _code.slice ( 1 );

            let _indent = 12;


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].substring ( _indent, _code [ _line ].length );


            return _code.join ( '\n' );
        }

        /**
         * Generates a downloadable file & initiates that download
         * @private
         * @function
         * @param           {File} file                         File to download
         */
        _download ( file )
        {
            let _link = document.createElement ( 'a' );

            let _url  = window.URL.createObjectURL ( file );

                _link.href      = _url;

                _link.download  = file.name


            document.body.appendChild  ( _link );


                _link.click ( );


            document.body.removeChild  ( _link );

            window.URL.revokeObjectURL ( _url  );
        }

        /**
         * Increment the value passed up (+) or down (-)
         * @private
         * @function
         * @param           {string|number} value               Value to increment
         * @param           {boolean}       up                  True (+) || false (-)
         * @return          {number}                            Incremented value
         */
        _increment ( value, up )
        {
            return ( up ) ? Number ( value ) + 1 : Number ( value ) - 1;
        }

        /**
         * Increments a numeric selection from ace-editor up (+) or down (-)
         * @private
         * @function
         * @param           {string}  value                     Value from ace-editor
         * @param           {boolean} up                        True (+) || false (-)
         * @return          {string}                            Incremented value
         */
        _incrementValue ( value, up )
        {
            let _result = undefined;


            let [ _regexMatch, _regexReplace, _replaceValue ] = ( up ) ? [ new RegExp ( /[9]+/g ), new RegExp ( /[9]/g ), 0 ]

                                                                       : [ new RegExp ( /[0]+/g ), new RegExp ( /[0]/g ), 9 ];

            let _match      = value.match ( _regexMatch  );

            let _length     = value.length;

            let _regexAlpha = new RegExp ( /[^\d]/g );


            if ( _regexAlpha.test ( value ) )

                console.warn ( '[ lab-station ]: non-digit characters within selection !' );

            else

                _result = ( _match ) ? ( value.length === _match [ 0 ].length ) // Increment or Replace

                                           ? value.replace ( _regexReplace, _replaceValue )

                                           : this._increment ( value, up )

                                     : this._increment ( value, up );


            _result = ( String ( _result ).length < _length )                   // Pad: [0]+[1-9] using the original value's length

                          ? this._padZeros ( _result, _length )

                          : `${_result}`;


            return _result;
        }

        /**
         * Pad a string with a specified amount of zeros
         * @private
         * @function
         * @param           {string|number} value               Value to pad
         * @param           {number}        amount              Amount to pad
         * @return          {string}                            Padded amount
         */
        _padZeros ( value, amount )
        {
            return String ( value ).padStart ( amount, '0' );
        }

        /**
         * Swap rgb values between color-picker and ace-editor
         * @private
         * @function
         * @param           {string} color                      Rgb color value from color-picker
         */
        _swapRgbValue ( color )
        {
            let _rgba     = ` ${color._rgba [ 0 ]}, ${color._rgba [ 1 ]}, ${color._rgba [ 2 ]}, ${color._rgba [ 3 ]} `;

            let _regex    = new RegExp ( /\d{1,3},\s\d{1,3},\s\d{1,3}(,\s\d)?/ );


            let _cursor   = this.editor.selection.getCursor ( );

            let _line     = this.editor.session.getLine ( _cursor.row );


            let _position = this._getBoundingCharactersPositions ( [ "(", ")" ], _line, _cursor.column );

            let _range    = new ace.Range ( _cursor.row, _position.start, _cursor.row, _position.end );

            let _text     = this.editor.session.getTextRange ( _range ).trim ( );


            if ( _regex.test ( _text ) )
            {
                _range = new ace.Range ( _cursor.row, 0, _cursor.row, _line.length   );

                _line  = _line.subStringRange ( _position.start, _position.end, _rgba );


                this.editor.session.replace ( _range, _line );

                this.editor.selection.moveCursorTo ( _cursor.row, _position.start + 1 );


                this.runCode ( );
            }
            else

                console.warn ( '[ lab-station ]: no rgb value is present within selection !' );
        }

        /**
         * Loads a script within ace-editor
         * @public
         * @function
         * @param           {function} script                   Arrow function containing script
         */
        loadScript ( script )
        {
            let _id = "ace-editor";

            ////    CONTROL PANEL    ///////////////////////////////////////////

            let _controlPanel       = document.querySelector ( '#control-panel' );

            let _controlPanelHeight = window.getComputedStyle ( _controlPanel ).height;

                _controlPanelHeight = Number ( _controlPanelHeight.replace ( 'px', '' ) );

            ////    EDITOR ELEMENT    //////////////////////////////////////////

            let _editorElement              = document.getElementById ( _id );

                _editorElement.style.height = `${window.innerHeight - _controlPanelHeight}px`;

            ////    EDITOR    //////////////////////////////////////////////////

            this.editor = ace.edit ( _id );

            this.editor.setValue ( this._cleanCode ( script ) );

            this.editor.setTheme ( "ace/theme/tomorrow_night" );

            this.editor.session.setMode ( "ace/mode/javascript" );

            this.editor.session.setTabSize ( 4 );

            this.editor.session.setUseSoftTabs ( true );

            this.editor.session.setUseWrapMode ( false );

            this.editor.setOptions (
                {
                    autoScrollEditorIntoView:   true,
                    copyWithEmptySelection:     true,
                    mergeUndoDeltas:            'always',
                    enableMultiselect:          true,
                    fadeFoldWidgets:            true
                } );

            this.editor.commands.addCommand (
                {
                    name:    'run_on_save',
                    bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
                    exec:    ( ) => devSuite.runLabStationCode ( )
                } );

            this.editor.commands.addCommand (
                {
                    name:    'multi_select',
                    bindKey: { win: 'Ctrl-D', mac: 'Command-D' },
                    exec:    ( editor ) => editor.commands.byName.selectMoreAfter.exec ( editor )
                } );

            this.editor.commands.addCommand (
                {
                    name:    'fold_code',
                    bindKey: { win: 'Ctrl-;', mac: 'Command-;' },
                    exec:    ( editor ) => editor.commands.byName.foldall.exec ( editor )
                } );
        }

        /**
         * Executes lab code from editor
         * @public
         * @function
         */
        runCode ( )
        {
            let _code    = this.editor.getValue ( );

            let _canvas  = document.querySelector ( '#canvas' );

            let _context = canvas.getContext ( '2d' );

                _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

            let _clear   = document.querySelector ( '#input-clear' );


            if ( TOOL.isActive ( _clear ) )

                console.clear ( );


            eval ( _code );
        }

        /**
         * Returns an object of lab-station specific scripts
         * @public
         * @function
         */
        get scripts ( )
        {
            return this._scripts;
        }

    ////    INITIALIZER    /////////////////////////////////////////////////////////////////////////

        /**
         * Sets lab & ace-editor
         * @public
         * @function
         * @param           {function} script                   Arrow function containing script
         */
        init ( script )
        {
            if ( script )

                this.loadScript ( script );


            this._setEventListeners ( );
        }
}
