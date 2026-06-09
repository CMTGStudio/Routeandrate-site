export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xl font-bold text-primary tracking-tight">
            Route & Rate
          </span>
          <a
            href="mailto:adam@routeandrate.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-footer-email"
          >
            adam@routeandrate.com
          </a>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Route & Rate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
