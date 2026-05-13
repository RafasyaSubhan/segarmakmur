export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Gambar */}
          <div className="relative order-2 md:order-1 mt-8 md:mt-0">
            {/* Kotak aksen di belakang gambar (Pengganti trik ::before) */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-accent rounded-lg z-0"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/publisher/600/400"
              alt="Tentang Penerbit Segara Makmur Sejati"
              className="rounded-lg shadow-xl relative z-10 w-full object-cover"
            />
          </div>

          {/* Bagian Teks */}
          <div className="order-1 md:order-2">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-5">
              Mitra Terpercaya Penulis Indonesia
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed text-lg">
              Didirikan dengan visi untuk memajukan literasi bangsa, <strong>Segara Makmur Sejati</strong> telah menerbitkan ratusan judul buku dari berbagai genre. Kami percaya bahwa setiap kata memiliki kekuatan untuk mengubah dunia.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Dengan tim editorial berpengalaman dan jaringan distribusi yang luas, kami berkomitmen memberikan layanan penerbitan terbaik, mulai dari penyuntingan hingga pemasaran.
            </p>

            {/* Statistik (Angka) */}
            <div className="flex gap-10">
              <div>
                <h2 className="text-accent font-heading text-4xl md:text-5xl font-bold">500+</h2>
                <p className="text-sm md:text-base text-gray-500 mt-2 font-medium">Judul Buku</p>
              </div>
              <div>
                <h2 className="text-accent font-heading text-4xl md:text-5xl font-bold">200+</h2>
                <p className="text-sm md:text-base text-gray-500 mt-2 font-medium">Penulis</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}