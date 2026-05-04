/**
 * Raju Putra Portfolio - Core Logic
 * Pendekatan eksekusi: Vanilla JS modern, zero dependency, performa tinggi.
 * Menghindari jank/reflow dengan menggunakan API IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. HAMBURGER MENU TOGGLE (Mobile Navigation)
    // =========================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        // Event listener untuk tombol hamburger
        menuToggle.addEventListener('click', () => {
            // Mengecek state aria-expanded saat ini
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle nilai aria-expanded (Penting untuk Aksesibilitas / Screen Reader)
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Menambahkan/menghapus class .is-open untuk mengontrol CSS transform (slide in/out)
            mainNav.classList.toggle('is-open');
        });
    }

    // =========================================================================
    // 2. SMOOTH SCROLLING FOR ANCHOR LINKS
    // =========================================================================
    // Mengambil semua link navigasi yang diawali dengan hash '#'
    const navLinks = document.querySelectorAll('.nav-link[href^="#"], .hero-actions a[href^="#"], .skip-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Abaikan jika href hanya '#' atau kosong
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Mencegah behavior lompatan instan default dari browser
                e.preventDefault();

                // Menutup menu mobile secara otomatis saat link diklik
                if (mainNav && mainNav.classList.contains('is-open')) {
                    mainNav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }

                // Kalkulasi offset agar header yang fixed tidak menutupi judul section
                const headerOffset = 80; // Sesuaikan dengan tinggi .site-header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                // Eksekusi animasi smooth scroll bawaan browser (Vanilla JS)
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================================================
    // 3. ACTIVE NAV HIGHLIGHT (Melacak Posisi Scroll)
    // =========================================================================
    const sections = document.querySelectorAll('section[id]');

    // Konfigurasi IntersectionObserver untuk highlight navigasi
    // rootMargin diatur agar pergantian aktif terjadi sedikit sebelum section menyentuh atas layar
    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');

                // Reset semua state aktif dari link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');

                    // Tambahkan class .active pada link yang merujuk ke section yang sedang terlihat
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    // Memulai observasi untuk setiap section yang ada
    sections.forEach(section => {
        navObserver.observe(section);
    });

    // =========================================================================
    // 4. "WOW MOMENT" TRIGGER: THE ARCHITECTURE UNFOLD
    // =========================================================================
    // Mengambil elemen wrapper (pendeteksi) dan cube (target animasi)
    const unfoldWrapper = document.querySelector('.architecture-unfold-wrapper');
    const unfoldCube = document.querySelector('.unfold-cube');

    // Pastikan kedua elemen ada di dalam DOM sebelum menginisialisasi observer
    if (unfoldWrapper && unfoldCube) {

        // Konfigurasi observer khusus untuk elemen 3D
        const unfoldObserverOptions = {
            root: null,
            rootMargin: '0px',
            // Threshold 0.4 artinya event ter-trigger saat 40% dari elemen terlihat di viewport
            threshold: 0.4
        };

        const unfoldObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Memeriksa apakah perangkat mengaktifkan "Prefers Reduced Motion"
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                // Jika pengguna sensitif terhadap animasi, jangan mainkan animasi unfolding 3D
                if (prefersReducedMotion) {
                    unfoldCube.classList.add('is-unfolded'); // Langsung jadikan 2D
                    return;
                }

                if (entry.isIntersecting) {
                    // Momen Wow: Elemen masuk viewport -> Ubah Kubus 3D menjadi Grid Arsitektur 2D
                    unfoldCube.classList.add('is-unfolded');
                } else {
                    // Opsional: Revert ke bentuk 3D awal saat di luar viewport 
                    // agar rekruter bisa melihat animasinya berulang kali saat scroll bolak-balik
                    unfoldCube.classList.remove('is-unfolded');
                }
            });
        }, unfoldObserverOptions);

        // Memulai observasi pada wrapper
        unfoldObserver.observe(unfoldWrapper);
    }
});
