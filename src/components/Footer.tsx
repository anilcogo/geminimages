const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Geminimages. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
