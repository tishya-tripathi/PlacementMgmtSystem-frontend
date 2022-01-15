import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

export default function Step4({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Class 10
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            value={formData.class10School}
            onChange={(event) =>
              setFormData({ ...formData, class10School: event.target.value })
            }
            required
            id="class_10_school"
            name="class_10_school"
            label="Name of School"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class10Board}
            onChange={(event) =>
              setFormData({ ...formData, class10Board: event.target.value })
            }
            required
            id="class-10-board"
            name="class-10-board"
            label="Name of Board"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class10Year}
            onChange={(event) =>
              setFormData({ ...formData, class10Year: event.target.value })
            }
            required
            id="class-10-year"
            name="class-10-year"
            label="Year of Passing"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class10State}
            onChange={(event) =>
              setFormData({ ...formData, class10State: event.target.value })
            }
            required
            id="class-10-state"
            name="class-10-state"
            label="Graduation State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class10Grades}
            onChange={(event) =>
              setFormData({ ...formData, class10Grades: event.target.value })
            }
            required
            id="class-10-grades"
            name="class-10-grades"
            label="Percentage/ C.G.P.A."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        Class 12/ Pre University College (PUC)
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            value={formData.class12School}
            onChange={(event) =>
              setFormData({ ...formData, class12School: event.target.value })
            }
            required
            id="class-12-school"
            name="class-12-school"
            label="Name of School"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class12Board}
            onChange={(event) =>
              setFormData({ ...formData, class12Board: event.target.value })
            }
            required
            id="class-12-board"
            name="class-12-board"
            label="Name of Board"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class12Year}
            onChange={(event) =>
              setFormData({ ...formData, class12Year: event.target.value })
            }
            required
            id="class-12-year"
            name="class-12-year"
            label="Year of Passing"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class12State}
            onChange={(event) =>
              setFormData({ ...formData, class12State: event.target.value })
            }
            required
            id="class-12-state"
            name="class-12-state"
            label="Graduation State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.class12Grades}
            onChange={(event) =>
              setFormData({ ...formData, class12Grades: event.target.value })
            }
            required
            id="class-12-grades"
            name="class-12-grades"
            label="Percentage/ C.G.P.A."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
