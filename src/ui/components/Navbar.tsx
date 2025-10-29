import { AppBar, Box, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const Navbar = () => {

    const navigate = useNavigate()

    const navLinks = {
        Home: '/',
        About: '/about',
        Projects: '/projects',
        Contact: '/contact'
    }
    return (
        <AppBar sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70px',
            background: 'rgba(0, 0, 0, 0)',
            boxShadow: 'none',
        }}>
            <Card sx={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '90%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                mt: 1,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    height: '100%',
                    width: '70%',
                }}>
                    {
                        Object.entries(navLinks).map(([name, link], key) => (
                            <Card key={key} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                m: 1,
                                backgroundColor: 'rgba(255,255,255,0)',
                            }}>
                                <CardActionArea onClick={() => navigate(link)} sx={{
                                    display: 'flex',
                                    height: '100%',
                                    width: '100%',
                                    px: 2,
                                }}>
                                    <Typography sx={{
                                        color: 'white'
                                    }}>{name}</Typography>
                                </CardActionArea>
                            </Card>
                        ))
                    }
                </Box>
            </Card >
        </AppBar >
    )
}
