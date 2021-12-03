// Jawaban Soal No 1
function shortVar() {
  var daftarHewan = [
    "2. Komodo",
    "5. Buaya",
    "3. Cicak",
    "4. Ular",
    "1. Tokek",
  ];
  daftarHewan.sort();
  console.log("Soal No 1");
  for (var i = 0; i < daftarHewan.length; i++) {
    console.log(daftarHewan[i]);
  }
}

shortVar();

// Jawaban Soal No 2
// Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming

function introduce(data) {
  var print =
    "Nama saya " +
    data.name +
    ",umur saya " +
    data.age +
    " tahun,alamat saya di " +
    data.address +
    ", dan saya punya hobby yaitu " +
    data.hobby;
  return print;
}
var data = {
  name: "John",
  age: 30,
  address: "Jalan Pelesiran",
  hobby: "Gaming",
};
var perkenenalan = introduce(data);
console.log("Soal Nomor 2");
console.log(perkenenalan);

// Jawaban Soal No 3
const vokal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function hitungHitungvookal(str) {
  let count = 0;

  for (let letter of str) {
    if (vokal.includes(letter)) {
      count++;
    }
  }
  return count;
}

var hitung_1 = hitungHitungvookal("Mustofa");
var hitung_2 = hitungHitungvookal("Robbani");
console.log("Soal No 3");
console.log(hitung_1, hitung_2);

// Jawaban Soal No 4
function hitung(integer) {
  let jml = integer * 2 - 2;
  return jml;
}
console.log("Soal No 4");
console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(5)); // 8
