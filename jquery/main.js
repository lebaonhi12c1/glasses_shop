$(function(){
    $('.logo').click(function (e) { 
        e.preventDefault();
        document.location.href = 'http://127.0.0.1:5500/index.html'
        sessionStorage.clear()
    });
    $('.product_item').click(function (e) { 
        e.preventDefault();
        document.location.href = 'http://127.0.0.1:5500/product_details.html'
    });
    $('.btn_shopnow').click(function (e) { 
        e.preventDefault();
        document.location.href= 'http://127.0.0.1:5500/product.html'
    });
    var windowH = $(window).height() / 2;

    $(window).on("scroll", function () {
    if ($(this).scrollTop() > windowH) {
      $(".toTop").css("display", "flex");
    } else {
      $(".toTop").css("display", "none");
    }
    });

    $(".toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });
    $('.nav__menu__link').each(function (index, element) {
        // element == this
        $(element).addClass('navlink');
        $(element).removeClass('text-black');
        $(element).attr('id', $(element).text());
        console.log(element)
        $(element).click(function (e) { 
          sessionStorage.setItem('active_header',  $(element).text())
        });
    });

    $('.nav__menu__link').each(function (index, element) {
        console.log($(element).text(),sessionStorage.getItem('active_header'))
        $(element).text() === sessionStorage.getItem('active_header') &&$(element).addClass('text-danger')
    });
})