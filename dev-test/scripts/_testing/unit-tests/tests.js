"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            TESTS                                                   ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn ( '[UNIT TESTS]' );

////////////////////////////////////////////////////////////////////////////////////////////////////
////    TEST FUNCTIONS      ////////////////////////////////////////////////////////////////////////

const showClass = ( object ) 	  	=> console.log ( new object ( ) );

const showProps = ( object )		=> console.log ( Object.getOwnPropertyNames ( new object ( ) ) );

const showLine  = ( amount = 70 ) 	=> console.log ( '-'.repeat ( amount ) );


function showAll ( object )
{
	showClass ( object );

	showProps ( object );
}


function construct ( object )
{
	if ( object instanceof Object )
	{
		let _code = 'object = new arguments [ 0 ] ( ';


		for ( let _id in arguments )
		{
			if ( _id == 0 ) continue;


			_code += ( _id != arguments.length - 1 )

					     ? `arguments [ ${_id} ], `

						 : `arguments [ ${_id} ] );`;
		}

		eval ( _code );
	}
	else

		console.warn ( `"${object}" is not a passable object !` );


	console.log ( object );
}


function constructGroup ( object )
{
	if ( object instanceof Object )
	{
		let _code = `construct ( ${object.name}, `;

		console.groupCollapsed ( object.name );

			showAll  ( object );

			showLine ( );

			for ( let _i = 1; _i < arguments.length; _i++ )
			{
				let _argument = undefined;


				switch ( typeof arguments [ _i ] )
				{
					case 'number':
					case 'boolean': 	_argument = arguments [ _i ]; 						break;

					case 'string':  	_argument = `'${arguments [ _i ]}'`; 				break;

					case 'object': 		_argument = JSON.stringify ( arguments [ _i ] ); 	break;

					default:

						console.warn ( `${typeof arguments [ _i ]} is not a valid type within this function` );

						break;
				}


				if ( _i == 1 )

					_code += `${_argument} );`;

				else

					_code = _code.replace ( ' );', `, ${_argument} );` );


				eval ( _code );
			}

		console.groupEnd ( );
	}
	else

		console.warn ( `"${object}" is not a passable object !` );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////    CLASS CONSTRUCTION 		////////////////////////////////////////////////////////////////////

constructGroup ( Point, 1, 2 );

// constructGroup ( Color, '255, 255, 255' );

// constructGroup ( Alpha, 0 );

constructGroup ( Shadow, '255, 255, 255', 0, 3, { x: 1, y: 2 } );

constructGroup ( Stroke, 1, [ 10, 10, 10 ], '255, 255, 255', 0, 0 );

constructGroup ( Fill, '255, 255, 255', 0 );

constructGroup ( Angle, 1, 2, false );

constructGroup ( Text,

               { x: 1, y: 2 },

                'shit', 'Helvetica', 24, 300, 100,

			   { x: 1, y: 2 },

			   { type: 1, segments: [ 10, 10, 10 ], color: '255, 255, 255', alpha: 0, width: 10 },

			   { color: '255, 255, 255', alpha: 0 },

			   { color: '255, 255, 255', alpha: 0, blur: 3, offset: { x: 1, y: 2 } },

				'canvas' );

constructGroup ( Circle,

               { x: 1, y: 2 },

                 10,

			   { start: 1, end: 2, clockwise: false },

			   { type: 1, segments: [ 10, 10, 10 ], color: '255, 255, 255', alpha: 0, width: 10 },

			   { color: '255, 255, 255', alpha: 0 },

			   { color: '255, 255, 255', alpha: 0, blur: 3, offset: { x: 1, y: 2 } },

			    'canvas' );

constructGroup ( Rectangle,

               { x: 1, y: 2 },

               { width: 10, height: 20 },

			   { type: 1, segments: [ 10, 10, 10 ], color: '255, 255, 255', alpha: 0, width: 10 },

			   { color: '255, 255, 255', alpha: 0 },

			   { color: '255, 255, 255', alpha: 0, blur: 3, offset: { x: 1, y: 2 } },

				'canvas' );

constructGroup ( Line,

			   { x: 1, y: 2 },

			   { x: 3, y: 4 },

			   { type: 1, segments: [ 10, 10, 10 ], color: '255, 255, 255', alpha: 0, width: 10 },

			   { color: '255, 255, 255', alpha: 0, blur: 3, offset: { x: 1, y: 2 } },

                'butted',

				'canvas' );

// constructGroup ( Texts, { x: 1, y: 2 }, 'canvas' );

// constructGroup ( Circles, { x: 1, y: 2 }, 'canvas' );

// constructGroup ( Rectangles, { x: 1, y: 2 }, 'canvas' );

// constructGroup ( Lines, { x: 1, y: 2 }, 'canvas' );
