// Form.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Form = () => {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <>
    <label>Tu nombre: </label>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
    </>
  );
};

export default Form;
