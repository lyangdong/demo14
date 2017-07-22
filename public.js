

$(function (){
    $('button').eq(0).click(function(){
        fadeLeft()
    })
    $('button').eq(1).click(function(){
        fadeMiddle()
    })

});
function fadeLeft(){
    $('li').unbind('mouseenter mouseleave');
    $('li').mouseenter(function(){
        $(this).find('span').stop().animate({width:$(this).find('img').width()},500);
        $(this).find('span').css('height',$(this).find('img').height());
        $(this).find('i').stop().fadeToggle(100);
        $(this).find('i').css('top',50)
    });
    $('li').mouseleave(function(){
        $(this).find('span').stop().animate({width:0},500,false);
        $(this).find('i').stop().fadeToggle(100)
    })
}
function fadeMiddle(){
     $('li').unbind('mouseenter mouseleave');
     $('li').mouseenter(function(){
         $(this).find('span').css('width',$(this).find('img').width());
         $(this).find('span').css('height',$(this).find('img').height());
         $(this).find('i').css('display','block')
         $(this).find('i').stop().animate({top:50},300)
   })
    $('li').mouseleave(function(){
        $(this).find('span').css('width',0);
        $(this).find('span').css('height',0);
        $(this).find('i').css('display','none');
        $(this).find('i').stop().animate({top:0},0)
    })
}
