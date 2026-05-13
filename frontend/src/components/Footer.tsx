import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1e36] text-gray-400 py-10 text-sm">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pb-8 border-b border-white/10">
          <div className="font-heading text-white text-xl font-bold flex items-center gap-2">
            <i className="fas fa-book-open text-accent"></i> Segara Makmur Sejati
          </div>
          <div className="flex gap-4 text-lg">
            <Link href="#" className="text-white hover:text-accent transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
            <Link href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
            <Link href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
            <Link href="#" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
        <div className="text-center pt-8">
          <p>&copy; {new Date().getFullYear()} Penerbit Segara Makmur Sejati. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}