import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  defaultButton: {
    width: '400px',
    height: '60px',
    color: '#FFFFFF',
    outline: 'none',
    borderRadius: '3px',
    fontSize: '20px'
  },
  icon: {
    marginRight: '5px'
  }
}

const Button = ({updateStyle, text, icon, onClick}) => {
  const buttonStyle = {...styles.defaultButton, ...updateStyle};
  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon &&
        <FontAwesomeIcon icon={icon} style={styles.icon}></FontAwesomeIcon>}
      {text}
    </button>
  );
};

export default Button;
