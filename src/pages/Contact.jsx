import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      // Encode data untuk URL
      const subject = encodeURIComponent(`Pesan dari ${formData.name}`)
      const body = encodeURIComponent(
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Pesan:\n${formData.message}`
      )
      
      // Buka email client
      window.location.href = `mailto:2400016068@webmail.uad.ac.id?subject=${subject}&body=${body}`
      
      // Reset form setelah 1 detik
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
      }, 1000)
    } else {
      alert('Mohon lengkapi semua field!')
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: '2400016068@webmail.uad.ac.id',
      link: 'mailto:2400016068@webmail.uad.ac.id',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.517 4.55a1 1 0 01-.272 1.027l-2.012 2.012a11.042 11.042 0 005.516 5.516l2.012-2.012a1 1 0 011.027-.272l4.55 1.517a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'WhatsApp',
      value: '+62 852 1631 0608',
      link: 'https://wa.me/6285216310608',
      color: 'from-sky-600 to-sky-700'
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Lokasi',
      value: 'Yogyakarta, Indonesia',
      link: null,
      color: 'from-blue-600 to-blue-700'
    }
  ]

  return (
    <section className="min-h-screen bg-slate-950 pt-32 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-600/20 backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium text-emerald-400">Hubungi Saya</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Mari Terhubung
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi melalui salah satu channel berikut
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-slate-400">{method.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 lg:p-12 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-sky-600/5 to-blue-600/5 rounded-2xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Kirim Pesan
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none"
                    placeholder="Tuliskan nama Anda..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none"
                    placeholder="Tuliskan email Anda..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none resize-none"
                    placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="group relative w-full py-5 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Kirim Pesan
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact