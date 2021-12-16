$('.menu5_1,.menu5_2,.menu5_3,.banner5-p1,.menu5_4,.menu5_5,.banner5-p2').smoove({
    offset: '20%',
    move3d: '100px,100px,100px'
});
$('.menu4_1,.menu4_2,.menu4_3,.menu4_4,.menu4_5,.menu4_6,.menu4_7').smoove({
    offset: '15%',
    transformOrigin: '50%,50%,50%,50%'
})
$('.menu6_2,.menu6_3,.menu6_4,.menu6_5').smoove({
    offset: '10%',
    perspective: 1000
})
function scroll() {
    var top=1;
    var scrollTop = $(window).scrollTop();
    if (scrollTop < top) {
        $('nav').css('opacity', 1);
        $('nav').css('background-color','transparent');
        $('.banner-top').css('border-bottom','#B1B5D7 solid 1px');
    } else {
        $('nav').css('background-color','rgba(0,0,0,0.5)');
        $('.banner-top').css('border-bottom','none');
    }
}
$(window).on('scroll', function () {
    scroll()
});
$( function () {
    var speed = 3000;
    var scrollTop = $(".menu3").offset().bottom;
    var windowHeight = 1000
    $( "#to").click(function () {
        $( "html,body").animate({ "scrollTop" : windowHeight }, speed);
    });
});
$('.counter').countUp();