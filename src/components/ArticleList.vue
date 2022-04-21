<template>
  <div>
    <LoaderBlock v-if="loading" />
    <ul class="list" v-else-if="articles.length">
      <MyArticle 
          v-for="(article, i) in articles" 
          :article="article" 
          :key="article.id" 
          v-bind:style="isPublished(i)"
          @change-status="changeStatus"
          >
      </MyArticle>
    </ul>
    <p v-else>Статей сейчас нет.</p>
  </div>
</template>

<script>
import MyArticle from "./MyArticle.vue";
import LoaderBlock from './Loader.vue'
export default {
  name: "ArticleList",
  props: {
    msg: String,
  },
  components: {
    MyArticle, 
    LoaderBlock
  },
  data() {
    return {
      loading: true,
      published: this.published,
      articles: []
    };
  },
  beforeMount: function() {
      fetch('./db.json')
        .then(response => response.json())
        .then(articles => {
          setTimeout(() => {
              this.articles = articles
              this.loading = false
            }, 1000)
          });
        console.log('Fetch data');
  },
  methods: {
    addArticle: function(article) {
      let newArticle = {
        id: this.articles.length + 1,
        title: this.title,
        body: this.body,
        published: this.published,
        author: this.author
      }
      this.articles.push(newArticle);
      console.log(article.title);
    },
    isPublished: function (i) {
      console.log(this.published);
      console.log(this);
      if (this.articles[i].published) return "";
      else return "background-color: rgb(88,88,88);";
    },
    changeStatus(id){
      this.articles[id].published = !this.articles[id].published;
      this.published = this.articles[id].published
    },
  },
  watch: {
    published(newVal){
      console.log(`Статус статьи изменён на ${newVal}`)
    }
  }
};
</script>

<style scoped>
@import url("../assets/styles/fonts.css");
@import url("../assets/styles/articlelist.css");
</style>