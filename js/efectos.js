$(document).ready(function(){

  $('.menu a').each(function(index, elemento){
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top: '0'
    }, 1000 + (index * 500));
  });

  //--------------------
})