//- Wow
var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       false,
    live:         true,
    callback:     function(box) {

    },
    scrollContainer: null,
    resetAnimation: true,
  }
);
wow.init();


// Scroll the page to the correct anchor.
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
});