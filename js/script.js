jQuery(document).ready(function() {
    jQuery('img').removeAttr('title');
    jQuery('img').removeAttr('alt');
    jQuery('a').removeAttr('title');
    jQuery('a').removeAttr('alt');
    jQuery("#custom-menu-item-url").val("#");
    jQuery(".site_logo_col").append("<span class='logo_shape_vct'></span>");
    jQuery(".site_logo_col").append("<span class='logo_shape_vct_white'></span>");
});

jQuery(document).ready(function() {
    var resizeTimer;
    if (jQuery(window).width() >= 981) {
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 150) {
                jQuery(".z_site_header").addClass("z_site_header_fixed animate__animated animate__fadeInDown");
                jQuery(".z_site_header").slideDown("slow");
            } else {
                jQuery(".z_site_header").removeClass("z_site_header_fixed animate__animated animate__fadeInDown");
            }
        });
    }
});

jQuery(document).ready(function() {
    jQuery('.site_button').mousedown(function() {
        var data_subject = jQuery(this).attr('data-subject')
        setTimeout(function() {
            jQuery(".ssa_form_email_subjet").val(data_subject);
        }, 2000);
    });
});

jQuery(document).ready(function() {
    var resizeTimer;
    if (jQuery(window).width() >= 981) {
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 150) {
                jQuery(".z_site_header").addClass("z_site_header_fixed animate__animated animate__fadeInDown");
                jQuery(".z_site_header").slideDown("slow");
            } else {
                jQuery(".z_site_header").removeClass("z_site_header_fixed animate__animated animate__fadeInDown");
            }
        });
    }
});

jQuery(document).ready(function() {
    jQuery('img').removeAttr('title');
    jQuery('img').removeAttr('alt');
    jQuery('a').removeAttr('title');
    jQuery('a').removeAttr('alt');
    jQuery("#custom-menu-item-url").val("#");
    jQuery(".site_logo_col").append("<span class='logo_shape_vct'></span>");
    jQuery(".site_logo_col").append("<span class='logo_shape_vct_white'></span>");
});
