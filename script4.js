// membuat suit jawa
var pertanyaan = true;
// menangkap pilihan player

while (pertanyaan) {
  var player = prompt("Pilih : gajah, semut, orang");

  // membangkitkan fungsi random dari javascript

  var comp = Math.random(); // bilangan random yang dibangkitkan dari javascriptnya

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // menentukan rules

  var hasil = "";

  if (player == comp) {
    hasil = "seri";
  } else if (player == "gajah") {
    if (comp == "orang") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else if (player == "orang") {
    // menggunakan operator ternary
    hasil = comp == "gajah" ? "menang" : "kalah";
  } else if (player == "semut") {
    hasil = comp == "gajah" ? "menang" : "kalah";
  } else {
    alert("Pilihan anda salah! Pilih gajah, semut, orang.");
  }

  // tampilkan hasilnya
  alert("Computer memilih " + comp);
  alert(hasil);

  pertanyaan = confirm("apakah anda ingin mengulangi program ini? ");
}
