"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

type Tile = {
  src: string;
  type: "image" | "video";
  ratio: "story" | "portrait";
  alt?: string;
};

const columns: Tile[][] = [
  // COLUMNA 1
  [
    { src: "/social/v1.mp4", type: "video", ratio: "story", alt: "Video 1" },     // Fila 1 Col 1
    { src: "/social/4.png", type: "image", ratio: "portrait", alt: "Asset 4" },  // Fila 2 Col 1 (3:4)
    { src: "/social/7.png", type: "image", ratio: "story", alt: "Asset 7" },     // Fila 3 Col 1
  ],

  // COLUMNA 2
  [
    { src: "/social/2.png", type: "image", ratio: "story", alt: "Asset 2" },     // Fila 1 Col 2
    { src: "/social/5.png", type: "image", ratio: "story", alt: "Asset 5" },     // Fila 2 Col 2
    { src: "/social/v3.mp4", type: "video", ratio: "story", alt: "Video 3" },    // Fila 3 Col 2
  ],

  // COLUMNA 3
  [
    { src: "/social/8.png", type: "image", ratio: "story", alt: "Asset 8" },    // Fila 1 Col 3
    { src: "/social/6.png", type: "image", ratio: "portrait", alt: "Asset 6" },  // Fila 2 Col 3 (3:4)
    { src: "/social/v2.mp4", type: "video", ratio: "story", alt: "Video 2" },    // Fila 3 Col 3
  ],
];

function ClickToPlayVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    const v = ref.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="relative overflow-hidden bg-black/5" style={{ aspectRatio: "16 / 9" }}>
      <video
        ref={ref}
        src={src}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        // ayuda a evitar PiP y algunas opciones (no es 100% bloqueable)
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
      />

      {/* Overlay clickable */}
      <button
        type="button"
        onClick={toggle}
        className="absolute inset-0 grid place-items-center"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {!isPlaying && (
          <span className="grid h-14 w-14 place-items-center rounded-full bg-black/40">
            <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white/90" />
          </span>
        )}
      </button>
    </div>
  );
}

