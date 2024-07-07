import React, { useEffect, useState } from "react";
import "./ListTasks.css";
import "./UserDashboard.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/system";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { getRequest } from "../../utils/services";

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  border: "1px solid #164863",
  borderRadius: "4px",
}));

function ListTasks() {
  const tabsLabels = ["All", "Not Started", "In progress", "Done", "Paid"];
  const [selectedButton, setSelectedButton] = useState("");
  const [tasks, setTasks] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (buttonName === "All") {
      setSelectedButton("");
    } else {
      setSelectedButton(buttonName);
    }
    // يمكنك هنا إضافة كود الفلترة بناءً على الزر النشط
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await getRequest(
        `http://localhost:8000/api/v1/employer/101/tasks?status=${selectedButton}`
      );
      console.log("tasks", tasks.tasks);
      setTasks(tasks.tasks);
    };
    getTasks();
  }, [selectedButton]);

  return (
    <div className="tasks">
      <CustomButtonGroup variant="contained" aria-label="Basic button group">
        {tabsLabels.map((label) => (
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            className={selectedButton === label ? "active" : "inactive"}
            sx={{
              backgroundColor: selectedButton === label ? "#164863" : "#fff",
              color: selectedButton === label ? "#fff" : "#164863",
              "&:hover": {
                backgroundColor:
                  selectedButton === label ? "#123A50" : "#f0f0f0",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </CustomButtonGroup>
      <div className="tasks-list">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => {
            let status = task.status;
            if (status === "In progress") status = "in-progress";
            else if (status === "Not Started") status = "not-started";
            return (
              <div className={`task ${status}`}>
                <div className="task-img">
                  <img src={require("../images/hagar.jpg")} alt="taskImg" />
                </div>
                <div className="task-info">
                  <p className="task-title">{task?.Title}</p>
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
            );
          })
        ) : (
          <div>No tasks to show</div>
        )}
        {/* <div className="task in">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>
        <div className="task">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>
        <div className="task">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>
        <div className="task">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>
        <div className="task">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>
        <div className="task">
          <div className="task-img">
            <img src={require("../images/hagar.jpg")} alt="taskImg" />
          </div>
          <div className="task-info">
            <p className="task-title">Task Title front end</p>
            <p className="task-title">Status: vjlh</p>
            <p className="task-title">Budget: ljvh</p>
            <p className="task-title">Category: jhhl</p>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default ListTasks;
