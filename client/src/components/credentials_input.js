import { TextField } from '@mui/material';
import React from 'react';


const CredentialsInput = (props) => {

    const { placeholder, type, value, onChange } = props;

    return (
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type={type}
            placeholder={placeholder}
            value={value}
            required={true}
            autoFocus={true}
            helperText='Incorrect entry' 
            onChange={onChange}
        />
    )
}


export default CredentialsInput;