import { navbar } from "./navbar.js"
import {footer} from "./footer.js"

//GLOBAL VARIABLES

const PAGES = 20

//base urls
const PRODUCT_URL = "https://infinite-river-74709.herokuapp.com/products?"

//INITIALISE

const init = () => {
    document.head.innerHTML += `
    <link rel="stylesheet" href="styles/common.css">
    <link rel="shortcut icon" href="img/favicon_adobe_express.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="./styles/footer.css">
    <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvvExfheGYdXS-c2ltBGvTRbbWxB_PfkIUw&usqp=CAU" type="image/x-icon">`
    document.getElementById('navbar').innerHTML = navbar()
    document.querySelectorAll('#navbar #vn a').forEach(a => {
        a.onclick = () =>{
            localStorage.setItem('clickedCat', a.innerText)
            window.location.href = "allProducts.html"
        }
        
    })
    document.getElementById("cart").addEventListener("click",OpenCart);
    function OpenCart(){
        window.location.href="./cart.html"
    }
    document.getElementById("logo").addEventListener("click",Homepage);
    function Homepage(){
        window.location.href="./home.html"
    }
    document.getElementById("footer").innerHTML = footer();

}

//PAGINATION

//by default creates 20 buttons
const createButtons = (num=PAGES) => {
    let area = document.getElementById('page_nav')
    area.innerHTML = null
    for (let i=1; i<=num; i++){
        let btn = document.createElement('button')
        btn.innerText = i
        btn.classList.add('pg_btn')
        btn.onclick = () => {
            getData(i)
        }
        area.append(btn)
    }
}

//CATEGORIZE

const categorizeURL = (url, category) => {
    const categories = {
        "Vitamins & Supplements": ['Multivitamin', 'Vitamin', 'Capsule', 'Tablet', 'Powder', 'Supplement'],
        "Nutritional Drinks": ['Drink', 'Refill', 'Shake', 'Powder'],
        "Health Food & Drinks": ['Drink', 'Tea', 'Shake', 'Refill', 'Vinegar', 'Powder'],
        "Protien Supplements": ['Creatine', 'Protien', ],
        "Omega Fish & Oil": [],
        "Immunity Boosters": [],
        "Speciality Supplements": [],
        "Weight Management": []
    }
    if (category){
        categories[category].forEach(cat => {
            url+="Name_like="+cat+"&"
        })
    }
    
    return url
}

//GET REQUESTS

//to append, pass in an array [func, selector]. This parameter is optional, if absent, it just returns the data (promise)
const getData = async (url, append=null) => {
    const res = await fetch(url)
    const collect = await res.json()
    
    if (append){
        append[0](collect, append[1])
    } 

    return collect
}

class brand {
    constructor(name){
        this.name = name
        this.count = 1
    }
    incCount(){
        this.count++
    }
}

const getBrands = async (url) => {
    const res = await fetch(url)
    const collect = await res.json()
    let brands = []
    collect.forEach(prod => {
        let found = brands.find(b=>b.name==prod.brand)
        if (found){
            found.incCount()
        } else{
            brands.push(new brand(prod.brand))
        }
    })
    return brands
}

//to check if an item is already present in cart
const inCart = async (id) => {
    const url = 'https://infinite-river-74709.herokuapp.com/cart/'+id

    try{
        const res = await fetch(url)
        return res.ok
    }catch(err){
        console.log(err)
    }
}

//POST REQUESTS

//add to cart
const add_to_cart = async (prod) => {
    const url = 'https://infinite-river-74709.herokuapp.com/cart'
    try{
        const status = await inCart(prod.id)
        if (status){
            
            incQtd(prod.id)
            return
        }
        prod.qtd = 1
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(prod),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(err){
        console.log(err)
    }
}

//DELETE REQUESTS
const remove_from_cart = async (id) => {
    const url = `https://infinite-river-74709.herokuapp.com/cart/${id}`
    try{
        const res = await fetch(url, {
            method: 'DELETE'
        })
    } catch(err){
        console.log(err)
    }
}
// remove_from_cart('2193.903283784118HealthVit')

//PATCH REQUESTS

const patchCartItems = async (obj, id) => {
    const url = 'https://infinite-river-74709.herokuapp.com/cart/'+id
    try{
        await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }catch(err){
        console.log(err)
    }
}

// CHANGE PRODUCT OUANTITY IN CART

const incQtd = async (id) => {
    const url = 'https://infinite-river-74709.herokuapp.com/cart/'+id
    try{
        let prod = await getData(url)
        console.log(prod)
        +prod.qtd++
        patchCartItems(prod, id)
    }catch(err){
        console.log(err)
    }
}

//APPEND DATA

const appendProducts = (data, selector) => {
    let container = document.querySelector(selector)
    container.innerHTML = null
    data.forEach(prod => {
        let card = document.createElement('div')
        card.classList.add('card')
        let img = document.createElement('img')
        img.src = prod.image
        let title = document.createElement('h3')
        title.innerText = prod.Name
        let size = document.createElement('p')
        size.innerText = prod.pack_size
        let strikeout = document.createElement('p')
        strikeout.innerHTML = "MRP <strike>"+prod.price+"</strike>"
        let mrp = document.createElement('h2')
        mrp.innerText = prod.mrp
        let add = document.createElement('button')
        add.innerText = 'Add'
        add.onclick = () => {
            add_to_cart(prod)
        }
        card.append(img, title, size, strikeout, mrp, add)
        container.append(card)
    })
}

const appendLabel = (data, selector, baseURL) => {
    let container = document.getElementById(selector)
    container.innerHTML = null
    data.forEach((item, i) => {
        let sec = document.createElement('div')
        let cb = document.createElement('input')
        cb.type = 'checkbox'
        cb.classList.add('checkbox')
        cb.id = i
        cb.value = item.name
        cb.onchange = () => {
            check(baseURL)
        }
        let name = document.createElement('h5')
        name.innerText = item.name
        let c = document.createElement('h5')
        c.innerText = item.count
        sec.append(cb, name, c)
        container.append(sec)
    })
}

//checkbox onchange
const check = (baseURL) => {
    console.log('base', baseURL)
    let checked = []
            let filter_url = baseURL
    
            document.querySelectorAll('.checkbox').forEach((b) => {
                if (b.checked){
                    checked.push(b)
                }
            })
            checked.forEach(b=>{
                filter_url += "brand="+b.value+"&"
            })
            // console.log(filter_url)
            getData(filter_url+"_limit=100&_page=1", [appendProducts, '#products'])
}

//SORT

//by default sorts ascending. Give a different value to order for descending order.
const sortStr = (data, order='asc', attr) => {
    let x = order=='asc'?-1:1
    return data.sort((a,b) => a[attr]<b[attr]?x:x*-1)
}

const sortNum = (data, order='asc', attr) => {
    let x = order=='asc'?1:-1
    return data.sort((a,b) => (a[attr]-b[attr])*x)
}

//FILTER

const filter = (data, attr, value) => {
    return data.filter((el) => {
        return el[attr] == value
    })
}


export {init, getData, appendProducts, categorizeURL, getBrands, sortNum, sortStr, add_to_cart, filter, appendLabel}
