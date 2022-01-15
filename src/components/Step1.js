import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

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

export default function Step1({ formData, setFormData }) {
  const [genderValue, setGenderValue] = React.useState("");
  const [branchValue, setBranchValue] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState();

  const handleChangeGender = (event) => {
    setGenderValue(event.target.value);
  };
  const handleChangeBranch = (event) => {
    setBranchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.fName}
            onChange={(event) =>
              setFormData({ ...formData, fName: event.target.value })
            }
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.mName}
            onChange={(event) =>
              setFormData({ ...formData, mName: event.target.value })
            }
            required
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.lName}
            onChange={(event) =>
              setFormData({ ...formData, lName: event.target.value })
            }
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["day"]}
              label="Your Date of Birth"
              value={new Date()}
              onChange={(event) => {
                setDateOfBirth(event);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.usn}
            onChange={(event) =>
              setFormData({ ...formData, usn: event.target.value })
            }
            required
            fullWidth
            id="usn"
            label="University Serial Number (USN)"
            name="usn"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.fatherName}
            onChange={(event) =>
              setFormData({ ...formData, fatherName: event.target.value })
            }
            required
            id="fatherName"
            name="fatherName"
            label="Father's name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            variant="standard"
            id="branch"
            select
            label="Select"
            value={formData.branch}
            onChange={(event) => {
              { handleChangeBranch(event) };
              setFormData({ ...formData, branch: event.target.value })
            }}
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

        <Grid item xs={12} sm={4}>
          <TextField
            variant="standard"
            id="gender"
            select
            label="Select"
            value={formData.gender}
            onChange={(event) => {
              { handleChangeGender(event) };
              setFormData({ ...formData, gender: event.target.value })
            }}
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
      </Grid>

      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.studentMobile}
            onChange={(event) =>
              setFormData({ ...formData, studentMobile: event.target.value })
            }
            required
            fullWidth
            variant="standard"
            id="phone"
            label="Student Mobile No."
            name="phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.parentMobile}
            onChange={(event) =>
              setFormData({ ...formData, parentMobile: event.target.value })
            }
            required
            fullWidth
            variant="standard"
            id="parentPhone"
            label="Parent Mobile No"
            name="parentPhone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.studentEmail}
            onChange={(event) =>
              setFormData({ ...formData, studentEmail: event.target.value })
            }
            required
            fullWidth
            id="email"
            label="Student E-Mail ID"
            name="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.parentEmail}
            onChange={(event) =>
              setFormData({ ...formData, parentEmail: event.target.value })
            }
            required
            fullWidth
            id="parentEmail"
            label="Parent E-Mail ID"
            name="parentEmail"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.rnsitEmail}
            onChange={(event) =>
              setFormData({ ...formData, rnsitEmail: event.target.value })
            }
            required
            fullWidth
            id="rnsEmail"
            label="RNSIT E-Mail ID ( usn.name@gmail.com )"
            name="rnsEmail"
            variant="standard"
          />
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
