function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-400">Siap Berkolaborasi</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Halo, Saya</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-400 bg-clip-text text-transparent">
                    Ahmad Fauzan
                  </span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  Mahasiswa <span className="text-emerald-400 font-semibold">Sistem Informasi Universitas Ahmad Dahlan</span> yang fokus pada{' '}
                  <span className="text-sky-400 font-semibold">Teknologi Finansial</span> dan analisis pasar saham.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <span className="relative z-10">Hubungi Saya</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="/projects"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-slate-600 transition-all duration-300"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>
            
            {/* Profile Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Image Container */}
                <div className="relative">
                  <img 
                    src="/profile-photo.jpeg" 
                    alt="Ahmad Fauzan" 
                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border border-slate-800 shadow-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-sky-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Latar Belakang dan Fokus
            </h2>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Menggabungkan latar belakang akademik dengan ketertarikan pada teknologi dan analisis finansial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">Pendidikan</h3>
                <p className="text-slate-400 leading-relaxed">
                  Menempuh pendidikan Sistem Informasi di Universitas Ahmad Dahlan dengan fokus pada teknologi finansial dan pengambilan keputusan berbasis data
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">Investasi Saham</h3>
                <p className="text-slate-400 leading-relaxed">
                  Investor aktif yang menganalisis pasar saham Indonesia dengan pendekatan analisis fundamental
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Fintech Enthusiast</h3>
                <p className="text-slate-400 leading-relaxed">
                  Antusias terhadap inovasi teknologi finansial dan sistem informasi berbasis data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Keahlian & Ketertarikan
            </h2>
            <p className="text-xl text-slate-400">
              Kompetensi yang terus dikembangkan dalam bidang keuangan dan teknologi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Analisis Fundamental Saham', 
                icon: '📊', 
                color: 'from-emerald-600 to-emerald-700',
                description: 'Menganalisis laporan keuangan, rasio valuasi, dan kinerja perusahaan untuk evaluasi investasi'
              },
              { 
                name: 'Teknologi Finansial', 
                icon: '💻', 
                color: 'from-sky-600 to-sky-700',
                description: 'Memahami ekosistem fintech, digital banking, dan solusi pembayaran modern'
              },
              { 
                name: 'Sistem Informasi Manajemen', 
                icon: '🗄️', 
                color: 'from-blue-600 to-blue-700',
                description: 'Mengelola dan mengoptimalkan sistem informasi untuk mendukung keputusan bisnis'
              },
              { 
                name: 'Manajemen Portfolio Investasi', 
                icon: '📈', 
                color: 'from-teal-600 to-teal-700',
                description: 'Strategi diversifikasi dan alokasi aset untuk optimalisasi risk-return portfolio'
              },
            ].map((skill, index) => (
              <div key={index} className="group relative p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-blue-500/10"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Mari Bekerja Sama
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Tertarik untuk berdiskusi tentang investasi, teknologi, atau kolaborasi potensial? 
            Jangan ragu untuk menghubungi!
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Hubungi Saya</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home