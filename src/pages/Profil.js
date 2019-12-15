import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import Featured from "./Featured";
import "../css/profil.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
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
    width: 700,
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
          variant="fullWidth"
          style={{ alignItem: "left" }}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Claps" {...a11yProps(1)} />
          <Tab label="Highlight" {...a11yProps(2)} />
          <Tab label="Responses" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Featured />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default function Profil() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5%",
          margin: "0 auto"
        }}
      >
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography variant="h5" style={{ marginRight: "20px" }}>
                Jhon Lennon
              </Typography>
              <Button variant="outlined" size="small" color="inherit">
                edit profile
              </Button>
            </div>
            <div
              style={{
                display: "flex",

                paddingTop: "30px"
              }}
            >
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingRight: "20px"
                }}
              >
                15 Followers
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{
                  display: "flex",
                  alignItems: "flex-end"
                }}
              >
                10 Following
              </Typography>
            </div>
          </div>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
            style={{
              width: "110px",
              height: "110px"
              // fontSize: "60px",
              // backgroundColor: "#2e7d32"
            }}
          >
            J
          </Avatar>
        </Grid>
      </div>
      <div
        style={{
          margin: "0 20%",
          padding: "0 25px"
        }}
      >
        <ChangeTabs />
      </div>
      {/* Tabs Change */}
    </div>
  );
}
