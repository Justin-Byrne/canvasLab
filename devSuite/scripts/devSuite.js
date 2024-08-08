// @program: 		devSuite 
// @brief: 			Developer tools for canvasLab drawing framework 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.0.1 
// @license: 		GPL-2.0

"use strict";
 
/**
 * Converts string to title case
 * @public
 * @name toTitleCase
 * @function
 * @param           {string} string                     String to convert
 * @return          {string}                            Title case string
 */
String.prototype.toTitleCase = function ( )
{
    let _titleCase = ( string ) => string.split ( ' ' )
                                         .map   ( ( word ) => word.replace ( word [ 0 ], word [ 0 ].toUpperCase ( ) ) )
                                         .join  ( ' ' );


    if ( this )
    {
        let _string    = this.toString ( ).toLowerCase ( );


        switch ( _string )
        {
            case 'controlpoints':       return 'ControlPoints';

            default:                    return _titleCase ( _string );
        }
    }
};

/**
 * Converts a number into a multi-digit string
 * @public
 * @name to2Digits
 * @function
 * @param           {number} number                     Number
 * @return          {string}                            Multi-digit string
 */
String.prototype.to2Digits = function ( )
{
    return ( Number ( this ) < 10 ) ? '0' + this

                                    : this;
};

/**
 * Substitute a string within a range
 * @public
 * @name subStringRange
 * @function
 * @param           {number} start                      Substitution's starting point
 * @param           {number} end                        Substitution's ending point
 * @param           {string} substring                  Substitution
 * @return          {string}                            String with substitution
 */
