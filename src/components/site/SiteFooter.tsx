import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Award, ShieldCheck, Sparkles } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="AfricaCruising home">
              <img src={logoLight} alt="AfricaCruising — Your Journey. Our Passion." className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Curating premium safaris, exotic beach holidays and luxury cruises across Africa and beyond — designed by local experts who live the journey every day.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:bg-gold hover:text-navy"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Explore</h4>
            <div className="gold-divider my-3" />
            <ul className="space-y-2 text-sm">
              {[
                ["/about", "About Us"],
                ["/safari-packages", "Safari Packages"],
                ["/holidays", "Holiday Packages"],
                ["/cruises", "Cruise Experiences"],
                ["/tailor-made", "Tailor-Made Trips"],
                ["/gallery", "Gallery"],
                ["/blog", "Travel Guides"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Destinations</h4>
            <div className="gold-divider my-3" />
            <ul className="space-y-2 text-sm text-white/75">
              <li>Serengeti · Tanzania</li>
              <li>Ngorongoro Crater</li>
              <li>Masai Mara · Kenya</li>
              <li>Volcanoes NP · Rwanda</li>
              <li>Zanzibar Island</li>
              <li>Bali · Phuket</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Get in Touch</h4>
            <div className="gold-divider my-3" />
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" /> Arusha, Tanzania
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <a href="mailto:info@africacruising.com" className="hover:text-gold">
                  info@africacruising.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href="https://wa.me/255789937467" target="_blank" rel="noreferrer" className="hover:text-gold">
                  +255 789 937 467
                </a>
              </li>
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
            >
              <input
                type="email"
                required
                placeholder="Your email for travel deals"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button className="bg-gold px-4 text-sm font-semibold text-gold-foreground hover:bg-gold-light">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:grid-cols-3">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Best Price Guarantee</span>
          <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Trusted Local Experts</span>
          <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> Tailor-Made Itineraries</span>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} AfricaCruising.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
