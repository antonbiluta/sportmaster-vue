<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/Group 2 (2).png" alt="">
        </div>
        <div>
            <router-link class="link" to="/">Главная</router-link>
            <router-link class="link" to="/about">О нас</router-link>
            <router-link class="link" to="/new">Добавить статью</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "HeaderShrader",
  props: {
      block: Object
  }
};
</script>

<style scoped>
@import '@/assets/styles/fonts.css';

.header {
    background-color: #1551e5;
    height: 72px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-around;
}

.link {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .5px;
    color: white;
    font-size: 12px;
    font-family: 'GothamProMedium';
    font-stretch: normal;
    font-weight: 500;
    margin: 0 15px;
}

.logo{
    width: 250px;
    margin-left: 50px;
}
.logo img{
    width: 100%;
}
</style>