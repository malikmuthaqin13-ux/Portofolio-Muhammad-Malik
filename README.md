# Panduan Mengedit Portofolio

> **Edit isi portofolio di `data.js`.** Tidak ada perubahan yang disimpan di localStorage atau melalui tombol edit pada halaman.

## Mengedit tulisan

1. Buka `data.js` memakai Notepad atau VS Code.
2. Cari nama atau kalimat yang mau diubah, lalu ganti teks di antara tanda kutip.
3. Simpan file dan muat ulang `index.html` di browser.

Isi `data.js` dikelompokkan menjadi profil/kontak, keahlian, dan sertifikat. Untuk sertifikat, setiap baris punya `nama`, `lembaga`, `tahun`, `deskripsi`, dan `foto`. Ganti nilai teks di baris sertifikat yang ingin diubah. Pertahankan tanda kutip dan koma.

## Mengganti foto

Semua alamat foto juga tertulis di `data.js`.

- **Foto profil:** ubah tiga alamat pada bagian `foto` (`navbar`, `hero`, dan `tentang`). Contoh: `"assets/foto-malik.jpg"`.
- **Foto keahlian:** ubah nilai `src` pada foto yang diinginkan. Ada empat alamat foto untuk setiap bidang.
- **Foto sertifikat:** ubah nilai `foto` di baris sertifikat, misalnya `foto: "assets/sertifikat-01.jpg"`.

> Contoh penggunaan: salin `sertifikat-network.jpg` ke folder `assets`, lalu ubah nilai `foto` sertifikat itu menjadi `"assets/sertifikat-network.jpg"`.

Format gambar yang umum seperti JPG, PNG, dan WebP dapat digunakan. Nama/path harus sama persis. Bila file foto belum tersedia, website menampilkan gambar contoh.

## Mengedit tulisan lain di halaman

Tulisan isi utama seperti profil, keahlian, kontak, dan sertifikat dikelola di `data.js`. Label navigasi dan judul bagian seperti **Beranda**, **Tentang Saya**, dan **Sertifikat** berada langsung di `index.html`; cari teks tersebut dan ubah di sana.

## File website

Menu navigasi membuka satu halaman tampilan per pilihan dengan animasi masuk. Alamat halaman mengikuti hash seperti `#tentang`; tombol Back/Forward browser juga berpindah halaman.

- `data.js`: teks dan alamat semua foto yang dipersonalisasi.
- `index.html`: susunan halaman dan label bagian.
- `style.css`: warna, ukuran, tata letak, dan tampilan mobile.
- `script.js`: fungsi tab keahlian dan tampilan detail sertifikat; biasanya tidak perlu diedit.
- `assets/profile.svg`: foto ilustrasi contoh.

> Setelah selesai, unggah seluruh folder `portfolio` agar `data.js`, `index.html`, `style.css`, `script.js`, dan `assets` tetap bersama.
