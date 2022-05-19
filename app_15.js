// app_15

const humbrger = document.querySelector('body #header .navBar .humbrger');
const cart = document.querySelector('body #header .navBar .contentRight .cart');
const articles = document.querySelectorAll('body #main .container .article');
const allProducts = document.querySelectorAll('body #main .container .article .title > a');
const btnArtDispal = document.querySelector('body #main .container .btnArtDispal');
const section = document.querySelectorAll('body #main .container .article .section');
const filterProducts = document.querySelectorAll('body #main .container .article .title .content_Left .filterProducts');
const boxsProducts = document.querySelector('body #boxsProducts');
const cartBox = document.querySelector('body #boxsProducts .cartBox');


// event for display Boxs Products 'CART'
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

// event for display nav bar 'humbrger'
humbrger.onclick = function(){
    const contentRight = document.querySelector('body #header .navBar .contentRight');
    contentRight.classList.toggle('displayContentRight');
}
// event for last article
articles[articles.length-1].style.setProperty('display','none');

// event for button display article 
btnArtDispal.onclick = function(){
    if(btnArtDispal.textContent == 'Less Products'){
        articles[articles.length-1].style.setProperty('display','none');
        btnArtDispal.textContent = 'More Products';
    }else if(btnArtDispal.textContent == 'More Products'){
        articles[articles.length-1].style.setProperty('display','block');
        btnArtDispal.textContent = 'Less Products';
    }
};

// event for all products > title 'back & all products'
for(let i = 0;i<allProducts.length;i++){
    allProducts[i].addEventListener('click',function(){ 
        if(allProducts[i].textContent != 'Back'){
            filterProducts[i].selectedIndex = 0;        //for select children 0
            // display articles
            for(let x = 0;x<articles.length;x++){
                if(i==x){
                    articles[x].style.setProperty('display','block');
                }
                else if(i!=x){
                    articles[x].style.setProperty('display','none');
                }
            }
            // displa boxs
            for(let x = 4;x<section[i].children.length;x++){
                section[i].children[x].style.setProperty('display','block');
            };
            // change all text Content 
            allProducts[i].textContent = 'Back';
            // last all products
            btnArtDispal.textContent = 'More Products';
            if(i == allProducts.length-1){
                articles[i].parentElement.insertBefore(btnArtDispal,articles[i]);
                articles[i].parentElement.insertBefore(btnArtDispal,articles[articles.length]);
            };
            // display filterProducts 
            filterProducts[i].style.setProperty('display','inline-block');
        }
        else if(allProducts[i].textContent == 'Back'){
            // display articles
            for(let x = 0;x<articles.length;x++){
                if(x!=articles.length-1){
                    articles[x].style.setProperty('display','block');
                }else if(x==articles.length-1){
                    articles[x].style.setProperty('display','none');
                }
                allProducts[x].textContent = 'All Products';
                // display boxs
                for(let y = 4;y<section[x].children.length;y++){
                    section[x].children[y].style.setProperty('display','none');
                };
                // display all filterProducts
                filterProducts[x].style.setProperty('display','none');
            };
            // btn change text content
            btnArtDispal.textContent = 'More Products';
        };
    });
};

