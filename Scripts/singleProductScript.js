
gettingListOfData();

function gettingListOfData()
{   
    let singleItem = [];
    const list = localStorage.getItem('selectedItem');
    try 
    {
        const prod = document.querySelector("#prodetails");
        singleItem = JSON.parse(list);
            if(singleItem){
                prod.innerHTML = `
                <div class="single-product">
                    <img src="${singleItem.mainImage}" width="100%" alt="">
                </div>
                <div class="pro-description">
                    <h4>${singleItem.prodName}</h4>
                    <h2>$${singleItem.prodPrice}</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>${singleItem.description}</span>
                </div>
                `;
                document.querySelector('button').addEventListener("click",()=>{
                    addToCart(singleItem);
                });
            }
            
        get_Related_List(singleItem.category);
    } 
    catch (error) {
        console.error("Error parsing stored items:", error);
    }
    
}

function addToCart(product){
    
    let carts = [];
    if(localStorage.getItem('cart_List'))
    {
        carts = JSON.parse(localStorage.getItem('cart_List'));
        console.log(carts);
    }
    
    if(carts.length === 0)
    {
        carts.push({id:product.id, mainImage:product.mainImage, prodName:product.prodName, prodPrice:product.prodPrice, quantity:1});
        localStorage.setItem('cart_List', JSON.stringify(carts));
        console.log(carts.id);
    }
    else
    {
        const elementExist = carts.find(item=>item.prodName === product.prodName);
        if(elementExist)
        {
            elementExist.quantity++;
            console.log(elementExist.quantity);
        }
        else
        {
            carts.push({id:product.id, mainImage:product.mainImage, prodName:product.prodName, prodPrice:product.prodPrice, quantity:1});
            console.log("wlee");
        }
        localStorage.setItem('cart_List', JSON.stringify(carts));
    }   
    
    window.location.href=`cart.html`;             
}

function get_Related_List(targetCategory){
    let allData = [];
    const listofItems = localStorage.getItem('listItem');

    try 
    {
        allData = JSON.parse(listofItems);
        const filterData = allData.filter(data=>data.prodCategory === targetCategory);
        const proContainer = document.querySelector(".pro-container");
        proContainer.innerHTML = "";

        filterData.forEach(element => {
            const itemFilter = document.createElement('div');
            itemFilter.className = "pro";
            itemFilter.innerHTML = `
            <img src="${element.mainImage}" alt="${element.description}">
            <div class="des">
                <span>adidas</span>
                <h5>${element.prodName}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${element.prodPrice}</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>`;

            proContainer.appendChild(itemFilter);
            itemFilter.addEventListener("click", ()=>
            {
                const itemID = {id:element.id, category:element.prodCategory, mainImage:element.mainImage, prodName:element.prodName, rating:element.rating, prodPrice:element.prodPrice, description:element.description}
                localStorage.setItem('selectedItem', JSON.stringify(itemID));
                window.location.href="sproduct.html";
            });
        });
    } 
    catch (error) {
        console.error("Error parsing stored items:", error);
    }
}