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
            let _element = event.srcElement;


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

                case 'LI':                      this._easingFunctions ( _element );     break;

                case 'DIV':
                case 'SPAN':
                case 'CANVAS':                  this._modalCode ( _element );           break;
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


            let _styles      = window.getComputedStyle ( _rightColumn );

            let _icon        = document.querySelector ( '.full-screen' );


            let _fullscreen  = ( _styles.display === 'block' );


            ( _fullscreen ) ? _rightColumn.style.display = 'none'

                            : _rightColumn.style.display = 'block';


            ( _fullscreen ) ? _leftColumn.style.width = '100%'

                            : _leftColumn.style.width = '50%';


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
            let _element = element.offsetParent;

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

                    [ _object.group, _object.groupType ] = [ `Handlers/${PAGE.group.toTitleCase ( )}`, PAGE.group.toTitleCase ( ) ];


                if ( PAGE.subgroup === 'easing' )
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
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         */
        _setCardSection ( cardObjects )
        {
            let _cards       = TEMPLATE.getCards ( cardObjects );

            let _cardSection = document.querySelector ( '#test-cards' );


            for ( let _card of _cards )

                _cardSection.innerHTML += _card;
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

                case 'navMainLinks':

                    let _mainButtons      = [ ...document.querySelectorAll ( 'nav button.collapsed' ) ];    // Convert: NodeList into Array

                    let _animationButtons =
                    [
                        document.querySelector ( '#animation-collapse > button:nth-child(1)' ),
                        document.querySelector ( '#animation-collapse > button:nth-child(3)' )
                    ]

                    let _regex = new RegExp ( 'animation-(\\w+\-)?collapse' );

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
                                    this._collapseButtons ( _mainButtons, element.target.attributes [ "data-bs-target" ].textContent );

                                    UI.toggle.externalLinks ( element );
                                } );


                        for ( let _button of _animationButtons )                        // Add: Event listeners to sub Animation buttons

                            _button.addEventListener ( 'click', ( element ) =>
                                {
                                    let _present = element.target.attributes [ "data-bs-target" ].textContent;

                                        _present = _present.match ( _regex ) [ 1 ].replace ( '-', '' );


                                    ( _present === 'objects' ) ? this._checkCollapsible ( _animationButtons, 1 )

                                                               : this._checkCollapsible ( _animationButtons, 0 );
                                } );

                case 'navSubLinks':

                    let _buttons =
                    [
                        ... document.querySelectorAll ( '.mb-1:nth-child(-n+5) ul.btn-toggle-nav > li > a' ),

                        ... document.querySelectorAll ( '.mb-2:nth-child(-n+4) ul.btn-toggle-nav > li > a' )
                    ]

                    for ( let _button of _buttons )

                        _button.addEventListener ( 'click', ( element ) =>
                            {
                                PAGE = new Page ( _button );


                                ( cardObjects [ PAGE.group ] [ PAGE.type ] )

                                    ? this._setAlbumCards ( )

                                    : this._setByrneSystemsLogo ( );
                            } );

                case 'copy':

                    let _copyButton = document.querySelector ( 'button.copy-code-link' );

                        _copyButton.addEventListener ( 'click', TOOL.copyCode );

                case 'lab':

                    let _labButton = document.querySelector ( 'button.lab-station' );

                    let _labLink   = document.querySelector ( '.lab-station-link'  );

                        _labLink.addEventListener ( 'click', ( element ) =>
                            {
                                let _code = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


                                _labButton.click ( );

                                LAB.editor.setValue ( _code );

                                LAB.runCode ( );

                                LAB.editor.selection.moveCursorTo ( 0, 0 );
                            } );

                case 'cardPlus':

                    if ( PAGE.group === 'animation' )
                    {
                        let _prevHeight = document.querySelectorAll ( '.card' ) [ 0 ].clientHeight;

                        let _addButtons = document.querySelectorAll ( '.col.extra > .card.extra' );


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
                                    let _card = cardObjects [ PAGE.group ] [ PAGE.type ].length - 1;

                                        _card = cardObjects [ PAGE.group ] [ PAGE.type ] [ _card ];


                                    cardObjects [ PAGE.group ] [ PAGE.type ].push ( _card );


                                    this._setAlbumCards ( );
                                } );
                            }
                            else

                                _addButton.classList.add ( 'hidden' );
                        }
                    }

                case 'cardMinus':

                    if ( PAGE.group === 'animation' )
                    {
                        let _easings         = document.querySelectorAll ( '.easing' );

                        let _subtractButtons = document.querySelectorAll ( '.card > .card-number > .close' );


                        for ( let _subtractButton of _subtractButtons )

                            _subtractButton.addEventListener ( 'click', ( element ) =>
                                {
                                    let _cardNumber = Number ( element.target.nextElementSibling.innerHTML );


                                    if ( cardObjects [ PAGE.group ] [ PAGE.type ].length > 1 )

                                        cardObjects [ PAGE.group ] [ PAGE.type ].splice ( _cardNumber, 1 );


                                    // _buildAlbumCards ( );
                                    this._setAlbumCards ( );
                                } );
                    }

            }
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

                    _ul.setAttribute ( 'onmouseleave', `devTest.toggleEasingFunctions ( ${_i} )` );


                _easings [ _i ].parentNode.insertBefore ( _clonedDiv, _easings.nextSibling );

                _easings [ _i ].setAttribute ( 'onclick', `devTest.toggleEasingFunctions ( ${_i} )` );
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

                    _img.src = `images/svg/Handlers/Animation/Ease/${_path}/${_timing}.svg`;


                let _span           = document.createElement ( 'span' );

                    _span.innerHTML = _timing;


                let _li = document.createElement ( 'li' );

                    _li.setAttribute ( 'onclick', `devTest.runEasingAnimation ( '${_timing}', this.parentElement.id )` );

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
