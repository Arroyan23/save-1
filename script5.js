// 1. function declaration

function menjumlahkanKeduaBilangan(a, b) {
  var total;
  total = a + b;
  return total;
}

var hasil = menjumlahkanKeduaBilangan(2, 3);

alert(hasil);

// function expression

var jumlahKeduaBilangan = function (a, b) {
  var total;
  total = a + b;
  return total;
};

var hasil = jumlahKeduaBilangan(2, 3);

alert(hasil);

// menjumlahkan kedua kubus

// berikan while untuk pengulangan

var pertanyaan = true;

while (pertanyaan) {
  function jumlahKeduaKubus(a, b) {
    var hitungVolume1 = a * a * a;
    var hitungVolume2 = b * b * b;

    // jumlahkan kedua kubusnya
    var totalKeduaKubus;
    totalKeduaKubus = hitungVolume1 + hitungVolume2;

    return totalKeduaKubus;
  }

  var volumeSatu = parseInt(prompt("Masukkan volume pertamanya : "));
  var volumeDua = parseInt(prompt("Masukkan volume kubus kedua : "));

  var panggilFunction = jumlahKeduaKubus(volumeSatu, volumeDua);

  alert(
    "Hasil dari penjumlahan kedua kubus tersebut adalah : " + panggilFunction
  );

  var pertanyaan = confirm("Apakah anda ingin mengulang kembali programnya?");
}
