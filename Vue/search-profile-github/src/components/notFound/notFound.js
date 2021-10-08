import styled from 'vue-styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: chocolate;
    font-weight: 600;
    font-style: oblique;
`;

export const Home = styled.button`
    background-color: chocolate;
    width: min(150px, 100%);
    height: 50px;
    border: none;
    padding: 5px;
    border-radius: 10px;
    color: bisque;
    transition: 0.2s;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }

    :active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`;

export const Gif = styled.img`
    width: 300px;
    border-radius: 15px;
`;
