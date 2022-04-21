import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArticlePublishedButton from './components/ArticlePublishedButton.vue'

Vue.component('ArticlePublishedButton', ArticlePublishedButton)

Vue.config.productionTip = false

store.dispatch('fetchArticles');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
