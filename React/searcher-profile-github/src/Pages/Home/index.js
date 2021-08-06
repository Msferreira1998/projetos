import React from 'react';
import { Container } from '../../GlobalStyles/GlobalStyles';
import { MageContainer, Mage, BallonBox, BallonText } from './styles';

function Home() {
  return (
    <Container>
      <MageContainer>
        <Mage src="https://st4.depositphotos.com/3277955/20691/v/600/depositphotos_206913888-stock-illustration-evil-wizard-putting-spell-cartoon.jpg" />
        <BallonBox>
          <BallonText>Você está procurando por um Aventureiro?</BallonText>
        </BallonBox>
      </MageContainer>
    </Container>
  );
}

export default Home;
