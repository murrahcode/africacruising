import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { Anchor, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/cruises")({
  head: () => ({
    meta: [
      { title: "Luxury Cruises — African Coast & Indian Ocean | AfricaCruising" },
      { name: "description", content: "Luxury cruise experiences along the African coast and across the Indian Ocean — including private yacht and honeymoon charters." },
      { property: "og:title", content: "Cruise Experiences | AfricaCruising" },
      { property: "og:description", content: "Glide between island worlds in exclusive comfort." },
      { property: "og:url", content: "/cruises" },
      { property: "og:image", content: IMG.cruiseShip },
    ],
    links: [{ rel: "canonical", href: "/cruises" }],
  }),
  component: Cruises,
});

const CRUISES = [
  { img: IMG.cruiseShip, title: "African Coastal Cruise", desc: "Mombasa, Dar es Salaam, Zanzibar and Mozambique highlights.", days: "10 days", icon: Anchor },
  { img: IMG.islandCruise, title: "Indian Ocean Island Cruise", desc: "Zanzibar · Seychelles · Mauritius — island-hopping in style.", days: "8 days", icon: Compass },
  { img: IMG.yacht, title: "Luxury Yacht & Honeymoon", desc: "Private yacht charters with chef, butler and intimate anchorages.", days: "5-14 days", icon: Sparkles },
];

function Cruises() {
  return (
    <>
      <PageHero
        eyebrow="On the water"
        title="Cruise Experiences"
        subtitle="Effortless luxury at sea — small ships and private yachts threading the most beautiful coastlines and islands of Africa and the Indian Ocean."
        image={IMG.cruiseShip}
      />

      <Section eyebrow="Signature voyages" title="Choose your horizon">
        <div className="grid gap-8 md:grid-cols-3">
          {CRUISES.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lux">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean">
                  <c.icon className="h-4 w-4" /> {c.days}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <Link to="/tailor-made" className="mt-5 inline-flex items-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
                  Plan This Cruise
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
