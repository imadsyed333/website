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
            <Box sx={{
                display: 'flex',
                height: '98%',
                width: '100%',
            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CardMedia sx={{
                        display: 'flex',
                        height: '100%',
                        width: '90%',
                        borderRadius: 1,
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
                            <p>
                                Hello there, my name is Imad. I am a full-stack software developer specializing in React, Node, Express, and PostgreSQL. I also have experience in big data analysis and data engineering with Python.

                            </p>
                            <b></b>
                            <p>
                                At my co-op with the City of Toronto, I infamously became a "hungry developer", quickly closing down Jira tickets as I hunted bugs and implemented production-level features across the stack.
                            </p>
                            <b />
                            <p>
                                When I'm not slaying insects, I like to read, play video games, watch anime, and play soccer. Check out "Hobbies" if you want to know more.
                            </p>
                        </Typography>
                    </Card>
                </Card>
                <Card sx={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}>How are you</Card>
            </Box>
        </Box>
    )
}
