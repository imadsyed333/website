import { Box, Typography } from '@mui/material'
import React from 'react'
import { projects } from '../../constants'
import { ProjectCard } from '../components/ProjectCard'

export const ProjectsPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant='h1' sx={{
                color: 'white',
                mt: 1,
            }}>
                Projects
            </Typography>
            <Typography variant='h5' sx={{
                color: 'white',
                mt: 2,
            }}>
                Here's some stuff I've worked on. Click on any project to view it on GitHub.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'start',
            }}>
                {
                    projects.map((project, key) => (
                        <ProjectCard key={key} project={project} />
                    ))
                }
            </Box>
        </Box>
    )
}
