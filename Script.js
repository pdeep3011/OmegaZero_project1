

const tonggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.tonggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')

tonggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'ri-menu-3-xmark'
    : 'ri-menu-3-line'
}