import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const HomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
        }}>
            <Typography variant='h1' sx={{
                color: 'white',
                mt: 1,
            }}>
                Hi.
            </Typography>
            <Typography variant='h5' sx={{
                color: 'white'
            }}>Welcome to my website.</Typography>
        </Box>
    )
}
