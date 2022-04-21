<template>
    <div>
        {{article.title}}

        Автор

        Текст
    </div>
</template>

<script>
export default {
    name: 'ArticlePage',
    data() {
        return {
            article: this.$route.params
        }
    },
    created() {
        this.article = this.$route.params
    },
    checkData :function(){
        console.log(this.$route.params)
    }
}
    
</script>

<style scoped>

</style>