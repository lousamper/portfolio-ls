import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function EcommerceWorkPage() {
  const bullets = [
    "Scaled the brand’s marketplace presence across multiple European markets with a structured, data-led approach.",
    "Improved performance by aligning product strategy with local customer needs and channel dynamics.",
    "Strengthened international growth through partnerships and market-specific execution.",
  ];

  return (
    <main>
      {/* HERO ECOMMERCE (CREMITA, igual a Social) */}
<Section className="bg-[var(--cream)] py-12 md:py-16">
  <div className="flex justify-center">
    <div className="relative w-full max-w-4xl">
      <div className="relative aspect-[16/7] md:aspect-[16/6]">
        <Image
          src="/hero-3.png"
          alt="Ecommerce & Marketplaces"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  </div>
</Section>

      {/* PROJECT: KLAST HOME */}
      <Section className="bg-white py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* LEFT — TEXTO */}
          <div>
            <h2 className="font-display text-3xl">Project: Klast Home</h2>

            <p className="mt-2 text-xs text-[var(--muted)]">
              2024–2025 | Ecommerce &amp; Marketplaces Manager | Spain, Portugal,
              France, Italy
            </p>

            <div className="mt-8 max-w-[460px] text-justify text-sm leading-snug text-[var(--muted)]">
              <p>
                Owned international ecommerce and marketplace strategy and growth
                across Europe, defining channel-specific strategies and driving
                performance by market.
              </p>
            </div>

            {/* BULLETS */}
            <ul className="mt-10 space-y-8 text-sm text-[var(--muted)]">
              {bullets.map((text, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] items-start gap-4"
                >
                  <Image
                    src="/flor-bullet.png"
                    alt=""
                    width={28}
                    height={28}
                    className="mt-[2px] h-[28px] w-[28px] object-contain"
                  />
                  <p className="max-w-[460px]">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — IMAGEN */}
          <div className="w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/klast-ecommerce.png"
                alt="Klast Home ecommerce work"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-center text-xs text-[var(--muted)]">
              Built Amazon storefront and optimized marketplace listings using
              Prestashop, Shoppingfeed and Mirakl.
            </p>
          </div>
        </div>
      </Section>

      {/* PROJECT: UP SPAIN */}
<Section className="bg-white py-14">
  <div className="grid gap-12 md:grid-cols-2 md:items-start">
    {/* LEFT — TEXTO */}
    <div>
      <h2 className="font-display text-3xl">Project: UP Spain</h2>

      <p className="mt-2 text-xs text-[var(--muted)]">
        2019–2022 | Ecommerce Product Manager | Spain &amp; Latam
      </p>

      <div className="mt-8 max-w-[460px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Owned the ecommerce product roadmap, platform optimization and
          performance analytics across multiple markets.
        </p>
      </div>

      {/* BULLETS */}
      <ul className="mt-10 space-y-8 text-sm text-[var(--muted)]">
        {[
          "Managed the product portfolio across 26 permanent stores plus seasonal channels in multiple markets.",
          "Designed and implemented a data tracking and analytics framework connecting product, marketing and performance data.",
          "Led ongoing platform development and optimization to drive user growth.",
        ].map((text, i) => (
          <li
            key={i}
            className="grid grid-cols-[28px_1fr] items-start gap-4"
          >
            <Image
              src="/flor-bullet.png"
              alt=""
              width={28}
              height={28}
              className="mt-[2px] h-[28px] w-[28px] object-contain"
            />
            <p className="max-w-[460px]">{text}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT — IMAGEN */}
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/up-ecommerce.png"
          alt="UP Spain ecommerce work"
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-2 text-center text-xs text-[var(--muted)]">
        Most products were client private.
      </p>
    </div>
  </div>
</Section>

{/* PROJECT: RIMMEL LONDON (Ecommerce/Marketplaces) */}
<Section className="bg-white py-14">
  <div className="grid gap-12 md:grid-cols-2 md:items-start">
    {/* LEFT — TEXTO */}
    <div>
      <h2 className="font-display text-3xl">Project: Rimmel London</h2>

      <p className="mt-2 text-xs text-[var(--muted)]">
        2015–2018 | Brand Manager | Argentina
      </p>

      <div className="mt-8 max-w-[460px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Rimmel was primarily offline-led, while beginning to explore ecommerce
          and marketplace foundations.
        </p>
      </div>

      {/* BULLETS */}
      <ul className="mt-10 space-y-8 text-sm text-[var(--muted)]">
        {[
          "Coordinated with key e-tailers and marketplaces (Mercado Libre, Farmacity, Pigmento) for content, promotions and product launches.",
          "Established initial ecommerce and marketplace standards for content, promotions, and launches.",
          "Enabled smoother collaboration between brand, retail, and digital partners during the brand’s early ecommerce phase.",
        ].map((text, i) => (
          <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
            <Image
              src="/flor-bullet.png"
              alt=""
              width={28}
              height={28}
              className="mt-[2px] h-[28px] w-[28px] object-contain"
            />
            <p className="max-w-[460px]">{text}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT — IMAGEN */}
    <div className="w-full">
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src="/rimmel-ecommerce.png"
          alt="Rimmel ecommerce and marketplace work"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</Section>

{/* PROJECT: PROCTER & GAMBLE */}
<Section className="bg-white py-14">
  <div className="grid gap-12 md:grid-cols-2 md:items-start">
    {/* LEFT — TEXTO */}
    <div>
      <h2 className="font-display text-3xl">Project: Procter &amp; Gamble</h2>

      <p className="mt-2 text-xs text-[var(--muted)]">
        2012–2015 | Ecommerce Specialist &amp; Digital Project Manager | Argentina &amp; Brazil
      </p>

      <div className="mt-8 max-w-[460px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Owned ecommerce execution across P&amp;G’s digital ecosystem in Argentina
          and Brazil.
        </p>
      </div>

      {/* BULLETS */}
      <ul className="mt-10 space-y-8 text-sm text-[var(--muted)]">
        {[
          "Optimized product content for pg.com and key regional e-retailers.",
          "Coordinated with e-tailer account managers on promotions, visibility initiatives and launch planning.",
          "Analyzed stock and performance data to support decision-making around catalog, promotions and activation priorities.",
        ].map((text, i) => (
          <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-4">
            <Image
              src="/flor-bullet.png"
              alt=""
              width={28}
              height={28}
              className="mt-[2px] h-[28px] w-[28px] object-contain"
            />
            <p className="max-w-[460px]">{text}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT — IMAGEN */}
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/pg-ecommerce.png"
          alt="Procter & Gamble ecommerce work"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</Section>

{/* WHAT I BRING (CREMITA) */}
<Section className="bg-[var(--cream)] py-16">
  <div className="mx-auto max-w-4xl">
    <h3 className="font-display text-3xl text-[var(--ink)]">
      What I bring:
    </h3>

    {/* BULLETS */}
    <ul className="mt-10 space-y-6 text-sm text-[var(--muted)]">
      {[
        "Ecommerce & Marketplaces expertise at scale",
        "Experience building and scaling platforms from zero",
        "Product, user & data-driven decision making",
        "Strong brand, content & UX sensibility",
        "Ownership, autonomy and growth mindset",
      ].map((text, i) => (
        <li
          key={i}
          className="grid grid-cols-[28px_1fr] items-start gap-4"
        >
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

    {/* CTA */}
    <div className="mt-16 text-center">
      <p className="font-display text-xl text-[var(--ink)]">
        ready for the next challenge!
      </p>

      <div className="mt-6 flex flex-col items-center gap-3">
        <Button href="mailto:lou.samper@gmail.com" variant="primary">
  Let’s connect
</Button>

        <a
          href="/#work"
          className="text-sm underline text-[var(--ink)]/80 hover:text-[var(--ink)]"
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