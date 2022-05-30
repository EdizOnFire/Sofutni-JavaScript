import { eventListeners } from './home.js';

eventListeners();

export function hideContent() {
    const containerElement = document.querySelector(".container");
    for (const section of containerElement.children) {
        section.style.display = 'none';
    }
}