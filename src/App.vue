<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "App",
  components: {
    Header
    },
  computed: {
    is404() {
      return this.$route.name === '404';
    }
  }
};
</script>

<style>
*{
  margin: 0;
}
</style>

