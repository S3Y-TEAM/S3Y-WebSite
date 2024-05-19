import React from "react";
import './Setting.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {Payment ,Language ,Computer, PhoneAndroid } from '@mui/icons-material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArabicIcon from '@mui/icons-material/Language';  
import EnglishIcon from '@mui/icons-material/Translate';
import Switch from '@mui/material/Switch';



export default function Setting() {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    function DetailsPanel({ selectedIndex }) {
        switch (selectedIndex) {
          case 0:
            return <div>Payment details here</div>;
          case 1:
            return(
            <div className="notificationsetting">
                <div className="sone">
                <p>Receive massages from our platform</p>
                <Switch {...label} defaultChecked />
                </div>
                <Divider/>
                <div className="sone">
                <p>Receive updates on S3Y platform</p>
                <Switch {...label}  />
                </div>
                <Divider/>
                <div className="sone">
                <p>Receive Tasks reminders</p>
                <Switch {...label} defaultChecked />
                </div>
                <Divider/>
                <div className="sone">
                <p>Receive messages about your account</p>
                <Switch {...label} defaultChecked />
                </div>
            </div>
            );
          case 2:
            return (
            <div className="changelang">
                        <img src={require("../images/Mask group.png")}/>
                        <h4>Choose your language</h4>
         <Box sx={{ borderRadius:'10px' ,padding:'15px',boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', margin:'10px',marginTop:'20px'}}>
          <RadioGroup coulmns defaultValue="arabic" sx={{ width:'360px'}}>
          <FormControlLabel 
          sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}
                value="arabic" 
                control={<Radio />} 
                label={
                  <Box sx={{ display: 'flex',color:'black' }}>
                    العربية
                    <ArabicIcon sx={{ marginLeft: 2 ,color:'#164863'}} /> 
                  </Box>
                } 
              />
              <Divider/>
              <FormControlLabel 
              sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}
                value="english" 
                control={<Radio />} 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center',color:'black' }}>
                    English
                    <EnglishIcon sx={{ marginLeft: 2 ,color:'#164863'}} /> 
                  </Box>
                }
                />
          </RadioGroup>
        </Box>
        <button className='send'>
        Save
      </button>

            </div>
            );
          case 3:
            return( 
            <div className="privecy">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </div>
            );
          case 4:
            return (
            <div className="faqs">
                <div className="faqs1">
                <div className="num">01</div>
                <div className="question">
                    <h4>How do I get started with S3Y?</h4>
                    <p>Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    </p>
                </div>
                </div>
                <Divider/>
                <div className="faqs1">
                <div className="num">02</div>
                <div className="question">
                    <h4>How do I get started with S3Y?</h4>
                    <p>Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    </p>
                </div>
                </div>
                <Divider/>
                <div className="faqs1">
                <div className="num">03</div>
                <div className="question">
                    <h4>How do I get started with S3Y?</h4>
                    <p>Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    </p>
                </div>
                </div>
                <Divider/>
                <div className="faqs1">
                <div className="num">04</div>
                <div className="question">
                    <h4>How do I get started with S3Y?</h4>
                    <p>Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    Lorem ipsum dolor sit amet adipis elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. In nisl nisi scelerisque
                    </p>
                </div>
                </div>
               
            </div>
            );
          case 5:
            return( 
                <div className="terms">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.t labore et dolore magna.Lorem ipsum ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>
                );
          case 6:
            return (
                <div className="security">
                    <h5>you loged in S3Y from...</h5>
                <div className="sec1">
                <Computer className="secicon"/>
                <div className="question">
                    <h4>windows 10 chrome</h4>
                    <p>20 may,2024</p>
                </div>
                <Button variant="contained" color="error"  sx={{marginLeft:'320px',height:'40px'}} >
                remove device
                </Button>
                </div>
                <Divider/>
                <div className="sec1">
                <PhoneAndroid  className="secicon"/>
                <div className="question">
                    <h4>windows 10 chrome</h4>
                    <p>20 may,2024</p>
                </div>
                <Button variant="contained" color="error" sx={{marginLeft:'320px',height:'40px'}} >
                remove device
                </Button>
                </div>
                
               
            </div>
            );
          case 7:
            return (
            <div className="remove">
            <div className="delete">
                <h3>Remove Account</h3>
                <p>Are you sure you want to delete your account and all of your sourse data.<span className="red"> this is irreversible.</span></p>
             <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Delete 
            </Button>
            </div>
            </div>
            );
          default:
            return null;
        }
      }

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="settingcontent">
        <div className="settinglist">
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
          <Payment />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItemButton>


        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
          <Language />
          </ListItemIcon>
          <ListItemText primary="Change language" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <PrivacyTipIcon />
          </ListItemIcon>
          <ListItemText primary="Privecy Policy" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="FAQs"/>
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
          <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Terms & Conditions"/>
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
          <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Security"/>
        </ListItemButton>
        
        < Divider/>
        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
          <DeleteIcon  sx={{color:'red'}}/>
          </ListItemIcon>
          <ListItemText primary="Remove Account"  sx={{color:'red'}}/>
        </ListItemButton>
        
      </List>
    </Box>

    </div>
    <div className="listdetails">
    <Box sx={{ bgcolor: 'background.paper'}}>
            <DetailsPanel selectedIndex={selectedIndex} />
    </Box>
          </div>
    </div>
  );
}