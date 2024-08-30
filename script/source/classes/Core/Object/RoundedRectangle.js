/**
 * @class           {Object}            RoundingRectangle 		RoundingRectangle object
 * @property        {Point}             point 					X & Y axis coordinates
 * @property        {Aspect}            aspect 					Aspect properties
 * @property        {Array}             [round=[5, 5, 5, 5]] 	Rounding properties
 * @property        {Stroke}            stroke 					Stroke properties
 * @property        {Fill}              fill 					Fill properties
 * @property        {Shadow}            shadow 					Shadow properties
 * @property        {Anchor}            anchor 					Anchor properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Options}  			options 				Options for this object
 * @property        {Position} 			position 				Position properties
 * @extends 		{Rectangle}
 */
class RoundedRectangle extends Rectangle
{
	_round  = [ 5, 5, 5, 5 ];
}
