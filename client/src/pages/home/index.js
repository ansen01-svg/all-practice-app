import React from 'react';
import styled from 'styled-components';


const Home = () => {
    return (
        <Wrapper>Home</Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 64px);

    @media screen and (min-width: 760px) {
        height: calc(100vh - 58px);
    }
`


export default Home;