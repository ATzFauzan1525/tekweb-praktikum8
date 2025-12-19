import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar tetap ada di semua halaman */}
      <Navbar />

      <div className="w-full">
        {/* Area ini akan berubah isinya sesuai URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Wildcard route untuk 404 Not Found */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen bg-slate-950">
                <div className="text-center px-6">
                  <h1 className="text-9xl font-bold bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-400 bg-clip-text text-transparent mb-4">
                    404
                  </h1>
                  <p className="text-xl text-slate-400">
                    Halaman tidak ditemukan.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>

      </div>
    </div>
  )
}

export default App
