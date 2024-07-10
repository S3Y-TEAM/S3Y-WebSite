import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/services";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ListTaskApplications.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ListTaskApplications() {
  const params = useParams();
  const nav = useNavigate();
  const [applications, setApplications] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = async (applicationId) => {
    const response = await getRequest(
      `api/v1/tasks/applications/${applicationId}/accept/`
    );
    if (response?.task) {
      nav("/UserHome/Tasks");
    }
  };

  useEffect(() => {
    const getTasksApplications = async () => {
      const applications = await getRequest(
        `api/v1/tasks/${params?.taskId}/applications`
      );
      setApplications(applications?.applications);
    };
    getTasksApplications();
  }, []);
  return (
    <div className="apps">
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ color: "#164863" }}
      >
        Applications
      </Typography>
      <div className="apps-list">
        {applications && applications?.length > 0 ? (
          applications?.map((application) => (
            <div key={application?.id} className="app">
              <div className="employee-info">
                <img src={require("../images/hagar.jpg")} alt="appImg" />
                <h4 className="employee-name">
                  {application?.employee?.user_name}
                </h4>
              </div>
              <div className="app-info">
                <h4 className="app-title">Cover letter</h4>
                <div className="cover">
                  <p className="app-cover">
                    {application?.coverLetter || "No cover letter"}
                  </p>
                  <span onClick={handleClickOpen}>See more</span>
                </div>
                <h4 className="app-title">Similar Project</h4>
                <p className="app-text">
                  {application?.similarProject || "No similar project"}
                </p>
                <h4 className="app-title">Expected Budget</h4>
                <p className="app-text">{application?.expectedBudget}</p>
                <h4 className="app-title">Deadline</h4>
                <p className="app-text">
                  {new Date(application?.deadline).toLocaleDateString("en-GB")}
                </p>
                <h4 className="app-title">Note</h4>
                <p className="app-text">
                  {application?.note || "No note yet."}
                </p>
              </div>
              {!application?.accepted && (
                <button
                  className="app-btn"
                  onClick={() => handleAccept(application?.id)}
                >
                  Accept
                </button>
              )}

              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle
                  sx={{ m: 0, p: 2, color: "#164863", textAlign: "start" }}
                  id="customized-dialog-title"
                >
                  {application?.employee?.user_name}'s Cover Letter
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom sx={{ color: "#427d9d" }}>
                    {application?.coverLetter || "No cover letter"} Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Expedita
                    tempora rem quas, id vero asperiores omnis velit corporis,
                    dignissimos voluptatem tenetur laboriosam. Nihil maxime
                    dolore modi doloremque sunt magnam beatae.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    OK
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
          ))
        ) : (
          <div>no applications</div>
        )}
      </div>
    </div>
  );
}

export default ListTaskApplications;
