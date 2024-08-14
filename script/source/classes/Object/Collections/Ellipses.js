/**
 * @class           {Array} Ellipses                            Collection of circle elements within an array
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @extends 		{Circles}
 */
class Ellipses extends Circles
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
