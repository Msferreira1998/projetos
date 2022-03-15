import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getUsersList = (user) => github.get(`/search/users?q=${user}&per_page=6`);

const getUserPage = (user) => github.get(`/users/${user}`);

const getUserRepos = (user) => github.get(`/users/${user}/repos`);

export default {
  getUsersList,
  getUserPage,
  getUserRepos,
};
