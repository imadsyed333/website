import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const AboutPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card sx={{
                display: 'flex',
                height: '98%',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    m: 1,
                }}>
                    <CardMedia sx={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        m: 1,
                    }} image='https://media.licdn.com/dms/image/v2/D5635AQErIOclGowuqQ/profile-framedphoto-shrink_200_200/B56ZjjI8nYHMAY-/0/1756157430595?e=1762322400&v=beta&t=nBAuJE_JYEGgEd8lBrExh-h8ZXs-Xp4Cdm8nf42-ZhU'>

                    </CardMedia>
                    <Card sx={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0)',
                        m: 1,
                    }}>
                        <Typography sx={{
                            color: 'white'
                        }} variant='body1'>
                            Hello there, my name is Imad. I am a full-stack software developer previously at City of Toronto.
                        </Typography>
                    </Card>
                </Card>
                <Card sx={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    m: 1,
                }}>How are you</Card>
            </Card>
        </Box>
    )
}
