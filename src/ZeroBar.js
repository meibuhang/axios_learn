import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function ZeroBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <Tab
              label="MISSION ORIGINALS
"
            />
            <Tab label="SUBSCRIBE" />
          </Tabs>
        </div>
      </Paper>
    </div>
  );
}
