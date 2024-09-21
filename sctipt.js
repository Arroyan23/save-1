// 1. pop up box

// var angka = prompt("Hello World!");

// alert("angka yang anda masukkan adalah : " + angka);

// 2. penggunaan looping while

// contoh menghentikan loop dengan user

// var ulang = true;

// while (ulang) {
//   console.log("Apakah ingin diulangi lagi");
//   ulang = confirm("Apakah ingin diulangi");
// }

// increment / decrement

// var nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//   console.log("Hello world! " + nilaiAwal);
//   nilaiAwal++;
// }

//  excersice

// var angkot = 1;
// var pertanyaan = true;

// while (angkot <= 10) {
//   console.log("Angkot ke-" + angkot);
//   while (pertanyaan) {
//     console.log("Pertanyaan");
//     pertanyaan = confirm("Apakah angkot ke - " + angkot);
//   }
//   angkot++;
// }

// pengulangan tabel pada javascript
// tabel penulusuran pada javascript

// var jmlAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= jmlAngkot) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   noAngkot++;
// }

// pengulangan for

// var i = 1;
// for (i = 1; i <= 10; i++) {
//   console.log("ini adalah angka ke " + i);
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 9;
// var noAwal = 1;
// // jika kondisi angkot beberapa ada yang rusak

// while (noAwal <= angkotBeroperasi) {
//   console.log("angkot ke - " + noAwal + " Beroperasi dengan baik");
//   noAwal++;
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot ke - " + noAngkot + " Rusak");
// }

// PENGKONDISIAN DALAM JAVASCRIPT

// var jmlAngkot = 10;
// var angkotBeroperasi = prompt("Berapa angkot yang beroperasi");

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot ke - " + noAngkot + " Beroperasi dengan baik");
//   } else {
//     console.log("Angkot ke - " + noAngkot + " Rusak");
//   }
// }

// mempelajari switch dalam javascript

var angka = parseInt(prompt("Masukkan angka : "));

// if (angka === 1) {
//   alert("Anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else {
//   alert("Anda memasukkan angka yang lain");
// }

// jika menggunakan switch

switch (angka) {
  case 1:
    alert("anda memasukkan angka 1");
    break;
  case 2:
    alert("anda memasukkan angka 2");
    break;
  case 3:
    alert("anda memasukkan angka 3");
    break;
  default:
    alert("angka yang anda masukkan salah");
    break;
}

// switch tidak bisa memasukkan pengkondisian comparison
