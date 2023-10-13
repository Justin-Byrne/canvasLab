// @program: 		canvasLab 
// @brief: 			HTML5 canvas drawing framework 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.0.2 
// @license: 		GPL-2.0

"use strict";
 
/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /** @var            {Object} discrete                                                           **/
    discrete:
    {
        /** @var            {Object} discrete.canvas                                                **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value === undefined )

                               ? ( window.canvaslab instanceof canvasLab )

                                     ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                     : this._canvas

                               : ( this._isInDom ( value ) )

                                     ? document.getElementById ( value ).getContext ( '2d' )

                                     : console.warn ( `"${value}" is not a valid DOM element !` );
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @var            {Object} discrete.offset                                                **/
        offset:
        {
            set ( value )
            {
                this._offset = ( this._isPoint ( value ) ) ? value : this._offset;
            },
            get ( )
            {
                return this._offset;
            }
        },
        /** @var            {Object} discrete.offsetX                                               **/
        offsetX:
        {
            set ( value )
            {
                this._offset.x = value;
            },
            get ( )
            {
                return this._offset.x;
            }
        },
        /** @var            {Object} discrete.offsetY                                               **/
        offsetY:
        {
            set ( value )
            {
                this._offset.y = value;
            },
            get ( )
            {
                return this._offset.y;
            }
        },
        /** @var            {Object} discrete.point                                                 **/
        point:
        {
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? value : this._point;
            },
            get ( )
            {
                return this._point;
            }
        },
        /** @var            {Object} discrete.pointX                                                **/
        pointX:
        {
            set ( value )
            {
                this._point.x = value;
            },
            get ( )
            {
                return this._point.x;
            }
        },
        /** @var            {Object} discrete.pointY                                                **/
        pointY:
        {
            set ( value )
            {
                this._point.y = value;
            },
            get ( )
            {
                return this._point.y;
            }
        }
    },
    /** @var            {Object} combined                                                           **/
    combined:
    {
        /** @var            {Object} combined.canvas                                                **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value === undefined )

                               ? ( window.canvaslab instanceof canvasLab )

                                     ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                     : this._canvas

                               : ( this._isInDom ( value ) )

                                     ? document.getElementById ( value ).getContext ( '2d' )

                                     : console.warn ( `"${value}" is not a valid DOM element !` );


                for ( let _element of this )

                    _element.canvas = value;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @var            {Object} combined.start                                                 **/
        start:
        {
            set ( value )
            {
                if ( this._isPoint ( value ) ) this._start = this.origin.start = value;
            },
            get ( )
            {
                return this._start;
            }
        },
        /** @var            {Object} combined.end                                                   **/
        end:
        {
            set ( value )
            {
                if ( this._isPoint ( value ) ) this._end = this.origin.end = value;
            },
            get ( )
            {
                return this._end;
            }
        }
    }
}
 
/**
 * Shared utility functions
 * @namespace       UTILITIES
 */
