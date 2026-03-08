import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

const gcShots = [
  {
    src: "/gc/1.png",
    caption: "Set up your profile, show your essence",
  },
  {
    src: "/gc/2.png",
    caption: "Start where you are, connect locally",
  },
  {
    src: "/gc/3.png",
    caption: "Choose your vibe",
  },
  {
    src: "/gc/4.png",
    caption: "Build community",
  },
  {
    src: "/gc/5.png",
    caption: "Discover places & events to make memories IRL",
  },
];

export default function ProductWorkPage() {
  return (
    <main>
      {/* HERO */}
      <Section className="bg-[var(--cream)] py-12 md:py-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="relative aspect-[16/7] md:aspect-[16/6]">
              <Image
                src="/hero-4.png"
                alt="Digital products and web"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </Section>

      {/* GIRLS COLLECTIVE – OVERVIEW */}
      <Section className="bg-white py-14">
        <div>
          <h2 className="font-display text-3xl">
  Project:{" "}
  <a
    href="https://girls-collective.com"
    target="_blank"
    rel="noreferrer"
    className="hover:opacity-80"
  >
    Girls Collective
  </a>
</h2>

          <p className="mt-2 text-xs text-[var(--muted)]">
            2025–Present | Founder · Spain &amp; Latam
          </p>

          <div className="mt-8 max-w-5xl text-justify text-sm leading-snug text-[var(--muted)]">
            <p>
              Founded a city-based social discovery platform designed to help
              women connect through shared interests and real-life experiences.
              Built the platform end-to-end, creating all content and designing
              the platform independently.
            </p>
          </div>

          {/* screenshots */}
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5">
            {gcShots.map((shot, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full max-w-[180px] overflow-hidden">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="mt-4 max-w-[180px] text-center font-display text-sm leading-snug text-[var(--ink)]">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GIRLS COLLECTIVE – PRODUCT / GROWTH / FEATURES */}
<Section className="bg-white py-14">
  <div>
    <h2 className="font-display text-3xl">
      Project:{" "}
      <a
        href="https://girls-collective.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-80"
      >
        Girls Collective
      </a>
    </h2>

    <p className="mt-2 text-xs text-[var(--muted)]">
      2025–Present | Founder · Spain &amp; Latam
    </p>

    <div className="mt-10 grid gap-10 md:grid-cols-3">
      {/* COLUMN 1 */}
      <div>
        <h3 className="font-display text-2xl text-[var(--ink)]">
          Product development
        </h3>

        <ul className="mt-8 space-y-7 text-sm leading-snug text-[var(--muted)]">
          {[
            "Designed the product concept and user flows",
            "Built the platform using Next.js, Supabase and Tailwind, integrating geolocation APIs (AI assisted)",
            "Implemented authentication, group structures, events and chat systems",
            "Designed the full UX and interface architecture",
          ].map((text, i) => (
            <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
              <Image
                src="/flor-bullet.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] object-contain"
              />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 2 */}
      <div>
        <h3 className="font-display text-2xl text-[var(--ink)]">
          Growth &amp; validation
        </h3>

        <ul className="mt-8 space-y-7 text-sm leading-snug text-[var(--muted)]">
          {[
            "Launched organically in Valencia",
            "Built an early community of 500+ users",
            "Enabled host-led events and meetups through a dedicated B2B host model",
            "Established the foundations for multi-city expansion",
          ].map((text, i) => (
            <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
              <Image
                src="/flor-bullet.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] object-contain"
              />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 3 */}
      <div>
        <h3 className="font-display text-2xl text-[var(--ink)]">
          Key features
        </h3>

        <ul className="mt-8 space-y-7 text-sm leading-snug text-[var(--muted)]">
          {[
            "City-based groups and interest-based community subgroups",
            "Event creation and participation (from users & hosts)",
            "Group and event chats",
            "Curated local venue recommendations",
            "Live interactive map to discover events and plans",
          ].map((text, i) => (
            <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
              <Image
                src="/flor-bullet.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] object-contain"
              />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</Section>

{/* EL MAPA DEL ALQUILER */}
<Section className="bg-white py-14">
  <div>
    <h2 className="font-display text-3xl">
      Project:{" "}
      <a
        href="https://elmapadelalquiler.es"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-80"
      >
        El mapa del Alquiler
      </a>
    </h2>

    <p className="mt-2 text-xs text-[var(--muted)]">
      2026–Present | Founder · Spain
    </p>

    {/* intro */}
    <div className="mt-8 max-w-5xl text-justify text-sm leading-snug text-[var(--muted)]">
      <p>
        Created a collaborative platform where tenants can leave anonymous
        reviews of apartments and rooms in Spain, with the goal of bringing
        transparency to the rental market and empowering future tenants to make
        better informed decisions.
      </p>
    </div>

    {/* screenshots */}
    <div className="mt-10 flex flex-wrap justify-center gap-10">
      {[
        {
          src: "/mapa/1.png",
          caption: "Explore reviews through the map",
        },
        {
          src: "/mapa/2.png",
          caption: "Create a review",
        },
        {
          src: "/mapa/3.png",
          caption: "Manage your review",
        },
      ].map((shot, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative w-[200px]">
            <div className="relative aspect-[9/16]">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-4 text-center font-display text-sm text-[var(--ink)]">
            {shot.caption}
          </p>
        </div>
      ))}
    </div>
  </div>
</Section>

{/* EL MAPA DEL ALQUILER – PRODUCT DEVELOPMENT / KEY FEATURES */}
<Section className="bg-white py-14">
  <div>
    <h2 className="font-display text-3xl">
      Project:{" "}
      <a
        href="https://elmapadelalquiler.es"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-80"
      >
        El mapa del Alquiler
      </a>
    </h2>

    <p className="mt-2 text-xs text-[var(--muted)]">
      2026–Present | Founder · Spain
    </p>

    <div className="mt-10 grid gap-10 md:grid-cols-2">
      {/* COLUMN 1 */}
      <div>
        <h3 className="font-display text-2xl text-[var(--ink)]">
          Product development
        </h3>

        <ul className="mt-8 space-y-7 text-sm leading-snug text-[var(--muted)]">
          {[
            "Designed the platform concept and flow system",
            "Built the platform (AI assisted)",
            "Implemented map-based interface using geolocation APIs",
            "Designed the UX, brand identity and user journey",
          ].map((text, i) => (
            <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
              <Image
                src="/flor-bullet.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] object-contain"
              />
              <p className="max-w-[420px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 2 */}
      <div>
        <h3 className="font-display text-2xl text-[var(--ink)]">
          Key features
        </h3>

        <ul className="mt-8 space-y-7 text-sm leading-snug text-[var(--muted)]">
          {[
            "Interactive map-based review system",
            "Anonymous tenant reviews and owner replies",
            "Property rating framework",
            "Community-driven data collection",
          ].map((text, i) => (
            <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
              <Image
                src="/flor-bullet.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] object-contain"
              />
              <p className="max-w-[420px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</Section>

{/* WHAT I BRING */}
<Section className="bg-[var(--cream)] py-14">
  <div className="mx-auto max-w-4xl">
    <h3 className="font-display text-3xl text-[var(--ink)]">
      What I bring:
    </h3>

    <ul className="mt-11 space-y-7 text-sm leading-snug text-[var(--muted)]">
      {[
        "End-to-end product ownership, from idea and validation to development",
        "Experience building and scaling platforms from zero",
        "Product, user & data-driven decision making",
        "Technical product literacy",
        "Ownership, autonomy and growth mindset",
      ].map((text, i) => (
        <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
          <Image
            src="/flor-bullet.png"
            alt=""
            width={28}
            height={28}
            className="mt-0.5 h-[28px] w-[28px] object-contain"
          />
          <p>{text}</p>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <div className="mt-14 flex flex-col items-center gap-3 text-center">
      <p className="font-display text-xl text-[var(--ink)]">
        ready for the next challenge!
      </p>

      <div className="mt-5 flex flex-col items-center">
        <Button href="mailto:lou.samper@gmail.com" variant="primary">
  Let’s connect
</Button>

        {/* Go back debajo del botón */}
        <a
          href="/#work"
          className="mt-4 text-xs font-sans font-semibold text-[var(--ink)]/70 underline underline-offset-4 hover:text-[var(--ink)]"
        >
          go back to work areas
        </a>
      </div>
      </div>
  </div>
</Section>

            <footer className="bg-white py-10 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Ludmila
      </footer>
    </main>
  );
}