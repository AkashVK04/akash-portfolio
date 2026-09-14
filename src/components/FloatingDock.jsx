import { useEffect, useState } from 'react'
import {
  Home,
  User,
  Layout,
  FolderOpen,
  Cpu,
  Code2,
  GraduationCap,
  Mail,
} from 'lucide-react'
import { Dock, DockIcon, DockItem } from './core/dock'

const dockItems = [
  { id: 'home', label: 'Intro', href: '#home', icon: Home },
  { id: 'about', label: 'Background', href: '#about', icon: User },
  { id: 'what-i-do', label: 'Services', href: '#what-i-do', icon: Layout },
  { id: 'projects', label: 'Work', href: '#projects', icon: FolderOpen },
  { id: 'engineering', label: 'Engineering', href: '#engineering', icon: Cpu },
  { id: 'skills', label: 'Toolkit', href: '#skills', icon: Code2 },
  { id: 'education', label: 'Education', href: '#education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
]

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionElements = dockItems
      .map((item) => document.getElementById(item.id))
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
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    )

    sectionElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <aside aria-label="Floating Navigation Dock" className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto">
      <Dock magnification={56} distance={120}>
        {dockItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <DockItem
              key={item.id}
              href={item.href}
              label={item.label}
              active={isActive}
            >
              <DockIcon>
                <Icon size={18} />
              </DockIcon>
            </DockItem>
          )
        })}
      </Dock>
    </aside>
  )
}
