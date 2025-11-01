import { Box, Card, CardContent, CardMedia, Fade, Typography } from '@mui/material'
import React from 'react'
import { FadeWrapper } from '../components/FadeWrapper'

export const AboutPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography sx={{
                color: 'white',
                mt: 1,
            }} variant='h1'>
                About
            </Typography>
            <Box sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'start'
            }}>
                <FadeWrapper>
                    <Card sx={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        mx: 1,
                    }}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </FadeWrapper>
                <Card sx={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    mx: 1,
                }}>
                </Card>
            </Box>
        </Box>
    )
}
