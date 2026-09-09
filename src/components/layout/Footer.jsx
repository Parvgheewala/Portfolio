import Container from "../ui/Container";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="text-sm font-medium text-ink">Parv Gheewala</p>
        <p className="mt-0.5 font-mono text-xs text-ink-muted">
          Backend Engineer · Distributed Systems · AI Infrastructure
        </p>
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          &copy; {new Date().getFullYear()} · Built with React &amp; Vite
        </p>
      </div>
      <SocialLinks />
    </Container>
  </footer>
);

export default Footer;
