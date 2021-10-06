<template>
    <div class="user-details">
        <h1>{{ login }}</h1>
        <img :src="avatarUrl" alt="" />
        <a :href="htmlUrl" target="_blank">Github</a>
        <h2>Repositorios: {{ publicRepos }}</h2>
        <h3>Seguidores: {{ followers }}</h3>
        <h3>Seguindo: {{ following }}</h3>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['id'],
    methods: {
        ...mapActions(['getUserData']),
    },
    computed: {
        login() {
            return this.$store.getters.login;
        },
        avatarUrl() {
            return this.$store.getters.avatarUrl;
        },
        htmlUrl() {
            return this.$store.getters.htmlUrl;
        },
        publicRepos() {
            return this.$store.getters.publicRepos;
        },
        followers() {
            return this.$store.getters.followers;
        },
        following() {
            return this.$store.getters.following;
        },
    },
    created() {
        this.getUserData(this.id);
    },
};
</script>

<style></style>
