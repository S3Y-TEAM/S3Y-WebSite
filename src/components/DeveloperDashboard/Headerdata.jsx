import React, { useState, useEffect } from 'react';
import './Headerdata.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell , faCaretDown} from '@fortawesome/free-solid-svg-icons';
   
const Headerdata = () => {
  const initialUsers = [
    { id: 1, name: 'Hagar Elmadany', job: 'Front-end devoleper' },
    
  ];

  const [users, setUsers] = useState(initialUsers);

  return (
    <>
    <div className="headerdata">
    <FontAwesomeIcon icon={faBell} className='notfication'/>
    <img src={require("../images/hagar.jpg")}/>
      <table>
        <thead>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
            </tr>
          ))}
          {users.map(user => (
              <tr key={user.id}>
              <td>{user.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FontAwesomeIcon icon={faCaretDown} className='down'/>
    </div>
    <hr></hr>
    </>
    
  );
};

export default Headerdata;
