import { MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <a
      href="https://wa.me/255789937467?text=Hi%20AfricaCruising%2C%20I%27d%20love%20to%20plan%20a%20trip."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lux transition hover:bg-gold-light hover:scale-[1.03]"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      Enquire Now
    </a>
  );
}
