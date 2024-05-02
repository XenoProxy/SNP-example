import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './components/App.vue';
import About from './components/About.vue';
import Supply from './components/Supply.vue';
import Catalog from './components/Catalog.vue';
import Contacts from './components/Contacts.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/',
        components: {
          About,
          Supply,
          Catalog,
          Contacts
        }, 
      },
  ]
});

const app = createApp(App);
// app.component('app-component', App);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.use(router);
app.mount('#app');
