import { Typography } from '@mui/material';
import React from 'react';
import { FormWrapper, LinkWrapper, MainWrapper, TextWrapper } from '../../reusable_styles/wrappers';


const Login = () => {
    return (
        <MainWrapper>
            <Header />
            <FormHolder />
            <Footer />
        </MainWrapper>
    )
}

const Header = () => {
    return (
        <TextWrapper>
            <Typography variant='h4'>
                Login
            </Typography>
        </TextWrapper>
    )
}

const FormHolder = () => {
    return (
        <FormWrapper></FormWrapper>
    )
}

const Footer = () => {
    return (
        <TextWrapper
            border='1px solid #30363d'
        >
            <Typography variant='p1'>
                New here? &nbsp;
                <LinkWrapper>
                    Create an account.
                </LinkWrapper>
            </Typography>
        </TextWrapper>
    )
}


export default Login;