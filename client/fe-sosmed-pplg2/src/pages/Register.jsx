import React from 'react'
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import { FormControlLabel } from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));


const Register = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Register
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <Grid
              container
              rowSpacing={2}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            >
              <Grid item size={2}>
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <TextField
                    // error={usernameError}
                    // helperText={usernameErrorMessage}
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    // color={emailError ? "error" : "primary"}
                  />
                </FormControl>
              </Grid>
              <Grid item size={2}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                    // error={emailError}
                    // helperText={emailErrorMessage}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    // color={emailError ? "error" : "primary"}
                  />
                </FormControl>
              </Grid>

              <Grid item size={2}>
                <FormControl>
                  <FormLabel htmlFor="firtsname">Firts name</FormLabel>
                  <TextField
                    // error={firtsnameError}
                    // helperText={firtsnameErrorMessage}
                    name="firtsname"
                    placeholder="First name"
                    type="firtsname"
                    id="firtsname"
                    autoComplete="current-firtsname"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    // color={firtsnameError ? "error" : "primary"}
                  />
                </FormControl>
              </Grid>

              <Grid item size={2}>
                <FormControl>
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <TextField
                    // error={lastnameError}
                    // helperText={lastnameErrorMessage}
                    name="lastname"
                    placeholder="Last name"
                    type="lastname"
                    id="lastname"
                    autoComplete="current-lastname"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    // color={lastnameError ? "error" : "primary"}
                  />
                </FormControl>
              </Grid>

              <Grid item size={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Classes</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>X</MenuItem>
                    <MenuItem value={20}>XI</MenuItem>
                    <MenuItem value={30}>XII</MenuItem>
                    <MenuItem value={30}>XIII</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item size={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Major</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>PPLG</MenuItem>
                  <MenuItem value={20}>TKRO</MenuItem>
                  <MenuItem value={30}>TJKT</MenuItem>
                  <MenuItem value={30}>TBSM</MenuItem>
                  <MenuItem value={30}>TM</MenuItem>
                  <MenuItem value={30}>DKV</MenuItem>
                  <MenuItem value={30}>HR</MenuItem>
                  <MenuItem value={30}>MPLB</MenuItem>
                </Select>
              </FormControl>
              </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                //   onClick={validateInputs}
                >
                Sign in
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  Login
                </Link>
              </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </>
  );
}

export default Register
