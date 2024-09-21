// ada yang menjadikan array sebagai tipe data dan juga bisa menjadi

// pencatatan data

var hari = ["senin", "selasa", "rabu"];

// mempermudah pengelolaan nilai
// dalam pengelolaan dan pencarian

console.log(hari.length);

// bisa memasukkan function ke dalam array
// bisa berbeda beda tipe data yang dimasukkan kedalam array
// array multi dimension array di dalam array

// - menambah isi daripada array

var komputer = ["prox", "plax"];

komputer[2] = "royan";
komputer[3] = "selasa";

console.log(komputer[2]);

// - menghapus isi dari array

var arr = ["ahmad", "syawqi", "Arroyan", "bagaimana", "dengan"];

// masih menggunakan cara manual
// arr[1] = undefined;

console.log(arr);

// menampilkan isi array dengan benar
// menggunakan looping

for (var i = 0; i < arr.length; i++) {
  console.log("kosa kata ke - " + (i + 1) + " adalah " + arr[i]);
}

// gunakan method untuk array yang disediakan oleh javascript
// 1. length
// 2. join (menggabungkan seluruh isi array dan menggantinya menjadi string)
// 3. push, pop, shift, unshift
// 4. splice, spice
// 5. foreach, map
// 6. sort
// 7. filter & find

// coba di bagian join

var bulan = ["januari", "februari", "maret"];

console.log(bulan.join(" - "));
// join(separatornya/pemisah)

// push mendorong suatu data baru dibagian variabel yang terakhir

bulan.push("april", "mei");
// push dapat memasukkan langsng banyak ke array
console.log(bulan);

// pop (menghapus elemen array ang terakhir)
// pop harus satu satu
bulan.pop();
console.log(bulan);

// unshift & shift
// memodifikasi elemen pertama pada array

bulan.unshift("desember");
console.log(bulan.join(" - "));

// mereka benar benar menghilangkan elemen dari array tersebu

// funsgi slice dan spice

// menggunakan splice

bulan.splice(2, 0, "arroyan");

console.log(bulan.join(" - "));

// menggunakan slice

var namaPlanet = ["bumi", "venus", "jupiter", "doddy"];
// slice menghasilkan array yang baru
var namaPlanet2 = namaPlanet.slice(1, 3);

console.log(namaPlanet2.join(" - "));

// foreach dan map
// biasa untuk looping pada array

var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}
// agar lebih simple gunakan for each

angka.forEach(function (e) {
  console.log(e);
});

// penggunaan map

var angka2 = angka.map(function (e) {
  return e * 2;
});

// perbedaannya adalah map dapat membuat array baru
// map bisa mengembalikan suatu variabel / array

console.log(angka2.join(" - "));

// penggunaan sort

var angkaBerantakan = [1, 4, 2, 3, 5, 9, 7, 8];
// akan mengurutkan angka yang berantakan
// namun yang di urutkan adalah karakter pertamanya
angkaBerantakan.sort();
console.log(angka.join(" - "));

// 7. penggunaan filter
var angkaYangBaru = [1, 2, 5, 6, 78, 9, 7, 5, 4];
var angkaYangBaru = angka.filter(function (x) {
  return x > 5;
});

console.log(angkaYangBaru.join(" - "));

// jika menggunakan find maka hanya dapat menemukan 1 nilai

var temukanAngka = angkaYangBaru.find(function (x) {
  return x > 5;
});

console.log(temukanAngka);

var coba1 = ["royan", "syawqi", "arroyan"];
var coba2 = ["bulan", "april"];

console.log(coba1.join(" - "));
