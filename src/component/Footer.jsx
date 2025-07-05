import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      platform: 'Github',
      icon: 'src/assets/icons8-github-50.png',
      handle: '@dev-787',
      url: 'https://github.com/dev-787'
    },
    {
      platform: 'LinkedIn',
      icon: 'src/assets/icons8-linkedin-50.png',
      handle: '@Dev Tailor',
      url: 'https://www.linkedin.com/in/tech-dev-tailor/'
    },
    {
      platform: 'Twitter',
      icon: 'src/assets/icons8-twitter-50.png',
      handle: '@Dev_cod7s',
      url: 'https://x.com/Dev_cod7s'
    },
    {
      platform: 'Instagram',
      icon: 'src/assets/icons8-instagram-50.png',
      handle: '@dev-787',
      url: 'https://www.instagram.com/dev._787/'
    },
    {
      platform: 'Email',
      icon: 'src/assets/icons8-mail-50.png',
      handle: 'Say Hello',
      url: 'https://mail.google.com/mail/?view=cm&to=workwithdev.tech@gmail.com',
      isEmail: true
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`footer-card ${link.isEmail ? 'footer-card--email' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-card__icon">
              <img src={link.icon} alt={`${link.platform} icon`} />
            </div>
            <div className="footer-card__text">
              <span className="footer-card__handle">{link.handle}</span>
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
