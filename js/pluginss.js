/*global $, document, window*/
$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        
        interval: 6000
        
    });
   
   //show color option div when click on gear
   
    $(".gear-check").click(function () {
            $(".color-option").toggle();
      });
    
    // change theme color on click
    
    var colorLi =  $(".color-option ul li");
    
    colorLi
    .eq(0).css("background-color", "#E41B17").end() // the end i used to end the chain
    .eq(1).css("background-color", "#E426D5").end()
    .eq(2).css("background-color", "#2660e4").end()
    .eq(3).css("background-color", "#e4de26");
    
    colorLi.click(function () {
        
        //it's means searsh about
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
       // console.log($(this).attr("data-value") );
                             });
});

// Loading Screen

$(window).load(function () {
    "use strict";
    $("body").css("overflow", "auto");
    
    $('.loading-overlay div').fadeOut(1000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
        });
    
    });

// cashing the scrolll top element

var scrollButton = $('#scroll-top');

$(window).scroll(function () {
      "use strict";
    if ($(this).scrollTop() >= 700) {
                                     //ا e5tsarha if$(this).scrollTop()>=700)? ScrollButton.show():scrollButton.hide();
        scrollButton.show();
    }
     else {scrollButton.hide();
    }
    
    //Click On Button To Scroll
    
    scrollButton.click(function ()
     {
        $("html,body").animate({ scrollTop: 0 }, 600);
                        
      });
    $("body").niceScroll();
    });

