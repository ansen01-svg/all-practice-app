import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const FormWrapper = styled.div`
    padding: 16px;
    border: 1px solid #30363d;
    border-radius: 6px;
`

export const TextWrapper = styled.div`
    padding: 16px;
    max-width: 239px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => props.border || 'none'};
    border-radius: 6px;
`

export const LinkWrapper = styled(Link)`
    color: #2f81f7;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`