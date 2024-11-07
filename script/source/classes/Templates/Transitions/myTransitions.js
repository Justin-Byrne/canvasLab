class myTransitions
{
	_transitions = undefined;

	_template    = undefined;


	_numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
	_symbols = [ '𓆗', '𓁳', '𓅓', '𓃠', '𓃶', '𓆣', '𓁈', '𓆃', '𓂀', '𓋹'  ]
	_clocks  =
	{
		one: [ '🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚' ],
		two: [ '🕧', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦' ]
	}

	_characters = new Queue ( this._symbols );

	_config =
	{
		optimal: false
	}

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
       		 * Returns a new object based on the passed clClass, mirroring properties from the passed object
       		 * @private
       		 * @function
       		 * @param 			{object}   clClass 							Canvas Lab object class
       		 * @param 			{clObject} object 							Canvas Lab object
       		 */
        	_getNewObjectFromType ( clClass, object )
        	{
        		let _result = undefined;

        		let _class  = new clClass;

        		let _type   = _class.constructor.name;


				switch ( _type )
        		{
	        		case 'Circle':

        				_result        = new Circle;

		        		_result.point  = this.template.point;

		        		_result.radius = this.template.radius;

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Ellipse':

	        			_result        = new Ellipse;

		        		_result.point  = this.template.point;

		        		_result.radius = new Point ( this.template.radius * 0.75, this.template.radius );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Rectangle':

	        			_result        = new Rectangle;

		        		_result.point  = this.template.point;

		        		_result.aspect = new Aspect ( this.template.radius * 2, this.template.radius * 2 );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'RoundedRectangle':

	        			_result        = new RoundedRectangle;

		        		_result.point  = this.template.point;

		        		_result.aspect = new Aspect ( this.template.radius * 2, this.template.radius * 2 );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Text':

	        			_result        = new Text;

		        		_result.point  = this.template.point;

		        		_result.text   = this._characters.next;

		        		_result.size   = this.template.radius;

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;
        		}


        		return _result;
        	}

        	/**
        	 * Returns an array of new objects & changes created from the collection
        	 * @private
        	 * @function
			 * @param           {Array} 		  shape                     Array of collection indexes
			 * @param           {clCollection}    collection                Canvas Lab collection
			 * @param           {object} 		  clClass 					Canvas Lab object class
			 * @return 		    {Object} 		  		 					Objects & changes for the shape passed
        	 */
        	_getShapeObjectData ( shape, collection, clClass )
        	{
        		let _results =
        		{
        			objects: new Array,
        			changes: new Array
        		}


    			for ( let _i = 0; _i < shape.length; _i++ )
		        {
			        let _index  = shape [ _i ];

					let _object = collection [ _index ];


				    let _newObject = this._getNewObjectFromType ( clClass, _object );

				    let _change    = { point: _object.point, cache: true };


				    _results.objects.push ( _newObject );

				    _results.changes.push ( _change );
		        }


		        return _results;
        	}

        	/**
        	 * Returns an array of lines & changes linking the objects & collections together
        	 */
        	_getShapeLineData ( shape, objects, collection )
        	{
        		let _results =
        		{
        			objects: new Array,
        			changes: new Array
        		}


        		for ( let _i = 0; _i < objects.length; _i++ )

        			for ( let _j = 0; _j < objects.length; _j++ )
        			{
        				if ( this._config.optimal )
        				{
        					if ( _i === _j ) continue;

	        				if (  _i > _j  ) continue;
        				}


        				let _start  = collection [ shape [ _i ] ];

        				let _end    = objects [ _j ];


        				let _object = new Line;

        					_object.start  = _start.point;

        					_object.end    = _end.point;

        					_object.canvas = objects [ 0 ].canvas;

        					_object.stroke = this.template.strokes.next;


        				let _change = { endPointLink: _end };


        				_results.objects.push ( _object );

        				_results.changes.push ( _change );
        			}


        		return _results;
        	}

			/**
		     * Creates shape from array of numbers
		     * @private
		     * @function
		     * @param           {Array} 		  shape                     Array of collection indexes
		     * @param           {clCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param           {object} 		  clClass 					Canvas Lab object class
		     */
		    _shape ( shape, collection, timing, period, clClass )
		    {
		    	this.template.strokes.reset;


		    	this._transitions = new Array;


		        let _objects = new Array;

		        let _changes = new Array;


		        ////    SHAPE    ///////////////////////////

		        let _shapeData = this._getShapeObjectData ( shape, collection, clClass );


		        	_objects.push.apply ( _objects, _shapeData.objects );

		        	_changes.push.apply ( _changes, _shapeData.changes );

		        ////    LINES    ///////////////////////////

	        	let _lineData = this._getShapeLineData ( shape, _objects, collection );


	        		_objects.push.apply ( _objects, _lineData.objects );

	        		_changes.push.apply ( _changes, _lineData.changes );


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
		     * @param           {object} 		  clClass 					Canvas Lab object class
		     */
		    shape ( shape, collection, timing, period, clClass )
		    {
		        let _shapeArray = new Array;


		        if ( ! shape ) 	// @NOTE: If no shape, generate shape based off of it's length
		        {
		        	for ( let _i = 0; _i < collection.length; _i++ )

	    				_shapeArray.push ( Array.from ( { length: _i }, ( _, i ) => i + 1 ) );


	    			_shapeArray = _shapeArray [ collection.length - 1 ];
	    		}
	    		else

	    			_shapeArray = shape;


				return this._shape ( _shapeArray, collection, timing, period, clClass );
		    }
}
