import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Header from "./component/Header";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import "./App.css";
import { IconButton } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { showBtn: "none" };
  }

  render() {
    return (
      <div
        style={{
          flexGrow: 1,
          flex: "1 1 0%",
          flexDirection: "row"
        }}
      >
        <Header onlyNavbar={true} />
        <div style={{ margin: "0 18% 5% 18%" }}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ paddingBottom: "2%", color: "#424242" }}
                  >
                    Showing responses for:
                  </Typography>
                  <div
                    style={{
                      border: "1px solid #e0e0e0",
                      padding: "2% 2% 0 2%"
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        {" "}
                        <Typography variant="subtitle2">
                          If You Only Read A Few Books In 2018,
                        </Typography>
                        <div>
                          <Typography
                            variant="subtitle2"
                            component="h2"
                            style={{ paddingBottom: "2%", color: "#bdbdbd" }}
                          >
                            Jhon Lennon
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{
                            width: "100%",
                            justifyContent: "right",
                            marginLeft: "25%"
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              display: "flex"
                            }}
                          >
                            <Grid item xs={6}>
                              <IconButton>
                                <ThumbUpIcon />
                              </IconButton>

                              <Typography
                                variant="caption"
                                style={{ color: "#424242", fontSize: "10px" }}
                              >
                                54K Likes
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <IconButton>
                                <ModeCommentOutlinedIcon />
                              </IconButton>

                              <Typography
                                variant="caption"
                                style={{ color: "#424242", fontSize: "10px" }}
                              >
                                216
                              </Typography>
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* COMMENT */}
        <div style={{ background: "#f5f5f5" }}>
          <div style={{ margin: "0 18% 0 18%" }}>
            <Container maxWidth="lg">
              <Grid container>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      style={{
                        paddingBottom: "2%",
                        marginTop: "5%",
                        color: "#424242"
                      }}
                    >
                      Responses:
                    </Typography>
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e0e0e0",
                        padding: "2%"
                      }}
                    >
                      <Grid container>
                        <Grid
                          item
                          xs={2}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              justifyContent: "left"
                            }}
                          >
                            <Avatar
                              className="bigAvatar"
                              style={{ width: 50, height: 50 }}
                            >
                              R
                            </Avatar>
                          </div>
                        </Grid>
                        <Grid item xs={10}>
                          <form>
                            <TextField
                              fullWidth={true}
                              label="Write Comment..."
                              variant="outlined"
                              onFocus={() =>
                                this.setState({
                                  showBtn: "block"
                                })
                              }
                              onBlur={() =>
                                this.setState({
                                  showBtn: "none"
                                })
                              }
                            />
                            <div
                              style={{
                                display: this.state.showBtn,
                                margin: "20px 10px 10px 0"
                              }}
                            >
                              <Button
                                name="follow"
                                type="submit"
                                variant="outlined"
                                size="small"
                                style={{
                                  borderColor: "#1b5e20",
                                  color: "#1b5e20",
                                  fontSize: "10px",
                                  marginRight: "15px"
                                }}
                              >
                                Follow
                              </Button>
                              <Button
                                name="goFullScreen"
                                type="submit"
                                variant="outlined"
                                size="small"
                                style={{
                                  color: "#424242",
                                  fontSize: "10px",
                                  marginRight: "15px",
                                  border: "1px solid #424242"
                                }}
                              >
                                Go Full Screen
                              </Button>
                            </div>
                          </form>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{
                        border: "1px solid #e0e0e0",
                        padding: "2% 2% 0 2%",
                        marginTop: "5%",
                        background: "#ffffff"
                      }}
                    >
                      <Grid container>
                        <Grid item xs={1}>
                          {" "}
                          <div
                            style={{
                              justifyItems: "center",
                              paddingBottom: "15px"
                            }}
                          >
                            <Avatar
                              alt="picture Network"
                              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                              className="bigAvatar"
                            />
                          </div>
                        </Grid>
                        <Grid item xs={11}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column"
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              component="h2"
                              style={{
                                color: "#4caf50"
                              }}
                            >
                              Anne Hathaway
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              component="h2"
                              style={{
                                color: "#616161",
                                fontSize: "10px"
                              }}
                            >
                              Jun 29, 2018
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <div style={{ paddingTop: "20px" }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <div
                              style={{
                                lineHeight: "2%",
                                paddingBottom: "20px"
                              }}
                            >
                              <Typography
                                variant="caption"
                                style={{
                                  color: "#616161",
                                  fontSize: "14px"
                                }}
                              >
                                NEWSFLASH! White men are not the only people who
                                write books. This list is almost completely
                                white male authors, writing about white men.
                                This list is a joke… consider reading books by
                                people who don’t look like you and have
                                different life experiences. It might not be such
                                a bad thing to be “outwardly focused” once in a
                                while.
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid xs={6}>
                            <IconButton>
                              <ThumbUpIcon />
                            </IconButton>

                            <Typography
                              variant="caption"
                              style={{ color: "#424242", fontSize: "10px" }}
                            >
                              54K Likes
                            </Typography>
                          </Grid>
                          <Grid xs={6}>
                            <div
                              style={{
                                textAlign: "right"
                              }}
                            >
                              <Typography
                                variant="caption"
                                style={{ color: "#424242", fontSize: "10px" }}
                              >
                                20 Responses
                              </Typography>
                              <IconButton>
                                <BookmarkBorderIcon />
                              </IconButton>
                              <IconButton>
                                <ExpandMoreIcon />
                              </IconButton>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
