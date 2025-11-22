// VERSION 1: SIMPLE FOOTER
// TODO: Add ids to different sections to complete this
// Quick navigation links (optional)
// TODO: build the quick links in a function to add if the user wants it
const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const FooterSimple = ({ currentYear, name, socialLinks }) => {
  return (
    <footer className="bg-linear-to-br from-(--color-surface) via-(--color-surface-highlight) to-(--color-surface) text-(--color-text-primary)">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-(--color-text-primary) mb-2">
              {name}
            </h3>
            <p className="text-(--color-text-secondary) text-sm">
              {/* TODO: Make this a tagline in the data */}
              Building amazing digital experiences
            </p>
          </div>

          {/* TODO: Dynamically build this */}
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-(--color-text-secondary) uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-(--color-text-secondary) hover:text-(--color-primary) transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-(--color-text-secondary) uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-(--color-surface-highlight) hover:bg-linear-to-br hover:from-(--color-primary) hover:to-(--color-secondary) rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-(--color-text-primary) hover:text-(--color-text-inverse)"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[3px] border-(--color-primary) my-4"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-(--color-primary)">
            © {currentYear} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
            <span>Built with</span>
            <span className="text-(--color-accent) animate-pulse">❤️</span>
            <span>using</span>
            <span className="text-(--color-primary) font-semibold">React</span>
            <span>&</span>
            <span className="text-(--color-secondary) font-semibold">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
