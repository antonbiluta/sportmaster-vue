<template>
  <div class="container">
    <div class="article-generation">
        <div class="logo">
            <img src="../assets/Group 2 (2).png" alt="">
        </div>
        <div class="forms">
      <input v-model="title" type="text" placeholder="Название" />
      <input v-model="author" type="text" placeholder="Автор" />
      <input v-model="body" type="text" placeholder="Описание" />
        <input v-model="published" type="checkbox" class="checkbox" id="pub"/>
        <label for="pub">Опубликовать</label>
      <button class="btn" @click="addArticle()">Создать статью</button>
      </div>
    </div>
    <ul class="list" v-if="articles.length">
      <MyArticle
        v-for="(article, i) in articles"
        :article="article"
        :key="article.id"
        v-bind:style="isPublished(i)"
      />
    </ul>
    <p v-else></p>
  </div>
</template>

<script>
import MyArticle from "./MyArticle.vue";
export default {
  name: "ArticleList",
  props: {
    msg: String,
  },
  components: {
    MyArticle,
  },
  data() {
    return {
      title: "",
      author: "",
      body: "",
      published: true,
      articles: [],
    };
  },
  beforeMount: function() {
      fetch('./db.json')
        .then(response => response.json())
        .then(articles => this.articles = articles);
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
      console.log(newArticle)
      this.articles.push(newArticle);
      console.log(article.title);
    },
    isPublished: function (i) {
      console.log(this.published);
      console.log(this);
      if (this.articles[i].published) return "";
      else return "background-color: rgb(88,88,88);";
    },
    changePublished(){
    }
  },
};
</script>

<style scoped>
@import url("../assets/styles/fonts.css");
@import url("../assets/styles/articlelist.css");
</style>