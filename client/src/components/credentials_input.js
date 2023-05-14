import { TextField } from '@mui/material';
import React from 'react';


const CredentialsInput = (props) => {

    const { placeholder, type, value, name, id, focus, handleChange } = props;

    return (
        <TextField
            id={id}
            variant="outlined"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            required={true}
            autoFocus={focus}
            onChange={(e) => handleChange(e)}
            size='small'
            sx={{width: '100%', color: 'white'}}
        />
    )
}


export default CredentialsInput;