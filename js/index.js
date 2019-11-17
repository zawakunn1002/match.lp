$(function(){

    $('.slider').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        fade: true,
        speed: 800,
        cssEase: 'cubic-bezier(.645, .045, .355, 1)'
    });
    
    $('#scroll a').click(function(){
        var screen = $(window).width();
        var width = 426;
        var id =$(this).attr('href');
        if(screen >= width){
            var position = $(id).offset().top;
            $('html,body').animate({
            'scrollTop':position
            }, 1500)
        }else{
            var position = $(id).offset().top - 100;
            $('html,body').animate({
            'scrollTop':position
            }, 1500)
        }
    });

    var topBtn = $('#top-btn');
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-menu li').on('click', function() {
        $('.drawer').drawer('close');
    });
});