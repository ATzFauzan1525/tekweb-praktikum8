import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-600 to-sky-700 rounded-lg flex items-center justify-center font-bold text-white">
                  AF
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-600/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/projects"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === '/projects' 
                  ? 'bg-sky-600/10 text-sky-400 border border-sky-600/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'bg-gradient-to-r from-emerald-600 to-sky-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Kontak
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar