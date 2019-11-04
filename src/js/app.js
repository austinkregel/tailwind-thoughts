import Vue from 'vue';
import boot from './bootstrap'

const { router } = boot(Vue);

window.Vue = Vue;

const app = new Vue({
    router,
    el: '#app'
})