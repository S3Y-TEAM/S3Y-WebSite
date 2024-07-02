import React, { useState } from 'react';
import './UserDashboard.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/system';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  border: '1px solid #164863',
  borderRadius: '4px',
}));

const UserDashboard = () => {

  const [selectedButton, setSelectedButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    // يمكنك هنا إضافة كود الفلترة بناءً على الزر النشط
  };

  return (
    <>
    <CustomButtonGroup variant="contained" aria-label="Basic button group">
      <Button 
        onClick={() => handleButtonClick('All')}
        sx={{
          backgroundColor: selectedButton === 'All' ? '#164863' : '#fff',
          color: selectedButton === 'All' ? '#fff' : '#164863',
          '&:hover': {
            backgroundColor: selectedButton === 'All' ? '#123A50' : '#f0f0f0',
          }
        }}
      >
        All
      </Button>
      <Button 
        onClick={() => handleButtonClick('Developer')}
        sx={{
          backgroundColor: selectedButton === 'Developer' ? '#164863' : '#fff',
          color: selectedButton === 'Developer' ? '#fff' : '#164863',
          '&:hover': {
            backgroundColor: selectedButton === 'Developer' ? '#123A50' : '#f0f0f0',
          }
        }}
      >
        Developer
      </Button>
      <Button 
        onClick={() => handleButtonClick('Worker')}
        sx={{
          backgroundColor: selectedButton === 'Worker' ? '#164863' : '#fff',
          color: selectedButton === 'Worker' ? '#fff' : '#164863',
          '&:hover': {
            backgroundColor: selectedButton === 'Worker' ? '#123A50' : '#f0f0f0',
          }
        }}
      >
        Worker
      </Button>
    </CustomButtonGroup>

<div className='Udash_content'>
    <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>

          <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>

          <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>

          <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>

          <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>

          <div class="box">
         <img decoding="async" src={require("../images/hagar.jpg")} alt='000'/>
          <h3>Hagar ELmadany</h3>
          <span class="title">Frontend Developer</span>
          <div class="rate">
      <Rating name="read-only"defaultValue={4} readOnly  icon={<StarIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#ffc107' }} />}
          />
          </div>
          <p>
          Short story about developer Short story about developer  Short story about developer Short story about developer
Short story about developer
          </p>
          </div>
      

</div>


    </>
  );
}

export default UserDashboard;
