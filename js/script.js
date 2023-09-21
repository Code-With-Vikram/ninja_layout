$(document).ready(function(){
    $('.bar-btn-toggle').click(function(){
        $('.menu').toggleClass('nav-on')
    });


    
    // $('.counter').each(function () {
    //     var a = $(this)
    //     counto = a.attr('vikram');
    
    //     $({ countNum: a.text() }).animate({
    //       countNum: counto
    //     },
    
    //       {
    //         duration: 10000,
    //         step: function () {
    //           a.text(Math.floor(this.countNum));
    //         },
    //         complete: function () {
    //           a.text(this.countNum)
    //         }
    //       }
    //     )
    //   })
        
      $('.slider').slick({
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive:[
            {
                breakpoint:1165,
                settings:{
                    slidesToShow:4
                }
            },
            {
                breakpoint:991,
                settings:{
                    slidesToShow:3
                }

            },
            {

                breakpoint:767,
                settings:{
                    slidesToShow:3
                }
            },

            {
                breakpoint:575,
                settings:{
                    slidesToShow:2

                }
            }
        ]

    })

    
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
        $('body').addClass("sticky");
    }
    else {
        $('body').removeClass("sticky");
    }
});




const a = 0
$(document).ready(function () {
  jQuery('.spancount').each(function () {
    jQuery(this).prop('vikram', a).animate({
      vikram: jQuery(this).text(),
    },
      {
        duration: 2000,
        step: function (ok) {
          jQuery(this).text(Math.floor(ok))
        }
      }

    );
  });
});

$(function () {
    'use strict';
    $('i').click(function () {
      $(this).next().animate({
        width: '100px'
      });
    });
  });






