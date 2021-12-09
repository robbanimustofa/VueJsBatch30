// Soal No 2
var readBooksPromise = require("./promise.js");
var books1 = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

let waktu1 = 5000;
// const baca1 = (time, books1, i) => {
//   readBooksPromise(time, books1[i], () => {
// if (time > 0) {
//   i += 1;
//   baca1(time, books1, i);
// }
//   });
// };
// baca1(waktu1, books1, 0);

const createPost = (book) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      books1.push(book);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

const getPosts = (time, book, i) => {
  console.log(book);
  // readBooksPromise(time, book, () => {
  //   if (time > 0) {
  //     i += 1;
  //     console.log(i);
  //     getPosts(time, i);
  //   }
  // });
  // setTimeout(() => {
  //   books1.forEach((book) => {
  //     // console.log(book);
  //   });
  // }, 1000);
};
// getPosts(5000, books1);
createPost()
  .then(getPosts(5000, books1, 0))
  .catch((error) => console.log(error));
