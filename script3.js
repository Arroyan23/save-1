// membuat bintang dengan pengulangan

// MEMBUAT ULANG VERSI LOOPING TOLONG TIDAK DIBANTU AI

var bintang = "";

for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    bintang += "*";
  }

  bintang += "\n";
}

console.log(bintang);
