import React from 'react';
import ContainedButton from './contained_button';
import CredentialsInput from './credentials_input';
import InputHolder from './input_holder';
import styled from 'styled-components';
import Label from './credentials_input_label';


const CredentialsForm = (props) => {

    const {
        handleSubmit,
        value,
        onChange,
        title,
    } = props;

    return (
        <Form 
            method='post'
            onSubmit={handleSubmit}
        >
            <InputHolder>
                <Label
                    labelFor='Username'
                    labelText='Username'
                />
                <CredentialsInput
                    name='Username'
                    type='text'
                    placeholder='Username'
                    value={value}
                    onChange={onChange}
                />
            </InputHolder>
            <InputHolder>
                <Label
                    labelFor='Password'
                    labelText='Password'
                />
                <CredentialsInput
                    name='Password'
                    type='password'
                    placeholder='Password'
                    value={value}
                    onChange={onChange}
                />
            </InputHolder>
            <InputHolder>
                <ContainedButton title={title} />
            </InputHolder>
        </Form>
    )
}

const Form = styled.form`
    width: 100%;
    height: 100%;
`


export default CredentialsForm;