String.prototype.subStringRange = function ( start, end, substring )
{
    return this.substring ( 0, start ) + substring + this.substring ( end );
};
 
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

                    Mousetrap.bind ( 'space', ( ) => this.runCode ( ) );

                    Mousetrap.bind ( 'n',     ( ) => UI.toggle.navigation ( ) );

                    Mousetrap.bind ( 'f',     ( ) => UI.toggle.fullscreen ( ) );

                    Mousetrap.bind ( 'g',     ( ) => UI.toggle.grid       ( ) );

                    Mousetrap.bind ( 'r',     ( ) => UI.toggle.ruler      ( ) );

                    Mousetrap.bind ( 'd',     ( ) => UI.toggle.download   ( ) );
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
                } );

            this.editor.commands.addCommand (
                {
                    name:    'run_on_save',
                    bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
                    exec:    ( ) => devSuite.runLabStationCode ( )
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
 
/**
 * @class           {Object} Log                        Log class
 * @property        {string} entries                    Log entries
 */
class Log
{
    _entries = new Array;

    constructor ( )
    {
        this.entry ( 'CREATION' );
    }

    ////    [ PAGE ]    ////////////////////////////////////////////////////////////////////////////

        /**
         * Gets entries
         * @public
         * @function
         * @return          {string}                            Page's entries
         */
        get entries ( )
        {
            return this._entries;
        }

    ////    [ UTILITIES ]    ///////////////////////////////////////////////////////////////////////

        entry ( message )
        {
            let _timestamp = `[ ${this._timestamp ( )} ]`;

            let _entry     = ( typeof message === 'string' ) ? `${_timestamp} => ${message}`

                                                             : _timestamp;


            this._entries.push ( _entry );
        }

        view ( )
        {
            for ( let _entry of this.entries )

                console.log ( _entry );
        }

        _timestamp ( )
        {
            let _date = new Date ( );

            let _time = ( _date.getMonth        ( ) + 1 ) + "/"
                        + _date.getDate         ( ) + "/"
                        + _date.getFullYear     ( ) + " @ "
                        + _date.getHours        ( ) + ":"
                        + _date.getMinutes      ( ) + ":"
                        + _date.getSeconds      ( ) + ":"
                        + _date.getMilliseconds ( );


            return _time;
        }
}
 
/**
 * @class           {Object} Page                       Page for parsing page types
 * @property        {string} type                       Page's type
 * @property        {string} group                      Page's group
 * @property        {string} handler                    Page's handler
 */
class Page
{
    _type    = undefined;
    _group   = undefined;
    _handler = undefined;

    /**
     * Creates a page
     * @property        {HTMLElement} button                HTML DOM Element
     */
    constructor ( button )
    {
        if ( button ) this._setPropertiesBy ( button )
    }

    ////    [ PAGE ]    ////////////////////////////////////////////////////////

        /**
         * Sets type
         * @public
         * @function
         * @param           {string} value                      Page's type
         */
        set type ( value )
        {
            this._type = ( typeof value === 'string' ) ? value : this._type;
        }

        /**
         * Gets type
         * @readOnly
         * @function
         * @return          {string}                            Page's type
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ GROUP ]    ///////////////////////////////////////////////////////

        /**
         * Sets group
         * @public
         * @function
         * @param           {string} value                      Page's group
         */
        set group ( value )
        {
            this._group = ( typeof value === 'string' ) ? value : this._group;
        }

        /**
         * Gets group
         * @readOnly
         * @function
         * @return          {string}                            Page's group
         */
        get group ( )
        {
            return this._group;
        }

    ////    [ HANDLER ]    /////////////////////////////////////////////////////

        /**
         * Sets handler
         * @public
         * @function
         * @param           {string} value                      Page's handler
         */
        set handler ( value )
        {
            this._handler = ( typeof value === 'string' ) ? value : this._handler;
        }

        /**
         * Gets handler
         * @readOnly
         * @function
         * @return          {string}                            Page's handler
         */
        get handler ( )
        {
            return this._handler;
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        /**
         * Sets all properties by the passed 'button' param
         * @private
         * @function
         * @param           {HTMLElement} button                HTML DOM Element
         */
        _setPropertiesBy ( button )
        {
            let _match = button.href.match ( /#(\w+)/g ) [ 0 ];

            let _regex =
            {
                group:   new RegExp ( /(Object|Subject|Plan)/  ),

                handler: new RegExp ( /(Processing|Animation)/ )
            }


            if ( _match || typeof button === 'object' )
            {
                let _button  = _match.replace ( '#', '' );


                this.handler = ( _regex.handler.test ( _button ) ) ? _button.match ( _regex.handler ) [ 0 ].toLowerCase ( ) : this.handler;

                this.group   = _button.match ( _regex.group ) [ 0 ].toLowerCase ( );

                this.type    = ( this.handler ) ? _button.replace ( this.group.toTitleCase ( ), '' ).replace ( this.handler.toTitleCase ( ), '' ).toLowerCase ( ) : _button.replace ( this.group.toTitleCase ( ), '' ).toLowerCase ( );

                this.type    = ( this.type === 'cimage' ) ? 'cImage' : this.type;
            }
        }
}
 
/**
 * @class           {Object} Template                   HTML card template for UI
 * @property        {string} standard                   Standard HTML card template
 * @property        {string} blank                      Blank HTML card template
 */
class Template
{
    _types =
    {
        standard: `<div class="col">

                       <div class="card" id="view_{{index}}" suite-data-code="{{code}}" suite-data-title="{{title}}" onclick="devSuite.toggleCardButton ( event )">

                           <div class="card-header">

                               <div class="card-header-buttons">

                                   <div class="icons">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{childGroup}}/{{childType}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{childType}}" onclick="devSuite.toggleCardButton ( event )">

                                   </div>

                               </div>

                               <div class="card-number">

                                   <span class="close"></span>

                                   <span class="number">{{index}}</span>

                               </div>

                           </div> <!-- .card-header -->

                           <canvas id="canvas_{{index}}"></canvas>

                           <div class="card-body">

                               <div class="title">{{title}}</div>

                               <div class="card-body-buttons">

                                   <span class="icons">

                                       <img src="images/svg/General/lab-bottle.svg" class="lab-bottle" suite-data-index="{{index}}" onclick="devSuite.toggleLab ( event )">

                                       <img src="images/svg/{{easing}}.svg" class="card-icons easing" suite-button-type="easing" suite-data-index="{{index}}" onclick="devSuite.toggleCardButton ( event )">

                                       <span class="wall">&nbsp;</span>

                                       <img src="images/svg/Handler/{{handler}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{handler}}"  onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{group}}/{{type}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{type}}" onclick="devSuite.toggleCardButton ( event )">

                                   </span>

                               </div>

                           </div> <!-- .card-body -->

                       </div>

                    </div>  <!-- .col -->`,

        blank:    `<div class="col blank">

                       <div class="card blank" onclick="devSuite.toggleCardButton ( event )">

                           <span class="plus">+</span>

                       </div>

                   </div>  <!-- .col -->`
    }

    _initializer =
    {
        object:
        {
            Line:       '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Lines:      '{ x: 0, y: 0 }',
            Circle:     '{ x: 154, y: 77 }',
            Circles:    '{ x: 50, y: 10 }',
            Rectangle:  '{ x: 154, y: 77 }',
            Rectangles: '{ x: 50, y: 10 }',
            Text:       '{ x: 154, y: 77 }, \'Text\'',
            Texts:      '{ x: 50, y: 10 }',
            Image:      '\'images/png/moon.png\', { point: new Point ( 154, 65 ), aspect: new Aspect }',
            Group:      '{ x: 20, y: 0 }',
        },
        subject:
        {
            Line:       '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Circle:     '{ x: 154, y: 77 }',
            Rectangle:  '{ x: 154, y: 77 }',
            Text:       '{ x: 154, y: 77 }, \'Text\''
        },
        animation:
        {
            Line:       '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Circle:     '{ x: 154, y: 77 }',
            Rectangle:  '{ x: 154, y: 77 }',
            Text:       '{ x: 154, y: 77 }, \'Text\''
        }
    }

    constructor ( ) { }

    ////    [ STANDARD ]    ////////////////////////////////////////////////////////////////////////

        /**
         * Returns a standard HTML card template
         * @readOnly
         * @function
         * @return          {string}                            HTML card standard template
         */
        get standard ( ) { return this._types.standard; }

    ////    [ BLANK ]    ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns a blank HTML card template
         * @readOnly
         * @function
         * @return          {string}                            HTML card blank template
         */
        get blank ( ) { return this._types.blank; }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns the amount of extra cards to embed
         * @private
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {number}                            Amount of extra cards
         */
        _getBlankCount ( cardObjects )
        {
            let _count     = this._getColumnCount ( );

            let _remainder = cardObjects.length % _count;


            return _count - _remainder;
        }

        /**
         * Returns an Array of extra HTML templates; to align cards
         * @private
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {Array}                             Array of extra HTML templates for each card-object
         */
        _getBlankTemplates ( cardObjects )
        {
            let _cards = [ ];


            let _columns = this._getColumnCount ( );

            let _blanks  = this._getBlankCount  ( cardObjects );


            if ( _columns != _blanks )                      // Blank templates to fill out row of standard templates

                for ( let _i = 0; _i < _blanks; _i++ )

                    _cards.push ( TEMPLATE.blank );


            if ( _blanks % _columns === 0 )                 // Blank templates for next row, from adding new standard templates; @see UI._cardPlus ( )

                for ( let _i = 0; _i < _columns; _i++ )

                    _cards.push ( TEMPLATE.blank );


            return _cards;
        }

        /**
         * Returns rendered HTML for a card-object
         * @private
         * @function
         * @param           {Object} cardObject                 Card-object
         * @param           {string} template                   HTML card template
         * @param           {string} count                      Card-object number
         * @return          {string}                            HTML card template
         */
        _getCodeTemplate ( cardObject, template, count )
        {
            for ( let _entry in cardObject )
            {
                if ( _entry === 'code' )

                    cardObject [ _entry ] = ( PAGE.group === 'plan' ) ? this._modifyPlanCode ( cardObject [ _entry ], count )

                                                                      : this._modifyCode     ( cardObject [ _entry ], count );


                let _regex = new RegExp ( `{{${_entry}}}`, 'g' );


                template = template.replace ( _regex, cardObject [ _entry ] );
            }


            return template;
        }

        /**
         * Returns the amount of columns available per the present resolution
         * @private
         * @function
         * @return          {number}                            Number of columns
         */
        _getColumnCount ( )
        {
            let _count       = 1;

            let _breakpoints = [ 600, 800, 1200, 1500, 1800, 2100, 2600 ];

            let _windowWidth = window.innerWidth;


            for ( let _breakpoint of _breakpoints )
            {
                if ( _windowWidth < _breakpoint )

                    return _count;


                _count++;
            }
        }

        /**
         * Return a template with the appropriate canvasLab images embedded
         * @private
         * @param           {Object} cardObject                 Card-object
         * @param           {string} template                   HTML card template
         */
        _getImages ( cardObject, template )
        {
            this._setImagePaths ( cardObject );


            if ( cardObject.images )

                for ( let _entry in cardObject.images )
                {
                    let _type = cardObject.images [ _entry ];

                        _type = ( _type === 'Cimage' ) ? 'cImage' : _type;


                    switch ( _entry )
                    {
                        case 'easing':      template = template.replace ( /{{easing}}/, _type );                                            break;

                        case 'handler':     template = template.replace ( /{{handler}}/, _type ).replace ( /{{handler}}/, _type );          break;

                        case 'children':

                            for ( let _childType of _type )
                            {
                                let _childGroup = TOOL.isCanvasLabObject ( _childType ) ? 'Object' : 'Subject';

                                template        = template.replace ( /{{childGroup}}/, _childGroup ).replace ( /{{childType}}/, _childType ).replace ( /{{childType}}/, _childType );
                            }

                            break;

                        default:

                            let _group = ( PAGE.group === 'plan' ) ? 'Plan' : TOOL.isCanvasLabObject ( _type ) ? 'Object' : 'Subject';

                            template   = template.replace ( /{{group}}/, _group ).replace ( /{{type}}/, _type ).replace ( /{{type}}/, _type );
                    }
                }


            // If no children, place slash-square symbol
            template = ( ! cardObject.images.children ) ? template.replace ( /{{childGroup}}/, 'General' ).replace ( /{{childType}}/, 'slash-square' ).replace ( /{{childType}}/, 'Base' ) : template;


            // Clean remaining unused image tags
            template = template.replaceAll ( new RegExp ( '<img src="images/svg(/Handler)?/{{[^>]+>', 'g' ), '' );


            return template;
        }

        /**
         * Returns an Array of standard HTML templates for each card-object
         * @private
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {Array}                             Array of standard HTML templates for each card-object
         */
        _getStandardTemplates ( cardObjects )
        {
            let _cards = [ ];


            for ( let _iter in cardObjects )
            {
                let _index      = _iter.to2Digits ( );

                let _cardObject = cardObjects [ _iter ];


                let _template = this.standard.replace ( /{{index}}/g, _index );

                    _template = this._getImages ( _cardObject, _template );


                _cards.push ( this._getCodeTemplate ( _cardObject, _template, _index ) );
            }


            return _cards;
        }

        /**
         * Returns a code string with special variable formatting
         * @private
         * @function
         * @param           {string} code                       Code as a string
         * @param           {number} count                      Card-object number
         * @return          {string}                            Code string with special variable formatting
         */
        _getSpecialVariables ( code, count )
        {
            let _specials = [ '_sequence' ];


            for ( let _special of _specials )
            {
                let _regex = new RegExp ( _special, 'g' );


                if ( _regex.test ( code ) )
                {
                    switch ( _special )
                    {
                        case '_sequence':

                            let _lineIndex = /let\s_sequence[^=]+=/g.exec ( code ).index;

                            let _headCode  = code.substring ( 0, _lineIndex ).trim ( ) + '\n\n';

                            let _temp      = code.match ( /let\s_sequence[^,]+,[^,]+[^}]+}[^}]+}[^\w]+canvaslab[^;]+;/g ) [ 0 ].split ( '\n' );


                            for ( let _index in _temp )

                                _temp [ _index ] = ( _index > 0 ) ? _temp [ _index ].slice ( 4 )

                                                                  : _temp [ _index ]


                            code = _headCode + _temp.join ( '\n' );


                            break;
                    }

                    code = code.replace ( _regex, `${_special}_${count}` );
                }
            }


            return code;
        }

        /**
         * Modifies code to include instantiation expressions & unique variable identifiers
         * @private
         * @function
         * @param           {function} code                     Card-object's function
         * @param           {string}   count                    Number for unique variable identifiers
         * @return          {string}                            Code string
         */
        _modifyCode ( code, count )
        {
            let _code     = UI.clean.code ( code );

            let _class    = UI.getClass ( _code );

            let _variable = `_${_class.toLowerCase ( )}`;

            let _regex    = new RegExp ( _variable, 'g' );

            let _init     = ( PAGE.handler ) ? this._initializer [ PAGE.handler ] [ _class ] : this._initializer [ PAGE.group ] [ _class ];


            switch ( _class )
            {
                case 'Lines':       _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Line ( { x:  60, y: 50 }, { x: 160, y: 100 } ),\n        new Line ( { x: 140, y: 50 }, { x: 240, y: 100 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;     break;

                case 'Circles':     _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Circle ( { x:  60, y: 50 } ),\n        new Circle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                         break;

                case 'Rectangles':  _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Rectangle ( { x:  60, y: 50 } ),\n        new Rectangle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                   break;

                case 'Texts':       _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Text ( { x:  60, y: 50 } ),\n        new Text ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n\n    ${_variable} [ 0 ].text = ${_variable} [ 1 ].text = 'Text';\n${_code}`;                                             break;

                case 'Group':       _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.lines.push (\n        new Line ( { x:  60, y: 50 }, { x: 120, y: 100 } ),\n        new Line ( { x: 140, y: 50 }, { x: 200, y: 100 } )\n    );\n\n     ${_variable}.circles.push (\n        new Circle ( { x:  60, y: 50 } ),\n        new Circle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.rectangles.push (\n        new Rectangle ( { x:  120, y: 100 } ),\n        new Rectangle ( { x: 200, y: 100 } )\n    );\n\n    ${_variable}.texts.push (\n        new Text ( { x:  60, y: 120 } ),\n        new Text ( { x: 200, y: 50 } )\n    );\n\n    ${_variable}.texts [ 0 ].text = ${_variable}.texts [ 1 ].text = 'Text';\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;     break;

                case 'Image':       _code = `let ${_variable} = new cImage ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                     break

                default:            _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                     break
            }


            _code = _code.replace ( _regex, `${_variable}_${count}` );

            _code = this._getSpecialVariables ( _code, count );


            return _code;
        }

        /**
         * Modifies code to include instantiation expressions & unique variable identifiers; for Plans only
         * @private
         * @function
         * @param           {function} code                     Card-object's function
         * @param           {string}   count                    Number for unique variable identifiers
         * @return          {string}                            Code string
         */
        _modifyPlanCode ( code, count )
        {
            let _code  = UI.clean.code ( code );

            let _lines = _code.split ( /\n/ );

            let _regex = ( PAGE.handler === 'animation' ) ? new RegExp ( /_\w+/g )

                                                          : new RegExp ( /_group.plan\s*=\s*new\s*\w+\s\(\s*[^\)]+\)/g );

            for ( let _index in _lines )
            {
                let _line = _lines [ _index ];


                let _match = _line.match ( /_\w+/ );

                    _match = ( _match ) ? _match [ 0 ] : undefined;


                if ( _regex.test ( _line ) )
                {
                    let _matches = _line.match ( /_\w+/g );


                    for ( let _match of _matches )

                        _line = this._modifyVariables ( _line, _match, count );

                }
                else if ( _match )

                    _line = this._modifyVariables ( _line, _match, count );



                _lines [ _index ] = _line;
            }


            _lines = _lines.join ( '\n' );

            _code  = _lines.replace ( /'canvas';/, `'canvas_${count}';` );


            return _code;
        }

        /**
         * Modifies existing variable name with uniquely identified variable name
         * @private
         * @function
         * @param           {string} line                       Line of code to modify
         * @param           {string} variable                   Variable name to modify
         * @param           {string} count                      Number for unique variable identifier
         */
        _modifyVariables ( line, variable, count  )
        {
            let _variable = `${variable}`;

            let _regex = new RegExp ( _variable, 'g' );


            return line.replace ( _regex, `${_variable}_${count}` );
        }

        /**
         * Sets image paths for each card-object passed through the param
         * @private
         * @function
         * @param           {Object} cardObject                 Card-object
         */
        _setImagePaths ( cardObject )
        {
            if ( ! cardObject.images )

                cardObject.images = new Object;


            // Type
            cardObject.images.type = PAGE.type.toTitleCase ( );


            // Handler
            switch ( PAGE.handler )
            {
                case 'animation':

                    let _timing = cardObject.code.toString ( ).match ( /timing: '([^']+)',/ ) [ 1 ];

                    let _match  = _timing.match ( /(In|Out)/g );

                    let _path   = ( _match.length < 2 ) ? _match [ 0 ] : _match [ 0 ] + _match [ 1 ];


                    cardObject.images.easing  = `Handler/${PAGE.handler.toTitleCase ( )}/Ease/${_path}/${_timing}`;

                    cardObject.images.handler = PAGE.handler.toTitleCase ( );

                    break;
            }

            // Children
            if ( cardObject.children )
            {
                cardObject.images.children = new Array;


                for ( let _child of cardObject.children )

                    cardObject.images.children.push ( _child.toTitleCase ( ) );
            }
        }

        /**
         * Returns an Array of standard & extra HTML templates for each card-object
         * @public
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {Array}                             Array of HTML templates for each card-object
         */
        getCards ( cardObjects )
        {
            let _cards = this._getStandardTemplates ( cardObjects );

            let _extra = this._getBlankTemplates    ( cardObjects );


            return _cards.concat ( _extra );
        }
}
 
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

    ////    VALIDATORS    //////////////////////////////////////////////////////////////////////////

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
            return [ 'Line', 'Lines', 'Circle', 'Circles', 'Rectangle', 'Rectangles', 'Text', 'Texts', 'cImage', 'Group' ].includes ( value );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Increments font size by 1px
         * @private
         * @function
         * @param           {HTMLElement} element           HTML DOM Element
         * @param           {boolean}     up                Increment up or down; True | False
         */
        _incrementFontSize ( element, up = false )
        {
            this._config.minFontSize = this._get.fontSize ( element );

            this._config.minFontSize = ( up ) ? this._config.minFontSize + 1 : this._config.minFontSize - 1;


            element.style.fontSize = `${this._config.minFontSize}px`;
        }

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
 