const UTILITIES =
{
    clearCanvas ( value )
    {
        let _canvas = document.getElementById ( this.canvas );


        if ( value ) this._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
    },
    /** @var            {Object} draw                                                               **/
    draw:
    {
        axis ( edgeOffset = 20, color =  '235, 81, 73' )
        {
            let _lines = new Lines ( new Line, new Line );

                _lines.stroke.color = '235, 81, 73';

                _lines.point        = this.center;

                _lines.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                [  _lines [ 0 ].start.x, _lines [ 0 ].end.x  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];

                [  _lines [ 1 ].start.y, _lines [ 1 ].end.y  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];


                _lines.draw ( );
        },
        border ( aspect, color =  '235, 81, 73' )
        {
            if ( this._isAspect ( aspect ) )
            {
                let _border = new Rectangle ( this.center, aspect );

                    _border.stroke.color = color;

                    _border.fill.alpha   = 0;

                    _border.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;

                    _border.draw ( );
            }
            else

                console.warn ( `"${value}" is not a valid aspect !` );
        },
        /** @var            {Object} collection                                                     **/
        collection:
        {
            typical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )

                        for ( let _object of this )
                        {
                            _object.point = new Point (  ( _object.origin.x + this.x ), ( _object.origin.y + this.y )  );


                            _object.draw ( );
                        }

                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            },
            aTypical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )
                    {
                        for ( let _object of this )
                        {
                            this._setAspect ( );

                            this._setAnchorPoint ( );


                            _object._start = new Point (  ( _object.origin.start.x + this.x ), ( _object.origin.start.y + this.y )  );

                            _object._end   = new Point (  ( _object.origin.end.x   + this.x ), ( _object.origin.end.y   + this.y )  );


                            _object.draw ( );
                        }


                        this._drawOptions ( );
                    }
                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            }
        }
    },
    /** @var            {Object} get                                                                **/
    get:
    {
        rgb ( value )
        {
            value = value.split ( ',' );

            return `${value [ 0 ].trim ( )}, ` +                // RED
                   `${value [ 1 ].trim ( )}, ` +                // GREEN
                   `${value [ 2 ].trim ( )}`                    // BLUE
        }
    },
    pushPop ( object )
    {
        let _index = undefined;


        if ( object instanceof this._storage.type )
        {
            if ( this._canvas != undefined )

                object.canvas = this.canvas;


            if ( this.length != 0 )
            {
                for ( let _id in this )

                    if ( this [ _id ] instanceof this._storage.type )

                        if ( this [ _id ].isThere ( object ) )

                            _index = _id;

                    else

                        break;


                ( _index != undefined )

                    ? this.splice ( _index, 1 )

                    : this.push   ( object );
            }
            else

                this [ 0 ] = object;
        }
        else

            console.warn ( `${this.constructor.name} only accepts '${this._storage.type.name}' objects !`);
    },
    rotatePoint ( origin = { x, y }, degree, distance )
    {
        let _point = new Point;

        let _angle = ( degree % 360 );


            _point.x = origin.x + Math.cos ( _angle * Math.PI / 180 ) * distance;

            _point.y = origin.y + Math.sin ( _angle * Math.PI / 180 ) * distance;


        return _point;
    },
    /** @var            {Object} set                                                                **/
    set:
    {
        all ( property, value )
        {
            let _ancestor = this.constructor.name.replace ( 'Collection', '' ).toLowerCase ( );


            this [ `_${property}` ] = value;                    // Set: parent element


            if ( this._master.length > 0 )

                for ( let _item of this._master )

                    _item [ _ancestor ] [ property ] = value;   // Set: child elements
        },
        shadow ( )
        {
            this._canvas.shadowBlur    = this._shadow.blur;

            this._canvas.shadowOffsetX = this._shadow.x;

            this._canvas.shadowOffsetY = this._shadow.y;

            this._canvas.shadowColor   = `rgba(${this._shadow.color}, ${this._shadow.alpha})`;
        }
    }
}
 
/**
 * Shared validation functions
 * @namespace       VALIDATION
 */
