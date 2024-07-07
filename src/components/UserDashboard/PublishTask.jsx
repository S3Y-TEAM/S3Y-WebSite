import React, { useEffect, useState } from "react";
import "./PublishTask.css";
import { useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { getRequest, postRequestWithFiles } from "../../utils/services";
import { useAuthContext } from "../../hooks/useAuthContext";

function PublishTask() {
  const [title, setTitle] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [note, setNote] = useState("");
  const [deadline, setDeadline] = useState("");
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  //console.log("state", state);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getRequest(
        `http://localhost:8000/api/v1/tasks/categories/${state.type}`
      );
      //console.log("cats", categories.categories);
      setCategories(categories.categories);
    };
    getCategories();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!job) newErrors.job = "Job is required";
    if (!description) newErrors.description = "Description is required";
    if (!location) newErrors.location = "Location is required";
    if (!budget) newErrors.budget = "Budget is required";
    if (!deadline) newErrors.deadline = "Deadline is required";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    let formData = new FormData();
    const date = new Date();
    formData.append("title", title);
    formData.append("category", job);
    formData.append("description", description);
    formData.append("price_range", budget);
    formData.append("file", attachment);
    formData.append("note", note);
    formData.append("posting_date", date.toISOString());
    formData.append("deadline", deadline);
    formData.append("address", location);
    formData.append(
      "employerId",
      JSON.parse(localStorage.getItem("user"))?.userData?.id
    );
    console.log(...formData);

    const task = await postRequestWithFiles(
      "http://localhost:8000/api/v1/tasks",
      formData
    );
    console.log("task from back", task);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    if (submitted) {
      setSubmitted(false);
      setTitle("");
      setJob("");
      setDescription("");
      setLocation("");
      setBudget("");
      setAttachment(null);
      setNote("");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="publishtask">
      {submitted && (
        <div className="success-message">
          Your problem has been published and added to your problems.
        </div>
      )}
      <button className="backbutton" onClick={handleBack}>
        Back
      </button>
      <h4>Publish Task</h4>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div className="row1">
            <div className="formggroup">
              <label htmlFor="title">Title:</label>
              <input
                className="select1"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="formggroup">
              <label htmlFor="location">Location:</label>
              <input
                className="select1"
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {errors.location && (
                <span className="error">{errors.location}</span>
              )}
            </div>
          </div>

          <div className="row2">
            <div className="formggroup">
              <label htmlFor="job">Job you need:</label>
              <select
                className="select"
                id="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              >
                {categories?.length > 0 &&
                  categories?.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                {/* <option value="web">web</option>
                <option value="android">android</option>
                <option value="ai">ai</option> */}
              </select>
              {errors.job && <span className="error">{errors.job}</span>}
            </div>

            <div className="formggroup">
              <label htmlFor="budget">Budget:</label>
              <select
                className="select"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="100-200">100-200</option>
                <option value="1000-2000">1000-2000</option>
                <option value="10000-15000">10000-15000</option>
              </select>
              {errors.budget && <span className="error">{errors.budget}</span>}
            </div>
          </div>

          <div className="row3">
            <div className="formggroup">
              <label htmlFor="description">Description:</label>
              <textarea
                className="select3"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>

            <div className="formggroup">
              <label>Note:</label>
              <textarea
                className="select3"
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>

          <div className="row3">
            <div className="formggroup">
              <label htmlFor="deadline">Deadline:</label>
              <input
                className="select3"
                type="datetime-local"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              {errors.deadline && (
                <span className="error">{errors.deadline}</span>
              )}
            </div>
            <div className="formggroup">
              <label htmlFor="attachment">Attachment:</label>
              <div className="file-input-wrapper">
                <input
                  className="select3"
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  id="attachment"
                  onChange={(e) => setAttachment(e.target.files[0])}
                />
                <div className="file-display">
                  <span style={{ color: "gray" }}>
                    {attachment ? attachment.name : "Upload File"}
                  </span>
                  <FaUpload
                    onClick={handleIconClick}
                    style={{ cursor: "pointer", color: "#164863" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit">Publish</button>
        </form>
      )}
    </div>
  );
}

export default PublishTask;
