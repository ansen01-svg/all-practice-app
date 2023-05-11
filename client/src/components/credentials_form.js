import React from 'react';
import ContainedButton from './contained_button';
import CredentialsInput from './credentials_input';
import InputHolder from './input_holder';


const CredentialsForm = (props) => {

    const {
        handleSubmit,
        placeholder,
        type,
        value,
        onChange,
    } = props;

    return (
        <form 
            method='post'
            onSubmit={handleSubmit}
        >
            <InputHolder
                children={ <CredentialsInput
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                /> }
            />
            <InputHolder
                children={ <CredentialsInput
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                /> }
            />
            <InputHolder
                children={ <ContainedButton /> }
            />
        </form>
    )
}


export default CredentialsForm;