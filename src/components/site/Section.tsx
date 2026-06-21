import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-px mx-auto max-w-7xl py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" /> {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden pt-24">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
      <div className="container-px mx-auto max-w-7xl pb-16 text-white">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
