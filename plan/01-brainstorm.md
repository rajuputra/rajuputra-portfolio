# Brainstorming Portofolio: Transisi XR ke Enterprise (MT/ODP)

## 3 Opsi Tema Desain Visual

Transisi dari ranah 3D/Spasial ke Enterprise Software Engineering membutuhkan jembatan visual. Kita harus memperlihatkan bahwa kreativitas dan keahlian performa (dari XR) telah berevolusi menjadi pemikiran arsitektural yang terstruktur, kokoh, dan rapi (khas Enterprise).

### Opsi 1: "Structured Dimensions" (Dimensi Terstruktur)
*   **Konsep:** Menggabungkan ruang spasial (3D) dengan grid sistem (Enterprise). Menandakan evolusi karir yang logis.
*   **Visual:** *Dark mode* dengan aksen *neon blue/cyan*. Latar belakang menggunakan elemen grid isometrik tipis (wireframe 3D) yang secara halus memudar (fade out) dan bertransformasi menjadi garis-garis diagram arsitektur data/sistem 2D yang rapi di section bawah.
*   **Kesan:** Elegan, futuristik namun sangat profesional. Sangat cocok untuk meyakinkan Tech Lead bahwa Anda mengerti *system architecture*.

### Opsi 2: "Solid Foundations" (Pondasi Kokoh)
*   **Konsep:** Menitikberatkan pada aspek "Engineering". Membangun simulasi alam (gunung berapi) membutuhkan pondasi logika yang sama dengan membangun *enterprise microservices*.
*   **Visual:** Desain *clean, minimalist* (bisa light/dark mode) dengan elemen *glassmorphism*. Latar belakang memiliki elemen geometris abstrak (low-poly) yang menyerupai topografi pegunungan (sebagai *easter egg* proyek VR Anda), namun setiap titiknya saling terhubung layaknya *node* dalam jaringan/sistem arsitektur (Nodes & Edges).
*   **Kesan:** Elegan, bersih (korporat banget), tapi tetap punya personalisasi (gunung berapi & jaringan sistem).

### Opsi 3: "The Blueprint" (Cetak Biru Pemimpin)
*   **Konsep:** Meng-highlight pengalaman Anda sebagai Lead Programmer dan Asisten Lab. Anda bukan sekadar *coder*, tapi *planner* dan *leader* (kriteria utama MT/ODP).
*   **Visual:** Menggunakan skema warna "Blueprint" modern (Deep Navy Blue background dengan garis tipis biru terang dan teks putih/abu-abu). Elemen UI dibuat seperti skema teknis yang rapi, dengan tipografi yang tegas (seperti font *Inter* atau *Roboto*).
*   **Kesan:** Menunjukkan ketelitian, kedewasaan profesional, dan kemampuan merancang arsitektur perangkat lunak skala besar.

---

## Daftar Section & Strategi Storytelling (Untuk MT/ODP)

Untuk melamar MT/ODP korporat, rekruter (HRD & Tech Lead) mencari **Potensi Kepemimpinan, Problem Solving, dan Ketahanan Sistem (Robustness)**.

1.  **Hero Section (First Impression)**
    *   **Pesan:** Anda adalah Insinyur Perangkat Lunak serba bisa dengan mentalitas *leader*.
    *   **Copywriting Idea:** *"From Spatial Realities to Enterprise Scale. I build robust systems and lead teams to deliver impactful software."*
    *   **Elemen:** Nama, Jabatan (Software Engineer), dan CTA (*Call to Action*) yang jelas (misal: "View My Journey").

2.  **About Me & The Transition (Menjawab Pertanyaan "Kenapa Pindah?")**
    *   **Pesan:** Transisi ini bukan kebetulan, melainkan evolusi alami dari optimasi performa ke arsitektur sistem.
    *   **Storytelling:** Ceritakan bagaimana pengalaman sebagai Lead Programmer di simulasi XR menuntut Anda untuk sangat peduli pada optimasi memori dan *user experience*. Kini, Anda membawa kedisiplinan *engineering* tersebut untuk membangun sistem *fullstack* (Java/React) yang *scalable* untuk kebutuhan *enterprise*. Sebutkan juga peran Asisten Lab untuk menonjolkan kemampuan komunikasi dan *mentoring*.

