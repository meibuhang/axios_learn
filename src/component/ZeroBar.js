import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function ZeroBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square>
        <Divider />
        <div
          style={{
            display: "flex",
            margin: "0 40px 0 40px",
            boxShadow: "none",
            borderBottom: "none"
          }}
        >
          <Button href="/home">
            <img src="https://miro.medium.com/max/216/1*IPEsgX_bZKP_7OubdnI7-Q.png" />
          </Button>
          <div style={{ marginTop: "15px", fontFamily: "Raleway" }}>
            {" "}
            <Link
              to=" "
              style={{
                margin: "0 10px 0 10px",
                color: "#9e9e9e",
                marginLeft: "10px",
                fontSize: "14px"
              }}
            >
              MISSION ORIGINALS
            </Link>
            <Link
              to=""
              style={{
                margin: "0 10px 0 10px",
                color: "#9e9e9e",
                marginLeft: "10px",
                fontSize: "14px"
              }}
            >
              SUBSCRIBE
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
}
