/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Discrete property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.individual
     */
    individual:
    {
        /** @function PROPERTY_BLOCKS.individual.alpha                                           **/
        alpha:
        {
            /**
             * Set alpha value
             * @public
             * @function
             * @param           {number} value                              Alpha value; 0 - 1
             */
            set ( value )
            {
                this._alpha = ( value <= 1  &&  value >= 0 ) ? value : this._alpha;
            },

            /**
             * Set alpha value
             * @public
             * @function
             * @return          {number}                                    Alpha value; 0 - 1
             */
            get ( )
            {
                return this._alpha;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.area                                            **/
        /** @notes for <Rectangle>, <cImage>                                                     **/
        area:
        {
            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of this object
             */
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.canvas                                          **/
        canvas:
        {
            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             */
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( window.canvaslab.canvas )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;
            },

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             */
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.center                                          **/
        /** @notes for <Rectangle>, <cImage>                                                     **/
        center:
        {
            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             */
            get ( )
            {
                let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

                let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.master                                          **/
        master:
        {
            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             */
            set ( value )
            {
                this._master = ( this._isCanvasLabObject ( value ) ) ? value : this._master;
            },

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             */
            get ( )
            {
                return this._master;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offset                                          **/
        offset:
        {
            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             */
            set ( value )
            {
                this._offset = ( this._isPoint ( value ) ) ? value : this._offset;
            },

            /**
             * Get offset
             * @public
             * @function
             * @return          {Point}                                     Shadow offset
             */
            get ( )
            {
                return this._offset;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offsetX                                         **/
        offsetX:
        {
            /**
             * Set x-axis offset value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             */
            set ( value )
            {
                this._offset.x = value;
            },

            /**
             * Get x-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get ( )
            {
                return this._offset.x;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offsetY                                         **/
        offsetY:
        {
            /**
             * Set the y-axis offset value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set ( value )
            {
                this._offset.y = value;
            },

            /**
             * Get y-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get ( )
            {
                return this._offset.y;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.point                                           **/
        point:
        {
            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             */
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? new Point ( value.x, value.y ) : this._point;
            },

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             */
            get ( )
            {
                return this._point;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.pointX                                          **/
        pointX:
        {
            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             */
            set ( value )
            {
                this._point.x = value;
            },

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get ( )
            {
                return this._point.x;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.pointY                                          **/
        pointY:
        {
            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set ( value )
            {
                this._point.y = value;
            },

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get ( )
            {
                return this._point.y;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.perimeter                                       **/
        perimeter:
        {
            /**
             * Get perimeter
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             */
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.radius                                          **/
        radius:
        {
            /**
             * Set radius
             * @public
             * @function
             * @param           {number} value                              Radius of circle
             */
            set ( value )
            {
                this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
            },

            /**
             * Get radius
             * @readOnly
             * @function
             * @return          {number}                                    Radius of circle
             */
            get ( )
            {
                return this._radius;
            }
        },
    },

    /**
     * Combined property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.collection
     */
    collection:
    {
        /** @function PROPERTY_BLOCKS.collection.anchor                                          **/
        anchor:
        {
            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             */
            set ( value )
            {
                this._anchor.type = ( this._isAnchor ( value ) ) ? value : this._anchor.type;


                this._setAnchorPoint ( );
            },

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             */
            get ( )
            {
                return this._anchor;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.area                                            **/
        area:
        {
            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             */
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspect                                          **/
        aspect:
        {
            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             */
            get ( )
            {
                this._setAspect ( );


                return this._aspect;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspectWidth                                     **/
        aspectWidth:
        {
            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             */
            get ( )
            {
                return this._aspect.width;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspectHeight                                    **/
        aspectHeight:
        {
            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get ( )
            {
                return this._aspect.height;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.canvas                                          **/
        canvas:
        {
            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             */
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

                        if ( _object )

                            _object.canvas = this.canvas;
            },

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             */
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.center                                          **/
        center:
        {
            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             */
            get ( )
            {
                let [ _x, _y ] = [ this.width / 2, this.height / 2 ];


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.endPoint                                        **/
        endPoint:
        {
            /**
             * Returns the last Point within this Array
             * @public
             * @function
             * @return          {Point}                                     Last Array element's X & Y Coordinates
             */
            get ( )
            {
                return this [ this.length - 1 ].point;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.perimeter                                       **/
        perimeter:
        {
            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             */
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.template                                        **/
        template:
        {
            /**
             * Set template
             * @public
             * @function
             * @param           {Object} value                              Template object
             */
            set ( value )
            {
                if ( this._isTemplate ( value ) )
                {
                    [ this._template, this._template._master ] = [ value, this ];


                    this._template.init ( );

                    this._setAllCanvases ( );
                }
            },

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Object}                                    Template object
             */
            get ( )
            {
                return this._template;
            }
        },
    }
}
