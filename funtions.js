// JavaScript File
$(document).ready(function(){
 $("#carouselExampleCaptions").carousel({interval: 500});
 $(".item1").click(function(){
    $("#carouselExampleCaptions").carousel(0);
  });
  $(".item2").click(function(){
    $("#carouselExampleCaptions").carousel(1);
  });
  $(".item3").click(function(){
    $("#carouselExampleCaptions").carousel(2);
  });
  $(".left").click(function(){
    $("#carouselExampleCaptions").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselExampleCaptions").carousel("next");
  });
});