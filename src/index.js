
import './styles.css'
import { pageLoad } from './pageload.js'
import { menu } from './menu.js'
import { contact } from './contact.js'


pageLoad();

const buttons = document.querySelectorAll('button')

document.addEventListener('DOMContentLoaded', () => {
    const array = [menu, pageLoad, contact]
    buttons.forEach((element, index) => {
        element.addEventListener('click', () => {
            const section = document.querySelector('section')
            section.remove();
            array[index]();
        });
    });
});


