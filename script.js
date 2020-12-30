$(function(){
  $('.scroll-btn').click(function(){
    let id = $(this).attr('href');
    let position = $(id).offset().top;
    position -= 94;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });

  $('.q-btn').click(function(){
    let $answer = $(this).find('.answer');
    if($answer.hasClass('active')){
      $answer.removeClass('active');

    }else{
      $answer.addClass('active');

    }

  });

  $('#menu-open').click(function(){
    if($('#mask').hasClass('open')){
      $('#mask').removeClass('open');
      $('#phone-list').slideUp();
      $('#menu-open').text('メニューを開く');
    }else{
      $('#mask').addClass('open');
      $('#phone-list').slideDown();
      $('#menu-open').text('メニューを閉じる');
    };
  });

  $('.phone-lists').click(function(){
    $('#phone-list').slideUp();
    $('#mask').removeClass('open');
    $('#menu-open').text('メニューを開く');
  });



});
