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
      <meta property="og:title" content={props.title} key="title"/>
      <meta property="og:description" content={props.description} key="description"/>
      <meta property="og:url" content={props.url} key="url" />
      <meta property="og:type" content={props.og_type} key="type" />
      <meta property="og:image" content={props.image} key="image" />
      <meta property="og:image:width" content="250" key="image:width"/>
      <meta property="og:image:height" content="250" key="image:height"/>
      <meta property="og:image:alt" content={props.title} key="image:alt"/>
      <meta property="og:site_name" content={props.title} key="og:site_name"/>
      <meta property="twitter:card" content={props.tw_card} key="card"/>
      <meta property="twitter:url" content={props.url} key="twitter:url"/>
      <meta property="twitter:title" content={props.title} key="twitter:title"/>
      <meta property="twitter:description" content={props.description} key="twitter:description"/>
      <meta property="twitter:image" content={props.image} key="twitter:image"/>
    </Head>
  );
};
