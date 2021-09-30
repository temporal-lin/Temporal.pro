const open_btn = document.querySelector('.Open-Btn')
const close_btn = document.querySelector('.Close-Btn')
const nav = document.querySelectorAll('.Navi')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})