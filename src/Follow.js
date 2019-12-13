import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row",
    margin: "0 80px 0 80px"
  },

  roots2: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row",
    margin: "0 80px 0 80px"
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function Follow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.roots2}>
        <Container maxWidth="lg">
          <div className={classes.secondRoot}>
            {/* title */}
            <Grid container item id="grids">
              <Grid item xs={12}>
                <Button
                  size="small"
                  href=""
                  style={{
                    marginRight: "2%",
                    backgroundColor: "#e0e0e0",
                    color: "#757575",
                    fontSize: "10px"
                  }}
                >
                  Books
                </Button>
                <Button
                  size="small"
                  href=""
                  style={{
                    marginRight: "2%",
                    backgroundColor: "#e0e0e0",
                    color: "#757575",
                    fontSize: "10px"
                  }}
                >
                  Skill
                </Button>
                <Button
                  size="small"
                  href=""
                  style={{
                    marginRight: "2%",
                    backgroundColor: "#e0e0e0",
                    color: "#757575",
                    fontSize: "10px"
                  }}
                >
                  Self Imporovement
                </Button>
                <Button
                  size="small"
                  href=""
                  style={{
                    marginRight: "2%",
                    backgroundColor: "#e0e0e0",
                    color: "#757575",
                    fontSize: "10px"
                  }}
                >
                  Productivity
                </Button>
                <Button
                  size="small"
                  href=""
                  style={{
                    marginRight: "2%",
                    backgroundColor: "#e0e0e0",
                    color: "#757575",
                    fontSize: "10px"
                  }}
                >
                  Life
                </Button>
              </Grid>
            </Grid>
            {/* CLAPS and Social Icon */}
            <Grid container item id="grids" style={{ marginTop: "50px" }}>
              <Grid item xs={1}>
                <IconButton>
                  <img src={require("./img/clapping.png")} width="80%" />
                </IconButton>
              </Grid>
              <Grid item xs={2} style={{ marginTop: "15px" }}>
                <Typography
                  variant="caption"
                  component="h2"
                  style={{ color: "#212121", fontWeight: "bold" }}
                >
                  54K Claps
                </Typography>
              </Grid>
              {/* FOLOW */}
              <Grid item xs={8} style={{ textAlign: "right" }}>
                {" "}
                <div style={{ alignItems: "right" }} className="social-follow">
                  <IconButton style={{ color: "#000000", marginLeft: "30px" }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton style={{ color: "#000000" }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton style={{ color: "#000000" }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton style={{ color: "#000000" }}>
                    <BookmarkBorderIcon />
                  </IconButton>
                  <IconButton style={{ color: "#000000" }}>
                    <MoreHorizIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              style={{ marginTop: "2%", paddingBottom: "5%" }}
              spacing={2}
            >
              <Grid item xs={2} lg={2}>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid item xs={8} lg={8} style={{ width: "85%" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="caption"
                    component="h2"
                    style={{
                      color: "#616161"
                    }}
                  >
                    WRITTEN BY
                  </Typography>
                  <Typography variant="h6" component="h1">
                    Jhon Lennon
                  </Typography>
                </div>

                <Typography
                  variant="caption"
                  component="h2"
                  style={{
                    textAlign: "left",
                    color: "#616161"
                  }}
                >
                  Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
                  Obstacle Is The Way’ http://amzn.to/24qKRWR
                </Typography>
              </Grid>
              <Grid item xs={2} lg={2}>
                <div
                  style={{
                    width: "100%",
                    fontSize: "small",
                    justifyContent: "right",
                    margin: "35px 0 0 25px"
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      borderColor: "#1b5e20",
                      color: "#1b5e20",
                      fontSize: "10px"
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              style={{ marginTop: "5%", paddingBottom: "15%" }}
              spacing={2}
            >
              <Grid item xs={2} lg={2}>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid item xs={8} lg={8} style={{ width: "85%" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" component="h1">
                    Jhon Lennon
                  </Typography>
                </div>

                <Typography
                  variant="caption"
                  component="h2"
                  style={{
                    textAlign: "left",
                    color: "#616161"
                  }}
                >
                  Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
                  Obstacle Is The Way’ http://amzn.to/24qKRWR
                </Typography>
              </Grid>
              <Grid item xs={2} lg={2}>
                <div
                  style={{
                    width: "100%",
                    fontSize: "small",
                    justifyContent: "right",
                    margin: "35px 0 0 25px"
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      borderColor: "#1b5e20",
                      color: "#1b5e20",
                      fontSize: "10px"
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Button
                  href="/comment"
                  variant="outlined"
                  size="large"
                  style={{
                    borderColor: "#1b5e20",
                    color: "#1b5e20",
                    width: "100%"
                  }}
                >
                  SEE RESPONSES (216)
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
