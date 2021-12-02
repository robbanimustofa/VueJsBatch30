// Jawaban No 1
// function nilai(nilai) {
//   if (nilai >= 85) {
//     console.log("indeksnya A");
//   } else if (nilai >= 75 && nilai < 85) {
//     console.log("indeksnya B");
//   } else if (nilai >= 65 && nilai < 75) {
//     console.log("indeksnya C");
//   } else if (nilai >= 55 && nilai < 65) {
//     console.log("indeksnya D");
//   } else {
//     console.log("indeksnya E");
//   }
// }

// nilai(99);

// Jawaban No 2
// var tanggal = 26;
// var bulan = 8;
// var tahun = 1994;

// hasil "26 Agustus 1994"

// var grade = "A";

// switch (bulan) {
//   case 8:
//     console.log(tanggal + " Agustus " + tahun);
//     break;

//   case 9:
//     console.log(tanggal + " September " + tahun);
//     break;
// }

// Soal Nomor 3

// function countingStars(star) {
//   let countStars = "";
//   for (var i = 0; i <= star; i++) {
//     for (var j = 0; j < i; j++) {
//       countStars += "*";
//     }
//     countStars += "\n";
//   }
//   console.log(countStars);
// }

// countingStars(4);

// Soal Nomor 4
// Output untuk m = 5

// 1 - I love programming
// 2 - I love Javascript
// 3 - I love VueJS
// ===
// 4 - I love programming
// 5 - I love Javascript

var m = 7;
let stringText = "";
let varText = "";
var output;
for (var i = 0; i < m; i++) {
  if (i % 2 === 1) {
    stringText = "I love Javascript";
    varText = "";
    output = i % 2;
  } else if (i % 3 === 2) {
    stringText = "I love Vue";
    varText = "=====";
    output = i % 3;
  } else if (i % 1 === 0) {
    stringText = "I love Programming";
    varText = "";
    output = i % 3;
  }
  console.log(output);
  console.log("i " + i);
  console.log(stringText);
  console.log(varText);
}
