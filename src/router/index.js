import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NewArticle from '../views/NewArticle.vue'
import Article from '../components/MyArticle.vue'
import store from '@/store'

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
        component: Article,
        props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    },
    {
        path: '/new',
        name: 'Add new article',
        component: NewArticle
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router