"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Menu, FileText, GitBranch, User } from "lucide-react";
import { profile } from "@/content/profile";

const navItems = [
  { label: "Work", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const github = profile.links.find((l) => l.type === "github");
const linkedin = profile.links.find((l) => l.type === "linkedin");

export function SiteHeader() {
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-heading text-xl font-semibold tracking-tight" aria-label="Stavya Srinath - Home">
            STAVYA
          </Link>

          <div className="hidden md:flex md:items-center md:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                aria-label="GitHub"
              >
                <GitBranch className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                aria-label="LinkedIn"
              >
                <User className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Résumé
            </Link>

            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <nav className="flex h-full flex-col p-6" aria-label="Mobile navigation">
                  <div className="mb-6">
                    <Link href="/" className="font-heading text-xl font-semibold tracking-tight">
                      STAVYA
                    </Link>
                  </div>
                  <ul className="flex-1 space-y-4" role="list">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-6" />
                  <div className="flex flex-col gap-3">
                    {github && (
                      <a
                        href={github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <GitBranch className="h-5 w-5" aria-hidden="true" />
                        GitHub
                      </a>
                    )}
                    {linkedin && (
                      <a
                        href={linkedin.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <User className="h-5 w-5" aria-hidden="true" />
                        LinkedIn
                      </a>
                    )}
                    <Link
                      href="/resume"
                      className="flex items-center gap-3 text-sm font-medium text-primary hover:text-primary/80"
                    >
                      <FileText className="h-5 w-5" aria-hidden="true" />
                      Résumé
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}