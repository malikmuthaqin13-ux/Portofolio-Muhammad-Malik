/*
  Fungsi tampilan portofolio.
  Ubah tulisan dan alamat foto di data.js. Bagian ini biasanya tidak perlu diedit.
*/
const data = portfolioData;
const byId = (id) => document.getElementById(id);

function escapeSvg(teks) {
  return String(teks).replace(/[&<>"']/g, (karakter) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  })[karakter]);
}

// Ilustrasi ini muncul bila alamat foto di data.js masih kosong.
function buatGambarContoh(judul, keterangan, warna = "#e5e7e2") {
  const gambar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460">
    <rect width="720" height="460" fill="${warna}"/>
    <circle cx="555" cy="115" r="75" fill="#ff744f"/>
    <path d="M0 350 190 210l122 82 164-154 244 183v139H0Z" fill="#172333"/>
    <text x="48" y="76" fill="#172333" font-family="Arial" font-size="16">PORTOFOLIO · DOKUMENTASI</text>
    <text x="50" y="410" fill="#fff" font-family="Arial" font-size="25" font-weight="bold">${escapeSvg(judul)}</text>
    <text x="52" y="436" fill="#d5dbe1" font-family="Arial" font-size="13">${escapeSvg(keterangan)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(gambar)}`;
}

function buatGambarSertifikat(nama, tahun) {
  const gambar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460">
    <rect width="720" height="460" fill="#f5f1e8"/>
    <rect x="20" y="20" width="680" height="420" fill="none" stroke="#d3c5a8" stroke-width="2"/>
    <circle cx="360" cy="117" r="34" fill="#ff744f"/>
    <text x="360" y="190" text-anchor="middle" fill="#788391" font-family="Arial" font-size="15">CERTIFICATE OF COMPLETION</text>
    <text x="360" y="251" text-anchor="middle" fill="#172333" font-family="Georgia" font-size="32">${escapeSvg(nama)}</text>
    <text x="360" y="377" text-anchor="middle" fill="#ff744f" font-family="Arial" font-size="17">${escapeSvg(data.nama)} · ${escapeSvg(tahun)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(gambar)}`;
}

function tampilkanProfil() {
  document.querySelectorAll("[data-nama]").forEach((elemen) => {
    elemen.textContent = data.nama;
  });

  byId("kalimat-pembuka").textContent = `Selamat datang di ruang digital saya. ${data.kalimatPembuka}`;
  byId("tentang-saya").textContent = data.tentangSaya;
  byId("prinsip-kerja").textContent = data.prinsipKerja;
  byId("teks-profesi").textContent = data.profesi;
  byId("teks-telepon").textContent = data.telepon;
  byId("kontak-telepon").href = `tel:${data.tautanTelepon}`;
  byId("teks-email").textContent = data.email;
  byId("kontak-email").href = `mailto:${data.email}`;
  byId("teks-alamat").textContent = data.alamat;
  byId("email-cta").href = `mailto:${data.email}`;
  byId("tautan-github").href = data.github;
  byId("tautan-instagram").href = data.instagram;
  document.title = `Portofolio | ${data.nama}`;
  byId("year").textContent = new Date().getFullYear();

  const fotoProfil = [
    ["foto-navbar", data.foto.navbar],
    ["foto-hero", data.foto.hero],
    ["foto-tentang", data.foto.tentang]
  ];
  fotoProfil.forEach(([id, alamatFoto]) => {
    const gambar = byId(id);
    gambar.src = alamatFoto;
    gambar.alt = `Foto ${data.nama}`;
    gambar.addEventListener("error", () => {
      gambar.src = "assets/profile.svg";
    }, { once: true });
  });
}

function tampilkanKeahlian(nomorAktif) {
  const keahlian = data.keahlian[nomorAktif];
  document.querySelectorAll(".skill-tab").forEach((tombol, nomor) => {
    const aktif = nomor === nomorAktif;
    tombol.classList.toggle("active", aktif);
    tombol.setAttribute("aria-selected", String(aktif));
  });

  byId("skill-index").textContent = `BIDANG 0${nomorAktif + 1}`;
  byId("skill-title").textContent = keahlian.judul;
  byId("skill-copy").textContent = keahlian.deskripsi;
  byId("skill-tags").innerHTML = keahlian.tag.map((tag) => `<span>${tag}</span>`).join("");

  const galeri = byId("skill-gallery");
  galeri.innerHTML = "";
  keahlian.foto.forEach((foto, nomorFoto) => {
    const kotak = document.createElement("div");
    kotak.className = "skill-image";

    const gambar = document.createElement("img");
    gambar.alt = foto.nama;
    gambar.src = foto.src || buatGambarContoh(foto.nama, keahlian.tag.join(" · "), nomorFoto % 2 ? "#e5e7e2" : "#d9e0e3");
    gambar.addEventListener("error", () => {
      gambar.src = buatGambarContoh(foto.nama, keahlian.tag.join(" · "));
    }, { once: true });

    const keterangan = document.createElement("span");
    keterangan.className = "image-caption";
    keterangan.textContent = foto.nama;

    kotak.append(gambar, keterangan);
    galeri.append(kotak);
  });
}

function siapkanTabKeahlian() {
  const daftarTab = byId("skill-tabs");
  data.keahlian.forEach((keahlian, nomor) => {
    const tombol = document.createElement("button");
    tombol.className = "skill-tab";
    tombol.type = "button";
    tombol.setAttribute("role", "tab");
    tombol.setAttribute("aria-selected", "false");
    tombol.innerHTML = `<span>0${nomor + 1}</span>${keahlian.nama}<b>↗</b>`;
    tombol.addEventListener("click", () => tampilkanKeahlian(nomor));
    daftarTab.append(tombol);
  });

  if (data.keahlian.length) tampilkanKeahlian(0);
}

function siapkanSertifikat() {
  const daftarKartu = byId("certificate-grid");
  const modal = byId("certificate-modal");

  data.sertifikat.forEach((sertifikat, nomor) => {
    const kartu = document.createElement("button");
    kartu.className = "certificate-card";
    kartu.type = "button";
    kartu.innerHTML = `<div class="certificate-art"><img alt="Sertifikat ${sertifikat.nama}"></div>
      <div class="certificate-meta"><b>${sertifikat.nama}</b><span>${sertifikat.tahun}</span></div>
      <p>${sertifikat.lembaga}</p>`;

    const gambar = kartu.querySelector("img");
    gambar.src = sertifikat.foto || buatGambarSertifikat(sertifikat.nama, sertifikat.tahun);
    gambar.addEventListener("error", () => {
      gambar.src = buatGambarSertifikat(sertifikat.nama, sertifikat.tahun);
    }, { once: true });

    kartu.addEventListener("click", () => {
      byId("modal-image").src = gambar.src;
      byId("modal-image").alt = `Sertifikat ${sertifikat.nama}`;
      byId("modal-number").textContent = `SERTIFIKAT 0${nomor + 1} · ${sertifikat.tahun}`;
      byId("modal-title").textContent = sertifikat.nama;
      byId("modal-description").textContent = sertifikat.deskripsi;
      byId("modal-issuer").textContent = sertifikat.lembaga;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });

    daftarKartu.append(kartu);
  });

  const tutupModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  modal.querySelector(".modal-close").addEventListener("click", tutupModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) tutupModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") tutupModal();
  });
}

