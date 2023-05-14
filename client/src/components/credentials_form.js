import React from 'react';
import styled from 'styled-components';


const CredentialsForm = (props) => {
    return (
        <Form>
            { props.children }
        </Form>
    )
}

const Form = styled.form`
    width: 100%;
    height: 100%;
`


export default CredentialsForm;