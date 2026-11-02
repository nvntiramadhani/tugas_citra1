# LAPORAN PRAKTIK GIT PUSH DAN GIT PULL

Nama: Novianti Ramadhani <br>
NIM: 24260011 <br>
Program Studi: Teknik Informatika <br>
Semester: 5 <br>



## 1. Struktur File Proyek

File yang digunakan dalam praktik ini terdiri dari:

- `index.html` : Berfungsi sebagai struktur utama halaman website.
- `style.css` : Digunakan untuk mengatur tampilan dan desain website.
- `script.js` : Digunakan untuk menambahkan fungsi interaktif pada website.
- `README.md` : Berisi dokumentasi dan laporan praktik Git Push dan Git Pull.

## 2. Tata Cara Melakukan Git Push

Git Push merupakan perintah untuk mengirimkan perubahan dari repository lokal ke repository remote yang terdapat di GitHub.

Langkah-langkah melakukan Git Push adalah sebagai berikut.


### Langkah 1. Membuka Folder Proyek

Membuka folder proyek yang berisi file `index.html`, `style.css`, dan `script.js` menggunakan Visual Studio Code.

### Langkah 2. Membuka Terminal

Membuka terminal melalui menu Terminal > New Terminal pada Visual Studio Code.

### Langkah 3. Inisialisasi Repository

Menjalankan perintah berikut untuk membuat repository Git lokal.

```bash
git init
```

### Langkah 4. Menambahkan File

Menambahkan seluruh file proyek ke staging area menggunakan perintah:

```bash
git add .
```

### Langkah 5. Melakukan Commit

Menyimpan perubahan ke dalam riwayat Git dengan perintah:

```bash
git commit -m "Membuat website profil pribadi"
```

### Langkah 6. Menghubungkan Repository Lokal dengan GitHub

Menghubungkan repository lokal dengan repository GitHub menggunakan perintah:

```bash
git remote add origin https://github.com/nvntiramadhani/tugas_citra1.git
```

### Langkah 7. Mengatur Branch

Mengatur nama branch utama menjadi main.

```bash
git branch -M main
```

### Langkah 8. Melakukan Push

Mengirim seluruh file proyek ke repository GitHub menggunakan perintah:

```bash
git push -u origin main
```

Setelah proses selesai, file proyek akan tersimpan di repository GitHub.

## 3. Tata Cara Melakukan Git Pull

Git Pull merupakan perintah yang digunakan untuk mengambil perubahan terbaru dari repository remote (GitHub) ke repository lokal (komputer).

Langkah-langkah melakukan Git Pull adalah sebagai berikut.

### Langkah 1. Membuka Folder Repository

Membuka kembali folder proyek yang sudah terhubung dengan repository GitHub melalui Visual Studio Code.

### Langkah 2. Membuka Terminal

Membuka terminal pada folder proyek.

### Langkah 3. Memeriksa Status Repository

Memastikan kondisi repository lokal menggunakan perintah:

```bash
git status
```

### Langkah 4. Melakukan Git Pull

Mengambil perubahan terbaru dari repository GitHub menggunakan perintah:

```bash
git pull origin main
```

### Langkah 5. Memeriksa Hasil Pull

Memeriksa kembali file yang terdapat di folder lokal untuk memastikan perubahan terbaru dari GitHub telah berhasil diterapkan.

## 4. Perbedaan Git Push dan Git Pull

| Git Push | Git Pull |
|---|---|
| Mengirim perubahan dari lokal ke remote. | Mengambil perubahan dari remote ke lokal. |
| Digunakan untuk memperbarui repository GitHub. | Digunakan untuk memperbarui repository lokal. |
| Perintah: `git push` | Perintah: `git pull` |

## 5. Kesimpulan

Berdasarkan praktik yang telah dilakukan, Git dan GitHub memiliki peran penting dalam pengelolaan proyek digital. Git Push digunakan untuk mengirimkan file atau perubahan dari komputer lokal ke repository GitHub, sedangkan Git Pull digunakan untuk mengambil perubahan terbaru dari repository GitHub ke komputer lokal.

Melalui praktik ini, dapat dipahami bahwa penggunaan Git Push dan Git Pull membantu proses penyimpanan, pembaruan, serta pengelolaan file proyek secara lebih terstruktur dan efisien.
