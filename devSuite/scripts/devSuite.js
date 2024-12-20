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

            case 'roundedrectangle':    return 'RoundedRectangle';

            case 'roundedrectangles':   return 'RoundedRectangles';

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

    _clipboard =
    {
        coordinates:
        {
            display:   undefined,
            cartesian: undefined,
            center:    undefined
        },
        angle:
        {
            degree:   undefined,
            distance: undefined
        }
    }

    #mouse =
    {
        click: false,
        hold:  false,
        point: new Point
    }

    _script =
    {
        title:  undefined,
        timing: undefined
    }

    constructor ( ) { }

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ EDITOR ]    //////////////////////////////

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

    ////    UTILITIES    ///////////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

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
             * Clears existing animations
             * @private
             * @function
             */
            _clearExistingAnimations ( )
            {
                let _animation = canvaslab.application.animation;


                if ( _animation )

                    _animation.cancel
            }

            /**
             * Copy passed contents to clipboard
             * @public
             * @async
             * @function
             * @param           {string} contents                   Contents to copy to clipboard
             */
            async _copyToClipboard ( contents )
            {
                try
                {
                    await navigator.clipboard.writeText ( contents );

                    console.info ( 'Copied to clipboard' );
                }
                catch ( err )
                {
                    console.error ( 'Failed to copy: ', err );
                }
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
             * Get angle from two points
             * @private
             * @function
             * @param           {Point} start                       Starting point
             * @param           {Point} end                         Ending point
             * @return          {number}                            Degree of angle; 360°
             */
            _getAngle ( start, end )
            {
                let _x = end.x - start.x;

                let _y = end.y - start.y;


                let _radian = - ( Math.atan2 ( _y, _x ) );

                let _degree = _radian * ( 180 / Math.PI );


                if ( _degree < 0 )

                    _degree = _degree + 360;


                return _degree;
            }

            /**
             * Returns positions of bounding characters within the ace-editor
             * @private
             * @function
             * @param           {Array.<string>} characters         Bounding characters
             * @param           {string}        data                Data to parse
             * @return          {Object}                            Bounding character's starting & ending position(s)
             */
            _getBoundingCharactersPositions ( characters, data )
            {
                let _cursor = this.editor.selection.getCursor ( );


                let _start = data.indexOf ( characters [ 0 ] ) + 1;

                let _end   = data.indexOf ( characters [ 1 ], _start + 1 );


                while ( _cursor.column > _end )
                {
                    _start = data.indexOf ( characters [ 0 ], _end + 1 ) + 1;

                    _end   = data.indexOf ( characters [ 1 ], _start + 1 );
                }


                return new Object ( { start: _start, end: _end } );
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
             * Get distance between two points
             * @private
             * @function
             * @param           {Point} start                       Starting point
             * @param           {Point} end                         Ending point
             * @return          {number}                            Distance in pixels
             */
            _getDistance ( start, end )
            {
                return Math.sqrt ( ( Math.pow ( start.x - end.x, 2 ) ) + ( Math.pow ( start.y - end.y, 2 ) ) );
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


                UI.toggle.labPopup ( '#input-menu', '.menu_popup' );
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
             * Rotates the origin point by the degree & distance passed
             * @public
             * @function
             * @param           {Point}  origin                             Origin point
             * @param           {number} degree                             Degree to rotate
             * @param           {number} distance                           Distance from origin
             */
            _rotatePoint ( origin = { x, y }, degree, distance )
            {
                let _point = new Point;

                let _angle = ( degree % 360 );


                    _point.x = origin.x + Math.cos ( _angle * Math.PI / 180 ) * distance;

                    _point.y = origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


                return _point;
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

                        this._setMenuPopup ( );


                        let _menu   = document.querySelector    ( '#input-menu' );

                        let _popups = document.querySelectorAll ( '.menu_popup > li' );


                        _menu.addEventListener ( 'click', ( ) => UI.toggle.labPopup ( '#input-menu', '.menu_popup' ) );


                        for ( let _popup of _popups )

                            _popup.addEventListener ( 'click', ( element ) => this._getMenuPopup ( element ) );

                    case 'grid':

                        let _grid = document.getElementById ( 'input-grid' );

                            _grid.addEventListener ( 'click', ( ) => UI.toggle.grid ( ) );

                    case 'coordinates':

                        let _coordinates = document.getElementById ( 'input-coordinates' );

                            _coordinates.addEventListener ( 'click', ( ) => UI.toggle.coordinates ( ) );

                    case 'angle':

                        let _angle = document.getElementById ( 'input-angle' );

                            _angle.addEventListener ( 'click', ( ) => UI.toggle.angle ( ) );

                    case 'ruler':

                        let _ruler = document.getElementById ( 'input-ruler' );

                            _ruler.addEventListener ( 'click', ( ) => UI.toggle.ruler ( ) );

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

                    case 'timing':

                        this._setTimingPopup ( );


                        let _timing  = document.querySelector    ( '#input-timing' );

                        let _entries = document.querySelectorAll ( '.timing_popup > li' );


                        _timing.addEventListener ( 'click', ( ) => UI.toggle.labPopup ( '#input-timing', '.timing_popup' ) );


                        for ( let _entry of _entries )

                            _entry.addEventListener ( 'click', ( element ) => this._swapValue ( element, /ease(In|Out)\w+/, [ "'", "'" ] ) );

                    case 'valuePlus':

                        let _valuePlus = document.querySelector ( '#input-value-plus' );

                            _valuePlus.addEventListener ( 'click', ( ) => this._setNumbericValue ( true ) );

                    case 'valueMinus':

                        let _minus = document.querySelector ( '#input-value-minus' );

                            _minus.addEventListener ( 'click', ( ) => this._setNumbericValue ( false ) );

                    case 'colorPicker':

                        let _colorPicker = this._getColorPicker ( 'input-color-picker' );

                            _colorPicker.onChange = ( element ) => this._swapValue ( element, /\d{1,3},\s\d{1,3},\s\d{1,3}(,\s\d)?/, [ "(", ")" ] )

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

                    case 'click':

                        let _mouseAngle       = document.querySelector ( '#input-angle' );

                        let _mouseCoordinates = document.querySelector ( '#input-coordinates' );


                        window.addEventListener ( 'mousedown', ( event ) =>
                        {
                            let _labColLeft = document.querySelector ( '#lab > div:nth-child(1)' );

                            let _navWidth   = ( UI._isNavOpen ( ) ) ? 225 : 0;


                            if ( _labColLeft.clientWidth + _navWidth > event.clientX  &&  _labColLeft.clientHeight > event.clientY )
                            {
                                if ( ! this.#mouse.click )
                                {
                                    this.#mouse.point = new Point ( event.clientX, event.clientY );

                                    this.#mouse.click = true;


                                    TOOL.delay ( 1000 ).then ( ( ) => this.#mouse.hold = true );
                                }
                            }
                        } );

                        window.addEventListener ( 'mouseup', ( event ) =>
                        {
                            let _labColLeft = document.querySelector ( '#lab > div:nth-child(1)' );

                            let _content    = '';


                            if ( _labColLeft.clientWidth + 225 > event.clientX  &&  _labColLeft.clientHeight > event.clientY )
                            {
                                if ( TOOL.isActive ( _mouseAngle ) )

                                    _content += JSON.stringify ( this._clipboard.angle );


                                if ( TOOL.isActive ( _mouseCoordinates ) )

                                    _content += '\n' + JSON.stringify ( this._clipboard.coordinates );


                                if ( this.#mouse.hold )
                                {
                                    let _degree   = this._getAngle ( this.#mouse.point, new Point ( event.clientX, event.clientY ) );

                                    let _distance = this._getDistance ( this.#mouse.point, new Point ( event.clientX, event.clientY ) );


                                    _content += '\n' + JSON.stringify ( this.#mouse.point );

                                    _content += '\n' + JSON.stringify ( { degree: _degree, distance: _distance } );


                                    this.#mouse.hold = false;
                                }


                                this._copyToClipboard ( _content );


                                this.#mouse.click = false;
                            }
                        } );

                    case 'inputEvents':

                        // function _onMouseEvent ( event )
                        // {
                        //     console.log ( event.type );
                        // }

                        // let _canvas = document.getElementById ( 'canvas' );

                        // let _events = [ 'mousedown', 'mouseup', 'click', 'dblclick', 'mousewheel', 'mousemove', 'mouseover', 'mouseout' ]


                        // for ( let _event of _events )

                        //     _canvas.addEventListener ( event, _onMouseEvent );

                        // document.getElementById ( 'canvas' ).addEventListener ( 'mousemove', ( ) => console.log ( 'move !' ) );

                    case 'keyboardCommands':

                        Mousetrap.bind ( 'space',     ( ) => this.runCode ( )          );

                        Mousetrap.bind ( 'n',         ( ) => UI.toggle.navigation  ( ) );

                        Mousetrap.bind ( 'f',         ( ) => UI.toggle.fullscreen  ( ) );

                        Mousetrap.bind ( 'g',         ( ) => UI.toggle.grid        ( ) );

                        Mousetrap.bind ( 'r',         ( ) => UI.toggle.ruler       ( ) );

                        Mousetrap.bind ( 'd',         ( ) => UI.toggle.download    ( ) );

                        Mousetrap.bind ( 'c',         ( ) => UI.toggle.coordinates ( ) );

                        Mousetrap.bind ( 'a',         ( ) => UI.toggle.angle       ( ) );
                }
            }

            /**
             * Sets the title of the current script being used within the lab environment
             * @private
             * @function
             * @param           {Function} script                   Script to identify
             */
            _setMenuScriptTitle ( script )
            {
                let _scripts = devSuite.getScripts ( );


                for ( let _script in _scripts )

                    if ( script === _scripts [ _script ] )

                        this._script.title = _script;
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
            _setMenuPopup (  )
            {
                let _popup   = document.querySelector ( '.menu_popup' );

                let _scripts = devSuite.getScripts ( );

                let _show    = ( _popup.style.display === 'none' );


                if ( _show )

                    for ( let _script in _scripts )
                    {
                        let _li = document.createElement ( 'li' );

                            _li.innerHTML = _script;


                            _popup.appendChild ( _li );
                    }
            }

            /**
             * Sets the timing's menu items
             * @private
             * @function
             */
            _setTimingPopup (  )
            {
                let _popup   = document.querySelector ( '.timing_popup' );

                let _timings =
                [
                    'easeInSine',                     // IN
                    'easeInCubic',
                    'easeInQuint',
                    'easeInCirc',
                    'easeInElastic',
                    'easeInQuad',
                    'easeInQuart',
                    'easeInExpo',
                    'easeInBack',

                    'easeOutSine',                    // OUT
                    'easeOutCubic',
                    'easeOutQuint',
                    'easeOutCirc',
                    'easeOutElastic',
                    'easeOutQuad',
                    'easeOutQuart',
                    'easeOutExpo',
                    'easeOutBack',

                    'easeInOutSine',                  // INOUT
                    'easeInOutCubic',
                    'easeInOutQuint',
                    'easeInOutCirc',
                    'easeInOutElastic',
                    'easeInOutQuad',
                    'easeInOutQuart',
                    'easeInOutExpo',
                    'easeInOutBack',
                ]

                let _show    = ( _popup.style.display === 'none' );


                if ( _show )
                {
                    _popup.addEventListener ( 'mouseout', ( ) => UI.toggle.labPopup ( '#input-timing', '.timing_popup' ) );


                    for ( let _timing of _timings )
                    {
                        let _li = document.createElement ( 'li' );

                            _li.innerHTML = _timing;


                            _popup.appendChild ( _li );
                    }
                }
            }

            /**
             * Swap rgb values between color-picker and ace-editor
             * @private
             * @function
             * @param           {HTMLElement}    element            HTML DOM Element
             * @param           {regex}          regex              RegEx to match
             * @param           {Array.<string>} boundingCharacters Bounding characters around selection
             */
            _swapValue ( element, regex, boundingCharacters )
            {
                let _isColor = ( element.constructor.name === 'd' );

                let _value   = ( _isColor ) ? ` ${element._rgba [ 0 ]}, ${element._rgba [ 1 ]}, ${element._rgba [ 2 ]}, ${element._rgba [ 3 ]} `

                                            : element.srcElement.innerHTML;


                let _regex    = new RegExp ( regex );


                let _cursor   = this.editor.selection.getCursor ( );

                let _line     = this.editor.session.getLine ( _cursor.row );


                let _position = this._getBoundingCharactersPositions ( boundingCharacters, _line );

                let _range    = new ace.Range ( _cursor.row, _position.start, _cursor.row, _position.end );

                let _text     = this.editor.session.getTextRange ( _range ).trim ( );


                if ( _regex.test ( _text ) )
                {
                    _range = new ace.Range ( _cursor.row, 0, _cursor.row, _line.length );

                    _line  = _line.subStringRange ( _position.start, _position.end, _value );


                    this.editor.session.replace ( _range, _line );

                    this.editor.selection.moveCursorTo ( _cursor.row, _position.start + 1 );

                    this.runCode ( );
                }
                else

                    console.warn ( '[ lab-station ]: the appropriate value is not present within selection !' );
            }

        ////    PUBLIC    //////////////////////////////////

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

                ////    OPTIONS    /////////////////////////////////////////////////

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

                ////    ANCILLARY    ///////////////////////////////////////////////

                    this._setMenuScriptTitle ( script );
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


                this._clearExistingAnimations ( );

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

            /**
             * Sets angle overlay
             * @public
             * @function
             */
            setAngle ( )
            {
                let _existing = document.getElementById ( 'angle' );


                if ( _existing )

                    _existing.remove ( );

                ////    INSERT ANGLE    ////////////////////////////////////////////

                    let _parent  = document.querySelector ( '#lab > div:nth-child(1)' );

                    let _canvas  = document.querySelector ( '#canvas' );

                    let _angle   = document.createElement ( 'canvas' );

                    let _context = _angle.getContext ( '2d' );


                    [ _angle.id, _angle.width, _angle.height ] = [ 'angle', _canvas.clientWidth, _canvas.clientHeight ];


                        _parent.insertBefore ( _angle, _canvas );

                ////    OUTPUT    //////////////////////////////////////////////////

                    let _mouseAngle    = document.querySelector ( '#mouse-angle > .cartesian > .angle' );

                    let _mouseDistance = document.querySelector ( '#mouse-angle > .cartesian > .distance' );

                ////    DISPLAY    /////////////////////////////////////////////////

                    let _id       = 'angle';

                    let _navWidth = 225;

                    let _color    = new Rgb ( 0, 175, 125, 1 );


                    let _line = new Line;

                    let _circle = new Circle;

                    let _dotCircle = new Circle;

                    let _centerCircle = new Circle;


                        _line.stroke.color = _circle.fill.color = _dotCircle.fill.color = _centerCircle.stroke.color = _color;


                        [ _line.stroke.type, _line.stroke.segments, _line.stroke.width ] = [ 'dashed', [ 3, 3 ], 1 ];


                        _circle.stroke.color.alpha = _dotCircle.stroke.color.alpha = 0;

                ////    EVENT LISTENER    //////////////////////////////////////////

                    window.addEventListener ( 'mousemove', ( event ) =>
                    {
                        let _x = ( UI._isNavOpen ( ) ) ? event.clientX - _navWidth : event.clientX;

                        let _y = event.clientY;


                        let _degree         = this._getAngle    ( canvaslab.center, new Point ( _x, _y ) );

                        let _distance       = this._getDistance ( canvaslab.center, new Point ( _x, _y ) );


                        let _circleDistance = this._getDistance ( canvaslab.center, new Point ( _x, _y ) ) / 3.3;

                        let _endPoint       = this._rotatePoint ( canvaslab.center, _degree, _circleDistance );


                        let _dotDistance    = this._getDistance ( canvaslab.center, new Point ( _x, _y ) ) / 3.05;

                        let _dotPoint       = this._rotatePoint ( canvaslab.center, _degree, _dotDistance );

                        ////    SET    /////////////////////////////////////////////

                        [ _line.start,         _line.end            ] = [ canvaslab.center, _endPoint            ];

                        [ _circle.point,       _circle.radius       ] = [ _endPoint,        _circleDistance / 30 ];

                        [ _dotCircle.point,    _dotCircle.radius    ] = [ _dotPoint,        _dotDistance    / 50 ];

                        [ _centerCircle.point, _centerCircle.radius ] = [ canvaslab.center, _circleDistance / 2  ];

                        ////    DRAW    ////////////////////////////////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );


                        _line.draw ( _id );

                        _circle.draw ( _id );

                        _dotCircle.draw ( _id );

                        _centerCircle.draw ( _id );

                        ////    MEASURING LINE    //////////////////////////////////

                        if ( this.#mouse.click )
                        {
                            let _point = ( UI._isNavOpen ( ) ) ? new Point ( this.#mouse.point.x - _navWidth, this.#mouse.point.y )

                                                               : this.#mouse.point;


                            let _lineDegree   = this._getAngle    ( _point, new Point ( _x, _y ) );

                            let _lineDistance = this._getDistance ( _point, new Point ( _x, _y ) );


                            let _circle = new Circle ( _point, 7 );

                            let _line   = new Line ( _point, new Point ( _x, _y ) );


                                _line.stroke.type = 'dashed';


                                _line.draw ( _id );

                                _circle.draw ( _id );


                            [ _mouseAngle.innerHTML, _mouseDistance.innerHTML ] = [ Math.round ( _lineDegree ) + '°', Math.round ( _lineDistance ) + ' <i>d</i>' ];
                        }
                        else

                            [ _mouseAngle.innerHTML, _mouseDistance.innerHTML ] = [ Math.round ( _degree ) + '°', Math.round ( _distance ) + ' <i>d</i>' ];


                        ////    CLIPBOARD    ///////////////////////////////////////

                        this._clipboard.angle.degree   = `${_degree}°`;

                        this._clipboard.angle.distance = `${_distance} d`;
                    } );
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
             * Sets coordinates overlay
             * @public
             * @function
             */
            setCoordinates ( )
            {
                let _existing = document.getElementById ( 'coordinates' );


                if ( _existing )

                    _existing.remove ( );

                ////    INSERT COORDINATES    //////////////////////////////////////

                    let _parent      = document.querySelector ( '#lab > div:nth-child(1)' );

                    let _canvas      = document.querySelector ( '#canvas' );

                    let _coordinates = document.createElement ( 'canvas' );

                    let _context     = _coordinates.getContext ( '2d' );


                    [ _coordinates.id, _coordinates.width, _coordinates.height ] = [ 'coordinates', _canvas.clientWidth, _canvas.clientHeight ];


                        _parent.insertBefore ( _coordinates, _canvas );

                ////    OUTPUT    //////////////////////////////////////////////////

                    let _displayX   = document.querySelector ( '#mouse-coordinates > .display > .x' );

                    let _displayY   = document.querySelector ( '#mouse-coordinates > .display > .y' );

                    let _cartesianX = document.querySelector ( '#mouse-coordinates > .cartesian > .x' );

                    let _cartesianY = document.querySelector ( '#mouse-coordinates > .cartesian > .y' );

                    let _centerX    = document.querySelector ( '#mouse-coordinates > .center > .x' );

                    let _centerY    = document.querySelector ( '#mouse-coordinates > .center > .y' );

                ////    DISPLAY    /////////////////////////////////////////////////

                    let _id       = 'coordinates';

                    let _color    = new Rgb ( 255, 0, 0 );

                    let _navWidth = 225;

                    let _gap      = 15;


                    let _lineXOne = new Line;

                    let _lineYOne = new Line;

                    let _lineXTwo = new Line;

                    let _lineYTwo = new Line;


                        _lineXOne.stroke.color = _lineYOne.stroke.color = _lineXTwo.stroke.color = _lineYTwo.stroke.color = _color;

                ////    EVENT LISTENER    //////////////////////////////////////////

                    window.addEventListener ( 'mousemove', ( event ) =>
                    {
                        let _x = ( UI._isNavOpen ( ) ) ? event.clientX - _navWidth : event.clientX;

                        let _y = event.clientY;


                        let _display   = new Point ( _x, _y );

                        let _cartesian = new Point ( _x - canvaslab.center.x, canvaslab.center.y - _y );

                        let _center    = new Point ( canvaslab.center.x, canvaslab.center.y );

                        ////    SET    /////////////////////////////////////////////

                        [ _lineXOne.start, _lineXOne.end ] = [ new Point ( 0, _y ),         new Point ( _x - _gap, _y  )          ];

                        [ _lineXTwo.start, _lineXTwo.end ] = [ new Point ( _x + _gap, _y ), new Point ( _coordinates.width, _y  ) ];


                        [ _lineYOne.start, _lineYOne.end ] = [ new Point ( _x, 0 ),         new Point ( _x, _y - _gap )           ];

                        [ _lineYTwo.start, _lineYTwo.end ] = [ new Point ( _x, _y + _gap ), new Point ( _x, _coordinates.height ) ];

                        ////    DRAW    ////////////////////////////////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );


                        _lineXOne.draw ( _id );

                        _lineYOne.draw ( _id );

                        _lineXTwo.draw ( _id );

                        _lineYTwo.draw ( _id );

                        ////    DISPLAY    /////////////////////////////////////////

                        [ _displayX.innerHTML,   _displayY.innerHTML   ] = [ _x,                 _y                 ];

                        [ _cartesianX.innerHTML, _cartesianY.innerHTML ] = [ _cartesian.x,       _cartesian.y       ];

                        [ _centerX.innerHTML,    _centerY.innerHTML    ] = [ canvaslab.center.x, canvaslab.center.y ];

                        ////    CLIPBOARD    ///////////////////////////////////////

                        this._clipboard.coordinates =
                        {
                            display:   _display,
                            cartesian: _cartesian,
                            center:    _center
                        }
                    } );
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

            /**
             * Sets lab default options
             * @public
             * @function
             * @param           {Array.<string>} defaults           Array of default options
             */
            setLabDefaults ( defaults )
            {
                let _defaults = ( defaults === undefined ) ? [ 'sidebar', /* 'grid', 'clear', 'coordinates', 'angle' */ ]

                                                           : defaults;


                for ( let _type of _defaults )
                {
                    let _input = document.getElementById ( `input-${_type}` );


                    if ( ! TOOL.isActive ( _input ) )

                        _input.click ( );

                    else

                        continue;

                }
            }

    ////    INITIALIZER    /////////////////////////////////////////////////////

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

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ ENTRIES ]    /////////////////////////////

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

    ////    [ UTILITIES ]    ///////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

            /**
             * Returns a current timestamp
             * @private
             * @function
             * @return          {string}                            Timestamp
             */
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

        ////    PUBLIC    //////////////////////////////////

            /**
             * Sets a single entry with the passed message param
             * @public
             * @function
             * @param           {string} message                    Message for log entry
             */
            entry ( message )
            {
                let _timestamp = `[ ${this._timestamp ( )} ]`;

                let _entry     = ( typeof message === 'string' ) ? `${_timestamp} => ${message}`

                                                                 : _timestamp;


                this._entries.push ( _entry );
            }

            /**
             * View all entries
             * @public
             * @function
             */
            view ( )
            {
                for ( let _entry of this.entries )

                    console.log ( _entry );
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

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ PAGE ]    ////////////////////////////////

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

        ////    [ GROUP ]    ///////////////////////////////

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

        ////    [ HANDLER ]    /////////////////////////////

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
                group:   new RegExp ( /(Object|Subject|Template)/  ),

                handler: new RegExp ( /(Processing|Animation)/ )
            }


            if ( _match || typeof button === 'object' )
            {
                let _button  = _match.replace ( '#', '' );


                this.handler = ( _regex.handler.test ( _button ) ) ? _button.match ( _regex.handler ) [ 0 ].toLowerCase ( ) : this.handler;

                this.group   = _button.match ( _regex.group ) [ 0 ].toLowerCase ( );

                this.type    = ( this.handler ) ? _button.replace ( this.group.toTitleCase ( ), '' ).replace ( this.handler.toTitleCase ( ), '' ).toLowerCase ( ) : _button.replace ( this.group.toTitleCase ( ), '' ).toLowerCase ( );

                this.type    = ( this.type === 'cimage'            ) ? 'cImage'            : this.type;

                this.type    = ( this.type === 'roundedrectangle'  ) ? 'roundedRectangle'  : this.type;

                this.type    = ( this.type === 'roundedrectangles' ) ? 'roundedRectangles' : this.type;
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


                           <div class="card-body-lab">

                               <img src="images/svg/General/lab-bottle-black.svg" suite-data-code="{{code}}" class="lab-bottle" onclick="devSuite.toggleLab ( event )">

                           </div> <!-- .card-body-lab -->


                           <canvas id="canvas_{{index}}"></canvas>


                           <div class="card-body">

                               <div class="title">{{title}}</div>

                               <div class="card-body-buttons">

                                   <span class="icons">

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
            Line:              '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Lines:             '{ x: 0, y: 0 }',
            Circle:            '{ x: 154, y: 77 }',
            Circles:           '{ x: 50, y: 10 }',
            Ellipse:           '{ x: 154, y: 77 }',
            Ellipses:          '{ x: 50, y: 10 }',
            Rectangle:         '{ x: 154, y: 77 }',
            Rectangles:        '{ x: 50, y: 10 }',
            RoundedRectangle:  '{ x: 154, y: 77 }',
            RoundedRectangles: '{ x: 50, y: 10 }',
            Text:              '{ x: 154, y: 77 }, \'Text\'',
            Texts:             '{ x: 50, y: 10 }',
            Image:             '\'images/png/moon.png\', { point: new Point ( 154, 65 ), aspect: new Aspect }',
            Group:             '{ x: 20, y: 0 }',
        },
        subject:
        {
            Line:             '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Circle:           '{ x: 154, y: 77 }',
            Ellipse:          '{ x: 154, y: 77 }',
            Rectangle:        '{ x: 154, y: 77 }',
            RoundedRectangle: '{ x: 154, y: 77 }',
            Text:             '{ x: 154, y: 77 }, \'Text\'',
            Image:            '\'images/png/moon.png\', { point: new Point ( 154, 65 ), aspect: new Aspect }',
        },
        animation:
        {
            Line:             '{ x: 100, y: 50 }, { x: 200, y: 100 }',
            Circle:           '{ x: 154, y: 77 }',
            Ellipse:          '{ x: 154, y: 77 }',
            Rectangle:        '{ x: 154, y: 77 }',
            RoundedRectangle: '{ x: 154, y: 77 }',
            Text:             '{ x: 154, y: 77 }, \'Text\'',
            Image:            '\'images/png/moon.png\', { point: new Point ( 154, 65 ), aspect: new Aspect }',
        }
    }

    constructor ( ) { }

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ STANDARD ]    ////////////////////////////

            /**
             * Returns a standard HTML card template
             * @readOnly
             * @function
             * @return          {string}                            HTML card standard template
             */
            get standard ( ) { return this._types.standard; }

        ////    [ BLANK ]    ///////////////////////////////

            /**
             * Returns a blank HTML card template
             * @readOnly
             * @function
             * @return          {string}                            HTML card blank template
             */
            get blank ( ) { return this._types.blank; }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

            /**
             * Cleans count duplicates (i.e. _00_00... to _00)
             * @private
             * @function
             * @param           {string} code                       Card-object's function
             * @param           {string} count                      Number for unique variable identifiers
             */
            _cleanCountDuplicates ( code, count )
            {
                let _regex = new RegExp ( /_\d{2}_\d{2}/g );


                while ( code.match ( _regex ) )

                    code = code.replace ( _regex, `_${count}` );


                return code;
            }

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

                        cardObject [ _entry ] = ( PAGE.group === 'template' ) ? this._modifyTemplateCode ( cardObject [ _entry ], count )

                                                                              : this._modifyCode ( cardObject [ _entry ], count );


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
                                        _childType  = ( _childType === 'Cimage' ) ? 'cImage' : _childType;

                                    let _childGroup = TOOL.isCanvasLabObject ( _childType ) ? 'Object' : 'Subject';

                                    template        = template.replace ( /{{childGroup}}/, _childGroup ).replace ( /{{childType}}/, _childType ).replace ( /{{childType}}/, _childType );
                                }

                                break;

                            default:

                                let _group = ( PAGE.group === 'template' ) ? 'Template' : TOOL.isCanvasLabObject ( _type ) ? 'Object' : 'Subject';

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
                let _specials = [ '_transition' ];


                for ( let _special of _specials )
                {
                    let _regex = new RegExp ( _special, 'g' );


                    if ( _regex.test ( code ) )
                    {
                        switch ( _special )
                        {
                            case '_transition':

                                let _lineIndex = /let\s_transition[^=]+=/g.exec ( code ).index;

                                let _headCode  = code.substring ( 0, _lineIndex ).trim ( ) + '\n\n';

                                let _temp      = code.match ( /let\s_transition[^,]+,[^,]+[^}]+}[^}]+}[^\w]+canvaslab[^;]+;/g ) [ 0 ].split ( '\n' );


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
             * Match variables via the passed lines & regex params
             * @private
             * @function
             * @param           {RegEx}          regex              Regex to match
             * @param           {Array.<string>} lines              Lines of code to match
             * @param           {string}         count              Number for unique variable identifiers
             */
            _matchVariables ( regex, lines, count )
            {
                for ( let _index in lines )
                {
                    let _line = lines [ _index ];

                    let _match = _line.match ( /_\w+/ );

                        _match = ( _match ) ? _match [ 0 ] : undefined;


                    if ( regex.test ( _line ) )
                    {
                        let _matches = _line.match ( /_\w+/g );


                        for ( let _match of _matches )

                            _line = this._modifyVariables ( _line, _match, count );

                    }
                    else if ( _match )

                        _line = this._modifyVariables ( _line, _match, count );


                    lines [ _index ] = _line.replace ( /\s{4}/, '' );
                }


                if ( ! lines [ 0 ] )              // Trim first line if nothing's present

                    lines.shift ( );


                return lines.join ( '\n' );
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

                let _variable = ( _class === 'RoundedRectangle')  ? '_roundedRectangle'  : `_${_class.toLowerCase ( )}`;

                    _variable = ( _class === 'RoundedRectangles') ? '_roundedRectangles' : _variable;

                let _regex    = new RegExp ( _variable, 'g' );

                let _init     = ( PAGE.handler ) ? this._initializer [ PAGE.handler ] [ _class ] : this._initializer [ PAGE.group ] [ _class ];


                switch ( _class )
                {
                    case 'Lines':               _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Line ( { x:  60, y: 50 }, { x: 160, y: 100 } ),\n        new Line ( { x: 140, y: 50 }, { x: 240, y: 100 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;     break;

                    case 'Circles':             _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Circle ( { x:  60, y: 50 } ),\n        new Circle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                         break;

                    case 'Ellipses':            _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Ellipse ( { x:  60, y: 50 } ),\n        new Ellipse ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                         break;

                    case 'Rectangles':          _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Rectangle ( { x:  60, y: 50 } ),\n        new Rectangle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                   break;

                    case 'RoundedRectangles':   _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new RoundedRectangle ( { x:  60, y: 50 } ),\n        new RoundedRectangle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                                   break;

                    case 'Texts':               _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.push (\n        new Text ( { x:  60, y: 50 } ),\n        new Text ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.canvas = 'canvas_${count}';\n\n    ${_variable} [ 0 ].text = ${_variable} [ 1 ].text = 'Text';\n${_code}`;                                             break;

                    case 'Group':               _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.lines.push (\n        new Line ( { x:  60, y: 50 }, { x: 120, y: 100 } ),\n        new Line ( { x: 140, y: 50 }, { x: 200, y: 100 } )\n    );\n\n     ${_variable}.circles.push (\n        new Circle ( { x:  60, y: 50 } ),\n        new Circle ( { x: 140, y: 50 } )\n    );\n\n    ${_variable}.rectangles.push (\n        new Rectangle ( { x:  120, y: 100 } ),\n        new Rectangle ( { x: 200, y: 100 } )\n    );\n\n    ${_variable}.texts.push (\n        new Text ( { x:  60, y: 120 } ),\n        new Text ( { x: 200, y: 50 } )\n    );\n\n    ${_variable}.texts [ 0 ].text = ${_variable}.texts [ 1 ].text = 'Text';\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;     break;

                    case 'Image':               _code = `let ${_variable} = new cImage ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                     break

                    default:                    _code = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;                     break
                }


                _code = _code.replace ( _regex, `${_variable}_${count}` );

                _code = this._getSpecialVariables ( _code, count );


                return _code;
            }

            /**
             * Modifies code to include instantiation expressions & unique variable identifiers; for Templates only
             * @private
             * @function
             * @param           {function} code                     Card-object's function
             * @param           {string}   count                    Number for unique variable identifiers
             * @return          {string}                            Code string
             */
            _modifyTemplateCode ( code, count )
            {
                let _code  = UI.clean.code ( code );

                let _lines = _code.split ( /\n/ );

                let _regex = ( PAGE.handler === 'animation' ) ? new RegExp ( /_\w+/g )

                                                              : new RegExp ( /_group.(template)\s*=\s*new\s*\w+\s\(\s*[^\)]+\)/g );

                    _lines = this._matchVariables ( _regex, _lines, count );

                    _code  = _lines.replace ( /'canvas';/, `'canvas_${count}';` );

                    _code  = this._cleanCountDuplicates ( _code, count );


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

                        let _timing = cardObject.code.toString ( ).match ( /timing:\s*'([^']+)',/ );

                            _timing = ( ! _timing ) ? cardObject.code.toString ( ).match ( /_timing[^=]+=\s*'([^']+)'/ ) [ 1 ]

                                                    : _timing = _timing [ 1 ];

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

        ////    PUBLIC    //////////////////////////////////

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
 
/**
 * @class           {Object} UserInterface              User Interface
 * @property        {Object} toggle                     Toggling functions
 * @property        {Object} clean                      Cleaning functions
 */
class Ui
{
    _toggle =
    {
        ////    PRIVATE    /////////////////////////////////

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

                let _increment   = 15;


                if ( left )

                    _navLinks.style.paddingLeft = `${_paddingLeft - _increment}px`;

                else

                    if ( _openButtons <= _menuDepth )

                        _navLinks.style.paddingLeft = `${_paddingLeft + _increment}px`;
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

                    document.getElementById ( 'nav-links' ).style.paddingLeft = '3.5rem'
            },

            /**
             * Resets lab control by toggling off & on that control
             * @private
             * @function
             * @param           {string} control                    Lab control to toggle
             */
            _resetLabControl ( control )
            {
                let _element = document.querySelector ( `#input-${control}` );

                let _code    = `UI.toggle.${control}();`


                if ( TOOL.isActive ( _element ) )

                    for ( let _i = 0; _i < 2; _i++ )

                        eval ( _code );
            },

            /**
             * Toggles between two buttons in the navigation tree
             * @private
             * @function
             * @param           {HTMLElement} buttonOne             HTML DOM Element for button one
             * @param           {HTMLElement} buttonTwo             HTML DOM Element for button two
             * @param           {boolean}     closeOne              Whether to close button one
             */
            _twoButtons ( buttonOne, buttonTwo, closeOne )
            {
                if ( UI._isButtonOpen ( buttonOne )  &&  UI._isButtonOpen ( buttonTwo ) )

                    ( closeOne ) ? buttonOne.click ( )

                                 : buttonTwo.click ( );


                    this._navMove ( true );
            },

        ////    PUBLIC    //////////////////////////////////

            /**
             * Toggles angle in lab
             * @public
             * @function
             */
            angle ( )
            {
                LAB.setAngle ( );


                let _angle      = document.getElementById ( 'angle' );

                let _mouseAngle = document.getElementById ( 'mouse-angle' );

                let _button     = document.getElementById ( 'input-angle' );


                this.labButton ( _button );


                ( TOOL.isActive ( _button ) ) ? [ _angle.style.opacity, _mouseAngle.style.opacity, document.body.style.cursor ] = [ 1, 1, 'crosshair' ]

                                              : [ _angle.style.opacity, _mouseAngle.style.opacity, document.body.style.cursor ] = [ 0, 0, 'default'   ];
            },

            /**
             * Returns the start & end positions of the regex matched; within the passed data
             * @private
             * @function
             * @param           {RegEx}  regex                      Regex to match
             * @param           {string} data                       Data to parse
             * @return          {Object}                            Bounding character's starting & ending position(s)
             */
            _getTextPositions ( regex, data )
            {
                let _cursor  = LAB.editor.selection.getCursor ( );

                let _indexes = new Array;

                let _match   = undefined;

                let _result  = undefined;

                let _count   = 0;


                while ( ( _match = regex.exec ( data ) ) != null )              // Set all found indexes

                    _indexes.push ( [ _match.index, regex.lastIndex ] );


                for ( let _index of _indexes )                                  // Get the accurate index in relation to the current cursor's position

                    if ( _cursor.column > _index [ 1 ] )

                        _count++;

                    else

                        _result = _count;


                return new Object ( { start: _indexes [ _result ] [ 0 ], end: _indexes [ _result ] [ 1 ] } );
            },

            /**
             * Toggles boolean value in lab
             * @public
             * @function
             */
            boolean ( )
            {
                let _regex    = new RegExp ( /true|false/g );

                let _cursor   = LAB.editor.selection.getCursor ( );

                let _line     = LAB.editor.session.getLine ( _cursor.row );

                let _position = this._getTextPositions ( _regex, _line );

                let _range    = new ace.Range ( _cursor.row, _position.start, _cursor.row, _position.end );

                let _boolean  = LAB.editor.session.getTextRange ( _range ).trim ( );


                if ( _regex.test ( _boolean ) )

                    _boolean = ( _boolean === 'true' ) ? 'false' : 'true';


                LAB.editor.session.replace ( _range, _boolean );

                LAB.runCode ( );
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

            /**
             * Toggles coordinates in lab
             * @public
             * @function
             */
            coordinates ( )
            {
                LAB.setCoordinates ( );


                let _coordinates = document.getElementById ( 'coordinates' );

                let _mouseCoordinates = document.getElementById ( 'mouse-coordinates' );

                let _button      = document.getElementById ( 'input-coordinates' );


                this.labButton ( _button );


                ( TOOL.isActive ( _button ) ) ? [ _coordinates.style.opacity, _mouseCoordinates.style.opacity, document.body.style.cursor ] = [ 1, 1, 'crosshair' ]

                                              : [ _coordinates.style.opacity, _mouseCoordinates.style.opacity, document.body.style.cursor ] = [ 0, 0, 'default'   ];
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
                let _rightColumn      = document.querySelector ( '#lab > div:nth-child(2)' );

                let _leftColumn       = document.querySelector ( '#lab > div:nth-child(1)' );

                let _open             = document.querySelector ( '#lab-open' );

                let _grid             = document.querySelector ( '#input-grid' );

                let _mouseAngle       = document.querySelector ( '#input-angle' );

                let _mouseCoordinates = document.querySelector ( '#input-coordinates' );

                let _angle            = document.querySelector ( '#mouse-angle');

                let _coordinates      = document.querySelector ( '#mouse-coordinates' );

                let _styles           = window.getComputedStyle ( _rightColumn );

                let _fullscreen       = ( _styles.display === 'block' );

                ////    TOGGLE NAVIGATION    ///////////////////////////////////////

                if ( UI._isNavOpen ( ) )

                    this.navigation ( );

                ////    RESET STYLES    ////////////////////////////////////////////

                ( _fullscreen ) ? _rightColumn.style.display = 'none'

                                : _rightColumn.style.display = 'block';


                ( _fullscreen ) ? _leftColumn.style.width = '100%'

                                : _leftColumn.style.width = '50%';


                ( _fullscreen ) ? _open.style.display = 'block'

                                : _open.style.display = 'none';


                ( _fullscreen ) ? _angle.style.width = _coordinates.style.width = '100%'

                                : _angle.style.width = _coordinates.style.width = '50%';

                ////    RESET CANVAS & LAB OPTIONS    //////////////////////////////

                LAB.setCanvasSize ( );

                this._resetLabControl ( 'grid' );

                this._resetLabControl ( 'coordinates' );

                this._resetLabControl ( 'angle' );

                LAB.runCode ( );

                ////    EVENT LISTENER    //////////////////////////////////////////

                _open.addEventListener ( 'click', ( ) => this.fullscreen ( ) );
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

                let _code    = _element.getAttribute ( 'suite-data-code' ).replaceAll ( /_\d{2}/g, '' );


                UI.clearScreen  ( false, true );

                LAB.editor.setValue ( _code );

                LAB.setCanvasSize ( );

                LAB.setLabDefaults ( );

                LAB.runCode ( );


                if ( PAGE.group === 'template' )

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


                ( _active ) ? element.classList.remove ( 'active' )

                            : element.classList.add    ( 'active' );


                ( _active ) ? element.setAttribute ( 'data-bs-active', false )

                            : element.setAttribute ( 'data-bs-active', true  );
            },

            labPopup ( buttonId, popupId )
            {
                let _button = document.querySelector ( buttonId );

                let _popup  = document.querySelector ( popupId );

                let _show   = ( _popup.style.display === 'none' );


                switch ( popupId )
                {
                    case '.menu_popup':

                        for ( let _child of _popup.children )
                        {
                            _child.className = "";              // clear class list


                            if ( LAB._script.title === _child.innerHTML )

                                _child.classList.add ( 'active' );
                        }

                        break;

                    case '.timing_popup':

                        console.log ( '_popup:', _popup );

                        break;
                }


                _popup.style.bottom  = ( window.screen.width < 1500 ) ? '78px' : '40px';

                _popup.style.display = ( _show ) ? 'block' : 'none';


                this.labButton ( _button );
            },

            /**
             * Toggles visibility of navigation menu
             * @public
             * @function
             */
            navigation ( )
            {
                let _lab         = document.querySelector ( 'div.lab-station' );

                let _nav         = document.querySelector ( 'nav' );

                let _main        = document.querySelector ( 'main' );

                let _open        = document.querySelector ( '#nav-open' );

                let _button      = document.querySelector ( '#input-sidebar' );

                let _angle       = document.querySelector ( '#mouse-angle');

                let _coordinates = document.querySelector ( '#mouse-coordinates' );

                let _grid        = document.querySelector ( '#input-grid' );

                let _navIcons    = _nav.querySelector ( '#nav-icon' ).children;

                let _navOpen     = UI._isNavOpen ( );


                this.labButton ( _button );

                ////    RESET STYLES   /////////////////////////////////////////////

                ( _navOpen ) ? [ _nav.style.left, _main.style.paddingLeft ] = [ '-225px',   '0px' ]

                             : [ _nav.style.left, _main.style.paddingLeft ] = [    '0px', '225px' ];


                ( _navOpen ) ? _angle.style.width = _coordinates.style.width = '50%'

                             : _angle.style.width = _coordinates.style.width = '42%';


                if ( _lab.style.display === 'block' )
                {
                    LAB.setCanvasSize ( );

                    LAB.runCode ( );
                }


                for ( let _navIcon of _navIcons )           // Blink eye

                    _navIcon.style.display = ( _navIcon.style.display === 'none' ) ? 'block' : 'none';


                _open.style.display = ( _open.style.display === 'none' ) ? 'block' : 'none';


                this._resetLabControl ( 'grid' );
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
    }

    constructor ( ) { }

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ TOGGLE ]    //////////////////////////////

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

        ////    [ CLEAN ]    ///////////////////////////////

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

    ////    VALIDATION    //////////////////////////////////////////////////////

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
         * @return          {boolean}                           True || False
         */
        _isNavOpen ( )
        {
            return ( document.querySelector ( 'nav' ).style.left === '0px' );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

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
                let _codes      = [ ]

                let _isTemplate = ( PAGE.group === 'template' );


                for ( let _object of objects )
                {
                    if ( _isTemplate )

                        _object.code = _object.code.replace ( /canvaslab\.center/g, 'new Point ( 154, 77 )' );


                    _codes.push ( `////    ${_object.title}    //////////////////////////\n\n${_object.code}` );
                }


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


                        _open.addEventListener ( 'click', ( ) => document.body.style.cursor = 'default' );

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

                    case 'navButtons-toggle':

                        let _navButtonsArray =
                        [   /////////////////////////////////////    BUTTON 01    ///////////////////////////////////// ////////////////////////////////////    BUTTON 02    ////////////////////////////////////
                            [ '#core-collapse > li:nth-child(1) > button',                                              '#core-collapse > li:nth-child(3) > button'                                              ],
                            [ '#animations-collapse > li:nth-child(1) > button',                                        '#animations-collapse > li:nth-child(3) > button'                                        ],
                            [ '#core-collapse > #subjects-collapse > li:nth-child(1) > button',                         '#core-collapse > #subjects-collapse > li:nth-child(3) > button'                         ],
                            [ '#animations-collapse > #subjects-collapse > li:nth-child(1) > button',                   '#animations-collapse > #subjects-collapse > li:nth-child(3) > button'                   ],
                            [ '#core-collapse > #subjects-collapse > #color-collapse > li:nth-child(1) > button',       '#core-collapse > #subjects-collapse > #color-collapse > li:nth-child(3) > button'       ],
                            [ '#animations-collapse > #subjects-collapse > #color-collapse > li:nth-child(1) > button', '#animations-collapse > #subjects-collapse > #color-collapse > li:nth-child(3) > button' ]
                        ]

                        for ( let _navButtons of _navButtonsArray )
                        {
                            let _buttonOne = document.querySelector ( _navButtons [ 0 ] );

                            let _buttonTwo = document.querySelector ( _navButtons [ 1 ] );


                                _buttonOne.addEventListener ( 'click', ( ) => this.toggle._twoButtons ( _buttonOne, _buttonTwo, false ) );

                                _buttonTwo.addEventListener ( 'click', ( ) => this.toggle._twoButtons ( _buttonOne, _buttonTwo, true  ) );

                        }

                    case 'copy':

                        let _copyButton = document.querySelector ( 'button.copy-code-link' );

                            _copyButton.addEventListener ( 'click', TOOL.copyCode );

                    case 'lab':

                        let _main       = document.getElementsByTagName ( 'main' ) [ 0 ];

                        let _labStation = document.querySelector ( 'main > div.lab-station' );

                        let _lab        = document.querySelector ( '#nav-lab > img.lab-bottle' );


                            _lab.addEventListener ( 'click', ( ) =>
                            {
                                this.clearScreen  ( );


                                _labStation.style.display = 'block';

                                _main.style.overflowY     = 'hidden';


                                LAB.setCanvasSize ( );

                                LAB.setLabDefaults ( );

                                LAB.runCode ( );
                            } );


                        window.addEventListener ( 'resize', LAB.setCanvasSize );

                    case 'lab-links':

                        let _labLink = document.querySelector ( '.lab-station-link'  );

                            _labLink.addEventListener ( 'click', ( element ) =>
                                {
                                    let _code  = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


                                    _lab.click ( );

                                    LAB.editor.setValue ( _code );

                                    LAB.runCode ( );

                                    LAB.editor.selection.moveCursorTo ( 0, 0 );
                                } );

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

        ////    PUBLIC    //////////////////////////////////

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

                let _regex   = new RegExp ( '_(line|lines|circle|circles|ellipse|ellipses|rectangle|rectangles|roundedRectangle|roundedRectangles|text|texts|image)', 'g' );

                let _objects = [ 'line', 'lines', 'circle', 'circles', 'ellipse', 'ellipses', 'rectangle', 'rectangles', 'roundedRectangle', 'roundedRectangles', 'text', 'texts', 'image' ]


                let _result = ( ! _objects.includes ( _class ) )

                                  ? ( _regex.test ( code ) )

                                        ? code.match ( _regex ) [ 0 ].replace ( '_', '' )

                                        : _class

                                  : _class;


                return _result.toTitleCase ( );
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

    ////    INITIALIZER(S)    //////////////////////////////////////////////////

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
    let _classes = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    /**
     * Array of navigation links
     * @type {Array.<Object>}
     * @example { title: 'Title', group: 'Icon folder', links: <Array.<Object>> | null }
     */
    let _navLinks =
    [
        // core
        {
            title: 'Core',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title: 'Collections',
                            links:
                            [
                                {
                                    title: 'Lines',
                                    group: 'Object'
                                },
                                {
                                    title: 'Circles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Ellipses',
                                    group: 'Object'
                                },
                                {
                                    title: 'Rectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'RoundedRectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Texts',
                                    group: 'Object'
                                },
                                {
                                    title: 'Group',
                                    group: 'Object'
                                },
                            ]
                        },
                        {
                            title: 'Line',
                            group: 'Object'
                        },
                        {
                            title: 'Circle',
                            group: 'Object'
                        },
                        {
                            title: 'Ellipse',
                            group: 'Object'
                        },
                        {
                            title: 'Rectangle',
                            group: 'Object'
                        },
                        {
                            title: 'RoundedRectangle',
                            group: 'Object'
                        },
                        {
                            title: 'Text',
                            group: 'Object'
                        },
                        {
                            title: 'cImage',
                            group: 'Object'
                        },
                    ]
                },
                // subjects
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
                        //     title: 'Templates',
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
            ]
        },
        // templates
        {
            title: 'Templates',
            links:
            [
                {
                    title: 'SacredCircles',
                    group: 'Template'
                },
            ]
        },
        // Animations
        {
            title: 'Animations',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title:   'Line',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Circle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Ellipse',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Rectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'RoundedRectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Text',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'cImage',
                            group:   'Object',
                            handler: 'Animation'
                        }
                    ]
                },
                // subjects
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
                                            title:   'Rgb',
                                            group:   'Subject',
                                            handler: 'Animation'
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
                                                    title:   'Stop',
                                                    group:   'Subject',
                                                    handler: 'Animation'
                                                }
                                            ]
                                        },
                                        {
                                            title:   'Linear',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Radial',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Conic',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                    ]
                                }
                            ]
                        },
                        // {
                        //     title: 'Templates',
                        //     links:
                        //     [
                        //         {
                        //             title: 'SacredCircles',
                        //             group: 'Subject',
                        //             handler: 'Animation'
                        //         },
                        //     ]
                        // },
                        {
                            title: 'Staging',
                            links:
                            [
                                {
                                    title:   'Anchor',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Angle',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Aspect',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'ControlPoints',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Font',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Point',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                            ]
                        },
                        {
                            title:   'Stroke',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Fill',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Shadow',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                    ]
                },
                // templates
                {
                    title: 'Templates',
                    links:
                    [
                        {
                            title:   'SacredCircles',
                            group:   'Template',
                            handler: 'Animation'
                        },
                    ]
                },
            ]
        },
    ]

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
                    children: [ 'options', 'shadow' ],
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
                    children: [ 'options', 'shadow', 'rgb' ],
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
                    children: [ 'options', 'shadow' ],
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
                    children: [ 'options', 'shadow', 'point' ],
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
                        _line.curve ( 50, 0, 0, 0 );

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
                        _line.move ( 90, 25 );

                        _line.draw ( );
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

                        _line.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.anchor.align   = 'start';

                        _line.draw ( );
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
                    children: [ 'options', 'controlpoints' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 0, 0, -50 ];

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
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
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
                    children: [ 'line' ],
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
                    children: [ 'line' ],
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
                //     children: [ 'line' ],
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
                    children: [ 'line' ],
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
                    children: [ 'line' ],
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
                    children: [ 'line' ],
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
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.move ( 90, 25 );

                        _circle.draw ( );
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
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
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
                    children: [ 'circle' ],
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
                    children: [ 'circle' ],
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
                //     children: [ 'circle' ],
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
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.coordinates = true;

                        _circles.draw ( );
                    }
                },
            ],
            ellipse:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // radius
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 50, 30 );

                        _ellipse.draw ( );
                    }
                },
                // radius ellipse
                // {
                //     title:   'radius ellipse',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = { x: 25, y: 50 };

                //         _ellipse.draw ( );
                //     }
                // },
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern    = 'images/png/sun.png';

                        _ellipse.fill.repetition = 'no-repeat';

                        _ellipse.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.move ( 90, 25 );

                        _ellipse.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.rotate ( 45 );

                        _ellipse.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align   = 'topLeft';

                        _ellipse.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.border = true;

                        _ellipse.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.axis = true;

                        _ellipse.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
                    }
                },
            ],
            ellipses:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.shadow = true;

                        _ellipses.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.border = true;

                        _ellipses.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.axis = true;

                        _ellipses.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipses.options.anchor   = true;

                //         _ellipses.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.coordinates = true;

                        _ellipses.draw ( );
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
                    title:   'shadow color',
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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.move ( 90, 25 );

                        _rectangle.draw ( );
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
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
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
                    children: [ 'rectangle' ],
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
                    children: [ 'rectangle' ],
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
                //     children: [ 'rectangle' ],
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
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.coordinates = true;

                        _rectangles.draw ( );
                    }
                },
            ],
            roundedRectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // round general
                // {
                //     title:   'round general',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 10 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // round specific
                // {
                //     title:   'round specific',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 0, 10, 0, 20 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                        _roundedRectangle.fill.repetition = 'no-repeat';

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.move ( 90, 25 );

                        _roundedRectangle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.rotate ( 45 );

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align   = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.border = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.axis = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            roundedRectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.shadow = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.border = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.axis = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangles.options.anchor   = true;

                //         _roundedRectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.coordinates = true;

                        _roundedRectangles.draw ( );
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
                        _text.stroke.width = 2;

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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.move ( 90, 25 );

                        _text.draw ( );
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
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
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
                    children: [ 'text' ],
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
                    children: [ 'text' ],
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
                //     children: [ 'text' ],
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
                    children: [ 'text' ],
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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.move ( 90, 25 );

                        _image.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.rotate ( 45 );

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
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align   = 'topLeft';

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
                // coordinates
                // {
                //     title:   'coordinates',
                //     text:    'blah... blah... blah...',
                //     children: [ 'options' ],
                //     code: ( ) =>
                //     {
                //         _image.options.coordinates = true;

                //         _image.draw ( );
                //     }
                // },
            ],
            group:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'circle', 'ellipse', 'rectangle', 'roundedrectangle' ],
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
                // Align : circle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // Align Top : circle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'top';

                        _circle.draw ( );
                    }
                },
                // Align Top-Right : circle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topRight';

                        _circle.draw ( );
                    }
                },
                // Align Right : circle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'right';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Right : circle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomRight';

                        _circle.draw ( );
                    }
                },
                // Align Bottom : circle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottom';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Left : circle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomLeft';

                        _circle.draw ( );
                    }
                },
                // Align Left : circle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'left';

                        _circle.draw ( );
                    }
                },
                // Align Top-Left : circle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topLeft';

                        _circle.draw ( );
                    }
                },

                // Align : ellipse
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // Align Top : ellipse
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'top';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Right : ellipse
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Right : ellipse
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'right';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Right : ellipse
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom : ellipse
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottom';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Left : ellipse
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomLeft';

                        _ellipse.draw ( );
                    }
                },
                // Align Left : ellipse
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'left';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Left : ellipse
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topLeft';

                        _ellipse.draw ( );
                    }
                },

                // Align : rectangle
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
                // Align Top : rectangle
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
                // Align Top-Right : rectangle
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
                // Align Right : rectangle
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
                // Align Bottom-Right : rectangle
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
                // Align Bottom : rectangle
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
                // Align Bottom-Left : rectangle
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
                // Align Left : rectangle
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
                // Align Top-Left : rectangle
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

                // Align : roundedRectangle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top : roundedRectangle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'top';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Right : roundedRectangle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Right : roundedRectangle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'right';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Right : roundedRectangle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom : roundedRectangle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottom';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Left : roundedRectangle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Left : roundedRectangle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'left';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Left : roundedRectangle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },

                // Align : image
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // Align Top : image
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'top';

                        _image.draw ( );
                    }
                },
                // Align Top-Right : image
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topRight';

                        _image.draw ( );
                    }
                },
                // Align Right : image
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'right';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Right : image
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomRight';

                        _image.draw ( );
                    }
                },
                // Align Bottom : image
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottom';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Left : image
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomLeft';

                        _image.draw ( );
                    }
                },
                // Align Left : image
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'left';

                        _image.draw ( );
                    }
                },
                // Align Top-Left : image
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topLeft';

                        _image.draw ( );
                    }
                },
            ],
            angle:
            [
                // angle start : circle
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
                // angle end : circle
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
                // angle clockwise : circle
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
                // angle clockwise : circle
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 180;

                        _circle.angle.end   = 360;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },

                // angle start : ellipse
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end : ellipse
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 180;

                        _ellipse.angle.end   = 360;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
            ],
            aspect:
            [
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 25, height: 25 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 50 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
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

                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 25, height: 25 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 50 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 50, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                // control points p0
                {
                    title:   'control points p0',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p0      = 50;

                        _line.draw ( );
                    }
                },
                // control points p1
                {
                    title:   'control points p1',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p1      = 50;

                        _line.draw ( );
                    }
                },
                // control points p2
                {
                    title:   'control points p2',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p2      = 50;

                        _line.draw ( );
                    }
                },
                // control points p3
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;

                        _line.controlPoints.p3      = 50;

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
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 50, 50, 50 ];

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
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ -50, 50, -50, 50 ];

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
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, -50, 50, -50 ];

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
                        _line.options.controlPoints = true;

                        _line.controlPoints.points  = [ -50, -50, -50, -50 ];

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.curve ( 50, 50, 50, 50 );

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
                // fill pattern : circle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat : circle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'circle' ],
                //     code: ( ) =>
                //     {
                //         _circle.radius = 50;    // [ Optional ]

                //         _circle.fill.pattern    = 'images/png/sun.png';

                //         _circle.fill.repetition = 'no-repeat';

                //         _circle.draw ( );
                //     }
                // },

                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern : ellipse
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );  // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat : ellipse
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = 50;    // [ Optional ]

                //         _ellipse.fill.pattern    = 'images/png/sun.png';

                //         _ellipse.fill.repetition = 'no-repeat';

                //         _ellipse.draw ( );
                //     }
                // },

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
                // fill pattern : rectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat : rectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'rectangle' ],
                //     code: ( ) =>
                //     {
                //         _rectangle.radius = 50;    // [ Optional ]

                //         _rectangle.fill.pattern    = 'images/png/sun.png';

                //         _rectangle.fill.repetition = 'no-repeat';

                //         _rectangle.draw ( );
                //     }
                // },

                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    },
                },
                // fill pattern : roundedrectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // // fill pattern no-repeat : roundedRectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.radius = 50;    // [ Optional ]

                //         _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                //         _roundedRectangle.fill.repetition = 'no-repeat';

                //         _roundedRectangle.draw ( );
                //     }
                // },

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
                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
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
                // points : line
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
                // coordinates : line
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
                // coordinates : circle
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

                // draw : ellipse
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // coordinates : ellipse
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
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
                // coordinates : rectangle
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

                // draw : roundedRectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates : roundedRectangle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
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
                // offset : text
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
                // coordinates : text
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

                // draw : cImage
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
            ],
            linear:
            [
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
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

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
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

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            radial:
            [
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
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

                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
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

                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            conic:
            [
                // fill conic : circle
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

                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill conic : rectangle
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

                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            rgb:
            [
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },

                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha : circle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'stop' ],
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
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'radial', 'stop' ],
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
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'stop' ],
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

                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha : ellipse
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha : rectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'stop' ],
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
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'stop' ],
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
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'stop' ],
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

                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha : roundedRectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha : text
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
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
                // shadow color : line
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow alpha : line
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color.alpha = 0.5;

                        _line.draw ( );
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
                // shadow color : circle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow alpha : circle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color.alpha = 0.5;

                        _circle.draw ( );
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

                // shadow : ellipse
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color : ellipse
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow alpha : ellipse
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color.alpha = 0.5;

                        _ellipse.draw ( );
                    }
                },
                // shadow blur : ellipse
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
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
                // shadow color : rectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow alpha : rectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color.alpha = 0.5;

                        _rectangle.draw ( );
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

                // shadow : roundedRectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color : roundedRectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow alpha : roundedRectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color.alpha = 0.5;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur : roundedRectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
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
                // shadow color : text
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow alpha : text
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color.alpha = 0.5;

                        _text.draw ( );
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
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'rgb' ],
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
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'gradient', 'rgb' ],
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
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'rgb' ],
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

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'rgb' ],
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
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'rgb' ],
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
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'rgb' ],
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

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            stroke:
            [
                // stroke type : line
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments : line
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width : line
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap : line
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },

                // stroke type : circle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments : circle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width : circle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },

                // stroke type : ellipse
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments : ellipse
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width : ellipse
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },

                // stroke type : rectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments : rectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width : rectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },

                // stroke type : roundedRectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments : roundedRectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width : roundedRectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
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
                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.stroke.width = 1;

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width : text
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );  // [ Optional]

                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
            ]
        },
        template:
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

                        let _iterations = 6;

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

                        let _fills   = new Array;

                        ////    POPULATION    //////////////////////////

                        let _group          = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

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

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

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

                        let _iterations = 6;

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

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.circles.draw ( );
                    }
                },
                // draw ellipses
                {
                    title:   'Ellipses',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.ellipses.draw ( );
                    }
                },
                // draw ellipses & color
                {
                    title:   'Ellipses & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

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

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.ellipses.draw ( );
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

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

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

                        let _iterations = 6;

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

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rounded rectangles
                {
                    title:   'Rounded Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rounded Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

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

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw lines
                // {
                //     title:   'Lines',
                //     text:    'blah... blah... blah...',
                //     children: [ 'group', 'lines', 'line' ],
                //     code: ( ) =>
                //     {
                //         ////    INPUTS    //////////////////////////////

                //         let _center     = canvaslab.center;

                //         let _radius     = 25;

                //         let _iterations = 6;

                //         let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                //         ////    POPULATION    //////////////////////////

                //         let _group = new Group;

                //             _group.canvas = 'canvas';

                //             _group.template = new SacredCircles ( _center, _radius, _iterations, _degrees, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                //             _group.lines.draw ( );
                //     }
                // },
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

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

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
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // startPoint
                    {
                        title: 'Start Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    startPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // endPoint
                    {
                        title: 'End Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    endPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // rotate anchor
                    // {
                    //     title: 'Rotate Anchor',
                    //     text: 'easeInSine',
                    //     children: [ 'anchor' ],
                    //     code: ( ) =>
                    //     {
                    //             _line.options.anchor = true;  // [ Optional ]

                    //         let _transition =
                    //         {
                    //             object: _line,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 rotate: 180,
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // rotate anchor align
                    // {
                    //     title: 'rotate anchor align',
                    //     text: 'easeInSine',
                    //     code: ( ) =>
                    //     {
                    //         _line.options.anchor = true;  // [ Optional ]

                    //         _line.anchor.align   = 'start';

                    //         let _transition =
                    //         {
                    //             object: _line,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 rotate: 180,
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points
                    {
                        title:   'control points',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'controlpoints' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;     // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                circle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // radius
                    {
                        title: 'Radius',
                        text: 'easeInOutElastic',
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    radius: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                ellipse:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // radius
                    // {
                    //     title: 'Radius',
                    //     text: 'easeInOutElastic',
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _ellipse,
                    //             timing: 'easeInOutElastic',
                    //             period: 1750,
                    //             change:
                    //             {
                    //                 radius: 50
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                roundedRectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                text:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                cImage:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ]
            },
            subject:
            {
                anchor:
                [
                    // rotate anchor : line
                    {
                        title: 'rotate anchor',
                        text: 'easeInSine',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                                _line.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : circle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : circle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : ellipse
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : ellipse
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : rectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : rectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : roundedRectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : roundedRectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : text
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : cImage
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : cImage
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                angle:
                [
                    // angle start : circle
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : circle
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // angle start : ellipse
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : ellipse
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                aspect:
                [
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : rectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : rectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : rectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : rectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },

                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : roundedRectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : roundedRectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : roundedRectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : roundedRectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                ],
                controlpoints:
                [
                    // control points p0
                    {
                        title:   'control points p0',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p0: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p1
                    {
                        title:   'control points p1',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p1: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p2
                    {
                        title:   'control points p2',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p2: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p3
                    {
                        title:   'control points p3',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p3: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[0]
                    {
                        title:   'control points p[0]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[1]
                    {
                        title:   'control points p[1]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 50, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[2]
                    {
                        title:   'control points p[2]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 50, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[3]
                    {
                        title:   'control points p[3]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // curve
                    {
                        title:   'curve',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    curve: [ 50, 50, 50, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                fill:
                [
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                font:
                [
                    // font size
                    {
                        title: 'font size',
                        text: 'easeInSine',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fontSize: 36,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                point:
                [
                    // point -x : line
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : line
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : line
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : line
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : circle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : circle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : circle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : circle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : ellipse
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : ellipse
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : ellipse
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : ellipse
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : rectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : rectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : rectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : rectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : roundedRectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : roundedRectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : roundedRectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : roundedRectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : text
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : text
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : text
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : text
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : cImage
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : cImage
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : cImage
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : cImage
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                linear:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                radial:
                [
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                conic:
                [
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rgb:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                shadow:
                [
                    // shadow color : line
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : line
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : line
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : line
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : circle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : circle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : circle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : circle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : ellipse
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : ellipse
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : ellipse
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : ellipse
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : rectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : rectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : rectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : rectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : roundedRectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : roundedRectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : roundedRectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : roundedRectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stop:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stroke:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
            },
            template:
            {
                sacredcircles:
                [
                    // transitions hop
                    {
                        title:   'hop',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeOutBack';

                            let _period     = 500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
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

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.hop ( _group.circles [ 0 ], _group.circles, _timing, _period, _center );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions skip
                    {
                        title:   'skip',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeOutBack';

                            let _period     = 500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
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

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.skip ( _group.circles [ 0 ], _group.circles, _timing, _period, _center );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions bloom out
                    {
                        title:   'bloom out',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
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

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions = _group.template.transitions.bloom ( _group.circles, _timing, _period );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions bloom in
                    {
                        title:   'bloom in',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
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

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions = _group.template.transitions.bloom ( _group.circles, _timing, _period, false );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions shape implicit
                    {
                        title:   'shape implicit',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _seed       = null;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 50;

                            let _strokes    = new Rgb ( 0, 0, 0, 0.3 );

                            let _fills      = new Rgb ( 0, 0, 0, 0 );

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( canvaslab.center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.shape ( _seed, _group.circles, _timing, _period, Circle );

                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions shape explicit
                    {
                        title:   'shape explicit',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 5;

                            let _seed       = [ 37, 39, 59, 9, 0, 17, 11, 15, 13, 49 ];

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 15;

                            let _strokes    = new Rgb ( 0, 0, 0, 0.3 );

                            let _fills      = new Rgb ( 0, 0, 0, 0 );

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( canvaslab.center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.shape ( _seed, _group.circles, _timing, _period, Circle );


                            canvaslab.animate ( _transitions );
                        }
                    },
                ]
            }
        }
    }

    /**
     * Object of lab scripts
     * @type {Object.<Object<Function>>}
     * @example { <title>: <Function> }
     */
    let _scripts =
    {
        seedOfLife: ( ) =>
        {
            ////    INPUT    ///////////////////////////////

            let _center     = canvaslab.center;

            let _radius     = 25;

            let _iterations = 2;

            let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

            let _stroke     = new Rgb ( 0, 0, 0, 1 );

            let _fill       = new Rgb ( 0, 0, 0, 0 );

            ////    DEFINE    //////////////////////////////

            let _group      = new Group;

                _group.template = new SacredCircles ( _center, _radius, _iterations, _stroke, _fill, _degrees );

            ////    DRAW    ////////////////////////////////

                _group.circles.draw ( );
        },
        // seedOfLifeGetPoints: ( ) =>
        // {
        //     ////    INPUT    ///////////////////////////////

        //     let _center        = canvaslab.center;

        //     let _radius        = 35;

        //     let _iterations    = 10;

        //     let _symbolsOfLife =
        //     {
        //         seedStages:
        //         {
        //             zero:   [ 0                   ],    // Day 0 - Spherical Octahedron
        //             one:    [ 0, 1                ],    // Day 1 - Vescia Piscis
        //             two:    [ 0, 1, 2             ],    // Day 2 - Tripod of Life / Triquetra
        //             three:  [ 0, 1, 2, 3          ],    // Day 3
        //             four:   [ 0, 1, 2, 3, 4       ],    // Day 4
        //             five:   [ 0, 1, 2, 3, 4, 5    ],    // Day 5
        //             six:    [ 0, 1, 2, 3, 4, 5, 6 ],    // Day 6 - Seed of Life
        //         },
        //         egg:     [ 0, 8, 10, 12, 14, 16, 18 ],
        //         fruit:   [ 0, 7, 9, 11, 13, 15, 17, 37, 41, 45, 49, 53, 57 ],
        //         fruity:  [ 0, 7, 9, 11, 13, 15, 17, 37, 41, 45, 49, 53, 57, 94, 100, 106, 112, 118, 124 ],
        //         fruitie: [ 0, 7, 9, 11, 13, 15, 17, 37, 41, 45, 49, 53, 57, 94, 100, 106, 112, 118, 124, 127, 134, 141, 148, 155, 162 ],
        //         down:    [ 9, 17, 13 ],
        //         downn:   [ 9, 17, 13, 37, 45, 53 ],
        //         up:      [ 7, 11, 15 ],
        //         upp:     [ 7, 11, 15, 41, 57, 49 ],
        //         flower:  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
        //         tree:    [ 37, 39, 59, 9, 0, 17, 11, 15, 13, 49 ],   // Kabbalah
        //         yinyang: [ 0, 10, 16, 37, 44, 49, 56, 71, 86, 143, 164, 169, 176, 178, 184, 186, 193, 200, 202, 208, 210, 219, 221, 223, 229, 230, 231, 232, 238, 240, 242, 246, 248, 250, 256, 257, 258, 259, 265, 267, 269 ]
        //     }

        //     ////    DEFINE    //////////////////////////////

        //     let _group          = new Group;

        //         _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

        //         _group.circles.draw ( );

        //         _group.texts.draw ( );

        //     ////    POINTS    //////////////////////////////

        //     let _points = _group.circles.getPoints ( _symbolsOfLife.downn );
        // },
        animations: ( ) =>
        {
            ////    INPUT    ///////////////////////////////

            let _center = canvaslab.center;

            let _alpha  = 1;

            let _colors =
            {
                blue:    new Rgb (   0,  0,  255, _alpha ),
                green:   new Rgb (   0, 255,   0, _alpha ),
                red:     new Rgb ( 255,   0,   0, _alpha )
            }

            ////    DEFINE    //////////////////////////////

            let _circleOne    = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _circleTwo    = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _rectangleOne = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _rectangleTwo = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );


                _circleOne.fill.color    = _colors.red;

                _rectangleOne.fill.color = _colors.green;

                _rectangleTwo.fill.color = _colors.blue;

            ////    ANIMATION    ///////////////////////////

            let _transition =
            {
                object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                period: 1750,
                change:
                [
                    { move: { degree: 270, distance: 100 } },
                    { move: { degree:  90, distance: 100 } },
                    { move: { degree:   0, distance: 100 } },
                    { move: { degree: 180, distance: 100 } }
                ]
            }

            canvaslab.animate ( _transition );
        },
        animationsArray: ( ) =>
        {
            ////    INPUT    ///////////////////////////////

            let _center = canvaslab.center;

            let _alpha  = 1;

            let _colors =
            {
                blue:    new Rgb (   0,  0,  255, _alpha ),
                green:   new Rgb (   0, 255,   0, _alpha ),
                red:     new Rgb ( 255,   0,   0, _alpha )
            }

            ////    DEFINE    //////////////////////////////

            let _circleOne    = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _circleTwo    = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _rectangleOne = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _rectangleTwo = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );


                _circleOne.fill.color    = _colors.red;

                _rectangleOne.fill.color = _colors.green;

                _rectangleTwo.fill.color = _colors.blue;

            ////    ANIMATION    ///////////////////////////

            let _transitions =
            [
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 1750,
                    change:
                    [
                        { move: { degree: 270, distance: 100 } },
                        { move: { degree:  90, distance: 100 } },
                        { move: { degree:   0, distance: 100 } },
                        { move: { degree: 180, distance: 100 } }
                    ]
                },
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutExpo', 'easeOutElastic', 'easeOutExpo', 'easeOutElastic' ],
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 } },
                        { move: { degree: 270, distance: 100 } },
                        { move: { degree: 180, distance: 100 } },
                        { move: { degree:   0, distance: 100 } }
                    ]
                }
            ]


            canvaslab.animate ( _transitions );
        },
        animationsArrayCache: ( ) =>
        {
            ////    INPUT    ///////////////////////////////

            let _center = canvaslab.center;

            let _alpha  = 1;

            let _colors =
            {
                blue:    new Rgb (   0,  0,  255, _alpha ),
                green:   new Rgb (   0, 255,   0, _alpha ),
                red:     new Rgb ( 255,   0,   0, _alpha )
            }

            ////    DEFINE    //////////////////////////////

            let _circleOne    = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _circleTwo    = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _rectangleOne = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _rectangleTwo = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );


                _circleOne.fill.color    = _colors.red;

                _rectangleOne.fill.color = _colors.green;

                _rectangleTwo.fill.color = _colors.blue;

            ////    ANIMATION    ///////////////////////////

            let _transitions =
            [
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 350,
                    change:
                    [
                        { move: { degree: 270, distance: 100 }, cache: true },
                        { move: { degree:  90, distance: 100 }, cache: true },
                        { move: { degree:   0, distance: 100 }, cache: true },
                        { move: { degree: 180, distance: 100 }, cache: true }
                    ]
                },
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutSine', 'easeOutSine', 'easeOutSine', 'easeOutSine' ],
                    period: 700,
                    change:
                    [
                        { move: { degree:   0, distance: 100 }, cache: true },
                        { move: { degree: 180, distance: 100 }, cache: true },
                        { move: { degree:   0, distance: 100 }, cache: true },
                        { move: { degree: 180, distance: 100 }, cache: true }
                    ]
                },
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 950,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },
                        { move: { degree: 270, distance: 100 }, cache: true },
                        { move: { degree:  90, distance: 100 }, cache: true },
                        { move: { degree: 270, distance: 100 }, cache: true }
                    ]
                },
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutSine', 'easeOutSine', 'easeOutSine', 'easeOutSine' ],
                    period: 1400,
                    change:
                    [
                        { move: { degree: 180, distance: 100 }, cache: true },
                        { move: { degree:   0, distance: 100 }, cache: true },
                        { move: { degree: 180, distance: 100 }, cache: true },
                        { move: { degree:   0, distance: 100 }, cache: true }
                    ]
                },
                {
                    object: [ _circleOne, _rectangleOne, _circleTwo, _rectangleTwo ],
                    timing: [ 'easeOutExpo', 'easeOutElastic', 'easeOutExpo', 'easeOutElastic' ],
                    period: 1750,
                    change:
                    [
                        { move: { degree: 270, distance: 100 }, cache: true },
                        { move: { degree:  90, distance: 100 }, cache: true },
                        { move: { degree: 270, distance: 100 }, cache: true },
                        { move: { degree:  90, distance: 100 }, cache: true }
                    ]
                }
            ]


            canvaslab.animate ( _transitions );
        },
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
            UI.clearScreen ( false, true );


            LAB.setCanvasSize ( );

            LAB.setLabDefaults ( [ 'sidebar' ] );


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
                _lib.toggleCardButton      = ( element )               => UI.toggle.cardButton ( element );

                /**
                 * Toggles lab from each card-object
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleLab             = ( element )               => UI.toggle.lab ( element );


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

                LAB.init ( _scripts.seedOfLife );


                if ( false )

                    _setLabMode ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !' );
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
