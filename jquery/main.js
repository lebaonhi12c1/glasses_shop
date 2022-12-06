$(function(){
    $('.logo').click(function (e) { 
        e.preventDefault();
        document.location.href = 'http://127.0.0.1:5500/index.html'
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
    var active_index = -1;
    $('.nav__menu__link').each(function (index, element) {
        $(element).click(function (e) { 
            active_index = index;
        });
    });
    if(active_index ===0){
        
    }
})