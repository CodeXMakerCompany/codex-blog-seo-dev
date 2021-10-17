import React from "react";
import { makeStyles } from "@material-ui/core";

import { YouTube, Facebook, Instagram, GitHub } from "@material-ui/icons";

export const socialContainer = makeStyles(() => ({
  cont: {
    background: "#eee !important",
    padding: "1rem 2rem",
  },
  icon: {
    margin: "10px !important",
    transition: "transform 250ms",
    display: "inline-block",
    transform: 'scale(1.1)'
  },
  youtube: {
    color: "#eb3223",
  },
  facebook: {
    color: "#4968ad",
  },
  github: {
    color: "#49a1eb",
  },
  insta: {
    color: "black",
  },
}));

export const SocialMedia = () => {
  const classes = socialContainer();
  return (
    <div className={classes.cont} align="center">
      <a
        href="https://www.youtube.com/channel/UCz3gBdSc1Ju2Tj_PZkq34lg"
        target="_blank"
        // eslint-disable-next-line no-sequences
        className={classes.icon} rel="noreferrer"
      >
        <YouTube className={classes.youtube} />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/codexmaker01/"
        // eslint-disable-next-line no-sequences
        className={classes.icon} rel="noreferrer"
      >
        <Facebook className={classes.facebook} />
      </a>
      <a
        target="_blank"
        href="https://github.com/CodeXMakerCompany"
        className={classes.icon} rel="noreferrer"
      >
        <GitHub className={classes.github} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/codexmaker/"
        className={classes.icon} rel="noreferrer"
      >
        <Instagram className={classes.insta} />
      </a>
    </div>
  );
};
