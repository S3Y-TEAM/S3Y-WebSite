import React, { useState } from 'react';
import './PublishTask.css';
import { useRef } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function PublishTask() {
  const [title, setTitle] = useState('');
  const [job, setJob] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [note, setNote] = useState('');
  const fileInputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    if (submitted) {
        setSubmitted(false);
        setTitle('');
        setJob('');
        setDescription('');
        setLocation('');
        setBudget('');
        setAttachment(null);
        setNote('');
      } else {
        navigate(-1); 
      }
    };

  return (
    <div className="publishtask" >
    {submitted && (
        <div className="success-message">
          Your problem has been published and added to your problems.
        </div>
      )}
         <button className='backbutton' onClick={handleBack} >
            Back
        </button>
      <h4>Publish Task</h4>
      {!submitted && (
      <form onSubmit={handleSubmit}>
        <div className='row1'>
        <div className="formggroup">
          <label htmlFor="title">Title:</label>
          <input
          className='select1'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="formggroup">
          <label htmlFor="location">Location:</label>
          <input
            className='select1'
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        </div>

    <div className='row2'>
        <div className="formggroup">
          <label htmlFor="job">Job you need:</label>
          <select
           className='select'
           id="job"
            value={job}
             onChange={(e) => setJob(e.target.value)}>
            <option value="">Select job</option>
            {/* job options */}
          </select>
        </div>

        <div className="formggroup">
          <label htmlFor="budget">Budget:</label>
          <select
          className='select'
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select budget</option>
            {/* budget options */}
          </select>
        </div>
        </div>
        
        <div className='row3'>
        <div className="formggroup">
          <label htmlFor="description">Description:</label>
          <textarea
          className='select3'
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
       
        <div className="formggroup">
          <label>Note:</label>
          <textarea
          className='select3'
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        </div>
        <div className="formggroup">
          <label htmlFor="attachment">Attachment:</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              id="attachment"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
            <div className="file-display">
              <span style={{color:'gray'}}>{attachment ? attachment.name : 'Upload File'}</span>
              <FaUpload onClick={handleIconClick} style={{ cursor: 'pointer', color: '#164863' }} />
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