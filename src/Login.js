import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import * as auth from './api/auth';
import Container from "@material-ui/core/Container";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
const bgform = {
  backgroundImage:
    "url('https://cdn-images-1.medium.com/max/900/1*gnUBeL-INIVDk0_GyL8x1g.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%"
};

 function LoginForm({onSubmit}) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className="formRegister">
        <Card>
          <CardContent style={bgform}>
            <div>
              <h2 style={{ textAlign: "center" }}>Welcome Back.</h2>
              <div className="tagForm">
                <p>
                  Sign in to get personalized story recommendations, follow
                  authors and topics you love, and interact with stories.
                </p>
              </div>
            </div>
            <div className="Register">
             
                <form noValidate autoComplete="off" onSubmit={(event)=>{
                  event.preventDefault();
                  onSubmit(event)
                }}>
                  <TextField
                    className={classes.margin}
                    label="username"
                    name="username"
                    type="text"
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
                  <Button
                    type="submit"
                    name="register"
                    variant="outlined"
                    size="large"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "30px", marginBottom: "20px" }}
                  >
                    Login
                  </Button>
                </form>
             

              <div className="tagForm">
                <p>
                  No account?{" "}
                  <Link to="/Register" className="Links">
                    Register
                  </Link>
                </p>
              </div>
              <div className="tagFormFooter">
                <p>
                  To make Medium work, we log user data and share it with
                  service providers. Click “Sign In” above to accept Medium’s
                  Terms of Service & Privacy Policy.{" "}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
export default class Login extends React.Component {
  handleSubmit = (event) => {
    const username = event.target.username.value;
    const password = event.target.password.value;

    auth.login({ username, password })
      .then(() => {
        this.props.history.push('/home');//direct halaman
      })
      .catch((error) => {
        alert('Gagal login')

        throw error;
      });
  }

  render() {
    return (
      <div>
        <LoginForm 
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}