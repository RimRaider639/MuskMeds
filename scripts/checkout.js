const pro={
    "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/j4vwgeja6thehccimpbs.png",
    "Name": "Tata 1mg Glucosamine HCL 1500 mg Tablets for Joint Health",
    "pack_size": "bottle of 60 tablets",
    "rating_count": "284 ratings",
    "rating": "3.1",
    "price": "995",
    "mrp": "399",
    "discount": 60,
}
// ₹
let count=0;

const myFunction = (pro) => {
    const img = document.querySelector("#container>div>#items1>#items-img1>img");
    img.src=pro.image;

    const name=document.querySelector("#prod-name1");
    name.innerText=pro.Name;

    const pack=document.querySelector("#pack-size1");
    pack.innerText=pro.pack_size;

    const prc=document.querySelector("#prod-price1");
    prc.innerText=pro.price;

    const dscnt=document.querySelector("#prod-discount");
    dscnt.innerText=pro.discount;

    const total=document.querySelector("#prod-total");
    total.innerText=pro.price;

    const paid=document.querySelector("#paid-price");
    paid.innerText=pro.mrp;

    // const saved=document.querySelector("#saved");
    // saved.innerText=save;

    // let save=pro.price - pro.mrp;
    // console.log(save);

    count++;

}

myFunction(pro)
let num=document.getElementById("total-items");
num.innerText=count;