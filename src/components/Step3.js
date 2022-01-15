import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

export default function Step2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Further Details
      </Typography>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
          <TextField
            required
            id="citizenship"
            name="citizenship"
            label="Citizenship"
            fullWidth
            variant="standard"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="passportNo"
            name="passportNo"
            label="Passport No"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="aadharNo"
            name="aadharNo"
            label="Aadhar No."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="panNo"
            name="panNo"
            label="PAN Card No."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="voterNo"
            name="voterNo"
            label="Voter Card No."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="drivingLicenseNo"
            name="drivingLicenseNo"
            label="Driving License No."
            fullWidth
            variant="standard"
          />
        </Grid>
        
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
      <Typography variant="h6" gutterBottom>
        Bank Details
      </Typography>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="accountNo"
            name="accountNo"
            label="Bank Account No."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bankNo"
            name="bankNo"
            label="Bank Name"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
      
    </React.Fragment>
  );
}
