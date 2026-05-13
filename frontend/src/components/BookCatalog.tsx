export default function BookCatalog() {
  const booksData = [
    { title: "Jejak Samudra", author: "Budi Santoso", img: "https://picsum.photos/seed/book1/300/450" },
    { title: "Seni Memimpin", author: "Siti Aminah", img: "https://picsum.photos/seed/book2/300/450" },
    { title: "Fajar Baru", author: "Rahmat Hidayat", img: "https://picsum.photos/seed/book3/300/450" },
    { title: "Resep Nusantara", author: "Chef Juna", img: "https://picsum.photos/seed/book4/300/450" },
  ];

  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4">
            Buku Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Koleksi terbaru dan terlaris yang paling banyak dibaca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {booksData.map((book, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-5 shadow-lg rounded-md overflow-hidden aspect-[2/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-primary mb-1">{book.title}</h4>
                <span className="text-sm text-gray-500 italic">Oleh: {book.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent hover:brightness-90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300">
            Lihat Semua Katalog
          </button>
        </div>
      </div>
    </section>
  );
}