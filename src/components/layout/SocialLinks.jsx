import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";
import IconButton from "../ui/IconButton";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram };

const SocialLinks = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {socialLinks.map(({ label, href, icon }) => {
      const Icon = iconMap[icon];
      return (
        <IconButton
          key={label}
          as="a"
          href={href}
          target="_blank"
          rel="noreferrer"
          label={label}
          className="group relative"
        >
          {Icon && <Icon size={16} strokeWidth={1.75} />}
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg-elevated px-2 py-1 text-[11px] text-ink-secondary opacity-0 shadow-soft transition-opacity duration-150 group-hover:opacity-100">
            {label}
          </span>
        </IconButton>
      );
    })}
  </div>
);

export default SocialLinks;
