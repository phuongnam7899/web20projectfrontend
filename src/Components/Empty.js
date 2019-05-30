import React from 'react'
import { Typography } from '@material-ui/core';

function Empty (){
    return(
        <div>
            <Typography variant = 'h4' color = '#000000' style = {{position: 'absolute', top:'50%', left: '50%'}}>
                YOU HAVE NO CLASS!!!
            </Typography>
        </div>
    )
}

export default Empty;