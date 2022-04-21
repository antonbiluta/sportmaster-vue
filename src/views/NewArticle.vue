<template>
    <ArticleForm title="New title" body="" author="" isPublished=""
    v-on:add-article="addArticle" />
</template>

<script>
import store from '@/store'
export default {
    name: 'NewArticle',
    methods: {
        addArticle: function(article) {
            let newArticle = {
                id: store.state.articles.length + 1,
                ...article
            }
            store.commit('addArticle', newArticle);
            console.log(article.title);
            this.$router.push('/')
        }
    }
}
</script>
