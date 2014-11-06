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


// Google Map
var map;
var kd = new google.maps.LatLng(40.982636,-73.684403);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#d7b55e' },
        { visibility: 'simplified' },
        { gamma: 0 },
        { weight: 0.5 }

      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { hue: '#d7b55e' },
        { visibility: 'normal' },
        { lightness: 20 },
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#d7b55e' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 14,
    center: kd,
    panControl: true,
    streetViewControl: true,
    zoomControl: true,
    scrollwheel: false,
    ControlPosition:true,
    mapTypeControl: true,

    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID],
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'K&D'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


  var logo01 = {
    path: 'M38.41 6.591C34.017 2.2 28.3 0 22.5 0h0.001h-22.5L0 22.5l0.001-0.002c0 5.8 2.2 11.5 6.6 15.9 c8.786 8.8 23 8.8 31.8 0C47.196 29.6 47.2 15.4 38.4 6.591z M32.478 32.476c-5.509 5.509-14.441 5.509-19.95 0 s-5.511-14.443-0.002-19.952c5.509-5.508 14.442-5.506 20 0.002C37.985 18 38 27 32.5 32.476z',
    fillColor: '#4A4F52',
    fillOpacity: 0.9,
    scale: 1.5,
    strokeColor: 'gold',
    strokeWeight: 0
  };


  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: new google.maps.MarkerImage(
    'http://www.chilicongraphic.com/work/keegandonato/webfrontend/images/marker.png',
    new google.maps.Size(58, 74),
    new google.maps.Point(0, 0),
    new google.maps.Point(29, 66)
    ),
    map: map,
    title: name,
    animation: google.maps.Animation.DROP,
  });



  var contentString = '<div id="content" style="width:250px;">'+
      '<div id="bodyContent">'+
      '<img src="images/logo2.png" />'+
      '<p style="text-align:center; margin-top:-5px; color:#999999">31 Purchase Street Rye, New York 10580<br>'+
      '(914) 417-4942<br>'+
      '<a target="_blank" href="https://maps.google.com/maps?q=31+Purchase+Street,+Ste.+3-4+Rye,+New+York+10580&daddr=31+Purchase+St+%233,+Rye,+NY+10580,+EE.+UU.&oe=utf-8&client=firefox-a&channel=fflb&hnear=31+Purchase+St+%233,+Rye,+New+York+10580,+EE.+UU&gl=es&t=m&geocode=%3BCT__6nxCDOnFFVVYcQIdU6qb-ykd_N64zpDCiTGeIYdVlRmZgQ&z=14" style="color:#D7B55E; text-decoration:underline;">Get directions</a></p>'
      '</div>'+
      '</div>';


  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  infowindow.open(map, marker);


  google.maps.event.addListenerOnce(marker, 'tilesloaded', function(event) {
    infowindow.open(map, marker);
  });




  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}





google.maps.event.addDomListener(window, 'load', initialize);



           