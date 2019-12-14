import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "../NavBar";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { IconButton } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

class newStory extends Component {
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
            Add Story
          </Typography>

          <form>
            <Grid container item xs={12}>
              <Grid item xs={1}>
                <Fab
                  aria-label="add"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff"
                  }}
                >
                  <AddIcon />
                </Fab>
              </Grid>
              <Grid item xs={11}>
                <TextareaAutosize
                  style={{ width: "100%", height: "10%" }}
                  rowsMax={13}
                  placeholder="Title"
                  name="title"
                />
                <TextareaAutosize
                  style={{ width: "100%", minHeight: "200px" }}
                  rowsMax={13}
                  placeholder="Title"
                  name="title"
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}
export default newStory;
