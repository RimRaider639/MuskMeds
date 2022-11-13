import { init } from "../components/commonFunc.js"

init()
// -----------------------------------------------------carousel
window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]); 
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); 
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 2000);
  }




//------------------------------------------------------carousel
document.getElementById('header').addEventListener("click", ProductPage);
function ProductPage(){
  window.location.href="allProducts.html"
}



