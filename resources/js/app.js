
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

// Include and configure Axios for making ajax requests
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let Laravel = {
    csrfToken: document.head.querySelector("[name~=csrf-token]").content
};

if (Laravel.csrfToken) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vuex Store
import store from './store';

// Views
Vue.component('mandolin-fretboard', require('./views/MandolinFretboard.vue'));

const app = new Vue({
    store,
    el: '#app'
});
