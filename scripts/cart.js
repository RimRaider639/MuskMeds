
    let toatalmrp = 0;
    let toataldiscount;
    let paidprice = 0;
    // adding product to cart
    let parent = document.getElementById("addinghear");
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(product => {
        console.log(product);
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        toatalmrp += Number(product.mrp);

        paidprice += Number(product.realprice);
        toataldiscount = toatalmrp - paidprice;
        let div3 = document.createElement("div");
        div3.innerHTML = product.name;
        let div4 = document.createElement("div");
        div4.innerHTML = ` ₹  ${product.realprice}`
        let div5 = document.createElement("div");

        let div6 = document.createElement("div");
        div6.innerHTML = product.quantity;
        let div7 = document.createElement("div");
        div7.innerHTML = `MRP <del>${product.mrp}</del> `;
        let div8 = document.createElement("div");

        let div9 = document.createElement("div");
        let removeimage = document.createElement("img");
        removeimage.src = "https://img.1mg.com/images/delete_icon.svg"

        removeimage.setAttribute("class", "deleteremove")

        let div10 = document.createElement("div")
        div10.innerHTML = "REMOVE"
        div.setAttribute("class", "outerdiv")
        div2.setAttribute("class", "inner-1")

        div3.setAttribute("class", "inner-1-left");
        div4.setAttribute("class", "inner-1-right");
        div5.setAttribute("class", "inner-2");
        div6.setAttribute("class", "inner-2-right");
        div7.setAttribute("class", "inner-2-left");
        div8.setAttribute("class", "third");
        div9.setAttribute("class", "third-1");
        div10.setAttribute("class", "third-2");
        div9.append(removeimage)

        div2.append(div3, div4);
        div5.append(div6, div7);
        div8.append(div9, div10);
        div.append(div2, div5, div8);
        parent.append(div);



        // for total price


    });
    // for creating total price thing
    let parentsec = document.getElementById("totalprice");
    let div11 = document.createElement("div");
    div11.setAttribute("class", "sumofcont")
    let div12 = document.createElement("div");
    div12.setAttribute("class", "sumofcont2")
    let div13 = document.createElement("div");
    div13.setAttribute("class", "iteamdis")
    div13.innerHTML = "Iteam total(MRP)"
    let div14 = document.createElement("div");
    div14.innerHTML = " ₹" + toatalmrp;
    div14.setAttribute("class", "mrprate")
    div14.setAttribute("id", "totmrp")
    div12.append(div13, div14);
    let div15 = document.createElement("div");
    div15.setAttribute("class", "secondtot")
    let div16 = document.createElement("div");
    div16.setAttribute("class", "moprate")
    div16.innerHTML = "price Discount"

    let div17 = document.createElement("div");
    div17.innerHTML = "- " + toataldiscount;
    div17.setAttribute("class", "mcprate")
    div17.setAttribute("id", "totdis")
        //append second div 
    div15.append(div16, div17)

    let div18 = document.createElement("div");
    div18.setAttribute("class", "ship")
    let div19 = document.createElement("div");
    div19.setAttribute("class", "shipingfee")
    div19.innerHTML = "Shipping Fee"
    let div20 = document.createElement("div");
    div20.innerHTML = "As per delivery Address"
    div20.setAttribute("class", "asshipping")
    div18.append(div19, div20)
    let div21 = document.createElement("div");
    div21.setAttribute("class", "thirdtotal")
    let div22 = document.createElement("div");
    div22.setAttribute("class", "tobepaid")
    div22.innerHTML = "To be paid"
    let div23 = document.createElement("div");
    div23.innerHTML = "₹ " + paidprice;

    div23.setAttribute("class", "moneyinrupee")
    div23.setAttribute("id", "totpaid")
    div21.append(div22, div23);
    let div24 = document.createElement("div");
    div24.setAttribute("class", "fourth")


    let div25 = document.createElement("div");
    div25.setAttribute("class", "totalsaving")
    div25.innerHTML = "Total Savings"

    let div26 = document.createElement("div");
    div26.setAttribute("class", "savedmoney")
    div26.setAttribute("id", "totsave")
    div26.innerHTML = toataldiscount;
    div24.append(div25, div26);
    div11.append(div12, div15, div18, div21, div24)
    parentsec.append(div11)


    console.log(toataldiscount, toatalmrp, paidprice);

    function checkout() {
        window.location.href = "address.html"
    }