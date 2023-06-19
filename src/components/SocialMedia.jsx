import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="socialMedia-container">
      <div className="first-line" />
      <div className="svgs">
        <FaLinkedin />
        <FaGithub />
      </div>
      <div className="second-line" />
    </section>
  );
}
