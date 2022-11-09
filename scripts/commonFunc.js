//GLOBAL VARIABLES

const PAGES = 20

//INITIALISE

const init = () => {
    document.head.innerHTML += `
    <link rel="stylesheet" href="styles/common.css">
    <link rel="shortcut icon" href="img/favicon_adobe_express.svg" type="image/x-icon">`
}

//PAGINATION

const createButtons = () => {
    let area = document.getElementById('page_nav')
    area.innerHTML = null
    for (let i=1; i<=PAGES; i++){
        let btn = document.createElement('button')
        btn.innerText = i
        btn.classList.add('pg_btn')
        btn.onclick = () => {
            getData(i)
        }
        area.append(btn)
    }
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

//APPEND DATA

const appendProducts = (data, selector) => {
    let container = document.querySelector(selector)
    container.innerHTML = null
    data.forEach(prod => {
        let card = document.createElement('div')
        card.classList.add('card')
        let img = document.createElement('img')
        img.src = "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
        let title = document.createElement('h3')
        title.innerText = prod.Name
        let size = document.createElement('p')
        size.innerText = prod.pack_size
        let strikeout = document.createElement('p')
        strikeout.innerHTML = "MRP <strike>"+prod.price+"</strike>"
        let mrp = document.createElement('h2')
        mrp.innerText = prod.mrp
        card.append(img, title, size, strikeout, mrp)
        container.append(card)
    })
}

//OPERATIONS ON THE DATA

const addID = (data) => {
    
}

//SORT

//by default sorts ascending. Give a different value to order for descending order.
const sortStr = (data, order='asc', attr) => {
    let x = order=='asc'?-1:1
    return data.sort((a,b) => a.attr<b.attr?x:x*-1)
}

const sortNum = (data, order='asc', attr) => {
    let x = order=='asc'?1:-1
    return data.filter((a,b) => a-b*x)
}

//FILTER

const filter = (data, attr, value) => {
    return data.filter((el) => {
        return el.attr == value
    })
}

export {init, getData, appendProducts}
