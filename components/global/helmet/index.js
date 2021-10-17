import React from 'react'
import { Helmet } from "react-helmet";

export const SEOHelmet = ({props}) => {
    return (
        <Helmet>
            <title> {props.title} </title>
            <meta name="description" content={props.description} />
            <meta property="og:type" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content={props.og_type} />
            <meta property="og:image" content={props.image} />
            <meta property="og:url" content={props.url} />
            <meta property="og:site_name" content={props.og_site_name} />
            <meta property="twitter:card" content={props.tw_card} />
            <meta property="twitter:url" content={props.url} />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.image} />
        </Helmet>
    )
}
