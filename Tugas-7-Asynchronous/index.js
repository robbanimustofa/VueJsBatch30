// Soal No 1
var readBooks = require("./callback.js");
var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

let waktu = 10000;
const baca = (time, books, i) => {
  if (i < books.length) {
    readBooks(time, books[i], (sisa) => {
      if (sisa > 0) {
        i += 1;
        baca(sisa, books, i);
      }
    });
  }
};

baca(waktu, books, 0);
