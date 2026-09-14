import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, FileText, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from 'lucide-react'
import { profile, contactConfig } from '../data'

// Clean SVG QR Code Component for LinkedIn & GitHub links
function QRCodeSVG({ label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="editorial-card p-4 flex flex-col items-center justify-center text-center group hover:border-[#A11D33] transition-all bg-[#181818]"
    >
      <div className="w-28 h-28 bg-white p-2 rounded-xl border border-white/20 shadow-md flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
        {/* Crisp QR Pattern SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
          {/* Outer Position Markers */}
          <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke="black" strokeWidth="6" />
          <rect x="12" y="12" width="16" height="16" rx="2" fill="black" />
          
          <rect x="65" y="5" width="30" height="30" rx="4" fill="none" stroke="black" strokeWidth="6" />
          <rect x="72" y="12" width="16" height="16" rx="2" fill="black" />

          <rect x="5" y="65" width="30" height="30" rx="4" fill="none" stroke="black" strokeWidth="6" />
          <rect x="12" y="72" width="16" height="16" rx="2" fill="black" />

          {/* Random QR Data Matrix Bits */}
          <rect x="42" y="8" width="6" height="6" />
          <rect x="52" y="8" width="6" height="6" />
          <rect x="42" y="18" width="6" height="6" />
          <rect x="52" y="28" width="6" height="6" />
          <rect x="10" y="42" width="6" height="6" />
          <rect x="22" y="42" width="6" height="6" />
          <rect x="32" y="42" width="6" height="6" />
          <rect x="42" y="42" width="16" height="16" fill="#A11D33" rx="2" />
          <rect x="65" y="42" width="6" height="6" />
          <rect x="78" y="42" width="6" height="6" />
          <rect x="65" y="55" width="6" height="6" />
          <rect x="85" y="55" width="6" height="6" />
          <rect x="42" y="65" width="6" height="6" />
          <rect x="52" y="75" width="6" height="6" />
          <rect x="42" y="85" width="6" height="6" />
          <rect x="65" y="78" width="6" height="6" />
          <rect x="78" y="78" width="6" height="6" />
          <rect x="85" y="88" width="6" height="6" />
        </svg>
      </div>
      <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest mt-2.5 group-hover:text-[#A11D33] transition-colors">
        {label}
      </span>
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || contactConfig.web3formsAccessKey
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || contactConfig.formspreeId

    try {
      let res
      let data

      if (web3Key) {
        // 1. Submit via Web3Forms API
        res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: form.name,
            email: form.email,
            subject: form.subject || `Portfolio Inquiry from ${form.name}`,
            message: form.message,
            from_name: 'Akash Portfolio Contact Form',
          }),
        })
        data = await res.json()
      } else if (formspreeId) {
        // 2. Submit via Formspree API
        res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || `Portfolio Inquiry from ${form.name}`,
            message: form.message,
          }),
        })
        data = await res.json()
      } else {
        // 3. Web3Forms submission with default/public key fallback
        res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: '20f269a8-e160-4966-9ef0-e0477e38ae2c', // Default key placeholder / Web3Forms
            name: form.name,
            email: form.email,
            subject: form.subject || `Portfolio Inquiry from ${form.name}`,
            message: form.message,
            from_name: 'Akash Portfolio Contact Form',
          }),
        })
        data = await res.json()
      }

      if (res && res.ok && data.success !== false) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data?.message || 'Unable to deliver message via form service.')
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setStatus('error')
      setErrorMessage('Network error occurred. Please check your connection or try emailing directly.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10 overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          {/* 1. LET'S COLLABORATE Column matching image_0.png */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                LET'S COLLABORATE
              </h2>
              <div className="h-1 w-12 bg-[#A11D33] mt-2 rounded-full" />
            </div>

            <p className="text-xs sm:text-sm text-slate leading-relaxed">
              Have a project in mind or want to explore software engineering opportunities? I'd love to hear from you.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 font-mono text-xs text-white">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10">
                <Mail size={16} className="text-[#A11D33]" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#A11D33] transition-colors">
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10">
                <MapPin size={16} className="text-[#A11D33]" />
                <span>{profile.location}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10">
                <Github size={16} className="text-[#A11D33]" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#A11D33] transition-colors">
                  github.com/AkashVK04
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. SCAN TO CONNECT Column matching image_0.png */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                SCAN TO CONNECT
              </h2>
              <div className="h-1 w-12 bg-[#A11D33] mt-2 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <QRCodeSVG label="LINKEDIN" link={profile.linkedin} />
              <QRCodeSVG label="GITHUB PROFILE" link={profile.github} />
            </div>
          </motion.div>

          {/* 3. SLOGAN & FORM Column matching image_0.png */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="editorial-card p-6 space-y-4 border-[#A11D33]/40 bg-[#181818]"
          >
            <div className="text-right border-b border-white/10 pb-3">
              <p className="font-display text-xl sm:text-2xl font-extrabold text-white uppercase tracking-widest leading-tight">
                BUILDING SYSTEMS. <br />
                <span className="text-[#A11D33]">CREATING IMPACT.</span>
              </p>
            </div>

            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-[11px] font-bold text-slate uppercase">
                YOUR NAME <span className="text-[#A11D33]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === 'sending'}
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full rounded-lg border border-white/10 bg-[#121212] px-3.5 py-2.5 text-xs text-white placeholder:text-slate transition-all focus:border-[#A11D33] focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-[11px] font-bold text-slate uppercase">
                YOUR EMAIL <span className="text-[#A11D33]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === 'sending'}
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/10 bg-[#121212] px-3.5 py-2.5 text-xs text-white placeholder:text-slate transition-all focus:border-[#A11D33] focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-1 block font-mono text-[11px] font-bold text-slate uppercase">
                SUBJECT
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                disabled={status === 'sending'}
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full rounded-lg border border-white/10 bg-[#121212] px-3.5 py-2.5 text-xs text-white placeholder:text-slate transition-all focus:border-[#A11D33] focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-[11px] font-bold text-slate uppercase">
                MESSAGE <span className="text-[#A11D33]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                disabled={status === 'sending'}
                value={form.message}
                onChange={handleChange}
                placeholder="Share project or role details..."
                className="w-full resize-none rounded-lg border border-white/10 bg-[#121212] px-3.5 py-2.5 text-xs text-white placeholder:text-slate transition-all focus:border-[#A11D33] focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* Success Alert Banner */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center gap-2"
              >
                <CheckCircle2 size={16} className="flex-none" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error Alert Banner */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#E63950] font-mono text-xs flex items-center gap-2"
              >
                <TriangleAlert size={16} className="flex-none" />
                <span>{errorMessage || 'Failed to send message. Please email me directly.'}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center text-xs font-mono !rounded-full !bg-[#A11D33] hover:!bg-[#C51D38] disabled:opacity-60 cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <span>Dispatching Message...</span>
                  <Loader2 size={14} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={13} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
