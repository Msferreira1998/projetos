<template>
    <div class="user-details">
        <div v-if="isLoading" class="loading">Carregando</div>
        <Notfound v-else-if="!login" />
        <div v-else class="user">
            <h1>{{ login }}</h1>
            <img :src="avatarUrl" alt="" />
            <a :href="htmlUrl" target="_blank">Github</a>
            <h2>Repositorios: {{ publicRepos }}</h2>
            <h3>Seguidores: {{ followers }}</h3>
            <h3>Seguindo: {{ following }}</h3>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Notfound from '../notFound/notFound.vue';
export default {
    props: ['id'],
    data() {
        return {
            isLoading: true,
        };
    },
    components: {
        Notfound,
    },
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
    async beforeMount() {
        await this.getUserData(this.id);
        this.isLoading = false;
    },
};
</script>

<style></style>
