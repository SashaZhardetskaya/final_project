var mmenu = 'close';

$(document).ready(function(){
    var $preloader = $('#page-preloader'),
        $animatedLogo   = $preloader.find('.animated-logo');
   // $animatedLogo.fadeOut();
    $preloader.delay(1100).fadeOut('slow');
});
	


$(document).ready(function(){
	new WOW().init();
    $('.menu-burger').on('click', showMmenu);
});



function showMmenu(){
	if (mmenu=='close') { 
	$('.menu').css({
		'display': 'block'
	});
	mmenu='open';
	$('.burger-icon').fadeOut(800);
	$('.close-icon').fadeIn(800);
	}
	else{ 
	$('.menu').css('display','none');
	mmenu = 'close';
	$('.burger-icon').fadeIn(800);
	$('.close-icon').fadeOut(800);
	}
}




