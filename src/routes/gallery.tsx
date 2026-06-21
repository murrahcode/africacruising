import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Africa, Beach & Cruise Photography | AfricaCruising" },
      { name: "description", content: "A visual journey through our safaris, beach holidays and luxury cruises." },
      { property: "og:title", content: "Gallery | AfricaCruising" },
      { property: "og:description", content: "Wildlife, beaches and ships — captured." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const CATS = ["All", "Safari", "Beach", "Cruise"] as const;

const PHOTOS = [
  { img: IMG.lion, cat: "Safari", alt: "Lion in Serengeti" },
  { img: IMG.giraffe, cat: "Safari", alt: "Giraffes at sunset" },
  { img: IMG.migration, cat: "Safari", alt: "Great Migration herds" },
  { img: IMG.gorilla, cat: "Safari", alt: "Mountain gorilla, Rwanda" },
  { img: IMG.zanzibar, cat: "Beach", alt: "Zanzibar turquoise water" },
  { img: IMG.bali, cat: "Beach", alt: "Bali rice terraces" },
  { img: IMG.phuket, cat: "Beach", alt: "Phuket islands" },
  { img: IMG.beach, cat: "Beach", alt: "Tropical sandy beach" },
  { img: IMG.cruiseShip, cat: "Cruise", alt: "Luxury cruise ship" },
  { img: IMG.yacht, cat: "Cruise", alt: "Private yacht at anchor" },
  { img: IMG.islandCruise, cat: "Cruise", alt: "Indian Ocean island cruise" },
  { img: IMG.safariJeep, cat: "Safari", alt: "Safari vehicle on plains" },
];

function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const list = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="See for yourself"
        title="A gallery of journeys"
        subtitle="Real images from our travelers and guides — wildlife, beaches and ships."
        image={IMG.lion}
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${cat === c ? "border-gold bg-gold text-gold-foreground" : "border-border hover:border-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {list.map((p) => (
            <button
              key={p.img}
              onClick={() => setLightbox(p.img)}
              className="group block w-full overflow-hidden rounded-2xl"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] grid place-items-center bg-navy/90 p-6"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-lux" />
        </div>
      )}
    </>
  );
}
