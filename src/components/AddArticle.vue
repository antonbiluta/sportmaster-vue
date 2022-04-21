<template>
    <form>
        <input v-model="title" type="text" placeholder="Название" />
        <input v-model="author" type="text" placeholder="Автор" />
        <input v-model="body" type="text" placeholder="Описание" />
        <input v-model="published" type="checkbox" class="checkbox" id="pub"/>
        <label for="pub">Опубликовать</label>
        <button class="btn" @click="addArticle()">Создать статью</button>
    </form>
</template>