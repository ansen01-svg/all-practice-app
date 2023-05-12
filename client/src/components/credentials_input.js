import { TextField } from '@mui/material';
import React from 'react';


const CredentialsInput = (props) => {

    const { placeholder, type, value, name, onChange } = props;

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            required={true}
            autoFocus={true}
            onChange={onChange}
            size='small'
            sx={{width: '100%', color: 'white'}}
        />
    )
}


export default CredentialsInput;