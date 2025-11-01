import { Box, Typography } from '@mui/material'
import React from 'react'

export const ContactPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'start'
        }}>
            <Typography sx={{
                color: 'white',
                mt: 3,
            }} variant='h1'>
                Contact
            </Typography>
        </Box>
    )
}
