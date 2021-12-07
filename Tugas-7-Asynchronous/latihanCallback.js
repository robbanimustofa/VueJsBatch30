const posts = [
  {
    title: "Post one",
    body: "This is post one",
  },
  {
    title: "Post two",
    body: "This is post two",
  },
];

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
    console.log("kedua");
  }, 2000);
};

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000);
};

const newPost = {
  title: "Post three",
  body: "This is post three",
};

createPost(newPost, getPosts);
getPosts();

// readBooks(waktu, books[0], (sisawaktu) => {
//   readBooks(sisawaktu, books[1], (sisawaktu) => {
//     readBooks(sisawaktu, books[2], (sisawaktu) => {
//       readBooks(sisawaktu, books[3], (sisawaktu) => {
//         console.log(sisawaktu);
//       });
//     });
//   });
// });

// books.forEach((element) =>
//   readBooks(10000, element, (callbackFn) => {
//     console.log(callbackFn);
//   })
// );
// for (let index = 0; index < books.length; index++) {
//   readBooks(waktu, books[index], (sisaWaktu) => {
//     waktu = sisaWaktu;
//   });
// }
// books.forEach((book) => {
//   readBooks(waktu, book, (sisaWaktu) => {
//     waktu = sisaWaktu;
//   });
//   //   console.log(sisaWaktu);
// });

// readBooks(1000, createPost(books), getPosts());
