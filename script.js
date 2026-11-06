// MENGATUR NAVIGASI HALAMAN
const menu = document.querySelectorAll(".menu");
const halaman = document.querySelectorAll(".halaman");

function tampilkanHalaman() {

    let tujuan = window.location.hash.substring(1);

    if (tujuan === "") {
        tujuan = "home";
    }

    let ditemukan = false;

    halaman.forEach(function(item) {
        if (item.id === tujuan) {
            item.classList.add("aktif");
            ditemukan = true;
        } else {
            item.classList.remove("aktif");
        }
    });

    // Jika alamat tidak ditemukan, tampilkan Home
    if (!ditemukan) {
        document.getElementById("home").classList.add("aktif");
        tujuan = "home";
    }

    // Mengatur menu yang sedang aktif
    menu.forEach(function(item) {
        if (item.getAttribute("href") === "#" + tujuan) {
            item.classList.add("aktif");
        } else {
            item.classList.remove("aktif");
        }
    });
}

// Jalankan navigasi ketika alamat halaman berubah
window.addEventListener("hashchange", tampilkanHalaman);

// Jalankan saat website pertama dibuka
tampilkanHalaman();


// MENAMPILKAN TAHUN OTOMATIS
document.getElementById("tahun").textContent = new Date().getFullYear();


// FORMULIR PEMESANAN
document.getElementById("form-pemesanan").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Terima kasih! Simulasi pemesanan berhasil dikirim.");

    this.reset();

});


// FORMULIR KONTAK
document.getElementById("form-kontak").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Terima kasih! Pesan kamu berhasil dikirim.");

    this.reset();

});