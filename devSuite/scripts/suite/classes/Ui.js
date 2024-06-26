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
         * Toggles drop-down navigation menu
         * @private
         * @function
         * @param           {HTMLElement} element               HTML DOM Element
         */
        _navDropdown ( element )
        {
            let _ul     = ( element.parentNode.nextSibling.data ) ? element.parentNode.nextSibling.nextSibling : element.parentNode.nextSibling;

            let _isOpen = ( element.getAttribute ( 'data-button-open' ) === 'false' );

            let _isShow = ( _ul.classList.contains ( 'show' ) );


            ( _isShow ) ? _ul.classList.remove ( 'show' )

                        : _ul.classList.add    ( 'show' );


            element.setAttribute ( 'data-button-open', _isOpen )


            this.externalLinks ( _isOpen )
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
         * Toggles the card button associated with the passed 'event' param
         * @public
         * @function
         * @param           {HTMLEvent} event                   HTML DOM event
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
         * @function
         * @param           {boolean} show                      True || False
         */
        externalLinks ( show = true )
        {
            let _links = document.querySelector ( '.external-links' );


            ( show ) ? _links.classList.add    ( 'fade' )

                     : _links.classList.remove ( 'fade' );
        },

        /**
         * Toggles fullscreen mode                              @TODO: fix this crap
         * @public
         * @function
         */
        fullscreen ( )
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
         * Toggles grid in lab
         * @public
         * @function
         */
        grid ( )
        {
            let _grid   = document.getElementById ( 'grid' );

            let _button = document.getElementById ( 'input-grid' );


            this.labButton ( _button );


            _grid.style.opacity = ( TOOL.isActive ( _button ) ) ? 1 : 0;
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


            UI._adjustGridCenter ( );
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

            let _grid   = document.querySelector ( '#grid' );

            let _button = document.querySelector ( '#input-sidebar' );


            this.labButton ( _button );


            ( UI._isNavOpen ( ) )

                ? [ _nav.style.left, _main.style.paddingLeft, _grid.style.left ] = [ '-200px',  '-0px',   '-1px' ]

                : [ _nav.style.left, _main.style.paddingLeft, _grid.style.left ] = [    '0px', '200px', '200px' ];


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
            let _class  = code.match ( /_(\w+)/ ) [ 1 ];

            let _regex  = new RegExp ( '_(line|circle|rectangle|text)', 'g' );


            let _result = ( ! [ 'line', 'rectangle', 'circle', 'text' ].includes ( _class ) )

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
            let _link = element.srcElement;


            element.preventDefault ( );


            PAGE = new Page ( _link );


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

                case 'navLinks':

                    let _links = document.querySelector ( '#nav-links' ).querySelectorAll ( 'a' );


                    for ( let _link of _links )

                        _link.addEventListener ( 'click', ( element ) => this._setCards ( element ) );

                case 'copy':

                    let _copyButton = document.querySelector ( 'button.copy-code-link' );

                        _copyButton.addEventListener ( 'click', TOOL.copyCode );

                case 'lab':

                    let _labButton = document.querySelector ( 'button.lab-station' );

                    let _labOpen   = document.querySelector ( '#lab-open' );

                    let _labLink   = document.querySelector ( '.lab-station-link' );


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

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Adjusts the center of the grid; temporary fix
         * @private
         * @function
         */
        _adjustGridCenter ( )
        {
            let _lab = document.querySelector ( 'div.lab-station' );


            if ( _lab.style.display === 'block' )
            {
                let _lines = document.querySelectorAll ( '#grid > .vertical-lines div' );


                if ( UI._isNavOpen ( ) )
                {
                    _lines [ 17 ].classList.replace ( 'vertical-bold', 'vertical' );

                    _lines [ 20 ].classList.replace ( 'vertical', 'vertical-bold' );
                }
            }
        }

        /**
         * Checks whether ancillary sub animation buttons are collapsible
         * @private
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
         * Returns whether the navigation bar is open
         * @private
         * @function
         * @return          {boolean}                           True | False
         */
        _isNavOpen ( )
        {
            return ( document.querySelector ( 'nav' ).style.left === '0px' );
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
