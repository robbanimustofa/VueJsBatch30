// Soal No 2
var readBooksPromise = require("./promise.js");
var books1 = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

let waktu1 = 5000;
const baca1 = (time, books1, i) => {
  if (i < books1.length) {
    readBooksPromise(time, books1[i], (sisa) => {
      if (sisa > 0) {
        i += 1;
        baca(sisa, books1, i);
      }
    });
  }
};

baca1(waktu1, books1, 0);
