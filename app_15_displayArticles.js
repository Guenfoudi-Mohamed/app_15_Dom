// app_15

const articles = document.querySelectorAll('body #main .container .article');
// event for last article
articles[articles.length-1].style.setProperty('display','none');

// event for button display article 
const btnArtDispal = document.querySelector('body #main .container .btnArtDispal');
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
// const section = document.querySelectorAll('body #main .container .article .section');
const allProducts = document.querySelectorAll('body #main .container .article .title > a');
const filterProducts = document.querySelectorAll('body #main .container .article .title .content_Left .filterProducts');
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