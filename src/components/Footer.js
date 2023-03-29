import React from 'react';

const Footer = () => {
  const openInTab = (url) => {
    window.open(url, '_blank', 'nonreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          Created by
          {' '}
          <span role="link" tabIndex="0" onClick={() => openInTab('https://github.com/dselasea')} onKeyDown={() => openInTab('https://github.com/dselasea')}>Daniel Selase Anyidoho</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
