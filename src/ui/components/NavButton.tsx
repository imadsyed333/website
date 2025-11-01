import { Card, CardActionArea, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export const NavButton = ({ name, link }: { name: string, link: string }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setSelected(location.pathname === link)
    }, [location])

    return (
        <Card sx={{
            display: 'flex',
            justifyContent: 'center',
            m: 1,
            backgroundColor: 'rgba(255,255,255,0)',
            boxShadow: 0,
            width: '10%',
            borderBottom: (selected ? 2 : 0),
            borderColor: 'white',
        }}>
            <CardActionArea onClick={() => {
                navigate(link)
            }} sx={{
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
