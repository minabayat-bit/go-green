import './style.css'


const toggle = document.getElementById("Dropdown-toggle")
const menu = document.getElementById("Dropdown-menu")
toggle?.addEventListener('click', ()=> {
    menu?.classList.toggle('hidden');
});
