<template>
    <div class="user-details container">
        <loading v-if="isLoading" />
        <not-found v-else-if="!login" />
        <div v-else class="user token">
            <div class="side1">
                <img class="user-pic" :src="avatarUrl" alt="Foto do Usuário" />
            </div>
            <div class="side2">
                <h1 class="name">{{ name }}</h1>
                <div class="details">
                    <h2 class="num-rep">Repositorios: {{ publicRepos }}</h2>
                    <h2 class="follow">Seguidores: {{ followers }}</h2>
                    <h2 class="follow">Seguindo: {{ following }}</h2>
                    <div class="github-cont">
                        <Github />
                        <a class="github-link" :href="htmlUrl" target="_blank">
                            {{ login }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import loading from './loading.vue';
import notfound from './not-found.vue';
import Github from 'vue-material-design-icons/Github.vue';

export default {
    props: ['id'],
    data() {
        return {
            isLoading: true,
        };
    },
    components: {
        NotFound: notfound,
        loading: loading,
        Github: Github,
    },
    methods: {
        ...mapActions(['getUserData']),
    },
    computed: {
        login() {
            return this.$store.getters.login;
        },
        name() {
            return this.$store.getters.name;
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
    async created() {
        await this.getUserData(this.id);
        this.isLoading = false;
    },
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.side2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.token {
    width: min(750px, 100%);
    padding: 50px;
    background-color: $ComplementarColor;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 20px -3px #000000;
    box-shadow: 0px 3px 20px -3px #000000;
}

.user-pic {
    border-radius: 100px;
    width: 200px;
}

.name {
    text-align: center;
    font-size: 40px;
    padding: 20px 0;
    color: $TextColor;
}

.github-cont {
    margin-top: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    color: $SecondaryColor;
    padding: 10px;
}

.github-link {
    margin-left: 10px;
    text-decoration: none;
    color: $SecondaryColor;
    font-size: 15px;

    &:hover {
        color: $PrimaryColor;
    }
}

.num-rep {
    font-size: 15px;
    color: $TextColor;
}

.follow {
    font-size: 15px;
    color: $TextColor;
}
</style>
