import { useEffect, useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'

const labels = {
  id: {
    profil: 'Profil',
    program: 'Program',
    media: 'Media',
    komunitas: 'Komunitas',
    store: 'Store',
    kontak: 'Kontak',
    tagline: 'Guru & Pelatih Al-Qur\'an Profesional',
    lang: 'ID',
    langFull: 'Bahasa Indonesia',
  },
  en: {
    profil: 'Profile',
    program: 'Programs',
    media: 'Media',
    komunitas: 'Community',
    store: 'Store',
    kontak: 'Contact',
    tagline: 'Professional Qur\'an Teacher & Trainer',
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
    <a href={href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
      {children}
    </a>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#profil" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">Q</div>
            <div>
              <p className="text-sm text-gray-500 leading-none">{t.tagline}</p>
              <p className="font-semibold text-gray-900 leading-tight">Quran Coach</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <MenuLink href="#profil">{t.profil}</MenuLink>
            <MenuLink href="#program">{t.program}</MenuLink>
            <MenuLink href="#media">{t.media}</MenuLink>
            <MenuLink href="#komunitas">{t.komunitas}</MenuLink>
            <MenuLink href="#store">{t.store}</MenuLink>
            <MenuLink href="#kontak">{t.kontak}</MenuLink>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Switch language"
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Languages size={16} />
              <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-md border border-gray-100 bg-white shadow-sm overflow-hidden">
              <a onClick={() => setOpen(false)} href="#profil" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.profil}</a>
              <a onClick={() => setOpen(false)} href="#program" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.program}</a>
              <a onClick={() => setOpen(false)} href="#media" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.media}</a>
              <a onClick={() => setOpen(false)} href="#komunitas" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.komunitas}</a>
              <a onClick={() => setOpen(false)} href="#store" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.store}</a>
              <a onClick={() => setOpen(false)} href="#kontak" className="px-4 py-3 text-gray-700 hover:bg-blue-50">{t.kontak}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
