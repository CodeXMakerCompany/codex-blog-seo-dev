import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'

export const SimpleSnackbar = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const { message, type } = props.content;
    useEffect(() => {
        const options = { variant : type };

        enqueueSnackbar(message, options);
    }, [message, type, props, enqueueSnackbar])

    return (
        <> </>
    )
}
