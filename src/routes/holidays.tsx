import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { ChevronRight, Star } from "lucide-react";

export const Route = createFileRoute("/holidays")({
  head: () => ({
    meta: [
      { title: "Holiday Packages — Zanzibar, Bali, Phuket | AfricaCruising" },
      { name: "description", content: "Luxury beach holidays in Zanzibar, Bali and Phuket — plus combined Safari + Beach + Cruise packages." },
      { property: "og:title", content: "International Holiday Packages | AfricaCruising" },
      { property: "og:description", content: "Beach escapes & combined journeys, premium throughout." },
      { property: "og:url", content: "/holidays" },
      { property: "og:image", content: IMG.bali },
    ],
    links: [{ rel: "canonical", href: "/holidays" }],
  }),
  component: Holidays,
});

const PACKS = [
  { img: IMG.bali, title: "Luxury Bali Escape", days: "7 days · Ubud · Seminyak", price: 2390, tag: "Romance" },
  { img: IMG.phuket, title: "Phuket Island Tour", days: "6 days · Phuket · Phi Phi", price: 1990, tag: "Adventure" },
  { img: IMG.zanzibar, title: "Zanzibar Beach Holiday", days: "5 days · Stone Town · Nungwi", price: 1690, tag: "Beach" },
  { img: IMG.beach, title: "Safari + Zanzibar Combo", days: "9 days · Serengeti + Zanzibar", price: 4590, tag: "Combo" },
  { img: IMG.islandCruise, title: "Safari + Beach + Cruise", days: "12 days · Tanzania → Indian Ocean", price: 7990, tag: "Signature" },
  { img: IMG.yacht, title: "Honeymoon Yacht & Spa", days: "7 days · Private yacht + spa", price: 6890, tag: "Honeymoon" },
];

function Holidays() {
  return (
    <>
      <PageHero
        eyebrow="Beach & beyond"
        title="Holiday & International Packages"
        subtitle="Pair an African safari with sun-soaked island time, or escape to Bali, Phuket and Zanzibar on a stand-alone luxury getaway."
        image={IMG.bali}
      />

      <Section eyebrow="Featured holidays" title="Where would you like to wake up?">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKS.map((p) => (
            <Link
              key={p.title}
              to="/tailor-made"
              className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lux"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-ocean px-3 py-1 text-xs font-semibold text-white">{p.tag}</span>
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy">
                  <Star className="h-3 w-3 fill-gold text-gold" /> 4.9
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.days}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">From</span>
                    <div className="font-display text-2xl font-bold text-navy">${p.price.toLocaleString()}</div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Details <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
