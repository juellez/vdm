// Preloader - Skrollr - Nice Scroll 
$(function(){
    $(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut(2000,"easeInOutExpo");
      $('body').css({overflow:"visible"});
      $("html").niceScroll({
        zindex:"999999",
            cursoropacitymin:0,
            cursoropacitymax:1,
            cursorcolor:"rgba(0,0,0, 0.7)",
            cursorwidth:"8px",
            cursorborder:"0",
            cursorborderradius:"0px",
            scrollspeed:100,
            mousescrollstep:10,
            touchbehavior:false,
            hwacceleration:true,
            usetransition:true,
            boxzoom:false,
            dblclickzoom:true,
            gesturezoom:true,
            grabcursorenabled:true,
            autohidemode:true,
            background:"rgba(255,255,255,0)",
            iframeautoresize:true,
            cursorminheight:32,
            preservenativescrolling:true,
            railoffset:true,
            bouncescroll:true,
            spacebarenabled:true,
            railpadding:{top:0,right:1,left:0,bottom:0},
            disableoutline:true,
            horizrailenabled:true,
            railalign:"right",
            railvalign:"bottom",
            enabletranslate3d:true,
            enablemousewheel:true,
            enablekeyboard:true,
            smoothscroll:true,
            sensitiverail:true,
            enablemouselockapi:true,
    //      cursormaxheight:false,
            cursorfixedheight:false,      
            directionlockdeadzone:6,
            hidecursordelay:200,
            nativeparentscrolling:true,
            enablescrollonselection:true,
            overflowx:true,
            overflowy:true,
            cursordragspeed:0.3,
            rtlmode:false,
            cursordragontouch:false,
            oneaxismousemode:"auto"
          });

          if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
              skrollr.init({
                  forceHeight: false
              });
              $("#menu").addClass("intro_menu");
              $("#logo").addClass("intro_logo");
              $(".intro_large h1").addClass("intro_text_home01");
              $(".intro_large .tri").addClass("intro_tri_home");
              $(".intro_large .text_intro").addClass("intro_text_home02");
              $(".intro_large .divider").addClass("intro_text_home03");
              $(".intro_large .scroll_btn").addClass("intro_text_home04");
              $(".nav_modal").addClass("db");
          }
    }); 
});


// home slider
$('#slides').superslides({
      animation: 'fade',
      play: 21000,
    });


// home fade text rotator
 $(document).ready(function()
      {
        setupRotator();
      }); 
      function setupRotator()
      {
        if($('.textItem').length > 1)
        {
          $('.textItem:first').addClass('current').fadeIn(1000);
          setInterval('textRotate()', 7000);
        }
      }
      function textRotate()
      {
        var current = $('#quotes > .current');
        if(current.next().length == 0)
        {
          current.removeClass('current').fadeOut(1000);
          $('.textItem:first').addClass('current').fadeIn(1000);
        }
        else
        {
          current.removeClass('current').fadeOut(1000);
          current.next().addClass('current').fadeIn(1000);
        }
      }

// menu
$(function(){ 
  $('#hamburger').click(function(){
    $(this).toggleClass("hamburger_active", 200);
    $('#nav2 ul').stop().slideToggle(777,"easeInOutExpo");
    return false;
  }); 
  $('#nav2 ul li a').click(function(){
    $('#nav2 ul').stop().slideToggle(777,"easeInOutExpo");
    $('#hamburger').toggleClass("hamburger_active", 200);
  }); 
});

// nav
$(function(){ 
  if ( ! window.console ) console = { log: function(){} };

  $('#nav, #nav2').singlePageNav({
      offset: $('#nav, #nav2').outerHeight(),
      filter: ':not(.external)',
      beforeStart: function() {
          console.log('begin scrolling');
      },
      onComplete: function() {
          console.log('done scrolling');
      }
  });
});




// back to top
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#b2top').fadeIn(200);  
    } else {
      $('#b2top').fadeOut(200);
    }
  }); 
  $('#b2top').click(function() {
    $('body,html').animate({scrollTop:0},2000,"easeInOutExpo");
    $('.down').fadeIn();
  }); 
})


// scrollTo
$(function() {
  $('.nav_home').click(function(){
        $.scrollTo( $('#top'), 1500, {easing:'easeInOutExpo'});
    });
  $('.scroll_btn').click(function(){
        $.scrollTo( $('#serv2'), 1500, {easing:'easeInOutExpo'});
    });

});

