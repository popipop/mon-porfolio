import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react/icons
import { FaReact, FaAndroid, FaHtml5 } from "react-icons/fa";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ConpetencesSection() {
  const classes = useStyles();
  return (
    <div id="competences" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mes compétences</h2>
          <h5 className={classes.description}>
            Passionné en développement web depuis de nombreuses années, j{"'"}ai
            acquis un réel savoir-faire autant en backend (PHP, SQL, serveur
            Linux), qu{"'"}en Frontend (JS6, HTML5, CSS3) en concevant divers
            sites sous WordPress, Prestashop ou Woocommerce.
            <br />
            Afin de compléter mes connaissances, je me suis formé au
            développement FrontEnd moderne et j{"'"}ai ainsi obtenu mon diplôme
            de développeur d{"'"}application (bac+3/4).
            <br />
            Ayant une réelle appétence pour le langage Javascript, c{"'"}est
            tout naturellement que je me suis perfectionné à ReactJS et ses
            dérivés comme React Native ou GatsbyJS.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Frontend"
              description="Les dernières versions de HTML, CSS et Javascript ont révolutionnées l'approche frontend. Coder avec ces nouveaux standarts s'avère être un réel plaisir."
              icon={FaHtml5}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Interface réactive"
              description="ReactJs est un outil en continuelle évolution extrèmement puissant pour la conception d'interfaces clients interactives."
              icon={FaReact}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mobile"
              description="React Native permet la conception d'applications mobiles sur Androïd ou iOS. Simply powerful !"
              icon={FaAndroid}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
