import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";

const quotaList = [
  {
    value: "COMEDK",
    label: "COMEDK",
  },
  {
    value: "KCET",
    label: "KCET",
  },
  {
    value: "Management",
    label: "Management",
  },
];

export default function Step6() {
  const [quotaValue, setQuotaValue] = React.useState("");
  const handleChange = (event) => {
    setQuotaValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Admission Quota
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <TextField
            variant="standard"
            id="quota"
            select
            label="Select"
            value={quotaValue}
            onChange={handleChange}
            helperText="Please select your Admission Quota"
            fullWidth
          >
            {quotaList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="cet-rank"
            name="cet-rank"
            label="CET Rank"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="comedk-rank"
            name="comedk-rank"
            label="COMEDK Rank"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        Backlogs and Year Gap
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} >
          <TextField
            required
            id="no-of-backlog"
            name="no-of-backlog"
            label="No. of Backlogs"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="year-gap-10-to-12"
            name="year-gap-10-to-12"
            label="Year gap between 10th and 12th"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="year-gap-12-to-be"
            name="year-gap-12-to-be"
            label="Year gap between 12th and B.E."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="year-gap-during-be"
            name="year-gap-during-be"
            label="Year gap during B.E. (till current semester)"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
