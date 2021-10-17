import { Skeleton } from '@mui/material'
import React from 'react'

export const CardSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            style={{ height: '100%' }}
        />
    )
}