import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ZeroBar from "./component/ZeroBar";
import Header from "./component/Header";
import RelatedArticle from "./component/RelatedArticle";
import Follow from "./Follow";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row"
    // margin: "0 80px 0 80px"
  },
  roots2: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row",
    margin: "0 80px 0 80px"
  },
  secondRoot: {
    flexGrow: 1,
    flexDirection: "row"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 300
  },
  head: {
    fontFamily: ["Prompt", "serif"].join(","),
    fontWeight: 500,
    fontSize: "2.2em",
    lineHeight: "1.2em"
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function Article() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header onlyNavbar={true} />
      <ZeroBar />
      <div className={classes.roots2}>
        <Container maxWidth="lg">
          <Grid container id="grids">
            <Grid
              item
              xs={12}
              md={12}
              style={{
                marginTop: "10px"
              }}
            >
              <img
                src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"
                width="100%"
              />
            </Grid>
          </Grid>
          <div className={classes.secondRoot}>
            {/* title */}
            <Grid container item id="grids">
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    padding: "0 20% 2% 20%",
                    alignItem: "center",
                    textDecoration: "underline"
                  }}
                >
                  <Link to="/">
                    <Typography
                      variant="caption"
                      component="h2"
                      style={{
                        color: "#bdbdbd",
                        textDecorationColor: "#bdbdbd"
                      }}
                    >
                      BOOK
                    </Typography>
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  margin: "0",
                  textAlign: "lef"
                }}
              >
                <div style={{ padding: "0 20% 0 20%", alignItem: "left" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.head}
                  >
                    If You Only Read A Few Books In 2018, Read These
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* Social Icon */}
        <Container maxWidth="lg">
          <div
            className={classes.secondRoot}
            style={{ padding: "0 20% 0 20%", alignItem: "left" }}
          >
            <Grid container item lg={12} id="grids">
              <Grid item xs={2} lg={2}>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid
                item
                xs={6}
                lg={6}
                style={{ width: "50%", marginTop: "10px" }}
              >
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="caption"
                    component="h1"
                    style={{ margin: "0 10% 0 4px", justifyContent: "left" }}
                  >
                    Jhon Lennon
                  </Typography>
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
                <div
                  style={{
                    display: "block",
                    color: "#616161"
                  }}
                >
                  <Typography
                    variant="caption"
                    component="h2"
                    style={{ margin: "0 5% 0 4px", justifyContent: "left" }}
                  >
                    Jun 26, 2018 · 10 min read
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                lg={4}
                style={{
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "small"
                }}
              >
                <div style={{ paddingTop: "10%" }}>
                  <IconButton style={{ color: "#000000" }}>
                    <TwitterIcon />
                  </IconButton>

                  <IconButton style={{ color: "#000000" }}>
                    <FacebookIcon />
                  </IconButton>

                  <IconButton style={{ color: "#000000" }}>
                    <BookmarkBorderIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
            {/* Article */}
            <div style={{ display: "flex" }}>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: "200%",
                  color: "#424242"
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#000000",
                    textDecoration: "underline",
                    fontStyle: "italic"
                  }}
                >
                  Deep Work: Rules for Focused Success in a Distracted World by
                  Cal Newport Media consumption went way up in 2017.{" "}
                </span>
                For most of us, that meant happiness and productivity went way
                down. The world is becoming noisier and will become more so
                every day. If you can’t cultivate the ability to have quiet,
                insightful, deeply focused periods of productive work, you’re
                going to get screwed. This is a book that explains how to
                cultivate and protect that skill — the ability to do deep work.
                I strongly urge you to begin this practice in 2018— if you want
                to get anything done or perform your best.
              </p>
            </div>
          </div>
          <Follow />
        </Container>
      </div>
      <RelatedArticle />
    </div>
  );
}
