let clickMenu = document.querySelector('.hamburger');
const eco = document.querySelector('.eco');
const eco1 = document.querySelector('.eco1');
const menu = document.querySelector('.lits');


clickMenu.addEventListener('click', ()=>{
    menu.classList.toggle('mnu2');
    eco.classList.toggle('cor')
    eco1.classList.toggle('cor1')

    // console.log('e dey click');
})