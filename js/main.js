const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const menu = document.querySelector('.navbar')

openBtn.addEventListener('click', () => {
    menu.classList.add('active')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    menu.classList.remove('active')
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeMenu)