const VALIDATION =
{
    isAnchor ( value )
    {
        let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft' ];


        for ( let _option of _options ) if ( value === _option )  return true;


        return false;
    },
    isAlpha ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1  )  );
    },
    isAspect ( value )
    {
        let _aspect  = ( value instanceof Aspect );

        let _length = ( Object.keys ( value ).length == 2 );

        let _width  = ( value.hasOwnProperty ( 'width' ) )  ? ( typeof value.width === 'number' )  : false;

        let _height = ( value.hasOwnProperty ( 'height' ) ) ? ( typeof value.height === 'number' ) : false;


        return ( _aspect || _width && _height && _length );
    },
    isBlur ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 )  );
    },
    isCanvasLabObject ( value )
    {
        return (  ( value instanceof Line )  ||  ( value instanceof Circle )  ||  ( value instanceof Rectangle )  ||  ( value instanceof Text )  );
    },
    isDegree ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value <= 360 )  );
    },
    isInDom ( elementId )
    {
        return ( document.getElementById ( elementId ) != null );
    },
    isNumber ( value )
    {
        return (  ( typeof value === 'number')  &&  !isNaN ( value )  );
    },
    isPoint ( value )
    {
        let _point  = ( value instanceof Point );

        let _length = ( Object.keys ( value ).length == 2 );

        let _x      = ( value.hasOwnProperty ( 'x' ) ) ? ( typeof value.x === 'number' ) : false;

        let _y      = ( value.hasOwnProperty ( 'y' ) ) ? ( typeof value.y === 'number' ) : false;


        return ( _point || _length && _x && _y );
    },
    isRadian ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 6.283185307179586 )  );
    },
    isRadius ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value > 0 )  );
    },
    isRgb ( value )
    {
        return ( /\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]),(\s*)?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]),(\s*)?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/.test ( value ) );
    },
    isSegments ( value )
    {
        function isArrayNumberic ( value )
        {
            let _result = undefined;

            for ( let _element of value )
            {
                _result = ( typeof _element != 'number' ) ? false : true;

                if ( _result == false ) break;
            }


            return _result;
        }


        return ( Array.isArray ( value ) ) ? isArrayNumberic ( value ) : false;
    },
    isType ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1 )  );
    },
    isWidth ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 )  );
    }
}
 
/**
 * DEBUG General debug module
 */
const DEBUG =
{
    setCanvasStyleToHTML ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            [ _canvas.style.width, _canvas.style.height ]  = [ `${_canvas.width}px`, `${_canvas.height}px` ];
    },
    setCanvasStyleToHTMLMAX ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            _canvas.style.width = _canvas.style.height = '100%';
    },
    fixBlur ( canvasId )
    {
        let _dpi    = window.devicePixelRatio;

        let _canvas = document.getElementById ( canvasId );


        let style_height = +getComputedStyle ( _canvas ).getPropertyValue ( "height" ).slice ( 0, -2 );      //get CSS height, the + prefix casts it to an integer, the slice method gets rid of "px"

        let style_width  = +getComputedStyle ( _canvas ).getPropertyValue ( "width"  ).slice ( 0, -2 );


        _canvas.setAttribute ( 'height', style_height * _dpi );    //scale the canvas

        _canvas.setAttribute ( 'width',  style_width  * _dpi );
    }
}
 
class canvasLab
{
    #_canvas   = undefined;
    #_canvases = undefined;
    #_font     = undefined;
    #_state    = undefined;

    constructor ( canvas )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;

        this._init ( );

        this.canvas = canvas;
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        set canvas ( value )
        {
            this.#_canvas = ( this._isInDom ( value ) )

                                ? document.getElementById ( value ).getContext ( '2d' )

                                : this.#_canvas;
        }

        get canvas ( )
        {
            return this.#_canvas.canvas.id;
        }

    ////    [ CANVASES ]    ////////////////////////////////

