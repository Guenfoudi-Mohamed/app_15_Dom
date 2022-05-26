// app_15

// ================= event for images, prices, date 'random'
const section = document.querySelectorAll('body #main .container .article .section');
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