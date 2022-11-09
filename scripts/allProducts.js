import {init, appendProducts, getData} from "./commonFunc.js"

init()

//key - RvoAlwKvGhnheeG8p5zw0TiSzntiedxc3Od6Cokf

const url = "https://infinite-river-74709.herokuapp.com/products?_limit=20"
getData(url, [appendProducts, '#products'])

let data = async () => {
    console.log(await getData('https://api.ods.od.nih.gov/dsld/v8/browse-products/?method=by_keyword&q=Vitamin D'))

}

data()