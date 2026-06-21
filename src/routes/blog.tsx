import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Guides & Blog | AfricaCruising" },
      { name: "description", content: "Expert travel guides from our African destination specialists — Serengeti, Zanzibar, Bali and more." },
      { property: "og:title", content: "Travel Guides | AfricaCruising" },
      { property: "og:description", content: "Insider tips for your next adventure." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { img: IMG.blog1, title: "Best Time to Visit the Serengeti", excerpt: "A month-by-month guide to the Great Migration and Tanzania's wildlife seasons.", read: "6 min", tag: "Safari" },
  { img: IMG.blog2, title: "Top Things to Do in Zanzibar", excerpt: "Stone Town spice tours, dhow sunsets and the dreamiest beaches.", read: "5 min", tag: "Beach" },
  { img: IMG.blog3, title: "Luxury Travel Guide to Bali", excerpt: "Hidden cliffside villas, sacred temples and where to slow down.", read: "7 min", tag: "Holiday" },
  { img: IMG.gorilla, title: "Preparing for Rwanda Gorilla Trekking", excerpt: "What to pack, how to train and what to expect when you meet a family.", read: "8 min", tag: "Safari" },
  { img: IMG.islandCruise, title: "An Introduction to Indian Ocean Cruising", excerpt: "Why small-ship cruising in the Indian Ocean is the trip of a lifetime.", read: "6 min", tag: "Cruise" },
  { img: IMG.masaiMara, title: "Kenya & Tanzania: One Trip or Two?", excerpt: "How to decide between a combo safari and a deeper single-country trip.", read: "5 min", tag: "Safari" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Read · Plan · Dream"
        title="Travel Guides"
        subtitle="Field notes, season tips and itinerary ideas straight from our team on the ground."
        image={IMG.heroSerengeti}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.title} to="/blog" className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lux">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                  <span className="text-gold">{p.tag}</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
