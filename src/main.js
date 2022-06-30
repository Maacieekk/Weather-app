import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

function appli()
 {
  const applikacja = document.querySelector('.aplikacja');
  applikacja.id = "app";
console.log(applikacja.id+" str ")
  createApp(App).mount('#app');
}

