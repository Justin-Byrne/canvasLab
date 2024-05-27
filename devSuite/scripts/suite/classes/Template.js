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

                                   </div>

                               </div>

                               <div class="title">{{title}}</div>

                               <div class="card-number">

                                   <span class="close"></span>

                                   <span class="number">{{index}}</span>

                               </div>

                           </div> <!-- .card-header -->

                           <canvas id="canvas_{{index}}"></canvas>

                           <div class="card-body">

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
         * @readOnly
         * @name standard
         * @function
         * @return          {string}                            HTML card standard template
         */
        get standard ( ) { return this._types.standard; }

    ////    [ BLANK ]    ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns a blank HTML card template
         * @readOnly
         * @name blank
         * @function
         * @return          {string}                            HTML card blank template
         */
        get blank ( ) { return this._types.blank; }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

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
         * @param           {string} template                   HTML card template
         * @param           {string} count                      Card-object number
         * @return          {string}                            HTML card template
         */
        _getCodeTemplate ( cardObject, template, count )
        {
            for ( let _entry in cardObject )
            {
                if ( _entry === 'code' )
                {
                    let _code     = UI.clean.code ( cardObject [ _entry ] );


                    let _class    = UI.getClass ( _code );

                    let _variable = `_${_class.toLowerCase ( )}`;

                    let _regex    = new RegExp ( _variable, 'g' );


                    let _init     = ( PAGE.handler ) ? this._initializer [ PAGE.handler ] [ _class ] : this._initializer [ PAGE.group ] [ _class ];


                        _code     = `let ${_variable} = new ${_class} ( ${_init} );\n\n    ${_variable}.canvas = 'canvas_${count}';\n${_code}`;

                        _code     = _code.replace ( _regex, `${_variable}_${count}` );

                        _code     = this._getSpecialVariables ( _code, count );


                    cardObject [ _entry ] = _code;
                }


                let _regex = new RegExp ( `{{${_entry}}}`, 'g' );


                template = template.replace ( _regex, cardObject [ _entry ] );
            }


            return template;
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
         * Sets image paths for each card-object passed through the param
         * @private
         * @name _setImagePaths
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
         * Return a template with the appropriate canvasLab images embedded
         * @private
         * @name _getImages
         * @param           {Object} cardObject                 Card-object
         * @param           {string} template                   HTML card template
         */
        _getImages ( cardObject, template )
        {
            this._setImagePaths ( cardObject );


            if ( cardObject.images )
            {
                for ( let _entry in cardObject.images )
                {
                    let _type = cardObject.images [ _entry ];


                    switch ( _entry )
                    {
                        case 'easing':      template = template.replace ( /{{easing}}/, _type );        break;

                        case 'handler':     template = template.replace ( /{{handler}}/, _type ).replace ( /{{handler}}/, _type );       break;

                        case 'children':

                            for ( let _childType of _type )
                            {
                                let _childGroup = TOOL.isCanvasLabObject ( _childType ) ? 'Object' : 'Subject';

                                template        = template.replace ( /{{childGroup}}/, _childGroup ).replace ( /{{childType}}/, _childType ).replace ( /{{childType}}/, _childType );
                            }

                            break;

                        default:

                            let _group = TOOL.isCanvasLabObject ( _type ) ? 'Object' : 'Subject';

                            template = template.replace ( /{{group}}/, _group ).replace ( /{{type}}/, _type ).replace ( /{{type}}/, _type );
                    }
                }
            }

            // Clean remaining unused image tags
            template = template.replaceAll ( new RegExp ( '<img src="images/svg(/Handler)?/{{[^>]+>', 'g' ), '' );


            return template;
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
}
