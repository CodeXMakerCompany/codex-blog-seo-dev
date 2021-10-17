import { Skeleton } from '@mui/material'
import React from 'react'

export const BannerSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            style={{ height: '100%' }}
        />
    )
}