//  add event for filter product
for(let i = 0;i<filterProducts.length;i++){
    // event for filter Date
    filterProducts[i].children[1].addEventListener('click',function(){
        let arr = [];
        const dateProduct = section[i].querySelectorAll('body #main .container .article .section .box .about .date .dateProduct');
        for(let x = 0;x<section[i].childElementCount;x++){
            arr.push(dateProduct[x].textContent);
        }
        // sort boxs Date
        for(let x = 0;x<arr.length;x++){
            for(let y = x+1;y<arr.length;y++){
                if(arr[x].slice(-4,arr[x].length) < arr[y].slice(-4,arr[y].length)){
                    [arr[y],arr[x]]=[arr[x],arr[y]];
                }
                if(arr[x].slice(-4,arr[x].length) == arr[y].slice(-4,arr[y].length)){
                    if(arr[x].slice(-7,-5) < arr[y].slice(-7,-5)){
                        [arr[y],arr[x]]=[arr[x],arr[y]];
                    }
                    if(arr[x].slice(-7,-5) == arr[y].slice(-7,-5)){
                        if(arr[x].slice(0,2) < arr[y].slice(0,2)){
                            [arr[y],arr[x]]=[arr[x],arr[y]];
                        }
                    }
                }
            }    
        }
        // display boxs 
        const boxs = section[i].querySelectorAll('.box')
        for(let x = 0;x<arr.length;x++){
            for(let y = 0;y < boxs.length;y++){
                if(arr[x] == boxs[y].children[1].children[2].children[1].textContent){
                    boxs[y].style.cssText = `display:block;`;
                    section[i].insertBefore(boxs[y],section[i].children[x]);
                    break;
                }
            };
        };
        arr=[];
    });
    // event for filter top to bottom
    filterProducts[i].children[2].addEventListener('click',function(){
        let arr = [];
        const price = section[i].querySelectorAll('body #main .container .article .section .box .about .price');
        for(let x = 0;x<section[i].childElementCount;x++){
            arr.push(price[x].textContent);
        }
        // sort boxs TtB
        for(let x = 0;x<arr.length-1;x++){
            for(let y = x+1;y<arr.length;y++){
                if(Number(arr[x].slice(0,-1)) < Number(arr[y].slice(0,-1))){
                    [arr[y],arr[x]]=[arr[x],arr[y]];
                }
            }    
        }
        // display boxs 
        const boxs = section[i].querySelectorAll('.box');
        let arr1 = [];
        let conteur = false;
        for(let x = 0;x<arr.length;x++){
            for(let y = 0;y<boxs.length;y++){
                for(let w = 0;w<arr1.length;w++){
                    if(y == arr1[w]){
                        conteur=true;
                        break;
                    }
                }
                if(conteur){conteur=false;continue;}
                if(arr[x] == boxs[y].children[1].children[3].textContent){
                    arr1.push(y);
                    boxs[y].style.cssText = `display:block;`;
                    section[i].insertBefore(boxs[y],section[i].children[x]);          
                    break;
                } 
            }
        };
        arr = [];
        arr1 = [];
    });
    // event for filter bottom to top
    filterProducts[i].children[3].addEventListener('click',function(){
        let arr = [];
        const price = section[i].querySelectorAll('body #main .container .article .section .box .about .price');
        for(let x = 0;x<section[i].childElementCount;x++){
            arr.push(price[x].textContent);
        }
        // sort boxs BtT
        for(let x = 0;x<arr.length-1;x++){
            for(let y = x+1;y<arr.length;y++){
                if(Number(arr[x].slice(0,-1)) > Number(arr[y].slice(0,-1))){
                    [arr[y],arr[x]]=[arr[x],arr[y]];
                }
            }    
        }
        // display boxs 
        const boxs = section[i].querySelectorAll('.box');
        let arr1 = [];
        let conteur = false;
        for(let x = 0;x<arr.length;x++){
            for(let y = 0;y<boxs.length;y++){
                for(let w = 0;w<arr1.length;w++){
                    if(y == arr1[w]){
                        conteur=true;
                        break;
                    }
                }
                if(conteur){conteur=false;continue;}
                if(arr[x] == boxs[y].children[1].children[3].textContent){
                    arr1.push(y);
                    boxs[y].style.cssText = `display:block;`;
                    section[i].insertBefore(boxs[y],section[i].children[x]);          
                    break;
                } 
            }
        };
        arr = [];
        arr1 = [];
    });
};


// event for Search products
const btnSearch = document.querySelector('body #header .navBar .contentRight .buttons .btnSearch');
const inpSearch = document.querySelector('body #header .navBar .contentRight .buttons .inpSearch');
// const BoxProductsSearch = document.querySelector('body #main .container .BoxProductsSearch');

    // event for inp search
inpSearch.addEventListener('keyup',function(){
    inpSearch.value = inpSearch.value.trimStart();
    inpSearch.value = inpSearch.value.trimEnd();
    if(inpSearch.value == ''){
        btnSearch.click();
        articles[articles.length-1].style.setProperty('display','none');
    };
});

    // event for btn search
btnSearch.addEventListener('click',function(){

    if(inpSearch.value.trim().length != 0){
        for(let i = 0;i<articles.length;i++){
            articles[i].children[0].style.setProperty('display','none');
            articles[i].style.setProperty('display','block');
        };
        btnArtDispal.style.setProperty('display','none');

        for(let i = 0;i<section.length;i++){
            for(let x = 0;x<section[i].children.length;x++){
                section[i].children[x].style.setProperty('display','none');
            }
        };
        let conteur = 0;
        for(let i = 0;i<section.length;i++){
            for(let x = 0;x<section[i].children.length;x++){
                for(let y = 0;y<2;y++){
                    let result = section[i].children[x].children[1].children[y].textContent;
                    result = result.toLocaleLowerCase();
                    if(result.search(inpSearch.value.toLocaleLowerCase()) > -1){
                        section[i].children[x].style.setProperty('display','block');
                        conteur++; 
                        break;
                    }
                }
            }
        }   
        if(conteur == 0){alert('no result !');inpSearch.value='';btnSearch.click();}
    }
    else if(inpSearch.value.trim().length == 0){
        for(let i = 0;i<articles.length;i++){
            articles[i].style.setProperty('display','block');
            articles[i].children[0].style.setProperty('display','flex');
            allProducts[i].textContent = 'All Products';
            if(i==articles.length-1){articles[i].style.setProperty('display','none');allProducts[i].textContent = 'All Products';}
        };
        btnArtDispal.style.setProperty('display','block');
        btnArtDispal.textContent = 'More Products';
        for(let i = 0;i<section.length;i++){
            for(let x = 0;x<section[i].children.length;x++){
                if(x > 3){
                    section[i].children[x].style.setProperty('display','none'); 
                    continue;
                }
                section[i].children[x].style.setProperty('display','block');
            }
        };
    }
});




