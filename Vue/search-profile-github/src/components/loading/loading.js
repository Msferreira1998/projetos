// Background: S.Background,
// LoadingScreen: S.LoadingScreen,
// Text: S.Text,

import styled from 'vue-styled-components';

export const Background = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e7dfdd;
`;

export const LoadingScreen = styled.img`
    width: 400px;
`;

export const TextT = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: chocolate;
    font-weight: 600;
    font-style: oblique;
`;
