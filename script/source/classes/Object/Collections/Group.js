/**
 * @class           {Array} Group                               Collection of Line, Circle, Rectangle & Text objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {Array} lines                               Collection of Line objects
 * @property        {Array} circles                             Collection of Circle objects
 * @property        {Array} rectangles                          Collection of Rectangle objects
 * @property        {Array} text                                Collection of Text objects
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Group extends Array
{
    _point      = new Point;
    _canvas     = undefined;
    _plan       = undefined;

    _lines      = new Lines;
    _circles    = new Circles;
    _rectangles = new Rectangles;
    _texts      = new Texts;

    #storage    = { types: [ 'lines', 'circles', 'rectangles', 'texts' ] }

    /**
     * Create Group object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, plan )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPlan  = VALIDATION.isPlan;
            this._isPoint = VALIDATION.isPoint;

        this.point  = point;
        this.canvas = canvas;
        this.plan   = plan;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         */
        set point ( value )
        {
            this._point = ( this._isPoint ( value ) ) ? value : this._point;
        }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         */
        get point ( )
        {
            return this._point;
        }

        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { this._point.x = value; }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )       { return this._point.x;  }

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { this._point.y = value; }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )       { return this._point.y;  }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
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
         * @see             {@link combined.canvas}
         */
        get canvas ( )
        {
            return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
        }

    ////    [ PLAN ]  //////////////////////////////////////

        /**
         * Set's plan
         * @public
         * @function
         * @param           {Object} value                              Plan object
         */
        set plan ( value )
        {
            if ( this._isPlan ( value ) )
            {
                [ this._plan, this._plan._master ] = [ value, this ];


                this._plan.init ( );

                this._setAllCanvases ( );
            }
        }

        /**
         * Get's plan
         * @readOnly
         * @function
         * @return          {Object}                                    Plan object
         */
        get plan ( )
        {
            return this._plan;
        }

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

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Plan
         * @public
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Plan object
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPlan}
         */
        _isPlan   ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint ( ) { }

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

                        case 'Line':        this._lines.push ( _value );       break;

                        case 'Circle':      this._circles.push ( _value );     break;

                        case 'Rectangle':   this._rectangles.push ( _value );  break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':       for ( let _line of _value ) this._lines.push ( _line );                 break;

                        case 'Circles':     for ( let _circle of _value ) this._circles.push ( _circle );           break;

                        case 'Rectangles':  for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );  break;

                    default:

                        console.warn ( `"${_value}" is not a supported type to be pushed into ${this.constructor.name}` );

                        break;
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

                        case 'Line':        this._lines.push ( _value );       break;

                        case 'Circle':      this._circles.push ( _value );     break;

                        case 'Rectangle':   this._rectangles.push ( _value );  break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':       for ( let _line of _value ) this._lines.push ( _line );                 break;

                        case 'Circles':     for ( let _circle of _value ) this._circles.push ( _circle );           break;

                        case 'Rectangles':  for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );  break;

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
