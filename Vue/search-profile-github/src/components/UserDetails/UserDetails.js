import styled from 'vue-styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Token = styled.div`
    width: min(600px, 100%);
    padding: 20px;
    background-color: bisque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 20px -3px #000000;
    box-shadow: 0px 3px 20px -3px #000000;
`;
export const Nickname = styled.h1``;
export const UserPic = styled.img`
    width: 200px;
    border-radius: 100px;
`;
export const Github = styled.a``;
export const NumRep = styled.h2``;
export const FollowCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 360px) {
        text-align: center;
        flex-direction: column;
    }
`;
export const Follow = styled.h2``;
