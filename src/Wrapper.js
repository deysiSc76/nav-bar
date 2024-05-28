// Wrapper.js
import React, { useState } from 'react';
import UserContext from './UserContext';

const Wrapper = ({ children }) => {
  const [userName, setUserName] = useState('Usuario');
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default Wrapper;
