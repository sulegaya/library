import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

class WhatsAppButton extends React.Component {
  redirectToWhatsApp = () => {
    const phoneNumber = '+2348101892045';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    window.open(whatsappLink, '_blank');
  };

  render() {
    return (
      <BsWhatsapp onClick={this.redirectToWhatsApp} className="text-xl sm:text-2xl mx-2 text-black dark:text-slate-50 hover:text-gray-500 cursor-pointer"/>
    );
  }
}

export default WhatsAppButton;
