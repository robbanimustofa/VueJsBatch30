// Quiz 1 Soal No 1
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = " Saya Iqbal ";
var kalimat_3 = " Saya Muhammad Iqbal Mubarok ";
function jumlah_kata(kata) {
  var raw = kata.trim();
  var countwords = raw.split(" ").length;
  console.log(countwords);
}
jumlah_kata(kalimat_1); // 6
jumlah_kata(kalimat_2); // 2
jumlah_kata(kalimat_3); // 4

// Quiz 1 Soal No 2
var tanggal = 4;
var bulan = 2;
var tahun = 2021;
function nextDate(tgl, bln, thn) {
  var strTgl = tgl.toString();
  var strThn = thn.toString();
  switch (bln) {
    case 1:
      console.log(strTgl + " Januari " + strThn);
      break;

    case 2:
      console.log(strTgl + " Februari " + strThn);
      break;
    case 3:
      console.log(strTgl + " Maret " + strThn);
      break;

    case 4:
      console.log(strTgl + " April " + strThn);
      break;
    case 5:
      console.log(strTgl + " Mei " + strThn);
      break;

    case 6:
      console.log(strTgl + " Juni " + strThn);
      break;
    case 7:
      console.log(strTgl + " Juli " + strThn);
      break;

    case 8:
      console.log(strTgl + " Agustus " + strThn);
      break;
    case 9:
      console.log(strTgl + " September " + strThn);
      break;

    case 10:
      console.log(strTgl + " Oktober " + strThn);
      break;
    case 11:
      console.log(strTgl + " November " + strThn);
      break;

    case 12:
      console.log(strTgl + " Desember " + strThn);
      break;
  }
}

nextDate(tanggal, bulan, tahun);
