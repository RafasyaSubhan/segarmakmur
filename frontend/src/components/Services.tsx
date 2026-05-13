export default function Services() {
  // Data layanan diabstraksi agar kode komponen tetap bersih
  const servicesData = [
    {
      icon: "fa-pen-nib",
      title: "Self Publishing",
      desc: "Wadah bagi penulis independen untuk menerbitkan karya mereka dengan proses yang mudah dan transparan.",
    },
    {
      icon: "fa-print",
      title: "Percetakan & Distribusi",
      desc: "Kualitas cetak terbaik dengan jaringan distribusi ke toko buku utama di seluruh Indonesia.",
    },
    {
      icon: "fa-edit",
      title: "Editorial Profesional",
      desc: "Layanan penyuntingan, proofreading, dan layouting untuk memastikan kualitas konten buku Anda.",
    },
    {
      icon: "fa-graduation-cap",
      title: "Buku Referensi",
      desc: "Spesialisasi dalam penerbitan buku akademik, kurikulum, dan referensi pendidikan.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg-off-white">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Header Bagian */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Kami menyediakan solusi lengkap untuk kebutuhan penerbitan Anda.
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl text-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <i className={`fas ${item.icon} text-4xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300`}></i>
              <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}