// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import MuiCard from "@mui/material/Card";
// import { styled } from "@mui/material/styles";
// import { FormControlLabel } from "@mui/material";
// const { useForm } = "react-hook-form"

// const Card = styled(MuiCard)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignSelf: "center",
//   width: "100%",
//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: "auto",
//   [theme.breakpoints.up("sm")]: {
//     maxWidth: "450px",
//   },
//   boxShadow:
//     "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
//   ...theme.applyStyles("dark", {
//     boxShadow:
//       "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
//   }),
// }));

// const SignInContainer = styled(Stack)(({ theme }) => ({
//   height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
//   minHeight: "100%",
//   padding: theme.spacing(2),
//   [theme.breakpoints.up("sm")]: {
//     padding: theme.spacing(4),
//   },
//   "&::before": {
//     content: '""',
//     display: "block",
//     position: "absolute",
//     zIndex: -1,
//     inset: 0,
//     backgroundImage:
//       "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
//     backgroundRepeat: "no-repeat",
//     ...theme.applyStyles("dark", {
//       backgroundImage:
//         "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
//     }),
//   },
// }));

// const Login = () => {
  
//   const { register, handlesSubmit} = useForm()
//   const onSubmit = (value) => console.log(value)

//   return (
//     <>
//       <CssBaseline enableColorScheme />
//       <SignInContainer direction="column" justifyContent="space-between">
//         <Card variant="outlined">
//           <Typography
//             component="h1"
//             variant="h4"
//             sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
//           >
//             Login
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               width: "100%",
//               gap: 2,
//             }}
//           >
//             <FormControl>
//               <FormLabel htmlFor="email">Username</FormLabel>
//               <TextField
//                 // error={emailError}
//                 // helperText={emailErrorMessage}
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Username"
//                 autoComplete="email"
//                 autoFocus
//                 required
//                 fullWidth
//                 variant="outlined"
//                 {...register("username")}
//                 // color={emailError ? "error" : "primary"}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <TextField
//                 // error={passwordError}
//                 // helperText={passwordErrorMessage}
//                 name="password"
//                 placeholder="••••••"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 autoFocus
//                 required
//                 fullWidth
//                 variant="outlined"
//                 {...register("password")}
//                 // color={passwordError ? "error" : "primary"}
//               />
//             </FormControl>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               //   onClick={validateInputs}
//             >
//               Sign in
//             </Button>
//             <Typography sx={{ textAlign: "center" }}>
//               Don&apos;t have an account?{" "}
//               <Link
//                 href="/register"
//                 variant="body2"
//                 sx={{ alignSelf: "center" }}
//               >
//                 Register
//               </Link>
//             </Typography>
//           </Box>
//         </Card>
//       </SignInContainer>
//     </>
//   );
// };

// export default Login;












import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
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

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => console.log(value);

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="username">username</FormLabel>
              <TextField
                // error={usernameError}
                // helperText={usernameErrorMessage}
                id="username"
                type="username"
                name="username"
                placeholder="fill your username"
                autoComplete="username"
                autoFocus
                required
                fullWidth
                variant="outlined"
                {...register("username")}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                {...register("password")}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //   onClick={validateInputs}
            >
              Sign in
            </Button>
            <center>
              <Link to="/register">Register</Link>
            </center>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
};

export default Login;