function siapkanMenuPonsel() {
  const tombolMenu = document.querySelector(".menu-toggle");
  const tautanMenu = document.querySelector(".nav-links");

  tombolMenu.addEventListener("click", () => {
    const terbuka = tombolMenu.getAttribute("aria-expanded") !== "true";
    tombolMenu.setAttribute("aria-expanded", String(terbuka));
    tautanMenu.classList.toggle("open", terbuka);
  });

  tautanMenu.querySelectorAll("a").forEach((tautan) => {
    tautan.addEventListener("click", () => {
      tombolMenu.setAttribute("aria-expanded", "false");
      tautanMenu.classList.remove("open");
    });
  });
}

function siapkanNavigasiHalaman() {
  const halaman = [...document.querySelectorAll(".page-view")];
  const halamanById = new Map(halaman.map((bagian) => [bagian.id, bagian]));
  const judulHalaman = {
    beranda: "Beranda",
    tentang: "Tentang Saya",
    keahlian: "Keahlian",
    sertifikat: "Sertifikat",
    kontak: "Hubungi Saya"
  };

  function bukaHalaman(id, simpanRiwayat = true) {
    if (!halamanById.has(id)) return;

    halaman.forEach((bagian) => {
      const aktif = bagian.id === id;
      bagian.hidden = !aktif;
      bagian.classList.toggle("is-active", aktif);
      bagian.setAttribute("aria-hidden", String(!aktif));
    });

    document.querySelectorAll(".nav-links a[href^='#']").forEach((tautan) => {
      if (tautan.getAttribute("href") === `#${id}`) {
        tautan.setAttribute("aria-current", "page");
      } else {
        tautan.removeAttribute("aria-current");
      }
    });
    document.title = `${judulHalaman[id]} | ${data.nama}`;

    if (simpanRiwayat) history.pushState({ halaman: id }, "", `#${id}`);
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", (event) => {
    const tautan = event.target.closest("a[href^='#']");
    if (!tautan) return;

    const id = tautan.getAttribute("href").slice(1);
    if (!halamanById.has(id)) return;

    event.preventDefault();
    bukaHalaman(id);
  });

  window.addEventListener("popstate", () => {
    bukaHalaman(location.hash.slice(1) || "beranda", false);
  });

  const halamanAwal = location.hash.slice(1);
  if (halamanById.has(halamanAwal)) {
    bukaHalaman(halamanAwal, false);
  } else {
    bukaHalaman("beranda", false);
    history.replaceState({ halaman: "beranda" }, "", "#beranda");
  }
}

// Mulai tampilkan isi website.
tampilkanProfil();
siapkanTabKeahlian();
siapkanSertifikat();
siapkanMenuPonsel();
siapkanNavigasiHalaman();
