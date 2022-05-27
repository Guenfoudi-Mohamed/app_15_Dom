// app_15

// event for button Add Cart
const cart = document.querySelector('body #header .navBar .contentRight .cart');

// event for display Boxs Products 'CART'
const cartBox = document.querySelector('body #boxsProducts .cartBox');
cart.addEventListener('click',function(){
    boxsProducts.style.setProperty('display','block');
    cartBox.style.setProperty('transition',`.5s`);
    setTimeout(function(){
        cartBox.style.setProperty('transform','translateX(-100%)');

    },80);
    const removeCart = document.querySelector('body #boxsProducts .cartBox .headCart .removeCart');
    removeCart.addEventListener('click',function(){
        cartBox.style.setProperty('transform','translateX(0%)');
        boxsProducts.style.setProperty('display','none');
    });
});




const btnAddCart  = document.querySelectorAll('body #main .container .article .section .box .about .btnAddCart');
for(let i = 0;i<btnAddCart.length;i++){
    btnAddCart[i].addEventListener('click',function(){
        const productsCart = document.querySelector('body #boxsProducts .productsCart');
        let box = btnAddCart[i].parentElement.parentElement.cloneNode(true);
        let input = document.createElement('input')
        input.setAttribute('class','inpCount');
        input.setAttribute('type','number');
        input.setAttribute('min','1');
        input.setAttribute('value','1');
        box.children[1].appendChild(input);
        // append icon remove product
        let a = document.createElement('a');
        a.setAttribute('class','removeProduct');
        a.setAttribute('title','remove Product');
        a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>';
        box.appendChild(a);
        let conteur = false;
        let numMatricule = -1;

        // add product to cart
        for(let x = 0;x<arrMatricule.length;x++){
            if(arrMatricule[x] == Number(box.getAttribute('matricule'))){
                numMatricule = arrMatricule[x];
                conteur = true;
                break;
            }
        }
        if(conteur == true){
            conteur = false;
            for(let x = 0;x<productsCart.childElementCount;x++){
                if(Number(productsCart.children[x].getAttribute('matricule')) == numMatricule){
                    let count = Number(productsCart.children[x].children[1].children[5].value) + 1;
                    productsCart.children[x].children[1].children[5].value = `${count}`;
                    break;
                };
            }
            numMatricule = -1;
            Total();
            cart.click();
        }else{
            arrMatricule.push(Number(box.getAttribute('matricule')));
            box.style.setProperty('display','flex');
            productsCart.insertBefore(box,productsCart.children[0]);
            Total();
            cart.click();
            eventInputRemove();
        };
    });
}

// event for button buy products
const btnBuy = document.querySelector('body #boxsProducts .cartBox .contentBottom .btnBuy');
btnBuy.addEventListener('click',function(){
    const productsCart = document.querySelector('body #boxsProducts .productsCart');
    let orderPrice = Total();
    if(productsCart.children.length>0){
        for(let x = productsCart.children.length-1;x>=0;x--){
            productsCart.children[x].remove();
        }
        arrMatricule=[];
        Total();
        setTimeout(function(){alert(`your Order are placed : ${orderPrice}$`);},250); 
    }
    else{alert('add products !!');}
});
