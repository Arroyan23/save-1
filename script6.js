// jika function parameternya dikosongkan
// ganti dengan looping sehingga akan melooping sesuai dengan isi dari parameternya
// menggunakan arguments.length

function pertambahanBebas() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

alert("Penjumlahannya adalah : " + pertambahanBebas(3, 3, 3, 3, 3, 3, 3, 3));
