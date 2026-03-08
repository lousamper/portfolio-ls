import Image from "next/image";
import { Section } from "@/components/Section";
import { WorkAreaCard } from "@/components/WorkAreaCard";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      {/* HERO (CREMITA) */}
      <Section className="bg-[var(--cream)] py-12 md:py-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <div className="relative aspect-[16/7]">
              <Image
                src="/hero.png"
                alt="Ludmila Samper"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT (BLANCO) */}
      <Section className="bg-white py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="relative aspect-[1/1]">
                <Image
                  src="/about-card.png"
                  alt="About card"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-widest text-[var(--muted)]">
              ABOUT ME
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              I’m a strategic and creative marketing professional
            </h2>
            <p className="mt-4 font-sans leading-relaxed text-[var(--muted)]">
              with +10 years of international experience in beauty, FMCG
              and tech industries, across both B2C and B2B environments.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-[var(--muted)]">
              Experienced in brand management, digital marketing and ecommerce.
              I thrive in dynamic, fast-paced environments and bring a proactive,
              solution-oriented mindset to every challenge.
            </p>
          </div>
        </div>
      </Section>

      {/* SKILLS (CREMITA) */}
      <Section className="bg-[var(--cream)] py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Soft Skills */}
          <div className="relative rounded-3xl bg-[var(--primary)] p-10 text-[var(--cream)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="pointer-events-none absolute right-6 top-6 opacity-90">
  <Image
    src="/flourish-top-left.png"
    alt=""
    width={600}
    height={300}
    className="h-auto w-[150px]"
  />
</div>

            <div className="pointer-events-none absolute bottom-6 left-6 opacity-90">
              <Image
                src="/flourish-bottom-left.png"
                alt=""
                width={600}
                height={300}
                className="h-auto w-[150px]"
              />
            </div>

            <h3 className="font-display text-3xl">Soft Skills</h3>
            

            <ul className="mt-7 space-y-1.5 text-sm leading-relaxed text-white/90">
              <li>Strong communication and interpersonal skills</li>
              <li>Excellent organization and time management</li>
              <li>Proactive and motivated</li>
              <li>Adaptable and creative</li>
              <li>Analytical and strategic thinking</li>
              <li>Problem solving oriented</li>
              <li>Transversal leadership</li>
              <li>Consumer focused</li>
              <li>Aesthetic sensibility</li>
              <li>Idea to execution mindset</li>
            </ul>
          </div>

          {/* Technical skills */}
          <div className="relative rounded-3xl bg-[var(--primary)] p-10 text-[var(--cream)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="pointer-events-none absolute right-6 top-6 opacity-90">
              <Image
                src="/flourish-top-right.png"
                alt=""
                width={600}
                height={300}
                className="h-auto w-[170px]"
              />
            </div>

            <h3 className="font-display text-3xl">Technical skills</h3>

<div className="mt-9 space-y-4 text-sm leading-relaxed text-white/90">
  <p>
    <b>Tech &amp; Automation:</b> CMS (custom or standards), HTML, CSS, SQL, AI tools
  </p>

  <p>
    <b>Data analysis &amp; visualization:</b> Advanced Excel, GA4, Looker, Power BI, Tableau, Hotjar, Contentsquare, Nielsen Scantrack, Essbase, Flourish
  </p>

  <p>
    <b>Social:</b> Meta, TikTok, Pinterest, LinkedIn
  </p>

  <p>
    <b>Project Management:</b> Notion, Jira, Asana
  </p>

  <p>
    <b>Design &amp; UX:</b> Canva, Figma, AI image generator
  </p>

  <p>
    <b>Ecommerce:</b> Prestashop, Shopify, Amazon Seller Central, Mirakl, Shoppingfeed
  </p>

  <p>
    <b>ERP:</b> Navision, SAP
  </p>
