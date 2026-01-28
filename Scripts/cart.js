getCartData();

function getCartData(){
    let listData = [];
    
    const dataList = localStorage.getItem('cart_List');

    try {
        listData = JSON.parse(dataList);
        
        const cartContainer = document.querySelector('#cart_body')
        cartContainer.innerHTML="";

        listData.forEach(element => {
            const container = document.createElement('tr');
            container.innerHTML=`<td>${element.prodName}</td>
                <td><img src="${element.mainImage}" alt=""></td>
                <td>$${element.prodPrice}</td>
                <td><input type="number" value="${element.quantity}"></td>
                <td>$${element.prodPrice * element.quantity}</td>
                <td><a href="#" onclick="removeItem(${element.id})"><i class="far fa-times-circle"></i></a></td>`;
                cartContainer.appendChild(container);
        });
        
    } catch (error) {
        console.error("Error parsing stored items:", error);
    }
}

function removeItem(eleId){
    
    let list=[];
    list = JSON.parse(localStorage.getItem('cart_List'));
    
    const index = list.findIndex(item => item.id === eleId);
    
    if(list[index].quantity > 1)
    {
        list[index].quantity--;
    }
    else
    {
        list = list.filter(findId=>findId.id!==eleId);
    }
    localStorage.setItem('cart_List', JSON.stringify(list));
    getCartData();
}
