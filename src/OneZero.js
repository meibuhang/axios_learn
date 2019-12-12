import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import "typeface-roboto";
import Header from "./component/Header";

const useStyles = makeStyles(theme => ({
  root: {
    displey: "flex",
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row"
  },
  conten: {
    margin: "0 80px 0 80px"
  },
  secondRoot: {
    flexGrow: 1,
    flexDirection: "row",
    margin: "0 100px 0 120px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 300
  }
}));

const oneZero = makeStyles(theme => ({
  head: {
    fontFamily: [
      "medium-content-sans-serif-font",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(","),
    fontWeight: 900,
    fontSize: "70px"
  },
  center: {
    fontFamily: ["Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontWeight: 10,
    fontSize: "220%",
    paddingTop: "12%",
    width: "70%",
    marginLeft: "15%",
    textAlign: "center",
    lineHeight: "35px"
  },
  author: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    fontWeight: 400,
    fontSize: "14px",
    width: "70%",
    paddingTop: "5%",
    marginLeft: "15%",
    textAlign: "center",
    lineHeight: "15px"
  },
  dateTime: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    fontWeight: 300,
    fontSize: "12px",
    width: "70%",
    marginLeft: "15%",
    textAlign: "center",
    lineHeight: "15px"
  },

  paragraph: {
    fontFamily: ["Arial", "sans-serif"].join(","),
    fontWeight: 10,
    fontSize: "14px",
    width: "70%",
    paddingTop: "1%",
    marginLeft: "15%",
    textAlign: "center",
    lineHeight: "15px"
  },
  bottoms: {
    fontFamily: [
      "medium-content-sans-serif-font",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(","),
    fontWeight: 500,
    fontStyle: "italic",
    fontSize: "30px",
    paddingTop: "2%",
    marginLeft: "10%"
  }
}));
const fontHeader = {
  fontFamily: [
    "Bebas Neue",
    "Playfair Display",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif"
  ].join(","),
  fontSize: "18px"
};

export default function OneZero() {
  const classes = useStyles();
  const header = oneZero();

  return (
    <div className={classes.root}>
      <Header onlyNavbar={true} />
      <div className={classes.conten}>
        <Grid container item xs={12} id="grids">
          <Grid
            item
            style={{
              marginTop: "10px"
            }}
          >
            <Typography variant="h2" align="left" className={header.head}>
              OneZero
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginTop: "20px",
              marginLeft: "10px"
            }}
          >
            <div className="paraghraph">
              <Typography
                variant="subtitle2"
                component="h5"
                style={fontHeader}
                className="oneZero"
              >
                <span>The front lines of the future. </span> A Medium
                publication about tech and science.
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div style={{ marginTop: "30%" }}>
              <Button variant="outlined" color="primary" size="small">
                Follow
              </Button>
            </div>
          </Grid>
        </Grid>

        {/* akhir One Zero */}
        {/* awal artikel */}
        <Link to="/">
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={5}>
              <div className="divZero">
                <Typography
                  variant="h6"
                  component="h2"
                  className={header.center}
                >
                  The Influencer and the Hit Man
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={header.paragraph}
                >
                  How a years-long domain name feud ended in a bloody shootout
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.author}
                  style={{ color: "#eeff41" }}
                >
                  Meilina
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.dateTime}
                >
                  Dec 10 · 24 min read
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={7}>
              <div>
                <img
                  src="https://unsplash.it/800/600?image=350"
                  className="mediaZero"
                />
              </div>
            </Grid>
          </Grid>
        </Link>
        <Link to="/">
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={5}>
              <div>
                <img
                  src="https://unsplash.it/800/600?image=550"
                  className="mediaZero"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className="divZero2">
                <Typography
                  variant="h6"
                  component="h2"
                  className={header.center}
                >
                  The Influencer and the Hit Man
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={header.paragraph}
                >
                  How a years-long domain name feud ended in a bloody shootout
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.author}
                  style={{ color: "#7e57c2" }}
                >
                  Meilina
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.dateTime}
                >
                  Dec 10 · 24 min read
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Link>

        {/* Section 2 */}
        <Link to="/">
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={5}>
              <div className="divZero">
                <Typography
                  variant="h6"
                  component="h2"
                  className={header.center}
                >
                  The Influencer and the Hit Man
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={header.paragraph}
                >
                  How a years-long domain name feud ended in a bloody shootout
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.author}
                  style={{ color: "#eeff41" }}
                >
                  Meilina
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.dateTime}
                >
                  Dec 10 · 24 min read
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={7}>
              <div>
                <img
                  src="https://unsplash.it/800/600?image=558"
                  className="mediaZero"
                />
              </div>
            </Grid>
          </Grid>
        </Link>
        <Link to="/">
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={7}>
              <div>
                <img
                  src="https://unsplash.it/800/600?image=450"
                  className="mediaZero"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="divZero2">
                <Typography
                  variant="h6"
                  component="h2"
                  className={header.center}
                >
                  The Influencer and the Hit Man
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={header.paragraph}
                >
                  How a years-long domain name feud ended in a bloody shootout
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.author}
                  style={{ color: "#7e57c2" }}
                >
                  Meilina
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={header.dateTime}
                >
                  Dec 10 · 24 min read
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Link>
        {/* end of Section */}
        <Link to="/">
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className="endZero">
                <Typography
                  variant="h6"
                  component="h2"
                  className={header.bottoms}
                  style={{ color: "#000000" }}
                >
                  “ We have a few new things to share.”
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  style={{
                    marginTop: "1%",
                    marginLeft: "10%",
                    color: "#000000"
                  }}
                >
                  — Damon Beres
                </Typography>

                <Typography
                  variant="subtitle2"
                  component="h2"
                  style={{
                    marginTop: "2%",
                    marginLeft: "10%",
                    fontWeight: 300,
                    fontSize: "12px",
                    color: "#000000"
                  }}
                >
                  Welcome to a Refreshed OneZero
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  style={{
                    marginLeft: "10%",
                    fontWeight: 300,
                    fontSize: "12px",
                    color: "#000000"
                  }}
                >
                  Dec 10 · 24 min read
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Link>
        {/*  Section 3rd 2x margin root*/}
        <div className={classes.secondRoot}>
          <div style={{ width: "100%", marginTop: "5%" }}>
            <Divider variant="middle" style={{ width: "85%" }} />
            <Link to="/">
              <Box display="flex" p={1} style={{ marginTop: "2%" }}>
                <Box style={{ width: "50%", color: "#000000" }}>
                  <div>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ textAlign: "left" }}
                    >
                      Authoritarian Nations Are Turning the Internet Into a
                      Weapon
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{ textAlign: "left" }}
                    >
                      From Twitter’s spies to complete shutdowns, repressive
                      regimes are using A.I. and VPN fingerprinting to silence
                      their critics
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{
                        textAlign: "left",
                        marginTop: "7%",
                        fontSize: "12px",
                        color: "#1565c0"
                      }}
                    >
                      Meilina
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        color: "#757575"
                      }}
                    >
                      Dec 10 · 24 min read
                    </Typography>
                  </div>
                </Box>
                <Box style={{ width: "50%", textAlign: "center" }}>
                  <img
                    src="https://unsplash.it/800/600?image=558"
                    style={{
                      width: "50%",
                      height: "65%"
                    }}
                  />
                </Box>
              </Box>
            </Link>
          </div>
          <div style={{ width: "100%", marginTop: "5%" }}>
            <Divider variant="middle" style={{ width: "85%" }} />
            <Link to="/">
              <Box
                display="flex"
                p={1}
                style={{ marginTop: "2%", color: "#000000" }}
              >
                <Box style={{ width: "50%" }}>
                  <div>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ textAlign: "left" }}
                    >
                      Authoritarian Nations Are Turning the Internet Into a
                      Weapon
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{ textAlign: "left" }}
                    >
                      From Twitter’s spies to complete shutdowns, repressive
                      regimes are using A.I. and VPN fingerprinting to silence
                      their critics
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{
                        textAlign: "left",
                        marginTop: "7%",
                        fontSize: "12px",
                        color: "#1565c0"
                      }}
                    >
                      Meilina
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        color: "#757575"
                      }}
                    >
                      Dec 10 · 24 min read
                    </Typography>
                  </div>
                </Box>
                <Box style={{ width: "50%", textAlign: "center" }}>
                  <img
                    src="https://unsplash.it/800/600?image=558"
                    style={{
                      width: "50%",
                      height: "65%"
                    }}
                  />
                </Box>
              </Box>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
