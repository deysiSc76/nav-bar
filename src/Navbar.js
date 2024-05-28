// Navbar.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Navbar = () => {
  const { userName } = useContext(UserContext);
  const style = {
    backgroundColor: 'magenta', // Establece el color de fondo a rosa
    padding: '10px', // Agrega algo de relleno para estética
    color: 'white' // Establece el color del texto a blanco para contraste
  };

  return (
    <div style={style}>
      ¡Hola, {userName}!
    </div>
  );
};

export default Navbar;