</div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE + BACKGROUND (BLANCO) */}
      <Section className="bg-white py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-4xl">Experience</h3>

            <ul className="mt-6 space-y-7 text-sm leading-relaxed text-[var(--muted)]">


              <li>
                <div>
                  Global Marketing, Ecommerce &amp; Marketplaces Manager at Klast
                  Home
                </div>
                <div>Spain | 2024 - 2025</div>
              </li>

              <li>
                <div>Ecommerce Product Manager at UP Spain</div>
                <div>Spain | 2019 - 2022</div>
              </li>

              <li>
                <div>Marketing &amp; Ecommerce Specialist at Avon</div>
                <div>Spain | 2018 - 2019</div>
              </li>

              <li>
                <div>Brand &amp; PR Manager at Rimmel London</div>
                <div>Argentina | 2015 - 2018</div>
              </li>

              <li>
                <div>Digital Project Manager at Procter &amp; Gamble</div>
                <div>Argentina | 2012 - 2015</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-4xl">Studies</h3>

            <ul className="mt-6 space-y-7 text-sm leading-relaxed text-[var(--muted)]">
              <li>
                <div>Master in Digital Marketing at EUDE</div>
                <div>Madrid | 2019</div>
              </li>
              <li>
                <div>BA in Business &amp; Marketing at UADE</div>
                <div>Argentina | 2015</div>
              </li>
            </ul>

            <h4 className="mt-12 font-display text-4xl">We can speak in</h4>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
              <li>English</li>
              <li>Spanish</li>
              <li>Portuguese</li>
              <li>German (basic)</li>
            </ul>

            {/* Link estilo Canva: texto negro, negrita, subrayado */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/ludmila-samper/"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-sm font-bold underline text-black"
              >
                view more on linkedin
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* WORK AREAS (CREMITA) */}
      <Section className="bg-[var(--cream)] py-14" id="work"> 
        <h3 className="text-center font-display text-4xl text-[var(--primary)]">
          My work areas
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <WorkAreaCard
            title={"Brand &\nMarketing strategy"}
            href="/work/brand"
          />
          <WorkAreaCard
            title={"Ecommerce & \nMarketplaces"}
            href="/work/ecommerce"
          />
          <WorkAreaCard title={"Digital product \n& Web"} href="/work/product" />
          <WorkAreaCard
            title={"Social Media\n& Content\nMarketing"}
            href="/work/social-media-content"
          />
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center leading-snug text-sm text-[var(--primary)]/80">
  <p>Every project I lead is grounded in insights.</p>
  <p className="mt-0.5">
    From strategic decisions to creative executions, data plays a central role:
    guiding, validating and optimizing each outcome.
  </p>
</div>
      </Section>

{/* CONNECT (BLANCO) */}
<Section className="bg-white py-14">
  <h3
    className="font-display text-5xl text-[var(--primary)]"
    id="connect"
  >
    Let’s connect!
  </h3>

  <div className="relative mt-8 grid gap-8 rounded-3xl bg-[var(--primary)] p-8 text-[var(--cream)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:grid-cols-2 md:items-center">
    {/* MAP */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/map.png"
          alt="Location"
          fill
          className="object-cover"
        />
      </div>

    {/* TEXT + CTA */}
    {/* TEXT + CTA */}
<div className="flex flex-col items-center text-center">
  {/* Text */}
  <div className="max-w-[280px] text-sm leading-snug text-white/90 text-justify">
    <p>
      Let’s explore ways to work together.
    </p>
    <p className="mt-1">
      I’m flexible with work styles and always happy to adapt to what the
      project needs.
    </p>
  </div>

  {/* CTA */}
  <div className="mt-6">
    <Button href="mailto:lou.samper@gmail.com" variant="light">
      send me an email
    </Button>
  </div>

  {/* LinkedIn */}
  <div className="mt-4">
    <a
      className="text-sm font-sans font-semibold underline text-white/90"
      href="https://www.linkedin.com/in/ludmila-samper/"
      target="_blank"
      rel="noreferrer"
    >
      &amp; would love to connect on linkedin.
    </a>
  </div>

  {/* FLOURISH */}
  <div className="mt-8 flex justify-center">
    <Image
      src="/flourish-top-left.png"
      alt=""
      width={600}
      height={300}
      className="h-auto w-[160px] opacity-90"
    />
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