// event for button Add Cart
const btnAddCart  = document.querySelectorAll('body #main .container .article .section .box .about .btnAddCart');
const productsCart = document.querySelector('body #boxsProducts .productsCart');
let arrMatricule = [];

// function for calcul Total price
function Total(){
    let totalPrice = 0;
    for(let x = 0;x<productsCart.childElementCount;x++){
        let price = productsCart.children[x].children[1].children[3].textContent.slice(0,-1);
        let count = Number(productsCart.children[x].children[1].children[5].value);
        totalPrice += price*count;
    }
    const total = document.querySelector('body #boxsProducts .cartBox .contentBottom .priceTotal');
    total.textContent = totalPrice+'$';
    return totalPrice;
}

// function for add product and remove  <-<- /|-_-|\
for(let i = 0;i<btnAddCart.length;i++){
    btnAddCart[i].addEventListener('click',function(){
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
        };
        
        
        // add event for input count
        for(let x = 0;x<productsCart.childElementCount;x++){
            productsCart.children[x].children[1].children[5].addEventListener('input',function(){
                Total();
            });
        }

        // event for button remove product from cart
        const removeProduct = document.querySelectorAll('body #boxsProducts .productsCart .box .removeProduct');
        for(let w = 0;w<removeProduct.length;w++){
            removeProduct[w].onclick = function(){
                // for remove matricule product from array
                numMatricule =  Number(removeProduct[w].parentElement.getAttribute('matricule'));
                for(let x = 0;x<arrMatricule.length;x++){
                    if(arrMatricule[x] == numMatricule){
                        for(let y = x;y<arrMatricule.length-1;y++){
                            [arrMatricule[y+1],arrMatricule[y]]=[arrMatricule[y],arrMatricule[y+1]]
                        }
                        arrMatricule.pop();
                        numMatricule = -1;
                        break;
                    }
                }
                // remove elemnt product
                this.parentElement.remove();
                // start with function Total price
                Total();
            }
        }

    });
}

// event for button buy products
const btnBuy = document.querySelector('body #boxsProducts .cartBox .contentBottom .btnBuy');
btnBuy.addEventListener('click',function(){
    if(productsCart.children.length>0){
        for(let x = productsCart.children.length-1;x>=0;x--){
            productsCart.children[x].remove();
        }
        alert('your Order are placed');
        arrMatricule=[];
        Total();
    }
    else{alert('add products !!');}
});

// ================= event for images prices random
const arrImages0 = ['images/al1.jpg','images/al2.jpg','images/al3.jpg','images/al4.jpg','images/al5.jpg','images/al6.jpg','images/p1.jpg','images/p2.jpg'];
const arrImages1 = ['images/food_1.jpg','images/food_2.jpg','images/food_3.jpg','images/food_4.jpg','images/food_5.jpg','images/food_6.jpg','images/food_7.jpg','images/food_8.jpg'];
const arrImages2 = ['images/phone_1.jpg','images/phone_2.jpg','images/phone_3.jpg','images/phone_4.jpg','images/phone_5.jpg','images/phone_6.jpg','images/phone_7.jpg','images/phone_8.jpg'];
const prices = ['31$','21$','19$','1000$','6$','500$','1400$','10$','144$','5$','200$','99$','222$','11$'];
function funYear(){return Math.floor(Math.random() * 23);};
let matricule = 0;
for(let x =0;x<section.length;x++){
    switch(x){
        case 0:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages1[Math.floor(Math.random() * arrImages1.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
                // define matricule
                section[x].children[y].setAttribute('matricule',`${matricule}`);
                matricule++;
            };
            break;
        case 1:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages0[Math.floor(Math.random() * arrImages0.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
                // define matricule
                section[x].children[y].setAttribute('matricule',`${matricule}`);
                matricule++;
            };
            break;
        case 2:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages2[Math.floor(Math.random() * arrImages2.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
                // define matricule
                section[x].children[y].setAttribute('matricule',`${matricule}`);
                matricule++;
            };
            break;
    };
}
matricule = 0;
