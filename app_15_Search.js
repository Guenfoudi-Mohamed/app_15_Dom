// app_15


// event for Search products
// const articles = document.querySelectorAll('body #main .container .article');
// const btnArtDispal = document.querySelector('body #main .container .btnArtDispal');
const btnSearch = document.querySelector('body #header .navBar .contentRight .buttons .btnSearch');

// event for inp search
const inpSearch = document.querySelector('body #header .navBar .contentRight .buttons .inpSearch');
inpSearch.addEventListener('keyup',function(){
    inpSearch.value = inpSearch.value.trimStart();
    inpSearch.value = inpSearch.value.trimEnd();
    if(inpSearch.value == ''){
        btnSearch.click();
        articles[articles.length-1].style.setProperty('display','none');
    };
});

Total
// function for calcul Total price
function Total(){
    const productsCart = document.querySelector('body #boxsProducts .productsCart');
    let totalPrice = 0;
    for(let x = 0;x<productsCart.childElementCount;x++){
        let price = productsCart.children[x].children[1].children[3].textContent.slice(0,-1);
        let count = Number(productsCart.children[x].children[1].children[5].value);
        totalPrice += price*count;
    }
    const total = document.querySelector('body #boxsProducts .cartBox .contentBottom .priceTotal');
    total.textContent ='Total: '+totalPrice+'$';
    return totalPrice;
}

// event for inputCount and remove product from cart
let arrMatricule = [];
function eventInputRemove(){
    const productsCart = document.querySelector('body #boxsProducts .productsCart');
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
            let numMatricule =  Number(removeProduct[w].parentElement.getAttribute('matricule'));
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
}

// event for btn search

