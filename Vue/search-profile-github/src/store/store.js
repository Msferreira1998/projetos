import Vue from 'vue';
import Vuex from 'vuex';
import api from '../assets/services/config';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserData: {},
    },
    getters: {
        login(state) {
            return state.UserData.login;
        },
        name(state) {
            return state.UserData.name;
        },
        avatarUrl(state) {
            return state.UserData.avatar_url;
        },
        htmlUrl(state) {
            return state.UserData.html_url;
        },
        publicRepos(state) {
            return state.UserData.public_repos;
        },
        followers(state) {
            return state.UserData.followers;
        },
        following(state) {
            return state.UserData.following;
        },
    },
    mutations: {
        saveUserData(state, payload) {
            state.UserData = payload;
        },

        destroyUserData(state, payload) {
            state.UserData = payload;
        },
    },
    actions: {
        async getUserData(context, payload) {
            context.commit('destroyUserData', {});
            try {
                const user = await api.get(`/${payload}`);
                context.commit('saveUserData', user.data);
                return;
            } catch (e) {
                console.log(e.response.status);
            }
        },
    },
});