export default function SocialMediaWorkPage() {
  return (
    <main>
      {/* HERO (CREMITA) */}
      <Section className="bg-[var(--cream)] py-12 md:py-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="relative aspect-[16/7] md:aspect-[16/6]">
              <Image
                src="/hero-2.png"
                alt="Social Media & Content Marketing"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* HELLO + ASSETS (BLANCO) */}
      {/* HELLO + ASSETS (BLANCO) */}
<Section className="bg-white py-12">
  {/* más ancho y menos padding para que hello quede más a la izquierda */}
  <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
    <div className="grid gap-10 md:grid-cols-[420px_1fr] md:items-start">
      {/* LEFT: hello + texto */}
      <div className="flex min-h-[420px] md:min-h-[640px] flex-col">
        {/* hello pegado a la izquierda */}
        <div className="relative -ml-9 md:-ml-10 w-[190px] md:w-[240px]">
          <div className="relative aspect-[3/1]">
            <Image src="/hello.png" alt="Hello" fill className="object-contain" />
          </div>
        </div>

        {/* texto justificado con ancho tipo Canva */}
        <div className="mt-5 max-w-[360px] text-justify text-sm leading-snug text-[var(--ink)]/80">
          <p>
            I help brands build and scale social media platforms that connect
            with audiences and contribute directly to growth.
          </p>

          <p className="mt-5">
            Combining creative strategy, content execution, influencer marketing
            and performance insights I ensure every initiative aligns with
            business goals and brand positioning.
          </p>

          <p className="mt-5">
            With a strong sense of aesthetic and tone of voice, I manage
            end-to-end strategy: including content planning, creator
            partnerships, hands on creation and performance analysis.
          </p>
        </div>

        {/* esto empuja el "scroll for..." al fondo del bloque*/}
<div className="mt-auto pt-14 hidden md:block">
  <div className="max-w-[360px]">
    <p className="text-center text-xs font-display font-bold tracking-wide text-[var(--ink)]">
      scroll for selected work
    </p>

    <div className="mt-2 flex justify-center">
      <Image
        src="/arrow-down.gif"
        alt=""
        width={34}
        height={34}
        className="h-auto w-[20px]"
      />
    </div>
  </div>
</div>
      </div>

      {/* RIGHT: assets collage con “ventana” (corte arriba/abajo) */}
      <div className="relative">
        <div className="relative h-[520px] md:h-[670px] overflow-hidden rounded-[20x]">
  {/* SUBE TODO el collage */}
  <div className="-mt-12 md:-mt-16">
    {/* COLLAGE: 3 columnas fijas (orden exacto) + offset tipo Pinterest */}
    <div className="grid grid-cols-3 gap-4 md:gap-5">
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          className={[
            "flex flex-col gap-4 md:gap-5",
            colIndex === 1 ? "-mt-8 md:-mt-10" : "", // columna del medio aún más arriba
          ].join(" ")}
        >
          {col.map((t, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-[32px] bg-black/5"
              style={{
                aspectRatio: t.ratio === "portrait" ? "3 / 4" : "9 / 16",
              }}
            >
              {t.type === "video" ? (
                <video
                  src={t.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={t.src}
                  alt={t.alt ?? "Social asset"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>

          {/* fades arriba/abajo para que el corte se vea como Canva */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  </div>
</Section>

      {/* CASE: RIMMEL (BLANCO) */}
<Section className="bg-white py-12">
  <div className="grid gap-10 md:grid-cols-2 md:items-start">
    {/* LEFT: TEXT */}
    <div>
      <h2 className="font-display text-3xl">Project: Rimmel London</h2>
      <p className="mt-2 text-xs text-[var(--muted)]">
        2016–2018 | Brand &amp; PR Manager | Argentina
      </p>

      {/* intro text (justificado) */}
      <div className="mt-8 max-w-[380px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Designed and executed the full brand and digital marketing strategy,
          including social media, influencer marketing and PR activations.
        </p>
        <p className="mt-4">
          Managed always-on budgets + additional investment bursts for major
          product launches.
        </p>
      </div>

      {/* bullets con flor */}
      <ul className="mt-10 space-y-8 pl-12 md:pl-16 text-sm leading-snug text-[var(--muted)]">
  {[
    "Achieved sustained exponential growth while meeting profit targets.",
    "Grew the brand’s Instagram presence from 15K to 200K followers.",
    "Strengthened the brand’s online and social presence, becoming a benchmark beauty brand in the LATAM market.",
  ].map((text, idx) => (
    <li key={idx} className="flex items-start gap-4">
      <Image
        src="/flor-bullet.png"
        alt=""
        width={28}
        height={28}
        className="mt-0.5 h-[28px] w-[28px] shrink-0 object-contain"
      />
      <p className="max-w-[270px] text-justify">{text}</p>
    </li>
  ))}
</ul>
    </div>

    {/* RIGHT: VIDEO + GRID */}
    <div className="rounded-3xl bg-white p-0">
      {/* Video 16:9 - click to play, con audio */}
      {/* Video 16:9 */}
<div className="mx-auto max-w-[340px]">
  <div
    className="relative overflow-hidden bg-black/5"
    style={{ aspectRatio: "16 / 9" }}
  >
    <ClickToPlayVideo src="/rimmel/hero.mp4" />
  </div>
</div>

      {/* Grid 3x2 (6 imágenes 1:1) */}
      <div className="mt-4 mx-auto max-w-[420px] grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden bg-black/5"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={`/rimmel/${i + 1}.jpg`}
              alt={`Rimmel ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-[var(--muted)]">
        in-house content production (coordinating photographers and models) + UGC
      </p>
    </div>
  </div>
</Section>

       
       {/* CASE: RIMMEL — INFLUENCERS (BLANCO) */}
<Section className="bg-white py-12">
  <div className="grid gap-10 md:grid-cols-2 md:items-start">
    {/* LEFT: TEXT */}
    <div>
      <h2 className="font-display text-3xl">Project: Rimmel London</h2>
      <p className="mt-2 text-xs text-[var(--muted)]">
        2015–2018 | Brand &amp; PR Manager | Argentina
      </p>

      <div className="mt-8 max-w-[380px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Built and scaled the brand’s influencer marketing program from the
          ground up, leading collaborations with micro to macro creators and
          positioning Rimmel as one of the most visible beauty brands in the
          market.
        </p>

        <p className="mt-5">
          Led high-impact influencer events, press activations and beauty
          experiences, both locally and internationally.
        </p>

        <p className="mt-6 italic">
          Rimmel became one of the first beauty brands in Argentina to activate
          influencer marketing at scale, with events and collaborations that
          consistently drove high reach, cultural relevance and brand desire.
        </p>
      </div>
    </div>

    {/* RIGHT: IMAGE + CAPTION */}
<div className="flex flex-col items-center">
  {/* IMAGE */}
  <div className="relative w-full max-w-[520px]">
    {/* ratio tipo Canva: más ancho que alto */}
    <div className="relative aspect-[5/4] overflow-hidden">
      <Image
        src="/rimmel-influencer.png"
        alt="Rimmel influencer marketing work"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* CAPTION – siempre debajo */}
  <p className="mt-4 max-w-[520px] text-center text-xs text-[var(--muted)]">
    Content generated during events was repurposed across organic and paid social.
  </p>
</div>
  </div>


</Section>

{/* CASE: GIRLS COLLECTIVE (BLANCO) */}
<Section className="bg-white py-12">
  <div className="grid gap-10 md:grid-cols-2 md:items-start">
    {/* LEFT: TEXT */}
    <div>
      <h2 className="font-display text-3xl">Project: Girls Collective</h2>
      <p className="mt-2 text-xs text-[var(--muted)]">
        2025–2026 | Founder · Spain &amp; Latam
      </p>

      <div className="mt-8 max-w-[380px] text-justify text-sm leading-snug text-[var(--muted)]">
        <p>
          Founded a city-based social discovery platform designed to help women
          connect through shared interests and real-life experiences.
        </p>
        <p className="mt-4">
          Built the platform end-to-end, creating all content and designing the
          website independently.
        </p>
      </div>

      {/* bullets con flor (a la derecha un poquito como Canva) */}
      <ul className="mt-10 max-w-[380px] space-y-8 pl-12 md:pl-16 text-sm leading-snug text-[var(--muted)]">
        {[
          "Grew the web platform to 500+ users organically in under 2 months.",
          "After testing multiple channels, identified Threads as the strongest early acquisition channel and leveraged conversation-led content to drive the majority of traffic.",
        ].map((text, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <Image
              src="/flor-bullet.png"
              alt=""
              width={28}
              height={28}
              className="mt-0.5 h-[28px] w-[28px] shrink-0 object-contain"
            />
            <p className="max-w-[420px] text-justify">{text}</p>
          </li>
        ))}
      </ul>

      {/* links / icons */}
      <div className="mt-10 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
        <span className="font-sans font-semibold text-[var(--ink)]">
          View live platform &amp; channels:
        </span>

        <div className="flex items-center gap-3">
          {[
            { href: "https://girls-collective.com", icon: "/icons/globe.png", label: "Website" },
            { href: "https://www.tiktok.com/@valenciagirlscollective", icon: "/icons/tiktok.png", label: "TikTok" },
            { href: "https://www.tiktok.com/@girls_collective", icon: "/icons/tiktok.png", label: "TikTok2" },
            { href: "https://www.instagram.com/girls_collective", icon: "/icons/instagram.png", label: "Instagram" },
            { href: "https://www.threads.com/@girls_collective", icon: "/icons/threads.png", label: "Threads" },
            { href: "https://www.linkedin.com/company/citygirlscollective/", icon: "/icons/linkedin.png", label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group"
              aria-label={s.label}
              title={s.label}
            >
              <span className="grid h-6 w-6 place-items-center rounded-full text-white transition group-hover:opacity-90">
                {/* icono dentro (aunque el png sea cuadrado, lo hacemos circular con overflow) */}
                <span className="relative h-5 w-5 overflow-hidden rounded-full">
                  <Image
                    src={s.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* RIGHT: IMAGE + (caption) */}
    <div className="flex flex-col items-center md:items-end">
      <div className="relative w-full max-w-[520px]">
        <div className="relative aspect-[11/12] overflow-hidden">
          <Image
            src="/gc/gc-right.png"
            alt="Girls Collective visuals"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</Section>

{/* WHAT I BRING (CREMITA) */}
<Section className="bg-[var(--cream)] py-14">
  <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
    {/* Title a la izquierda */}
    <h3 className="font-display text-3xl text-[var(--ink)]">
      What I bring:
    </h3>

    {/* Bullets con flor */}
    <ul className="mt-8 space-y-8 text-sm leading-snug text-[var(--muted)]">
      {[
        "Beauty & FMCG industry expertise",
        "Experience scaling and launching platforms from zero",
        "Strong aesthetic sensibility and brand voice awareness",
        "Hands-on content creation paired with performance insight",
        "Ownership, autonomy and growth mindset",
      ].map((text, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <Image
            src="/flor-bullet.png"
            alt=""
            width={26}
            height={26}
            className="mt-[2px] h-[26px] w-[26px] shrink-0 object-contain"
          />
          <p className="pt-[6px] max-w-[520px]">{text}</p>
        </li>
      ))}
    </ul>

    {/* CTA centrado */}
    <div className="mt-12 text-center">
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