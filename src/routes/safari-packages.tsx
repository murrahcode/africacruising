import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { Check, Star, ChevronRight, Clock } from "lucide-react";

export const Route = createFileRoute("/safari-packages")({
  head: () => ({
    meta: [
      { title: "Safari Packages — Tanzania, Kenya & Rwanda | AfricaCruising" },
      { name: "description", content: "Hand-crafted safari packages including the Great Migration, Ngorongoro Crater, Masai Mara and Rwanda gorilla trekking. Budget, mid-range and luxury tiers." },
      { property: "og:title", content: "Safari Packages | AfricaCruising" },
      { property: "og:description", content: "Premium African safaris from 3 to 7 days." },
      { property: "og:url", content: "/safari-packages" },
      { property: "og:image", content: IMG.migration },
    ],
    links: [{ rel: "canonical", href: "/safari-packages" }],
  }),
  component: SafariPackages,
});

const SAFARIS = [
  {
    img: IMG.ngorongoro,
    title: "5-Day Tanzania Safari",
    summary: "Tarangire, Ngorongoro Crater & Serengeti — the classic Northern Circuit.",
    days: ["Arusha → Tarangire NP", "Tarangire → Karatu", "Ngorongoro Crater", "Serengeti game drives", "Serengeti → Arusha"],
    fromBudget: 1890,
    fromMid: 2490,
    fromLux: 4290,
    rating: 4.8,
  },
  {
    img: IMG.migration,
    title: "7-Day Great Migration Safari",
    summary: "Track the world's greatest wildlife spectacle across the Serengeti.",
    days: ["Arusha arrival", "Central Serengeti", "Northern Serengeti", "Mara River crossings", "Wildlife & balloon", "Southern plains", "Return to Arusha"],
    fromBudget: 2990,
    fromMid: 3890,
    fromLux: 6790,
    rating: 4.9,
  },
  {
    img: IMG.masaiMara,
    title: "7-Day Kenya & Tanzania Combo",
    summary: "Two countries, two iconic parks — Masai Mara and Serengeti in one trip.",
    days: ["Nairobi arrival", "Masai Mara", "Masai Mara safari", "Fly to Serengeti", "Serengeti game drives", "Ngorongoro", "Departure"],
    fromBudget: 3290,
    fromMid: 4290,
    fromLux: 7490,
    rating: 4.9,
  },
  {
    img: IMG.gorilla,
    title: "3-Day Rwanda Gorilla Trekking",
    summary: "Eye-to-eye with mountain gorillas in Volcanoes National Park.",
    days: ["Kigali → Musanze", "Gorilla trek + cultural village", "Golden monkeys & return"],
    fromBudget: 2390,
    fromMid: 2890,
    fromLux: 4690,
    rating: 5.0,
  },
];

const INCLUDED = [
  "Private 4x4 safari vehicle with pop-up roof",
  "Professional English-speaking driver-guide",
  "All park & conservation fees",
  "Full board accommodation at chosen tier",
  "Airport transfers & bottled water daily",
];
const EXCLUDED = [
  "International flights",
  "Tanzania / Kenya / Rwanda visas",
  "Travel insurance",
  "Optional activities (balloon, cultural tours)",
  "Tips & personal expenses",
];

function SafariPackages() {
  return (
    <>
      <PageHero
        eyebrow="Core experience"
        title="African Safari Packages"
        subtitle="From the Great Migration to mountain gorillas — itineraries crafted by guides who know every secret of the bush."
        image={IMG.migration}
      />

      <Section
        eyebrow="Our itineraries"
        title="Choose your safari"
        subtitle="Each package can be combined with Zanzibar, a cruise or fully customized. All tiers include private guiding."
      >
        <div className="space-y-10">
          {SAFARIS.map((s) => (
            <article
              key={s.title}
              className="grid gap-6 overflow-hidden rounded-3xl bg-white shadow-soft md:grid-cols-[1.1fr_1fr] md:gap-0"
            >
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
                  <Star className="h-3 w-3 fill-gold text-gold" /> {s.rating}
                </div>
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold text-navy md:text-3xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.summary}</p>

                <div className="mt-5">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                    <Clock className="h-3.5 w-3.5" /> Day-by-day
                  </div>
                  <ol className="space-y-1.5 text-sm">
                    {s.days.map((d, i) => (
                      <li key={d} className="flex gap-3">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="text-foreground/85">{d}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-sand-alt p-4 text-center">
                  {[
                    ["Budget", s.fromBudget],
                    ["Mid-range", s.fromMid],
                    ["Luxury", s.fromLux],
                  ].map(([tier, price]) => (
                    <div key={tier}>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {tier}
                      </div>
                      <div className="font-display text-lg font-bold text-navy">
                        ${(price as number).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-muted-foreground">from / pp</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/tailor-made"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold-light"
                  >
                    Customize This Trip <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="All packages include" title="What's included & excluded">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-safari">Included</h3>
            <div className="gold-divider my-3" />
            <ul className="space-y-2 text-sm">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-safari" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-navy">Not included</h3>
            <div className="gold-divider my-3" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              {EXCLUDED.map((i) => <li key={i}>— {i}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
