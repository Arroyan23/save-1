var hari = ["senin", undefined, "rabu", "kamis"];

namaPenumpang = "royan";

for (var i = 0; i < hari.length; i++) {
  if (hari[i] == undefined) {
    console.log("nama mahasiswa berhasil dimasukkan ke undefined");
    hari[i] = namaPenumpang;
  }
}

console.log(hari.join(" - "));
