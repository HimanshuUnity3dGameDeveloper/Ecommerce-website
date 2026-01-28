let getEachItem = [];

getting_Feature_Data();

function getting_Feature_Data()
{
    const dataFetch = localStorage.getItem('listItem');
    try
    {
        getEachItem = JSON.parse(dataFetch);
        const feature_Class = document.querySelector(".feature-class");
        feature_Class.innerHTML = "";
        if(feature_Class)
        {
            const data_Category = getEachItem.filter(item=>item.prodCategory === 'T-shirt');
            if(!data_Category)
            {
                console.error("Item list not found in localStorage.");
            }
            else
            {
                data_Category.forEach(p => {
                    const dataContainer = document.createElement('div');
                    dataContainer.className = "pro";
                    dataContainer.innerHTML = `
                    <img src="${p.mainImage}" width='100%' alt="${p.description}">
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
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>`;

                    feature_Class.appendChild(dataContainer);
                    dataContainer.addEventListener("click", ()=>
                    {
                        const itemID = {id:p.id, category:p.prodCategory, mainImage:p.mainImage, prodName:p.prodName, rating:p.rating, prodPrice:p.prodPrice, description:p.description}
                        localStorage.setItem('selectedItem', JSON.stringify(itemID));
                        window.location.href="sproduct.html";
                    });
                });
            }
        }
    }
    catch(error)
    {
        console.error("Error parsing stored items:", error);
    }
}
getting_Arrival_Data();

function getting_Arrival_Data()
{
    const dataFetch = localStorage.getItem('listItem');
    try
    {
        getEachItem = JSON.parse(dataFetch);
        const arrival_Class = document.querySelector(".arrival-class");
        arrival_Class.innerHTML = "";
        if(arrival_Class)
        {
            const data_Category = getEachItem.filter(item=>item.prodCategory === 'shirt');
            if(!data_Category)
            {
                console.error("Item list not found in localStorage.");
            }
            else
            {
                data_Category.forEach(p => {
                    const dataContainer = document.createElement('div');
                    dataContainer.className = "pro";
                    dataContainer.innerHTML = `
                    <img src="${p.mainImage}" width='100%' alt="${p.description}">
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
                    arrival_Class.appendChild(dataContainer);
                    dataContainer.addEventListener("click", ()=>
                    {
                        const itemID = {id:p.id, category:p.prodCategory, mainImage:p.mainImage, prodName:p.prodName, rating:p.rating, prodPrice:p.prodPrice, description:p.description}
                        localStorage.setItem('selectedItem', JSON.stringify(itemID));
                        window.location.href="sproduct.html";
                    });
                });
            }
        }
    }
    catch(error)
    {
        console.error("Error parsing stored items:", error);
    }
}
