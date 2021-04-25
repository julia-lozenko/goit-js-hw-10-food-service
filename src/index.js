import './styles.css';
import renderItems from './single-item.hbs';

const context = require('./menu.json');
document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', renderItems(context));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem("theme") === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    themeSwitchRef.checked = true;
}

themeSwitchRef.addEventListener('change', e => {
    if(e.target.checked) {
        bodyRef.classList = Theme.DARK;
        localStorage.setItem("theme", Theme.DARK);
    } else {
        bodyRef.classList = Theme.LIGHT;
        localStorage.setItem("theme", Theme.LIGHT);
    }
});
