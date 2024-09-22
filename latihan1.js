// 1. buat dulu mulai eksekusi awal dengan pertanyaan

// 2. buatkan arraynya

var mahasiswaBaru = ["bobi", undefined, "favian"];
var mahasiswaDo = ["favian"];

// 3. buat function untuk menambah mahasiswa

function tambahMahasiswa(nama) {
  mahasiswaTerdata = nama;

  // pengkondisian jika kosong

  for (var i = 0; i < mahasiswaBaru.length; i++) {
    if (mahasiswaBaru[i] == undefined) {
      mahasiswaBaru[i] = mahasiswaTerdata;
      break;
    } else if (mahasiswaBaru[i] == mahasiswaTerdata) {
      alert("Data mahasiswa yang anda masukkan telah ada");
      break;
    } else {
      alert("kalo jalan berarti error");
      mahasiswaBaru.push("error detected");
    }

    alert("Mahasiswa yang bernama : " + nama + " Berhasil ditambahkan.");
    //   jika terdeteksi undefined maka undefined itu akan di isi oleh mahasiswa baru yang dicantumkan
  }
}
// fungsi untuk membaca seluruh data mahasiswa

function tampilkanDataMahasiswa() {
  mahasiswaBaru.forEach(function (e, i) {
    console.log("Nomor Induk Mahasiswa " + (i + 1) + "\nnamanya adalah : " + e);
  });
}

// 4. buat function untuk mengurangi mahasiswa
// dengan meng undefined kan urutan nomor mahasiswa

function mahasiswaKeluar(a) {
  mahasiswaBaru[a - 1] = undefined;
}
// apakah ingin mengeluarkan mahasiswa?

// tampilkan seluruh data mahasiswa pada konsol

var recursion = true;

while (recursion) {
  var recursion2 = true;

  while (recursion2) {
    var tanyaTambah = prompt("Berikan nama mahasiswanya : ");

    tambahMahasiswa(tanyaTambah);

    recursion2 = confirm(
      "Apakah anda ingin menambahkan mahasiswa baru lagi : "
    );
  }

  tampilkanDataMahasiswa();

  var recursion3 = true;

  while (recursion3) {
    var tanyaUser = confirm("Apakah anda ingin mengeluarkan mahasiswa?");

    if (tanyaUser == true) {
      var namaMahasiswaKeluar = parseInt(
        prompt("Sebutkan nomor mahasiswa yang ingin dikeluarkan : ")
      );
      mahasiswaKeluar(namaMahasiswaKeluar);
      // tampilkan data mahasiswanya
      tampilkanDataMahasiswa();
    }

    recursion3 = confirm("Apakah anda ingin mengeluarkan mahasiswa lagi?");
  }

  var recursion = confirm(
    "Apakah anda ingin mengulangi lagi? dengan penambahan dan pengurangan mahasiswa?"
  );
}
// 5. buat pengkondisian if else untuk pemilihan pada prompt

// 6. jika if nya mengarah untuk melihat data buat for each untuk yang ditampilkan pada data
