import { useState } from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

function App() {
  const [lang, setLang] = useState('id')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar lang={lang} setLang={setLang} />
      <Sections lang={lang} />
    </div>
  )
}

export default App
