document.querySelector(".ddmenu").addEventListener("mouseover",hrcFunction)
function hrcFunction() {
 document.getElementById("hrc").classList.toggle("show");
};
document.querySelector("#vnpage").addEventListener("mouseover",vnFunction)
function vnFunction() {
 document.getElementById("vn").classList.toggle("show");
};
document.querySelector("#diabetes").addEventListener("mouseover",dbFunction)
function dbFunction() {
 document.getElementById("db").classList.toggle("show");
};
document.querySelector("#hdpage").addEventListener("mouseover",hdFunction)
function hdFunction() {
 document.getElementById("hd").classList.toggle("show");
};
document.querySelector("#pcpage").addEventListener("mouseover",pcFunction)
function pcFunction() {
 document.getElementById("pc").classList.toggle("show");
};
document.querySelector("#hcpage").addEventListener("mouseover",hcFunction)
function hcFunction() {
 document.getElementById("hc").classList.toggle("show");
};
document.querySelector("#ayurved").addEventListener("mouseover",ayurvedaFunction)
function ayurvedaFunction() {
 document.getElementById("ayvd").classList.toggle("show");
};
document.querySelector("#hppage").addEventListener("mouseover",hpFunction)
function hpFunction() {
 document.getElementById("hp").classList.toggle("show");
};
document.querySelector("#featured").addEventListener("mouseover",ftdFunction)
function ftdFunction() {
 document.getElementById("ftd").classList.toggle("show");
};
document.querySelector("#cepage").addEventListener("mouseover",ceFunction)
function ceFunction() {
 document.getElementById("ce").classList.toggle("show");
};

 


//Close the dropdown menu if the user clicks outside of it
window.onmouseover = function(event) {
  if (!event.target.matches('.ddmenu')) {
    var dropdowns = document.getElementsByClassName("wdropdown-wcontent show");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}