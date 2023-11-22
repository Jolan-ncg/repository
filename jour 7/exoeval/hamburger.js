let menu = document.querySelector('.list-nav')
let btn = document.querySelector('.hamburgermenu')

btn.addEventListener('click', function () {
    /* sur la variable btn ecoute l'evenement click */ menu.classList.toggle(
        'list-nav-active'
    )
})
