import React from "react";
import styled from "styled-components";


const InputHolder = ({ children }) => {
    return (
        <InputWrapper>
            { children }
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`


export default InputHolder;