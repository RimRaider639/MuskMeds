import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();



const pro={
    "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/j4vwgeja6thehccimpbs.png",
    "Name": "Tata 1mg Glucosamine HCL 1500 mg Tablets for Joint Health",
    "rating_count": "284 ratings",
    "rating": "3.1",
    "price": "₹995",
    "mrp": "₹399"
}

const myFunction = (pro) => {
    const img = document.querySelector("#container>div img");
    img.src=pro.image;

    const title=document.querySelector("#container>div>#pName>h2");
    title.innerText=pro.Name;

    const rate=document.querySelector("#container>div>#ratingSection>#rating");
    rate.innerText=pro.rating;

    const rateCount=document.querySelector("#container>div>#ratingSection>#rating_count");
    rateCount.innerText=pro.rating_count;
}

myFunction(pro)