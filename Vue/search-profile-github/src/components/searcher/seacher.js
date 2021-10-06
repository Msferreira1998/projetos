import styled from 'vue-styled-components';

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    width: min(40rem, 100vw);
    background-color: bisque;
    -webkit-box-shadow: 0px 3px 20px -3px #000000;
    box-shadow: 0px 3px 20px -3px #000000;

    @media (max-width: 650px) {
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: chocolate;
    font-weight: 500;
    font-style: oblique;
`;

export const SearchBox = styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 15px;
    margin-right: 6px;
    font-size: 12px;
    border: none;
    width: 180px;
    transition: 0.5s;
    border-radius: 10px;

    :focus {
        outline: none;
        border: 0.5px solid beige;
        width: 200px;
    }
`;

export const Button = styled.button`
    background-color: chocolate;
    /* outline: none; */
    border: none;
    padding: 5px;
    border-radius: 10px;
    color: bisque;
    transition: 0.2s;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }

    :active {
        transform: scale(0.98);
        /* Scaling button to 0.98 to its original size */
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        /* Lowering the shadow */
    }
`;

export const Chill = styled.img`
    width: min(15rem, 100%);
    border-radius: 30px;
`;
