var penumpang = [];
let namaPenumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    //untuk menghitung isi panjangnya data
    penumpang.push(namaPenumpang); //untuk menambahkan data dalam array
    return penumpang; // untuk mengulang isi function
  } else {
    for (i = 0; i < penumpang.length; i++) {
      //untuk mencari ulang isi panjang data yang sudah di isi.

      if (penumpang[i] == undefined) {
        //jika isi penumpang kosong atau undefined
        penumpang[i] = namaPenumpang; // untuk menambahkan isi kursi yang kosong
        return penumpang; // mengembalikan isi array & keluar dari function
      } else if (namaPenumpang == penumpang[i]) {
        //untuk mencari data yang sama yang telah diinput datanya
        console.log(`${namaPenumpang} sudah ada di dalam angkot`); //memberikan informasi data yang sama /sudah ada
        return; // keluar dari function
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang); // untuk menambah isi data dalam array
        return penumpang; // mengembalikan isi array & keluar dari function
      }
      if (tambahPenumpang.length == 2) {
        penumpang.push(namaPenumpang); // untuk menambah isi data dalam array
        console.log("Penumpang sudah penuh");
        return; // keluar dari function
      }
    }
  }
};

// cara menambah penumpang
// tambahPenumpang ('Bima', penumpang);
// tambahPenumpang ('isra', penumpang);

// cara menghapus penumpang
// penumpang.pop ("Bima", penumpang);
