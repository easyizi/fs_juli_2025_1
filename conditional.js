// let angka = 2;
// if (angka <2){
//     console.log("Angka dibawah 2");
// }else if (angka > 2){
//     console.log("Angka diatas 2");
// }else {
//     console.log("Angka 2")
// }


/**
 * 
 * SOAL
 * 
 * Jika umur sudah atau lebih dari 17, 
 * maka cetaklah “Bisa bikin KTP”.
 * Jika tidak maka cetak “Belum bisa bikin KTP” */

let angka = 17;
if (angka = 18) {
    console.log ("Bisa Bikin KTP");
} else {
    console.log ("Belum bisa bikin KTP");
}

/**
 * 
 * SOAL 
 * Bikinlah kode untuk memilih minuman. 
 * Minuman yang tersedia adalah kopi dan 
 * teh dengan switch case
 * 
 */

// let minuman = "kopi";
// switch (minuman) {
//     case 'kopi':
//         console.log ('saya pilih kopi');
//         break;
//     case 'teh':
//         console.log ('saya pilih teh');
//         break;
// }



/** KONDISI BERSARANG
 * 
 * Buatlah sebuah aplikasi tiket masuk sebuah wahana 
 * dengan ketentuan sebagai berikut:
 * Jika anak berumur di bawah 17 tahun,
 * Jika tinggi anak di bawah 150cm, maka cetak 
 * “Tidak boleh masuk”
 * Jika tinggi anak di atas sama dengan 150cm maka cetak “Boleh masuk”
 * 
 */

let umur = 17;
let tinggi = 155;

if (umur < 17 ) {
    if ( tinggi < 150 ) {
        console.log ("Tidak Boleh Masuk")
    }
    
} else {
    console.log ("Boleh Masuk")
}


/**
 * /**
 * * Study Case 1
 *
 * Cek apakah sebuah bilangan genap atau ganjil
 * Tentukan algoritma, pseudocode dan coding
 * 
 * 
 * ALGORITMA
 * 1. Ambil input bilangan dari pengguna
 * 2. cek apakah bilangan habis dibagi 2 (bilangan % 2 == 0)
 * 3. jika habis maka genap
 * 4. jika habis maka ganjil
 * 5. tentukan angkanya
 * 6. cetak hasilnya
 * 
 * PSEUCODE
 * 
 * BEGIN
 *   STORE number WITH ANY NUMBER
 * 
 * If number MOD 2 EQUAL 0 THEN
 *   PRINT "GENAP"
 * ELSE IF number MOD 2 EQUAL 1 THEN
 *  PRINT "GANJIL"
 * 
 * ENDIF
 * END
 * 
 */

let bilangan = 11;
if (bilangan % 2 == 0) {
    console.log ("bilangan genap")
} else {
    console.log ("bilangan ganjil")
}


/**
 * 
 * Sebuah vending machine dapat menginput sebuah string dan memberikan sebuah minuman
 * berikut listnya :
 * 1. "Sweet tea"
 * 2. "Plain Tea"
 * 3. "Boba"
 * 4. "Milk Coffe"
 * 5. "Choco Ice"
 * 
 * Jika pembeli memilih "sweet tea", maka result : "you choose Sweet Tea, thanks"
 * 
 * (gunakan switch case)
 * 
 * ALGORITMA
 * 1. buat variabel objek dengan nama minuman sesuai soal diatas
 * 2. cek pembeli mau milih minuman apa
 * 3. cetak hasilnya
 * 
 * PSEUCODE
 * 1. 
 * 
 * 
 * 
 */

let minuman = "Sweet tea";
switch (minuman){
    case 'Sweet tea':
        console.log ("You choose Sweet tea, thanks");
        break;
    case 'Plain Tea':
        console.log ("You choose Plain Tea, thanks");
        break;
    case 'Boba':
        console.log ("You choose Boba, thanks");
        break;
    case 'Milk Coffe':
        console.log ("You choose Milk Coffe, thanks");
        break;
    case 'Choco Ice':
        console.log ("You choose Choco Ice, thanks");
        break;
}






