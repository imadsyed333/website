import { Box, Fade } from '@mui/material'
import React, { useEffect, ReactNode } from 'react'

export const FadeWrapper = ({ children }: { children: React.ReactElement }) => {
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <Fade in={loaded} timeout={200}>
            {children}
        </Fade>
    )
}
