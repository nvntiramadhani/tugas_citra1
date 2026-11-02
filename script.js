
// Menampilkan ucapan selamat datang
function sapaPengunjung() {
    alert("Halo! Selamat datang di website profil Novianti Ramadhani. Terima kasih sudah berkunjung!");
}

// Menampilkan tanggal dan waktu
function tampilkanWaktu() {
    const sekarang = new Date();

    const tanggal = sekarang.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const waktu = sekarang.toLocaleTimeString("id-ID");

    document.getElementById("tanggal").innerHTML =
        "Tanggal: " + tanggal;

    document.getElementById("waktu").innerHTML =
        "Waktu: " + waktu;
}

// Menjalankan fungsi saat halaman dibuka
window.onload = function() {
    tampilkanWaktu();

    // Memperbarui waktu setiap detik
    setInterval(tampilkanWaktu, 1000);
};

