var pertama = "saya sangat senang belajar javascript";
var kedua = "belajar javascript itu keren";

// saya senang belajar JAVASCRIPT

var hasil = pertama.substring(0, 4);
var hasil2 = pertama.substr(12, 6);
var hasil3 = kedua.substring(0, 7);
var hasil4 = kedua.substr(8, 10).toUpperCase;

var output = hasil + hasil2 + hasil3 + hasil4;

var kataPertama = "10";
var kataKedua = "20";
var kataKetiga = "4";
var kataKeempat = "6";

var angkaPertama = parseInt(kataPertama);
var kataKedua = parseInt(kataKedua);
var kataKetiga = parseInt(kataKetiga);
var kataKeempat = parseInt(kataKeempat);

var output1 = (angkaPertama - angkaKetiga) * (angkaKeempat - angkaKedua);
