import { appendProducts, getData } from "./commonFunc.js"

const searchKey = async (kewordId, url, selector) => {
    const keyword = document.getElementById(kewordId).value
    const data = await getData(url+"q="+keyword+"&")
    appendProducts(data, selector)
}

export {searchKey}