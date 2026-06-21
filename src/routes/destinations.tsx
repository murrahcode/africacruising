import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Africa, Indian Ocean & Beyond | AfricaCruising" },
      { name: "description", content: "Explore our destinations: Serengeti, Ngorongoro, Masai Mara, Volcanoes NP, Zanzibar, Bali, Phuket and our luxury cruise routes." },
      { property: "og:title", content: "Destinations | AfricaCruising" },
      { property: "og:description", content: "Africa, the Indian Ocean and exotic island escapes — handpicked." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});

const GROUPS = [
  {
    title: "African Safaris",
    accent: "safari",
    items: [
      { img: IMG.migration, name: "Serengeti", note: "Great Migration · Tanzania" },
      { img: IMG.ngorongoro, name: "Ngorongoro Crater", note: "World wonder · Tanzania" },
      { img: IMG.tarangire, name: "Tarangire", note: "Elephants & baobabs" },
      { img: IMG.masaiMara, name: "Masai Mara", note: "Big cats · Kenya" },
      { img: IMG.gorilla, name: "Volcanoes NP", note: "Gorilla trekking · Rwanda" },
    ],
    to: "/safari-packages",
  },
  {
    title: "Beach & Holiday",
    accent: "ocean",
    items: [
      { img: IMG.zanzibar, name: "Zanzibar", note: "Spice island · Tanzania" },
      { img: IMG.bali, name: "Bali", note: "Island of the gods · Indonesia" },
      { img: IMG.phuket, name: "Phuket", note: "Andaman escape · Thailand" },
    ],
    to: "/holidays",
  },
  {
    title: "Cruise Packages",
    accent: "navy",
    items: [
      { img: IMG.cruiseShip, name: "African Coastal", note: "Mombasa to Cape Town" },
      { img: IMG.islandCruise, name: "Indian Ocean Islands", note: "Zanzibar · Seychelles · Mauritius" },
      { img: IMG.yacht, name: "Luxury Yacht & Honeymoon", note: "Private charters" },
    ],
    to: "/cruises",
  },
];

function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Where we go"
        title="Destinations curated with care"
        subtitle="From the plains of the Serengeti to the white sands of Zanzibar and the decks of Indian Ocean cruisers."
        image={IMG.heroZanzibar}
      />

      {GROUPS.map((g) => (
        <Section key={g.title} eyebrow={g.title} title={`Discover ${g.title.toLowerCase()}`}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {g.items.map((d) => (
              <Link
                key={d.name}
                to={g.to}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                  <p className="text-sm text-white/80">{d.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Explore <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
