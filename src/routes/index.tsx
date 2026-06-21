import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  Star,
  Shield,
  Headphones,
  Sparkles,
  MapPin,
  ChevronRight,
  Quote,
  Calendar,
  DollarSign,
  X,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfricaCruising.com — Luxury Safaris, Beach Holidays & Cruises" },
      {
        name: "description",
        content:
          "Discover Africa and exotic destinations in style — premium safaris in Tanzania, Kenya & Rwanda, island escapes in Zanzibar, Bali & Phuket, and luxury cruises.",
      },
      { property: "og:title", content: "Discover Africa & Exotic Destinations in Style" },
      {
        property: "og:description",
        content: "Luxury safaris, island escapes, and unforgettable cruise experiences.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.heroSerengeti },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HERO_SLIDES = [
  { img: IMG.heroSerengeti, label: "Serengeti, Tanzania" },
];

const PACKAGES = [
  {
    img: IMG.migration,
    title: "7-Day Great Migration Safari",
    duration: "7 days · Serengeti",
    price: 3890,
    rating: 4.9,
    tag: "Bestseller",
    to: "/safari-packages",
  },
  {
    img: IMG.ngorongoro,
    title: "5-Day Tanzania Classic",
    duration: "5 days · Tarangire · Ngorongoro · Serengeti",
    price: 2490,
    rating: 4.8,
    tag: "Most Loved",
    to: "/safari-packages",
  },
  {
    img: IMG.masaiMara,
    title: "Kenya & Tanzania Combo",
    duration: "7 days · Masai Mara + Serengeti",
    price: 4290,
    rating: 4.9,
    tag: "Cross-Border",
    to: "/safari-packages",
  },
  {
    img: IMG.gorilla,
    title: "Rwanda Gorilla Trekking",
    duration: "3 days · Volcanoes NP",
    price: 2890,
    rating: 5.0,
    tag: "Rare",
    to: "/safari-packages",
  },
  {
    img: IMG.zanzibar,
    title: "Zanzibar Beach Escape",
    duration: "5 days · Stone Town & North Coast",
    price: 1690,
    rating: 4.8,
    tag: "Beach",
    to: "/holidays",
  },
  {
    img: IMG.islandCruise,
    title: "Indian Ocean Luxury Cruise",
    duration: "8 days · Zanzibar · Seychelles · Mauritius",
    price: 5490,
    rating: 4.9,
    tag: "Cruise",
    to: "/cruises",
  },
];

const SHOWCASE = [
  {
    img: IMG.lion,
    title: "African Safaris",
    desc: "Wild encounters across Tanzania, Kenya & Rwanda.",
    to: "/safari-packages",
  },
  {
    img: IMG.beach,
    title: "Beach & Holidays",
    desc: "Zanzibar, Bali and Phuket — sun-drenched escapes.",
    to: "/holidays",
  },
  {
    img: IMG.cruiseShip,
    title: "Luxury Cruises",
    desc: "Glide between island worlds in exclusive comfort.",
    to: "/cruises",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our Serengeti migration trip was beyond anything we imagined. The team knew exactly when and where to be — pure magic.",
    name: "Sophie & James L.",
    trip: "Great Migration · UK",
    avatar: IMG.avatar1,
  },
  {
    quote:
      "From the gorilla trek in Rwanda to the beaches of Zanzibar, every detail was perfectly handled. Truly five-star.",
    name: "Marco D.",
    trip: "Rwanda + Zanzibar · Italy",
    avatar: IMG.avatar2,
  },
  {
    quote:
      "A honeymoon we'll never forget. The cruise was intimate, luxurious and beautifully curated.",
    name: "Ayaka T.",
    trip: "Indian Ocean Cruise · Japan",
    avatar: IMG.avatar3,
  },
];

const BLOGS = [
  {
    img: IMG.blog1,
    title: "Best Time to Visit the Serengeti",
    excerpt: "A month-by-month guide to the Great Migration and Tanzania's wildlife seasons.",
    read: "6 min read",
  },
  {
    img: IMG.blog2,
    title: "Top Things to Do in Zanzibar",
    excerpt: "Stone Town spice tours, dhow sunset sails and the dreamiest North Coast beaches.",
    read: "5 min read",
  },
  {
    img: IMG.blog3,
    title: "Luxury Travel Guide to Bali",
    excerpt: "Hidden cliffside villas, sacred temples and where to slow down on the Island of the Gods.",
    read: "7 min read",
  },
];

