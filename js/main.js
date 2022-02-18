'use strict';
{

  $(function(){

    // リンククリック時対象セクションにスクロール
    function sectionscroll(){
      $('a[href^="#"]').click(function(){
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
      });    
    };
    
    // サイト読み込み時に画像をふわっと表示
    function fadeIn(){
      $(window).ready(function(){
        $('.top').fadeIn(600);
        $('.bottom').fadeIn(1000);
        $('.left,.right').fadeIn(1500);
      });
    };
    
    // menu内容をスクロール時に表示
    function scrollSlide() {
      var windowTop = $(window).scrollTop();
      var objTop = $(window).height();
      
      $('.side').each(function() {
        var titleTop = $(this).offset().top +100;
        if(windowTop > titleTop - objTop) {
          $(this).addClass('scroll');
        }
      });
    };
    
// 各関数の実行
    fadeIn();
    $(window).scroll(function() {
      scrollSlide();
    });
    
  });
}
  