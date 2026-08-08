import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Stavya Srinath",
  description: "The page you're looking for doesn't exist.",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 pt-16 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="font-mono text-8xl font-semibold text-primary/20 mb-4">404</div>
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
              <Home className="h-4 w-4" aria-hidden="true" />
              Go home
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-lg border border-white/10 dark:border-white/10 px-6 py-3 text-sm font-medium transition-all hover:bg-accent">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Browse projects
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}