import React from 'react';
import { Container } from '../../GlobalStyles/GlobalStyles';
import {
  FichaContainer,
  TitleFicha,
  FotoFicha,
  NVFicha,
  InfosContainer,
  InfoTitle,
  Info,
  InfoP,
} from './styles';

function UserSearched() {
  return (
    <Container>
      <FichaContainer>
        <TitleFicha>GitHub</TitleFicha>
        <FotoFicha src="https://avatars.githubusercontent.com/u/70543896?v=4"></FotoFicha>
        <NVFicha>10</NVFicha>
        <InfosContainer>
          <Info>
            <InfoTitle>Nome</InfoTitle>
            <InfoP>Matheus Ferreira</InfoP>
          </Info>

          <Info>
            <InfoTitle>Personagem</InfoTitle>
            <InfoP>Msferreira1998</InfoP>
          </Info>
        </InfosContainer>
      </FichaContainer>
    </Container>
  );
}

export default UserSearched;
