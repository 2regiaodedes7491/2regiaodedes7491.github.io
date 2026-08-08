import Link from "next/link";
import { GitBranch, User, Mail, ArrowUp, FileText } from "lucide-react";
import { profile } from "@/content/profile";

const github = profile.links.find((l) => l.type === "github");
const linkedin = profile.links.find((l) => l.type === "linkedin");

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl font-semibold tracking-tight mb-4">STAVYA SRINATH</p>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">{profile.thesis}</p>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-3" role="list">
              {github && (
                <li>
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitBranch className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              )}
              {linkedin && (
                <li>
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Résumé
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-3" role="list">
              <li>
                <Link href="/experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stavya Srinath. Built with Next.js, Tailwind, and Motion.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}