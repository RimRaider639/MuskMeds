import { navbar } from "./navbar.js"
import {footer} from "./footer.js"
import {debounce, searchLabel} from "./searchWithDebouncing.js"
import { searchKey } from "./searchProd.js"
//GLOBAL VARIABLES

const PAGES = 20
const ITEMS_PER_PAGE = 44

//base urls
const PRODUCT_URL = "https://infinite-river-74709.herokuapp.com/products?"
const CART_URL = 'https://infinite-river-74709.herokuapp.com/cart/'

//INITIALISE

const init = () => {
    document.head.innerHTML += `
    <link rel="stylesheet" href="styles/common.css">
    <link rel="shortcut icon" href="img/favicon_adobe_express.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="./styles/footer.css">
    <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvvExfheGYdXS-c2ltBGvTRbbWxB_PfkIUw&usqp=CAU" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`
    document.getElementById('navbar').innerHTML = navbar()
    document.querySelectorAll('#navbar #vn a').forEach(a => {
        a.onclick = () =>{
            localStorage.setItem('clickedCat', a.innerText)
            window.location.href = "allProducts.html"
        }
        
    })
    document.getElementById("cart").addEventListener("click",OpenCart);
    function OpenCart(){
        window.location.href="./checkout.html"
    }
    document.getElementById("logo").addEventListener("click",Homepage);
    function Homepage(){
        window.location.href="./index.html"
    }
    document.getElementById('meds').onclick = () => {
        window.location.href = "./allProducts.html"
    }
    document.getElementById('login').onclick = () => {
        window.location.href = "./login.html"
    }
    document.getElementById('signup').onclick = () => {
        window.location.href = "signup.html"
    }
    if (localStorage.getItem('loggedIn')=='true'){
        let user = JSON.parse(localStorage.getItem('user_details'))
        document.getElementById('login-signup').innerHTML = "<div id='user'><span>"+user.name+"</span><span id=signOut>Sign Out</span></div>"
        document.getElementById('signOut').onclick = () => {
            localStorage.clear()
            window.location.reload()
        }
    }
    
    document.getElementById('findProd').onclick = () => {
        searchKey("search", PRODUCT_URL, "#products")
    }
    document.getElementById("footer").innerHTML = footer();

}

//PAGINATION
const MAX_BUTTONS = 5
//by default creates 20 buttons
const createButtons = (baseURL, totalResults, funcArray) => {
    let area = document.getElementById('nav_btn')
    area.innerHTML = null
    let prev = document.getElementById('prev')
    let next = document.getElementById('next')
    let num = totalResults/ITEMS_PER_PAGE +1 //total pages
    for (let i=1; i<=num; i++){
        let btn = document.createElement('button')
        btn.innerText = i
        btn.classList.add('pg_btn')
        btn.classList.add('hidden')
        if (i==1){
            btn.classList.add('activePg')
            prev.classList.add('hidden')
            next.onclick = () => document.querySelector(`#nav_btn>button:nth-child(${2})`).click()

        }
        btn.onclick = async () => {
            let pg_url = baseURL+'_page='+i+"&_limit="+ITEMS_PER_PAGE
            let data = await getData(pg_url)
            funcArray[0](data, funcArray[1])
            document.querySelectorAll('.activePg').forEach(pg => {
                pg.classList.remove('activePg')
            })
            btn.classList.add('activePg')

            //to show only few buttons
            unhideButtons(num)

            //prev and next
            if (i==1){
                prev.classList.add('hidden')
            } else{
                prev.classList.remove('hidden')
                prev.onclick = () => document.querySelector(`#nav_btn>button:nth-child(${i-1})`).click()
            }
            if (i==num){
                next.classList.add('hidden')
            } else{
                next.classList.remove('hidden')
                next.onclick = () => document.querySelector(`#nav_btn>button:nth-child(${i+1})`).click()
                
            }
        }
        area.append(btn)
    }
    
    unhideButtons(num)
    return baseURL+'_page=1&_limit='+ITEMS_PER_PAGE
}

