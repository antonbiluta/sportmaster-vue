<template >
  <div class="main" :style="{ fontWeight: fondAuthor }">

      <div class="name">{{article.title}}</div>

      <div class="author">Автор: <span>{{toUpper}}</span></div>

      <div class="body">{{article.body}}</div>

      <div class="id"><span>#</span>{{article.id}}</div>

      <router-link :to="{name:'ArticlePage',params:{id:article.id}}" class="btn">Подробнее</router-link>

      <ArticlePublishedButton 
      class="btn" 
      @click="$emit('change-status', article.id-1)"
      >
        <span v-if="article.published" slot="value">Снять с публикации</span>
        <span v-else slot="value">Опубликовать</span>
      </ArticlePublishedButton>

  </div>
</template>

<script>
export default {
  name: "MyArticle",
  props: {
    article: Object
  },
  methods:{
    changeStatus(){
      this.$emit('change-status', this.id-1)
    }
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