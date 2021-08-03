import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Book from '@/components/book.vue';


Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes : [
        { path : '/', component: Home},
        { path : '/:bookId', component: Book, props:true}
    ]
});