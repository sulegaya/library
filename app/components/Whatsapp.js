import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class WhatsApp extends React.Component {
  redirectToWhatsApp = () => {
    const phoneNumber = '+2347067836964';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    window.open(whatsappLink, '_blank');
  };

  render() {
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <button
          onClick={this.redirectToWhatsApp}
          className="w-full sm:w-4/5 sm:text-base rounded py-3 bg-green-500 text-sm text-white font-bold flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          Share the payment receipt
        </button>
      </div>
    );
  }
}

export default WhatsApp;
