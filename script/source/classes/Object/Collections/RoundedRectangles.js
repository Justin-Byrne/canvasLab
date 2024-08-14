/**
 * @class           {Array} RoundedRectangles 					Collection of Rounded Rectangle objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @extends 		{Rectangles}
 */
class RoundedRectangles extends Rectangles
{
	#options = new Options;

	////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {Object}                                    Options object
         */
        get options ( )
        {
            return this.#options;
        }
}
