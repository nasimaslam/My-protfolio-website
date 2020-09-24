(function ($) {


$(document).ready(function(){

    $(window).scroll(function(){


        if($(this).scrollTop()>10){

            $('header').addClass('sticky');
        }else{

            $('header').removeClass('sticky');
        }
    });
   
});


$(document).ready(function(){
    $('#bar1').barfiller({
        barColor:" #f3c26b",
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar3').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar4').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar5').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar6').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar7').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
    $('#bar8').barfiller({
        barColor:" #f3c26b",
        duration: 2000

    });
});

/*counter ----------------js started here*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

})




// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  
  });
     // filter items on button click
     $('.filter-button-group').on( 'click', 'button', function() {
        $(this).addClass('current').siblings().removeClass('current');
       });



      // This will create a single gallery from all elements that have class "gallery-item"
$('.gallery-item').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });


  $(document).ready(function(){
   
    $("#my-happy-clients .owl-carousel").owlCarousel({
        items:2,
        nav:'true',
        dots:false,
        loop:true,
        autoplay:true,
       
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    });
   
    


    $("#slider-section-two .owl-carousel").owlCarousel({
        items:2,
        nav:'true',
        dots:false,
        loop:true,
        autoplay:true,
       
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
      
  });

  $(document).ready(function() {
	$('#nav').onePageNav();
});
 


$(document).ready(function(){
    $(window).scroll(function(){
    
    if($(this).scrollTop() > 300){
    $('.btn-12').fadeIn(500);
    
    }else{
    $('.btn-12').fadeOut(500);
    
    }
    });
    
    $('.btn-12').click(function(){
    $('html,body').animate({
            scrollTop:0
    },1000);
    });
    
    });
})(jQuery);