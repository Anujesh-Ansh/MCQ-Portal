import React from 'react';

const Footer: React.FC = () => {
  return (
    <div style={footerStyles}>
      <a href="https://github.com/Anujesh-Ansh" target="_blank" style={heartBoxStyles}>
        <p>Made with 🧡 by Anujesh</p>
      </a>
    </div>
  );
};

const footerStyles: React.CSSProperties = {
  padding: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'transparent',
  
};

const heartBoxStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
  textDecoration: 'none',
  color: 'black',
  fontStyle : 'italic',
  fontWeight: 'bold'
};



export default Footer;
