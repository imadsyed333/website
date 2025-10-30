import { Box } from '@mui/material'
import React from 'react'
import { projects } from '../../constants'
import { ProjectCard } from '../components/ProjectCard'

export const ProjectsPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // background: 'grey'
        }}>
            {
                projects.map((project, key) => (
                    <ProjectCard key={key} project={project} />
                ))
            }
        </Box>
    )
}
