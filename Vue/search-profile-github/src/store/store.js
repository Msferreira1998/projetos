import Vue from 'vue';
import Vuex from 'vuex';
import api from '../assets/services/config';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserData: {},
        repos: {},
    },
    getters: {
        login(state) {
            return state.UserData.login;
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
        saveUserRepos(state, payload) {
            state.repos = payload;
        },
    },
    actions: {
        async getUserData(context, payload) {
            try {
                const user = await api.get(`/${payload}`);
                const repos = await api.get(`/${payload}/repos`);
                context.commit('saveUserData', user.data);
                context.commit('saveUserRepos', repos.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
});