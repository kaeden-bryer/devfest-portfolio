// ============================================
// ALTERNATIVE VERSION 2: BOLD & COLORFUL
// ============================================
/**
 * Footer - Bold & Colorful Version
 *
 * Eye-catching design with gradient backgrounds and animations
 */

export const FooterBold = ({ currentYear, name, socialLinks }) => {
  return (
    <footer className="relative bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-accent) text-(--color-text-inverse) overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-(--color-surface) rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-(--color-surface-highlight) rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-(--color-surface) rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-(--color-text-inverse) to-(--color-surface-highlight)">
            Let's Connect!
          </h3>
          <p className="text-(--color-text-inverse)/80">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group px-6 py-3 bg-linear-to-r from-(--color-surface) to-(--color-surface-highlight) text-(--color-primary) rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
              aria-label={link.name}
            >
              <div className="flex items-center gap-2">{link.icon}</div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-6"></div>

        {/* Bottom Info */}
        <div className="text-center space-y-2">
          <p className="text-(--color-text-inverse)/80 text-sm">
            © {currentYear} {name}. Crafted with passion and code
          </p>
          <p className="text-(--color-text-inverse)/60 text-xs">
            Powered by React ⚛️ & Tailwind CSS 🎨
          </p>
        </div>
      </div>
    </footer>
  );
};
