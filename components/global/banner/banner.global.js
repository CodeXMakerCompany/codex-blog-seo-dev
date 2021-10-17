import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "backend",
    imgPath:
      "https://res.cloudinary.com/codexmaker/image/upload/v1634073675/Banners/Copia_de_Miniaturas_YouTube_3_w0ytg6.gif",
  },
  {
    label: "frontend",
    imgPath:
      "https://res.cloudinary.com/codexmaker/image/upload/v1634073673/Banners/Copia_de_Miniaturas_YouTube_2_yp25xp.gif",
  },
  {
    label: "devops",
    imgPath:
      "https://res.cloudinary.com/codexmaker/image/upload/v1634074711/Banners/Copia_de_Miniaturas_YouTube_4_nqrsbb.gif",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: "20px",
  },
}));

export const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};
