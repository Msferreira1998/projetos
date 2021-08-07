import React, { useState, useContext } from 'react';
import { context } from '../../Context';
import { useHistory } from 'react-router-dom';
import * as styles from './styles';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

function Navbar() {
  const [getUser, setGetUser] = useState();

  const ctx = useContext(context);
  const history = useHistory();

  function redirect(route) {
    history.push(route);
  }

  async function getUserData() {
    try {
      const user = await api.get(`/${getUser}`);
      const repos = await api.get(`/${getUser}/repos`);
      await ctx.setUserData(user.data);
      await ctx.setRepos(repos.data);
      redirect('/user');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <styles.NavContainer>
      <styles.NavLogo>GitHub Profile Search</styles.NavLogo>
      <div>
        <styles.NavInput
          type="text"
          onChange={e => setGetUser(e.target.value)}
        />
        <styles.NavButton onClick={getUserData}>
          <FaSearch />
        </styles.NavButton>
      </div>
    </styles.NavContainer>
  );
}

export default Navbar;
