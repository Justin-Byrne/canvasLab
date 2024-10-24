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
