export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-foreground mb-2">
          Route & Rate
        </p>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Route & Rate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
