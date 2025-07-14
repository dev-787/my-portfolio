import React from 'react';
import './Footer.css';
import githubIcon from '../assets/icons8-github-50.png';
import linkedinIcon from '../assets/icons8-linkedin-50.png';
import twitterIcon from '../assets/icons8-twitter-50.png';
import instagramIcon from '../assets/icons8-instagram-50.png';
import mailIcon from '../assets/icons8-mail-50.png';

const Footer = () => {
  const socialLinks = [
    {
      platform: 'Github',
      icon: githubIcon,
      handle: '@dev-787',
      url: 'https://github.com/dev-787'
    },
    {
      platform: 'LinkedIn',
      icon: linkedinIcon,
      handle: '@Dev Tailor',
      url: 'https://www.linkedin.com/in/tech-dev-tailor/'
    },
    {
      platform: 'Twitter',
      icon: twitterIcon,
      handle: '@Dev_cod7s',
      url: 'https://x.com/Dev_cod7s'
    },
    {
      platform: 'Instagram',
      icon: instagramIcon,
      handle: '@dev-787',
      url: 'https://www.instagram.com/dev._787/'
    },
    {
      platform: 'Email',
      icon: mailIcon,
      handle: 'Say Hello',
      url: 'https://mail.google.com/mail/?view=cm&to=devdtailor555@gmail.com',
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