        set canvases ( value )
        {
            let _canvas = ( this._isInDom ( value ) )

                              ? document.getElementById ( value ).getContext ( '2d' )

                              : undefined;


            if ( this.#_canvases == undefined )

                this.#_canvases = new Array;


            if ( _canvas != undefined )

                this.#_canvases.push ( _canvas );
        }

        get canvases ( )
        {
            return this.#_canvases;
        }

    ////    [ FONT ]    ////////////////////////////////////

        set font ( value )
        {
            this.#_font = ( typeof value === 'string' ) ? value : this.#_font;
        }

        get font ( )
        {
            return this.#_canvas.font;
        }

    ////    [ STATE ]   ////////////////////////////////////

        set state ( canvas )
        {
            let _canvas = (  ( canvas == undefined )  &&  ( this.#_canvas instanceof CanvasRenderingContext2D )  )

                              ? this.canvas

                              : canvas;


            window.app.setState ( _canvas );
        }

        get state ( )
        {
            window.app.getState ( _canvas );
        }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        clear ( canvas )
        {
            let _canvas = ( canvas === undefined ) ? this.canvas : canvas

                _canvas = document.getElementById ( _canvas );


            let _context = _canvas.getContext ( '2d' );


                _context.clearRect ( 0, 0, _canvas.width, _canvas.height );
        }

    ////    INITIALIZE  ////////////////////////////////////

        _init ( )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );


            if ( typeof _canvases === 'object' && this.#_canvases === undefined )

                for ( let _id in _canvases )

                    if ( _id == 0 )

                        this.canvas   = _canvases [ _id ].id;

                    else

                        this.canvases = _canvases [ _id ].id;
        }
}
 
class Application
{
    /**
     * _app                                                     Base application configurations
     * @type                        {Object}
     */
    #_app =
    {
        debug: false,
        windows:
        {
            about: false
        },
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'October, 2 2023',
            Library:   'Canvas Lab',
            Updated:   'Oct, 13 2023',
            Version:   '0.0.2',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    /**
     * _dom                                                         DOM Elements
     * @type                        {Object}
     */
    #_dom =
    {
        canvases:  undefined,
        contexts:  { },
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
        },
        mouse:
        {
            start:  undefined,
            end:    undefined,
            down:   false,
            extant: -1,
            offset: { x: 0, y: 0 }
        }
    }

    /**
     * _post()                                                      Post processing data
     * @type                        {Object}
     */
    #_post =
    {
        canvas:
        {
            state: undefined
        },
        line:
        {
            prior: { },
            cache: { }
        },
        redraw: { }
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        set canvas ( value )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );

            if ( this.#_dom.canvases === undefined )
            {
                this.#_dom.canvases = new Object ( );

                for ( let _canvas of _canvases )
                {
                    this.#_dom.canvases [ _canvas.id ] = document.getElementById ( _canvas.id );

                    this.#_dom.contexts [ _canvas.id ] = document.getElementById ( _canvas.id ).getContext ( "2d" );
                }
            }

            if ( this._isInDom ( value ) )
            {
                this.#_dom.main.canvas  = this.#_dom.canvases [ value ];

                this.#_dom.main.context = this.#_dom.contexts [ value ];
            }
            else

                console.warn ( `"${value}" does not exist !` );
        }

        get canvas ( )
        {
            return this.#_dom.main.context;
        }

    ////    [ ABOUT ]   ////////////////////////////////////

        get about ( )
        {
            return this.#_app.about;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( elementId )
        {
            return ( document.getElementById ( elementId ) != null );
        }

    ////    UTILITIES   ////////////////////////////////////

        setState ( canvasId )
        {
            this.#_post.canvas.state = this._dom.canvases [ canvasId ].toDataURL ( );

            this.clear ( canvasId );


            if ( ! this._isInDom ( 'saved-state' ) )
            {
                let _element = document.createElement ( 'img' );

                    _element.src   = this.#_post.canvas.state;

                    _element.id    = 'saved-state';

                    _element.style = 'position: absolute';


                    document.getElementById ( canvasId ).parentNode.insertBefore ( _element, document.getElementById ( canvasId ).nextElementSibling );
            }
            else

                console.warn ( `"saved-state" does not exist !` );
        }

        clear ( canvasId )
        {
            this._dom.contexts [ canvasId ].clearRect (
                0,                                          // X Coordinate
                0,                                          // Y Coordinate
                this._dom.canvases [ canvasId ].width,      // Rectangle's Width
                this._dom.canvases [ canvasId ].height      // Rectangle's Height
            );
        }
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

let initCanvasLab = ( canvas ) =>
{
    if ( typeof canvasLab === 'function' && typeof window.canvaslab  === 'undefined' )

        window.canvaslab = new canvasLab ( canvas );
}