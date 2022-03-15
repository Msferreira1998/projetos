import http from 'src/boot/http';

export async function getUsers({ commit }, payload) {
  const { data } = await http.getUsersList(payload);
  commit('SET_USERS_LIST', data.items);
}

export async function getUserPage({ commit }, payload) {
  const { data } = await http.getUserPage(payload);
  commit('SET_USER_PAGE', data);
}

export async function getUserRepos({ commit }, payload) {
  const { data } = await http.getUserRepos(payload);
  commit('SET_USER_REPOS', data);
}
