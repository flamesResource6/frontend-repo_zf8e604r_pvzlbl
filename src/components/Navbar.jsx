import { useEffect, useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'

const labels = {
  id: {
    profil: 'Profil',
    program: 'Program',
    media: 'Media',
    komunitas: 'Komunitas',
    store: 'Store',
    testimoni: 'Testimoni',
    kolaborasi: 'Kolaborasi',
    kontak: 'Kontak',
    tagline: 'Trainer Soulful Qur’an',
    brand: 'Bilal Qori',
    lang: 'ID',
    langFull: 'Bahasa Indonesia',
  },
  en: {
    profil: 'Profile',
    program: 'Programs',
    media: 'Media',
    komunitas: 'Community',
    store: 'Store',
    testimoni: 'Testimonials',
    kolaborasi: 'Collaboration',
    kontak: 'Contact',
    tagline: 'Soulful Qur’an Trainer',
    brand: 'Bilal Qori',
    lang: 'EN',
    langFull: 'English',
  }
}

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = labels[lang]

  const MenuLink = ({ href, children }) => (
    <a href={href} className="px-3 py-2 rounded-md text-sm font-medium text-brand hover:text-brand bg-transparent hover:bg-brand-accent/20">
      {children}
    </a>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-muted/30 bg-brand-bg/80 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#profil" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-brand text-white grid place-items-center font-bold">BQ</div>
            <div>
              <p className="text-sm text-brand-muted leading-none">{t.tagline}</p>
              <p className="font-semibold text-brand leading-tight">{t.brand}</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <MenuLink href="#profil">{t.profil}</MenuLink>
            <MenuLink href="#program">{t.program}</MenuLink>
            <MenuLink href="#media">{t.media}</MenuLink>
            <MenuLink href="#komunitas">{t.komunitas}</MenuLink>
            <MenuLink href="#store">{t.store}</MenuLink>
            <MenuLink href="#testimoni">{t.testimoni}</MenuLink>
            <MenuLink href="#kolaborasi">{t.kolaborasi}</MenuLink>
            <MenuLink href="#kontak">{t.kontak}</MenuLink>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Switch language"
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="inline-flex items-center gap-2 rounded-md border border-brand-muted/40 bg-brand-bg px-3 py-2 text-sm font-medium text-brand hover:bg-brand-accent/20"
            >
              <Languages size={16} />
              <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand hover:bg-brand-accent/30"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-md border border-brand-muted/40 bg-brand-bg shadow-sm overflow-hidden">
              <a onClick={() => setOpen(false)} href="#profil" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.profil}</a>
              <a onClick={() => setOpen(false)} href="#program" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.program}</a>
              <a onClick={() => setOpen(false)} href="#media" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.media}</a>
              <a onClick={() => setOpen(false)} href="#komunitas" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.komunitas}</a>
              <a onClick={() => setOpen(false)} href="#store" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.store}</a>
              <a onClick={() => setOpen(false)} href="#testimoni" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.testimoni}</a>
              <a onClick={() => setOpen(false)} href="#kolaborasi" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.kolaborasi}</a>
              <a onClick={() => setOpen(false)} href="#kontak" className="px-4 py-3 text-brand hover:bg-brand-accent/20">{t.kontak}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
