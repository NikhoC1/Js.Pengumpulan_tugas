// zodiak (4,12);
// function zodiak(bln, tgl) {
//     let hasil = "salah";
//     if (bln > 0 && bln < 13 && tgl < 31) {
//         hasil = "Zodiak Tidak Ada";
//         if (bln == 1 && tgl > 0 && tgl < 19) {
//             hasil = "Capricorn";
//             if (tgl > 20 && tgl < 31) {
//                 hasil = "Aquarius";
//             }
//         }
//         if (bln == 2 && tgl > 0 && tgl < 18) {
//             hasil = "Aquarius";
//             if (tgl > 19 && tgl < 28) {
//                 hasil = "Pisces";
//                }
//         }
            
//         if (bln == 3 && tgl > 0 && tgl < 20) {
//             hasil = "Pisces"
//             if (tgl > 21 && tgl < 31) {
//                 hasil = "Aries";
//             }
//         }
//         if (bln == 4 && tgl > 0 && tgl < 19) {
//             hasil = "Aries";
//             if (tgl > 20 && tgl < 30) {
//                 hasil == "Taurus";
//             }
//         }
//         if (bln == 5 && tgl > 0 && tgl < 20) {
//             hasil = "Taurus";
//             if (tgl > 21 && tgl < 31) {
//                 hasil == "Gemini";
//             }
//         }
//         if (bln == 6 && tgl > 0 && tgl < 21) {
//             hasil = "Gemini";
//             if (tgl > 22 && tgl < 30) {
//                 hasil == "Cancer";
//             }
//         }
//         if (bln == 7 && tgl > 0 && tgl < 22) {
//             hasil = "Cancer";
//             if (tgl > 23 && tgl < 31) {
//                 hasil == "Leo";
//             }
//         }
//         if (bln == 8 && tgl > 0 && tgl < 23) {
//             hasil = "Leo";
//             if (tgl > 24 && tgl < 30) {
//                 hasil == "Virgo";
//             }
//         }
//         if (bln == 9 && tgl > 0 && tgl < 23) {
//             hasil = "Virgo";
//             if (tgl > 24 && tgl < 31) {
//                 hasil == "Libra";
//             }
//         }
//         if (bln == 10 && tgl > 0 && tgl < 22) {
//             hasil = "Libra";
//             if (tgl > 23 && tgl < 30) {
//                 hasil == "Scorpio";
//             }
//         }
//         if (bln == 11 && tgl > 0 && tgl < 23) {
//             hasil = "Scorpio";
//             if (tgl > 24 && tgl < 31) {
//                 hasil == "Sagitarius";
//             }
//         }
//         if (bln == 12 && tgl > 0 && tgl < 22) {
//             hasil = "Sagitarius";
//             if (tgl > 23 && tgl < 30) {
//                 hasil == "Capricorn";
//             }
//         }

//     }
//     console.log (hasil);
// }

// NILAI

// let nilai = 59;
// let kkm = 60;
// let benar = "Lulus";
// let Tidak = "Tidak Lulus";
// let batas = 100;
// let bawah = 0;
// let alert = "Nilai Tidak Valid";
// if (nilai <= batas && nilai >= bawah) {
//     if (nilai >= kkm) {
//         console.log (benar);
//     } else {
//         console.log (Tidak);
//     }
// } else {
//     console.log (alert);
// }

function pembilang(nilai){
    nilai = Math.abs(nilai);
    var simpanNilaiBagi=0;
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var temp="";
 
    if (nilai < 12) {
        temp = " "+huruf[nilai];
    }
    else if (nilai <20) {
        temp = pembilang(nilai - 10) + " Belas";
    }
    else if (nilai < 100) {
        simpanNilaiBagi = Math.floor(nilai/10);
        temp = pembilang(simpanNilaiBagi)+" Puluh"+ pembilang(nilai % 10);
    }
    else if (nilai < 200) {
        temp = " Seratus" + pembilang(nilai - 100);
    }
    else if (nilai < 1000) {
        simpanNilaiBagi = Math.floor(nilai/100);
        temp = pembilang(simpanNilaiBagi) + " Ratus" + pembilang(nilai % 100);
    }
     else if (nilai < 2000) {
        temp = " Seribu" + pembilang(nilai - 1000);
    }
    return temp;
}
 
console.log(pembilang(500));

    function prima(angka) {
        let temp = [], result = [];
        for (let i=2; i<=angka; i++) {
          if (!temp[i]) {
            result.push(i);
          }
        }
        return result;
      }
      
      console.log(prima(2));