function HomePage() {
  const [slide, setSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("ac_popup_seen")) return;
    const t = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("ac_popup_seen", "1");
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.label}
              className="h-full w-full object-cover animate-ken-burns"
              loading="eager"
            />
          </div>
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/80" />

        <div className="container-px mx-auto w-full max-w-7xl pt-32 pb-40 text-white">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Trusted by travelers from 40+ countries
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Discover Africa &<br />
            <span className="text-gold">Exotic Destinations</span> in Style
          </h1>
          <p className="mt-6 hidden max-w-xl text-lg text-white/85 sm:block md:text-xl">
            Luxury safaris, island escapes, and unforgettable cruise experiences — designed by your local experts in Arusha.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/safari-packages"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lux transition hover:bg-gold-light hover:scale-[1.02]"
            >
              Explore Safaris <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/holidays"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:text-gold"
            >
              View Holiday Packages
            </Link>
          </div>

          <div className="mt-12 hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70 sm:flex">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setSlide(i)}
                className="flex items-center gap-2"
              >
                <span
                  className={`h-px transition-all ${
                    i === slide ? "w-10 bg-gold" : "w-5 bg-white/40"
                  }`}
                />
                {i === slide && <span className="text-gold">{s.label}</span>}
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* Smart search bar */}
      <div className="relative z-20 -mt-12 md:-mt-14">
        <div className="container-px mx-auto max-w-6xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 shadow-lux ring-1 ring-black/5 md:grid-cols-[1.3fr_1fr_1fr_auto] md:gap-2 md:p-3"
            >
              <label className="flex items-center gap-3 rounded-xl bg-sand-alt px-4 py-3">
                <MapPin className="h-4 w-4 text-gold" />
                <select className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none">
                  <option>Destination</option>
                  <option>Serengeti, Tanzania</option>
                  <option>Masai Mara, Kenya</option>
                  <option>Volcanoes NP, Rwanda</option>
                  <option>Zanzibar</option>
                  <option>Bali</option>
                  <option>Phuket</option>
                </select>
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-sand-alt px-4 py-3">
                <Calendar className="h-4 w-4 text-gold" />
                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-sand-alt px-4 py-3">
                <DollarSign className="h-4 w-4 text-gold" />
                <select className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none">
                  <option>Budget</option>
                  <option>$1,500 – $3,000</option>
                  <option>$3,000 – $5,000</option>
                  <option>$5,000 – $8,000</option>
                  <option>$8,000+</option>
                </select>
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                <Search className="h-4 w-4" /> Search
              </button>
            </form>
          </div>
        </div>

      {/* Trust indicators */}
      <section className="bg-sand-alt pt-16 pb-12">
        <div className="container-px mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: MapPin, label: "Local Experts", desc: "Based in Arusha, Tanzania" },
            { Icon: Shield, label: "Best Price Guarantee", desc: "Honest, transparent pricing" },
            { Icon: Headphones, label: "24/7 Support", desc: "We're with you, always" },
            { Icon: Sparkles, label: "Tailor-Made", desc: "Crafted to your travel style" },
          ].map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-semibold text-navy">{label}</div>
                <div className="text-sm text-muted-foreground">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <Section
        eyebrow="Handpicked journeys"
        title="Featured Packages"
        subtitle="Curated itineraries our travelers love most — from the Great Migration to honeymoon cruises."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lux"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                  {p.tag}
                </span>
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy">
                  <Star className="h-3 w-3 fill-gold text-gold" /> {p.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.duration}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">From</span>
                    <div className="font-display text-2xl font-bold text-navy">
                      ${p.price.toLocaleString()}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Destinations showcase */}
      <section className="bg-navy py-24 text-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              ◆ Explore by experience
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Three worlds. One journey.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SHOWCASE.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-3xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/85">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Discover <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <Section
        eyebrow="Why AfricaCruising"
        title="A premium experience, from first call to final sunset"
        subtitle="We're not a booking site. We're a small team of African travel specialists obsessed with the details that turn trips into stories."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Born in Africa", desc: "Headquartered in Arusha, with deep roots across Tanzania, Kenya & Rwanda." },
            { title: "Hand-picked lodges", desc: "Only the camps and resorts we'd send our own families to." },
            { title: "Private guides", desc: "Expert drivers and naturalists who know where the magic happens." },
            { title: "Honest pricing", desc: "Transparent quotes — no hidden fees, no inflated commissions." },
          ].map((v, i) => (
            <div
              key={v.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-lux"
            >
              <div className="font-display text-5xl font-bold text-gold/30">0{i + 1}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: `linear-gradient(rgba(22,35,63,.85), rgba(22,35,63,.92)), url(${IMG.sunset})` }}
      >
        <div className="container-px mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Loved by travelers
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Stories from the journey
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl bg-white/5 p-7 backdrop-blur ring-1 ring-white/10"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-3 text-sm leading-relaxed text-white/90">
                  "{t.quote}"
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-gold"
                  />
                  <figcaption className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-white/60">{t.trip}</div>
                  </figcaption>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <Section
        eyebrow="Travel guides"
        title="Inspiration for your next journey"
        subtitle="Insider tips, seasonal advice and itinerary ideas from our team on the ground."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {BLOGS.map((b) => (
            <Link
              key={b.title}
              to="/blog"
              className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lux"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-gold">{b.read}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                  Read article <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={IMG.safariJeep}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start gap-6 py-24 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Ready when you are
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold md:text-5xl">
              Ready for your adventure?
            </h2>
            <p className="mt-3 max-w-xl text-white/80">
              Tell us your travel dream. We'll design a journey you'll talk about for years.
            </p>
          </div>
          <Link
            to="/tailor-made"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-lux transition hover:bg-gold-light hover:scale-[1.02]"
          >
            Start Your Enquiry <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-navy/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lux animate-float-up">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy hover:bg-gold hover:text-gold-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <img src={IMG.migration} alt="" className="h-40 w-full object-cover" />
            <div className="p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Great Migration Offer
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                Save 12% on July departures
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Limited dates for the Serengeti's most extraordinary wildlife spectacle. Leave your email and our team will be in touch within 24 hours.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); setShowPopup(false); }} className="mt-4 flex overflow-hidden rounded-full border border-border">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                />
                <button className="bg-gold px-5 text-sm font-semibold text-gold-foreground hover:bg-gold-light">
                  Claim
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
