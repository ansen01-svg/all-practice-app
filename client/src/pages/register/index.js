import { Typography } from '@mui/material';
import React from 'react';
import CredentialsForm from '../../components/credentials_form';
import { FormWrapper, LinkWrapper, MainWrapper, TextWrapper } from '../../reusable_styles/wrappers';


const Register = () => {
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
                Register
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
                title='Sign up'
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
                Already have an account? &nbsp;
                <LinkWrapper to='/register'>
                    Sign in.
                </LinkWrapper>
            </Typography>
        </TextWrapper>
    )
}


export default Register;