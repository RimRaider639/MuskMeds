///import
// import {footer} from '/muddled-can-9800/components/footer.js';
// let footerdiv=document.getElementById('footer');
// footerdiv.innerHTML=footer();

///email from ls for orders and products
let {email}=JSON.parse(localStorage.getItem('admin_details'));
console.log(email)


//variables
let totalproducts=document.querySelector('#totalproducts span');
let totalorders=document.querySelector('#orders span');
let productstable=document.querySelector('#productstable tbody');

///displaying the name after successfull login
let welcome=document.querySelector('#welcome span');
let admin_details=JSON.parse(localStorage.getItem('admin_details'));
welcome.innerHTML=admin_details.name;


////generating image url
let add_btn=document.getElementById('add_product');
add_btn.disabled=true;
let image;
const getimageurl=async ()=>{
    add_btn.disabled=true;
   let img=document.getElementById('image');
   let actual_img=img.files[0];
   console.log(actual_img);
   let form=new FormData();
   form.append('image',actual_img);
   let response=await fetch('https://api.imgbb.com/1/upload?key=2d55f2865b5d703bd09975b5a32dfb5a',{
    method:'POST',
    body:form,
   });
   let data=await response.json();
   console.log(data);
   image=data.data.display_url;
   add_btn.disabled=false;
}

///uploading product function
const add_product=async ()=>{
    let Name=document.getElementById('name').value;
    let pack_size=document.getElementById('size').value;
    let price=document.getElementById('price').value;
    let mrp=document.getElementById('mrp').value;
    let type=document.getElementById('type').value;
    let brand=document.getElementById('brand').value;
    let stock=document.getElementById('stock').value;
    let gender=document.getElementById('gender').value;
    let discount=((price-mrp)/price)*100
    let send_data={
        Name,
        pack_size,
        price,
        mrp,
        type,
        image,
        brand,
        email,
        stock,
        gender,
        discount
    };
    let response=await fetch('https://infinite-river-74709.herokuapp.com/products',{
        method:'POST',
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await response.json();
    console.log(data);
    window.location.reload();
    append(data)
}
let imagechange=document.getElementById('image');
imagechange.onchange=()=>{
    getimageurl();
}
add_btn.onclick=()=>{
    add_product();
}


///appending the added products
const append=(data)=>{
    let container=document.getElementById('container');
    container.innerHTML=null;
    data.forEach((el)=>{
      let tr=document.createElement('tr');
      let td1=document.createElement('td');
      let image=document.createElement('img');
      image.src=el.image;
      td1.append(image)
      let td2=document.createElement('td')
      let name=document.createElement('h2');
      name.innerText=el.Name;
      td2.append(name);
      let td3=document.createElement('td');
      let size=document.createElement('p');
      size.innerText=el.pack_size; 
      td3.append(size);
      let td4=document.createElement('td');
      let price=document.createElement('p');
      price.innerText="Rs."+el.price;
      td4.append(price);
      let td5=document.createElement('td');
      let mrp=document.createElement('h2');
      mrp.innerText="Rs."+el.mrp;
      td5.append(mrp);
      let td6=document.createElement('td');
      let discount=document.createElement('p');
      discount.innerText=el.discount+"%";
      td6.append(discount);
      let td7=document.createElement('td');
      let type=document.createElement('p');
      type.innerText=el.type;
      td7.append(type);
      let td8=document.createElement('td');
      let stock=document.createElement('p');
      stock.innerText=el.stock;
      td8.append(stock);
      let td9=document.createElement('td');
      let brand=document.createElement('p');
      brand.innerText=el.brand;
      td9.append(brand);
      let td10=document.createElement('td');
      let gender=document.createElement('p');
      gender.innerText=el.gender;
      td10.append(gender);
      let td11=document.createElement('td');
      let remove=document.createElement('button');
      remove.innerText='Remove';
      remove.addEventListener('click',function(){
        let x=el.id;
         deleteproduct(x);
      });
      td11.append(remove);
      let td12=document.createElement('td');
      let update_mrp_btn=document.createElement('button');
      update_mrp_btn.addEventListener('click',function(){
        let y=el.id;
         updatemrp(y);
      });
      update_mrp_btn.innerText='Update mrp';
      td12.append(update_mrp_btn)
      let td13=document.createElement('td');
      let update_stock_btn=document.createElement('button');
      update_stock_btn.addEventListener('click',function(){
        let z=el.id;
        updatestock(z);
      })
      update_stock_btn.innerText="Update stock";
      td13.append(update_stock_btn);
      tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12,td13);
      productstable.append(tr);
    })
}

///getting uploaded products to append in the admi page
const getdata=async ()=>{
    let res=await fetch(`https://infinite-river-74709.herokuapp.com/products`);
    let originaldata=await res.json();
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/products?email=${email}`);
    let data=await response.json();
    console.log(data)
    if(data.length!=originaldata.length){
        append(data);
        totalproducts.innerHTML=data.length;
    }else{
        totalproducts.innerHTML=0;
    }
}
window.onload=getdata();

///delete uploaded products
const deleteproduct=async (x)=>{
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/products/${x}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await response.json();
    console.log(data)
    window.location.reload();
 }

////update mrp of the uploaded products
 let updatemrp=async(y)=>{
     let new_mrp=Number(window.prompt(`Enter new mrp`))
    let send_this_data={
        mrp:new_mrp
    }
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/products/${y}`,{
        method:'PATCH',
        body:JSON.stringify(send_this_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await response.json();
    window.location.reload();
    console.log(data);
 }

 ///update stock of the updated products
 const updatestock=async(z)=>{
    let new_stock=Number(window.prompt(`Enter new stock`))
   let send_this_data={
       stock:new_stock
   }
   let response=await fetch(`https://infinite-river-74709.herokuapp.com/products/${z}`,{
       method:'PATCH',
       body:JSON.stringify(send_this_data),
       headers:{
           'Content-Type':'application/json'
       }
   })
   let data=await response.json();
   window.location.reload();
   console.log(data);
}


///Checking for any orders recieved for your products
const checkorders=async ()=>{
    let res=await fetch(`https://infinite-river-74709.herokuapp.com/orders`);
    let originaldata=await res.json();
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/orders?email=${email}`);
    let data=await response.json();
    console.log(data)
    if(data.length!=originaldata.length){
        append(data);
        totalorders.innerHTML=data.length;
    }else{
        totalorders.innerHTML=0;
    }
}
window.onload=checkorders();


///homepage address
    
    let home=document.querySelector('#heading img');
     home.onclick=function(){
     window.location.href='./index.html'
    }
