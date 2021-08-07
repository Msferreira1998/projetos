import React, { useContext } from 'react';
import { context } from '../../Context/';
import { Container } from '../../GlobalStyles/GlobalStyles';
import Navbar from '../../Components/Navbar';
import {
  FichaContainer,
  TitleFicha,
  FotoFicha,
  NVFicha,
  InfosContainer,
  InfoTitle,
  Info,
  InfoP,
  TitleRepos,
  InfoRepos,
  RepoLink,
  Description,
  TitleRepo,
} from './styles';

function UserSearched() {
  const ctx = useContext(context);
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        {ctx.userData.id ? (
          <FichaContainer>
            <TitleFicha>GitHub</TitleFicha>
            <FotoFicha src={ctx.userData?.avatar_url}></FotoFicha>
            <NVFicha>{ctx.userData?.public_repos}</NVFicha>
            <InfosContainer>
              <Info>
                <InfoTitle>Nome</InfoTitle>
                <InfoP>
                  {ctx.userData.name
                    ? ctx.userData?.name.split(' ')[0]
                    : undefined}
                </InfoP>
              </Info>

              <Info>
                <InfoTitle>Personagem</InfoTitle>
                <InfoP>{ctx.userData?.login}</InfoP>
              </Info>
            </InfosContainer>

            <InfosContainer>
              <TitleRepos>Habilidades</TitleRepos>
              <InfoRepos>
                {ctx.repos.map(val => {
                  return (
                    <RepoLink key={val.id} href={val.html_url}>
                      <TitleRepo>{val.name}</TitleRepo>
                      <Description>
                        {val.description ? val.description : 'Sem Descrição'}
                      </Description>
                    </RepoLink>
                  );
                })}
              </InfoRepos>
            </InfosContainer>
          </FichaContainer>
        ) : undefined}
      </Container>
    </React.Fragment>
  );
}

export default UserSearched;
