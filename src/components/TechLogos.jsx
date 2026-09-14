import React from 'react'

// SVG Tech Brand Logo Mapping for crisp rendering across Tools & Projects
export function TechLogo({ name, className = 'w-4 h-4' }) {
  const normalized = name.toLowerCase()

  if (normalized.includes('java 21') || normalized === 'java') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        className={className}
      />
    )
  }

  if (normalized.includes('react')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className={className}
      />
    )
  }

  if (normalized.includes('python')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className={className}
      />
    )
  }

  if (normalized.includes('spring')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        alt="Spring Boot"
        className={className}
      />
    )
  }

  if (normalized.includes('postgres')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        className={className}
      />
    )
  }

  if (normalized.includes('docker')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
        className={className}
      />
    )
  }

  if (normalized.includes('git')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
        className={className}
      />
    )
  }

  if (normalized.includes('typescript')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className={className}
      />
    )
  }

  if (normalized.includes('tailwind')) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind CSS"
        className={className}
      />
    )
  }

  if (normalized.includes('groq') || normalized.includes('ai')) {
    return (
      <span className="text-[#A11D33] font-bold text-xs">🤖</span>
    )
  }

  if (normalized.includes('esp32') || normalized.includes('iot')) {
    return (
      <span className="text-[#A11D33] font-bold text-xs">⚡</span>
    )
  }

  return <span className="text-[#A11D33] font-mono text-[10px]">#</span>
}
