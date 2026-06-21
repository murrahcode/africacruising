import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe, Sparkles } from "lucide-react";

type NavItem = { to: string; label: string; mega?: boolean };
const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations", mega: true },
  { to: "/safari-packages", label: "Safaris" },
  { to: "/holidays", label: "Holidays" },
  { to: "/cruises", label: "Cruises" },
  { to: "/tailor-made", label: "Tailor-Made" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const MEGA = [
  {
    icon: "🦁",
    title: "African Safaris",
    items: [
      "Serengeti — Great Migration",
      "Ngorongoro Crater",
      "Tarangire National Park",
      "Masai Mara, Kenya",
      "Volcanoes NP — Gorilla Trekking",
    ],
  },
  {
    icon: "🏝",
    title: "Beach & Holiday",
    items: ["Zanzibar, Tanzania", "Bali, Indonesia", "Phuket, Thailand"],
  },
  {
    icon: "🚢",
    title: "Cruise Packages",
    items: [
      "African Coastal Cruises",
      "Indian Ocean Island Cruises",
      "Luxury Yacht & Honeymoon Cruises",
    ],
  },
];

const CURRENCIES = ["USD", "EUR", "GBP"] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>("USD");

  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80 shadow-soft"
      }`}
    >
      {/* Seasonal promo strip */}
      <div className="bg-gradient-to-r from-safari via-navy to-ocean text-white">
        <div className="container-px mx-auto flex max-w-[1440px] items-center justify-center gap-3 py-2 text-xs md:text-sm">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold" />
          <span className="text-white/90">
            Limited season offer — <strong className="text-gold">Save 12%</strong> on Great Migration departures
          </span>
          <Link
            to="/safari-packages"
            className="shrink-0 underline-offset-4 hover:underline"
          >
            View dates →
          </Link>
        </div>
      </div>

      <div className="container-px mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6">
        <Link to="/" className="group flex shrink-0 items-center gap-2 text-white">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-white">AFRICA</span>
            <span className="text-gold">CRUISING</span>
            <span className="text-white">.com</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) =>
            item.mega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className="nav-link inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white/90 hover:text-white"
                  data-active={pathname.startsWith(item.to) || undefined}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 top-full w-[820px] -translate-x-1/2 pt-4">
                    <div className="grid grid-cols-3 gap-6 rounded-2xl bg-white p-7 shadow-lux ring-1 ring-black/5 animate-float-up">
                      {MEGA.map((col) => (
                        <div key={col.title}>
                          <div className="mb-3 flex items-center gap-2">
                            <span className="text-xl">{col.icon}</span>
                            <h4 className="font-display text-base font-semibold text-navy">
                              {col.title}
                            </h4>
                          </div>
                          <div className="gold-divider mb-3" />
                          <ul className="space-y-2">
                            {col.items.map((it) => (
                              <li key={it}>
                                <Link
                                  to="/destinations"
                                  className="block text-sm text-foreground/80 transition hover:translate-x-0.5 hover:text-navy"
                                >
                                  {it}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link whitespace-nowrap text-sm font-medium text-white/90 hover:text-white"
                data-active={
                  (item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)) || undefined
                }
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/20 px-2 py-1 text-xs text-white/90 md:flex">
            <Globe className="h-3.5 w-3.5 text-gold" />
            {CURRENCIES.map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-full px-2 py-0.5 font-medium transition ${
                  currency === c ? "bg-gold text-gold-foreground" : "hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <Link
            to="/tailor-made"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:bg-gold-light hover:shadow-lux md:inline-flex"
          >
            Plan My Trip
          </Link>

          <button
            className="xl:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-navy text-white">
          <div className="container-px mx-auto max-w-7xl py-4">
            <nav className="flex flex-col divide-y divide-white/10">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-base font-medium text-white/90 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/tailor-made"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
