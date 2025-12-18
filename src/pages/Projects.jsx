import ProjectCard from '../components/ProjectCard'

function Projects() {
  // Data proyek menggunakan array (JSON data dummy)
  const projectsData = [
    {
      id: 1,
      title: 'CDIA',
      image: '/CDIA.png',
      link: 'https://chandradaya-investasi.com/',
      description: 'PT Chandra Daya Investama Tbk adalah perusahaan yang bergerak di bidang investasi. CDIA memiliki prospek perkembangan yang menarik di sektor investasi, manajemen aset, dan diversifikasi bisnis yang kuat untuk jangka panjang.',
      tag: 'Investasi',
      color: 'emerald'
    },
    {
      id: 2,
      title: 'BBRI',
      image: '/BBRI.png',
      link: 'https://bri.co.id/',
      description: 'Bank Rakyat Indonesia adalah bank terbesar di Indonesia dengan kinerja fundamental kuat, laba konsisten, dan dividen stabil. BBRI cocok sebagai saham long-term karena memiliki basis nasabah terbesar di tanah air.',
      tag: 'Perbankan',
      color: 'sky'
    },
    {
      id: 3,
      title: 'ADRO',
      image: '/ADRO.png',
      link: 'https://alamtri.com/',
      description: 'Adaro Energy Indonesia adalah perusahaan energi dan batu bara dengan arus kas yang kuat dan dividen besar. ADRO juga mulai masuk sektor energi terbarukan, membuatnya menarik untuk investasi jangka panjang saya.',
      tag: 'Energi',
      color: 'blue'
    }
  ]

  return (
    <section className="min-h-screen bg-slate-950 pt-32 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600/10 border border-sky-600/20 backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-sm font-medium text-sky-400">Portfolio Investasi</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Kepemilikan Saham Saya
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Saham pilihan yang dipilih berdasarkan analisis fundamental, kinerja keuangan yang kuat, 
            dan potensi pertumbuhan jangka panjang
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              link={project.link}
              description={project.description}
              tag={project.tag}
              color={project.color}
            />
          ))}
        </div>

        {/* Performance Chart */}
        <div className="mb-16">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">Performance Portfolio</h3>
              <p className="text-slate-400">Kinerja investasi year-to-date dibanding IHSG</p>
            </div>
            <div className="p-4">
              <img 
                src="/performance.jpg" 
                alt="Portfolio Performance Chart" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-2">
              Jangka Panjang
            </div>
            <div className="text-slate-400 text-lg">Strategi Investasi</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects