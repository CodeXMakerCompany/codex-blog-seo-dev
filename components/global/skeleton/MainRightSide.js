import { Skeleton } from '@mui/material'
import React from 'react'

export const MainRightSideSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            style={{width : '250px', height : 'auto'}}
        />
    )
}