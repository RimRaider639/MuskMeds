const pro={
    "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/j4vwgeja6thehccimpbs.png",
    "Name": "Tata 1mg Glucosamine HCL 1500 mg Tablets for Joint Health",
    "pack_size": "bottle of 60 tablets",
    "rating_count": "284 ratings",
    "rating": "3.1",
    "price": "₹995",
    "mrp": "₹399"
}

const myFunction = (pro) => {
    const img = document.querySelector("#container>div>#items>#items-img>img");
    img.src=pro.image;

    const name=document.querySelector("#prod-name");
    name.innerText=pro.Name;

    const pack=document.querySelector("#pack-size");
    pack.innerText=pro.pack_size;

    const prc=document.querySelector("#prod-price");
    prc.innerText=pro.price;

    const total=document.querySelector("#prod-total");
    total.innerText=pro.price;

    const paid=document.querySelector("#paid-price");
    paid.innerText=pro.mrp;

}

myFunction(pro)

let address=document.getElementById("add").value;
let dis=document.getElementById("see");
dis.innerText=address;