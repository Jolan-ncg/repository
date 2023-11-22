let menu = document.querySelector('.left-menu')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    console.log('click')
    /* sur la variable btn ecoute l'evenement click */
    menu.classList.toggle('left-menu-active')
})
