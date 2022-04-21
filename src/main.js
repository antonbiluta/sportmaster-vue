import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArticlePublishedButton from './components/ArticlePublishedButton.vue'

Vue.component('ArticlePublishedButton', ArticlePublishedButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