const unhideButtons = (totalPages) => {
    let current = +document.querySelector('.activePg').innerText +1

    if (totalPages<=MAX_BUTTONS){
        document.querySelectorAll(`#nav_btn>button`).forEach(b=>{
            b.classList.remove('hidden')
        })
        return
    } else{
        document.getElementById('more').innerText = " ...."

    }
    for (let i=1; i<=MAX_BUTTONS+Math.max(0,current-MAX_BUTTONS); i++){
        document.querySelector(`#nav_btn>button:nth-child(${i})`).classList.remove('hidden')
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
        let totalResults = collect.length
        let pg_url = await createButtons(url, totalResults, append)
        let data = await getData(pg_url)
        append[0](data, append[1])
    } 

    return collect
}

//create labels for filters, count their instances in the data
const createLabels = async (url, attr) => {
    class Label {
        constructor(name){
            this.name = name
            this.count = 1
            this.checked = false
        }
        incCount(){
            this.count++
        }
        show(labelTypeObj, id, baseURL, container){
            let show = document.createElement('p')
            show.innerHTML = this.name 
            show.classList.add('filTags')
            let cross = document.createElement('span')
            cross.innerText = 'close'
            cross.classList.add("material-symbols-outlined")
            cross.onclick = ()=>{
                this.checked = false
                labelTypeObj.surfChecked(baseURL)
                document.getElementById(id).checked = false
                check(baseURL)
            }
            show.append(cross)
            container.append(show)
        }
    }
    const countInstances = async () => {
        const data = await getData(url)
        let labels = []
        data.forEach(prod => {
            if (prod[attr]){
                let found = labels.find(l=>l.name.toLowerCase()==prod[attr].toLowerCase())
                if (found){
                    found.incCount()
                } else{
                    labels.push(new Label(prod[attr]))
                }
            }
            
        })
        return labels
    }
    
    return countInstances()
}

//shows the filter labels
class LabelType {
    constructor(prodAttr, appendId, searchKeyId=null){
        this.attr = prodAttr;
        this.appendId = appendId;
        this.searchKeyId = searchKeyId;
        this.labels;
        this.filtered = null;
        this.container = document.createElement('span')
        // this.container.id = this.appendId.slice(2)
        document.getElementById('show_applied_filters').append(this.container)

    }
    async show(url){
        let labels = await createLabels(url, this.attr)
        this.labels=labels
        labels = sortNum(labels, 'dsc', 'count')
        appendLabel(this, this.appendId, url)
        if (this.searchKeyId){
            document.getElementById(this.searchKeyId).oninput = () => {
                debounce(()=>{
                    searchLabel(this.appendId, this.searchKeyId, this, 'name', url)
                }, 1000)
            }
        }
        
    }
    surfChecked(baseURL){
        
        this.container.innerHTML = null
        this.labels.forEach((l, i)=>{

            if (l.checked){
                l.show(this, this.appendId.charAt(3)+i, baseURL, this.container)
            }
        })
    }
}

//to check if an item is already present in cart
const inCart = async (id, url) => {
    url = url+id

    try{
        const res = await fetch(url)
        return res.ok
    }catch(err){
        console.log(err)
    }
}

//POST REQUESTS

