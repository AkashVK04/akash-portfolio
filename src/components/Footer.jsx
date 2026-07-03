import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="font-display text-sm font-semibold text-ink">
          Akash<span className="text-accent">.</span>
        </p>
        <p className="font-mono text-xs text-slate-light">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
