// app_15

// event for display nav bar 'humbrger'
const humbrger = document.querySelector('body #header .navBar .humbrger');
humbrger.onclick = function(){
    const contentRight = document.querySelector('body #header .navBar .contentRight');
    contentRight.classList.toggle('displayContentRight');
}