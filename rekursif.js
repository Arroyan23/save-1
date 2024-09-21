// rekursif
// pemanggilan function terhadap diri sendiri
// seperti looping yang tidak ada akhirnya

// for (var nilaiAwal = 10; nilaiAwal > 0; nilaiAwal--) {
//   console.log(nilaiAwal);
// }
// yang di atas perumpamaan jika memakai for

function tampilAngka(n) {
  if (n === 0) return;
  console.log(n);
  return tampilAngka(n - 1);
}

console.log(tampilAngka(10));

// rekursif biasanya untuk operasi matematika faktorial dsb

function faktorial(n) {
  if (n === 0) return;
  return n * faktorial(n - 1);
}

faktorial(5);
console.log(faktorial(5));
// var total = parseInt(prompt("Masukkan angka faktorial : "));
// var hasil = faktorial(total);

// alert("Hasil faktorial dari bilangan tersebut adalah : " + hasil);
