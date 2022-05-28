// app_15

//  add event for filter product
// const filterProducts = document.querySelectorAll('body #main .container .article .title .content_Left .filterProducts');
for(let i = 0;i<filterProducts.length;i++){
    // event for filter Date
    filterProducts[i].addEventListener('change',function(){
        // event for filter date
        if(filterProducts[i].selectedIndex == 1){
            (function(){  
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
            }());
        }
        // event for filter top to bottom
        if(filterProducts[i].selectedIndex == 2){
            (function(){
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
            }());
        }
        // event for filter bottom to top
        if(filterProducts[i].selectedIndex == 3){
            (function(){
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
            }());
        }
    });
};
