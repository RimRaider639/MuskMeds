import {init, appendProducts, appendLabel, getData, categorizeURL, getBrands, sortNum} from "../components/commonFunc.js"
import {debounce, searchLabel} from "../components/searchWithDebouncing.js"
init()

//key - RvoAlwKvGhnheeG8p5zw0TiSzntiedxc3Od6Cokf


let url = "https://infinite-river-74709.herokuapp.com/products?"

let cat = localStorage.getItem('clickedCat') 
url = categorizeURL(url, cat)
getData(url+"_limit=100", [appendProducts, '#products'], 1)


const showBrands = async () => {

    let brands = await getBrands(url)
    brands = sortNum(brands, 'dsc', 'count')
    appendLabel(brands, "allBrands", url)
    document.querySelector("#search_brand").oninput = () => {
        debounce(()=>{
            searchLabel("#search_brand", brands, 'name', url)
        }, 1000)
    }

}
// getBrands(url)
showBrands()

// let data = async () => {
//     console.log(await getData('https://api.ods.od.nih.gov/dsld/v8/browse-products/?method=by_keyword&q=Vitamin D'))

// }

// data()



