import {appendLabel} from "./commonFunc.js"

let id;

const debounce = (func, delay) => {
    if (id){
        clearTimeout(id)
    }
    id = setTimeout(func, delay)
}

//selector is the selector for appending, id is the selector for search bar
const searchLabel = (appendId, keywordId, labelTypeObj, attr, baseURL) => {
    let keyword = document.getElementById(keywordId).value
    labelTypeObj.filtered = labelTypeObj.labels.filter((item) => {
        return item[attr].toLowerCase().startsWith(keyword.toLowerCase())
    })
    appendLabel(labelTypeObj, appendId, baseURL)
}

export {debounce, searchLabel}