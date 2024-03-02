window.onload = function() {
  document.body.style.backgroundColor = "white";
  document.getElementById("logo").style.transform = "scale(0.5)";

  setTimeout(function() {
    document.querySelector('.top-bar').style.opacity = '1';
    document.getElementById("logo").style.opacity = "0"; // Fade out logo simultaneously
    document.getElementById("additional-content").style.opacity = "1"; // Fade in additional content
  }, 2000);
};

