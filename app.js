// navbar fixed
$(window).scroll(function () {
    $(".navbar").toggleClass('fixed', $(window).scrollTop() > 50);
});

// sidepanel mobile
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }