import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import CompetencesSection from "./Sections/CompetencesSection.js";
import ProjetsSection from "./Sections/ProjetsSection.js";
import ContactSection from "./Sections/ContactSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Matthieu Le Lay"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/projets/bg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem sm={0} md={7}></GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <h1 className={classes.title}>Développeur d{"'"}application</h1>
              <h2>#Frontend #React #JS #App #Enjoy</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CompetencesSection />
          <ProjetsSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
