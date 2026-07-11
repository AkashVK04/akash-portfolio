import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Loader2, Mail, Send, TriangleAlert } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile, contactConfig } from '../data'

// 'idle' | 'sending' | 'success' | 'error'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // No Formspree ID configured yet -> fall back to opening the visitor's email app.
    if (!contactConfig.formspreeId) {
      sendViaMailto()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${contactConfig.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          command="send message"
          title="Get in Touch"
          description="Have a role, project, or idea in mind? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href={`mailto:${profile.email}`}
              className="card card-hover flex items-center gap-3 p-4"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-accent-soft text-accent-bright">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-mono text-[11px] text-slate-light">Email</p>
                <p className="text-sm text-ink">{profile.email}</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover flex items-center gap-3 p-4"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-accent-soft text-accent-bright">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="font-mono text-[11px] text-slate-light">LinkedIn</p>
                <p className="text-sm text-ink">/in/akashvk</p>
              </div>
            </motion.a>

            {profile.github && (
              <motion.a
                whileHover={{ y: -3 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center gap-3 p-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-accent-soft text-accent-bright">
                  <Github size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-slate-light">GitHub</p>
                  <p className="text-sm text-ink">View profile</p>
                </div>
              </motion.a>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card flex flex-col gap-4 p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] text-slate-light">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-border bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-light transition-colors focus:border-accent/60 focus:bg-white/[0.03] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] text-slate-light">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-light transition-colors focus:border-accent/60 focus:bg-white/[0.03] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] text-slate-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project..."
                className="w-full resize-none rounded-md border border-border bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-light transition-colors focus:border-accent/60 focus:bg-white/[0.03] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary self-start disabled:opacity-60">
                {status === 'sending' ? (
                  <>
                    Sending
                    <Loader2 size={15} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-1.5 text-sm text-emerald-400">
                  <CheckCircle2 size={15} />
                  Message sent — thanks for reaching out!
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-1.5 text-sm text-amber-400">
                  <TriangleAlert size={15} />
                  Something went wrong — please email me directly instead.
                </p>
              )}
            </div>

            {!contactConfig.formspreeId && (
              <p className="font-mono text-[11px] text-slate-light">
                Note: direct email delivery isn't configured yet — this currently opens your
                email app instead. See README for setup.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
