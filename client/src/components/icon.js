import React from "react";
import styled from "styled-components";


const Icon = ({ handleClick, children }) => {
    return (
        <div>
            <Button
                onClick={handleClick}
            >
                { children }
            </Button>
        </div>
    )
}

const Button = styled.button`
    width: 100%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
`


export default Icon;