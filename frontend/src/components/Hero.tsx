import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white pt-20 px-5"
      style={{
        // Hanya menggunakan gradient warna, URL gambar dihapus
        background: "linear-gradient(rgba(15, 42, 71, 0.85), rgba(15, 42, 71, 0.7))",
      }}
    >
      <div className="max-w-[700px] mx-auto z-10">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Menjelajahi Dunia Lewat Kata
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 font-light">
          Penerbit Segara Makmur Sejati hadir sebagai wadah kreativitas penulis
          Indonesia. Kami menerbitkan karya berkualitas yang menginspirasi,
          mendidik, dan menghibur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#books"
            className="bg-accent hover:brightness-90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1"
          >
            Lihat Koleksi Buku
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}