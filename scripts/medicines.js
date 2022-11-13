import { init, add_to_cart } from "../components/commonFunc.js";

init()

let manufacturers = ['Glaxo SithKline Pharmaceuticals Ltd', 'Sanofi India Ltd', 'Cipla Ltd', 'Alembic Pharmaceuticals Ltd', 'Glenmark Pharmaceuticals Ltd', 'USV Ltd', 'Cadila Pharmaceuticals Ltd', 'Mankind Pharma Ltd', 'Sun Pharmaceutical Industry', 'Torrent Pharmaceuticals Ltd', "Dr Reddy's Laboratories"]
let images = ["https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/72cfa26ecaf14e7f8285525d3ffe61f3.jpg", "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/la9aelaydysxuaizrcd5.jpg", "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tqux8ccp05qx3npvxex9.jpg", "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/epbgofppoky6cermgzyx.png"]
const cart_url = "https://infinite-river-74709.herokuapp.com/medCart"

const filterBtn = () => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let container = document.getElementById('filter')
    for (let i of alpha){
        let btn = document.createElement('button')
        btn.innerText = i
        btn.onclick = () => {
            //get data by select letter
            getDataByLetter(i)
            document.querySelectorAll('.filter_btn').forEach(el=>{
                el.classList.remove('active')
            })
            btn.classList.add('active')
            document.querySelector('#heading>span').innerText = i

        }
        btn.classList.add("filter_btn")
        container.append(btn)
    }

    //initially
    document.querySelector('#heading>span').innerText = 'A'
    document.querySelector('#filter>button:first-child').classList.add('active')
    getDataByLetter('A')
}



const appendMeds = async (data) => {
    let container = document.getElementById('container')
    container.innerHTML = null
    data.forEach(med => {
        let card = document.createElement('div')
        card.classList.add('card')

        let imgSec = document.createElement('div')
        let img = document.createElement('img')
        img.src = images[Math.floor(Math.random()*images.length)]
        imgSec.classList.add('med_img')
        imgSec.append(img)

        let textSec = document.createElement("div")
        textSec.classList.add('med_text')

        let head = document.createElement('div')
        head.classList.add('sec1')

        let title = document.createElement('h3')
        title.innerText = med.Name

        let price = document.createElement('h3')
        price.innerText ="MRP ₹"+med.mrp

        head.append(title, price)

        let size = document.createElement('p')
        size.innerText = med.pack_size

        med.manufacturer = manufacturers[Math.floor(Math.random()*manufacturers.length)]
        let ltd = document.createElement('p')
        ltd.innerText = med.manufacturer

        let add = document.createElement('button')
        add.onclick = () => {
            //add to cart
            add_to_cart(med, cart_url)
        }
        add.innerText = 'ADD'
        add.classList.add('add_to_cart')
        textSec.append(head, size, ltd, add)
        card.append(imgSec, textSec)
        container.append(card)
    })
}

const getDataByLetter = async (letter) => {
    let url = 'https://infinite-river-74709.herokuapp.com/products?_limit=1000'
    let res = await fetch(url)
    let data = await res.json()
    let filtered = data.filter((el) => {
        return el.Name[0]==letter
    })
    filtered.sort((a,b) => a.Name<b.Name?-1:1)
    appendMeds(filtered)
}

filterBtn()

