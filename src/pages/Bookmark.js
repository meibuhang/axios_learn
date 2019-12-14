import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import "../css/bookmark.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { IconButton } from "@material-ui/core";

class Bookmark extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="root">
          <Typography
            variant="h4"
            style={{ fontWeight: "900", margin: "10px 0 20px 0" }}
            className="titleBookmark"
          >
            Bookmarks
          </Typography>
          <div className="borderBookmarks">
            <Grid container item xs={12}>
              <Grid item xs={1}>
                {" "}
                <IconButton>
                  <TurnedInIcon />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  style={{ padding: "7px 0", color: "#424242" }}
                >
                  Offline reading is here...
                </Typography>
              </Grid>
              <Grid item xs={1}>
                {" "}
                <Button
                  name="upgrade"
                  type="submit"
                  variant="contained"
                  size="small"
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    background: "#000000",
                    margin: "10px 15px 10px 0"
                  }}
                >
                  Upgrade
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
export default Bookmark;
