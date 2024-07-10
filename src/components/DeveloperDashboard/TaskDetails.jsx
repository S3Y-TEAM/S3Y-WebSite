import { Avatar, Rating } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListAppliedJobs.css";
import ApplyToJob from "./ApplyToJob";
import { postRequest } from "../../utils/services";

function TaskDetails() {
  const nav = useNavigate();
  const { state } = useLocation();
  const task = state?.task;
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (formData) => {
    const response = await postRequest(
      `api/v1/tasks/${task?.id}/apply`,
      JSON.stringify(formData)
    );
    console.log(response);
    handleClose();
    if (response?.newApplication) {
      nav("/Home/AppliedJobs");
    } else if (response.error) setError(response.error);
  };

  return (
    <div className="AppliedJobs">
      <div className="task3" key={task.id}>
        <div className="task-img">
          {task?.Employer?.Personal_image?.id ? (
            <img
              src={`https://drive.google.com/thumbnail?id=${task?.Employer?.Personal_image?.id}`}
              alt="taskImg"
              style={{ marginBottom: "10px" }}
            />
          ) : (
            <Avatar size="sm" sx={{ marginBottom: "10px" }}>
              {task?.Employer?.user_name &&
                task?.Employer?.user_name[0].toUpperCase()}
            </Avatar>
          )}

          <Rating
            name="read-only"
            value={task?.Employer?.rating / 2 || 0}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
        <div className="task-info">
          <p className="employee-name">
            Owener name:
            <span> {task?.Employer?.user_name}</span>
          </p>
          <p className="task-title">
            Title: <span>{task?.Title}</span>
          </p>
          <div>
            <p className="task-title">
              Status: <span>{task?.status}</span>
            </p>
            <p className="task-title">
              Budget: <span>{task?.price || task?.price_range}</span>
            </p>
            <p className="task-title">
              Category: <span>{task?.category?.name}</span>
            </p>
            <p>
              Description:{" "}
              <p className="task-description">
                {" "}
                {task?.Descr} Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. A cumque eveniet nesciunt, ipsa tempore
                numquam dolorem, inventore assumenda quas doloremque esse sint
                officia ipsam magni dolor est accusamus sit optio!
              </p>
            </p>
            <p className="task-title">
              Attachment: <span>{task?.img || "No attachment yet"}</span>
            </p>
            <p className="task-title">
              Note:{" "}
              <p className="task-description">{task?.note || "No note yet"}</p>
            </p>
          </div>
          {error && <span className="error">{error}</span>}
          {state?.from?.pathname !== "/Home/AppliedJobs" && (
            <div className="task-buttons">
              <button className="apply-btn" onClick={handleClickOpen}>
                Apply Now
              </button>
              <ApplyToJob
                open={open}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
