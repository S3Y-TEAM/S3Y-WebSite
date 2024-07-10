import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Input, InputLabel } from "@mui/material";
import { Textarea } from "@mui/joy";

export default function ApplyToJob({ open, handleSubmit, handleClose }) {
  const [postData, setPostData] = React.useState({});

  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  const handleApplication = async (event) => {
    event.preventDefault();
    handleSubmit(postData);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleApplication}
            noValidate
            sx={{ mt: 1, width: "500px" }}
          >
            <InputLabel id="demo-simple-select-label">Cover Letter</InputLabel>
            <Textarea
              autoFocus
              margin="normal"
              id="coverLetter"
              name="coverLetter"
              label="coverLetter"
              type="text"
              minRows={3}
              fullWidth
              value={postData.coverLetter}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">
              Similar Project
            </InputLabel>
            <TextField
              margin="none"
              id="similarProject"
              name="similarProject"
              type="text"
              fullWidth
              value={postData.similarProject}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">
              Expected Budget
            </InputLabel>
            <TextField
              required
              margin="none"
              id="expectedBudget"
              name="expectedBudget"
              type="text"
              fullWidth
              value={postData.expectedBudget}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">
              How long will this project take?
            </InputLabel>
            <Input
              className="select3"
              type="datetime-local"
              id="deadline"
              name="deadline"
              variant="outlined"
              value={postData.deadline}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">Note</InputLabel>
            <TextField
              autoComplete="note"
              margin="none"
              id="note"
              name="note"
              type="text"
              fullWidth
              value={postData.note}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleApplication}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
