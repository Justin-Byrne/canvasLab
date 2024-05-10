/**
 * @class           {Object} Tool                       General helper class
 * @property        {Object} copy                       Standard HTML card template
 */
class Tool
{
    constructor ( ) { }

    ////    VALIDATORS    //////////////////////////////////////////////////////////////////////////

        /**
         * Whether the passed value is an 'Object' canvasLab category
         * @public
         * @name isCanvasLabObject
         * @function
         * @param           {string} value                      Object, i.e.: 'Line', 'Circle', 'Rectangle', etc...
         * @return          {boolean}                           True || False
         */
        isCanvasLabObject ( value )
        {
            return [ 'Line', 'Circle', 'Rectangle', 'Text' ].includes ( value );
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////////////////////////

        /**
         * Simple programmatic delay
         * @public
         * @name delay
         * @function
         * @param           {number} time                       Time to delay
         * @return          {Promise}                           An async promise
         */
        delay ( time )
        {
            return new Promise ( resolve => setTimeout ( resolve, time ) );
        }

        /**
         * Returns a copied object
         * @public
         * @name copyObjectWithKey
         * @function
         * @param           {Object} object                     Object to copy
         * @return          {Object}                            Copied object
         */
        copyObjectWithKey ( object )
        {
            let _copyFunction = ( func ) => func;

            let _result       = ( PAGE.group ) ? JSON.parse ( JSON.stringify ( object [ PAGE.group ] [ PAGE.type ] ) )

                                               : JSON.parse ( JSON.stringify ( object [ PAGE.type  ] ) );


            if ( PAGE.group )

                for ( let _entry in object [ PAGE.group ] [ PAGE.type ] )

                    _result [ _entry ].code = _copyFunction ( object [ PAGE.group ] [ PAGE.type ] [ _entry ].code );

            else

                for ( let _entry in object [ PAGE.type ] )

                    _result [ _entry ].code = _copyFunction ( object [ PAGE.type ] [ _entry ].code );


            return _result;
        }

        /**
         * Copy code to clipboard
         * @public
         * @name copyCode
         * @async
         * @function
         */
        async copyCode ( )
        {
            let _code = document.querySelector ( '#modal-code > div > div > div.modal-body > pre > code' ).innerHTML.replace ( /<[^>]+>/g, '' );


            try
            {
                await navigator.clipboard.writeText ( _code );

                console.info ( 'Content copied to clipboard' );
            }
            catch ( err )
            {
                console.error ( 'Failed to copy: ', err );
            }


            UI.alert ( 'Copied code !', 'success' );

            TOOL.delay ( 1000 ).then ( ( ) => document.querySelector ( '#copiedAlert' ).children [ 0 ].remove ( ) );
        }
}
