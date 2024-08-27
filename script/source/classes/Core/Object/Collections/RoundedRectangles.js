/**
 * @class           {Array}             RoundedRectangles       Collection of Rounded Rectangle objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
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
