import styled from 'styled-components';
import React from 'react';


const FallBackComponent = ({ error, resetErrorBoundary }) => {
    return (
        <Wrapper>
            <p>An error occured</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </Wrapper>
    )
}

const Wrapper = styled.div``


export default FallBackComponent;