"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah kami terima (Mode Demo).");
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Tertarik bekerja sama atau ingin menerbitkan buku Anda? Hubungi kami sekarang.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Info Kontak */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-5">
              <i className="fas fa-map-marker-alt text-2xl text-accent mt-1"></i>
              <div>
                <h5 className="text-lg font-bold mb-1">Alamat Kantor</h5>
                <p className="text-gray-300">Jl. Laut Selatan No. 88, Jakarta Selatan, Indonesia 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <i className="fas fa-envelope text-2xl text-accent mt-1"></i>
              <div>
                <h5 className="text-lg font-bold mb-1">Email</h5>
                <p className="text-gray-300">info@segaramakmursejati.com<br />redaksi@segaramakmursejati.com</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <i className="fas fa-phone text-2xl text-accent mt-1"></i>
              <div>
                <h5 className="text-lg font-bold mb-1">Telepon</h5>
                <p className="text-gray-300">+62 21 5555 8888<br />+62 812 3456 7890 (WhatsApp)</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <i className="fas fa-clock text-2xl text-accent mt-1"></i>
              <div>
                <h5 className="text-lg font-bold mb-1">Jam Operasional</h5>
                <p className="text-gray-300">Senin - Jumat: 09.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input 
                  type="text" 
                  placeholder="Nama Lengkap" 
                  required 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Alamat Email" 
                  required 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subjek Pesan" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tulis pesan Anda di sini..." 
                  required 
                  rows={5}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors resize-y"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-[#bfa07a] text-white py-4 rounded-md font-bold transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}