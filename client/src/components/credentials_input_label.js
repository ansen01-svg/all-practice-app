import React from "react";
import { Typography } from '@mui/material';


const Label = ({ labelText, labelFor }) => {
    return (
        <label
            htmlFor={labelFor}
        >
            <Typography variant="p1">
                { labelText }
            </Typography>
        </label>
    )
}


export default Label;