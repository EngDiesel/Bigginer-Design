/*Global s, alert, console*/
$(function () {
    'use strick';
    
 //adjust header height
    
    var myHeader = $(".header");
    
    myHeader.height($(window).height());
    
    
    $(window).resize(function () {
        myHeader.height($(window).height());

        $(".bxslider").each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        } )
    })
    //links add active class
    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    })
    
  
    
    //start BX Slider
    $('.bxslider').bxSlider({pager:false});
    
    $(".bxslider").each(function (){
        $(this).css("paddingTop",($(window).height() - $(".bxslider li").height() ) /2 );
    })

// Smooth Scroll
    $('.navBar .links a').click(function (){
        $("html,body").animate({
         scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    // Auto Slider
   (function mySlider() {
        $('.Slider .Active').each(function () {
            
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(3000, function () {
                    $(this).removeClass('Active').next().addClass('Active').fadeIn();
                    
                    mySlider();
                });
            } else {
                $(this).delay(3000).fadeOut(3000, function () {
                    $(this).removeClass('Active');
                    
                    $('.Slider div').eq(0).addClass('Active').fadeIn();
                    mySlider();
                });
            }
            
        });
    });
    
});