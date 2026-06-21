import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { IMG } from "@/lib/images";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

export const Route = createFileRoute("/tailor-made")({
  head: () => ({
    meta: [
      { title: "Tailor-Made Trips — Build Your Dream Journey | AfricaCruising" },
      { name: "description", content: "Tell us your travel style, dates and preferences. We'll design a private, premium itinerary across Africa and beyond." },
      { property: "og:title", content: "Tailor-Made African Travel | AfricaCruising" },
      { property: "og:description", content: "A multi-step builder for your custom itinerary." },
      { property: "og:url", content: "/tailor-made" },
    ],
    links: [{ rel: "canonical", href: "/tailor-made" }],
  }),
  component: TailorMade,
});

const STYLES = ["Honeymoon", "Family", "Luxury", "Adventure"];
const DESTS = ["Tanzania Safari", "Kenya Safari", "Rwanda Gorillas", "Zanzibar", "Bali", "Phuket", "Cruise"];

function TailorMade() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<{ style?: string; dests: string[]; dates?: string; party?: string; budget?: string; notes?: string; name?: string; email?: string }>({ dests: [] });
  const [done, setDone] = useState(false);

  const steps = ["Travel Style", "Destinations", "When & Who", "Budget", "Your Details"];
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const toggleDest = (d: string) =>
    setData((p) => ({ ...p, dests: p.dests.includes(d) ? p.dests.filter((x) => x !== d) : [...p.dests, d] }));

  return (
    <>
      <PageHero
        eyebrow="Built for you"
        title="Design your perfect journey"
        subtitle="A short conversation that lets our travel designers craft something extraordinary — tailored to you, your pace and your style."
        image={IMG.campLuxury}
      />

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-lux md:p-10">
          {done ? (
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-safari/10 text-safari">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold text-navy">Thank you — enquiry received</h2>
              <p className="mt-3 text-muted-foreground">
                Our travel designers will reply within 24 hours with first ideas for your trip.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>Step {step + 1} of {steps.length}</span>
                <span className="font-semibold text-gold">{steps[step]}</span>
              </div>
              <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-sand-alt">
                <div className="h-full bg-gold transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
              </div>

              {step === 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {STYLES.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setData((p) => ({ ...p, style: s })); next(); }}
                      className={`rounded-2xl border p-5 text-left transition hover:border-gold ${data.style === s ? "border-gold bg-sand-alt" : "border-border"}`}
                    >
                      <div className="font-display text-xl font-semibold text-navy">{s}</div>
                      <div className="mt-1 text-sm text-muted-foreground">Curated for {s.toLowerCase()} travelers.</div>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-wrap gap-2">
                  {DESTS.map((d) => {
                    const active = data.dests.includes(d);
                    return (
                      <button
                        key={d}
                        onClick={() => toggleDest(d)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${active ? "border-gold bg-gold text-gold-foreground" : "border-border hover:border-gold"}`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Approx. travel dates">
                    <input type="text" placeholder="e.g. July 2026" className="input" onChange={(e) => setData({ ...data, dates: e.target.value })} />
                  </Field>
                  <Field label="Party size">
                    <input type="text" placeholder="e.g. 2 adults + 1 child" className="input" onChange={(e) => setData({ ...data, party: e.target.value })} />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {["$2,000 – $4,000 pp", "$4,000 – $7,000 pp", "$7,000 – $12,000 pp", "$12,000+ pp"].map((b) => (
                    <button
                      key={b}
                      onClick={() => { setData((p) => ({ ...p, budget: b })); next(); }}
                      className={`rounded-2xl border p-5 text-left transition hover:border-gold ${data.budget === b ? "border-gold bg-sand-alt" : "border-border"}`}
                    >
                      <div className="font-display text-lg font-semibold text-navy">{b}</div>
                    </button>
                  ))}
                </div>
              )}

              {step === 4 && (
                <div className="grid gap-4">
                  <Field label="Your name"><input className="input" onChange={(e) => setData({ ...data, name: e.target.value })} /></Field>
                  <Field label="Email"><input type="email" className="input" onChange={(e) => setData({ ...data, email: e.target.value })} /></Field>
                  <Field label="Anything else we should know?">
                    <textarea rows={4} className="input" onChange={(e) => setData({ ...data, notes: e.target.value })} />
                  </Field>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button onClick={back} disabled={step === 0} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-navy disabled:opacity-30">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button onClick={next} className="inline-flex items-center gap-1 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90">
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button onClick={() => setDone(true)} className="inline-flex items-center gap-1 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold-light">
                    Send Enquiry <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </Section>

      <style>{`.input{width:100%;border:1px solid var(--border);background:#fff;border-radius:12px;padding:.75rem 1rem;font-size:.875rem;outline:none}.input:focus{border-color:var(--gold)}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}
