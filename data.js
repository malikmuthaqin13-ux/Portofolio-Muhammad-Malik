/*
  EDIT DATA WEBSITE DI SINI
  Ganti teks di bawah dengan data Anda. Simpan file setelah mengedit.
*/
const portfolioData = {
  nama: "Muhammad Malik Muthaqin",
  profesi: "Teknisi Jaringan · Indonesia",
  kalimatPembuka: "Saya adalah seorang teknisi jaringan yang berkompeten, disiplin, dan bertanggung jawab.",
  tentangSaya: "Saya menikmati proses merancang infrastruktur yang andal, memecahkan masalah teknis, dan terus belajar hal baru di dunia digital.",
  prinsipKerja: "Bagi saya, teknologi terbaik adalah teknologi yang bekerja dengan baik dan membantu banyak orang tetap terhubung.",

  telepon: "+62 823-2121-7955",
  tautanTelepon: "+6282321217955",
  email: "malikmuthaqin13@gmail.com",
  alamat: "Kota Depok, Indonesia",

  // Untuk mengganti foto: taruh gambar di folder assets lalu tulis alamatnya di sini.
  // Contoh: foto: { navbar: "assets/foto-saya.jpg", hero: "assets/foto-saya.jpg", tentang: "assets/foto-saya.jpg" }
  foto: {
    navbar: "assets/Foto-Malik.jpg",
    hero: "assets/Foto-Malik.jpg",
    tentang: "assets/Foto-Malik.jpg"
  },
  github: "https://github.com/",
  instagram: "https://www.instagram.com/malikmuthaqin20?igsh=emgzajRyanQ3OXJq&utm_source=qr",

  // Ubah nama, deskripsi, dan tag keahlian sesuai kemampuan Anda.
  keahlian: [
    {
      id: "fiber",
      nama: "Fiber Optik",
      judul: "Instalasi Fiber Optik.",
      deskripsi: "Mengerjakan instalasi dan pemeliharaan jaringan fiber optik, dari penarikan kabel hingga penyambungan dan pengukuran kualitas sinyal.",
      tag: ["Splicing", "OTDR", "FTTH", "Patching"],
      foto: [
        { nama: "Splicing", src: "assets/Splicing-proper.jpeg" },
        { nama: "Pengupasan Kabel", src: "assets/Penyambungan-kabel.jpeg" },
        { nama: "Pengupasan Kabel Distribusi", src: "assets/Pengupasan-distribusi.jpeg" },
        { nama: "Splicing", src: "assets/Splicing-Lagi.jpeg" }
      ]
    },
    {
      id: "network",
      nama: "Networking",
      judul: "Infrastruktur Networking.",
      deskripsi: "Merancang dan merawat infrastruktur jaringan kabel maupun nirkabel agar perangkat dan tim dapat terhubung dengan lancar.",
      tag: ["LAN / WAN", "Routing", "Switching", "Wi-Fi"],
      foto: [
        { nama: "Pemeliharaan Server", src: "assets/Pemeliharaanserver.jpeg" },
        { nama: "Pengecheckan Access Point", src: "assets/PengecekanAP.jpeg" },
        { nama: "Pengecheckan HUB", src: "assets/Pengecekanhub.jpeg" },
        { nama: "Konfigurasi Mikrotik", src: "assets/Konfigurasimikrotik.jpeg" }
      ]
    },
    {
      id: "support",
      nama: "IT Support",
      judul: "Dukungan Teknis IT.",
      deskripsi: "Membantu pengguna mengatasi kendala perangkat dan sistem, melakukan instalasi, perawatan rutin, serta dokumentasi solusi.",
      tag: ["Troubleshooting", "Perawatan", "Instalasi", "Helpdesk"],
      foto: [
        { nama: "Monitoring Jaringan", src: "assets/monitoring.jpeg" },
        { nama: "Pemeliharaan Software", src: "assets/pemeliharaansoftware.jpeg" },
        { nama: "Perbaikan Laptop", src: "assets/perbaikanlaptop.jpeg" },
        { nama: "Perbaikan PC", src: "assets/perbaikanpc.jpeg" }
      ]
    }
  ],

  // Ganti contoh berikut dengan nama sertifikat dan lembaga yang benar.
  sertifikat: [
    {
      nama: "Introduction & Implementasi IPv6 Addressing",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Pelatihan dasar IPv6.",
      foto: "assets/Introduction&ImplementasiIPv6Addressing.png"
    },
    {
      nama: "Cyber Cecurity Essential Kali Linux",
      lembaga: "Bisa.AI",
      tahun: "2026",
      deskripsi: "Pelatihan Cyber Security Menggunakan Kali Linux.",
      foto: "assets/CyberCecurityEssentialKaliLinux.png"
    },
    {
      nama: "Introduction To Containerization Using Podman",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Sertifikasi Dan Pengalaman Organisasi.",
      foto: "assets/IntroductiontoContainerizationUsingPodman.png"
    },
    {
      nama: "Robotic Internet Of Things",
      lembaga: "Bisa.AI",
      tahun: "2026",
      deskripsi: "Mempelajari tentang robotic serta memperdalam sistem IOT.",
      foto: "assets/RoboticInternetOfThings.png"
    },
    {
      nama: "Jaringan Komputer Dasar",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Mempelajari tentang komputer dasar.",
      foto: "assets/JARINGAN KOMPUTER DASAR.png"
    },
    {
      nama: "Belajar Jaringan Komputer Dari Dasar",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Mempelajari tentang jaringan komputer dasar.",
      foto: "assets/LANGKAH AWAL JARINGAN.png"
    },
    {
      nama: "Pengembangan Aplikasi Android Modern",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Mempelajari pengembangan aplikasi android modern.",
      foto: "assets/LINUX.png"
    },
    {
      nama: "Mikrotik Dasar",
      lembaga: "IDN Networkers",
      tahun: "2025",
      deskripsi: "Mempelajari Mikrotik Dasar secara lengkap.",
      foto: "assets/MIKROTIK.png"
    },
    {
      nama: "Computer Hardware",
      lembaga: "Nama lembaga sertifikasi",
      tahun: "2022",
      deskripsi: "Pengenalan komponen komputer, perakitan, perawatan, dan pemeriksaan gangguan perangkat keras.",
      foto: "assets/sertifikat-09.jpg"
    },
    {
      nama: "Technical Support",
      lembaga: "Nama lembaga sertifikasi",
      tahun: "2022",
      deskripsi: "Dukungan teknis, pencatatan kendala, dan langkah pemecahan masalah secara terstruktur.",
      foto: "assets/sertifikat-10.jpg"
    }
  ]
};
