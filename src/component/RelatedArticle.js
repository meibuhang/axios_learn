import React, { Component } from "react";
import "../css/related.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { typography } from "@material-ui/system";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { IconButton } from "@material-ui/core";

class RelatedArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedArticleList: [
        {
          title: "Lorem Ipsum",
          data: {
            subtitle: "dumbways is bla bla bla",
            articleImage: "https://unsplash.it/800/600?image=187",
            postDate: "34 Jan, 2019",
            category: "mission.org",
            minRead: 7,
            author: "Pandu Wijantiro",
            totalClaps: 45,
            authorImage:
              "https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
          }
        },
        {
          title: "Lorem Ipsum",
          data: {
            subtitle: "dumbways is bla bla bla",
            articleImage: "https://unsplash.it/800/600?image=187",
            postDate: "34 Jan, 2019",
            category: "mission.org",
            minRead: 7,
            author: "Pandu Wijantiro",
            totalClaps: 45,
            authorImage:
              "https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
          }
        },
        {
          title: "Lorem Ipsum",
          data: {
            subtitle: "dumbways is bla bla bla",
            articleImage: "https://unsplash.it/800/600?image=187",
            postDate: "34 Jan, 2019",
            category: "mission.org",
            minRead: 7,
            author: "Pandu Wijantiro",
            totalClaps: 45,
            authorImage:
              "https://upload.wikimedia.org/wikipedia/commons/9/97/John_Lennon_%28cropped%29.jpg"
          }
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="root">
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            More For Medium
          </Typography>
          <Divider />
          <Grid container item xs={12} style={{ paddingTop: "40px" }}>
            {this.state.relatedArticleList.map(relatedArticleData => (
              <>
                <Grid item xs={4}>
                  <Card style={{ margin: "0 10px 0 0" }}>
                    <CardActionArea>
                      <img
                        src={relatedArticleData.data.articleImage}
                        className="mediaPic"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {relatedArticleData.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {relatedArticleData.data.subtitle}
                        </Typography>
                      </CardContent>
                      <Grid container item xs={12}>
                        <Grid style={{ width: "55px" }}>
                          <Avatar
                            src={relatedArticleData.data.authorImage}
                            className="avaPic"
                          />
                        </Grid>
                        <Grid>
                          <div className="authorDateRead">
                            <Typography
                              style={{
                                fontSize: "10px",
                                color: "#bdbdbd",
                                textAlign: "left"
                              }}
                            >
                              {relatedArticleData.data.postDate}
                              <span>
                                *{relatedArticleData.data.minRead} Min Read
                              </span>
                            </Typography>
                            <Typography
                              style={{ fontSize: "10px", color: "#bdbdbd" }}
                            >
                              {relatedArticleData.data.author}
                              <span> {relatedArticleData.data.category}</span>
                            </Typography>
                          </div>
                        </Grid>
                        {/* claps */}
                        <Grid
                          container
                          item
                          style={{
                            width: "110px"
                          }}
                        >
                          <IconButton>
                            <img
                              src={require("../img/clapping.png")}
                              width="15px"
                            />
                          </IconButton>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            component="p"
                            style={{ paddingTop: "15px" }}
                          >
                            54K
                          </Typography>

                          {/* saved */}
                          <IconButton>
                            <BookmarkBorderIcon size="small" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            ))}
            {/* card kedua */}
          </Grid>
        </div>
        <div className="footerRelated">
          <div className="root">
            <Grid container item xs={12} style={{ margin: "3%  0" }}>
              <Grid item xs={4} style={{ paddingRight: "5%" }}>
                <Typography> Discover Medium</Typography>

                <Typography
                  variant="caption"
                  style={{
                    fontSize: "10px",
                    color: "#ececec",
                    textAlign: "left"
                  }}
                >
                  Welcome to a place where words matter. On Medium, smart voices
                  and original ideas take center stage - with no ads in sight.
                  Watch
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ paddingRight: "5%" }}>
                <Typography> Discover Medium</Typography>

                <Typography
                  variant="caption"
                  style={{
                    fontSize: "10px",
                    color: "#ececec",
                    textAlign: "left"
                  }}
                >
                  Welcome to a place where words matter. On Medium, smart voices
                  and original ideas take center stage - with no ads in sight.
                  Watch
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ paddingRight: "5%" }}>
                <Typography> Discover Medium</Typography>

                <Typography
                  variant="caption"
                  style={{
                    fontSize: "10px",
                    color: "#ececec",
                    textAlign: "left"
                  }}
                >
                  Welcome to a place where words matter. On Medium, smart voices
                  and original ideas take center stage - with no ads in sight.
                  Watch
                </Typography>
              </Grid>
            </Grid>
            <div className="vDivider"></div>
            <Typography
              variant="caption"
              style={{
                color: "#ececec",
                textAlign: "left",
                fontFamily: ["Gupter", "Oswald", "Merriweather"].join(","),
                fontWeight: 700,
                fontSize: 25
              }}
            >
              {" "}
              Medium{" "}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedArticle;
