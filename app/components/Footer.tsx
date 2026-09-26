import { siteDetails } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-soft">
      <p className="container-page py-8 text-sm text-muted">
        © {new Date().getFullYear()} {siteDetails.name}.
      </p>
    </footer>
  );
}
