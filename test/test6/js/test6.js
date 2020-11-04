$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$('[data-fancybox="images"]').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : true
        }
      });
	
	/* Using custom settings */
	
	// $("a#inline").fancybox({
	// 	'hideOnContentClick': true
	// });

	/* Apply fancybox to multiple items */
	
	// $("a.group").fancybox({
	// 	'transitionIn'	:	'elastic',
	// 	'transitionOut'	:	'elastic',
	// 	'speedIn'		:	600, 
	// 	'speedOut'		:	200, 
	// 	'overlayShow'	:	false
	// });
	
});