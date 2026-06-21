import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { Award, Users, MapPin, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AfricaCruising.com" },
      { name: "description", content: "Meet the team behind AfricaCruising — trusted African travel experts based in Arusha, Tanzania, with deep presence across Tanzania, Kenya and Rwanda." },
      { property: "og:title", content: "About AfricaCruising — Local Experts, Premium Travel" },
      { property: "og:description", content: "Personalized, luxury African journeys designed by people who live them." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: IMG.team },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Born in Africa. Built for travelers who want more."
        subtitle="AfricaCruising.com is a boutique travel company headquartered in Arusha, Tanzania, designing premium safaris, beach holidays and cruise experiences for guests from around the world."
        image={IMG.team}
      />

      <Section
        eyebrow="Who we are"
        title="A local team, a global perspective"
        subtitle="We grew up on these landscapes. We know the guides, the lodges, the seasons and the secret moments that turn a trip into a story."
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={IMG.safariJeep} alt="Our team on safari" className="rounded-3xl shadow-lux" />
          <div className="space-y-5 text-foreground/85">
            <p>
              Founded by lifelong Tanzanians with decades of guiding experience, AfricaCruising was born from a simple idea: travelers deserve more than itineraries — they deserve a partner.
            </p>
            <p>
              Today we operate across Tanzania, Kenya and Rwanda, with carefully chosen partners for our beach and cruise programs in Zanzibar, Bali, Phuket and beyond.
            </p>
            <p>
              Every journey is hand-crafted. Every detail is checked. And every guest works directly with a real travel designer — not a call center.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-navy py-20 text-white">
        <div className="container-px mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Award, n: "15+", l: "Years of experience" },
            { Icon: Users, n: "8,400+", l: "Happy travelers" },
            { Icon: MapPin, n: "20+", l: "Destinations covered" },
            { Icon: Heart, n: "4.9/5", l: "Average review" },
          ].map(({ Icon, n, l }) => (
            <div key={l}>
              <Icon className="mx-auto h-7 w-7 text-gold" />
              <div className="mt-3 font-display text-5xl font-bold text-gold">{n}</div>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="What we value" title="Five things we will never compromise">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Authenticity", "Real experiences, real people, real places — no manufactured tourism."],
            ["Safety", "Carefully vetted guides, vehicles and accommodations on every trip."],
            ["Sustainability", "Partnerships with conservancies and community-owned lodges."],
            ["Service", "One dedicated travel designer from first message to your return."],
            ["Quality", "Only the best lodges, camps and ships — at honest prices."],
            ["Discretion", "Private, personal travel — your itinerary is yours alone."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-white p-7 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-navy">{t}</h3>
              <div className="gold-divider my-3" />
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/tailor-made" className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground hover:bg-gold-light">
            Start Planning Your Trip
          </Link>
        </div>
      </Section>
    </>
  );
}
