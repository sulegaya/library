import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

class FooterWhatsAppButton extends React.Component {
  redirectToWhatsApp = () => {
    const phoneNumber = '+2347067836964';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    window.open(whatsappLink, '_blank');
  };

  render() {
    return (
      <BsWhatsapp onClick={this.redirectToWhatsApp} className="text-base sm:text-xl mx-2 text-black dark:text-slate-50"/>
    );
  }
}

export default FooterWhatsAppButton;
