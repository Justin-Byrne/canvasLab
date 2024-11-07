/**
 * Canvas Lab object
 * @typedef 		{Object} clObject
 */

/**
 * Canvas Lab collection
 * @typedef 		{Object} clCollection
 */

/**
 * Canvas Lab Template, for the creation of objects through a collection
 * @typedef 		{Object}   Template
 * @property 		{Point}    point 							X & Y coordinates
 * @property 		{clObject} master 							Master Canvas Lab object
 * @property 		{Function} init 							Initialization of Template
 */

/**
 * Change, for animation changes through a transition
 * @typedef 		{Object} clChange
 */

/**
 * Transition, for animation transition instances
 * @typedef 		{Object}   Transition
 * @param           {clObject} transition.object            	CanvasLab Object
 * @param           {Function} transition.timing            	Timing function
 * @param           {number}   transition.period            	Period of time
 * @param           {clChange} transition.change            	Changes to object
 */
