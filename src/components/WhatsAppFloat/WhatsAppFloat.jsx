import { WhatsAppIcon } from '../icons/Icons';
import './WhatsAppFloat.css';

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917418314050"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} color="#fff" />
    </a>
  );
}

export default WhatsAppFloat;
