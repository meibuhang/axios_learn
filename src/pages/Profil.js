import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import "../css/profil.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function ChangeTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      textColor="primary"
      onChange={handleChange}
      className="tabBox"
      indicatorColor="primary"
    >
      <Tab label="Profile" />
      <Tab label="Claps" />
    </Tabs>
  );
}

class Profil extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" style={{ marginRight: "20px" }}>
                  Rere Randa Riana
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
              style={{
                width: "110px",
                height: "110px",
                fontSize: "60px",
                backgroundColor: "#2e7d32"
              }}
            >
              R
            </Avatar>
          </Grid>
        </div>
        <div
          style={{
            alignItems: "left",
            padding: "5% 20%"
          }}
        >
          <ChangeTabs />
        </div>
        {/* Tabs Change */}
      </div>
    );
  }
}
export default Profil;
