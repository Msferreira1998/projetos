import styled from 'styled-components';

export const MageContainer = styled.div`
  padding: 30% 10px;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Mage = styled.img`
  padding: 5px;
  border: 5px solid #e67a00;
  border-radius: 50%;
  width: 200px;
  transition: 0.5s;

  &&:hover {
    transition: 0.5s;
    border-radius: 25%;
    border: 5px solid #bc4f0a;
    width: 220px;
  }
`;

export const BallonBox = styled.div`
  width: 100%;
  height: 125px;
  border-radius: 30px;
  position: relative;
  top: -25px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const BallonText = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: 300;
  font-family: cursive;
`;
