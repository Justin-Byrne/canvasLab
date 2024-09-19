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


            if ( TOOL.isActive ( _grid ) )

                for ( let _i = 0; _i < 2; _i++ )

                    this.grid ( );


            if ( TOOL.isActive ( _mouseCoordinates ) )

                for ( let _i = 0; _i < 2; _i++ )

                    this.coordinates ( );


            if ( TOOL.isActive ( _mouseAngle ) )

                for ( let _i = 0; _i < 2; _i++ )

                    this.angle ( );


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

            let _index   = _element.getAttribute ( 'suite-data-index' );

            let _card    = document.querySelector ( `#view_${_index}` );

            let _code    = _card.getAttribute ( 'suite-data-code' ).replaceAll ( /_\d{2}/g, '' );


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


            for ( let _navIcon of _navIcons )               // Blink eye

                _navIcon.style.display = ( _navIcon.style.display === 'none' ) ? 'block' : 'none';


            _open.style.display = ( _open.style.display === 'none' ) ? 'block' : 'none';

            ////    RESET GRID    //////////////////////////////////////////////

            if ( TOOL.isActive ( _grid ) )

                for ( let _i = 0; _i < 2; _i++ )

                    this.grid ( );
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

            let _regex   = new RegExp ( '_(line|lines|circle|circles|ellipse|ellipses|rectangle|rectangles|roundedRectangle|roundedRectangles|text|texts|image)', 'g' );

            let _objects = [ 'line', 'lines', 'circle', 'circles', 'ellipse', 'ellipses', 'rectangle', 'rectangles', 'roundedRectangle', 'roundedRectangles', 'text', 'texts', 'image' ]


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

                    let _icon    = document.querySelector ( '#nav-icon' );

                    let _open    = document.querySelector ( '#nav-open' );


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

                                LAB.setLabDefaults ( );

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
