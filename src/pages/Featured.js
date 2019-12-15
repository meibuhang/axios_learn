import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  IconButton,
  Typography,
  TurnedInIcon,
  Button
} from "@material-ui/core/";
import StarRateIcon from "@material-ui/icons/StarRate";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "../css/featured.css";
class Featured extends Component {
  render() {
    return (
      <div className="roots">
        <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
          Featured :
        </Typography>
        <Card style={{ marginTop: "20px" }}>
          <Paper>
            <Grid container>
              <Grid item xs={1} lg={2} md={1} style={{ padding: "10px" }}>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg" />
              </Grid>
              <Grid
                item
                xs={10}
                lg={6}
                style={{ marginTop: "10px", alignItem: "flex-start" }}
              >
                <div style={{ display: "flex", marginRight: "50px" }}>
                  <Typography
                    variant="caption"
                    component="h1"
                    style={{
                      margin: "0.5% 10% 0 4px",
                      justifyContent: "left"
                    }}
                  >
                    Jhon Lennon
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    color: "#616161"
                  }}
                >
                  <Typography
                    variant="caption"
                    component="h2"
                    style={{ margin: "0 2% 0 4px", justifyContent: "left" }}
                  >
                    Jun 26, 2018 · 10 min read
                  </Typography>
                  <StarRateIcon style={{ fontSize: "18px" }} />
                </div>
              </Grid>

              <Grid item xs={1} style={{ padding: "20px 0 0 180px" }}>
                <div style={{ textAlign: "right" }}>
                  <StarRateIcon />
                </div>
              </Grid>
            </Grid>
            {/* Media Featured */}
            <CardActionArea>
              <Grid item xs={12}>
                <img
                  src="https://unsplash.it/800/600?image=93"
                  width="100%"
                  height="300px"
                  style={{
                    padding: "10px 15px"
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="subtitles">
                  <Typography
                    variant="h5"
                    className="subtitle-caption"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    How To Recover When The World Breaks You
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    className="subtitle-caption"
                    style={{ color: "#757575" }}
                  >
                    {" "}
                    We all break. The key is to become strong in the broken…
                  </Typography>{" "}
                </div>
              </Grid>
            </CardActionArea>
            <Grid container>
              <Grid item xs={6}>
                <div style={{ textAlign: "left" }}>
                  <IconButton>
                    <BookmarkBorderIcon />
                    <Typography
                      variant="subtitle1"
                      component="body"
                      style={{ color: "#616161" }}
                    >
                      54k
                    </Typography>
                  </IconButton>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ textAlign: "right" }}>
                  <IconButton>
                    <Typography
                      variant="subtitle1"
                      component="body"
                      style={{ color: "#616161" }}
                    >
                      67 responses
                    </Typography>
                    <BookmarkBorderIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Card>

        {/* latest article */}
        <div className="latestArticle">
          <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
            Latest :
          </Typography>
          <Card style={{ marginTop: "20px" }}>
            <Paper>
              <Grid container>
                <Grid item xs={1} lg={2} md={1} style={{ padding: "10px" }}>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg" />
                </Grid>
                <Grid
                  item
                  xs={9}
                  lg={6}
                  style={{ marginTop: "10px", alignItem: "flex-start" }}
                >
                  <div style={{ display: "flex", marginRight: "50px" }}>
                    <Typography
                      variant="caption"
                      component="h1"
                      style={{
                        margin: "0.5% 10% 0 4px",
                        justifyContent: "left"
                      }}
                    >
                      Jhon Lennon
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      color: "#616161"
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="h2"
                      style={{ margin: "0 2% 0 4px", justifyContent: "left" }}
                    >
                      Jun 26, 2018 · 10 min read
                    </Typography>
                    <StarRateIcon style={{ fontSize: "18px" }} />
                  </div>
                </Grid>
                <Grid item xs={1} style={{ padding: "20px 0 0 180px" }}>
                  <div style={{ textAlign: "right" }}>
                    <StarRateIcon />
                  </div>
                </Grid>
              </Grid>
              {/* Media Featured */}
              <CardActionArea>
                <Grid item xs={12}>
                  <img
                    src="https://unsplash.it/800/600?image=95"
                    width="100%"
                    height="300px"
                    style={{
                      padding: "10px 15px"
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="subtitles">
                    <Typography
                      variant="h5"
                      className="subtitle-caption"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      How To Recover When The World Breaks You
                    </Typography>{" "}
                    <Typography
                      variant="subtitle1"
                      className="subtitle-caption"
                      style={{ color: "#757575" }}
                    >
                      {" "}
                      We all break. The key is to become strong in the broken…
                    </Typography>{" "}
                  </div>
                </Grid>
              </CardActionArea>
              <Grid container>
                <Grid item xs={6}>
                  <div style={{ textAlign: "left" }}>
                    <IconButton>
                      <BookmarkBorderIcon />
                      <Typography
                        variant="subtitle1"
                        component="body"
                        style={{ color: "#616161" }}
                      >
                        54k
                      </Typography>
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: "right" }}>
                    <IconButton>
                      <Typography
                        variant="subtitle1"
                        component="body"
                        style={{ color: "#616161" }}
                      >
                        67 responses
                      </Typography>
                      <BookmarkBorderIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Card>
        </div>
      </div>
    );
  }
}
export default Featured;
