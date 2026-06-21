import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AfricaCruising — Arusha, Tanzania" },
      { name: "description", content: "Get in touch with our travel designers in Arusha, Tanzania. Email, WhatsApp or use our enquiry form — we reply within 24 hours." },
      { property: "og:title", content: "Contact | AfricaCruising" },
      { property: "og:description", content: "Talk to a real travel designer in Arusha." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to a travel designer"
        subtitle="We're a small team based in Arusha, Tanzania — replying personally within 24 hours."
        image={IMG.sunset}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-safari/10 text-safari">
                  <Check className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy">Message sent</h2>
                <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
                <h2 className="font-display text-2xl font-bold text-navy">Send us an enquiry</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                  <input required type="email" placeholder="Email" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="Destination of interest" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                  <input placeholder="Travel dates" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                </div>
                <textarea required rows={5} placeholder="Tell us about your trip..." className="rounded-xl border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold-light">
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-navy p-7 text-white">
              <h3 className="font-display text-xl font-semibold">Office</h3>
              <div className="gold-divider my-3" />
              <ul className="space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Arusha, Tanzania — gateway to the Serengeti</li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> <a className="hover:text-gold" href="mailto:info@africacruising.com">info@africacruising.com</a></li>
                <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" /> WhatsApp 24/7</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Arusha, Tanzania"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.55%2C-3.45%2C36.78%2C-3.30&amp;layer=mapnik&amp;marker=-3.3869%2C36.6830"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
