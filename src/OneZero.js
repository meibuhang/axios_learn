import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0 40px 0 40px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const oneZero = {
  fontFamily: ["medium-content-sans-serif-font",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif"].join(","),
  fontWeight: 900,
  fontSize: "70px"
};
const fontHeader = {
  fontFamily: [
    'Bebas Neue', 
    'Playfair Display',
    "Open Sans",
    "Helvetica Neue",
    "sans-serif"
  ].join(","),
  fontSize: "18px",
  fontWeight:"bold"
};

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item xs={12} style={{ marginTop: "50px", }}>
        <Grid itemstyle={{
            marginTop: "10px",
            backgroundColor:"#cccccc"
            
          }}>
          <Typography variant="h2" align="left" style={oneZero}>
            OneZero
          </Typography>
        </Grid>
        <Grid
          item
          
          style={{
            marginTop: "10px",
            marginLeft: "10px",
  
            
          }}
        >
          <div className="paraghraph">
            <Typography
              variant="subtitle2"
              component="h4"
              style={fontHeader}
              className="oneZero"
            >
              <span>The front lines of the future. </span> A Medium publication
              about tech and science.
            </Typography>
          </div>
        </Grid>
        <Grid item >
        <div style={{ marginTop: "70px" }}>
              <Button variant="outlined" color="primary" size="small">
                Follow
              </Button>
            </div>
            
        </Grid>
      </Grid>
    </div>
  );
}
