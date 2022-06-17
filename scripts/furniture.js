function appendData(prodDetails) {
    console.log(prodDetails);
    
    for(var i = 0; i < prodDetails.furniture.length; i++) {
        console.log(prodDetails.furniture[i].img);
        let image = document.createElement("img");
        image.src = prodDetails.furniture[i].img;
        image.className = "prodImg";
        let desc = document.createElement("div");
        desc.innerText = prodDetails.furniture[i].prodName;
        desc.className = "desc";
        let price = document.createElement("div");
        price.className = "price";
        price.innerText = "Starting at INR " + prodDetails.furniture[i].price;
        let gallery = document.createElement("div");
        gallery.className = "gallery";
        let a = document.createElement("a");
        a.href = "";
        let responsive = document.createElement("div");
        responsive.className = "responsive";
        let prodDiv = document.querySelector("#prodDiv");
        gallery.append(image);
        gallery.append(price);
        gallery.append(desc);
        responsive.append(gallery);
        a.append(responsive);
        prodDiv.append(a);
    }
}
async function getData(url) {
    url = await fetch(url);
    url = url.json();
    url = await url;
    appendData(url);
}
let x = "/api/productDetails.json"
getData(x);