/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Discrete property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.discrete
     */
    discrete:
    {
        /** @function PROPERTY_BLOCKS.discrete.alpha                                                **/
        alpha:
        {
            set ( value )
            {
                this._alpha = ( value <= 1  &&  value >= 0 ) ? value : this._alpha;
            },
            get ( )
            {
                return this._alpha;
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.area                                                 **/
        /** @notes for <Rectangle>, <cImage>                                                        **/
        area:
        {
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.canvas                                               **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( window.canvaslab.canvas )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.center                                               **/
        /** @notes for <Rectangle>, <cImage>                                                        **/
        center:
        {
            get ( )
            {
                let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

                let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.offset                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.offsetX                                              **/
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
        /** @function PROPERTY_BLOCKS.discrete.offsetY                                              **/
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
        /** @function PROPERTY_BLOCKS.discrete.point                                                **/
        point:
        {
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? new Point ( value.x, value.y ) : this._point;
            },
            get ( )
            {
                return this._point;
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.pointX                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.pointY                                               **/
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
        },
        /** @function PROPERTY_BLOCKS.discrete.perimeter                                            **/
        perimeter:
        {
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.radius                                               **/
        radius:
        {
            set ( value )
            {
                this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
            },
            get ( )
            {
                return this._radius;
            }
        },
    },

    /**
     * Combined property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.combined
     */
    combined:
    {
        /** @function PROPERTY_BLOCKS.combined.anchor                                               **/
        anchor:
        {
            set ( value )
            {
                this._anchor.type = ( this._isAnchor ( value ) ) ? value : this._anchor.type;


                this._setAnchorPoint ( );
            },
            get ( )
            {
                return this._anchor;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.area                                                 **/
        area:
        {
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspect                                               **/
        aspect:
        {
            get ( )
            {
                this._setAspect ( );


                return this._aspect;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspectWidth                                          **/
        aspectWidth:
        {
            get ( )
            {
                return this._aspect.width;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspectHeight                                         **/
        aspectHeight:
        {
            get ( )
            {
                return this._aspect.height;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.canvas                                               **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : ( this._isCanvasLabObject ( value ) )

                                                     ? null

                                                     : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


                if ( ( this.length > 0 )  &&  ( this._canvas instanceof CanvasRenderingContext2D ) )

                    for ( let _object of this )

                        _object.canvas = this.canvas;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.center                                               **/
        center:
        {
            get ( )
            {
                let [ _x, _y ] = [ this.width / 2, this.height / 2 ];


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.endPoint                                             **/
        endPoint:
        {
            get ( )
            {
                return this [ this.length - 1 ].point;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.perimeter                                            **/
        perimeter:
        {
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.start                                                **/
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
        /** @function PROPERTY_BLOCKS.combined.end                                                  **/
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
