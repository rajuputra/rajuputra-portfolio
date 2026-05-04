Role:   Senior Frontend Engineer & UI/UX Designer dengan 8+ tahun pengalaman
        di startup dan enterprise. Ahli dalam HTML semantik, CSS modern,
        JavaScript vanilla, aksesibilitas, dan performance optimization.

Task:   Buat portfolio website satu halaman yang menunjukkan kualitas
        engineering kelas senior - kode yang clean, performa tinggi,
        dan desain yang memorable. Website ini dirancang khusus untuk 
        mengomunikasikan potensi kepemimpinan dan arsitektur sistem.

Context: HANYA vanilla HTML5 + CSS3 + JavaScript - TANPA framework,
         TANPA library pihak ketiga, TANPA bundler. Mobile-first,
         production-ready. Konten realistis untuk lulusan Informatika 
         berprestasi (IPK 3.96) dengan pengalaman Lead Programmer, yang 
         sedang bertransisi dari simulasi spasial/3D (Unity/XR) ke 
         Fullstack Enterprise (Java Spring Boot & React). Portfolio ini 
         akan digunakan untuk melamar program Management Trainee (MT) 
         dan Officer Development Program (ODP) di perusahaan korporat.

Constraints:
    ARSITEKTUR & SEMANTIK:
    - ZERO non-semantic div - gunakan elemen HTML5 yang tepat
    - File terstruktur: index.html, styles.css, script.js
    - SEO-ready: meta tags, Open Graph, structured data (JSON-LD)

    AKSESIBILITAS (WCAG 2.1 AA):
    - Contrast ≥ 4.5:1 (body), ≥ 3:1 (large text)
    - Focus indicators pada SEMUA elemen interaktif
    - Touch target min 44x44px
    - aria-label, aria-describedby, alt text deskriptif
    - Keyboard navigable, screen reader friendly

    RESPONSIF:
    - Sempurna di 320px-1440px+
    - clamp() untuk semua typography
    - Mobile-first breakpoints: 480px, 768px, 1024px
    - Container max-width + margin auto
    - overflow-x: hidden pada body

    INTERAKSI (Vanilla JS - Tanpa Library):
    - Scroll reveal: IntersectionObserver untuk animasi masuk section
    - Smooth scroll: JS native untuk navigasi anchor
    - Active nav highlight: track scroll position, highlight menu aktif
    - Hover: transform + transition CSS (150-300ms)
    - Active states pada semua button/link
    - Minimal 1 "wow moment": Buat efek "The Architecture Unfold". 
      Gunakan Vanilla JS & CSS 3D Transforms sederhana untuk mentransisikan 
      elemen abstrak 3D menjadi susunan grid 2D yang rapi saat pengguna 
      scroll ke section Tech Stack.
    - prefers-reduced-motion: disable semua animasi non-esensial
    - Hamburger menu: hanya muncul ketika diakses pada layar kecil

    PERFORMANCE :
    - Lighthouse target: Performance ≥ 90, Accessibility ≥ 95
    - Lazy load images (loading="lazy")
    - Defer script.js
    - Minimize reflows, gunakan transform/opacity untuk animasi
    - Total file < 50KB (HTML + CSS + JS combined)

    KONTEN:
    - Hero: tagline "From Spatial Realities to Enterprise Scale" + CTA jelas
    - About: bio menceritakan evolusi dari optimasi memori XR ke ketahanan 
      sistem Enterprise + sebutkan pengalaman mentoring asisten lab.
    - Skills: visual badges dibagi dua pilar (Enterprise Stack & Specialized Engineering).
    - Projects: 3+ proyek (Wajib ada VR Mitigasi Gunung Berapi & Fullstack API).
    - Experience: Fokus pada metrik kepemimpinan (Lead Programmer).
    - Contact: form fungsional + info kontak + social links

    Design Direction:
        Gunakan tema "Structured Dimensions" (Dark mode dengan elemen grid 
        arsitektur) atau "The Blueprint" (Navy blue dengan garis tegas ala cetak biru).
        Gunakan CSS custom properties untuk semua design tokens.
        Pastikan konsisten tapi tidak membosankan.

Output: 3 file terpisah - index.html, styles.css, script.js.
        Kode bersih, ter-organize, dengan komentar section.
        Sertakan instruksi cara buka (cukup buka index.html di browser).