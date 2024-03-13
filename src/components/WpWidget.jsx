import React from "react";
import './wpWidget.css'
import wpLogo from '../../public/img/whatsapp-logo.svg'

const WpWidget = () => {
  return (
    <div
      className="sticky-wp rounded-2xl"
      id="wpLogo"
    >
      <a target="_blank" href="https://wa.me/5491153088311">
        <img src={wpLogo} alt="Whatsapp logo" />
      </a>
    </div>
  );
};

export default WpWidget;
