
jQuery(window).on('load', function () {
      //alert("Window Loaded");
      jQuery('.si-content').attr('style','').removeAttr("style");

 });
jQuery(window).on('resize',function(){
	var winheight = jQuery(window).height();
	var winWidth = jQuery(window).width();
	jQuery('#sidebar').css('min-height', winheight);
	jQuery('.nano').css('height', winheight);
	jQuery('.nano-content').css('min-height', winheight);
	jQuery('.bachar').css('min-height', winheight);
});
jQuery(document).ready(function() {
	jQuery(".nano").nanoScroller();	
	jQuery('.select2-results').nanoScroller();		
	jQuery('.c-input').attr("placeholder", "Filtrer");
	  jQuery('[data-toggle="tooltip"]').tooltip()
	jQuery('.c-btn').hover(function() {
		jQuery('.balls').fadeIn();
	}, function() {
		jQuery('.balls').fadeOut();
	});
	
	    jQuery('.js-example-basic-single').select2({
	    	    placeholder: "Choisir une région",
    			allowClear: true
	    });
	var winheight = jQuery(window).height();
	var winWidth = jQuery(window).width();
	jQuery('#sidebar').css('min-height', winheight);
	jQuery('.nano').css('height', winheight);
	jQuery('.nano-content').css('min-height', winheight);
	jQuery('.bachar').css('min-height', winheight);
	if (winWidth <= 768) {
		jQuery('#sidebarcloser').css('display','none !important');
	} else {
	}
    jQuery('[data-toggle="tooltip"]').tooltip()
    jQuery('#sidebarCollapse').on('click', function() {
        jQuery('#sidebar').toggleClass('active');
        jQuery('#content').toggleClass('hyperactive');
        jQuery('agm-map[_ngcontent-c1]').css('width', '100% !important');
	    if (jQuery('#sidebar').hasClass('active')) {
	        jQuery('#sidebarcloser').fadeIn();
	        jQuery('.marciano').fadeOut().css('display', 'none');
	    }else{
	        jQuery('#sidebarclose').fadeOut();
	        jQuery('.marciano').fadeIn().css('display', 'block');
	    }
	    jQuery('#sidebarcloser').click(function() {
	    	jQuery('#sidebar').removeClass('active');
	    	jQuery(this).fadeOut();
	    	jQuery('.marciano').fadeIn().css('display', 'block');

	    });
    });
    jQuery('select').each(function() {

    });
});