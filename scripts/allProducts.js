import {init, appendProducts, getData, categorizeURL, LabelType} from "../components/commonFunc.js"
init()



let url = "https://infinite-river-74709.herokuapp.com/products?"

let cat = localStorage.getItem('clickedCat') || 'Vitamins & Supplements'
document.getElementById('cat_heading').innerText = cat
document.querySelector('title').innerText = cat
url = categorizeURL(url, cat)
getData(url, [appendProducts, '#products'])


let brands = new LabelType('brand', 'allBrands', 'search_brand')
brands.show(url)
let type = new LabelType('type', 'allTypes', 'search_type')
type.show(url)
let gender = new LabelType('gender', 'allGenders')
gender.show(url)
// let discounts = new LabelType('discount','allDiscounts')

const sort = document.getElementById('sort')
sort.onchange = () => {
    let value = sort.value
    switch (value){
        case ('lh'): getData(url+'_sort=mrp&_order=asc&', [appendProducts, '#products']);
            break;
        case('hl'): getData(url+'_sort=mrp&_order=desc&', [appendProducts, '#products']);
            break;
        case('discount'): getData(url+'_sort=discount&_order=desc&', [appendProducts, '#products']);
            break;
        case('rating'): getData(url+'_sort=rating&_order=desc&', [appendProducts, '#products']);
            break;
        default: getData(url, [appendProducts, '#products']);
    }
}

//discount filters
// document.querySelectorAll('#filter_by_discount .checkbox')


// .forEach(f=>{
//     let para = ''
//     f.onchange = () => {
//         if (f.checked){
//             para+="discount"+f.id+'&'
            
//         } 
//         getData(url+para+"_limit=100", [appendProducts, '#products'])
//     }
// })


// console.log(document.querySelector(`#page_nav>button:nth-child(2)`))

