$(document).ready(function() {
          resizeDiv();
        });

        window.onresize = function(event) {
          resizeDiv();
        }

        function resizeDiv() {
           vpw=$(window).width();
           vph=$(window).height();
            $("#title").css({"height":vph + "px"});
        }



$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() >= $("#menu").position().top) {
         $("#menu").addClass("affix")
         $("#lang").addClass("affix")
         $("h1").addClass("changePaddingTop")
      }
      if ($(this).scrollTop() < $("#menu").position().top) {
         $("#menu").removeClass("affix")
         $("#lang").removeClass("affix")
         $("h1").removeClass("changePaddingTop")
      }
   });
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() >= $("#scrollTop1").position().top - 200 & $(this).scrollTop() < $("#scrollTop2").position().top - 200) {
         $("body").addClass("changeColor")
         $("h3").addClass("changeColor-outline")
      }
      if ($(this).scrollTop() < $("#scrollTop1").position().top - 200 | $(this).scrollTop() >= $("#scrollTop2").position().top - 200) {
         $("body").removeClass("changeColor")
         $("h3").removeClass("changeColor-outline")
      }
   });
});


$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() >= $("#phenomenon").position().top - 200) {
         $("#nav-phenomenon").removeClass("inactive")
         $("#nav-phenomenon").addClass("active")
      }
      if ($(this).scrollTop() < $("#phenomenon").position().top - 200) {
         $("#nav-phenomenon").removeClass("active")
         $("#nav-phenomenon").addClass("inactive")
      }
      if ($(this).scrollTop() >= $("#context").position().top - 10) {
         $("#nav-context").removeClass("inactive")
         $("#nav-context").addClass("active")
         $("#nav-phenomenon").removeClass("active")
         $("#nav-phenomenon").addClass("inactive")
      }
      if ($(this).scrollTop() < $("#context").position().top - 10) {
         $("#nav-context").removeClass("active")
         $("#nav-context").addClass("inactive")
      }
      if ($(this).scrollTop() >= $("#issue").position().top - 10) {
         $("#nav-issue").removeClass("inactive")
         $("#nav-issue").addClass("active")
         $("#nav-context").removeClass("active")
         $("#nav-context").addClass("inactive")
      }
      if ($(this).scrollTop() < $("#issue").position().top - 10) {
         $("#nav-issue").removeClass("active")
         $("#nav-issue").addClass("inactive")
      }
      if ($(this).scrollTop() >= $("#remark").position().top - 200) {
         $("#nav-remark").removeClass("inactive")
         $("#nav-remark").addClass("active")
         $("#nav-issue").removeClass("active")
         $("#nav-issue").addClass("inactive")
      }
      if ($(this).scrollTop() < $("#remark").position().top - 200) {
         $("#nav-remark").removeClass("active")
         $("#nav-remark").addClass("inactive")
      }
      if ($(this).scrollTop() >= $("#about").position().top - 50) {
         $("#nav-remark").removeClass("active")
         $("#nav-remark").addClass("inactive")
      }
   });
});