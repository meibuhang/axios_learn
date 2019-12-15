import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import Featured from "./Featured";
import "../css/profil.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ffffff",
    marginLeft: "10px",

    alignItems: "left"
  }
}));

function ChangeTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #bdbdbd"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          style={{ alignItem: "left" }}
        >
          <Tab label="Drafts" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography
            variant="h4"
            style={{
              color: "#616161",
              textAlign: "center",
              fontWeight: "bold",
              margin: "100px auto"
            }}
          >
            {" "}
            oups..You Have No Data. :(
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default function Story() {
  return (
    <div>
      <NavBar />

      <div
        style={{
          margin: "0 auto",
          padding: "50px 50px"
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "600" }}>
          Your Stories
        </Typography>
        <div
          style={{
            paddingTop: "50px"
          }}
        >
          <ChangeTabs />
        </div>
      </div>
      {/* Tabs Change */}
    </div>
  );
}
