"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi untuk menutup menu saat link diklik (di mode mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-5">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-heading text-2xl font-bold text-primary flex items-center gap-2"
          >
            <i className="fas fa-book-open text-accent"></i>
            Segara Makmur Sejati
          </Link>

          {/* Tombol Hamburger untuk Mobile */}
          <button
            className="md:hidden text-2xl text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Menu Navigasi */}
          <ul
            className={`
              absolute top-20 left-0 w-full bg-white flex-col items-center py-5 shadow-lg gap-6
              md:static md:w-auto md:bg-transparent md:flex-row md:py-0 md:shadow-none md:flex md:gap-8
              ${isOpen ? "flex" : "hidden"}
              transition-all duration-300 ease-in-out
            `}
          >
            <li>
              <Link href="#hero" onClick={closeMenu} className="font-medium text-secondary hover:text-accent transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu} className="font-medium text-secondary hover:text-accent transition-colors">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={closeMenu} className="font-medium text-secondary hover:text-accent transition-colors">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="#books" onClick={closeMenu} className="font-medium text-secondary hover:text-accent transition-colors">
                Buku
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMenu} className="font-medium text-secondary hover:text-accent transition-colors">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}