$(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
        $('.header-sec').addClass('fix-header');
    } else {
        $('.header-sec').removeClass('fix-header');
    }
});
// Hide Header on on scroll down
$(document).ready(function () {
    var headerHght = $('header').height();
    $('.banner-section').css('margin-top', headerHght + 20);
/*    if ($(window).width() < 576) {
        $('.banner-section').css('margin-top', headerHght );
    }*/

    var windowwHght = $(window).height();
    if ( $('main').height() < windowwHght) {
        $('main').css('min-height', windowwHght - 360);
    }
    // var inBannerHght = $('.innerbanner-section').height();


    // start theme function
    var lstorageval = localStorage.getItem("theme");
    if (lstorageval !== "" && lstorageval !== null) {
        $('body').addClass(lstorageval);
    } 
    // else {
    //     $('body').addClass('dark-theme');
    //     $('body').addClass('blue-theme');
    // }
    // $('.theme-dark-btn').on('click', function () {
    //     if (typeof (Storage) !== "undefined") {
    //         localStorage.setItem("theme", "dark-theme");
    //         var lstorageval = localStorage.getItem("theme");
    //         $('body').addClass(lstorageval);
    //     }
    // });
    $('.theme-blue-btn').on('click', function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("theme", "blue-theme");
            var lstorageval = localStorage.getItem("theme");
            $('body').addClass(lstorageval);
        }
    });
    $('.theme-green-btn').on('click', function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("theme", "green-theme");
            var lstorageval = localStorage.getItem("theme");
            $('body').addClass(lstorageval);
        }
    });    
    $('.theme-blue-btn').on('click', function () {
        localStorage.setItem("theme", "blue-theme");
       // $('body').removeClass('blue-theme');
        $('body').removeClass('green-theme');
    });
    $('.theme-green-btn').on('click', function () {
        localStorage.setItem("theme", "green-theme");
        //$('body').removeClass('green-theme');
        $('body').removeClass('blue-theme');
    });
    // end theme function

    // goal tooltip function
    var $goalcontents = $('.goal-tooltip');
    $goalcontents.slice(1).hide();
    $('.goallink').on('click', function() {
        //$(this).parent().parent('tr').addClass('active')
        var $target = $('#' + this.id + 'content').show();
        $goalcontents.not($target).hide();
    });
    // end goal tooltip function
});