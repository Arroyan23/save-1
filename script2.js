var item = prompt(
  "masukkan nama makanan / minuman : \n (cth : nasi, daging, susu)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("anda memakan makanan sehat");
    break;
  default:
    alert("makanan / minuman yang anda masukkan salah");
    break;
}

// switch hanya bisa memasukkan value ke dalam case tersebut
