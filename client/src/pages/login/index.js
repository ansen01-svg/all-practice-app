import { Typography } from '@mui/material';
import React from 'react';
import CredentialsForm from '../../components/credentials_form';
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {}

    return (
        <FormWrapper>
            <CredentialsForm
                handleSubmit={handleSubmit}
                onChange={onChange}
                title='Sign in'
            />
        </FormWrapper>
    )
}

const Footer = () => {
    return (
        <TextWrapper
            border='1px solid #30363d'
        >
            <Typography variant='p1'>
                New here? &nbsp;
                <LinkWrapper to='/register'>
                    Create an account.
                </LinkWrapper>
            </Typography>
        </TextWrapper>
    )
}


export default Login;