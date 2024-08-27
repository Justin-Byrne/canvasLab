/**
 * @class           {Array}             Group                   Collection of Line, Circle, Rectangle & Text objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Array}             lines                   Collection of Line objects
 * @property        {Array}             circles                 Collection of Circle objects
 * @property        {Array}             ellipses                Collection of Ellipse objects
 * @property        {Array}             rectangles              Collection of Rectangle objects
 * @property        {Array}             roundedRectangles       Collection of Rounded Rectangle objects
 * @property        {Array}             text                    Collection of Text objects
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 */
class Group extends Array
{
    _point = new Point;

    _lines             = new Lines;
    _circles           = new Circles;
    _ellipses          = new Ellipses;
    _rectangles        = new Rectangles;
    _roundedRectangles = new RoundedRectangles;
    _texts             = new Texts;

    _canvas   = undefined;
    _template = undefined;

    #storage  = { types: [ 'lines', 'circles', 'ellipses', 'rectangles', 'roundedRectangles', 'texts' ] }

    /**
     * Create Group object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isTemplate        = VALIDATION.isTemplate;
            this._isPoint           = VALIDATION.isPoint;

            Object.defineProperty ( this, 'template', PROPERTY_BLOCKS.collection.template );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.individual.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.individual.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.pointY}
         */
        get y ( ) { }

    ////    [ LINES ]    ///////////////////////////////////

        /**
         * Get's lines
         * @readOnly
         * @function
         * @return          {Lines}                                     Lines collection
         */
        get lines ( )
        {
            return this._lines;
        }

    ////    [ CIRCLES ]    /////////////////////////////////

        /**
         * Get's circles
         * @readOnly
         * @function
         * @return          {Circles}                                   Circles collection
         */
        get circles ( )
        {
            return this._circles;
        }

    ////    [ ELLIPSES ]    ////////////////////////////////

        /**
         * Get's ellipses
         * @readOnly
         * @function
         * @return          {Ellipses}                                  Ellipses collection
         */
        get ellipses ( )
        {
            return this._ellipses;
        }

    ////    [ RECTANGLES ]    //////////////////////////////

        /**
         * Get's rectangles
         * @readOnly
         * @function
         * @return          {Rectangles}                                Rectangles collection
         */
        get rectangles ( )
        {
            return this._rectangles;
        }

    ////    [ ROUNDED RECTANGLES ]    //////////////////////

        /**
         * Get's rounded rectangles
         * @readOnly
         * @function
         * @return          {RoundedRectangles}                         Rectangles collection
         */
        get roundedRectangles ( )
        {
            return this._roundedRectangles;
        }

    ////    [ TEXTS ]    ///////////////////////////////////

        /**
         * Get's texts
         * @readOnly
         * @function
         * @return          {Texts}                                     Texts collection
         */
        get texts ( )
        {
            return this._texts;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         */
        set canvas ( value )
        {
            this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : ( this._isCanvasLabObject ( value ) )

                                                     ? null

                                                     : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


            for ( let _type of this.#storage.types )

                if ( ( this [ _type ].length > 0 )  &&  ( this._canvas instanceof CanvasRenderingContext2D ) )

                    for ( let _object of this [ _type ] )

                        _object.canvas = this.canvas;
        }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         */
        get canvas ( )
        {
            return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
        }

    ////    [ TEMPLATE ]  //////////////////////////////////

        /**
         * Set template
         * @public
         * @function
         * @param           {Template} value                            Template object
         * @see             {@link PROPERTY_BLOCKS.collection.template}
         */
        set template ( value ) { }

        /**
         * Get template
         * @readOnly
         * @function
         * @return          {Template}                                  Template object
         * @see             {@link PROPERTY_BLOCKS.collection.template}
         */
        get template ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @public
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all canvases throughout each internal collection of objects
         * @private
         * @function
         */
        _setAllCanvases ( )
        {
            if ( this._canvas )

                for ( let _type of this.#storage.types )

                    if ( this [ _type ].length )

                        this [ _type ].canvas = this.canvas;
        }

        /**
         * Sets offset of child Rectangle against this constructor's point
         * @private
         * @function
         * @param           {Rectangle} Object                          Rectangle object
         */
        _setPointOffset ( Object )
        {
            Object.x += this.x;

            Object.y += this.y;
        }

        /**
         * Pushes an object into this group
         * @public
         * @function
         * @param           {Object} object                             Object; Line(s), Circle(s), Rectangle(S)
         */
        push ( object )
        {
            for ( let _value of arguments )

                switch ( _value.constructor.name )
                {
                    ////    OBJECTS     ////////////////////

                        case 'Line':                this._lines.push ( _value );                break;

                        case 'Circle':              this._circles.push ( _value );              break;

                        case 'Ellipse':             this._ellipse.push ( _value );              break;

                        case 'Rectangle':           this._rectangles.push ( _value );           break;

                        case 'RoundedRectangle':    this._roundedRectangles.push ( _value );    break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':               for ( let _line of _value ) this._lines.push ( _line );                                         break;

                        case 'Circles':             for ( let _circle of _value ) this._circles.push ( _circle );                                   break;

                        case 'Ellipses':            for ( let _ellipse of _value ) this._ellipses.push ( _ellipse );                                break;

                        case 'Rectangles':          for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );                          break;

                        case 'RoundedRectangles':   for ( let _roundedRectangle of _value ) this._roundedRectangles.push ( _roundedRectangle );     break;
                }
        }

        /**
         * Pops an object out of this group
         * @public
         * @function
         * @param           {Object} object                             Object; Line(s), Circle(s), Rectangle(S)
         */
        pop ( object )
        {
            for ( let _value of arguments )

                switch ( _value.constructor.name )
                {
                    ////    OBJECTS     ////////////////////

                        case 'Line':                this._lines.pop ( _value );                break;

                        case 'Circle':              this._circles.pop ( _value );              break;

                        case 'Ellipse':             this._ellipse.pop ( _value );              break;

                        case 'Rectangle':           this._rectangles.pop ( _value );           break;

                        case 'RoundedRectangle':    this._roundedRectangles.pop ( _value );    break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':               for ( let _line of _value ) this._lines.pop ( _line );                                         break;

                        case 'Circles':             for ( let _circle of _value ) this._circles.pop ( _circle );                                   break;

                        case 'Ellipses':            for ( let _ellipse of _value ) this._ellipses.pop ( _ellipse );                                break;

                        case 'Rectangles':          for ( let _rectangle of _value ) this._rectangles.pop ( _rectangle );                          break;

                        case 'RoundedRectangles':   for ( let _roundedRectangle of _value ) this._roundedRectangles.pop ( _roundedRectangle );     break;

                    default:

                        console.warn ( `"${_value}" is not a supported type to be popped into ${this.constructor.name}` );

                        break;
                }
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this group
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            for ( let _type of this.#storage.types )

                if ( this [ _type ].length > 0 )
                {
                    this._setPointOffset ( this [ _type ] );


                    this [ _type ].draw ( );
                }
                else

                    console.warn ( `No ${_type} exist to draw !` );
        }
}
