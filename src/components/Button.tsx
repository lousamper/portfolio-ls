import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
};

export function Button({ href, children, variant = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold font-display transition",
        "focus:outline-none focus:ring-2 focus:ring-black/10",
        variant === "primary" &&
          "bg-[var(--primary)] text-[var(--cream)] hover:opacity-90",
        variant === "light" &&
  "bg-[var(--cream)] text-[var(--primary)] ring-1 ring-black/10 hover:bg-white px-6 py-2.5",
        variant === "ghost" &&
          "text-[var(--primary)] hover:bg-black/5"
      )}
    >
      {children}
    </Link>
  );
}