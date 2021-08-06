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
`;

export const NVFicha = styled.h2`
  background-color: white;
  margin: 0 auto;
  padding: 5px;
  position: relative;
  top: -50px;
  right: -57px;
  border: 1px solid #222222;
`;

export const InfosContainer = styled.div`
  width: 100%;
  border: 2px solid #222222;
  border-radius: 10px;
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
