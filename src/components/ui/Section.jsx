import Container from "./Container";
import { cn } from "../../lib/utils";

const Section = ({ id, className, containerClassName, children }) => (
  <section id={id} className={cn("py-section-sm md:py-section scroll-mt-24", className)}>
    <Container className={containerClassName}>{children}</Container>
  </section>
);

export default Section;