btnSearch.addEventListener('click',function(){
    
    const section = document.querySelectorAll('body #main .container .article .section');
    const BoxProductsSearch = document.querySelector('body #main .container .BoxProductsSearch');
    const productsCart = document.querySelector('body #boxsProducts .productsCart');
    let conteurSearch = 0;
    if(inpSearch.value.trim().length != 0){
        for(let i = 0;i<articles.length;i++){
            // articles[i].children[0].style.setProperty('display','none');
            articles[i].style.setProperty('display','none');
        };
        btnArtDispal.style.setProperty('display','none');
        BoxProductsSearch.style.setProperty('display','flex');
        
        // remove last boxs search
        for(let i = BoxProductsSearch.childElementCount-1;i>=0;i--){
            BoxProductsSearch.children[i].remove();
        }
        // add box to BoxProductsSearch
        for(let i = 0;i<section.length;i++){
            for(let x = 0;x<section[i].children.length;x++){
                for(let y = 0;y<2;y++){
                    let result = section[i].children[x].children[1].children[y].textContent;
                    result = result.toLocaleLowerCase();
                    if(result.search(inpSearch.value.toLocaleLowerCase()) > -1){
                        BoxProductsSearch.appendChild(section[i].children[x].cloneNode(true));
                        conteurSearch++;
                        break;
                    }
                }
            }
        }

        // display all boxs in BoxProductsSearch
        for(let i = 0;i<BoxProductsSearch.childElementCount;i++){
            BoxProductsSearch.children[i].style.setProperty('display','block');
        };

        // const boxsProducts = document.querySelector('body #boxsProducts');
        // for(let i = 0;i<boxsProducts.childElementCount;i++){
        //     boxsProducts.children[i].style.setProperty('display','block');
        // };

        // add event listner for box 'add to cart'
        const btnAddCart  = document.querySelectorAll('body #main .container .BoxProductsSearch .box .about .btnAddCart');
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
                    eventInputRemove();
                };
            });
        }
        const contentRight = document.querySelector('body #header .navBar .contentRight').classList.remove('displayContentRight');
        // inpSearch.value = '';
    }
    if(conteurSearch == 0 && inpSearch.value.trim().length > 0){ //if no result input search
        BoxProductsSearch.style.setProperty('display','flex');
        BoxProductsSearch.innerHTML = `<div class="noResult">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140" height="140"><defs><path id="a" d="M51.92 76.2c0 1.19.14 2.37.4 3.52 2.75-6.59 9.84-11.28 18.15-11.28 9.35 0 17.16 5.93 18.97 13.82.8-1.92 1.21-3.98 1.21-6.06 0-9.57-8.67-17.33-19.36-17.33-10.7 0-19.37 7.76-19.37 17.33z"/><path id="b" d="M87.17 33.46a9.05 9.05 0 0 0-7.93 8.96l.01.46h-.01l.54 9.42 6.4-1.05c2.33.55 4.79.15 6.82-1.12l7.39-1.2-3.4-8.69a8.98 8.98 0 0 0-9.83-6.78z"/><path id="c" d="M90.06 45.77a16.76 16.76 0 0 0-14.22 16.6c0 .5.02 1 .06 1.47l-.06.02 2.11 23.5a19.75 19.75 0 0 0 21.32 19.35 19.8 19.8 0 0 0 18.13-19.75 19.86 19.86 0 0 0-2-8.72l-6.92-20.77a16.64 16.64 0 0 0-18.42-11.7z"/><path id="d" d="M32.8 57.47l-7.23 20.76a19.6 19.6 0 0 0-1.53 4.42 19.94 19.94 0 0 0 6.14 19.24 19.63 19.63 0 0 0 19.72 3.85A19.83 19.83 0 0 0 62.75 90.2v-.02c.13-.77.2-1.54.24-2.32l2.45-24-.06-.02a16.76 16.76 0 0 0-14.16-18.07 16.7 16.7 0 0 0-18.42 11.7z"/><path id="e" d="M23.56 87.65c0 10.58 8.86 19.17 19.79 19.17s19.79-8.59 19.79-19.17c0-10.6-8.86-19.18-19.8-19.18-10.92 0-19.78 8.59-19.78 19.18z"/><path id="f" d="M77.82 87.65c0 10.58 8.86 19.17 19.79 19.17s19.79-8.59 19.79-19.17c0-10.6-8.86-19.18-19.79-19.18s-19.79 8.59-19.79 19.18z"/><path id="g" d="M84.75 87.65c0 6.88 5.76 12.46 12.86 12.46s12.86-5.58 12.86-12.46c0-6.89-5.76-12.47-12.86-12.47s-12.86 5.58-12.86 12.47z"/><path id="h" d="M97.61 75.18c-7.1 0-12.86 5.58-12.86 12.47 0 3.28 1.33 6.43 3.68 8.72l17.83-17.95a13.04 13.04 0 0 0-8.6-3.24h-.05z"/><path id="i" d="M43.35 75.18c-7.1 0-12.87 5.58-12.87 12.47a12.27 12.27 0 0 0 3.68 8.72L52 78.42a13.04 13.04 0 0 0-8.6-3.24h-.04z"/></defs><use fill="#D17511" xlink:href="#a"/><use fill="#FFB048" xlink:href="#b"/><path fill="#FFB048" d="M61.66 42.42a9.02 9.02 0 0 0-17.77-2.18l-3.38 8.69 7.38 1.2a8.96 8.96 0 0 0 6.83 1.12l6.4 1.05.54-9.42v-.46"/><use fill="#F90" xlink:href="#c"/><use fill="#F90" xlink:href="#d"/><use fill="#D17511" xlink:href="#e"/><use fill="#D17511" xlink:href="#f"/><use fill="#F5F5F5" xlink:href="#g"/><use fill="#C9C9C9" xlink:href="#h"/><path fill="#F5F5F5" d="M43.35 100.1c7.1 0 12.86-5.57 12.86-12.45 0-6.89-5.76-12.47-12.86-12.47s-12.86 5.58-12.86 12.47c0 6.88 5.75 12.46 12.86 12.46"/><use fill="#C9C9C9" xlink:href="#i"/></svg>
                                        <h2 class="-pvs -fs16 -m">There are no results for “<span>asdfgsdfdsdf</span>”.</h2>
                                        <p>- Check your spelling for typing errors
                                        - Try searching with short and simple keywords
                                        - Try searching more general terms - you can then filter the search results</p>
                                        <a class="btnGoToHome" href="#">Go to homepage</a>
        </div>`;
        const noResult = document.querySelector('body #main .container .BoxProductsSearch > .noResult'); 
        noResult.children[1].children[0].textContent = inpSearch.value;
        const btnGoToHome = noResult.querySelector('.btnGoToHome');
        btnGoToHome.addEventListener('click',function(){
            inpSearch.value= '';
            btnSearch.click();
        });
    }
    else if(inpSearch.value.trim().length == 0){
        BoxProductsSearch.style.setProperty('display','none');
        for(let i = 0;i<articles.length;i++){
            if(i == articles.length-1){articles[i].style.setProperty('display','none');continue;}
            articles[i].style.setProperty('display','block');
        };
        btnArtDispal.style.setProperty('display','block');
        btnArtDispal.textContent = 'More Products';
    }
});
