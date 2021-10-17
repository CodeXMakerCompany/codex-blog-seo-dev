import React from "react";
import Head from "next/head";

export const SEOHelmet = ({ props }) => {
  return (
    <Head>
      <title> {props.title} </title>
      <meta name="description" content={props.description} />
      <link
        rel="icon"
        href="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
      />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content={props.og_type} />
      <meta property="og:image" content={props.image} />
      <meta property="og:image:secure_url" content={props.image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={props.description} />
      <meta property="og:site_name" content={props.og_site_name} />
      <meta property="og:locale:alternate" content="es_MX" />
      <meta property="twitter:card" content={props.tw_card} />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.image} />
    </Head>
  );
};
