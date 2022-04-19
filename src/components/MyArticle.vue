<template >
  <div class="main" :style="{ fontWeight: fondAuthor }">
      <div class="name">
          {{article.title}}
      </div>
      <div class="author">
          Автор: <span>{{article.author}}</span>
      </div>
      <div class="body">
          {{article.body}}
      </div>
      <div class="id">
          <span>#</span>{{article.id}}
      </div>

      <ArticlePublishedButton class="btn"/>

  </div>
</template>

<script>
export default {
  name: "MyArticle",
  data() {
    return { fontWeight: "bold" };
  },
  props: {
    article: Object,
  },
  computed: {
    fondAuthor() {
      if (this.article.published) return "bold";
      else return "normal";
    },
    toUpper() {
      return this.article.author.toUpperCase()
    },
  },
};
</script>

<style  scoped>
@import "../assets/styles/fonts.css";
@import "../assets/styles/myarticle.css";

.btn {
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.35);
}
</style>