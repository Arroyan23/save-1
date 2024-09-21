// 1. function declaration vs function expression

// function declaration

function sebutNama(nama) {
  //bagian identifier nya harus
  alert("Halo " + nama);
}

// function expression

var tampilPesan = function (nama) {
  alert("Halo " + nama);
};

// function declaration
// 1. lebih fleksibel dapat ditulis dimanapun
// 2. lebih mudah dipahami oleh pemula

// function expression
// 1. harus didefinisikan terlebih dahulu sebelum dipanggil
// 2. lebih powerfull
//      - sebagai closure
//      - sebagai argumen untuk function yang lain
// biasanya untuk javascript yang sudah lebih complex

// secara umum function dec dan ex memiliki kesamaan
// namun function expression biasanya untuk javascript yang lebih komplex
// latihan menggunakan function menggunakan function expression