/**
 * @class           {Object} UserInterface              User Interface
 * @property        {Object} toggle                     Toggling functions
 * @property        {Object} clean                      Cleaning functions
 */
class Ui
{
    _toggle =
    {
        /**
         * Adds an additional card to cardObjects; mirroring the last card present
         * @private
         * @function
         * @param           {HTMLEvent} event                   HTML DOM event
         */
        _cardPlus ( element )
        {
            let _card = cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ].length - 1;

                _card = cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] [ _card ];


            cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ].push ( _card );


            UI._setAlbumCards ( );
        },

        /**
         * Subtracts the last card from cardObjects
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _cardClose ( element )
        {
            let _close = element.classList.contains ( 'close' );


            if ( _close )
            {
                let _cardNumber = Number ( element.nextElementSibling.innerHTML );


                if ( cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ].length > 1 )

                     cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ].splice ( _cardNumber, 1 );


                UI._setAlbumCards ( );
            }
        },

        /**
         * Toggles collapsible nav-menu menu items
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _collapsibles ( elements )
        {
            for ( let _i = 0; _i < elements.length; _i++ )

                elements [ _i ].addEventListener ( 'click', ( element ) =>
                    {
                        let _element = element.srcElement;


                        if ( UI._isButtonOpen ( _element ) )

                            UI._collapseButtonsExcept ( elements, _i );
                    } );
        },

        /**
         * Sets markdown content for the off canvas documentation element
         * @private
         * @function
         * @param           {HTMLElement} element               Object or Subject type
         */
        _documentation ( element )
        {
            let _isBaseIcon = ( element.getAttribute ( 'suite-data-type' ) === 'Base' );

            if ( ! _isBaseIcon )
            {
                let _converter = new showdown.Converter;

                _converter.setOption ( 'tables', true );


                let _type = element.getAttribute ( 'suite-data-type' );

                let _text = md2json [ _type ];

                    _text = _text.replace ( /&quot;&#x27;/g, '"' )
                                 .replace ( /&#x27;&quot;/g, '"' )
                                 .replace ( /&lt;/g,         '"' )
                                 .replace ( /&gt;/g,         '"' );


                let _html = _converter.makeHtml ( _text );

                    _html = _html.replace ( /_new">new/,                      "_new\"><b>new</b>" )
                                 .replace ( /<strong>Access<[^:]+[^>]+>/g,    "" )
                                 .replace ( /<strong>Read only<[^:]+[^>]+>/g, "" )
                                 .replace ( /<strong>See<[^:]+[^>]+>[^>]+>/g, "" );


                let _offcanvas     = document.querySelector ( '.offcanvas' );

                let _offcanvasBody = _offcanvas.querySelector ( '.offcanvas-body' );

                    _offcanvasBody.innerHTML = _html;


                let _bsOffcanvas   = new bootstrap.Offcanvas ( _offcanvas );

                    _bsOffcanvas.toggle ( );


                let _offcanvasReset = document.getElementById ( 'offcanvas-reset' );


                    _offcanvasBody.addEventListener ( 'scroll', ( element ) =>
                        {
                            _offcanvasReset.style.opacity = ( _offcanvasBody.scrollTop > 1 ) ? '1' : '0';

                            // @TODO: optimize this
                            // This shouldn't have to run multiple times
                            // to get accuracy throughout all text-boxes
                            TOOL.scaleText ( 'h3' );

                            _offcanvasReset.addEventListener ( 'click', ( element ) => { _offcanvasBody.scrollTop = 0; } );
                        } );
            }
        },

        /**
         * Toggles visibility of easing functions
         * @private
         * @function
         * @param           {HTMLElement} element               Index of animation card
         */
        _easingFunctions ( element )
        {
            UI._embedEasingButtons ( );


            let _index     = Number ( element.getAttribute ( 'suite-data-index' ) );

            let _functions = document.querySelectorAll ( '.easing-functions' );


            ( _functions [ _index ].style.visibility === 'hidden' || _functions [ _index ].style.visibility === '' )

                ? [ _functions [ _index ].style.opacity, _functions [ _index ].style.visibility ] = [ 1, 'visible' ]

                : [ _functions [ _index ].style.opacity, _functions [ _index ].style.visibility ] = [ 0, 'hidden'  ];
        },

        /**
         * Toggles opacity from bottom links in navigation area
         * @private
         * @function
         * @param           {boolean} show                      True || False
         */
        _externalLinks ( show = true )
        {
            let _links = document.querySelector ( '.external-links' );


            ( show ) ? _links.classList.add    ( 'fade' )

                     : _links.classList.remove ( 'fade' );
        },

        /**
         * Toggles modal code element
         * @private
         * @function
         * @param           {HTMLElement} element               Main button element
         */
        _modalCode ( element )
        {
            let _element   = element.offsetParent;

            let _blankCard = ( _element.tagName === 'MAIN' );


            if ( ! _blankCard )
            {
                let _card =
                {
                    title: _element.getAttribute ( 'suite-data-title' ).toTitleCase ( ),

                    code:  _element.getAttribute ( 'suite-data-code' ).replace ( /_\d{1,3}/g, '' )
                }

                let _modal =
                {
                    title:   document.querySelector ( '#modal-code-label' ),

                    code:    document.querySelector ( 'code' ),

                    element: document.querySelector ( '#modal-code' )
                }

                let _boostrapModal = bootstrap.Modal.getOrCreateInstance ( _modal.element );


                [ _modal.title.innerHTML, _modal.code.innerHTML ] = [ _card.title, _card.code ]


                    _boostrapModal.toggle ( );

                    hljs.highlightAll ( );
            }
        },

        /**
         * Moves nav menu left or right
         * @private
         * @function
         * @param           {Boolean} left                      True || False
         */
        _navMove ( left )
        {
            let _openButtons = document.querySelectorAll ( '[data-button-open=true]' ).length;

            let _navLinks    = document.getElementById ( 'nav-links' );

            let _paddingLeft = TOOL._get.numberFromPx ( window.getComputedStyle ( _navLinks ).paddingLeft );

            let _menuDepth   = 3;


            if ( left )

                _navLinks.style.paddingLeft = `${_paddingLeft - 10}px`;

            else

                if ( _openButtons <= _menuDepth )

                    _navLinks.style.paddingLeft = `${_paddingLeft + 10}px`;
        },

        /**
         * Toggles drop-down navigation menu
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _navDropdown ( element )
        {
            let _button = element.innerHTML.trim ( );

            let _ul     = ( element.parentNode.nextSibling.data ) ? element.parentNode.nextSibling.nextSibling : element.parentNode.nextSibling;

            let _isOpen = ( element.getAttribute ( 'data-button-open' ) === 'false' );

            let _isShow = ( _ul.classList.contains ( 'show' ) );


            ( _isShow ) ? _ul.classList.remove ( 'show' )

                        : _ul.classList.add    ( 'show' );


            element.setAttribute ( 'data-button-open', _isOpen );


            this._externalLinks ( _isOpen );


            if ( _button != 'Documents' )

                this._navMove ( _isOpen );
        },

        /**
         * Reset nav button position when closed
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _navButtonReset ( element )
        {
            let _open = element.children [ 0 ].getAttribute ( 'data-button-open' );


            if ( _open === 'false' )

                document.getElementById ( 'nav-links' ).style.paddingLeft = '32px'
        },

        /**
         * Toggles boolean value in lab
         * @public
         * @function
         */
        boolean ( )
        {
            let _regex  = new RegExp ( /true|false/ );

            let _cursor = LAB.editor.selection.getCursor ( );

            let _line   = LAB.editor.session.getLine ( _cursor.row );


            if ( _regex.test ( _line ) )
            {
                let _range   = new ace.Range ( _cursor.row, 0, _cursor.row, _line.length );

                let _match   = _line.match ( _regex ) [ 0 ];

                let _newLine = ( _match === 'true' ) ? _line.replace ( 'true', 'false' ) : _line.replace ( 'false', 'true' );


                LAB.editor.session.replace ( _range, _newLine );

                LAB.runCode ( );
            }
        },

        /**
         * Toggles the card button associated with the passed 'element' param
         * @public
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        cardButton ( element )
        {
            let _element  = element.srcElement;

            let _cardPlus = _element.classList.contains ( 'plus' );


            if ( _cardPlus )

                switch ( _element.tagName )
                {
                    case 'DIV':
                    case 'SPAN':                    this._cardPlus        ( _element );     break;
                }

            else

                switch ( _element.tagName )
                {
                    case 'IMG':

                        let _buttonType = _element.getAttribute ( 'suite-button-type' );


                        switch ( _buttonType )
                        {
                            case 'easing':          this._easingFunctions ( _element );     break;

                            case 'documentation':   this._documentation   ( _element );     break;
                        }

                        break;

                    case 'SPAN':                    this._cardClose       ( _element );     break;

                    case 'LI':                      this._easingFunctions ( _element );     break;

                    case 'DIV':
                    case 'CANVAS':                  this._modalCode       ( _element );     break;
                }


            element.stopPropagation ( );
        },

        download ( )
        {
            let _name    = 'canvasLab_file.js';

            let _content = LAB.editor.getValue ( );

            let _file    = new File ( [ _content ], _name, { type: 'text/javascript' } );


            LAB._download ( _file );
        },

        /**
         * Toggles fullscreen mode                              @TODO: fix this crap
         * @public
         * @function
         */
        fullscreen ( )
        {
            let _rightColumn = document.querySelector ( '#lab > div:nth-child(2)' );

            let _leftColumn  = document.querySelector ( '#lab > div:nth-child(1)' );

            let _styles      = window.getComputedStyle ( _rightColumn   );

            let _fullscreen  = ( _styles.display === 'block' );

            let _open        = document.querySelector  ( '#lab-open'    );

                _open.addEventListener ( 'click', ( ) => this.fullscreen ( ) );


            ( _fullscreen ) ? _rightColumn.style.display = 'none'

                            : _rightColumn.style.display = 'block';


            ( _fullscreen ) ? _leftColumn.style.width = '100%'

                            : _leftColumn.style.width = '50%';


            ( _fullscreen ) ? _open.style.display = 'block'

                            : _open.style.display = 'none';


            if ( UI._isNavOpen ( ) )

                this.navigation ( );


            LAB.setCanvasSize ( );

            LAB.runCode ( );
        },

        /**
         * Toggles grid in lab
         * @public
         * @function
         */
        grid ( )
        {
            LAB.setGrid ( );


            let _grid   = document.getElementById ( 'grid' );

            let _button = document.getElementById ( 'input-grid' );


            this.labButton ( _button );


            _grid.style.opacity = ( TOOL.isActive ( _button ) ) ? 1 : 0;
        },

        /**
         * Toggles lab from each card-object
         * @public
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        lab ( element )
        {
            let _element = element.srcElement;

            let _index   = _element.getAttribute ( 'suite-data-index' );

            let _card    = document.querySelector ( `#view_${_index}` );

            let _code    = _card.getAttribute ( 'suite-data-code' ).replaceAll ( /_\d{2}/g, '' );


            UI.clearScreen  ( false, true );

            LAB.editor.setValue ( _code );

            LAB.setCanvasSize ( );

            LAB.runCode ( );


            if ( PAGE.group === 'plan')

                this.navigation ( );


            window.addEventListener ( 'resize', LAB.setCanvasSize );
        },

        /**
         * Toggles lab buttons active state
         * @public
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        labButton ( element )
        {
            let _active = TOOL.isActive ( element );


            ( _active ) ? element.style.backgroundColor = 'rgb(72, 79, 86)'

                        : element.style.backgroundColor = 'rgb(166, 49, 49)';


            ( _active ) ? element.setAttribute ( 'data-bs-active', false )

                        : element.setAttribute ( 'data-bs-active', true  );
        },

        /**
         * Toggles visibility of lab menu
         * @public
         * @function
         */
        labMenu ( )
        {
            let _button = document.querySelector ( '#input-menu' );

            let _menu   = document.querySelector ( '.menu_popup' );

            let _show   = ( _menu.style.display === 'none' );


            _menu.style.display = ( _show ) ? 'block' : 'none';


            this.labButton ( _button );
        },

        /**
         * Toggles visibility of navigation menu
         * @public
         * @function
         */
        navigation ( )
        {
            let _lab    = document.querySelector ( 'div.lab-station' );

            let _nav    = document.querySelector ( 'nav' );

            let _main   = document.querySelector ( 'main' );

            let _open   = document.querySelector ( '#nav-open' );

            let _button = document.querySelector ( '#input-sidebar' );


            this.labButton ( _button );


            ( UI._isNavOpen ( ) ) ? [ _nav.style.left, _main.style.paddingLeft ] = [ '-200px',   '0px' ]

                                  : [ _nav.style.left, _main.style.paddingLeft ] = [    '0px', '200px' ];


            if ( _lab.style.display === 'block' )
            {
                LAB.setCanvasSize ( );

                LAB.runCode ( );
            }


            let _navIcons = _nav.querySelector ( '#nav-icon' ).children;


            for ( let _navIcon of _navIcons )               // Blink eye

                _navIcon.style.display = ( _navIcon.style.display === 'none' ) ? 'block' : 'none';


            _open.style.display = ( _open.style.display === 'none' ) ? 'block' : 'none';
        },

        /**
         * Toggles ruler in lab
         * @public
         * @function
         */
        ruler ( )
        {
            let _ruler  = document.getElementById ( 'ruler' );

            let _button = document.getElementById ( 'input-ruler' );


            this.labButton ( _button );


            _ruler.style.opacity = ( TOOL.isActive ( _button ) ) ? 1 : 0;
        },
    }

    _clean =
    {
        /**
         * Cleans script of it's function wrapper
         * @public
         * @function
         * @param           {Function} script                   JavaScript function
         * @return          {string}                            Function as a string
         */
        script ( script )
        {
            script = script.toString ( ).replace ( /\([^{]+{/, '' );

            return   script.substring ( 0, script.length - 1 );
        },

        /**
         * Cleans code of enumerators for card-objects
         * @public
         * @function
         * @param           {Function} script                   JavaScript function; for card-objects only
         * @return          {string}                            Function as a string
         */
        code ( script )
        {
            let _code   = this.script ( script ).split ( /\n/g );

            let _length = _code.at ( -1 ).match ( /^\s+/ ) [ 0 ].length;


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].slice ( _length );


            return _code.join ( '\n' );
        },

        /**
         * Cleans the remaining '.blank' cards while converting the first to a '.plus' card; @see Ui.toggle._cardPlus ( )
         * @public
         * @function
         */
        blankCards ( )
        {
            let _cards = document.querySelectorAll ( '.card' );

            let _first = true;

            let _count = 0;


            if ( PAGE.handler === 'animation' )

                for ( let _card of _cards )
                {
                    let _blank  = _card.classList.contains ( 'blank' );


                    if ( _blank && _first )
                    {
                        let _height = _cards [ _count - 1 ].clientHeight;


                        _card.classList.add ( 'plus' );

                        _card.style.height = `${_height}px`;


                        _first = false;
                    }

                    _count++;
                }
        }
    }

    constructor ( ) { }

    ////    [ TOGGLE ]    //////////////////////////////////////////////////////////////////////////

        /**
         * Gets toggle object
         * @public
         * @function
         * @return          {Object}                            Toggle object
         */
        get toggle ( )
        {
            return this._toggle;
        }

    ////    [ CLEAN ]    ///////////////////////////////////////////////////////////////////////////

        /**
         * Gets clean object
         * @public
         * @function
         * @return          {Object}                            Clean object
         */
        get clean ( )
        {
            return this._clean;
        }

    ////    GETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Returns a button for navigation links
         * @private
         * @function
         * @param           {Object} button                     Navigation link object
         * @return          {HTMLElement}                       List item HTML element
         */
        _getButton ( button )
        {
            let _li     = document.createElement ( 'li' );

            let _button = document.createElement ( 'button' );

            let _id     = button.title.toLowerCase ( ) + '-collapse';

                _button.innerHTML = button.title;


                _button.setAttribute ( 'data-bs-target',   _id   );

                _button.setAttribute ( 'data-button-open', false );


                _button.classList.add ( 'btn', 'btn-toggle', 'align-items-center', 'rounded', 'collapsed' );


                _li.append ( _button );


            return _li;
        }

        /**
         * Returns eval ready code for passed card-objects
         * @private
         * @function
         * @param           {Array.<Object>} objects            Array of card-objects
         * @return          {string}                            String to be evaluated for all card-objects
         */
        _getCode ( objects )
        {
            let _codes = [ ]


            for ( let _object of objects )

                _codes.push ( `////    ${_object.title}    //////////////////////////\n\n${_object.code}` );


            return `( ( window ) =>\n{\n${_codes.join ( '\n\n' )}\n\n} ) ( window );`
        }

        /**
         * Returns a link for navigation links
         * @private
         * @function
         * @param           {Object} link                       Navigation link object
         * @return          {HTMLElement}                       List item HTML element
         */
        _getLink ( link )
        {
            let _li   = document.createElement ( 'li'  );

            let _img  = document.createElement ( 'img' );

            let _a    = document.createElement ( 'a'   );

            let _icon = ( link.group === 'Animation' ) ? ( TOOL.isCanvasLabObject ( link.title ) ) ? 'Object' : 'Subject' : link.group;


                _a.href      = ( link.handler ) ? `#${link.handler}${link.group}${link.title}` : `#${link.group}${link.title}`;

                _a.innerHTML = link.title;


                _img.src = `images/svg/${_icon}/${link.title}.svg`;


                _li.append ( _img );

                _li.append ( _a   );

                _li.classList.add ( 'nav-link' );


            return _li;
        }

        /**
         * Returns the likely class name for the passed code
         * @public
         * @function
         * @param           {string} code                       Code string
         * @return          {string}                            Likely class name
         */
        getClass ( code )
        {
            let _class   = code.match ( /_(\w+)/ ) [ 1 ];

            let _regex   = new RegExp ( '_(line|lines|circle|circles|rectangle|rectangles|text|texts)', 'g' );

            let _objects = [ 'line', 'lines', 'rectangle', 'rectangles', 'circle', 'circles', 'text', 'texts' ]


            let _result = ( ! _objects.includes ( _class ) )

                              ? ( _regex.test ( code ) )

                                    ? code.match ( _regex ) [ 0 ].replace ( '_', '' )

                                    : _class

                              : _class;


            return _result.toTitleCase ( );
        }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Sets the album cards for the current 'Page'
         * @private
         * @function
         */
        _setAlbumCards ( )
        {
            let _cardObjects = TOOL.copyObjectWithKey ( cardObjects );


            this.clearScreen ( true );


            this._setCardSection  ( _cardObjects );

            this._evalCardObjects ( _cardObjects );
        }

        /**
         * Sets byrne-systems logo
         * @private
         * @function
         */
        _setByrneSystemsLogo ( )
        {
            let _element = document.querySelector ( '#byrne-systems-logo' );

            let _album   = document.querySelector ( '.album' );

            let _main    = document.querySelector ( 'main' );

            let _nav     = document.querySelector ( 'nav' );

            let _div     = document.createElement ( 'div' );

            let _image   = document.createElement ( 'img' );

            ////    LOGIC    ///////////////////////////////////////////////////

            if ( _element ) _element.remove ( );


                _album.style.display = 'none';

                _image.src         = '../images/cube_sm.png';


                _div.id            = 'byrne-systems-logo';

                _div.style.cssText = `padding-top: ${_main.clientHeight / 2.5}px`;


                _div.appendChild  ( _image );

                _main.appendChild ( _div   );

                _nav.style.left = '0px';
        }

        /**
         * Sets card section's inner HTML
         * @private
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         */
        _setCardSection ( cardObjects )
        {
            let _cardTemplates = TEMPLATE.getCards ( cardObjects );

            let _cardSection   = document.querySelector ( '#test-cards' );


            for ( let _cardTemplate of _cardTemplates )

                _cardSection.innerHTML += _cardTemplate;


            this.clean.blankCards ( );
        }

        /**
         * Sets cards
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _setCards ( element )
        {
            let _element = element.srcElement;


            element.preventDefault ( );


            PAGE = new Page ( _element );


            if ( PAGE.handler )

                ( cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] )

                    ? this._setAlbumCards ( )

                    : this._setByrneSystemsLogo ( );

            else

                ( cardObjects [ PAGE.group ] [ PAGE.type ] )

                    ? this._setAlbumCards ( )

                    : this._setByrneSystemsLogo ( );
        }

        /**
         * Sets all event listeners for this object
         * @private
         * @function
         */
        _setEventListeners ( )
        {
            switch ( 'nav' )
            {
                case 'nav':

                    let _icon = document.querySelector ( '#nav-icon' );

                    let _open = document.querySelector ( '#nav-open' );


                    if ( _icon )
                    {
                        _icon.addEventListener ( 'click', ( ) => UI.toggle.navigation ( ) );

                        _open.addEventListener ( 'click', ( ) => UI.toggle.navigation ( ) );
                    }

                case 'navButtons':

                    let _buttons = new Array;

                    let _menus   = document.querySelectorAll ( '.nav-menu' );


                    for ( let _menu of _menus )

                        _buttons.push ( ..._menu.querySelectorAll ( 'button' ) );


                    for ( let _button of _buttons )

                        _button.addEventListener ( 'click', ( ) => this.toggle._navDropdown ( _button ) );

                case 'navButtonsReset':

                    let _primaries = document.querySelectorAll ( '#nav-links > li' );


                    for ( let _primary of _primaries )

                        _primary.addEventListener ( 'click', ( ) => this.toggle._navButtonReset ( _primary ) );

                case 'navLinks':

                    let _links = document.querySelector ( '#nav-links' ).querySelectorAll ( 'a' );


                    for ( let _link of _links )

                        _link.addEventListener ( 'click', ( element ) => this._setCards ( element ) );

                case 'navButtons-collapse':

                    let _mainButtons = document.querySelectorAll ( '#nav-links > li > button, #doc-links > li > button' );


                    this.toggle._collapsibles ( _mainButtons );

                case 'copy':

                    let _copyButton = document.querySelector ( 'button.copy-code-link' );

                        _copyButton.addEventListener ( 'click', TOOL.copyCode );

                case 'lab':

                    let _main       = document.getElementsByTagName ( 'main' ) [ 0 ];

                    let _labStation = document.querySelector  ( 'main > div.lab-station' );

                    let _lab        = document.querySelector ( '#nav-lab > img.lab-bottle' );

                        _lab.addEventListener ( 'click', ( ) =>
                            {
                                this.clearScreen  ( );


                                _labStation.style.display = 'block';

                                _main.style.overflowY     = 'hidden';


                                LAB.setCanvasSize ( );

                                LAB.runCode ( );
                            } );


                    window.addEventListener ( 'resize', LAB.setCanvasSize );

                case 'cards':

                    let _cards = document.querySelector ( '#nav-lab > img.card-stack' );

                        _cards.addEventListener ( 'click', ( ) =>
                            {
                                this.clearScreen  ( );

                                this._setByrneSystemsLogo ( );

                                _labStation.style.display = 'none';

                                _main.style.overflowY     = 'auto';
                            } );
            }
        }

        /**
         * Sets navigation links
         * @public
         * @function
         * @param           {HTMLElement}    element            Parent navigation element
         * @param           {Array.<Object>} links              Array of Objects containing navigation link data
         */
        setNavLinks ( element, links )
        {
            for ( let _link of links )

                if ( _link.links != null )                  // BUTTONS
                {
                    let _button = this._getButton ( _link );

                    let _id     = _button.firstElementChild.getAttribute ( 'data-bs-target' );

                    let _ul     = document.createElement ( 'ul' );

                        _ul.id  = ( _id ) ? _id : String.empty;

                        _ul.classList.add ( 'collapse' );


                    element.append ( _button );

                    element.append ( _ul );


                    this.setNavLinks ( _ul, _link.links );
                }
                else                                        // LINKS
                {
                    element.classList.add ( 'nav-links' );

                    element.append ( this._getLink ( _link ) );
                }
        }

    ////    VALIDATION    //////////////////////////////////////////////////////////////////////////

        /**
         * Checks whether collapsible button is open
         * @private
         * @function
         * @param           {HTMLElement} button                Element to validate
         */
        _isButtonOpen ( button )
        {
            return ( button.getAttribute ( 'data-button-open' ) === 'true' );
        }

        /**
         * Returns whether the navigation bar is open
         * @private
         * @function
         * @return          {boolean}                           True | False
         */
        _isNavOpen ( )
        {
            return ( document.querySelector ( 'nav' ).style.left === '0px' );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Collapses all passed buttons, outside of index passed
         * @private
         * @function
         * @param           {Array}  buttons                    Array of collapsible buttons
         * @param           {number} index                      Index of button to leave open
         */
        _collapseButtonsExcept ( buttons, index )
        {
            for ( let _i = 0; _i < buttons.length; _i++ )
            {
                if ( _i === index )

                    continue;


                if ( this._isButtonOpen ( buttons [ _i ] ) )

                    buttons [ _i ].click ( );
            }
        }

        /**
         * Creates easing links for animation cards
         * @private
         * @function
         * @return          {HTMLElement}                       UL element with all necessary nested elements
         */
        _createEasingButtons ( )
        {
            let _timings =
            [
                'easeInSine',    'easeInCubic',    'easeInQuint',    'easeInCirc',    'easeInElastic',    'easeInQuad',    'easeInQuart',    'easeInExpo',    'easeInBack',
                'easeOutSine',   'easeOutCubic',   'easeOutQuint',   'easeOutCirc',   'easeOutElastic',   'easeOutQuad',   'easeOutQuart',   'easeOutExpo',   'easeOutBack',
                'easeInOutSine', 'easeInOutCubic', 'easeInOutQuint', 'easeInOutCirc', 'easeInOutElastic', 'easeInOutQuad', 'easeInOutQuart', 'easeInOutExpo', 'easeInOutBack'
            ]

            let _regex         = new RegExp ( /(In|Out)/, 'g' );

            let _div           = document.createElement ( 'div' );

                _div.className = 'easing-wrapper';


            let _ul            = document.createElement ( 'ul' );

                _ul.className  = 'easing-functions';


            for ( let _timing of _timings )
            {
                let _match   = _timing.match ( _regex );

                let _path    = ( _match.length < 2 ) ? _match [ 0 ] : _match [ 0 ] + _match [ 1 ];


                let _img     = document.createElement ( 'img' );

                    _img.src = `images/svg/Handler/Animation/Ease/${_path}/${_timing}.svg`;


                let _span           = document.createElement ( 'span' );

                    _span.innerHTML = _timing;


                let _li = document.createElement ( 'li' );

                    _li.setAttribute ( 'onclick', `devSuite.runEasingAnimation ( '${_timing}', this.parentElement.id )` );

                    _li.appendChild ( _span );

                    _li.appendChild ( _img );


                _ul.appendChild ( _li );
            }


            _div.appendChild ( _ul );


            return _div;
        }

        /**
         * Runs code from within the passed 'cardObjects' param
         * @private
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         */
        _evalCardObjects ( cardObjects )
        {
            eval ( this._getCode ( cardObjects ) );
        }

        /**
         * Embeds easing buttons for each animation card
         * @private
         * @function
         */
        _embedEasingButtons ( )
        {
            let _easings = document.querySelectorAll ( '.easing' );

            let _div     = this._createEasingButtons ( );


            for ( let _i = 0; _i < _easings.length; _i++ )
            {
                let _clonedDiv = _div.cloneNode ( true );

                let _ul        = _clonedDiv.children [ 0 ];

                    _ul.id = _i;

                    _ul.setAttribute ( 'onmouseleave', `devSuite.toggleEasingFunctions ( ${_i} )` );


                _easings [ _i ].parentNode.insertBefore ( _clonedDiv, _easings.nextSibling );

                _easings [ _i ].setAttribute ( 'onclick', `devSuite.toggleEasingFunctions ( ${_i} )` );
            }
        }

        /**
         * Displays an alert message within the modal
         * @public
         * @async
         * @function
         * @param           {string} message                    Message to display
         * @param           {string} type                       Type of message; success || failure
         */
        alert ( message, type )
        {
            let _wrapper           = document.createElement ( 'div' );

                _wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + '<img src="images/svg/General/info-circle.svg" />' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';


                document.getElementById ( 'copiedAlert' ).append ( _wrapper );
        }

        /**
         * Clears screen prior to rebuilding
         * @public
         * @function
         * @param           {boolean} setCardAlbum              Sets card album display to block (true) || none (false)
         */
        clearScreen ( setCardAlbum = false, setLab = false )
        {
            let _main  = document.querySelector ( 'main' );

            let _album = document.querySelector ( '.album' );

            let _cards = document.querySelector ( '#test-cards' );

            let _logo  = document.querySelector ( '#byrne-systems-logo' );

            let _lab   = document.querySelector ( 'main > div.lab-station' );


            initCanvasLab ( );                              // @NOTE: canvasLab doesn't not initialize twice here, if there's already a preexisting 'window.canvasLab' object within the DOM


            if ( _logo )

                _logo.remove ( );


                _main.style.overflowY = 'auto';

                _album.style.display  = ( setCardAlbum ) ? 'block' : 'none';

                _cards.innerHTML      = '';

                _lab.style.display    = 'none';


            if ( setLab )

                [ _main.style.overflowY, _lab.style.display ] = [ 'hidden', 'block' ];
        }

    ////    INITIALIZER(S)    //////////////////////////////////////////////////////////////////////

        /**
         * Sets User Interface
         * @public
         * @function
         */
        init ( )
        {
            ( window ) ? this._setByrneSystemsLogo ( )

                       : console.error ( '[ ERROR ]: window.master is not available !' );


            this._setEventListeners ( );
        }

        /**
         * Sets easing animation for an animation card
         * @public
         * @function
         * @param           {string} easingFunction             Easing function; as a string
         * @param           {number} index                      Index of animation card
         */
        runEasingAnimation ( easingFunction, index )
        {
            let _cardObjects = TOOL.copyObjectWithKey ( cardObjects );

            let _regex       = new RegExp ( /timing:[^,]+,/ );


            let _code        = _cardObjects [ index ].code;

                _code        = _code.toString ( ).replace ( _regex, `timing: '${easingFunction}',` );


            let _card        = _cardObjects [ index ];

                _card.text   = easingFunction;

                _card.code   = eval ( _code );


            cardObjects [ PAGE.handler ] [ PAGE.group ] [ PAGE.type ] [ index ] = _card;


            this._setAlbumCards ( );
        }
}
 
/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _config =
    {
        labMode: false
    }

    let _classes = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    /**
     * Object of demo cards
     * @type {Object.<Object>}
     * @example { type: { subType: [ { title: 'title', text: 'text', code: function } ] } }
     */
    let _cardObjects =
    {
        object:
        {
            line:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 0, 75, 0, 0 );

                        _line.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.move ( 180, 100, true );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.border = true;

                        _line.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.axis = true;

                        _line.draw ( );
                    }
                },
                // points
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.curve ( 0, -50, -50, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
            ],
            lines:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.shadow = true;

                        _lines.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.border = true;

                        _lines.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.axis = true;

                        _lines.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _lines.options.anchor   = true;

                //         _lines.draw ( );
                //     }
                // },
                // points
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.points = true;

                        _lines.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.coordinates = true;

                        _lines.draw ( );
                    }
                },
                // controlPoints
                {
                    title:   'controlPoints',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _lines.options.controlPoints = true;

                        _lines.draw ( );
                    }
                },
            ],
            circle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // radius
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = 50;

                        _circle.draw ( );
                    }
                },
                // radius ellipse
                {
                    title:   'radius ellipse',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = { x: 25, y: 50 };

                        _circle.draw ( );
                    }
                },
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern    = 'images/png/sun.png';

                        _circle.fill.repetition = 'no-repeat';

                        _circle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'color' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align   = 'topLeft';

                        _circle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.move ( 180, 100, true );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.border = true;

                        _circle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.axis = true;

                        _circle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.coordinates = true;

                        _circle.draw ( );
                    }
                },
            ],
            circles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circles.options.shadow = true;

                        _circles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circles.options.border = true;

                        _circles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circles.options.axis = true;

                        _circles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _circles.options.anchor   = true;

                //         _circles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circles.options.coordinates = true;

                        _circles.draw ( );
                    }
                },
            ],
            rectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // radii general
                {
                    title:   'rounded general',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 10 ];

                        _rectangle.draw ( );
                    }
                },
                // radii specific
                {
                    title:   'rounded specific',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 0, 10, 0, 20 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern    = 'images/png/sun.png';

                        _rectangle.fill.repetition = 'no-repeat';

                        _rectangle.draw ( );
                    }
                },
                // fill image
                {
                    title:   'fill image',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.image = 'images/png/sun.png';

                        _rectangle.draw ( );

                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align   = 'topLeft';

                        _rectangle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.move ( 180, 100, true );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.border = true;

                        _rectangle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.axis = true;

                        _rectangle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.coordinates = true;

                        _rectangle.draw ( );
                    }
                },
            ],
            rectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangles.options.shadow = true;

                        _rectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangles.options.border = true;

                        _rectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangles.options.axis = true;

                        _rectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _rectangles.options.anchor   = true;

                //         _rectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangles.options.coordinates = true;

                        _rectangles.draw ( );
                    }
                },
            ],
            text:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // text
                {
                    title:   'text',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.text = '!@#$%^&*'

                        _text.draw ( );
                    }
                },
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.segments  = [ 2, 7, 10 ];

                //         _text.fill.color.alpha = 0;         // [ Optional ]

                //         _text.draw ( );
                //     }
                // },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.25;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width     = 2;

                        _text.stroke.color     = new Rgb ( 0,  150,  200 ); // [ Optional ]

                        _text.fill.color.alpha = 0; // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha   = 0.25;

                        _text.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur    = 10;

                        _text.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _text.options.anchor = true;

                        _text.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.move ( 180, 100, true );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.rotate ( 45 );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.border = true;

                        _text.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.axis = true;

                        _text.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.coordinates = true;

                        _text.draw ( );
                    }
                },
            ],
            texts:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _texts.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _texts.options.shadow = true;

                        _texts.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _texts.options.border = true;

                        _texts.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _texts.options.axis = true;

                        _texts.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _texts.options.anchor   = true;

                //         _texts.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _texts.options.coordinates = true;

                        _texts.draw ( );
                    }
                },
            ],
            cImage:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
                // primary point
                {
                    title:   'primary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point  = new Point  ( 154,  85 );

                        _image.primary.aspect = new Aspect (  91, 101 );     // [ Optional ]

                        _image.draw ( );
                    }
                },
                // secondary point
                {
                    title:   'secondary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 154,  85 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  ( -10, -40 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // primary aspect
                {
                    title:   'primary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect ( 182, 202 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // secondary aspect
                {
                    title:   'secondary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect ( 182, 202 );

                        _image.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.axis = true;

                        _image.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.border = true;

                        _image.draw ( );
                    }
                },
            ],
            group:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _group.draw ( );
                    }
                },
            ]
        },
        subject:
        {
            anchor:
            [
                // Align
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // Align Top
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Right
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Right
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Right
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Left
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                // Align Left
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Left
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topLeft';

                        _rectangle.draw ( );
                    }
                },
            ],
            angle:
            [
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
            ],
            aspect:
            [
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 50 };

                        _rectangle.draw ( );
                    }
                },
            ],
            conic:
            [
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 0, 0, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 90, 0, -90, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 90, -50, -90, 50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( -90, 50, 90, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( -45, 45, -45, 45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.curve ( 45, -45, 45, -45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
            ],
            fill:
            [
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,   150, 200, 1 );

                        _text.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    },
                },
            ],
            font:
            [
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
            ],
            linear:
            [
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
            ],
            point:
            [
                // draw : line
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // draw : circle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // draw : rectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // draw : text
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
            ],
            radial:
            [
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
            ],
            rgb:
            [
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha = 0.25;

                        _text.draw ( );
                    }
                },
            ],
            shadow:
            [
                // shadow : line
                {
                    title:   'line',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow : circle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow : rectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow : text
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },

                // shadow color : line
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [  'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow color : circle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [  'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow color : rectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [  'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow color : text
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [  'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },

                // shadow alpha : line
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [  'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color.alpha = 0.5;

                        _line.draw ( );
                    }
                },
                // shadow alpha : circle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [  'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color.alpha = 0.5;

                        _circle.draw ( );
                    }
                },
                // shadow alpha : rectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [  'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color.alpha = 0.5;

                        _rectangle.draw ( );
                    }
                },
                // shadow alpha : text
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [  'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color.alpha = 0.5;

                        _text.draw ( );
                    }
                },

                // shadow blur : line
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow blur : circle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                // shadow blur : rectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                // shadow blur : text
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur = 10;

                        _text.draw ( );
                    }
                },

                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
            ],
            stop:
            [
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
            ],
            stroke:
            [
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.stroke.segments = [ 2, 7, 10 ];

                //         _text.draw ( );
                //     }
                // },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width
                // {
                //     title:   'stroke width',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.width = 5;

                //         _text.draw ( );
                //     }
                // },
            ]
        },
        plan:
        {
            sacredcircles:
            [
                // draw everything
                {
                    title:   'Draw All',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'lines', 'circles', 'rectangles', 'texts', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.draw ( );
                    }
                },
                // draw circles
                {
                    title:   'Circles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.circles.draw ( );
                    }
                },
                // draw circles & color
                {
                    title:   'Circles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.circles.draw ( );
                    }
                },
                // draw rectangles
                {
                    title:   'Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.rectangles.draw ( );
                    }
                },
                // draw lines
                {
                    title:   'Lines',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'lines', 'line' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.lines.draw ( );
                    }
                },
                // draw texts
                {
                    title:   'Texts',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'texts', 'text' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.plan   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.texts.draw ( );
                    }
                },
            ],
        },
        animation:
        {
            object:
            {
                line:
                [
                    // Line
                    {
                        title: 'Line',
                        text: 'easeInSine',
                        code: ( ) =>
                        {
                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _line.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                ],
            },
            subject:
            {
                anchor:
                [
                    // rectangle align
                    {
                        title:   'Align',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align
                    {
                        title:   'Align',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align top
                    {
                        title:   'Align top',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align top
                    {
                        title:   'Align top',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'top';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align top-right
                    {
                        title:   'Align top-right',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'topRight';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align top-right
                    {
                        title:   'Align top-right',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'topRight';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align right
                    {
                        title:   'Align right',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'right';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align right
                    {
                        title:   'Align right',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'right';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align bottom-right
                    {
                        title:   'Align bottom-right',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'bottomRight';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align bottom-right
                    {
                        title:   'Align bottom-right',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'bottomRight';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align bottom
                    {
                        title:   'Align bottom',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'bottom';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align bottom
                    {
                        title:   'Align bottom',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'bottom';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align bottom-left
                    {
                        title:   'Align bottom-left',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'bottomLeft';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align bottom-left
                    {
                        title:   'Align bottom-left',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'bottomLeft';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align left
                    {
                        title:   'Align left',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'left';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align left
                    {
                        title:   'Align left',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'left';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // rectangle align top-left
                    {
                        title:   'Align top-left',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'topLeft';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // circle align top-left
                    {
                        title:   'Align top-left',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;

                            _circle.anchor.align   = 'topLeft';

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                ],
                fill:
                [
                    // fill color : circle
                    {
                        title:   'fill color',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  0,  0 );

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // fill color : rectangle
                    {
                        title:   'fill color',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  0,  0 );

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },

                    // fill linear : circle
                    {
                        title:   'fill linear',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                                { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress, 0 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // fill linear : rectangle
                    {
                        title:   'fill linear',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                                { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress, 0 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },

                    // fill radial : circle
                    {
                        title:   'fill radial',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 200,  50, 100 ), progress, 0 );
                                    _circle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb (   0, 150, 200 ), progress, 1 );
                                    _circle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb ( 100, 100, 150 ), progress, 2 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // fill radial : rectangle
                    {
                        title:   'fill radial',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 200,  50, 100 ), progress, 0 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb (   0, 150, 200 ), progress, 1 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb ( 100, 100, 150 ), progress, 2 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },

                    // fill conic : circle
                    {
                        title:   'fill conic',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                                { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                                { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 100, 100, 150 ), progress, 0 );
                                    _circle.gradientColorCycle ( new Rgb (  50, 125, 175 ), new Rgb ( 150,  75, 125 ), progress, 1 );
                                    _circle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb ( 200,  50, 100 ), progress, 2 );
                                    _circle.gradientColorCycle ( new Rgb ( 150,  75, 125 ), new Rgb (   0, 150, 200 ), progress, 3 );
                                    _circle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb (  50, 125, 175 ), progress, 4 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // fill conic : rectangle
                    {
                        title:   'fill conic',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                                { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                                { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 100, 100, 150 ), progress, 0 );
                                    _rectangle.gradientColorCycle ( new Rgb (  50, 125, 175 ), new Rgb ( 150,  75, 125 ), progress, 1 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb ( 200,  50, 100 ), progress, 2 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 150,  75, 125 ), new Rgb (   0, 150, 200 ), progress, 3 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb (  50, 125, 175 ), progress, 4 );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                ],
                stroke:
                [
                    // stroke color
                    {
                        title:   'stroke color',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _line.strokeColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                    // text color
                    {
                        title:   'text color',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _sequence =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _text.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _sequence );
                        }
                    },
                ]
            },
            plan:
            {
                sacredcircles:
                [
                    // single animations
                    {
                        title:   'Single',
                        text:    'blah... blah... blah...',
                        children: [ 'group', 'circles', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUTS    //////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 15;

                            let _alpha      = 0.40;

                            let _colors     =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            ////    ANIMATE    /////////////////////////////

                            let _sequence =
                            {
                                duration: 3000,
                                timing: 'easeOutSine',
                                draw ( progress )
                                {
                                    let _progress   = progress;

                                    let _degrees    = [ 270 * _progress, 150, 90, 30, 330, 270, 210 ];

                                    ////    GROUP    ///////////////////////

                                    let _group        = new Group ( _center );

                                        _group.canvas = 'canvas';   // [ Optional ]

                                        _group.plan   = new SacredCircles ( _center, undefined, _iterations, _degrees, _colors );


                                        _group.circles.redraw ( );
                                }
                            }


                            canvaslab.animate ( _sequence );
                        }
                    },
                    // repeating animations
                    {
                        title:   'Repeating',
                        text:    'blah... blah... blah...',
                        children: [ 'queue', 'group', 'circles', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUTS    //////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 15;

                            let _alpha      = 0.40;

                            let _colors     =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            ////    ANIMATE    /////////////////////////////

                            let _sequenceA =
                            {
                                duration: 3000,
                                timing: 'easeOutSine',
                                draw ( progress )
                                {
                                    let _progress   = progress;

                                    let _degrees    = [ 270 * _progress, 150, 90, 30, 330, 270, 210 ];

                                    ////    GROUP    ///////////////////////

                                    let _group        = new Group ( _center );

                                        _group.canvas = 'canvas';   // [ Optional ]

                                        _group.plan   = new SacredCircles ( _center, undefined, _iterations, _degrees, _colors );


                                        _group.circles.redraw ( );
                                }
                            }


                            let _sequenceB = _sequenceA;

                            let _sequenceC = _sequenceA;

                            let _queue = new Queue ( _sequenceA, _sequenceB, _sequenceC );


                            canvaslab.animate ( _queue );
                        }
                    },
                ]
            }
        }
    }

    /**
     * Array of navigation links
     * @type {Array.<Object>}
     * @example { title: 'Title', group: 'Icon folder', links: <Array.<Object>> | null }
     */
    let _navLinks =
    [
        {
            title: 'Objects',
            links:
            [
                {
                    title: 'Line',
                    group: 'Object'
                },
                {
                    title: 'Lines',
                    group: 'Object'
                },
                {
                    title: 'Circle',
                    group: 'Object'
                },
                {
                    title: 'Circles',
                    group: 'Object'
                },
                {
                    title: 'Rectangle',
                    group: 'Object'
                },
                {
                    title: 'Rectangles',
                    group: 'Object'
                },
                {
                    title: 'Text',
                    group: 'Object'
                },
                {
                    title: 'Texts',
                    group: 'Object'
                },
                {
                    title: 'cImage',
                    group: 'Object'
                },
                {
                    title: 'Group',
                    group: 'Object'
                },
            ]
        },
        {
            title: 'Subjects',
            links:
            [
                {
                    title: 'Color',
                    links:
                    [
                        {
                            title: 'Model',
                            links:
                            [
                                {
                                    title: 'Rgb',
                                    group: 'Subject'
                                },
                            ]
                        },
                        {
                            title: 'Gradient',
                            links:
                            [
                                {
                                    title: 'Properties',
                                    links:
                                    [
                                        {
                                            title: 'Stop',
                                            group: 'Subject'
                                        }
                                    ]
                                },
                                {
                                    title: 'Linear',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Radial',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Conic',
                                    group: 'Subject'
                                },
                            ]
                        }
                    ]
                },
                // {
                //     title: 'Plans',
                //     links:
                //     [
                //         {
                //             title: 'SacredCircles',
                //             group: 'Subject'
                //         },
                //     ]
                // },
                {
                    title: 'Staging',
                    links:
                    [
                        {
                            title: 'Anchor',
                            group: 'Subject'
                        },
                        {
                            title: 'Angle',
                            group: 'Subject'
                        },
                        {
                            title: 'Aspect',
                            group: 'Subject'
                        },
                        {
                            title: 'ControlPoints',
                            group: 'Subject'
                        },
                        {
                            title: 'Font',
                            group: 'Subject'
                        },
                        {
                            title: 'Point',
                            group: 'Subject'
                        },
                    ]
                },
                {
                    title: 'Stroke',
                    group: 'Subject'
                },
                {
                    title: 'Fill',
                    group: 'Subject'
                },
                {
                    title: 'Shadow',
                    group: 'Subject'
                },
            ]
        },
        {
            title: 'Plans',
            links:
            [
                {
                    title: 'SacredCircles',
                    group: 'Plan'
                },
            ]
        },
        {
            title: 'Handlers',
            links:
            [
                {
                    title: 'Animation',
                    links:
                    [
                        {
                            title: 'Objects',
                            links:
                            [
                                {
                                    title:   'Line',
                                    group:   'Object',
                                    handler: 'Animation'
                                }
                            ]
                        },
                        {
                            title: 'Subjects',
                            links:
                            [
                                {
                                    title:   'Anchor',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                // {
                                //     title:   'Fill',
                                //     group:   'Subject',
                                //     handler: 'Animation'
                                // },
                                // {
                                //     title:   'Stroke',
                                //     group:   'Subject',
                                //     handler: 'Animation'
                                // }
                            ]
                        },
                        {
                            title: 'Plans',
                            links:
                            [
                                {
                                    title:   'SacredCircles',
                                    group:   'Plan',
                                    handler: 'Animation'
                                },
                                // {
                                //     title:   'Fill',
                                //     group:   'Subject',
                                //     handler: 'Animation'
                                // },
                                // {
                                //     title:   'Stroke',
                                //     group:   'Subject',
                                //     handler: 'Animation'
                                // }
                            ]
                        },
                    ]
                },
            ]
        }
    ]

    /**
     * Object of lab scripts
     * @type {Object.<Object<Function>>}
     * @example { <title>: <Function> }
     */
    let _scripts =
    {
        seedOfLife: ( ) =>
        {
            ////    INPUTS    //////////////////////////////

            let _center     = canvaslab.center;

            let _radius     = 25;

            let _iterations = 2;

            let _degrees    = [ 270, 150, 90, 30, 330, 270, 210 ];

            ////    POPULATION    //////////////////////////

            let _group      = new Group;

                _group.plan = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                _group.circles.draw ( );
        },
        circleAnchoring: ( ) =>
        {
            // let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft' ];

            let _circle = new Circle ( { x: 154, y: 77 } );

                _circle.canvas = 'canvas';

                _circle.options.anchor = true;

                    _circle.anchor.align   = 'center';
                    _circle.anchor.align   = 'top';
                    _circle.anchor.align   = 'topRight';
                    _circle.anchor.align   = 'right';
                    _circle.anchor.align   = 'bottomRight';
                    _circle.anchor.align   = 'bottom';
                    _circle.anchor.align   = 'bottomLeft';
                    _circle.anchor.align   = 'left';
                    _circle.anchor.align   = 'topLeft';

                _circle.draw ( );
        },
        circleAnchoringAnimation: ( ) =>
        {
            let _circle = new Circle ( { x: 154, y: 77 } );

                _circle.canvas = 'canvas';

                _circle.options.anchor = true;

                _circle.anchor.align   = 'center';
                // _circle.anchor.align   = 'top';
                // _circle.anchor.align   = 'topRight';
                // _circle.anchor.align   = 'right';
                // _circle.anchor.align   = 'bottomRight';
                // _circle.anchor.align   = 'bottom';
                // _circle.anchor.align   = 'bottomLeft';
                // _circle.anchor.align   = 'left';
                // _circle.anchor.align   = 'topLeft';

            let _sequence =
            {
                duration: 3000,
                timing: 'easeInSine',
                draw ( progress )
                {
                    _circle.rotate ( progress * 500 );
                }
            }

            canvaslab.animate ( _sequence );
        },
        imageAnchoring: ( ) =>
        {
            let _image = new cImage ( 'images/png/moon.png' );

                _image.point  = new Point ( 154, 77 );

                _image.canvas = 'canvas';

                _image.options.anchor = true;

                _image.anchor.align   = 'center';
                // _image.anchor.align   = 'top';
                // _image.anchor.align   = 'topRight';
                // _image.anchor.align   = 'right';
                // _image.anchor.align   = 'bottomRight';
                // _image.anchor.align   = 'bottom';
                // _image.anchor.align   = 'bottomLeft';
                // _image.anchor.align   = 'left';
                // _image.anchor.align   = 'topLeft';

            console.log ( 'anchor.point:', _image.anchor.point    );
            console.log ( 'primary:     ', _image.primary.point   );
            console.log ( 'point:       ', _image.point           );
            console.log ( 'secondary:   ', _image.secondary.point );

                _image.draw ( );
        },
        imageAxis: ( ) =>
        {
            let _image = new cImage ( 'images/png/moon.png' );

                _image.canvas = 'canvas';

                _image.options.axis = true;

            console.log ( '_image:', _image );

                _image.draw ( );
        }
    }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Initializes classes for application use
         * @private
         * @function
         */
        function _setClasses ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.error ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );
        }

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
         * @function
         */
        function _setEnvironment ( )
        {
            let _navList = document.querySelector ( '#nav-links' );


            _setClasses ( );

            UI.setNavLinks ( _navList, _navLinks );


            if ( typeof ( window.cardObjects ) === 'undefined' )

                window.cardObjects = _cardObjects;
        }

        /***
         * Sets lab mode as the startup mode
         * @private
         * @function
         */
        function _setLabMode ( )
        {
            let _clearConsole = document.querySelector ( '#input-clear' );


            UI.clearScreen ( false, true );

            LAB.setCanvasSize ( );

            _clearConsole.click ( );

            UI.toggle.navigation ( );


            window.addEventListener ( 'resize', LAB.setCanvasSize );
        }

    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////////////////////////

        /**
         * Returns library object
         * @private
         * @function
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib = { }

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Returns internal scripts object
                 * @public
                 * @function
                 * @return          {Object}                            Scripts object
                 */
                _lib.getScripts            = ( )                       => _scripts;

                /**
                 * Runs easing animation for an animation card
                 * @public
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.runEasingAnimation    = ( easingFunction, index ) => UI.runEasingAnimation ( easingFunction, index );

                /**
                 * Runs lab-station code from editor
                 * @public
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => LAB.runCode ( );

                /**
                 * Toggles individual card buttons using their 'suite-data' attributes
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleCardButton      = ( element )                => UI.toggle.cardButton ( element );

                /**
                 * Toggles lab from each card-object
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleLab             = ( element )                => UI.toggle.lab ( element );

            return _lib;
        }

    ////    INITIALIZE    //////////////////////////////////////////////////////////////////////////

        /**
         * Initiates devSuite
         * @private
         * @function
         */
        function _init ( )
        {
            window.devSuite = _library ( );


            _setEnvironment ( );


            if ( window.cardObjects )
            {
                UI.init  ( );

                LAB.init ( _scripts.imageAnchoring );


                if ( _config.labMode )

                    _setLabMode ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !' );
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
