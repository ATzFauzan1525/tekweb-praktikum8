function ProjectCard({ title, description, image, link, tag, color }) {
  const colorClasses = {
    emerald: 'from-emerald-600 to-emerald-700 border-emerald-600/20 text-emerald-400',
    sky: 'from-sky-600 to-sky-700 border-sky-600/20 text-sky-400',
    blue: 'from-blue-600 to-blue-700 border-blue-600/20 text-blue-400'
  }

  return (
    <article className="group relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-600/10">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`Saham ${title}`} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        
        {/* Tag Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm border bg-gradient-to-r ${colorClasses[color]}`}>
            {tag}
          </span>
        </div>
        
        {/* Title on Image */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 space-y-4">
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold group-hover:gap-3 transition-all duration-300"
        >
          <span>Lihat Detail</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </article>
  )
}

export default ProjectCard