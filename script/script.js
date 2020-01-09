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
function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".header_area").addClass("navbar_fixed");
            } else {
                $(".header_area").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();

/*Select */
$('select').niceSelect();
$('#datetimepicker11,#datetimepicker1').datetimepicker({
    daysOfWeekDisabled: [0, 6]
});