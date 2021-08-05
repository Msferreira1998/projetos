import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom right, #bc4f0a, #d6956c);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid white;
  box-shadow: 0px 5px 14px -3px #000000;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
  }
`;

export const NavLogo = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: white;
  letter-spacing: 2px;
  padding: 4px;
`;

export const NavInput = styled.input`
  width: 300px;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-right: 15px;
  font-size: 15px;
  font-weight: 500;
  transition: 1s;

  &&:focus {
    transition: 1s;
    width: 350px;
  }
`;

export const NavButton = styled.button`
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
  color: white;
  background-color: #6f0b00;
  transition: 0.5s;

  &&:hover {
    transition: 0.5s;
    background-color: #4f0b00;
  }
`;
