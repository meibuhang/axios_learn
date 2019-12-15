import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavBottomStatus from "../component/NavBottomStatus";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper"
  }
}));

function ChangeTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          aria-label="wrapped label tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            value="one"
            label="Views (30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            wrapped
            {...a11yProps("one")}
          />
          <Tab
            value="two"
            label="Reads (30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            wrapped
            {...a11yProps("two")}
            disabled
          />
          <Tab
            value="three"
            label="Fans (30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            wrapped
            {...a11yProps("three")}
            disabled
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}

class Status extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          padding: "0 50px"
        }}
      >
        <NavBar />
        <div
          style={{
            margin: "0 auto",
            padding: "70px 50px"
          }}
        >
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Stats
          </Typography>
          <div className="headStats">
            <Typography
              variant="h6"
              style={{
                fontWeight: "600",
                color: "#bdbdbd",
                padding: "20px 0"
              }}
            >
              Click story below to view in chart
            </Typography>
            <Typography
              variant="h6"
              style={{
                paddingTop: "20px"
              }}
            >
              <Link
                to="#"
                style={{
                  fontWeight: "600",
                  color: "#bdbdbd"
                }}
              >
                {" "}
                Learn More about using stats
              </Link>
            </Typography>
          </div>
          <Divider />
          <div
            style={{
              paddingTop: "20px",
              marginBottom: "15%"
            }}
          >
            <ChangeTabs />
          </div>

          {/* bottom Bar*/}
          <NavBottomStatus />
        </div>
      </div>
    );
  }
}
export default Status;
