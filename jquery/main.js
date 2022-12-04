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
})