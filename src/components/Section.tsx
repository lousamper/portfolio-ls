import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={className} {...props}>
      <Container>{children}</Container>
    </section>
  );
}