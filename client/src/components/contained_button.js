import { Button } from '@mui/material';
import React from 'react';


const ContainedButton = ({title}) => {
    return (
        <Button
            variant='contained'
            size='medium'
            sx={{ width: '100%' }}
        >
            { title }
        </Button>
    )
}


export default ContainedButton;