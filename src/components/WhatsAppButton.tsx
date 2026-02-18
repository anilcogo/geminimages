import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://whatsapp.com/channel/"
      target="_blank"
      rel="noopener noreferrer"
      title="Join our WhatsApp channel"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg pulse-soft hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
