<template>
    <Container class="user-details">
        <Loading v-if="isLoading" />
        <Notfound v-else-if="!login" />
        <Token v-else class="user">
            <UserPic :src="avatarUrl" alt="Foto do Usuário" />
            <Nickname>{{ login }}</Nickname>
            <Github :href="htmlUrl" target="_blank">Github</Github>
            <NumRep>Repositorios: {{ publicRepos }}</NumRep>
            <FollowCont>
                <Follow>Seguidores: {{ followers }}</Follow>
                <Follow>Seguindo: {{ following }}</Follow>
            </FollowCont>
        </Token>
    </Container>
</template>

<script>
import { mapActions } from 'vuex';
import Loading from '../loading/loading.vue';
import Notfound from '../notFound/notFound.vue';

import * as S from './UserDetails';

export default {
    props: ['id'],
    data() {
        return {
            isLoading: true,
        };
    },
    components: {
        Notfound,
        Loading,
        Container: S.Container,
        Token: S.Token,
        Nickname: S.Nickname,
        UserPic: S.UserPic,
        Github: S.Github,
        NumRep: S.NumRep,
        Follow: S.Follow,
        FollowCont: S.FollowCont,
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
