function appendData(prodDetails) {
    console.log(prodDetails);
    
    for(var i = 0; i < prodDetails.rugs.length; i++) {
        console.log(prodDetails.rugs[i].img);
        let image = document.createElement("img");
        image.src = prodDetails.rugs[i].img;
        image.className = "prodImg";
        let desc = document.createElement("div");
        desc.innerText = prodDetails.rugs[i].prodName;
        desc.className = "desc";
        let price = document.createElement("div");
        price.className = "price";
        price.innerText = "Starting at INR " + prodDetails.rugs[i].price;
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