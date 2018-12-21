console.log("开始启用");

/*
* 顶部导航
* 下拉隐藏
* 上拉出现
* */

$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.header-nav').outerHeight();

    $(window).scroll(function() {

        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu > header_yuksekligi){$('.header-nav').addClass('a-fadeoutT');} 
        else {$('.header-nav').removeClass('a-fadeoutT');}

        if (kaydirma_cubugu > cubuk_seviye){$('.header-nav').removeClass('a-fadeinT');} 
        else {$('.header-nav').addClass('a-fadeinT');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});