import { Button } from "./Button";

export function WorkAreaCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div
      className="
        mx-auto w-full max-w-[300px] md:max-w-none
        rounded-3xl
        bg-[var(--primary)]
        text-[var(--cream)]
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        flex flex-col items-center justify-between text-center
        p-6 md:p-8
        min-h-[200px] md:min-h-[240px]
      "
    >
      <h3 className="font-display whitespace-pre-line leading-tight text-2xl md:text-2xl">
        {title}
      </h3>

      <div className="mt-6 md:mt-8">
        <Button href={href} variant="light">
          view work
        </Button>
      </div>
    </div>
  );
}