import styled from 'styled-components';

export const FichaContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 20px;
`;

export const TitleFicha = styled.h1`
  text-align: center;
  background-color: #3c281d;
  color: white;
  padding: 8px;
  border-bottom: 1px solid #222222;
  letter-spacing: 1.5px;
  border-radius: 5px;
`;

export const FotoFicha = styled.img`
  width: 150px;
  border: 2px solid #222222;
  margin: 10px auto;
  position: relative;
  bottom: -20px;
`;

export const NVFicha = styled.h2`
  background-color: white;
  margin: 0 auto;
  padding: 5px;
  position: relative;
  top: -25px;
  right: -60px;
  border: 1px solid #222222;
`;

export const InfosContainer = styled.div`
  width: 100%;
  border: 2px solid #222222;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Info = styled.div`
  border: 1px solid #222222;
`;

export const InfoTitle = styled.h3`
  display: inline-block;
  width: 50%;
  background-color: #222222;
  color: white;
  text-align: center;
  font-size: 15px;
  padding: 10px;
`;

export const InfoP = styled.h3`
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 15px;
  padding: 10px;
`;

export const TitleRepos = styled.h1`
  text-align: center;
  padding: 5px;
  color: white;
  background-color: #222222;
  font-size: 20px;
  letter-spacing: 1px;
`;

export const InfoRepos = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  padding: 5px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const RepoLink = styled.a`
  width: 100%;
  text-decoration: none;
  margin: 2px;
  border: 1px solid #222;
  border-radius: 5px;

  &&:hover {
    background-color: #cccccc;
  }
`;

export const TitleRepo = styled.h3`
  width: 100%;
  background-color: #222;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 17px;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  width: 100%;
  text-align: center;
  color: black;
  padding: 5px;
  font-size: 14px;
  letter-spacing: 1px;
`;
