class myTransitions
{
	_transitions = undefined;

	_template    = undefined;

	/**
	 * Create myTransitions object
	 */
	constructor ( )
	{
		////    COMPOSITION     ////////////////////////////

            this._isTemplate = VALIDATION.isTemplate;

            Object.defineProperty ( this, 'template', PROPERTY_BLOCKS.individual.template );
	}

	////    PROPERTIES    //////////////////////////////////

		////    [ TRANSITIONS ]    ///////////////

		    /**
		     * Get transitions
		     * @public
		     * @function
		     * @return 			{number}									Transitions of object
		     */
		    get transitions ( )
		    {
		        return this._transitions;
		    }

		////    [ TEMPLATE ]    //////////////////

		    /**
		     * Set template
		     * @public
		     * @function
		     * @param 			{Template} value 							Template object
		     * @see             {@link PROPERTY_BLOCKS.individual.template}
		     */
		    set template ( value ) { }

		    /**
		     * Get template
		     * @public
		     * @function
		     * @return 			{Template}									Template object
		     * @see             {@link PROPERTY_BLOCKS.individual.template}
		     */
		    get template ( ) { }

	////    VALIDATION    //////////////////////////////////

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

	////    UTILITIES    ///////////////////////////////////

		////    [ PRIVATE ]    ///////////////////

			/**
		     * Creates shape from array of numbers
		     * @public
		     * @function
		     * @param           {Array} 		  shape                     Array of collection indexes
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param           {boolean}         lineTos                   Draw lines connecting shapes
		     * @param           {boolean}         optimal                   Optimal line draws
		     */
		    _shape ( shape, collection, timing, period, lineTos = true, optimal = false )
		    {
		    	this._transitions = new Array;


		        let _objects = new Array;

		        let _changes = new Object;

		        let _matrix  = new Array;


				for ( let _i = 0; _i < shape.length; _i++ )
		        {
		        	let _index  = shape [ _i ];

		        	let _object = collection [ _index ];

		        	let _circle = new Circle (
		        					  this.template.point, 							/* Point  */
		        					  _object.radius,  								/* Radius */
		        					  undefined,  									/* Angle  */
		        					  new Stroke ( _object.stroke.color ),  		/* Stroke */
		        					  new Fill   ( _object.fill.color   ),  		/* Fill   */
		        					  undefined, 									/* Shadow */
		        					  _object.canvas 								/* Canvas */
		        				  );


		        	_objects.push ( _circle );

		        	_changes [ _i ] = { point: _object.point, cache: true }


		        	////    LINETOS    /////////////////////////////////////

			        	if ( lineTos )
			        	{
			        		_changes [ _i ].lineTo = new Array;


			        		for ( let _j = 0; _j < shape.length; _j++ )
			        		{
			        			if ( _i === _j ) continue; 		// Skip the first _object's point, because it cannot draw a line to itself


			        			if ( optimal ) 					// Skip every object's first, second, third to skip duplicate objects that have already had a line drawn to it.

			        				if ( _j < _i ) continue;


			        			_matrix.push ( { objectA: _i, objectB: _j } );


			        			_changes [ _i ].lineTo.push ( collection [ shape [ _j ] ] )
			        		}
			        	}
		        }


	            let _result =
	            {
	                object: _objects,
	                timing: timing,
	                period: period,
	                change: _changes
	            }


	            this._transitions.push ( _result );


		        return this._transitions;
		    }

		////    [ PUBLIC ]    ////////////////////

			/**
		     * Returns transitions for skip animation
		     * @public
		     * @function
		     * @param           {clObject}        object                    Canvas Lab object
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     */
		    skip ( object, collection, timing, period )
		    {
		        this._transitions = new Array;


		        for ( let _i = 0; _i < collection.length; _i++ )
		        {
		            let _result =
		            {
		                object: object,
		                timing: timing,
		                period: period,
		                change:
		                {
		                    point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
		                    cache: true,
		                    fillColor: collection [ _i ].fill.color
		                }
		            }


		            this._transitions.push ( _result );
		        }


		        return this._transitions;
		    }

		    /**
		     * Returns transitions for hop animation
		     * @public
		     * @function
		     * @param           {clObject}        object                    Canvas Lab object
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     */
		    hop ( object, collection, timing, period )
		    {
		        this._transitions = new Array;


		        for ( let _i = 0; _i < collection.length; _i++ )
		        {
		            let _object = new Circle (
		            				  object.point,
									  collection [ _i ].radius,
									  collection [ _i ].angle,
									  new Stroke ( collection [ _i ].stroke.color ),
									  new Fill   ( collection [ _i ].fill.color   ),
									  undefined,
									  object.canvas
								  );

		            let _result =
		            {
		                object: _object,
		                timing: timing,
		                period: period,
		                change:
		                {
		                    point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
		                    cache: true
		                }
		            }


		            this._transitions.push ( _result );
		        }


		        return this._transitions;
		    }

			/**
		     * Returns transitions for bloom animation
		     * @public
		     * @function
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param 			{boolean} 		  out 						Whether to bloom out, or in
		     */
		    bloom ( collection, timing, period, out = true )
		    {
		        this._transitions = new Array;


		        let _result =
	            {
	                object: collection,
	                timing: timing,
	                period: period,
	                change: new Array
	            }


		        if ( out )

		        	for ( let _i = 0; _i < collection.length; _i++ )

		            		_result.change.push ( { pointFrom: collection [ 0 ].point } );

		        else

		        	for ( let _i = 0; _i < collection.length; _i++ )

		            		_result.change.push ( { point: collection [ 0 ].point } );


		        this._transitions.push ( _result );


		        return this._transitions;
		    }

		    /**
		     * Creates shape from array of numbers
		     * @public
		     * @function
		     * @param           {Array}    		  shape                     Array of collection indexes
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param           {boolean}         lineTos                   Draw lines connecting shapes
		     * @param           {boolean}         optimal                   Optimal line draws
		     */
		    shape ( shape, collection, timing, period, lineTos = true, optimal = false )
		    {
		        let _shapeArray = new Array;


		        if ( ! shape )
		        {
		        	for ( let _i = 0; _i < collection.length; _i++ )

	    				_shapeArray.push ( Array.from ( { length: _i }, ( _, i ) => i + 1 ) );


	    			_shapeArray = _shapeArray [ collection.length - 1 ];
	    		}
	    		else

	    			_shapeArray = shape;


				return this._shape ( _shapeArray, collection, timing, period, lineTos, optimal );
		    }
}