3.  **Core Competencies (Tech Stack)**
    *   **Pesan:** Saya siap pakai untuk teknologi perusahaan Anda, dengan bonus pemahaman mendalam tentang *rendering/performance*.
    *   **Storytelling:** Kelompokkan menjadi dua pilar: **"Enterprise Stack"** (Java, Spring Boot, React, SQL) dan **"Specialized Engineering"** (Unity, C#, XR). Ini meyakinkan Tech Lead bahwa fokus utama Anda sekarang adalah *Enterprise*.

4.  **Featured Projects (Pembuktian)**
    *   **Pesan:** Saya tidak hanya menulis kode, saya memberikan *business/real-world value*.
    *   **Proyek 1 (Enterprise/Fullstack jika ada):** Fokus pada arsitektur, bagaimana Anda menyambungkan React ke Spring Boot, desain database, dan keamanan.
    *   **Proyek 2 (VR Mitigasi Gunung Berapi):** Jangan terlalu fokus pada "VR-nya", tapi fokus pada: **Kompleksitas masalah yang dipecahkan**, **Manajemen Tim (karena Anda Lead)**, dan **Dampak sosial/nyata** dari simulasi tersebut.

5.  **Leadership & Experience (Sangat Penting untuk MT/ODP)**
    *   **Pesan:** Saya adalah calon pemimpin masa depan perusahaan (Management Trainee material).
    *   **Storytelling:** Jabarkan pencapaian kuantitatif saat menjadi Lead Programmer (misal: "Memimpin tim berisi X orang", "Mengirimkan proyek tepat waktu dengan zero crash") dan Asisten Lab (misal: "Membimbing X mahasiswa dalam memahami algoritma kompleks").

6.  **Contact (Call to Action)**
    *   **Pesan:** Mari berdiskusi tentang bagaimana saya bisa berkontribusi di program MT/ODP perusahaan Anda.
    *   **Elemen:** Email, LinkedIn, GitHub, Resume/CV link.

---

## 1 Ide "Wow Moment" Interaktif (Vanilla HTML/CSS/JS)

Karena kita dilarang menggunakan *library/framework* seperti Three.js atau GSAP, kita akan menggunakan **Vanilla JS + IntersectionObserver + CSS 3D Transforms**.

### Ide: "The Architecture Unfold" (Pengungkapan Arsitektur)

**Bagaimana ini bekerja:**
1.  Saat rekruter melakukan *scroll* ke bagian **"Tech Stack"** atau **"Projects"**, ada sebuah elemen grafis di tengah layar.
2.  Awalnya, elemen grafis ini terlihat seperti kubus 3D abstrak atau grid isometrik (representasi masa lalu Anda di dunia XR/3D).
3.  Saat *section* tersebut mencapai tengah layar (dideteksi menggunakan `IntersectionObserver`), elemen tersebut **"terbuka" (unfold) dan "merata" (flatten)** secara elegan melalui animasi CSS, berubah menjadi kumpulan kartu grid 2D yang rapi dan terstruktur (representasi sistem Enterprise, *Microservices*, atau arsitektur *Fullstack*).

**Kenapa ini brilian untuk profil Anda?**
*   **Filosofis:** Ini secara harfiah memvisualisasikan transisi karir Anda (dari ruang 3D yang kompleks, menjadi arsitektur 2D/sistem yang sangat terstruktur dan rapi).
*   **Teknis:** Menunjukkan penguasaan *Advanced CSS* (seperti `transform-style: preserve-3d`, `rotateX`, `rotateZ`, `transition`) dan *Vanilla JS DOM Manipulation* yang sangat matang. Tech Lead akan sangat terkesan karena Anda bisa membuat efek "mahal" ini tanpa membebani browser (sangat *lightweight*, nol dependensi eksternal).
*   **Elegan:** Tidak berlebihan atau mengganggu teks/konten (aksesibilitas tetap terjaga). Rekruter HRD akan melihatnya sebagai *website* yang "smooth", sementara Tech Lead akan melihat kodenya dan berpikir, *"Anak ini paham fundamental DOM & CSS rendering tree"*.
