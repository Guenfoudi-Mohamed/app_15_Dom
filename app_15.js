// app_15

// event for display nav bar 'humbrger'
const humbrger = document.querySelector('body #header .navBar .humbrger');
humbrger.onclick = function(){
    const contentRight = document.querySelector('body #header .navBar .contentRight');
    contentRight.classList.toggle('displayContentRight');
}

const articles = document.querySelectorAll('body #main .article');
const allProducts = document.querySelectorAll('body #main .article .title > a');
const btnArtDispal = document.querySelector('body #main .btnArtDispal');
const section = document.querySelectorAll('body #main .article .section');
const filterProducts = document.querySelectorAll('body #main .article .title .content_Left .filterProducts');

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
            if(i == allProducts.length-1){
                btnArtDispal.textContent = 'More Products';
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
        const dateProduct = section[i].querySelectorAll('body #main .article .section .box .about .date .dateProduct');
        for(let x = 0;x<section[i].childElementCount;x++){
            arr.push(dateProduct[x].textContent);
        }
        console.log(arr);
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
        console.log(boxs);
        console.log(arr);
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
        const price = section[i].querySelectorAll('body #main .article .section .box .about .price');
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
        const price = section[i].querySelectorAll('body #main .article .section .box .about .price');
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


// ================= event for images random
const arrImages0 = ['images/al1.jpg','images/al2.jpg','images/al3.jpg','images/al4.jpg','images/al5.jpg','images/al6.jpg','images/p1.jpg','images/p2.jpg'];
const arrImages1 = ['images/food_1.jpg','images/food_2.jpg','images/food_3.jpg','images/food_4.jpg','images/food_5.jpg','images/food_6.jpg','images/food_7.jpg','images/food_8.jpg'];
const arrImages2 = ['images/phone_1.jpg','images/phone_2.jpg','images/phone_3.jpg','images/phone_4.jpg','images/phone_5.jpg','images/phone_6.jpg','images/phone_7.jpg','images/phone_8.jpg'];
const prices = ['31$','21$','19$','1000$','6$','500$','1400$','10$','144$','5$','200$','99$','222$','11$'];

function funYear(){return Math.floor(Math.random() * 23);};
for(let x =0;x<section.length;x++){
    switch(x){
        case 0:
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
                // section[x].children[y].style.setProperty('order',y);
            };
            break;
        case 1:
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
                // section[x].children[y].style.setProperty('order',y);
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
                // section[x].children[y].style.setProperty('order',y);
            };
            break;
    };
}
