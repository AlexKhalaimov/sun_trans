function initMap() {
        var centerMap = {lat: 50.509148, lng: 30.462962};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: centerMap
        });
        var marker = new google.maps.Marker({
          position: centerMap,
          map: map
      });
}

$(function(){

    /*  dropdown menu hover*/

     $('ul.nav__list > li').hover(function() {
            $(this).find('.dropdownList').stop(true, true).delay(200).fadeIn();
        }, function() {
            $(this).find('.dropdownList').stop(true, true).delay(200).fadeOut();
    });

    /*----- overlay showing -------*/

     if ($('.service__overlay').length != 0) {
        var overlay = $('.service__overlay');
        var tile = $('.service');
        var title = $('.service__title');
        tile.hover(function(){

            $(this).find(overlay).stop().fadeIn('400').css({'display': 'flex', 'flex-direction': 'column'});
            $(this).find(title).stop().fadeOut('400');
        }, function(){

            $(this).find(title).stop().fadeIn('400');
            $(this).find(overlay).stop().fadeOut('400');
        });
    }

    /*---- mobile menu init ----*/

    if ($('#mobileMenu').length != 0) {
        $("#mobileMenu").mmenu({
                   "slidingSubmenus": false,
                   "extensions": [
                      "pagedim-black"
                   ],
                   "offCanvas": {
                      "position": "right"
                   },

                  "navbar": {
                      "title": ""
                  }
              });
    };


    /*  POPUPS show   */


    var callbackBtn = $('#callbackBtn');
    var topBtn = $('#topBtn');
    var callbackBtnMobile = $('#callbackBtn_mobile');

    function showPopups() {

        var mobileWrapperOverlay = $('#mobile-wrapper__overlay');
        var wrapperOverlay = $('#wrapperOverlay');
        var callbackPopup = $('#callbackPopup');
        var callbackClose = $('#callbackClose');
        var callbackSubmit = $('#callbackSubmit');
        var thanksPopup = $('#thanksPopup');
        var thanksClose = $('#thanksClose');


        wrapperOverlay.toggle();
        callbackPopup.toggle();
        callbackClose.click(function(){
            wrapperOverlay.toggle();
            wrapperOverlay.attr('style', '');
            callbackPopup.toggle();
            callbackPopup.attr('style', '');
        });
        callbackSubmit.click(function(){
            callbackPopup.toggle();
            callbackPopup.attr('style', '');
            thanksPopup.css('display', 'block');
            thanksClose.click(function(){
                wrapperOverlay.toggle();
                wrapperOverlay.attr('style', '');
                thanksPopup.css('display', 'none');
            });
        });
    };
    function showPopupsMobile() {

        var mobileWrapperOverlay = $('#mobile-wrapper__overlay');
        var wrapperOverlay = $('#wrapperOverlay');
        var callbackPopup = $('#callbackPopup');
        var thanksPopup = $('#thanksPopup');
        var body = $('body');

        mobileWrapperOverlay.clone().prependTo(body).addClass('cloned');
        $('.cloned').addClass('show');
        callbackPopup.clone().prependTo($('.cloned')).addClass('clonedPopup');
        $('.clonedPopup').css('display', 'block');
        var callbackClose = $('.clonedPopup .callbackPopup__close');
        var callbackSubmit = $('.clonedPopup #callbackSubmit');
        callbackClose.click(function(){
            $('.clonedPopup').remove();
            $('.cloned').remove();

        });
        callbackSubmit.click(function(){
            $('.clonedPopup').remove();
            thanksPopup.clone().prependTo($('.cloned')).addClass('clonedThanks');
            $('.clonedThanks').css('display', 'block');
            var thanksClose = $('.clonedThanks #thanksClose');
            thanksClose.click(function(){
                $('.clonedThanks').remove();
                $('.cloned').remove();
            });
        });
    };
    if ($('#callbackBtn').length !=0) {
        callbackBtn.click(function(){
                showPopups();
            });
    };

    if ($('#topBtn').length !=0) {

        topBtn.click(function(){
            $('html, body').animate({scrollTop: '0px'}, 500);
            showPopups();
            });
    };

    if ($('#callbackBtn_mobile').length !=0) {

        callbackBtnMobile.click(function(){
            showPopupsMobile();
            });
    };

    /*----- scrollToTop btn-----*/


	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

    /*----- stiky header -----*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
        }
    })

});
