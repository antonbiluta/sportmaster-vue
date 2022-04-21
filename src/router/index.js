import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NewArticle from '../views/NewArticle.vue'
import Article from '../views/ArticlePage.vue'
import store from '@/store'

import Error404 from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: () => import('@/views/AboutPage.vue')
    },
    {
        path: '/article/:id',
        name: 'ArticlePage',
        component: Article,
        props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    },
    {
        path: '/new',
        name: 'Add new article',
        component: NewArticle
    },
    {
        path: "/error",
        alias: "/*",
        components: {render: (h) => h(Error404)}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router