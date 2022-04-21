<template>
        <button v-on:click.prevent="$emit('click', $event.target.value)">
          <slot name="value"></slot>
        </button>
</template>

<script>
export default {
  name: "ArticlePublishedButton",
  props: {
    article: Object,
  },
  computed: {
      
  },
};
</script>

<style scoped>
@import '../assets/styles/fonts.css';

button{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  border-radius: 0;
  background: transparent;
  display: inline-block;
  font-family: 'GothamProMedium';
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  margin: 8px 8px 0 0;
  transition: 0.25s;
}

button:active{
  transform: scale(0.95);
}
</style>