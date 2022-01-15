import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// Used in select dropdown for Gender
const genderList = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

// Used in select dropdown for Branch
const branchList = [
  {
    value: "CSE",
    label: "CSE - Computer Science and Engineering",
  },
  {
    value: "ISE",
    label: "ISE - Information Science and Engineering",
  },

  {
    value: "ECE",
    label: "ECE - Electronics and Communication Engineering",
  },
  {
    value: "EEE",
    label: "EEE - Electrical and Electronics Engineering",
  },
  {
    value: "EIE",
    label: "EIE - Electronics & Instrumentation Engineering",
  },
  {
    value: "MECH",
    label: "MECH - Mechanical Engineering",
  },
  {
    value: "CIV",
    label: "CIV - Civil Engineering",
  },
  {
    value: "AI&ML",
    label: "AI&ML - Artificial intelligence & Machine Learning",
  },
];

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [genderValue, setGenderValue] = React.useState("");
  const [branchValue, setBranchValue] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const handleChange = (event) => {
    setGenderValue(event.target.value);
    setBranchValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                id="usn"
                label="University Serial Number (USN)"
                name="usn"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="branch"
                select
                label="Select"
                value={branchValue}
                onChange={handleChange}
                helperText="Please select your Branch"
                fullWidth
              >
                {branchList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="gender"
                select
                label="Select"
                value={genderValue}
                onChange={handleChange}
                helperText="Please select your Gender"
                fullWidth
              >
                {genderList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ marginX: 3}}>
                <DatePicker
                  views={['day']}
                  label="Date of Birth"
                  value={dateOfBirth}
                  onChange={(newValue) => {
                  setDateOfBirth(newValue);}}
                  renderInput={(params) => <TextField {...params} helperText={null} />}/>
              </LocalizationProvider>
              <TextField
                required
                id="phone"
                label="Phone Number"
                name="phone"
                sx={{ marginX: 3}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5, mb: 10 }} />
    </Container>
  );
}
