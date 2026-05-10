import { contactValues, footerValues } from "../constants/constants";
import { siteDetails } from "../lib/site";

export default function Footer() {
  return (
    <footer
      className="relative mt-12 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container-page py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-soft">
          © {new Date().getFullYear()} {siteDetails.name}. {footerValues.rightsReserved}
        </p>
        <div className="flex gap-5 text-xs text-muted">
          <a
            className="transition hover:text-[color:var(--accent)]"
            href={`mailto:${siteDetails.email}`}
          >
            {contactValues.email}
          </a>
          <a
            className="transition hover:text-[color:var(--accent)]"
            target="_blank"
            rel="noreferrer"
            href={siteDetails.linkedin}
          >
            {contactValues.linkedIn}
          </a>
          <a
            className="transition hover:text-[color:var(--accent)]"
            target="_blank"
            rel="noreferrer"
            href={siteDetails.gitHub}
          >
            {contactValues.gitHub}
          </a>
        </div>
      </div>
    </footer>
  );
}
