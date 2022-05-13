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




// ================= event for images random
const arrImages0 = ['images/al1.jpg','images/al2.jpg','images/al3.jpg','images/al4.jpg','images/al5.jpg','images/al6.jpg','images/p1.jpg','images/p2.jpg'];
const arrImages1 = ['images/food_1.jpg','images/food_2.jpg','images/food_3.jpg','images/food_4.jpg','images/food_5.jpg','images/food_6.jpg','images/food_7.jpg','images/food_8.jpg'];
const arrImages2 = ['images/phone_1.jpg','images/phone_2.jpg','images/phone_3.jpg','images/phone_4.jpg','images/phone_5.jpg','images/phone_6.jpg','images/phone_7.jpg','images/phone_8.jpg'];
const prices = ['31$','21$','19$','1000$','6$','500$','1400$','10$','144$','5$','200$','99$','222$','11$'];

for(let x =0;x<section.length;x++){
    switch(x){
        case 0:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages0[Math.floor(Math.random() * arrImages0.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    function funYear(){return Math.floor(Math.random() * 23);};
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
            };
            break;
        case 1:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages1[Math.floor(Math.random() * arrImages1.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    function funYear(){return Math.floor(Math.random() * 23);};
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
            };
            break;
        case 2:
            for(let y = 0;y<section[x].children.length;y++){
                section[x].children[y].children[0].style.cssText = `background-image: url(${arrImages2[Math.floor(Math.random() * arrImages2.length)]});`;
                section[x].children[y].children[1].children[3].textContent = `${prices[Math.floor(Math.random() * prices.length)]}`;
                let year;
                for(let w = 0;w<1;w++){
                    function funYear(){return Math.floor(Math.random() * 23);};
                    year = funYear();
                    if(year <= 16){
                        w=-1;
                    }
                    else{break;}
                }
                let day =  Math.ceil(Math.random() * 29);if(day<10){day='0'+day;}
                let month =  Math.ceil(Math.random() * 12);if(month<10){month='0'+month;}
                section[x].children[y].children[1].children[2].children[1].textContent = `${day}-${month}-20${year}`;
            };
            break;
    };
}

// for(let i = 0;i<allProducts.length;i++){
    // allProducts[i].addEventListener('click',function(){
    //     if(allProducts[i].textContent != 'Back'){
    //         for(let x = 0;x<articles.length;x++){
    //             if(i==x){
    //                 articles[x].style.setProperty(`display`,`block`);
    //                 for(let y = 0;y<articles[x].childElementCount;y++){
    //                     articles[x].children[y].style.setProperty(`display`,`flex`);
    //                 };
    //                 // dispaly children element second products
    //                 for(let y = 4;y<articles[i].children[1].children.length;y++){
    //                     articles[i].children[1].children[y].style.setProperty('display','block');
    //                 }
    //                 allProducts[x].textContent = 'Back';
    //                 if(x==articles.length-1){
    //                     articles[x].parentElement.insertBefore(articles[x],btnArtDispal);
    //                 };
    //                 btnArtDispal.textContent = 'More Products';//Note
    //                 filterProducts[x].style.setProperty('display','inline-block');
    //             }
    //             else if(i!=x){
    //                 articles[x].style.setProperty(`display`,`none`);
    //             };
    //         };
    //     }
    //     else if(allProducts[i].textContent == 'Back'){
    //         for(let x = 0;x<articles.length;x++){
    //             if(x!=(articles[x].childElementCount-1)){
    //                 articles[x].style.setProperty(`display`,`block`);
    //                 for(let y = 0;y<articles[x].childElementCount;y++){
    //                     articles[x].children[articles[x].children.length-1].style.setProperty('display','none');
    //                 };
    //                 allProducts[i].textContent = 'All Products';
    //             }
    //             else{
    //                 articles[x].style.setProperty(`display`,`none`);
    //                 allProducts[i].textContent = 'All Products';
    //                 btnArtDispal.textContent = 'More Products';
    //                 // articles[x].children[articles[x].children.length-1].style.setProperty('display','none');
    //                 for(let y = 0;y<allProducts.length;y++){
    //                     if(allProducts[y].textContent == 'Back'){
    //                         allProducts[y].textContent = 'All Products';
    //                     };
    //                 };
    //                 for(let y = 4;y<articles[i].children[1].children.length;y++){
    //                     articles[i].children[1].children[y].style.setProperty('display','none');
    //                 }
    //             };
    //             filterProducts[x].style.setProperty('display','none');
    //         }
    //     }
    // });
// };