//add to cart
const add_to_cart = async (prod, url) => {
    try{
        const status = await inCart(prod.id, url)
        if (status){
            changeQtd(prod.id, url)
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
const remove_from_cart = async (url) => {
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

const patchCartItems = async (obj, url) => {
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

//pass in '-' to decrement. Increments by default
const changeQtd = async (id, url, change='+') => {
    url = url+id
    try{
        let prod = await getData(url)
        change=='-'?+prod.qtd--:+prod.qtd++
        if (prod.qtd){
            patchCartItems(prod, url)
        } else {
            remove_from_cart(url)
        }
        return 1
    }catch(err){
        console.log(err)
    }
}

//APPEND DATA
const MAX_WORDS = 7
const appendProducts = (data, selector) => {
    let container = document.querySelector(selector)
    container.innerHTML = null
    data.forEach(prod => {
        let card = document.createElement('div')
        card.classList.add('card')
        
        let imgSec = document.createElement('div')
        let img = document.createElement('img')
        img.src = prod.image
        let txtSec = document.createElement('div')
        let title = document.createElement('h3')
        let t = prod.Name.split(' ')
        title.innerText = t.length>9?t.slice(0,MAX_WORDS).join(' ')+'...':prod.Name
        let size = document.createElement('p')
        size.innerText = prod.pack_size
        let rating = document.createElement('p')
        rating.innerHTML = "<span>"+prod.rating+"<span id='fill' class='material-symbols-outlined'>star</span></span> "+prod.rating_count
        rating.classList.add('rating')
        if (prod.rating=="Nan"){
            rating.style.display = "none"
            
        }
        
        let strikeout = document.createElement('p')
        if (prod.discount){
            strikeout.innerHTML = "MRP <strike>₹"+prod.price+"</strike> <span>"+prod.discount+"% OFF</span>"
        }
        strikeout.classList.add('offer')
        let bottom = document.createElement('div')
        let mrp = document.createElement('h2')
        mrp.innerText = '₹'+prod.mrp
        let add = document.createElement('button')
        add.innerText = 'Add'
        add.classList.add('add_to_cart')
        add.onclick = () => {
            add_to_cart(prod, CART_URL)
            alert('Succesfully Added!')
        }
        imgSec.append(img)
        bottom.append(mrp, add)
        txtSec.append(title, size, rating, strikeout)
        card.append(imgSec, txtSec, bottom)
        container.append(card)

        imgSec.onclick = () => {
            localStorage.setItem('productID', prod.id)
            window.location.href = "productDetails.html"
        }
        txtSec.onclick = () => {
            localStorage.setItem('productID', prod.id)
            window.location.href = "productDetails.html"
        }
    })
    
    
}

const appendLabel = (labelTypeObj, selector, baseURL) => {
    let data = labelTypeObj.filtered?labelTypeObj.filtered:labelTypeObj.labels
    let container = document.getElementById(selector)
    container.innerHTML = null
    data.forEach((item, i) => {
        let sec = document.createElement('div')
        let cb = document.createElement('input')
        cb.type = 'checkbox'
        cb.classList.add('checkbox')
        cb.id = selector.charAt(3) + i
        cb.value = item.name
        cb.onchange = () => {
            item.checked?item.checked=false:item.checked=true
            labelTypeObj.surfChecked(baseURL)
            check(baseURL)
        }
        let name = document.createElement('h5')
        name.innerText = item.name.charAt(0).toUpperCase()+item.name.slice(1)
        let c = document.createElement('h5')
        c.innerText = item.count
        sec.append(cb, name, c)
        container.append(sec)
    })
    labelTypeObj.filtered=null;
}

//checkbox onchange
const check = (baseURL) => {
    let applied = false
    let filter_url = baseURL
    
    document.querySelectorAll('.checkbox').forEach((l) => {
        if (l.checked){
            applied = true
            let key = l.parentNode.parentNode.id
            let parameter = key.slice(3, key.length-1).toLowerCase()
            filter_url += parameter+"="+l.value+"&"
                       
        }
    })
    if (applied){
        document.getElementById('cf-txt').style.display = 'block'
    } else{
        document.getElementById('cf-txt').style.display = 'none'
    }
    //add pagination
    getData(filter_url, [appendProducts, '#products'])
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



export {init, getData, appendProducts, categorizeURL, sortNum, sortStr, add_to_cart, filter,appendLabel, LabelType, changeQtd, remove_from_cart}
