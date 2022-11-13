import { getData, changeQtd, remove_from_cart } from "../components/commonFunc.js";

const medCart_url = "https://infinite-river-74709.herokuapp.com/medCart/"
const cart_url = "https://infinite-river-74709.herokuapp.com/cart/"


const append = (data, containerId, url) => {
    let container = document.getElementById(containerId)
    console.log(container)
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
        price.innerText = prod.price
        let mrp = document.createElement('p')
        if (prod.discount){
            mrp.innerHTML = 'MRP <strike>₹'+prod.mrp+"</strike>"
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
    console.log(meds, products)

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
    return meds, products

}

display()