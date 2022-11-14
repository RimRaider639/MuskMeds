import { getData, changeQtd, remove_from_cart, add_to_cart } from "../components/commonFunc.js";

const medCart_url = "https://infinite-river-74709.herokuapp.com/medCart/"
const cart_url = "https://infinite-river-74709.herokuapp.com/cart/"
const orders_url = 'https://infinite-river-74709.herokuapp.com/orders/'


const append = (data, containerId, url) => {
    let container = document.getElementById(containerId)
    container.innerHTML = null

    for (let prod of data) {
        let card = document.createElement('div')
        card.classList.add('prod')
        let txtSec = document.createElement('div')
        let name = document.createElement('h5')
        name.innerHTML = prod.Name
        let size = document.createElement('p')
        size.innerText = prod.pack_size
        let rmv = document.createElement('button')
        rmv.innerText = 'Remove'
        rmv.onclick = () => {
            let url = cart_url+prod.id
            remove_from_cart(url)
            display()
        }
        txtSec.append(name, size, rmv)
        let details = document.createElement('div')
        let price = document.createElement('h5')
        price.innerText = '₹' +prod.mrp
        let mrp = document.createElement('p')
        if (prod.discount){
            mrp.innerHTML = 'MRP <strike>₹'+prod.price+"</strike>"
        }
        let qtd = document.createElement('div')
        qtd.classList.add('qtdSec')
        let inp = document.createElement('span')
        inp.innerText = prod.qtd
        let dcm = document.createElement('button')
        dcm.innerText = '-'
        dcm.onclick = async () => {

            let res = await changeQtd(prod.id, url, '-')
            if (res){
                display()
            }
            alert('Quantity decreased!')
            
            
        }
        
        let icm = document.createElement('button')
        icm.innerText = '+'
        icm.onclick = async () => {
            let res = await changeQtd(prod.id, url, '+')
            if (res){
                display()
            }
            alert('Quantity increased')
            
        }
        qtd.append(dcm, inp, icm)
        details.append(price, mrp, qtd)

        card.append(txtSec, details)
        container.append(card)
    }
}



const display = async () => {
    const meds = await getData(medCart_url)
    const products = await getData(cart_url)

    let tp_prod = products.reduce((acc, a) => {
        return acc+a.price
    }, 0)
    let tp_med = meds.reduce((acc, a) => {
        return acc+a.price
    }, 0)

    let tp_prod_d = products.reduce((acc, a) => {
        return acc+a.mrp
    }, 0)
    let tp_med_d = meds.reduce((acc, a) => {
        return acc+a.mrp
    }, 0)

    if (!meds.length && !products.length){
        window.location.href = 'empty.html'
    }

    if (meds.length){
        append(meds, 'AllMeds', medCart_url)
    } else{
        document.querySelector('#container>div:nth-child(4)').style.display = 'none'
    }
    if (products.length){
        append(products, 'AllProd', cart_url)
    } else{
        document.querySelector('#container>div:nth-child(1)').style.display = 'none'
    }
    document.getElementById('total-items1').innerText = products.length
    document.getElementById('total-items2').innerText = meds.length
    document.getElementById('total-mrp').innerText = '₹' +(tp_prod+tp_med)
    document.getElementById('prod-discount').innerText = '₹' +(tp_prod_d+tp_med_d)
    document.getElementById('paid-price').innerText = (tp_prod_d+tp_med_d)
    document.getElementById('saved').innerText = (tp_prod+tp_med)-(tp_prod_d+tp_med_d)

    document.getElementById('payment-btn').onclick = () => {
        let prod = [...meds, ...products]
        placeOrder(prod)
        alert('Order placed!')
    }
    

    return meds, products
}


const placeOrder = async (prod) => {
    let res = await fetch(orders_url)
    let allOrders = await res.json()
    prod.forEach((p )=> {

        allOrders.push(p)
    })
    console.log(allOrders)

    try{
        let res = await fetch(orders_url, {
            method: 'POST',
            body: JSON.stringify(allOrders),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(err){
        console.log(err)
    }
}

display()