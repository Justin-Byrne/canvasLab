/* global bootstrap: false */
( function ( )
{
  'use strict';

  let _tooltips = [ ].slice.call ( document.querySelectorAll('[data-bs-toggle="tooltip"]') );

      _tooltips.forEach ( function ( tooltipElement )
      {
          new bootstrap.Tooltip ( tooltipElement );
      } );

} ) ( );
