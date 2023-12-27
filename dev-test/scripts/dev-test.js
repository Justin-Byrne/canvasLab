// @program:        devTest
// @brief:          Developmental testing framework for canvasLab
// @author:         Justin D. Byrne
// @email:          justin@byrne-systems.com
// @version:        0.0.0-beta
// @license:        GPL-2.0

"use strict";

/**
 * Call main module
 * @module                                                  devTest
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    ARROW FUNCTIONS    /////////////////////////////////////////////////////////////////////

        ////    TEMPLATES    ///////////////////////////////////////////////////

        /**
         * Returns a blank HTML card template
         * @private
         * @name _cardTemplateBlank
         * @function
         * @return          {string}                            Blank HTML card template
         */
        let _cardTemplateBlank = ( ) => `<div class="col blank">

                                            <div class="card blank">

                                                <span class="plus">+</span>

                                           </div>

                                        </div>  <!-- .col -->`;

        /**
         * Returns a HTML card template
         * @private
         * @name _cardTemplate
         * @function
         * @return          {string}                            HTML card template
         */
        let _cardTemplate      = ( ) => `<div class="col">

                                            <div class="card fade-in">

                                                <div class="card-number">

                                                    <span class="close"></span>

                                                        <span class="number">{{number}}</span>

                                                </div>

                                                <canvas id="canvas_{{number}}"></canvas>

                                                <div class="card-body">

                                                    <p class="card-title">{{title}}</p>

                                                    <div class="card-buttons">

                                                        <div class="btn-group">

                                                            <button type="button" id="view_{{number}}" class="btn btn-sm btn-outline-secondary code-view-buttons" data-bs-toggle="modal" data-bs-target="#modal-code" data-devTest-code="{{code}}" data-devTest-title="{{title}}">View</button>

                                                        </div>

                                                        <span class="icons">

                                                            <img src="images/svg/{{subgroup}}.svg" class="card-icons easing">

                                                            <span class="separator">&nbsp;</span>

                                                            <img src="images/svg/{{group}}.svg"    class="card-icons" onclick="devTest.setOffCanvasDocument ( '{{groupType}}' )">

                                                            <img src="images/svg/{{image}}.svg"    class="card-icons" onclick="devTest.setOffCanvasDocument ( '{{objectType}}' )">

                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>  <!-- .col -->`;

        ////    GENERIC FUNCTIONS    ///////////////////////////////////////////

        /**
         * Converts a number into a multi-digit string
         * @private
         * @name _number2String
         * @function
         * @param           {number} number                     Number
         * @return          {string}                            Multi-digit string
         */
        let _number2String = ( number )                         => ( number < 10 ) ? '0' + number.toString ( ) : number.toString ( );

        /**
         * Simple programmatic delay
         * @private
         * @name _delay
         * @function
         * @param           {number} time                       Time to delay
         * @return          {Promise}                           An async promise
         */
        let _delay         = ( time )                           => new Promise ( resolve => setTimeout ( resolve, time ) );

        /**
         * Increment the value passed up (+) or down (-)
         * @private
         * @name _increment
         * @function
         * @param           {string|number} value               Value to increment
         * @param           {boolean}       up                  True (+) || false (-)
         * @return          {number}                            Incremented value
         */
        let _increment     = ( value, up )                      => ( up ) ? Number ( value ) + 1 : Number ( value ) - 1;

        /**
         * Pad a string with a specified amount of zeros
         * @private
         * @name _padZeros
         * @function
         * @param           {string|number} value               Value to pad
         * @param           {number}        amount              Amount to pad
         * @return          {string}                            Padded amount
         */
        let _padZeros      = ( value, amount )                  => String ( value ).padStart ( amount, '0' );

        /**
         * Replace a specific substring position of a string
         * @private
         * @name _replaceRange
         * @function
         * @param           {string} string                     String to substitute
         * @param           {number} start                      Start of substitution
         * @param           {number} end                        End of substitution
         * @param           {string} substitute                 String substitution
         * @return          {string}                            String with substitution
         */
        let _replaceRange  = ( string, start, end, substitute ) => string.substring ( 0, start ) + substitute + string.substring ( end );

        ////    OBJECT LITERALS    /////////////////////////////////////////////

        /**
         * Literal object containing class initializers available through bracket notation
         * @private
         * @name _initializerObject
         * @object
         * @return          {string}                            Class initializer
         */
        let _initializerObject =
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

        /**
         * Literal object containing Ace editor object
         * @note            defined during runtime
         * @private
         * @name _editor
         * @object
         * @return          {Object}                            Ace editor object
         */
        let _editor            = undefined;

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    GENERIC FUNCTIONS    ///////////////////////////////////////////////////////////////////

        /**
         * Displays an alert message within the modal
         * @private
         * @name _alert
         * @function
         * @param           {string} message                    Message to display
         * @param           {string} type                       Type of message; success || failure
         */
        function _alert ( message, type )
        {
            let _wrapper           = document.createElement ( 'div' );

                _wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + '<img src="images/svg/General/info-circle.svg" />' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';


                document.getElementById ( 'copiedAlert' ).append ( _wrapper );
        }

        /**
         * Converts string to title case
         * @private
         * @name _toTitleCase
         * @function
         * @param           {string} string                     String to convert
         * @return          {string}                            Title case string
         */
        function _toTitleCase ( string )
        {
            return string.toLowerCase ( ).split ( ' ' ).map ( function ( word )
            {
                return word.replace ( word [ 0 ], word [ 0 ].toUpperCase ( ) );
            } ).join ( ' ' );
        }

        /**
         * Cleans script of it's function wrapper
         * @private
         * @name _cleanScriptCode
         * @function
         * @param           {Function} script                   JavaScript function
         * @return          {string}                            Function as a string
         */
        function _cleanScriptCode ( script )
        {
            script = script.toString ( ).replace ( /\([^{]+{/, '' );

            return   script.substring ( 0, script.length - 1 );
        }

        /**
         * Cleans code of enumerators for card-objects
         * @private
         * @name _cleanDemoCode
         * @function
         * @param           {Function} script                   JavaScript function; for card-objects only
         * @return          {string}                            Function as a string
         */
        function _cleanDemoCode ( script )
        {
            let _code   = _cleanScriptCode ( script ).split ( /\n/g );

            let _length = _code.at ( -1 ).match ( /^\s+/ ) [ 0 ].length;


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].slice ( _length );


            return _code.join ( '\n' );
        }

        /**
         * Cleans code of enumerators for ace-editor
         * @private
         * @name _cleanAceCode
         * @function
         * @param           {Function} script                   JavaScript function; for ace-editor only
         * @return          {string}                            Function as a string
         */
        function _cleanAceCode ( script )
        {
            let _code = _cleanScriptCode ( script ).split ( /\n/g );

                _code = _code.slice ( 1 );


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].substring ( 16, _code [ _line ].length );


            return _code.join ( '\n' );
        }

        /**
         * Clears screen prior to rebuilding
         * @private
         * @name _clearScreen
         * @function
         * @param           {boolean} setCardAlbum              Sets card album display to block (true) || none (false)
         */
        function _clearScreen ( setCardAlbum = false )
        {
            initCanvasLab ( );

            ////    MAIN SECTION   /////////////////////////////////////////////

                let _main = document.getElementsByTagName ( 'main' ) [ 0 ];

                    _main.style.overflowY = 'auto';

            ////    ALBUM SECTION   ////////////////////////////////////////////

                let _albumSection = document.querySelector ( '.album' );

                    _albumSection.style.display = ( setCardAlbum ) ? 'block' : 'none';

            ////    CARD SECTION    ////////////////////////////////////////////

                let _cardsSection = document.getElementById ( 'test-cards' );

                    _cardsSection.innerHTML = '';

            ////    BYRNE LOGO    //////////////////////////////////////////////

                let _byrneLogo = document.getElementById ( 'byrne-systems-logo' );


                if ( _byrneLogo ) _byrneLogo.remove ( );

            ////    LAB-STATION    /////////////////////////////////////////////

                let _labStation = document.querySelector ( 'main > div.lab-station' );

                    _labStation.style.display = 'none';

                let _button     = document.querySelector ( 'button.lab-station' ).children [ 0 ];

                    _button.classList.remove ( 'selected' );
        }

        /**
         * Toggles opacity from bottom links in navigation area
         * @private
         * @name _toggleBottomLinks
         * @function
         * @param           {HTMLElement} element               Main button element
         */
        function _toggleBottomLinks ( element )
        {
            let _links       = document.querySelector ( 'body > nav > div > span.links' );

            let _buttonState = element.target.attributes [ "data-button-state" ].value;

            let _stateCheck  = ( _buttonState === 'closed' && ! _links.classList.contains ( 'fade' ) );


            ( _stateCheck ) ? _links.classList.add    ( 'fade' )

                            : _links.classList.remove ( 'fade' );


            ( _stateCheck ) ? element.target.setAttribute ( 'data-button-state', 'open'   )

                            : element.target.setAttribute ( 'data-button-state', 'closed' );


            ( _stateCheck ) ? element.target.focus ( )

                            : element.target.blur  ( );
        }

        /**
         * Trims left over image tags from the card template; @see _cardTemplate
         * @private
         * @name _trimExtraImageTags
         * @function
         * @param           {string} template                   HTML template for card-object
         * @param           {Object} cardObject                 Card-object
         * @return          {string}                            HTML template for card-object
         */
        function _trimExtraImageTags ( template, cardObject )
        {
            let _imageTags = [ 'group', 'subgroup' ];


            for ( let _imageTag of _imageTags )

                template = ( cardObject [ _imageTag ] === undefined )

                               ? template.replace ( new RegExp ( `<img[^\{]+{{${_imageTag}[^>]+>` ), '' )
                                         .replace ( new RegExp ( '<span class="separator">[^>]+>' ), '' )

                               : template;


            return template;
        }

        /**
         * Creates easing links for animation cards
         * @private
         * @name _createEasingLinks
         * @function
         * @return          {HTMLElement}                       UL element with all necessary nested elements
         */
        function _createEasingLinks ( )
        {
            let _timings =
            [
                'easeInSine',    'easeInCubic',    'easeInQuint',    'easeInCirc',    'easeInElastic',    'easeInQuad',    'easeInQuart',    'easeInExpo',    'easeInBack',
                'easeOutSine',   'easeOutCubic',   'easeOutQuint',   'easeOutCirc',   'easeOutElastic',   'easeOutQuad',   'easeOutQuart',   'easeOutExpo',   'easeOutBack',
                'easeInOutSine', 'easeInOutCubic', 'easeInOutQuint', 'easeInOutCirc', 'easeInOutElastic', 'easeInOutQuad', 'easeInOutQuart', 'easeInOutExpo', 'easeInOutBack'
            ]

            let _regex   = new RegExp ( /(In|Out)/, 'g' );

            let _div           = document.createElement ( 'div' );

                _div.className = 'easing-wrapper';


            let _ul            = document.createElement ( 'ul' );

                _ul.className  = 'easing-functions';


            for ( let _timing of _timings )
            {
                let _match   = _timing.match ( _regex );

                let _path    = ( _match.length < 2 ) ? _match [ 0 ] : _match [ 0 ] + _match [ 1 ];


                let _img     = document.createElement ( 'img' );

                    _img.src = `images/svg/Handlers/Animation/Ease/${_path}/${_timing}.svg`;


                let _span           = document.createElement ( 'span' );

                    _span.innerHTML = _timing;


                let _li = document.createElement ( 'li' );

                    _li.setAttribute ( 'onclick', `devTest.setEasingAnimation ( '${_timing}', this.parentElement.id )` );

                    _li.appendChild ( _span );

                    _li.appendChild ( _img );


                _ul.appendChild ( _li );
            }


            _div.appendChild ( _ul );


            return _div;
        }

        /**
         * Embeds easing links for each animation card
         * @private
         * @name _embedEasingLinks
         * @function
         */
        function _embedEasingLinks ( )
        {
            let _easings = document.querySelectorAll ( '.easing' );

            let _div      = _createEasingLinks ( );


            for ( let _i = 0; _i < _easings.length; _i++ )
            {
                let _clonedDiv = _div.cloneNode ( true );

                let _ul        = _clonedDiv.children [ 0 ];

                    _ul.id = _i;

                    _ul.setAttribute ( 'onmouseleave', `devTest.toggleEasingFunctions ( ${_i} )` );


                _easings [ _i ].parentNode.insertBefore ( _clonedDiv, _easings.nextSibling );

                _easings [ _i ].setAttribute ( 'onclick', `devTest.toggleEasingFunctions ( ${_i} )` );
            }
        }

        /**
         * Toggles visibility of easing functions
         * @private
         * @name _toggleEasingFunctions
         * @function
         * @param           {number} index                      Index of animation card
         */
        function _toggleEasingFunctions ( index )
        {
            let _easingFunctions = document.querySelectorAll ( '.easing-functions' );


            ( _easingFunctions [ index ].style.visibility === 'hidden' || _easingFunctions [ index ].style.visibility === '' )

                ? [ _easingFunctions [ index ].style.opacity, _easingFunctions [ index ].style.visibility ] = [ 1, 'visible' ]

                : [ _easingFunctions [ index ].style.opacity, _easingFunctions [ index ].style.visibility ] = [ 0, 'hidden'  ];
        }

        /**
         * Removes .fade-in class from pre-existing cards
         * @private
         * @name _removeFadeInAnimations
         * @function
         */
        function _removeFadeInAnimations ( )
        {
            let _easings  = document.querySelectorAll ( '.easing' );


            for ( let _i = 0; _i < _easings.length - 1; _i++ )

                _easings [ _i ].parentElement.parentElement.parentElement.parentElement.className = 'card';
        }

        /**
         * Executes lab-station code from editor
         * @private
         * @name _runLabStationCode
         * @function
         */
        function _runLabStationCode ( )
        {
            let _code    = _editor.getValue ( );

            let _canvas  = document.getElementById ( 'canvas' );

            let _context = canvas.getContext ( '2d' );

                _context.clearRect ( 0, 0, _canvas.width, _canvas.height );


            eval ( _code );
        }

        /**
         * Generates a downloadable file & initiates that download
         * @private
         * @name _download
         * @function
         * @param           {File} file                         File to download
         */
        function _download ( file )
        {
            let _link = document.createElement ( 'a' );

            let _url  = URL.createObjectURL ( file );

                _link.href      = _url;

                _link.download  = file.name


            document.body.appendChild  ( _link );


                _link.click ( );


            document.body.removeChild  ( _link );

            window.URL.revokeObjectURL ( _url  );
        }

        /**
         * Increments a numeric selection from ace-editor up or down
         * @private
         * @name _incrementLabStationValue
         * @function
         * @param           {string}  value                     Value from ace-editor
         * @param           {boolean} up                        Whether to increment positively
         * @return          {string}                            Incremented value
         */
        function _incrementLabStationValue ( value, up )
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

                                           : _increment ( value, up )

                                     : _increment ( value, up );


            _result = ( String ( _result ).length < _length )                   // Pad: [0]+[1-9] using the original value's length

                          ? _padZeros ( _result, _length )

                          : `${_result}`;


            return _result;
        }

        /**
         * Returns positions of bounding characters
         * @private
         * @name _getBoundingCharactersPositions
         * @function
         * @param           {string} character                  Bounding character
         * @param           {string} data                       Data to parse
         * @param           {number} position                   Cursor position; from ace-editor
         * @return          {Object}                            Bounding character's starting & ending position(s)
         */
        function _getBoundingCharactersPositions ( character, data, position )
        {
            let _result  = { start: 0, end: 0 }

            let _indexes = [ ];

            let _split   = data.split ( '' );


            ////    GET INDEXES OF CHARACTER(S)    /////////////////////////////

            for ( let _index in _split )

                if ( _split [ _index ] === character )

                    _indexes.push ( _index );


            ////    GET CLOSEST START POSITION OF CHARACTER    /////////////////

            for ( let _index of _indexes )

                _result.start = ( _index < position ) ? _index : _result.start;


            _result.start = Number ( _result.start ) + 1;


            ////    GET CLOSEST END POSITION OF CHARACTER    ///////////////////

            for ( let _index = _result.start; _index < _split.length; _index++ )

                if ( _split [ _index ] === character )
                {
                    _result.end = _index;

                    break;
                }


            return _result;
        }

        /**
         * Swap rgb values between color-picker and ace-editor
         * @private
         * @name _swapLabStationsRgbValue
         * @function
         * @param           {string} color                      Rgb color value from color-picker
         */
        function _swapLabStationsRgbValue ( color )
        {
            let _rgb      = color.rgbString.replace ( 'rgb(', ''   )
                                           .replace ( ')'   , ''   )
                                           .replace ( /,/g  , ', ' );

            let _regex    = new RegExp ( /^\d{1,3},\s\d{1,3},\s\d{1,3}/ );


            let _cursor   = _editor.selection.getCursor ( );

            let _line     = _editor.session.getLine     ( _cursor.row );


            let _position = _getBoundingCharactersPositions ( "'", _line, _cursor.column );

            let _range    = new ace.Range                   ( _cursor.row, _position.start, _cursor.row, _position.end );

            let _text     = _editor.session.getTextRange    ( _range );


            if ( _regex.test ( _text ) )
            {
                _range = new ace.Range ( _cursor.row, 0, _cursor.row, _line.length   );

                _line  = _replaceRange ( _line, _position.start, _position.end, _rgb );


                _editor.session.replace        ( _range, _line );

                _editor.selection.moveCursorTo ( _cursor.row, _position.start + 1 );


                _runLabStationCode ( );
            }
            else

                console.warn ( '[ lab-station ]: no rgb value is present within selection !' );
        }

        /**
         * Copy code to clipboard
         * @private
         * @name _copyCode
         * @function
         */
        async function _copyCode ( )
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


            _alert ( 'Copied code !', 'success' );

            _delay ( 1000 ).then ( ( ) => document.querySelector ( '#copiedAlert' ).children [ 0 ].remove ( ) );
        }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    SET FUNCTIONS    ///////////////////////////////////////////////////////////////////////

        /**
         * Sets the master classes properties
         * @private
         * @name _setMaster
         * @function
         * @param           {HTMLElement} button                Button triggered by a Nav Link Event Listener
         */
        function _setMaster ( button )
        {
            let _regex = new RegExp ( /(Object|Subject|Animation)/ );

            let _link  = button.href.match ( /#(\w+)/g ) [ 0 ].replace ( '#', '' );


            master.group    = _link.match ( _regex ) [ 0 ].toLowerCase ( );

            master.page     = _link.match ( /[A-Z][a-z]+/g ) [ 1 ].toLowerCase ( );

            master.subgroup = ( master.group === 'animation' ) ? 'easing' : undefined;
        }

        /**
         * Sets easing animation for an animation card
         * @private
         * @name _setEasingAnimation
         * @function
         * @param           {string} easingFunction             Easing function; as a string
         * @param           {number} index                      Index of animation card
         */
        function _setEasingAnimation ( easingFunction, index )
        {
            let _cardObjects = _copyObjectWithKey ( cardObjects );

            let _regex       = new RegExp ( /timing:[^,]+,/ );


            let _code        = _cardObjects [ index ].code;

                _code        = _code.toString ( ).replace ( _regex, `timing: '${easingFunction}',` );


            let _card        = _cardObjects [ index ];

                _card.text   = easingFunction;

                _card.code   = eval ( _code );


            cardObjects [ master.group ] [ master.page ] [ index ] = _card;


            _buildAlbumCards ( );
        }

        /**
         * Sets image path for passed card-objects
         * @private
         * @name _setImagePath
         * @function
         * @param           {Array.<Object>} objects            Array of card-objects
         */
        function _setImagePath ( objects )
        {
            let _page = _toTitleCase ( master.page );


            for ( let _object of objects )
            {
                _object.image      = ( [ 'Circle', 'Line', 'Rectangle', 'Text' ].includes ( _page ) ) ? `Object/${_page}` : `Subject/${_page}`;

                _object.objectType = _page;


                if ( master.group === 'animation' )

                    [ _object.group, _object.groupType ] = [ `Handlers/${_toTitleCase ( master.group )}`, _toTitleCase ( master.group ) ];


                if ( master.subgroup === 'easing' )
                {
                    let _timing = _object.code.toString ( ).match ( /timing: '([^']+)',/ ) [ 1 ];

                    let _match  = _timing.match ( /(In|Out)/g );

                    let _path   = ( _match.length < 2 ) ? _match [ 0 ] : _match [ 0 ] + _match [ 1 ];


                    _object.subgroup = `Handlers/Animation/Ease/${_path}/${_timing}`;
                }
            }
        }

        /**
         * Sets card section's inner HTML
         * @private
         * @name _setCardSection
         * @function
         * @param           {Array} cards                       Array of HTML templates for each card-object
         */
        function _setCardSection ( cards )
        {
            let _cardSection = document.getElementById ( 'test-cards' );


            for ( let _card of cards )

                _cardSection.innerHTML += _card;
        }

        /**
         * Sets byrne-systems logo
         * @private
         * @name _setByrneSystemsLogo
         * @function
         */
        function _setByrneSystemsLogo ( )
        {
            let _element = document.getElementById ( 'byrne-systems-logo' );


            if ( _element ) _element.remove ( );

            ////////////////////////////////////////////////////////////////////

            let _album = document.querySelector ( '.album' );

                _album.style.display = 'none';

            ////////////////////////////////////////////////////////////////////

            let _main  = document.getElementsByTagName ( 'main' ) [ 0 ];

            let _nav   = document.getElementsByTagName ( 'nav'  ) [ 0 ];

            let _div   = document.createElement ( 'div' );

            let _image = document.createElement ( 'img' );

                _image.src         = '../images/cube_sm.png';


                _div.id            = 'byrne-systems-logo';

                _div.style.cssText = `padding-top: ${_main.clientHeight / 2.5}px`;


                _div.appendChild  ( _image );

                _main.appendChild ( _div   );

                _nav.style.left = '0px';
        }

        /**
         * Sets markdown content for the offCanvas element
         * @private
         * @name _setOffCanvasDocument
         * @function
         * @param           {string} type                       Object or Subject type
         */
        function _setOffCanvasDocument ( type )
        {
            let _converter = new showdown.Converter;

                _converter.setOption ( 'tables', true );


            let _text = md2json [ type ];

                _text = _text.replace ( /&quot;&#x27;/g, '"' )
                             .replace ( /&#x27;&quot;/g, '"' );


            let _html = _converter.makeHtml ( _text );


            let _offcanvas     = document.querySelector ( '.offcanvas' );

            let _offcanvasBody = _offcanvas.querySelector ( '.offcanvas-body' );

                _offcanvasBody.innerHTML = _html;


            let _bsOffcanvas   = new bootstrap.Offcanvas ( _offcanvas );

                _bsOffcanvas.toggle ( );


            let _offcanvasReset = document.getElementById ( 'offcanvas-reset' );


                _offcanvasBody.addEventListener ( 'scroll', ( element ) =>
                    {
                        _offcanvasReset.style.opacity = ( _offcanvasBody.scrollTop > 1 ) ? '1' : '0';

                        _offcanvasReset.addEventListener ( 'click', ( element ) => { _offcanvasBody.scrollTop = 0; } );
                    } );
        }

        /**
         * Sets Ace editor
         * @private
         * @name _setAceEditor
         * @function
         */
        function _setAceEditor ( )
        {
            let _id = "ace-editor";

            let _script = ( ) =>
            {
                let _circle = new Circle ( { x: 154, y: 77 } );

                    _circle.canvas = 'canvas';

                    _circle.fill.color = '0, 150, 200';

                    _circle.draw ( );
            }

            ////    CONTROL PANEL    ///////////////////////////////////////////

            let _controlPanel       = document.getElementById ( "control-panel" );

            let _controlPanelHeight = window.getComputedStyle ( _controlPanel ).height;

                _controlPanelHeight = Number ( _controlPanelHeight.replace ( 'px', '' ) );

            ////    EDITOR ELEMENT    //////////////////////////////////////////

            let _editorElement = document.getElementById ( _id );

                _editorElement.innerHTML    = _cleanAceCode ( _script );

                _editorElement.style.height = `${window.innerHeight - _controlPanelHeight}px`;

            ////    EDITOR    //////////////////////////////////////////////////

            _editor = ace.edit ( _id );

            _editor.setTheme ( "ace/theme/tomorrow_night" );

            _editor.session.setMode ( "ace/mode/javascript" );

            _editor.session.setTabSize ( 4 );

            _editor.session.setUseSoftTabs ( true );

            _editor.session.setUseWrapMode ( false );

            _editor.setOptions (
                {
                    autoScrollEditorIntoView:   true,
                    copyWithEmptySelection:     true,
                    mergeUndoDeltas:            'always',
                } );

            _editor.commands.addCommand (
                {
                    name:    'run_on_save',
                    bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
                    exec:    ( ) => devTest.runLabStationCode ( )
                } );
        }

        /**
         * Sets user's hotkeys
         * @private
         * @name _setHotkey
         * @function
         * @param           {string} id                         Element Identifier
         * @param           {Array}  hotkeys                    Array of hotkeys
         */
        function _setHotkey ( id, hotkeys )
        {
            Mousetrap.bind ( hotkeys, ( event ) =>
                {
                    event.preventDefault  ( );

                    event.stopPropagation ( );


                    document.getElementById ( id ).click ( );
                } );
        }

        /**
         * Sets hotkeys for UI
         * @private
         * @name _setHotkeys
         * @function
         */
        function _setHotkeys ( )
        {
            let _keys =
            {
                'input-value-minus': [ 'command+1' ],

                'input-value-plus':  [ 'command+2' ],
            }


            for ( let [ _id, _hotkeys ] of Object.entries ( _keys ) )

                _setHotkey ( _id, _hotkeys );
        }

        /**
         * Set color-picker's position
         * @private
         * @name _setColorPickerPosition
         * @function
         */
        function _setColorPickerPosition ( )
        {
            let _colorPickerBox  = document.querySelector ( '.picker_wrapper' );

            let _colorPickerRect = _colorPickerBox.getBoundingClientRect ( );

                _colorPickerBox.style.left = `-${_colorPickerRect.width}px`;
        }

        /**
         * Sets the lab-station canvas & ruler dimensions
         * @private
         * @name _setLabStationCanvasSize
         * @function
         */
        async function _setLabStationCanvasSize ( )
        {
            let _canvasElement = document.querySelector ( '#canvas' );

            let _leftColumn    = document.querySelector ( '#lab > div:nth-child(1)' );

            let _ruler         = document.querySelector ( '#ruler' );

            let _rulerWidth    = _ruler.querySelector   ( 'span.width' );

            let _rulerHeight   = _ruler.querySelector   ( 'span.height' );


            let [ _width, _height ] = [ _leftColumn.clientWidth - 10, _leftColumn.clientHeight ];


                [ _rulerWidth.innerHTML, _rulerHeight.innerHTML ] = [ _width, _height ];

                [ _canvasElement.width,  _canvasElement.height  ] = [ _width, _height ];


                _ruler.style.width   = `${_width}px`;

                _ruler.style.opacity = 1;


            _delay ( 1000 ).then ( ( ) => document.querySelector ( '#ruler' ).style.opacity = 0 );
        }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    EVENT LISTENERS    /////////////////////////////////////////////////////////////////////

        /**
         * Sets modal event listeners
         * @private
         * @name _setModalEventListeners
         * @function
         */
        function _setModalEventListeners ( )
        {
            let _viewButtons = document.getElementsByClassName ( 'code-view-buttons' );


            for ( let _button of _viewButtons )

                _button.addEventListener ( 'click', ( element ) =>
                    {
                        let _code                       = element.delegateTarget.getAttribute ( 'data-devtest-code'  );

                        let _title                      = element.delegateTarget.getAttribute ( 'data-devtest-title' );

                        let _modalCodeSection           = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' );

                        let _modalTitle                 = document.querySelector ( '#modal-code-label' );


                            _modalCodeSection.innerHTML = _code.replace ( /_\d{1,3}/g, '' );

                            _modalTitle.innerHTML       =  _toTitleCase ( _title );


                            hljs.highlightAll ( );
                    } );


            let _copyButton = document.querySelector ( '#modal-code > div > div > div.modal-footer > button.btn.btn-primary' );

                _copyButton.addEventListener ( 'click', _copyCode );
        }

        /**
         * Sets navigation main event listeners
         * @private
         * @name _setNavMainEventListeners
         * @function
         */
        function _setNavMainEventListeners ( )
        {
            let _mainButtons      = [ ...document.querySelectorAll ( 'nav button.collapsed' ) ];    // Convert: NodeList into Array

            let _animationButtons =
            [
                document.querySelector ( '#animation-collapse > button:nth-child(1)' ),
                document.querySelector ( '#animation-collapse > button:nth-child(3)' )
            ]

            let _regex = new RegExp ( 'animation-(\\w+\-)?collapse' );

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Checks whether ancillary sub animation buttons are collapsible
                 * @private
                 * @name _checkCollapsible
                 * @function
                 * @param           {number} index                      Index to check
                 */
                function _checkCollapsible ( index )
                {
                    if ( ! _animationButtons [ index ].classList.contains ( 'collapsed' ) )

                        _animationButtons [ index ].click ( );
                }

                /**
                 * Collapses uncollapsed ancillary buttons, outside of the present button
                 * @private
                 * @name _collapseButtons
                 * @function
                 * @param           {string} present                    data-bs-target attribute
                 */
                function _collapseButtons ( present )
                {
                    for ( let _button of _mainButtons )
                    {
                        if ( _button.getAttribute ( 'data-bs-target' ) === present )

                            continue;


                        if ( ! _button.classList.contains ( 'collapsed' ) )

                            _button.click ( );
                    }
                }

            ////    LOGIC    ///////////////////////////////////////////////////

                for ( let _i = 0; _i < _mainButtons.length; _i++ )              // Splice: Animation buttons

                    if ( _regex.test ( _mainButtons [ _i ].getAttribute ( "data-bs-target" ) ) )
                    {
                        _mainButtons.splice ( _i, 1 );

                        _i--;
                    }


                for ( let _button of _mainButtons )                             // Add: Event listeners to main buttons

                    _button.addEventListener ( 'click', ( element ) =>
                        {
                            _collapseButtons ( element.target.attributes [ "data-bs-target" ].textContent );

                            _toggleBottomLinks ( element );
                        } );


                for ( let _button of _animationButtons )                        // Add: Event listeners to sub Animation buttons

                    _button.addEventListener ( 'click', ( element ) =>
                        {
                            let _present = element.target.attributes [ "data-bs-target" ].textContent;

                                _present = _present.match ( _regex ) [ 1 ].replace ( '-', '' );


                            ( _present === 'objects' ) ? _checkCollapsible ( 1 ) : _checkCollapsible ( 0 );
                        } );
        }

        /**
         * Sets navigation link event listeners
         * @private
         * @name _setNavLinkEventListeners
         * @function
         */
        function _setNavLinkEventListeners ( )
        {
            let _buttons =
            [
                ... document.querySelectorAll ( '.mb-1:nth-child(-n+5) ul.btn-toggle-nav > li > a' ),
                ... document.querySelectorAll ( '.mb-2:nth-child(-n+4) ul.btn-toggle-nav > li > a' )
            ]


            for ( let _button of _buttons )

                _button.addEventListener ( 'click', ( element ) =>
                    {
                        _clearScreen ( );

                        _setMaster   ( _button );


                        ( cardObjects [ master.group ] [ master.page ] )

                            ? _buildAlbumCards     ( )

                            : _setByrneSystemsLogo ( );
                    } );
        }

        /**
         * Sets subtractive card event listener
         * @private
         * @name _setMinusCardEventListener
         * @function
         */
        function _setMinusCardEventListener ( )
        {
            let _easings         = document.querySelectorAll ( '.easing' );

            let _subtractButtons = document.querySelectorAll ( '.card > .card-number > .close' );


            for ( let _subtractButton of _subtractButtons )

                _subtractButton.addEventListener ( 'click', ( element ) =>
                    {
                        let _cardNumber = Number ( element.target.nextElementSibling.innerHTML );


                        if ( cardObjects [ master.group ] [ master.page ].length > 1 )

                            cardObjects [ master.group ] [ master.page ].splice ( _cardNumber, 1 );


                        _buildAlbumCards ( );
                    } );
        }

        /**
         * Sets additional card event listener
         * @private
         * @name _setAddCardEventListener
         * @function
         */
        function _setAddCardEventListener ( )
        {
            let _prevHeight = document.querySelectorAll ( '.card' ) [ 0 ].clientHeight;

            let _addButtons = document.querySelectorAll ( '.col.blank > .card.blank' );


            for ( let _i = _addButtons.length - 1; _i > -1; _i-- )
            {
                let _addButton = _addButtons [ _i ];


                if ( _i === 0 )
                {
                    _addButton.classList.remove ( 'hidden' );


                    _addButton.style.height  = `${_prevHeight}px`;

                    _addButton.style.opacity = 0.5;


                    _addButton.addEventListener ( 'click', ( element ) =>
                    {
                        let _card = cardObjects [ master.group ] [ master.page ].length - 1;

                            _card = cardObjects [ master.group ] [ master.page ] [ _card ];


                        cardObjects [ master.group ] [ master.page ].push ( _card );


                        _buildAlbumCards ( );
                    } );
                }
                else

                    _addButton.classList.add ( 'hidden' );
            }


            _removeFadeInAnimations ( );
        }

        /**
         * Sets lab-station canvas event listener
         * @private
         * @name _setLabStationCanvasEventListener
         * @function
         */
        function _setLabStationCanvasEventListener ( )
        {
            let _main          = document.getElementsByTagName ( 'main' ) [ 0 ];

            let _labStation    = document.querySelector  ( 'main > div.lab-station' );

            let _editorElement = document.getElementById ( _editor.container.id     );

            let _button        = document.querySelector  ( 'button.lab-station'     );

                _button.addEventListener ( 'click', ( ) =>
                    {
                        _clearScreen  ( );


                        _button.children [ 0 ].classList.add ( 'selected' )


                        _labStation.style.display     = 'block';

                        _main.style.overflowY         = 'hidden';

                        _editorElement.style.fontSize = '12px';


                        _setLabStationCanvasSize ( );

                        _runLabStationCode       ( );
                    } );


            window.addEventListener ( 'resize', _setLabStationCanvasSize );
        }

        /**
         * Sets lab-station menu event listener
         * @private
         * @name _setLabStationMenuEventListener
         * @function
         */
        function _setLabStationMenuEventListener ( )
        {
            let _menu = document.getElementById ( 'input-menu' );
        }

        /**
         * Sets lab-station color-picker event listener
         * @private
         * @name _setLabStationColorPickerEventListener
         * @function
         */
        function _setLabStationColorPickerEventListener ( )
        {
            let _picker = _getColorPicker ( 'input-color-picker' );

                _picker.onOpen   = ( )       => _setColorPickerPosition  ( );

                _picker.onChange = ( color ) => _swapLabStationsRgbValue ( color );
        }

        /**
         * Sets lab-station font plus event listener
         * @private
         * @name _setLabStationValuePlusEventListener
         * @function
         */
        function _setLabStationValuePlusEventListener ( )
        {
            let _valuePlus = document.getElementById ( 'input-value-plus' );

                _valuePlus.addEventListener ( 'click', ( ) =>
                    {
                        let _cursor = _editor.selection.getCursor ( );

                        let _range  = _editor.selection.getRange  ( );

                        let _value  = _editor.getSelectedText     ( );

                            _value  = _incrementLabStationValue   ( _value, true );


                        _editor.session.replace    ( _range, _value );

                        _editor.selection.setRange ( _range );


                        _runLabStationCode ( );
                    } );
        }

        /**
         * Sets lab-station value minus event listener
         * @private
         * @name _setLabStationValueMinusEventListener
         * @function
         */
        function _setLabStationValueMinusEventListener ( )
        {
            let _valueMinus = document.getElementById ( 'input-value-minus' );

                _valueMinus.addEventListener ( 'click', ( ) =>
                    {
                        let _cursor = _editor.selection.getCursor ( );

                        let _range  = _editor.selection.getRange  ( );

                        let _value  = _editor.getSelectedText     ( );

                            _value  = _incrementLabStationValue   ( _value, false );


                        _editor.session.replace    ( _range, `${_value}` );

                        _editor.selection.setRange ( _range );


                        _runLabStationCode ( );
                    } );
        }

        /**
         * Sets lab-station font plus event listener
         * @private
         * @name _setLabStationFontPlusEventListener
         * @function
         */
        function _setLabStationFontPlusEventListener ( )
        {
            let _fontPlus = document.getElementById ( 'input-font-plus' );

                _fontPlus.addEventListener ( 'click', ( ) =>
                    {
                        let _fontSize = document.getElementById ( _editor.container.id ).style.fontSize;

                            _fontSize = Number ( _fontSize.replace ( 'px', '' ) ) + 1;


                        document.getElementById ( _editor.container.id ).style.fontSize = `${_fontSize}px`;
                    } );
        }

        /**
         * Sets lab-station font minus event listener
         * @private
         * @name _setLabStationFontMinusEventListener
         * @function
         */
        function _setLabStationFontMinusEventListener ( )
        {
            let _fontMinus = document.getElementById ( 'input-font-minus' );

                _fontMinus.addEventListener ( 'click', ( ) =>
                    {
                        let _fontSize = document.getElementById ( _editor.container.id ).style.fontSize;

                            _fontSize = Number ( _fontSize.replace ( 'px', '' ) ) - 1;


                        document.getElementById ( _editor.container.id ).style.fontSize = `${_fontSize}px`;
                    } );
        }

        /**
         * Sets lab-station word-wrap event listener
         * @private
         * @name _setLabStationWordWrapEventListener
         * @function
         */
        function _setLabStationWordWrapEventListener ( )
        {
            let _wordWrap = document.getElementById ( 'input-word-wrap' );

                _wordWrap.addEventListener ( 'click', ( ) =>
                    {
                        let _wrapMode = _editor.session.getUseWrapMode ( );


                        ( _wrapMode ) ? _editor.session.setUseWrapMode ( false )

                                      : _editor.session.setUseWrapMode ( true  );
                    } );
        }

        /**
         * Sets lab-station lock event listener
         * @private
         * @name _setLabStationLockEventListener
         * @function
         */
        function _setLabStationLockEventListener ( )
        {
            let _lockButton = document.getElementById ( 'input-lock' );

            let _lock       = _lockButton.querySelector ( '.lock' );

                _lock.addEventListener ( 'click', ( ) =>
                    {
                        let _readOnly = _editor.getReadOnly ( );


                        ( _readOnly ) ? _editor.setReadOnly ( false )

                                      : _editor.setReadOnly ( true  );


                        ( _readOnly ) ? _lock.style.content = 'url("images/svg/General/unlock.svg")'

                                      : _lock.style.content = 'url("images/svg/General/lock.svg")';


                        ( _readOnly ) ? _lockButton.style.backgroundColor = 'rgb(72, 79, 86)'

                                      : _lockButton.style.backgroundColor = 'rgb(166, 49, 49)';
                    } );
        }

        /**
         * Sets lab-station download event listener
         * @private
         * @name _setLabStationDownloadEventListener
         * @function
         */
        function _setLabStationDownloadEventListener ( )
        {
            let _downloadButton = document.getElementById ( 'input-download' );

                _downloadButton.addEventListener ( 'click', ( ) =>
                    {
                        let _name       = 'canvasLab_file.js';

                        let _content    = _editor.getValue ( );

                        let _file       = new File ( [ _content ], _name, { type: 'text/javascript' } );


                        _download ( _file );
                    } );
        }

        /**
         * Sets lab-station output event listener
         * @private
         * @name _setLabStationOutputEventListeners
         * @function
         */
        function _setLabStationOutputEventListeners ( )
        {
            let _row    = document.getElementById ( 'output-row'    ).querySelector ( '.value' );

            let _column = document.getElementById ( 'output-column' ).querySelector ( '.value' );

            let _lines  = document.getElementById ( 'output-lines'  ).querySelector ( '.value' );


            _editor.session.selection.on ( 'changeCursor', ( event ) =>
                {
                    let _cursor = _editor.selection.getCursor ( );

                        _row.innerHTML    = _cursor.row;

                        _column.innerHTML = _cursor.column;

                        _lines.innerHTML  = _editor.session.getLength ( );
                } );
        }

        /**
         * Sets all lab-station event listeners
         * @private
         * @name _setLabStationEventListeners
         * @function
         */
        function _setLabStationEventListeners ( )
        {
            ////    OUTPUT    //////////////////////////////

            _setLabStationCanvasEventListener  ( );

            _setLabStationOutputEventListeners ( );

            ////    INPUT    ///////////////////////////////

            _setLabStationMenuEventListener        ( );

            _setLabStationColorPickerEventListener ( );

            _setLabStationValuePlusEventListener   ( );

            _setLabStationValueMinusEventListener  ( );

            _setLabStationFontPlusEventListener    ( );

            _setLabStationFontMinusEventListener   ( );

            _setLabStationWordWrapEventListener    ( );

            _setLabStationLockEventListener        ( );

            _setLabStationDownloadEventListener    ( );
        }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    GET FUNCTIONS    ///////////////////////////////////////////////////////////////////////

        /**
         * Returns an Array of HTML templates for each card-object
         * @private
         * @name _getCardHTMLTemplates
         * @function
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {Array}                             Array of HTML templates for each card-object
         */
        function _getCardHTMLTemplates ( cardObjects )
        {
            let _cards = [ ];


            for ( let _iter in cardObjects )
            {
                let _count      = _number2String ( _iter );

                let _template   = _cardTemplate ( ).replace ( /{{number}}/g, _count );

                let _cardObject = cardObjects [ _iter ];


                _cards.push ( _getHTMLCodeTemplate ( _cardObject, _template, _count ) );
            }


            if ( master.group )
            {
                let [ _maxColumns, _cardsLength ] = [ 4, cardObjects.length ];


                if ( _cardsLength < _maxColumns )

                    for ( let _i = 0; _i < ( _maxColumns - _cardsLength ); _i++ )

                        _cards.push ( _cardTemplateBlank ( ) );

                else

                    _cards.push ( _cardTemplateBlank ( ) );
            }


            return _cards;
        }

        /**
         * Returns the likely class name for the passed code
         * @private
         * @name _getClass
         * @function
         * @param           {string} code                       Code string
         * @return          {string}                            Likely class name
         */
        function _getClass ( code )
        {
            let _class  = code.match ( /_(\w+)/ ) [ 1 ];

            let _regex  = new RegExp ( '_(line|circle|rectangle|text)', 'g' );


            let _result = ( ! [ 'line', 'rectangle', 'circle', 'text' ].includes ( _class ) )

                              ? ( _regex.test ( code ) )

                                    ? code.match ( _regex ) [ 0 ].replace ( '_', '' )

                                    : _class

                              : _class;


            return _toTitleCase ( _result );
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
        function _getSpecialVariables ( code, count )
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
         * Returns rendered HTML for a card-object
         * @private
         * @name _getHTMLCodeTemplate
         * @function
         * @param           {Object} cardObject                 Card-object
         * @param           {string} template                   HTML template for card-object
         * @param           {string} count                      Card-object number
         * @return          {string}                            Rendered HTML for a card-object
         */
        function _getHTMLCodeTemplate ( cardObject, template, count )
        {
            for ( let _entry in cardObject )
            {
                if ( _entry === 'code' )                    // Clean: code prior to injection
                {
                    let _code     = _cleanDemoCode ( cardObject [ _entry ] );

                    let _class    = _getClass ( _code );

                    let _init     = _initializerObject [ master.group ] [ _class ];

                    let _variable = `_${_class.toLowerCase ( )}`;

                    let _regex    = new RegExp ( _variable, 'g' );


                        _code     = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;

                        _code     = _code.replace ( _regex, `${_variable}_${count}` );

                        _code     = _getSpecialVariables ( _code, count );


                    cardObject [ _entry ] = _code;
                }


                let _regex = new RegExp ( `{{${_entry}}}`, 'g' );


                template = template.replace ( _regex, cardObject [ _entry ] );
            }


            return _trimExtraImageTags ( template, cardObject );
        }

        /**
         * Returns eval ready code for passed card-objects
         * @private
         * @name _getCode
         * @function
         * @param           {Array.<Object>} objects            Array of card-objects
         * @return          {string}                            String to be evaluated for all card-objects
         */
        function _getCode ( objects )
        {
            let _codes = [ ]


            for ( let _object of objects )

                _codes.push ( `////    ${_object.title}    //////////////////////////\n\n${_object.code}` );


            return `( ( window ) =>\n{\n${_codes.join ( '\n\n' )}\n\n} ) ( window );`
        }

        /**
         * Returns a new color-picker object
         * @private
         * @name _getColorPicker
         * @function
         * @param           {string} elementId                  Element id
         * @return          {Object}                            Color-picker object
         */
        function _getColorPicker ( elementId )
        {
            let _button  = document.getElementById ( elementId );


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

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    BUILD FUNCTIONS    /////////////////////////////////////////////////////////////////////

        /**
         * Returns a copied object
         * @private
         * @name _copyObjectWithKey
         * @function
         * @param           {Object} object                     Object to copy
         * @return          {Object}                            Copied object
         */
        function _copyObjectWithKey ( object )
        {
            let _copyFunction = ( func ) => func;

            let _result       = ( master.group ) ? JSON.parse ( JSON.stringify ( object [ master.group ] [ master.page ] ) )

                                                 : JSON.parse ( JSON.stringify ( object [ master.page ] ) );


            if ( master.group )

                for ( let _entry in object [ master.group ] [ master.page ] )

                    _result [ _entry ].code = _copyFunction ( object [ master.group ] [ master.page ] [ _entry ].code );

            else

                for ( let _entry in object [ master.page ] )

                    _result [ _entry ].code = _copyFunction ( object [ master.page ] [ _entry ].code );


            return _result;
        }

        /**
         * Builds album cards for the page passed
         * @private
         * @name _buildAlbumCards
         * @function
         * @param           {string} page                       Page to build
         */
        function _buildAlbumCards ( )
        {
            let _cardObjects = _copyObjectWithKey ( cardObjects );


            _clearScreen ( true );


            _setImagePath   ( _cardObjects );

            _setCardSection ( _getCardHTMLTemplates ( _cardObjects ) );


            _setModalEventListeners  ( );


            if ( master.group === 'animation' )
            {
                _setAddCardEventListener   ( );

                _setMinusCardEventListener ( );
            }


            if ( master.subgroup === 'easing' )

                _embedEasingLinks ( );


            eval ( _getCode ( _cardObjects ) );
        }

        /**
         * Sets the default page
         * @private
         * @name _setDefaultPage
         * @function
         */
        function _setDefaultPage ( )
        {
            if ( window.master )

                _setByrneSystemsLogo ( );

            else

                console.error ( '[ ERROR ]: window.master is not available !');
        }

    ////////////////////////////////////////////////////////////////////////////////////////////////
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
                 * Sets markdown content for the offCanvas element
                 * @public
                 * @name setOffCanvasDocument
                 * @function
                 * @param           {string} type                       Object or Subject type
                 */
                _lib.setOffCanvasDocument  = ( type )                  => _setOffCanvasDocument  ( type );

                /**
                 * Sets easing animation for an animation card
                 * @public
                 * @name setEasingAnimation
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.setEasingAnimation    = ( easingFunction, index ) => _setEasingAnimation    ( easingFunction, index );

                /**
                 * Toggles visibility of easing functions
                 * @public
                 * @name toggleEasingFunctions
                 * @function
                 * @param           {number} index                      Index of animation card
                 */
                _lib.toggleEasingFunctions = ( index )                 => _toggleEasingFunctions ( index );

                /**
                 * Executes lab-station code from editor
                 * @public
                 * @name _runLabStationCode
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => _runLabStationCode     ( );


            return _lib;
        }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////    INITIALIZATION    //////////////////////////////////////////////////////////////////////

        /**
         * Initiates devTest
         * @private
         * @name _init
         * @function
         */
        function _init ( )
        {
            window.devTest = _library ( );


            if ( window.cardObjects )
            {
                _setDefaultPage              ( );

                _setNavMainEventListeners    ( );

                _setNavLinkEventListeners    ( );

                _setAceEditor ( );

                _setLabStationEventListeners ( );

                _setHotkeys   ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !');
        }


        if ( typeof ( window.devTest ) === 'undefined' )

            _init ( );

} ) ( window );
