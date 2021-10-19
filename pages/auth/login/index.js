import React from "react";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//Hooks
import { useDispatch } from "react-redux";
import { useForm } from "../../../custom-hooks/useForm";

import { standarForm } from "../../../styles/react-material-styles";
import { CopyRightGlobal } from "../../../components/global/copyRight.global";

//Utils
import CodexmakerApi from "../../../server/endpoints";

//Redux
import { openSnackBar } from "../../../redux/actions/snackbar.actions";
import { login } from "../../../redux/actions/auth.actions";

const LoginScreen = () => {
  const classes = standarForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const [formValues, handleInputChange] = useForm({
    email: "codexmaker@gmail.com",
    password: "Rikaleonov1",
  });

  const cookies = new Cookie();
  const { email, password } = formValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await CodexmakerApi("POST", "sign-in", formValues, null);

    if (result.status === "success") {
      const { _id, name, rol } = result.user;
      dispatch(login(_id, name, rol));
      dispatch(
        openSnackBar({
          status: true,
          type: "success",
          message: result.message,
        })
      );

      cookies.set("token", result.token, { path: "/" });
      router.push({
        pathname: "/",
      });
    }

    if (result.status === "error") {
      dispatch(
        openSnackBar({
          status: true,
          type: "error",
          message: result.error,
        })
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form></form>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRightGlobal />
      </Box>
    </Container>
  );
};

export default LoginScreen;
