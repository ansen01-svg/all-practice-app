import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainedButton from '../../components/contained_button';
import CredentialsInput from '../../components/credentials_input';
import InputHolder from '../../components/input_holder';
import Label from '../../components/credentials_input_label';
import CredentialsForm from '../../components/credentials_form';
import { FormWrapper, LinkWrapper, MainWrapper, TextWrapper } from '../../reusable_styles/wrappers';


const api_endpoint = 'http://localhost:5010/all_purpose_practice/authentication/login';

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

const credentialFields = {
    username: '',
    password: ''
}

const FormHolder = () => {

    const [credentials, setCredentials] = useState(credentialFields)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser()
        setCredentials(credentialFields)
    }

    const loginUser = () => {
        fetch(api_endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
            withCredentials: true,
            credentials: 'include',
        })
        .then(response => {
            if(response.status === 200) {
                document.cookie = 'token=userToken'
                navigate('/')
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <FormWrapper>
            <CredentialsForm>
                <InputHolder>
                    <Label
                        labelFor='username'
                        labelText='Username'
                    />
                    <CredentialsInput
                        name='username'
                        id='username'
                        type='text'
                        placeholder='Username'
                        value={credentials.username}
                        focus={true}
                        handleChange={handleChange}
                    />
                </InputHolder>
                <InputHolder>
                    <Label
                        labelFor='password'
                        labelText='Password'
                    />
                    <CredentialsInput
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={credentials.password}
                        handleChange={handleChange}
                    />
                </InputHolder>
                <InputHolder>
                    <ContainedButton 
                        title='Sign in'
                        disabled={ (credentials.username && credentials.password) ? false : true }
                        type='submit'
                        handleSubmit={handleSubmit}
                    />
                </InputHolder>
            </CredentialsForm>
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