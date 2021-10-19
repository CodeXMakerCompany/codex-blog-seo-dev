/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import { useRouter } from "next/router";
import { SEOHelmet } from "../../../components/global/helmet";
import {
  fetchPostById,
  updatePostViews,
} from "../../../redux/actions/posts.action";
import { Fab, Paper, Rating } from "@mui/material";

import { Typography } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import { RightBarComponent } from "../../../components/homeComponents/rightBar.component";
import { MainRightSideSkeleton } from "../../../components/global/skeleton/MainRightSide";
import { openSnackBar } from "../../../redux/actions/snackbar.actions";

import parseDate from "../../../utils/parseDate";

import Head from "next/head";

const PostId = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const [rate, setRate] = useState(0);
  const post = useSelector((state) => state.posts.targetPost);
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(updatePostViews(id));
  }, [id]);

  const rateMyPost = (val) => {
    setRate(val);
    dispatch(
      openSnackBar({
        status: true,
        type: "success",
        message: "Muchas gracias, seguiré haciendo contenido para ti 🌟",
      })
    );
  };
  const articleSeo = {
    description: post?.description,
    title: post?.title,
    og_type: "website",
    image: post?.img,
    url: "https://blog.codexmakers.com" + router.asPath,
    og_site_name: "blog.codexmakers.com",
    tw_card: "summary",
  };

  const toHome = () => {};

  const styles = {
    paperContainer: {
      backgroundColor: theme === "light" ? "" : "#282c36",
      color: theme === "light" ? "" : "white",
      transition: "all .5s ease",
      paddingTop: "2rem",
    },
    imgcontainer: {
      height: "30rem",
      width: "100%",
    },
    typoA: {
      position: "absolute",
      top: "35%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "5px solid #4527a0",
      borderRadius: "15px",
      backgroundColor: "#673ab7",
      opacity: "0.9",
    },
    typoB: {
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #4527a0",
      borderRadius: "15px",
      backgroundColor: "#673ab7",
      opacity: "0.9",
    },
  };

  return (
    <Paper style={styles.paperContainer}>
      {articleSeo.title ? 
      <Head>
        <title> {articleSeo.title} </title>
      <meta name="description" content={articleSeo.description} />
      <link
        rel="icon"
        href="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
      />
      <meta property="og:title" content={articleSeo.title} key="title"/>
      <meta property="og:description" content={articleSeo.description} key="description"/>
      <meta property="og:url" content={articleSeo.url} key="url" />
      <meta property="og:type" content={articleSeo.og_type} key="type" />
      <meta property="og:image" content={articleSeo.image} key="image" />
      <meta property="og:image:width" content="250" key="image:width"/>
      <meta property="og:image:height" content="250" key="image:height"/>
      <meta property="og:image:alt" content={articleSeo.title} key="image:alt"/>
      <meta property="og:site_name" content={articleSeo.title} key="og:site_name"/>
      <meta property="twitter:card" content={articleSeo.tw_card} key="card"/>
      <meta property="twitter:url" content={articleSeo.url} key="twitter:url"/>
      <meta property="twitter:title" content={articleSeo.title} key="twitter:title"/>
      <meta property="twitter:description" content={articleSeo.description} key="twitter:description"/>
      <meta property="twitter:image" content={articleSeo.image} key="twitter:image"/>
      </Head>
      : ""}
      <img alt={post?.img} style={styles.imgcontainer} src={post?.img} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Container style={styles.titleBackground}>
              <Typography variant="h3" style={styles.typoA}>
                {post?.title}
              </Typography>
              <Typography variant="h4" style={styles.typoB}>
                {post?.subtitle}
              </Typography>
            </Container>
            <Container>
              <Typography variant="h6" style={{ paddingTop: "1rem" }}>
                Publicado el: {parseDate(post?.created_at)}
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </Container>
          </Grid>
          <Hidden smDown>
            {post?.title ? (
              <Grid item sm={4} md={2} align="center">
                <img
                  alt="codexmaker-logo"
                  style={{ cursor: "pointer", maxWidth: "180px" }}
                  onClick={toHome(true)}
                  src="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
                />
                <RightBarComponent />
                <div>
                  <Typography style={{ paddingTop: "1rem" }} variant="h6">
                    Developers ayudados :
                  </Typography>
                  <Fab
                    variant="extended"
                    style={{
                      backgroundColor: "#212121",
                      color: "white",
                      borderRadius: "10px",
                      paddingLeft: "10px",
                      paddingRight: "10px"
                    }}
                  >
                    <FavoriteIcon sx={{ mr: 1 }} style={{ color: "#ec407a" }} />
                    {post.views}
                  </Fab>
                  <Typography style={{ paddingTop: "1rem" }} variant="h6">
                    Califica este post !
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => rateMyPost(newValue)}
                  />
                </div>
              </Grid>
            ) : (
              <MainRightSideSkeleton />
            )}
          </Hidden>
        </Grid>
      </Container>
      <style global jsx>{`
        @media only screen and (max-width: 1900px) {
          img {
            width: -webkit-fill-available;
          }
        }
        @media only screen and (max-width: 600px) {
          .MuiTypography-h3 {
            font-size: 2rem;
            width: inherit;
          }
          .MuiTypography-h4 {
            font-size: 1.5rem;
            width: inherit;
            top: 56% !important;
          }
        }
      `}</style>
    </Paper>
  );
};

export default PostId;
