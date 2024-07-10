import React, { useContext, useEffect, useState } from "react";
import "./ListTasks.css";
import "../UserDashboard/UserDashboard.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/system";
import { getRequest } from "../../utils/services";
import { Avatar } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatContext } from "../../context/chatContext";
import { useNavigate } from "react-router-dom";

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  border: "1px solid #164863",
  borderRadius: "4px",
}));

function ListTasks() {
  const tabsLabels = ["All", "In progress", "Done", "Paid"];
  const [selectedButton, setSelectedButton] = useState("");
  const [tasks, setTasks] = useState(null);
  const { createChat, chatError } = useContext(ChatContext);
  const userId = JSON.parse(localStorage.getItem("user"))?.userData?.id;
  const nav = useNavigate();

  const handleButtonClick = (buttonName) => {
    if (buttonName === "All") {
      setSelectedButton("");
    } else {
      setSelectedButton(buttonName);
    }
    // يمكنك هنا إضافة كود الفلترة بناءً على الزر النشط
  };

  const handleChat = async (task) => {
    await createChat(task?.Employer_id, userId);
    if (!chatError) {
      nav(`/Home/Chat/`);
    } else console.log(chatError);
  };

  useEffect(() => {
    const getTasks = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))?.userData?.id;

      const tasks = await getRequest(
        `api/v1/employee/${userId}/tasks?status=${selectedButton}`
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
            return (
              <div className={`task ${status}`} key={task.id}>
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
                <button className="chat" onClick={() => handleChat(task)}>
                  <ChatIcon sx={{ color: "gray" }} />
                </button>
              </div>
            );
          })
        ) : (
          <div>No tasks to show</div>
        )}
      </div>
    </div>
  );
}

export default ListTasks;
