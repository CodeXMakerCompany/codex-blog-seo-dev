/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Banner } from "../components/global/banner/banner.global";
import { ElementsList } from "../components/homeComponents/elements.list";
// import { AdsGlobal } from "../components/global/ads/ads.global";
import { SEOHelmet } from "../components/global/helmet";
// import { homeLeftSide } from "../config/ads.config";
import { Container, Grid, Hidden } from "@material-ui/core";

import { RightBarComponent } from "../components/homeComponents/rightBar.component";

import { Backdrop, CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPosts } from "../redux/actions/posts.action";

import { BannerSkeleton } from "../components/global/skeleton/Banner";
import { MainRightSideSkeleton } from "../components/global/skeleton/MainRightSide";

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.posts);

  const seoMain = {
    description:
      "Blog de desarrollo web, hecho para desarrolladores por desarrolladores, aquí encontraras tips, tutoriales, cursos y buenas prácticas, nuestro objetivo es ayudarte a encontrar mejores oportunidad y llevar tus habilidades al siguiente nivel 🚀",
    title: "Welcome to codexmakers",
    og_type: "blog",
    image:
      "https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png",
    url: "localhost",
    og_site_name: "blog.codexmakers.com",
    tw_card: "summary",
  };

  useEffect(() => {
    dispatch(fetchLatestPosts());
  }, []);

  const doSomeMagic = () => {};

  return (
    <>
      <SEOHelmet props={seoMain} />
      <Container maxWidth="xl" style={{ paddingTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            {/* <AdsGlobal iframe={homeLeftSide} /> */}
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            {state?.posts ? <Banner /> : <BannerSkeleton />}
            {Array.isArray(state?.posts) ? (
              <ElementsList list={state?.posts} />
            ) : (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </Grid>
          <Hidden xsDown>
            {state?.posts ? (
              <Grid item sm={4} md={3} align="center">
                <img
                  alt="codexmaker-logo"
                  style={{ cursor: "pointer", width: "250px" }}
                  onClick={doSomeMagic(true)}
                  src="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
                />
                <RightBarComponent style={{ backgroundColor : "red"}}/>
              </Grid>
            ) : (
              <MainRightSideSkeleton />
            )}
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

