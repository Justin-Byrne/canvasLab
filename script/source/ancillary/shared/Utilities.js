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
