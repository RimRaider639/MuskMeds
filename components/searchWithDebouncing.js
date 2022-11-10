import {filter, appendLabel} from "./commonFunc.js"

let id;

const debounce = (func, delay) => {
    if (id){
        clearTimeout(id)
    }
    id = setTimeout(func, delay)
}

const searchLabel = (selector, array, attr, baseURL) => {
    let keyword = document.querySelector(selector).value
    let res = array.filter((item) => {
        return item[attr].toLowerCase().startsWith(keyword.toLowerCase())
    })
    appendLabel(res, "allBrands", baseURL)
}

export {debounce, searchLabel}