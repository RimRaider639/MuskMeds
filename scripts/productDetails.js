import { init, getData, add_to_cart } from "../components/commonFunc.js";

init()

const prod_url = 'https://infinite-river-74709.herokuapp.com/products/'
const cart_url = 'https://infinite-river-74709.herokuapp.com/cart/'
const prod_id = localStorage.getItem('productID')
let product;
const myFunction = async () => {
    const pro = await getData(prod_url+prod_id)
    document.querySelector('title').innerText = pro.Name

    product = pro

    const img = document.querySelector("#container>div img");
    img.src=pro.image;

    const title=document.querySelector("#pName h2");
    title.innerText=pro.Name;

    let pack=document.querySelector("#packsize");
    pack.innerText=pro.pack_size;

    const rate=document.querySelector("#rating");

    if (pro.rating!='Nan'){
      rate.innerText=pro.rating;

    }else{
      rate.style.display = 'none'
    }

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


document.getElementById('cart_btn').onclick = () => {
  add_to_cart(product, cart_url)
}

myFunction()


