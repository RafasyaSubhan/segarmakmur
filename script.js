document.getElementById('current-year').textContent = new Date().getFullYear();

// Ambil elemen menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Buka/tutup hamburger menu
function toggleMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } 
    else {
        closeMenu();
    }
}

// Tutup hamburger menu
function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
}

// Tampilkan alert saat form disubmit
function handleFormSubmit(e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah kami terima (Mode Demo).");
}