import './style.css'

const buttons = document.querySelectorAll<HTMLButtonElement>('#filterbtn button');


const items = document.querySelectorAll<HTMLElement>('.item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    items.forEach(item => {
      const itemCategory = item.dataset.category;

      if (category === 'all' || category === itemCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});



const toggle = document.getElementById("Dropdown-toggle")
const menu = document.getElementById("Dropdown-menu")
toggle?.addEventListener('click', ()=> {
    menu?.classList.toggle('hidden');
});
