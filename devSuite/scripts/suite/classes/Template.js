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
