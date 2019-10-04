/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import P2_OC from "../../../assets/img/projets/P2_OC.png";
import P3_OC from "../../../assets/img/projets/P3_OC.svg";
import P4_OC from "../../../assets/img/projets/P4_OC.png";
import P5_OC from "../../../assets/img/projets/P5_OC.png";
import P6_OC from "../../../assets/img/projets/P6_OC.svg";
import P7_OC from "../../../assets/img/projets/P7_OC.png";
import P8_OC from "../../../assets/img/projets/P8_OC.png";
import P9_OC from "../../../assets/img/projets/P9_OC.png";
import R1 from "../../../assets/img/projets/R1.png";
import R2 from "../../../assets/img/projets/R2.png";
import R4 from "../../../assets/img/projets/R4.jpg";
import R6 from "../../../assets/img/projets/R6.jpg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Projets from "../../../projets";

const useStyles = makeStyles(styles);
const images = [
  P2_OC,
  P3_OC,
  P4_OC,
  P5_OC,
  P6_OC,
  P7_OC,
  P8_OC,
  P9_OC,
  R1,
  R2,
  R4,
  R6
];
export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div id="projets" className={classes.section}>
      <h2 className={classes.title}>Quelques uns de mes projets</h2>
      <div>
        <GridContainer>
          {Object.values(Projets).map((projet, i) => {
            return (
              <GridItem
                key={projet.id}
                xs={12}
                sm={12}
                md={4}
                style={{ display: "flex", height: "600px" }}
              >
                <Card
                  plain
                  style={{
                    flex: "1",
                    boxShadow: "3px 3px 5px #999999",
                    paddingTop: "15px"
                  }}
                >
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.itemGrid}
                    style={{ height: "100px" }}
                  >
                    <div style={{ width: "100px", display: "flex" }}>
                      <img
                        src={images[i]}
                        alt="..."
                        className={imageClasses}
                        style={{ flex: "1" }}
                      />
                    </div>
                  </GridItem>
                  <h4 className={classes.cardTitle}>{projet.name}</h4>
                  <CardBody>
                    <p className={classes.description}>{projet.description}</p>
                    <p className={classes.description}>
                      <strong>Techno : </strong>
                      {projet.techno}
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    {projet.site ? (
                      <a href={projet.site} target="_blank">
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={" fa fa-desktop"} />
                        </Button>
                      </a>
                    ) : null}
                    {projet.github ? (
                      <a href={projet.github}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={" fab fa-github"} />
                        </Button>
                      </a>
                    ) : null}
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
