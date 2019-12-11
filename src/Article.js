import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row",
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item xs={12} id="grids">
        <Grid
          item
          style={{
            marginTop: "10px"
          }}
        >
          <img
            src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" width="70%"
          />
        </Grid>
      </Grid>
    </div>
  );
}
