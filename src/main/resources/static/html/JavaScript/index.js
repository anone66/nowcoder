$('.menu2_2,.menu2_3,.menu2_4,.menu2_6,.banner1-a,.banner1-img').smoove({
    offset  : '15%',
    moveX   : '100px',
    moveY   : '100px',
});
$('.menu3_1,.menu3_2,.menu3_3,.menu3_4,.menu3_5,.menu3_6,.menu3_7,.menu3_8,.menu3_9,.menu3_10,.menu3_11,.menu3_12,.menu3_13,.menu3_14,.menu3_15,.menu3_16,.menu3_17,.banner5-p1,.menu5_4,.menu5_5,.banner5-p2').smoove({
    offset  : '20%',
    move3d:'100px,100px,100px'
});
$('.menu4_1,.menu4_2,.menu4_3,.menu4_4,.menu4_5,.menu4_6,.menu4_7').smoove({
    offset: '15%',
    transformOrigin: '50%,50%,50%,50%'
})
$('.menu6_2,.menu6_3,.menu6_4,.menu6_5').smoove({
    offset:'10%',
    perspective:1000
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
$(window).on('scroll', function() {
    scroll()
});