import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// snackbar
import Snackbar from "@material-ui/core/Snackbar";
import MySnackbarContentWrapper from "../../Components/MySnackbarContentWrapper";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMail, setErrorMail] = useState(false);

  const handleChangeName = e => {
    return setName(e.target.value);
  };

  const handleChangeEmail = e => {
    return setEmail(e.target.value);
  };

  const handleChangeMessage = e => {
    return setMessage(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const resMail = await fetch("/.netlify/functions/mail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (resMail.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setOpen(true);
    } else {
      setErrorMail(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div id="contact" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact</h2>
          <h4 className={classes.description}>
            Surtout, n{"'"}hésitez pas à prendre contact avec moi.
            <br />
            Je vous répondrai dans les plus brefs délais.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre nom"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: name,
                    onChange: handleChangeName
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: email,
                    onChange: handleChangeEmail
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Votre message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  value: message,
                  onChange: handleChangeMessage
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" type="submit">
                    Envoyer
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="Le message a bien été envoyé!"
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={errorMail}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message="Le message n'a pas pu être envoyé."
        />
      </Snackbar>
    </div>
  );
}
