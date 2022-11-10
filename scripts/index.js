import { navbar } from "../components/navbar.js";

import { footer } from "../components/footer.js";

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer();

document.getElementById("cart").addEventListener("click",OpenCart);
function OpenCart(){
    window.location.href="./cart.html"
}
document.getElementById("logo").addEventListener("click",Homepage);
function Homepage(){
    window.location.href="./home.html"
}
