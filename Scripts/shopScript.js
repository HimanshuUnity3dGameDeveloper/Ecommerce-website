getting_Data();

function getting_Data()
{
    const getProduct = localStorage.getItem('listItem');
    if(!getProduct) console.error("Item list not found in localStorage.");

    let getItem = [];
    try
    {
        getItem = JSON.parse(getProduct);
    }
    catch(error)
    {
        console.error("Error parsing stored items:", error);
    }
    displayProducts(getItem);
}

function displayProducts(list){
    const container = document.querySelector(".pro-container");
    container.innerHTML="";

    list.forEach((p)=>{
        const card = document.createElement("div");
        card.className = "pro";
        card.innerHTML=`
        <img src="${p.mainImage}" alt="${p.description}">
        <div class="des">
            <span>adidas</span>
            <h5>${p.prodName}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$${p.prodPrice}</h4>
        </div>`;

        container.appendChild(card);
        card.addEventListener("click",()=>
        {
            const itemID = {id:p.id, category:p.prodCategory, mainImage:p.mainImage, prodName:p.prodName, rating:p.rating, prodPrice:p.prodPrice, description:p.description}
            localStorage.setItem('selectedItem', JSON.stringify(itemID));
            window.location.href=`sproduct.html`;
        });
    });
}
