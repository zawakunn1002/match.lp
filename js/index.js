$(function(){

    $('.slider').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: false
    });
    
    $('#scroll a').click(function(){
        var id =$(this).attr('href');
        var position = $(id).offset().top - 100;
        $('html,body').animate({
          'scrollTop':position
        }, 1500)
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
});