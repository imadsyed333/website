import { AppBar, Box, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import { NavButton } from './NavButton'
import { routes } from '../../constants'

export const Navbar = () => {

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
                width: '100%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    height: '100%',
                    width: '50%',
                }}>
                    {
                        routes.map((route, key) => (
                            <NavButton key={key} name={route.name} link={route.path} />
                        ))
                    }
                </Box>
            </Card >
        </AppBar >
    )
}
