/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Discrete property accessors & mutators
     * @function PROPERTY_BLOCKS.discrete
     */
    discrete:
    {
        /** @var            {Object} discrete.canvas                                                **/
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
                this._point = ( this._isPoint ( value ) ) ? new Point ( value.x, value.y ) : this._point;
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
        },
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
    },

    /**
     * Combined property accessors & mutators
     * @function PROPERTY_BLOCKS.combined
     */
    combined:
    {
        /** @var            {Object} combined.canvas                                                **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


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
