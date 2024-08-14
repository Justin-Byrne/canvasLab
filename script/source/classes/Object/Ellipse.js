/**
 * @class           {Object} Ellipse                            Ellipse object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {Point} [radius=<Point<20, 30>]				Radius of ellipse
 * @property        {Angle}  angle                              Angle properties
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @extends 		{Circle}
 */
class Ellipse extends Circle
{
	_radius  = new Point ( 20, 30 );

	_anchor  = new Anchor;

	////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {Point} value 								Radius of circle
         */
        set radius ( value )
        {
            this._radius = ( value  &&  this._isPoint  ( value ) ) ? value : this._radius;
        }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {Point} 									Radius of circle
         */
        get radius ( )
        {
            return this._radius;
        }
}
