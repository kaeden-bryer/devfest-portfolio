// ============================================
// ALTERNATIVE VERSION 3: GLASS MORPHISM
// ============================================
/**
 * Footer - Glass Morphism Version
 *
 * Modern glassmorphism design with backdrop blur
 */

export const FooterGlass = ({ currentYear, name, socialLinks }) => {
  return (
    <footer className="relative bg-linear-to-br from-(--color-surface) via-(--color-surface-highlight) to-(--color-surface)">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-(--color-surface)/30 rounded-3xl shadow-2xl border border-(--color-border)/50 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Name & Tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-(--color-text-primary) mb-1">
                {name}
              </h3>
              <p className="text-(--color-text-secondary)">
                Let's build something amazing together
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 backdrop-blur-md bg-(--color-surface)/40 hover:bg-(--color-surface)/60 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-(--color-border)/50"
                  aria-label={link.name}
                  title={link.name}
                >
                  <div className="text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors">
                    {link.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-(--color-text-primary) text-(--color-text-inverse) text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-(--color-border) to-transparent my-6"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--color-text-secondary)">
            <p>
              © {currentYear} {name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <span className="text-(--color-accent)">❤️</span> using{" "}
              <span className="font-semibold text-(--color-primary)">
                React
              </span>{" "}
              &{" "}
              <span className="font-semibold text-(--color-secondary)">
                Tailwind
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
