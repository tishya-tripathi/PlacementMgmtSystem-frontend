import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

export default function Step5() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        S.G.P.A.
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-1"
            name="sgpa-sem-1"
            label="Semester 1"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-2"
            name="sgpa-sem-2"
            label="Semester 2"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-3"
            name="sgpa-sem-3"
            label="Semester 3"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-4"
            name="sgpa-sem-4"
            label="Semester 4"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-5"
            name="sgpa-sem-5"
            label="Semester 5"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-6"
            name="sgpa-sem-6"
            label="Semester 6"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-7"
            name="sgpa-sem-7"
            label="Semester 7"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="sgpa-sem-8"
            name="sgpa-sem-8"
            label="Semester 8"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        C.G.P.A.
      </Typography>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={3}>
          <TextField
            required
            id="cgpa"
            name="cgpa"
            label="Current CGPA"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
