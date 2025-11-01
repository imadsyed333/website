import { Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@mui/material'
import React, { use, useEffect } from 'react'
import { Project } from '../../types'
import { FadeWrapper } from './FadeWrapper'

export const ProjectCard = ({ project }: { project: Project }) => {
    const { name, description, imageLink, url } = project

    return (
        <FadeWrapper>
            <Card sx={{
                display: 'flex',
                height: '40%',
                width: '25%',
                m: 1,
                mt: 2,
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
            }} variant='outlined'>
                <CardActionArea href={url} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }}>
                    <CardMedia image={imageLink} sx={{
                        display: 'flex',
                        height: '100%',
                        width: '100%'
                    }} />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%'
                    }}>
                        <Typography variant='h4'>{name}</Typography>
                        <Typography variant='body1'>{description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </FadeWrapper>
    )
}
