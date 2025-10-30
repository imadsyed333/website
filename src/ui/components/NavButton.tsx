import { Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const NavButton = ({ name, link }: { name: string, link: string }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{
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
    )
}
