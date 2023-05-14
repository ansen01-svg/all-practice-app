import { Button } from '@mui/material';
import React from 'react';


const ContainedButton = (props) => {

    const { title, disabled, type, handleSubmit } = props;

    return (
        <Button
            variant='contained'
            size='medium'
            sx={{ width: '100%'}}
            disabled={disabled}
            type={type}
            onClick={handleSubmit}
        >
            { title }
        </Button>
    )
}


export default ContainedButton;