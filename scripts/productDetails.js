import { init } from "../components/commonFunc.js";

init()

const pro={
    "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/j4vwgeja6thehccimpbs.png",
    "Name": "Tata 1mg Glucosamine HCL 1500 mg Tablets for Joint Health",
    "rating_count": "284 ratings",
    "rating": 4.1,
    "price": 995,
    "mrp": 399,
    "type": "tablets",
    "image": "https://onemg.gumlet.io/images/c_fit,h_150,w_150,q_auto,f_auto/twpuzix7nrwivbtg0n80/healthkart-hk-vitals-biotin-tablet.jpg",
    "brand": "Tata",
    "id": "7371.755486130691Tata",
    "discount": 60,
    "stock": 41,
    "gender": "Unisex"
  }

const myFunction = (pro) => {
    const img = document.querySelector("#container>div img");
    img.src=pro.image;

    const title=document.querySelector("#pName h2");
    title.innerText=pro.Name;

    let pack=document.querySelector("#packsize");
    pack.innerText=pro.pack_size;

    const rate=document.querySelector("#rating");
    rate.innerText=pro.rating;

    const rateCount=document.querySelector("#rating_count");
    rateCount.innerText=pro.rating_count;

    const radio1m=document.querySelector("#mr");
    radio1m.innerText=pro.mrp;

    const dscnt=document.querySelector("#dis");
    dscnt.innerText=pro.discount;

    const radio1p=document.querySelector("#radio1 >#pr");
    radio1p.innerText=pro.price;

    const radio2m=document.querySelector("#radio2 >h2>#mr");
    radio2m.innerText=pro.mrp;
}

myFunction(pro)