/* eslint-disable no-unused-vars */
import http from 'src/boot/http';

export async function getUsers({ commit }, payload) {
  const { data } = await http.getUsersList(payload);
  commit('SET_USERS_LIST', data.items);
}

export function clearUsersList({ commit }) {
  commit('SET_USERS_LIST', null);
}

export async function getUserPage({ commit }, payload) {
  const { data } = await http.getUserPage(payload);
  commit('SET_USER_PAGE', data);
}
