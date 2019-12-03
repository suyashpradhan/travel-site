/*Accordion JS*/
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


/*Pagination */
let paginationLeftPos = "20px";
let paginationOpacity = 0;
let checkPaginationClick = 0;

$(".pagination-page-number").click(function () {
    $(".pagination-page-number").removeClass("active");
    $(this).addClass("active");
    paginationLeftPos = $(this).prop("offsetLeft") + "px";
    paginationOpacity = 1;
    checkPaginationClick = 1;

    $(".pagination-hover-overlay").css({
        left: paginationLeftPos,
        backgroundColor: "#381805",
        opacity: paginationOpacity
    });
    $(this).css({
        color: "#fff"
    });
});

$(".pagination-page-number").hover(
    function () {
        paginationOpacity = 1;
        $(".pagination-hover-overlay").css({
            backgroundColor: "#381805",
            left: $(this).prop("offsetLeft") + "px",
            opacity: paginationOpacity
        });

        $(".pagination-page-number.active").css({
            color: "#333d45"
        });

        $(this).css({
            color: "#fff"
        });
    },
    function () {
        if (checkPaginationClick) {
            paginationOpacity = 1;
        } else {
            paginationOpacity = 0;
        }

        $(".pagination-hover-overlay").css({
            backgroundColor: "#381805",
            opacity: paginationOpacity,
            left: paginationLeftPos
        });

        $(this).css({
            color: "#381805"
        });

        $(".pagination-page-number.active").css({
            color: "#fff"
        });
    }
);


/*Navigation */

// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function (e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeInOutQuad')
});
// LINKS TO ANCHORS
$('a[href^="#"]').on('click', function (event) {

    var $target = $(this.getAttribute('href'));

    if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 750, 'easeInOutQuad');
    }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function () {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}