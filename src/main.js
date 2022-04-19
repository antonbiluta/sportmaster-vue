import Vue from 'vue'
import App from './App.vue'
import ArticlePublishedButton from './components/ArticlePublishedButton.vue'

Vue.component('ArticlePublishedButton', ArticlePublishedButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
