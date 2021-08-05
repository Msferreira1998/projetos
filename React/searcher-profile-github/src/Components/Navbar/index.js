import React from 'react';
import { Container } from '../../GlobalStyles/GlobalStyles';
import * as styles from './styles';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <styles.NavContainer>
      <styles.NavLogo>GitHub Profile Search</styles.NavLogo>
      <div>
        <styles.NavInput type="text" />
        <styles.NavButton>
          <FaSearch />
        </styles.NavButton>
      </div>
    </styles.NavContainer>
  );
}

export default Navbar;
