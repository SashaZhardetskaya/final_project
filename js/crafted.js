var mmenu = 'close'; // пеоеменная для закрытия меню


data = [
{ twit_date: '3:01 PM - 24 Jan 17', twit_text: 'We were just featured as one of the 30 Best UX Design Firms'}, 
{ twit_date: '12:00 PM - 13 Jan 17', twit_text: 'Crafted is proud to be considered a "Top Ten Interactive Agency in NYC"'},
{ twit_date: '10:24 AM - 01 Jan 1', twit_text: 'Happy New Year!'}, 
{ twit_date: '2:36 PM - 18 Dec 16', twit_text: 'We are extremely excited to welcome "Revolt.tv" to the client roster.'}, 
{ twit_date: '1:50 PM - 22 Nov 16', twit_text: 'Our NY Times Corporate Subscriptions site gets an Honorable Mention at AWWWards site.'}
];
/* ajax + json */
$(document).ready(function(){ 


data.forEach(function(element){
	$('.slider ul li').append("<div>"+element.twit_date+"</div><p>" + element.twit_text + " </p>");
});

}); 

/* preloader */
$(document).ready(function(){ 
    var $preloader = $('#page-preloader'),
        $animatedLogo   = $preloader.find('.animated-logo');
   // $animatedLogo.fadeOut();
    $preloader.delay(1100).fadeOut('slow');
}); 
	


/* cлайдер с автоматической прокруткой */
 $(document).ready(function() { 
 $(".slider").each(function() {

 var repeats = 5, // кількість повторювань автоматичного прокручування
 interval = 3, // інтервал в секундах
 repeat = true, // чи треба автоматично прокручувати (true/false)
 slider = $(this),
 repeatCount = 0,
 elements = $(slider).find("li").length;

 $(slider)
 .append("<div class='nav'></div>")
 .find("li").each(function() {
 $(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
 $(this).attr("data-slide", $(this).index());
 })
 .end()
 .find("span").first().addClass("on");

 // add timeout

 if (repeat) {
 repeat = setInterval(function() {
 if (repeatCount >= repeats - 1) {
 window.clearInterval(repeat);
 }

 var index = $(slider).find('.on').data("slide"),
 nextIndex = index + 1 < elements ? index + 1 : 0;

 sliderJS(nextIndex, slider);

 repeatCount += 1;
 }, interval * 1000);
 }

 });
 });

function sliderJS(index, slider) { // slide
 var ul = $(slider).find("ul"),
 bl = $(slider).find("li[data-slide=" + index + "]"),
 step = $(bl).width();

 $(slider)
 .find("span").removeClass("on")
 .end()
 .find("span[data-slide=" + index + "]").addClass("on");

 $(ul).animate({
 marginLeft: "-" + step * index
 }, 500);
}

$(document).on("click", ".slider .nav span", function(e) { // slider click navigate
 e.preventDefault();
 var slider = $(this).closest(".slider"),
 index = $(this).data("slide");

 sliderJS(index, slider);
});



/* Слайдер без автоматической прокрутки

$(document).ready(function() {
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
  	console.log($(this));
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;
});

*/


$(document).ready(function(){
	new WOW().init(); // инициализация wow.js
    $('.menu-burger').on('click', showMmenu);
    $('form').on('submit', sendMess);
    $('#email1, #pass1').on('keyup', checkInputs);
});


/* NENU */

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

/* SUBSCRUBE FORM */

function sendMess() {
    event.preventDefault();
    $.get(
        "send.php",
        {
            "email" : $('#email1').val(),
            "pass" : $('#pass1').val()
        },
        function (data){
            if (data==1){
                $('#send-res').html('Success!');
                $('#myModal').modal('show');
                setTimeout(function(){
                    $('#myModal').modal('hide');
                }, 3000);

            }
            else {
                $('#send-res').html('Try again');
                $('#myModal').modal('show');
            }
        }
    );
}

function  checkInputs() {
    var mail = $('#email1').val();
        mail = $.trim(mail);
    var pass= $('#pass1').val();
        pass = $.trim(pass);

    if (mail!='' && pass!='') {
        $('form button[type="submit"]').removeAttr('disabled');
    }
    else {
        $('form button[type="submit"]').attr('disabled', 'disabled');
    }
}



