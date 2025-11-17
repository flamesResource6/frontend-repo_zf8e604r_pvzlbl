export default function Sections({ lang }) {
  const t = {
    id: {
      profil: {
        title: 'Profil',
        subtitle: 'Membimbing pembelajaran Al-Qur\'an yang menyentuh hati dan berorientasi hasil.',
        ctas: ['Pesan Sesi', 'Lihat Jadwal']
      },
      program: {
        title: 'Program',
        items: [
          { title: 'Tahsin & Tajwid', desc: 'Perbaikan bacaan dengan metode bertahap dan praktik intensif.' },
          { title: 'Tahfizh (Hafalan)', desc: 'Pendampingan setoran hafalan dengan target realistis dan terukur.' },
          { title: 'Pelatihan Guru', desc: 'Workshop untuk peningkatan kompetensi mengajar Al-Qur\'an.' },
        ]
      },
      media: {
        title: 'Media',
        subtitle: 'Kumpulan rekaman kajian, tilawah, dan materi pendek untuk pembelajaran mandiri.'
      },
      komunitas: {
        title: 'Komunitas',
        subtitle: 'Bergabung dengan komunitas belajar untuk dukungan dan konsistensi.'
      },
      store: {
        title: 'Store',
        subtitle: 'Modul, buku, dan paket kelas yang dapat dibeli secara langsung.'
      },
      kontak: {
        title: 'Kontak',
        subtitle: 'Terhubung melalui WhatsApp atau email untuk pertanyaan dan pendaftaran.'
      }
    },
    en: {
      profil: {
        title: 'Profile',
        subtitle: 'Guiding Qur\'an learning that touches the heart and delivers results.',
        ctas: ['Book a Session', 'View Schedule']
      },
      program: {
        title: 'Programs',
        items: [
          { title: 'Tajwid & Recitation', desc: 'Refine your recitation with step-by-step, hands-on practice.' },
          { title: 'Hifz (Memorization)', desc: 'Structured memorization with realistic, measurable targets.' },
          { title: 'Teacher Training', desc: 'Workshops to elevate Qur\'an teaching competencies.' },
        ]
      },
      media: {
        title: 'Media',
        subtitle: 'Recordings of lessons, recitations, and short-form materials for self-study.'
      },
      komunitas: {
        title: 'Community',
        subtitle: 'Join a study community for support and consistency.'
      },
      store: {
        title: 'Store',
        subtitle: 'Modules, books, and class bundles available for purchase.'
      },
      kontak: {
        title: 'Contact',
        subtitle: 'Reach out via WhatsApp or email for questions and registration.'
      }
    }
  }[lang]

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-16">
      {/* Profil */}
      <section id="profil" className="grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-16">
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{t.profil.title}</h1>
          <p className="text-lg text-gray-600">{t.profil.subtitle}</p>
          <div className="flex gap-3">
            <a href="#kontak" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-500">{t.profil.ctas[0]}</a>
            <a href="#program" className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-2.5 text-gray-700 hover:bg-gray-50">{t.profil.ctas[1]}</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-100 shadow-inner grid place-items-center text-gray-500">
            <span>Hero Image / Video</span>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t.program.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.program.items.map((p, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow transition">
              <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section id="media" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t.media.title}</h2>
        <p className="text-gray-600 mb-6">{t.media.subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="aspect-video rounded-xl bg-gray-100 grid place-items-center text-gray-500">Video {i}</div>
          ))}
        </div>
      </section>

      {/* Komunitas */}
      <section id="komunitas" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t.komunitas.title}</h2>
        <p className="text-gray-600 mb-6">{t.komunitas.subtitle}</p>
        <div className="rounded-xl border border-gray-100 p-6 bg-white flex items-center justify-between">
          <p className="text-gray-700">Telegram Group • Weekly Challenges • Peer Review</p>
          <a href="#kontak" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">Join</a>
        </div>
      </section>

      {/* Store */}
      <section id="store" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t.store.title}</h2>
        <p className="text-gray-600 mb-6">{t.store.subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="aspect-[4/3] rounded-lg bg-gray-100 mb-3" />
              <h3 className="font-semibold text-gray-900">Paket #{i}</h3>
              <p className="text-sm text-gray-600 mb-3">Deskripsi singkat paket pembelajaran.</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Rp{199 + i}K</span>
                <a href="#kontak" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-500 text-sm">Beli</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t.kontak.title}</h2>
        <p className="text-gray-600 mb-6">{t.kontak.subtitle}</p>
        <form onSubmit={(e)=>e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
          <input className="w-full rounded-md border border-gray-200 p-3" placeholder="Nama" />
          <input className="w-full rounded-md border border-gray-200 p-3" placeholder="Email" />
          <input className="w-full rounded-md border border-gray-200 p-3 sm:col-span-2" placeholder="Subjek" />
          <textarea rows="4" className="w-full rounded-md border border-gray-200 p-3 sm:col-span-2" placeholder="Pesan" />
          <button className="inline-flex w-fit items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-500">Kirim</button>
        </form>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Quran Coach. All rights reserved.
      </footer>
    </main>
  )
}
