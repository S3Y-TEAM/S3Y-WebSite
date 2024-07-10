import React, { useEffect, useState } from "react";
import { getRequest } from "../../utils/services";
import { Avatar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./ListAppliedJobs.css";

function ListAppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState();
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getTasks = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))?.userData?.id;

      const appliedJobs = await getRequest(
        `api/v1/employee/${userId}/applications`
      );
      console.log("tasks app", appliedJobs.applications);
      setAppliedJobs(appliedJobs.applications);
    };
    getTasks();
  }, []);
  return (
    <div className="tasks">
      <div className="AppliedJobs">
        {appliedJobs && appliedJobs?.length > 0 ? (
          appliedJobs?.map((task) => (
            <div className="task2" key={task.id}>
              <div className="task-img">
                {task?.Employer?.Personal_image?.id ? (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${task?.Employer?.Personal_image?.id}`}
                    alt="taskImg"
                  />
                ) : (
                  <Avatar size="sm">
                    {task?.Employer?.user_name &&
                      task?.Employer?.user_name[0].toUpperCase()}
                  </Avatar>
                )}
                <h5 className="employee-name">{task?.Employer?.user_name}</h5>
              </div>
              <div className="task-info">
                <p className="task-title">{task?.Title}</p>
                <div className="inner-info">
                  <p>
                    <span>
                      {task?.Descr} Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. A cumque eveniet nesciunt, ipsa tempore
                      numquam dolorem, inventore assumenda quas doloremque esse
                      sint officia ipsam magni dolor est accusamus sit optio!
                    </span>
                  </p>
                  <p className="task-title">
                    Status: <span>{task?.status}</span>
                  </p>
                  <p className="task-title">
                    Budget: <span>{task?.price || task?.price_range}</span>
                  </p>
                  <p className="task-title">
                    Category: <span>{task?.category?.name}</span>
                  </p>
                </div>
              </div>
              <button
                className="app-btn"
                onClick={() =>
                  nav(`/Home/Task/${task.id}`, {
                    state: {
                      task: task,
                      from: location,
                    },
                  })
                }
              >
                Show more <ArrowForwardIcon />
              </button>
            </div>
          ))
        ) : (
          <div>no jobs</div>
        )}
      </div>
    </div>
  );
}

export default ListAppliedJobs;
