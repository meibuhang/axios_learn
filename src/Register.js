import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
const bgform={
  backgroundImage:"url('https://cdn-images-1.medium.com/max/900/1*gnUBeL-INIVDk0_GyL8x1g.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
};
export default function Register() {
  const classes = useStyles();

  return (
    <div className="formRegister">
      <Card>
        <CardContent style={bgform}>
          <div>
            <h2 style={{textAlign:"center"}}>Join Medium.</h2>
            <div className="tagForm">
              <p>
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                you love.
              </p>
            </div>
          </div>
          <div className="Register">
            <FormControl>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.margin}
                  label="Name"
                  id="input-with-icon-textfield"
                  name="name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Email"
                  name="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Password"
                  name="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <Button type="submit" name="register"
                variant="outlined"
                size="large"
                color="primary"
                fullWidth
                style={{ marginTop: "30px", marginBottom: "20px" }}
              >
                Register
              </Button>
              </form>
            </FormControl>

            <div className="tagForm">
              <p>
                Already have an account?{" "}
                <Link to="/Login" className="Links">
                  Sign In
                </Link>
              </p>
            </div>
            <div className="tagFormFooter">
              <p>
                To make Medium work, we log user data and share it with service
                providers. Click “Sign Up” above to accept Medium’s Terms of
                Service & Privacy Policy.{" "}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
