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
         * @name editor
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
         * @name editor
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
         * @name _getBoundingCharactersPositions
         * @function
         * @param           {Array<string>} characters          Bounding characters
         * @param           {string}        data                Data to parse
         * @param           {number}        position            Cursor position; from ace-editor
         * @return          {Object}                            Bounding character's starting & ending position(s)
         */
        _getBoundingCharactersPositions = ( characters, data, position ) => new Object ( { start: data.indexOf ( characters [ 0 ] ) + 1, end:   data.indexOf ( characters [ 1 ] ) } );

        /**
         * Returns a new color-picker object
         * @private
         * @name _getColorPicker
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

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////

        /**
         * Sets numeric value within ace-editor up (+) or down (-)
         * @private
         * @name _setNumbericValue
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
                _value  = this._incrementValue ( _value, up );


                this.editor.session.replace    ( _range, `${_value}` );

                this.editor.selection.setRange ( _range );


                this.runCode ( );
            }
        }

        /**
         * Sets the font size within ace-editor up (+) or down (-)
         * @private
         * @name _setFontSize
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
         * Sets color-picker's position within ace-editor
         * @private
         * @name _setColorPickerPosition
         * @function
         */
        _setColorPickerPosition ( )
        {
            let _pickerBox  = document.querySelector ( '.picker_wrapper' );

            let _pickerRect = _pickerBox.getBoundingClientRect ( );

                _pickerBox.style.left = `-${_pickerRect.width}px`;
        }

        /**
         * Sets the lab's canvas & ruler dimensions
         * @private
         * @name setCanvasSize
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
         * Sets all event listeners for this object
         * @private
         * @name _setEventListeners
         * @function
         */
        _setEventListeners ( )
        {
            switch ( 'menu' )
            {
                case 'menu':

                    let _menu = document.querySelector ( '#input-menu' );

                case 'sidebar':

                    let _sidebar = document.querySelector ( '#input-sidebar' );

                        _sidebar.addEventListener ( 'click', ( ) => UI.toggle.navigation ( ) );

                case 'fullscreen':

                    let _fullscreen = document.querySelector ( '#input-full-screen' );

                        _fullscreen.addEventListener ( 'click', ( ) => UI.toggle.fullscreen ( ) );

                case 'colorPicker':

                    let _colorPicker = this._getColorPicker ( 'input-color-picker' );

                        _colorPicker.onOpen   = ( )       => this._setColorPickerPosition ( );

                        _colorPicker.onChange = ( color ) => this._swapRgbValue ( color );

                case 'valuePlus':

                    let _valuePlus = document.querySelector ( '#input-value-plus' );

                        _valuePlus.addEventListener ( 'click', ( ) => this._setNumbericValue ( true ) );

                case 'valueMinus':

                    let _minus = document.querySelector ( '#input-value-minus' );

                        _minus.addEventListener ( 'click', ( ) => this._setNumbericValue ( false ) );

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


                                ( _readOnly ) ? _lock.style.backgroundColor = 'rgb(72, 79, 86)'

                                              : _lock.style.backgroundColor = 'rgb(166, 49, 49)';
                            } );

                case 'download':

                    let _download = document.querySelector ( '#input-download' );

                        _download.addEventListener ( 'click', ( ) =>
                            {
                                let _name       = 'canvasLab_file.js';

                                let _content    = this.editor.getValue ( );

                                let _file       = new File ( [ _content ], _name, { type: 'text/javascript' } );


                                this._download ( _file );
                            } );

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

                case 'canvas':

                    let _main          = document.getElementsByTagName ( 'main' ) [ 0 ];

                    let _labStation    = document.querySelector  ( 'main > div.lab-station' );

                    let _editorElement = document.getElementById ( this.editor.container.id  );

                    let _button        = document.querySelector  ( 'button.lab-station'     );

                        _button.addEventListener ( 'click', ( ) =>
                            {
                                UI.clearScreen  ( );


                                _button.children [ 0 ].classList.add ( 'selected' )


                                _labStation.style.display     = 'block';

                                _main.style.overflowY         = 'hidden';

                                _editorElement.style.fontSize = '12px';


                                this.setCanvasSize ( );

                                this.runCode ( );
                            } );


                    window.addEventListener ( 'resize', this.setCanvasSize );
            }
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Increment the value passed up (+) or down (-)
         * @private
         * @name _increment
         * @function
         * @param           {string|number} value               Value to increment
         * @param           {boolean}       up                  True (+) || false (-)
         * @return          {number}                            Incremented value
         */
        _increment    = ( value, up     ) => ( up ) ? Number ( value ) + 1 : Number ( value ) - 1;

        /**
         * Pad a string with a specified amount of zeros
         * @private
         * @name _padZeros
         * @function
         * @param           {string|number} value               Value to pad
         * @param           {number}        amount              Amount to pad
         * @return          {string}                            Padded amount
         */
        _padZeros     = ( value, amount ) => String ( value ).padStart ( amount, '0' );

        /**
         * Increments a numeric selection from ace-editor up (+) or down (-)
         * @private
         * @name _incrementValue
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
         * Swap rgb values between color-picker and ace-editor
         * @private
         * @name _swapRgbValue
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
         * Cleans code of enumerators for ace-editor
         * @private
         * @name _cleanCode
         * @function
         * @param           {Function} script                   JavaScript function; for ace-editor only
         * @return          {string}                            Function as a string
         */
        _cleanCode ( script )
        {
            let _code = UI.clean.script ( script ).split ( /\n/g );

                _code = _code.slice ( 1 );


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].substring ( 16, _code [ _line ].length );


            return _code.join ( '\n' );
        }

        /**
         * Generates a downloadable file & initiates that download
         * @private
         * @name _download
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

    ////    INITIALIZER(S)   ///////////////////////////////////////////////////////////////////////

        /**
         * Executes lab code from editor
         * @public
         * @name runCode
         * @function
         */
        runCode ( )
        {
            let _code    = this.editor.getValue ( );

            let _canvas  = document.querySelector ( '#canvas' );

            let _context = canvas.getContext ( '2d' );

                _context.clearRect ( 0, 0, _canvas.width, _canvas.height );


            eval ( _code );
        }

        /**
         * Sets lab & ace-editor
         * @public
         * @name init
         * @function
         */
        init ( )
        {
            let _id = "ace-editor";

            let _script = ( ) =>
            {
                let _circle = new Circle ( { x: 154, y: 77 } );

                    _circle.canvas = 'canvas';

                    _circle.fill.color = new Rgb ( 0, 150, 200 );

                    _circle.draw ( );
            }

            ////    CONTROL PANEL    ///////////////////////////////////////////

            let _controlPanel       = document.querySelector ( '#control-panel' );

            let _controlPanelHeight = window.getComputedStyle ( _controlPanel ).height;

                _controlPanelHeight = Number ( _controlPanelHeight.replace ( 'px', '' ) );

            ////    EDITOR ELEMENT    //////////////////////////////////////////

            let _editorElement              = document.getElementById ( _id );

                _editorElement.innerHTML    = this._cleanCode ( _script );

                _editorElement.style.height = `${window.innerHeight - _controlPanelHeight}px`;

            ////    EDITOR    //////////////////////////////////////////////////

            this.editor = ace.edit ( _id );

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
         * @name entries
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
 * @property        {string} subgroup                   Page's subgroup
 */
class Page
{
    _type     = undefined;
    _group    = undefined;
    _subgroup = undefined;

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
         * @name type
         * @function
         * @param           {string} value                      Page's type
         */
        set type ( value )
        {
            this._type = ( typeof value === 'string' ) ? value : this._type;
        }

        /**
         * Gets type
         * @public
         * @name type
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
         * @name group
         * @function
         * @param           {string} value                      Page's group
         */
        set group ( value )
        {
            this._group = ( typeof value === 'string' ) ? value : this._group;
        }

        /**
         * Gets group
         * @public
         * @name group
         * @function
         * @return          {string}                            Page's group
         */
        get group ( )
        {
            return this._group;
        }

    ////    [ SUBGROUP ]    ////////////////////////////////////////////////////

        /**
         * Sets subgroup
         * @public
         * @name subgroup
         * @function
         * @param           {string} value                      Page's subgroup
         */
        set subgroup ( value )
        {
            this._subgroup = ( typeof value === 'string' ) ? value : this._subgroup;
        }

        /**
         * Gets subgroup
         * @public
         * @name subgroup
         * @function
         * @return          {string}                            Page's subgroup
         */
        get subgroup ( )
        {
            return this._subgroup;
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        /**
         * Sets all properties by the passed 'button' param
         * @private
         * @name _setPropertiesBy
         * @function
         * @param           {HTMLElement} button                HTML DOM Element
         */
        _setPropertiesBy ( button )
        {
            let _match = button.href.match ( /#(\w+)/g ) [ 0 ];


            if ( _match || typeof button === 'object' )
            {
                let _button   = _match.replace ( '#', '' );

                this.group    = _button.match ( new RegExp ( /(Object|Subject|Animation)/ ) ) [ 0 ].toLowerCase ( );

                this.type     = _button.replace ( this.group.toTitleCase ( ), '' ).toLowerCase ( );

                this.subgroup = ( this.group === 'animation' ) ? 'easing' : undefined;
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

                           <div class="card-number">

                               <span class="close"></span>

                               <span class="number">{{index}}</span>

                           </div>

                           <canvas id="canvas_{{index}}"></canvas>

                           <div class="card-body">

                               <div class="card-buttons">

                                   <div class="symbol">

                                       <div class="triangle">

                                           <svg width="16" height="16" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">

                                               <g transform="matrix(0.927153,0,0,0.880275,0,0)">

                                                   <rect x="0" y="0" width="16" height="16" fill="none"/>

                                                   <g transform="matrix(0.926815,0,0,0.964236,1.12124,0.171773)">

                                                       <g id="Hexagram">

                                                           <path d="M7.417,1L1,12L14,12L7.417,1Z" fill="none" stroke="black" stroke-width="1.15px"/>

                                                       </g>

                                                   </g>

                                               </g>

                                           </svg>

                                       </div>

                                   </div>

                                   <div class="title">{{title}}</div>

                                   <span class="icons">

                                       <img src="images/svg/{{subgroup}}.svg" class="card-icons easing" suite-button-type="easing" suite-data-index="{{index}}" onclick="devSuite.toggleCardButton ( event )">

                                       <span class="wall">&nbsp;</span>

                                       <img src="images/svg/{{group}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{groupType}}"  onclick="devSuite.toggleCardButton ( event )">

                                       <img src="images/svg/{{image}}.svg" class="card-icons" suite-button-type="documentation" suite-data-type="{{objectType}}" onclick="devSuite.toggleCardButton ( event )">

                                   </span>

                               </div>

                           </div>

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
            Circle:     '{ x: 154, y: 77 }',
            Rectangle:  '{ x: 154, y: 77 }',
            Text:       '{ x: 154, y: 77 }, \'Text\''
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
         * @public
         * @name standard
         * @function
         * @return          {string}                            HTML card template
         */
        get standard ( ) { return this._types.standard; }

    ////    [ BLANK ]    ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns a blank HTML card template
         * @public
         * @name blank
         * @function
         * @return          {string}                            HTML card template
         */
        get blank ( ) { return this._types.blank; }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns an Array of standard & extra HTML templates for each card-object
         * @public
         * @name getCards
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

        /**
         * Returns an Array of standard HTML templates for each card-object
         * @private
         * @name _getStandardTemplates
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

                let _template   = this.standard.replace ( /{{index}}/g, _index );

                let _cardObject = cardObjects [ _iter ];


                _cards.push ( this._getCodeTemplate ( _cardObject, _template, _index ) );
            }


            return _cards;
        }

        /**
         * Returns an Array of extra HTML templates; to align cards
         * @private
         * @name _getBlankTemplates
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
         * @name _getCodeTemplate
         * @function
         * @param           {Object} cardObject                 Card-object
         * @param           {string} template                   HTML template for card-object
         * @param           {string} count                      Card-object number
         * @return          {string}                            Rendered HTML for a card-object
         */
        _getCodeTemplate ( cardObject, template, count )
        {
            for ( let _entry in cardObject )
            {
                if ( _entry === 'code' )                    // Clean: code prior to injection
                {
                    let _code     = UI.clean.code ( cardObject [ _entry ] );


                    let _class    = UI.getClass ( _code );

                    let _variable = `_${_class.toLowerCase ( )}`;

                    let _regex    = new RegExp ( _variable, 'g' );


                    let _init     = this._initializer [ PAGE.group ] [ _class ];


                        _code     = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;

                        _code     = _code.replace ( _regex, `${_variable}_${count}` );

                        _code     = this._getSpecialVariables ( _code, count );


                    cardObject [ _entry ] = _code;
                }


                let _regex = new RegExp ( `{{${_entry}}}`, 'g' );


                template = template.replace ( _regex, cardObject [ _entry ] );
            }


            return UI.clean.imageTags ( template, cardObject );
        }

        /**
         * Returns a code string with special variable formatting
         * @private
         * @name _getSpecialVariables
         * @function
         * @param           {string} code                       Code as a string
         * @param           {number} count                      Card-object number
         * @return          {string}                            Code string with special variable formatting
         */
        _getSpecialVariables ( code, count )
        {
            let _specials = [ '_flow' ];


            for ( let _special of _specials )
            {
                let _regex = new RegExp ( _special, 'g' );


                if ( _regex.test ( code ) )
                {
                    switch ( _special )
                    {
                        case '_flow':

                            let _lineIndex = /let\s_flow[^=]+=/g.exec ( code ).index;

                            let _headCode  = code.substring ( 0, _lineIndex ).trim ( ) + '\n\n';

                            let _temp      = code.match ( /let\s_flow[^,]+,[^,]+[^}]+}[^}]+}[^\w]+canvaslab[^;]+;/g ) [ 0 ].split ( '\n' );


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
         * Returns the amount of columns available per the present resolution
         * @private
         * @name _getColumnCount
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
         * Returns the amount of extra cards to embed
         * @private
         * @name _getBlankCount
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
}
 
/**
 * @class           {Object} Tool                       General helper class
 * @property        {Object} copy                       Standard HTML card template
 */
class Tool
{
    constructor ( ) { }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////

        /**
         * Simple programmatic delay
         * @public
         * @name delay
         * @function
         * @param           {number} time                       Time to delay
         * @return          {Promise}                           An async promise
         */
        delay ( time )
        {
            return new Promise ( resolve => setTimeout ( resolve, time ) );
        }

        /**
         * Returns a copied object
         * @public
         * @name copyObjectWithKey
         * @function
         * @param           {Object} object                     Object to copy
         * @return          {Object}                            Copied object
         */
        copyObjectWithKey ( object )
        {
            let _copyFunction = ( func ) => func;

            let _result       = ( PAGE.group ) ? JSON.parse ( JSON.stringify ( object [ PAGE.group ] [ PAGE.type ] ) )

                                               : JSON.parse ( JSON.stringify ( object [ PAGE.type  ] ) );


            if ( PAGE.group )

                for ( let _entry in object [ PAGE.group ] [ PAGE.type ] )

                    _result [ _entry ].code = _copyFunction ( object [ PAGE.group ] [ PAGE.type ] [ _entry ].code );

            else

                for ( let _entry in object [ PAGE.type ] )

                    _result [ _entry ].code = _copyFunction ( object [ PAGE.type ] [ _entry ].code );


            return _result;
        }

        /**
         * Copy code to clipboard
         * @public
         * @name copyCode
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
         * Toggles the card button associated with the passed 'event' param
         * @public
         * @name cardButton
         * @function
         * @param           {HTMLEvent} event                   UI DOM event
         */
        cardButton ( event )
        {
            let _element  = event.srcElement;

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


            event.stopPropagation ( );
        },

        /**
         * Toggles opacity from bottom links in navigation area
         * @public
         * @name externalLinks
         * @function
         * @param           {HTMLElement} element               Main button element
         */
        externalLinks: ( element ) =>
        {
            let _links = document.querySelector ( '.external-links' );

            let _value = element.target.attributes [ "data-button-state" ].value;

            let _state = ( _value === 'closed' && ! _links.classList.contains ( 'fade' ) );


            ( _state ) ? _links.classList.add    ( 'fade' )

                       : _links.classList.remove ( 'fade' );


            ( _state ) ? element.target.setAttribute ( 'data-button-state', 'open'   )

                       : element.target.setAttribute ( 'data-button-state', 'closed' );


            ( _state ) ? element.target.focus ( )

                       : element.target.blur  ( );
        },

        /**
         * Toggles visibility of navigation menu
         * @public
         * @name navigation
         * @function
         */
        navigation ( )
        {
            let _lab  = document.querySelector ( 'div.lab-station' );

            let _nav  = document.querySelector ( 'nav'             );

            let _main = document.querySelector ( 'main'            );

            let _open = document.querySelector ( '#nav-open'       );


            ( UI._isNavOpen ( ) )

                ? [ _nav.style.left, _main.style.paddingLeft ] = [ '-200px', '-0px'  ]

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
         * Toggles fullscreen mode                          @TODO: fix this crap
         * @public
         * @name fullscreen
         * @function
         * @param           {HTMLElement} button                Button under the #control-panel .button class
         */
        fullscreen: ( ) =>
        {
            let _main        = document.querySelector ( 'main' );


            let _rightColumn = document.querySelector ( '#lab > div:nth-child(2)' );

            let _leftColumn  = document.querySelector ( '#lab > div:nth-child(1)' );


            let _styles      = window.getComputedStyle ( _rightColumn   );

            let _icon        = document.querySelector  ( '.full-screen' );

            let _open        = document.querySelector  ( '#lab-open'    );


            let _fullscreen  = ( _styles.display === 'block' );


            ( _fullscreen ) ? _rightColumn.style.display = 'none'

                            : _rightColumn.style.display = 'block';


            ( _fullscreen ) ? _leftColumn.style.width = '100%'

                            : _leftColumn.style.width = '50%';


            ( _fullscreen ) ? _open.style.display = 'block'

                            : _open.style.display = 'none';


            if ( UI._isNavOpen ( ) )

                this.toggle.navigation ( );


            LAB.setCanvasSize ( );

            LAB.runCode       ( );
        },

        /**
         * Toggles modal code element
         * @private
         * @name _modalCode
         * @function
         * @param           {HTMLElement} element               Main button element
         */
        _modalCode: ( element ) =>
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
         * Toggles visibility of easing functions
         * @private
         * @name _easingFunctions
         * @function
         * @param           {HTMLElement} element               Index of animation card
         */
        _easingFunctions: ( element ) =>
        {
            this._embedEasingButtons ( );


            let _index     = Number ( element.getAttribute ( 'suite-data-index' ) );

            let _functions = document.querySelectorAll ( '.easing-functions' );


            ( _functions [ _index ].style.visibility === 'hidden' || _functions [ _index ].style.visibility === '' )

                ? [ _functions [ _index ].style.opacity, _functions [ _index ].style.visibility ] = [ 1, 'visible' ]

                : [ _functions [ _index ].style.opacity, _functions [ _index ].style.visibility ] = [ 0, 'hidden'  ];
        },

        /**
         * Sets markdown content for the off canvas documentation element
         * @private
         * @name _documentation
         * @function
         * @param           {HTMLElement} element               Object or Subject type
         */
        _documentation ( element )
        {
            let _converter = new showdown.Converter;

                _converter.setOption ( 'tables', true );


            let _type = element.getAttribute ( 'suite-data-type' );

            let _text = md2json [ _type ];

                _text = _text.replace ( /&quot;&#x27;/g, '"' )
                             .replace ( /&#x27;&quot;/g, '"' );


            let _html = _converter.makeHtml ( _text );


            let _offcanvas     = document.querySelector ( '.offcanvas' );

            let _offcanvasBody = _offcanvas.querySelector ( '.offcanvas-body' );

                _offcanvasBody.innerHTML = _html;


            let _bsOffcanvas   = new bootstrap.Offcanvas ( _offcanvas );        // @TODO Investigate here !

                _bsOffcanvas.toggle ( );


            let _offcanvasReset = document.getElementById ( 'offcanvas-reset' );


                _offcanvasBody.addEventListener ( 'scroll', ( element ) =>
                    {
                        _offcanvasReset.style.opacity = ( _offcanvasBody.scrollTop > 1 ) ? '1' : '0';

                        _offcanvasReset.addEventListener ( 'click', ( element ) => { _offcanvasBody.scrollTop = 0; } );
                    } );
        },

        /**
         * Adds an additional card to cardObjects; mirroring the last card present
         * @private
         * @name _cardPlus
         * @function
         * @param           {HTMLElement} element               Object or Subject type
         */
        _cardPlus ( element )
        {
            let _card = cardObjects [ PAGE.group ] [ PAGE.type ].length - 1;

                _card = cardObjects [ PAGE.group ] [ PAGE.type ] [ _card ];


            cardObjects [ PAGE.group ] [ PAGE.type ].push ( _card );


            UI._setAlbumCards ( );
        },

        /**
         * Subtracts the last card from cardObjects
         * @private
         * @name _cardClose
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _cardClose ( element )
        {
            let _close = element.classList.contains ( 'close' );


            if ( _close )
            {
                let _cardNumber = Number ( element.nextElementSibling.innerHTML );


                if ( cardObjects [ PAGE.group ] [ PAGE.type ].length > 1 )

                     cardObjects [ PAGE.group ] [ PAGE.type ].splice ( _cardNumber, 1 );


                UI._setAlbumCards ( );
            }
        },

        /**
         * Toggles drop-down navigation menu
         * @private
         * @name _navDropdown
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _navDropdown ( element )
        {
            let _ul     = element.parentNode.nextSibling;

            let _isOpen = ( element.getAttribute ( 'data-button-open' ) === 'false' );

            let _isShow = ( _ul.classList.contains ( 'show' ) );


            ( _isShow ) ? _ul.classList.remove ( 'show' )

                        : _ul.classList.add    ( 'show' );


            ( _isOpen ) ? element.setAttribute ( 'data-button-open', true )

                        : element.setAttribute ( 'data-button-open', false );
        }
    }

    _clean =
    {
        /**
         * Cleans script of it's function wrapper
         * @public
         * @name script
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
         * @name code
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
         * Trims left over image tags from the standard card template
         * @public
         * @name imageTags
         * @function
         * @param           {string} template                   HTML template for card-object
         * @param           {Object} cardObject                 Card-object
         * @return          {string}                            HTML template for card-object
         */
        imageTags ( template, cardObject )
        {
            let _imageTags = [ 'group', 'subgroup' ];


            for ( let _imageTag of _imageTags )

                template = ( cardObject [ _imageTag ] === undefined )

                               ? template.replace ( new RegExp ( `<img[^\{]+{{${_imageTag}[^>]+>` ), '' )
                                         .replace ( new RegExp ( '<span class="separator">[^>]+>' ), '' )

                               : template;


            return template;
        },

        /**
         * Cleans the remaining '.blank' cards while converting the first to a '.plus' card; @see Ui.toggle._cardPlus ( )
         * @public
         * @name blankCards
         * @function
         */
        blankCards ( )
        {
            let _cards = document.querySelectorAll ( '.card' );

            let _first = true;

            let _count = 0;


            if ( PAGE.group === 'animation' )

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
         * @name toggle
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
         * @name clean
         * @function
         * @return          {Object}                            Clean object
         */
        get clean ( )
        {
            return this._clean;
        }

    ////    GETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Returns the likely class name for the passed code
         * @public
         * @name getClass
         * @function
         * @param           {string} code                       Code string
         * @return          {string}                            Likely class name
         */
        getClass ( code )
        {
            let _class  = code.match ( /_(\w+)/ ) [ 1 ];

            let _regex  = new RegExp ( '_(line|circle|rectangle|text)', 'g' );


            let _result = ( ! [ 'line', 'rectangle', 'circle', 'text' ].includes ( _class ) )

                              ? ( _regex.test ( code ) )

                                    ? code.match ( _regex ) [ 0 ].replace ( '_', '' )

                                    : _class

                              : _class;


            return _result.toTitleCase ( );
        }

        /**
         * Returns eval ready code for passed card-objects
         * @private
         * @name _getCode
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

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Sets navigation links
         * @public
         * @name setNavLinks
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

                        _ul.classList.add ( 'collapse', 'btn-toggle-nav', 'list-unstyled', 'fw-normal', 'pb-1' );


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

        /**
         * Sets byrne-systems logo
         * @private
         * @name _setByrneSystemsLogo
         * @function
         */
        _setByrneSystemsLogo ( )
        {
            let _element = document.getElementById ( 'byrne-systems-logo' );

            let _album   = document.querySelector ( '.album' );

            let _main    = document.querySelector ( 'main' );

            let _nav     = document.querySelector ( 'nav'  );

            let _div     = document.createElement ( 'div'  );

            let _image   = document.createElement ( 'img'  );

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
         * Sets image path for passed card-objects
         * @private
         * @name _setImagePath
         * @function
         * @param           {Array.<Object>} objects            Array of card-objects
         */
        _setImagePath ( objects )
        {
            let _page = PAGE.type.toTitleCase ( );


            for ( let _object of objects )
            {
                _object.image      = ( [ 'Circle', 'Line', 'Rectangle', 'Text' ].includes ( _page ) ) ? `Object/${_page}` : `Subject/${_page}`;

                _object.objectType = _page;


                if ( PAGE.group === 'animation' )

                    [ _object.group, _object.groupType ] = [ `Handler/${PAGE.group.toTitleCase ( )}`, PAGE.group.toTitleCase ( ) ];


                if ( PAGE.subgroup === 'easing' )
                {
                    let _timing = _object.code.toString ( ).match ( /timing: '([^']+)',/ ) [ 1 ];

                    let _match  = _timing.match ( /(In|Out)/g );

                    let _path   = ( _match.length < 2 ) ? _match [ 0 ] : _match [ 0 ] + _match [ 1 ];


                    _object.subgroup = `Handler/Animation/Ease/${_path}/${_timing}`;
                }
            }
        }

        /**
         * Sets card section's inner HTML
         * @private
         * @name _setCardSection
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
         * @name _setCards
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _setCards ( element )
        {
            let _link = element.srcElement;


            element.preventDefault ( );


            PAGE = new Page ( _link );


            ( cardObjects [ PAGE.group ] [ PAGE.type ] )

                ? this._setAlbumCards ( )

                : this._setByrneSystemsLogo ( );
        }

        /**
         * Sets the album cards for the current 'Page'
         * @private
         * @name _setAlbumCards
         * @function
         */
        _setAlbumCards ( )
        {
            let _cardObjects = TOOL.copyObjectWithKey ( cardObjects );


            this.clearScreen        ( true );

            this._setImagePath      ( _cardObjects );

            this._setCardSection    ( _cardObjects );


            this._evalCardObjects   ( _cardObjects );
        }

        /**
         * Sets all event listeners for this object
         * @private
         * @name _setEventListeners
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

                    let _buttons = document.querySelector ( '#nav-links' ).querySelectorAll ( 'button' );


                    for ( let _button of _buttons )

                        _button.addEventListener ( 'click', ( ) => this.toggle._navDropdown ( _button ) );

                case 'navLinks':

                    let _links = document.querySelector ( '#nav-links' ).querySelectorAll ( 'a' );


                    for ( let _link of _links )

                        _link.addEventListener ( 'click', ( element ) => this._setCards ( element, _link ) );

                case 'copy':

                    let _copyButton = document.querySelector ( 'button.copy-code-link' );

                        _copyButton.addEventListener ( 'click', TOOL.copyCode );

                case 'lab':

                    let _labButton = document.querySelector ( 'button.lab-station' );

                    let _labOpen   = document.querySelector ( '#lab-open'          );

                    let _labLink   = document.querySelector ( '.lab-station-link'  );

                        _labLink.addEventListener ( 'click', ( element ) =>
                            {
                                let _code = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


                                _labButton.click ( );

                                LAB.editor.setValue ( _code );

                                LAB.runCode ( );

                                LAB.editor.selection.moveCursorTo ( 0, 0 );
                            } );

                        _labOpen.addEventListener ( 'click', ( ) => UI.toggle.fullscreen ( ) );
            }
        }

    ////    GETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Returns a button for navigation links
         * @private
         * @name _getButton
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
         * Returns a link for navigation links
         * @private
         * @name _getLink
         * @function
         * @param           {Object} link                       Navigation link object
         * @return          {HTMLElement}                       List item HTML element
         */
        _getLink ( link )
        {
            let _li    = document.createElement ( 'li'  );

            let _img   = document.createElement ( 'img' );

            let _a     = document.createElement ( 'a'   );

            let _cover = ( link.group === 'Animation' ) ? 'Object' : link.group;

                _img.src = `images/svg/${_cover}/${link.title}.svg`;

                _li.append ( _img );


                _a.href      = `#${link.group}${link.title}`;

                _a.innerHTML = link.title;

                _li.append ( _a );


            return _li;
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Displays an alert message within the modal
         * @public
         * @name alert
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
         * @name clearScreen
         * @function
         * @param           {boolean} setCardAlbum              Sets card album display to block (true) || none (false)
         */
        clearScreen ( setCardAlbum = false )
        {
            let _markup =
            {
                main:   document.querySelector ( 'main' ),

                album:  document.querySelector ( '.album' ),

                cards:  document.querySelector ( '#test-cards' ),

                logo:   document.querySelector ( '#byrne-systems-logo' ),

                lab:    document.querySelector ( 'main > div.lab-station' ),

                button: document.querySelector ( 'button.lab-station' )
            }


            initCanvasLab ( );                              // @NOTE: canvasLab doesn't not initialize twice here, if there's already a preexisting 'window.canvasLab' object within the DOM


            if ( _markup.logo ) _markup.logo.remove ( );


            _markup.main.style.overflowY = 'auto';

            _markup.album.style.display  = ( setCardAlbum ) ? 'block' : 'none';

            _markup.cards.innerHTML      = '';

            _markup.lab.style.display    = 'none';


            _markup.button.firstElementChild.classList.remove ( 'selected' );
        }

        /**
         * Returns whether the navigation bar is open
         * @private
         * @name _isNavOpen
         * @function
         * @return          {boolean}                           True | False
         */
        _isNavOpen       = ( )             => ( document.querySelector ( 'nav' ).style.left === '0px' );

        /**
         * Runs code from within the passed 'cardObjects' param
         * @private
         * @name _evalCardObjects
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         */
        _evalCardObjects = ( cardObjects ) => { eval ( this._getCode ( cardObjects ) ); }

        /**
         * Embeds easing buttons for each animation card
         * @private
         * @name _embedEasingButtons
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
         * Creates easing links for animation cards
         * @private
         * @name _createEasingButtons
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
         * Checks whether ancillary sub animation buttons are collapsible
         * @private
         * @name _checkCollapsible
         * @function
         * @param           {number} index                      Index to check
         */
        _checkCollapsible ( buttons, index )
        {
            if ( ! buttons [ index ].classList.contains ( 'collapsed' ) )

                buttons [ index ].click ( );
        }

        /**
         * Collapses uncollapsed ancillary buttons, outside of the present button
         * @private
         * @name _collapseButtons
         * @function
         * @param           {string} present                    data-bs-target attribute
         */
        _collapseButtons ( buttons, present )
        {
            for ( let _button of buttons )
            {
                if ( _button.getAttribute ( 'data-bs-target' ) === present )

                    continue;


                if ( ! _button.classList.contains ( 'collapsed' ) )

                    _button.click ( );
            }
        }

    ////    INITIALIZER(S)    //////////////////////////////////////////////////////////////////////

        /**
         * Sets easing animation for an animation card
         * @public
         * @name runEasingAnimation
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


            cardObjects [ PAGE.group ] [ PAGE.type ] [ index ] = _card;


            this._setAlbumCards ( );
        }

        /**
         * Sets User Interface
         * @public
         * @name init
         * @function
         */
        init ( )
        {
            ( window ) ? this._setByrneSystemsLogo ( )

                       : console.error ( '[ ERROR ]: window.master is not available !' );


            this._setEventListeners ( );
        }
}
 
/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _classes     = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    let _cardObjects =
    {
        object:
        {
            line:
            [
                {
                    title: 'draw',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke cap',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                {
                    title: 'shadow offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                {
                    title: 'curve',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 75, 0, 0 );

                        _line.draw ( );
                    }
                },
                {
                    title: 'move',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.border = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.axis = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'coordinates',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, -50, -50, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
            ],
            circle:
            [
                {
                    title: 'draw',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                {
                    title: 'radius',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.radius = 50;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle start',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle end',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle clockwise',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.alpha  = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'shadow offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'move',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.border = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.axis = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'coordinates',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.coordinates = true;

                        _circle.draw ( );
                    }
                },
            ],
            rectangle:
            [
                {
                    title: 'draw',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'shadow offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'move',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.axis = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.border = true;

                        _rectangle.draw ( );
                    }
                },
            ],
            text:
            [
                {
                    title: 'draw',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                {
                    title: 'text',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.text = '!@#$%^&*'

                        _text.draw ( );
                    }
                },
                {
                    title: 'type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                {
                    title: 'size',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                {
                    title: 'weight',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                {
                    title: 'maxWidth',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                {
                    title: 'offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.stroke.segments = [ 2, 7, 10 ];

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.alpha = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.fill.alpha  = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
            ],
        },
        subject:
        {
            anchor:
            [
                {
                    title: 'Align',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top-Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom-Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom-Left',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Left',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top-Left',
                    text: 'blah... blah... blah...',
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
                {
                    title: 'angle start',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle end',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle clockwise',
                    text: 'blah... blah... blah...',
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
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 50 };

                        _rectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 0, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 90, 0, -90, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 90, -50, -90, 50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( -90, 50, 90, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( -45, 45, -45, 45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
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
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
            ],
            shadow:
            [
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
            ],
        },
        animation:
        {
            line:
            [
                {
                    title: 'animation',
                    text: 'easeInSine',
                    code: ( ) =>
                    {
                        let _flow =
                        {
                            duration: 3000,
                            timing: 'easeInSine',
                            draw ( progress )
                            {
                                _line.rotate ( progress * 500 );
                            }
                        }

                        canvaslab.animate ( _flow );
                    }
                },
            ],
            anchor:
            [
                {
                    title: 'Align',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        let _flow =
                        {
                            duration: 3000,
                            timing: 'easeInSine',
                            draw ( progress )
                            {
                                _rectangle.rotate ( progress * 500 );
                            }
                        }

                        canvaslab.animate ( _flow );
                    }
                },
            ],
        }
    }

    let _navLinks =
    [
        {
            title: 'Objects',
            links:
            [
                {
                    title: 'Line',
                    links: null,
                    group: 'Object'
                },
                {
                    title: 'Circle',
                    links: null,
                    group: 'Object'
                },
                {
                    title: 'Rectangle',
                    links: null,
                    group: 'Object'
                },
                {
                    title: 'Text',
                    links: null,
                    group: 'Object'
                },
                {
                    title: 'Group',
                    links: null,
                    group: 'Object'
                }
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
                                    links: null,
                                    group: 'Subject'
                                },
                                {
                                    title: 'Hsl',
                                    links: null,
                                    group: 'Subject'
                                },
                                {
                                    title: 'Hwb',
                                    links: null,
                                    group: 'Subject'
                                }
                            ]
                        },
                        {
                            title: 'Properties',
                            links:
                            [
                                {
                                    title: 'ColorStop',
                                    links: null,
                                    group: 'Subject'
                                },
                                {
                                    title: 'ColorStops',
                                    links: null,
                                    group: 'Subject'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Draw',
                    links:
                    [
                        {
                            title: 'Stroke',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Fill',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Shadow',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Gradient',
                            links: null,
                            group: 'Subject'
                        },
                    ]
                },
                {
                    title: 'Staging',
                    links:
                    [
                        {
                            title: 'Anchor',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Angle',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Aspect',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'ControlPoints',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Font',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Point',
                            links: null,
                            group: 'Subject'
                        },
                        {
                            title: 'Stage',
                            links: null,
                            group: 'Subject'
                        }
                    ]
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
                            title: 'Line',
                            links: null,
                            group: 'Animation'
                        },
                        {
                            title: 'Circle',
                            links: null,
                            group: 'Animation'
                        },
                        {
                            title: 'Rectangle',
                            links: null,
                            group: 'Animation'
                        },
                        {
                            title: 'Text',
                            links: null,
                            group: 'Animation'
                        },
                        {
                            title: 'Group',
                            links: null,
                            group: 'Animation'
                        }
                    ]
                },
            ]
        }
    ]


    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Initializes classes for application use
         * @private
         * @name _setClasses ( )
         * @function
         */
        function _setClasses ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.log ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );
        }

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
         * @name _setWindowsGlobal
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

    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////////////////////////

        /**
         * Returns library object
         * @private
         * @name _library
         * @function
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib = { }

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Toggles individual card buttons using their 'suite-data' attributes
                 * @public
                 * @name toggleCardButton
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.toggleCardButton      = ( event )                 => UI.toggle.cardButton ( event );

                /**
                 * Runs easing animation for an animation card
                 * @public
                 * @name runEasingAnimation
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.runEasingAnimation    = ( easingFunction, index ) => UI.runEasingAnimation ( easingFunction, index );

                /**
                 * Runs lab-station code from editor
                 * @public
                 * @name _runLabStationCode
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => LAB.runCode ( );


            return _lib;
        }

    ////    INITIALIZE    //////////////////////////////////////////////////////////////////////////

        /**
         * Initiates devSuite
         * @private
         * @name _init
         * @function
         */
        function _init ( )
        {
            window.devSuite = _library ( );


            _setEnvironment ( );


            if ( window.cardObjects )
            {
                UI.init  ( );

                LAB.init ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !');
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
