import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: []
    },
    mutations: {
        fetchArticles(state, articles) {
            state.articles = articles;
        },
        addArticles(state, article){
            state.articles.push(article);
        }
    },
    actions: {
        fetchArticles(context) {
            fetch('/db.json')
            .then(response => response.json())
            .then(articles => context.commit('fetchArticles', aricles));
            console.log('Fetch data');
        }
    },
    modules: {
    }
})