// @program:        devTest
// @brief:          Developmental testing framework for canvasLab
// @author:         Justin D. Byrne
// @email:          justin@byrne-systems.com
// @version:        0.0.0
// @license:        GPL-2.0

"use strict";

/**
 * Call main module
 * @module                                                  devTest
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    ////////////////////////////////////////////////////////////////////////////
    ////    ARROW FUNCTIONS    /////////////////////////////////////////////////

        /**
         * Returns a blank HTML card template
         * @private
         * @name _cardTemplateBlank
         * @function
         * @return          {string}                            Blank HTML card template
         */
        let _cardTemplateBlank  = ( )           => `<div class="col blank">

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
        let _cardTemplate       = ( )           => `<div class="col">

                                                      <div class="card">

                                                          <div class="card-number">{{number}}</div>

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

        /**
         * Converts a number into a multi-digit string
         * @private
         * @name _number2String
         * @function
         * @param           {number} number                     Number
         * @return          {string}                            Multi-digit string
         */
        let _number2String      = ( number )    => ( number < 10 ) ? '0' + number.toString ( ) : number.toString ( );

        /**
         * Simple programmatic delay
         * @private
         * @name _delay
         * @function
         * @param           {number} time                       Time to delay
         * @return          {Promise}                           An async promise
         */
        let _delay              = ( time )      => new Promise ( resolve => setTimeout ( resolve, time ) );

    ////////////////////////////////////////////////////////////////////////////
    ////    GENERIC FUNCTIONS    ///////////////////////////////////////////////

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
         * Cleans code of enumerators for presentation layer
         * @private
         * @name _cleanCode
         * @function
         * @param           {Function} script                   JavaScript function; for card-objects only
         * @return          {string}                            Function as a string
         */
        function _cleanCode ( script )
        {
            let _code   = _cleanScriptCode ( script ).split ( /\n/g );

            let _length = _code.at ( -1 ).match ( /^\s+/ ) [ 0 ].length;


            for ( let _line in _code )

                _code [ _line ] = _code [ _line ].slice ( _length );


            return _code.join ( '\n' );
        }

        /**
         * Clears cards section
         * @private
         * @name _clearCards
         * @function
         */
        function _clearCards ( )
        {
            ////    ALBUM SECTION   ////////////////////////

                let _albumSection = document.querySelector ( '.album' );

                    _albumSection.style.display = 'block';

            ////    CARD SECTION    ////////////////////////

                let _cardsSection = document.getElementById ( 'test-cards' );

                    _cardsSection.innerHTML = '';

            ////    BYRNE LOGO    //////////////////////////

                let _byrneLogo = document.getElementById ( 'byrne-systems-logo' );


                if ( _byrneLogo ) _byrneLogo.remove ( );
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

            ////    FUNCTIONS    ///////////////////////////////////////////////

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

            ////    LOGIC    ///////////////////////////////////////////////////

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


            let _ul           = document.createElement ( 'ul' );

                _ul.className = 'easing-functions';


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


            return _ul
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

            let _ul      = _createEasingLinks ( );


            for ( let _i = 0; _i < _easings.length; _i++ )
            {
                let _clonedUl = _ul.cloneNode ( true );

                    _clonedUl.id = _i;

                    _clonedUl.setAttribute ( 'onmouseleave', `devTest.toggleEasingFunctions ( ${_i} )` );


                _easings [ _i ].parentNode.insertBefore ( _clonedUl, _easings.nextSibling );

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

    ////////////////////////////////////////////////////////////////////////////
    ////    SET FUNCTIONS    ///////////////////////////////////////////////////

        /**
         * Sets the master classes properties
         * @private
         * @name _setMaster
         * @function
         * @param           {HTMLElement} button                Button triggered by a Nav Link Event Listener
         */
        function _setMaster ( button )
        {
            let _page  = button.href.match ( /#(\w+)/g ) [ 0 ].replace ( '#', '' ).toLowerCase ( );


            ( /animation\w+/.test ( _page ) )

                ? [ _page, master.subgroup ] = [ [ 'animation', _page.split ( 'animation' ) [ 1 ] ], 'easing'  ]

                : [ _page, master.subgroup ] = [ _page,                                              undefined ];


            ( typeof _page === 'object' )

                ? [ master.group, master.page ] = [ _page [ 0 ], _page [ 1 ] ]

                : [ master.group, master.page ] = [ undefined,   _page       ];
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


                if ( master.group )

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
                        _clearCards ( );

                        _setMaster  ( _button );


                        ( master.group ) ? ( cardObjects [ master.group ] [ master.page ] )

                                               ? _buildAlbumCards     ( )

                                               : _setByrneSystemsLogo ( )

                                         : ( cardObjects [ master.page ] )

                                               ? _buildAlbumCards     ( )

                                               : _setByrneSystemsLogo ( );
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

            let _addButton  = document.querySelector    ( '.col.blank > .card.blank' );

            let _opacity    = window.getComputedStyle   ( _addButton ).getPropertyValue ( "opacity" );


                _addButton.style.height  = `${_prevHeight}px`;

                _addButton.style.opacity = ( _opacity < 0.5 ) ? 0.5 : _opacity;


                _addButton.addEventListener ( 'click', ( element ) =>
                    {
                        let _card = cardObjects [ master.group ] [ master.page ].length - 1;

                            _card = cardObjects [ master.group ] [ master.page ] [ _card ];


                        cardObjects [ master.group ] [ master.page ].push ( _card );


                        _buildAlbumCards ( );
                    } );
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

            let _div   = document.createElement ( 'div' );

            let _image = document.createElement ( 'img' );

                _image.src         = '../images/cube_sm.png';


                _div.id            = 'byrne-systems-logo';

                _div.style.cssText = `margin-top: ${_main.clientHeight / 2.5}px`;


                _div.appendChild  ( _image );

                _main.appendChild ( _div   );
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

                _text = _text.replace ( /&quot;&#x27;/g, '"' ).replace ( /&#x27;&quot;/g, '"' );


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

    ////////////////////////////////////////////////////////////////////////////
    ////    GET FUNCTIONS    ///////////////////////////////////////////////////

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
         * Returns a class initializer for the passed class
         * @private
         * @name _getClassInitializer
         * @function
         * @param           {string} className                  Class name
         * @return          {string}                            String for class constructor
         */
        function _getClassInitializer ( className )
        {
            if ( ! master.group )

                switch ( className )
                {
                    case 'Line':         return '{ x: 100, y: 50 }, { x: 200, y: 100 }';

                    case 'Circle':       return '{ x: 154, y: 77 }';

                    case 'Rectangle':    return '{ x: 154, y: 77 }';

                    case 'Text':         return '{ x: 154, y: 77 }, \'Text\'';
                }


            if ( master.group === 'animation' )

                switch ( className )
                {
                    case 'Line':         return '{ x: 100, y: 50 }, { x: 200, y: 100 }';

                    case 'Circle':       return '{ x: 154, y: 77 }';

                    case 'Rectangle':    return '{ x: 154, y: 77 }';

                    case 'Text':         return '{ x: 154, y: 77 }, \'Text\'';
                }
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
                    let _code     = _cleanCode ( cardObject [ _entry ] );

                    let _class    = _getClass ( _code );

                    let _init     = _getClassInitializer ( _class );

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

    ////////////////////////////////////////////////////////////////////////////
    ////    BUILD FUNCTIONS    /////////////////////////////////////////////////

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

            let _result       = ( master.group )

                                  ? JSON.parse ( JSON.stringify ( object [ master.group ] [ master.page ] ) )

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


            _clearCards ( );


            _setImagePath   ( _cardObjects );

            _setCardSection ( _getCardHTMLTemplates ( _cardObjects ) );


            _setModalEventListeners  ( );


            if ( master.group )

                _setAddCardEventListener ( );


            initCanvasLab ( );                              // initialize canvasLab


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

    ////////////////////////////////////////////////////////////////////////////
    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////

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

            ////    FUNCTIONS    ///////////////////////////

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


            return _lib;
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    INITIALIZATION    //////////////////////////////////////////////////

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
                _setDefaultPage           ( );

                _setNavMainEventListeners ( );

                _setNavLinkEventListeners ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !');
        }


        if ( typeof ( window.devTest ) === 'undefined' )

            _init ( );

} ) ( window );
