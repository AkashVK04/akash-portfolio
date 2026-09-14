import { useEffect, useState } from 'react'
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sectionElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex flex-row items-center justify-between max-w-content px-6 sm:px-8 gap-6">
        {/* Left Branding Logo */}
        <a
          href="#home"
          className="group flex flex-row items-center gap-2 text-sm font-medium tracking-wide uppercase text-[#E0E0E0] transition-all duration-300 hover:text-[#A11D33] cursor-pointer"
        >
          <span className="font-extrabold text-[#A11D33]">CREATIVE PORTFOLIO</span>
          <span className="text-white/40">//</span>
          <span className="font-semibold">{profile.name}</span>
        </a>

        {/* Desktop Chapter Navigation - Strict Baseline Flex Alignment */}
        <ul className="hidden lg:flex flex-row items-center justify-between gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id} className="flex items-center">
                <a
                  href={link.href}
                  className={`group relative flex flex-row items-center text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-[#A11D33] font-extrabold' : 'text-[#E0E0E0] hover:text-[#A11D33]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#A11D33] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right Freelance / Availability Status Indicator & Action CTA */}
        <div className="hidden lg:flex flex-row items-center gap-4">
          <div className="inline-flex flex-row items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E0E0E0] bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <span className="h-2 w-2 rounded-full bg-[#A11D33] animate-pulse" />
          </div>

          <a
            href="#contact"
            className="btn-primary !py-1.5 !px-4 text-xs font-mono tracking-wide group !rounded-full !bg-[#A11D33] hover:!bg-[#C51D38] transition-all duration-300 cursor-pointer flex flex-row items-center gap-1"
          >
            <span>Collaborate</span>
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          type="button"
          aria-label={open ? 'Close main navigation menu' : 'Open main navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-[#E0E0E0] lg:hidden hover:border-[#A11D33] hover:text-[#A11D33] focus:outline-none transition-all duration-300 cursor-pointer"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="glass-nav border-t border-white/10 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="mx-auto flex max-w-content flex-col gap-1.5 px-6 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex flex-row items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#A11D33]/20 text-[#A11D33] border border-[#A11D33]/40 font-bold'
                        : 'text-[#E0E0E0] hover:bg-white/[0.04] hover:text-[#A11D33]'
                    }`}
                  >
                    <span className="text-[#A11D33] font-bold">{link.number}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              )}
            )}

            <li className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-secondary w-full justify-center text-xs font-mono !rounded-full transition-all duration-300 cursor-pointer flex flex-row items-center gap-2"
                >
                  <FileText size={15} />
                  Download Resume
                </a>
              )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-xs font-mono !rounded-full !bg-[#A11D33] transition-all duration-300 cursor-pointer flex flex-row items-center gap-1.5"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
