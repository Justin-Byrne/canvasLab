"use strict";

/**
 * devTest                  {Object}                    Object literal variables
 */
( ( window ) =>
{
    ////////////////////////////////////////////////////////////////////////////
    ////    ARROW FUNCTIONS    /////////////////////////////////////////////////

        let _cardTemplate = ( )        => `<div class="col">

                                              <div class="card shadow-sm">

                                                  <div class="card-number">{{number}}</div>

                                                  <canvas id="canvas_{{number}}"></canvas>

                                                  <div class="card-body">

                                                       <!-- <p class="card-text">{{text}}</p> -->

                                                       <div class="d-flex justify-content-between align-items-center">

                                                           <div class="btn-group">

                                                               <button type="button" id="view_{{number}}" class="btn btn-sm btn-outline-secondary code-view-buttons" data-bs-toggle="modal" data-bs-target="#modal-code" data-devTest-code="{{code}}" data-devTest-title="{{title}}">View</button>

                                                           </div>

                                                           <span>{{title}}</span>

                                                           <img src="images/svg/{{image}}.svg" class="my-card-icons">

                                                       </div>

                                                   </div>

                                               </div>

                                           </div>  <!-- .col -->`;

        let _2digit       = ( number ) => (number < 10) ? '0' + number.toString ( ) : number.toString ( );

        let _delay        = ( time )   => new Promise ( resolve => setTimeout ( resolve, time ) );

    ////////////////////////////////////////////////////////////////////////////
    ////    GENERIC FUNCTIONS    ///////////////////////////////////////////////

        /**
         * Converts string to title case
         * @param           {string} string                     String to convert
         * @return          {string}                            Title case string
         */
        function _toTitleCase       ( string )
        {
            return string.toLowerCase ( ).split ( ' ' ).map ( function ( word )
            {
                return word.replace ( word [ 0 ], word [ 0 ].toUpperCase ( ) );
            } ).join ( ' ' );
        }

        /**
         * Cleans script of it's function wrapper
         * @param           {Function} script                   JavaScript function
         * @return          {string}                            Function as a string
         */
        function _cleanScriptCode   ( script )
        {
            script = script.toString ( ).replace ( /\([^{]+{/, '' );

            return   script.substring ( 0, script.length - 1 );
        }

        /**
         * Cleans code of enumerators for presentation layer
         * @param           {Function} script                   JavaScript function; for card-objects only
         * @return          {string}                            Function as a string
         */
        function _cleanCode         ( script )
        {
            script     = _cleanScriptCode ( script );


            let _temp  = script.split ( /(\s+_[^;]+;)/ );

            let _code  = [ ];


            for ( let _line of _temp )
            {
                _line = _line.replace ( /\s+/, '' );


                if ( _line != '' )

                    _code.push ( `\n\n    ${_line}` );
            }


            return _code.join ( '' );
        }

        /**
         * Clears cards section
         */
        function _clearCards       ( )
        {
            ////    CARD SECTION    ////////////////////////

            let _cardsSection = document.getElementById ( 'test-cards' );

                _cardsSection.innerHTML = '';

            ////    BYRNE LOGO    //////////////////////////

            let _byrneLogo = document.getElementById ( 'byrne-systems-logo' );


            if ( _byrneLogo != null )

                _byrneLogo.remove ( );
        }

        /**
         * Copy code to clipboard
         */
        async function _copyCode   ( )
        {
            function _alert ( message, type )
            {
                let _wrapper       = document.createElement ( 'div' );

                    _wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + '<img src="images/svg/General/info.svg" />' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';


                    document.getElementById ( 'copiedAlert' ).append ( _wrapper );
            }


            let _code = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


            try
            {
                await navigator.clipboard.writeText ( _code );

                console.log ( 'Content copied to clipboard' );
            }
            catch ( err )
            {
                console.error ( 'Failed to copy: ', err );
            }


            _alert ( 'Copied code !', 'success' );


            let _alertNode = document.querySelector ( '#copiedAlert' );


            _delay ( 1000 ).then ( ( ) => _alertNode.children [ 0 ].remove ( ) );
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    SET FUNCTIONS    ///////////////////////////////////////////////////

        /**
         * Sets image path for passed card-objects
         * @param           {Array.<Object>} objects            Array of card-objects
         * @param           {string}         page               Type of page being rendered
         */
        function _setImagePath           ( objects, page )
        {
            let _page = _toTitleCase ( page );


            for ( let _object of objects )

                _object.image = ( [ 'Circle', 'Line', 'Rectangle', 'Text' ].indexOf ( _page ) != -1 )

                                    ? `Object/${_page}`

                                    : `Subject/${_page}`;
        }

        /**
         * Instantiates code for passed card-objects
         * @param           {Array.<Object>} objects            Array of card-objects
         */
        function _setCode                ( objects )
        {
            let _codes = [ ]


            for ( let _object of objects )

                _codes.push ( `////    ${_object.title}    //////////////////////////\n\n${_object.code}` );


            let _wrapper = `( ( window ) =>\n{\n${_codes.join ( '\n\n' )}\n\n} ) ( window );`


            eval ( _wrapper );
        }

        /**
         * Sets card section's inner HTML
         * @param           {Array} cards                       Array of HTML templates for each card-object
         */
        function _setCardSection         ( cards )
        {
            let _cardSection = document.getElementById ( 'test-cards' );


            for ( let _card of cards )

                _cardSection.innerHTML += _card;


            initCanvasLab ( );                              // initialize canvasLab
        }

        /**
         * Sets modal event listeners
         */
        function _setModalEventListeners ( )
        {
            // view-buttons
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


            // copy-button
            let _copyButton = document.querySelector ( '#modal-code > div > div > div.modal-footer > button.btn.btn-primary' );


                _copyButton.addEventListener ( 'click', _copyCode );
        }

        /**
         * Sets nav event listeners
         */
        function _setNavEventListeners   ( )
        {
            let _navButtons = document.querySelectorAll ( '.mb-1:nth-child(-n+3) ul.btn-toggle-nav > li > a' );


            for ( let _button of _navButtons )

                _button.addEventListener ( 'click', ( element ) =>
                    {
                        _clearCards ( );


                        let _page = _button.href.match ( /#(\w+)/g ) [ 0 ].replace ( '#', '' ).toLowerCase ( );


                        if ( cardObjects [ _page ] != undefined )

                            _buildAlbumCards ( _page );

                        else

                            _setByrneSystemsLogo ( );
                    } );
        }

        /**
         * Sets byrne-systems logo
         */
        function _setByrneSystemsLogo    ( )
        {
            let _element = document.getElementById ( 'byrne-systems-logo' );


            if ( _element != null )

                _element.remove ( );

            ////////////////////////////////////////////////////////////////////

            let _main  = document.getElementsByTagName ( 'main' ) [ 0 ];

            let _div   = document.createElement ( 'div' );

            let _image = document.createElement ( 'img' );


                _image.src         = '../images/cube_sm.png';


                _div.id            = 'byrne-systems-logo';

                _div.style.cssText = `margin-top: ${_main.clientHeight / 2.5}px`;


                _div.appendChild  ( _image );

                _main.appendChild ( _div );
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    GET FUNCTIONS    ///////////////////////////////////////////////////

        /**
         * Returns an Array of HTML templates for each card-object
         * @param           {Array.<Object>} cardObjects        Array of card-objects
         * @return          {Array}                             Array of HTML templates for each card-object
         */
        function _getCardTemplates    ( cardObjects )
        {
            let _cards = [ ];


            for ( let _iter in cardObjects )
            {
                let _count      = _2digit ( _iter );

                let _template   = _cardTemplate ( ).replace ( /{{number}}/g, _count );

                let _cardObject = cardObjects [ _iter ];


                _cards.push ( _getHTMLCodeTemplate ( _cardObject, _template, _count ) );
            }


            return _cards;
        }

        /**
         * Returns a class initializer for the passed class
         * @param           {string} object                     Class or object name
         * @return          {string}                            String for class constructor
         */
        function _getClassInitializer ( object )
        {
            let _class = _toTitleCase ( object );


            switch ( _class )
            {
                case 'Line':         return '{ x: 100, y: 50 }, { x: 200, y: 100 }';

                case 'Circle':       return '{ x: 154, y: 77 }';

                case 'Rectangle':    return '{ x: 154, y: 77 }';

                case 'Text':         return '{ x: 154, y: 77 }, \'Text\'';
            }
        }

        /**
         * Returns rendered HTML for a card-object
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

                    let _class    = _code.match ( /_(\w+)/ ) [ 1 ];

                    let _init     = _getClassInitializer ( _class );

                    let _variable = `_${_class}`;

                    let _regex    = new RegExp ( _variable, 'g' );


                        _class    = _class.charAt ( 0 ).toUpperCase ( ) + _class.slice ( 1 );

                        _code     = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';${_code}`;

                        _code     = _code.replace ( _regex, `${_variable}_${count}` );


                    cardObject [ _entry ] = _code;
                }


                let _regex = new RegExp ( `{{${_entry}}}`, 'g' );


                template = template.replace ( _regex, cardObject [ _entry ] );
            }


            return template;
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    BUILD FUNCTIONS    /////////////////////////////////////////////////

        /**
         * Returns a copied object
         * @param           {Object} object                     Object to copy
         * @param           {string} key                        Key of object to copy
         * @return          {Object}                            Copied object
         */
        function _copyObjectWithKey      ( object, key )
        {
            let _result       = JSON.parse ( JSON.stringify ( object [ key ] ) );

            let _copyFunction = ( func ) => func;


            for ( let _entry in object [ key ] )

                _result [ _entry ].code = _copyFunction ( object [ key ] [ _entry ].code );


            return _result;
        }

        /**
         * Builds album cards for the page passed
         * @param           {string} page                       Page to build
         */
        function _buildAlbumCards ( page )
        {
            let _cardObjects = _copyObjectWithKey ( cardObjects, page );


            _setImagePath   ( _cardObjects, page );

            _setCardSection ( _getCardTemplates ( _cardObjects ) );

            _setCode        ( _cardObjects );


            _setModalEventListeners ( );
        }

        /**
         * Sets the default page
         */
        function _setDefaultPage  ( )
        {
            if ( window.master != undefined )

                _setByrneSystemsLogo ( );

            else

                console.error ( '[ ERROR ]: window.master is not available !');
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////

        /**
         * Returns library object
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib =
            {
                debug: false,
                dom:
                {
                    canvases:  [ ],
                    contexts:  [ ],
                    window:
                    {
                        width:     window.innerWidth  - 18,
                        height:    window.innerHeight -  4,
                        xCenter: ( window.innerWidth  /  2 ),
                        yCenter: ( window.innerHeight /  2 )
                    },
                    main:
                    {
                        canvas:  undefined,
                        context: undefined
                    }
                },
                settings: undefined
            }

            return _lib;
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    INITIALIZATION    //////////////////////////////////////////////////

        /**
         * Initiates devTest
         */
        function _init ( )
        {
            window.devTest = _library ( );


            if ( typeof ( window.cardObjects ) != 'undefined' )
            {
                _setDefaultPage       ( );

                _setNavEventListeners ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !');
        }


        if ( typeof ( window.devTest ) === 'undefined' )

            _init ( );

} ) ( window );
