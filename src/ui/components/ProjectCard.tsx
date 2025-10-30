import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Project } from '../../types'

export const ProjectCard = ({ project }: { project: Project }) => {
    const { name, description, imageLink, url } = project
    return (
        <Card sx={{
            display: 'flex',
            height: '40%',
            width: '25%',
            m: 1,
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
                <CardContent>
                    <Typography variant='h4'>{name}</Typography>
                    <Typography variant='body1'>{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
