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
 * STUDY CASE
 * 
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



/**
 * 
 * STUDY CASE 3
 * Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut;
 * 
 * Interval                                  Status
 * ------------------------------------------------
 * 
 * Lebih dari 100                            Expert
 * antara 70 dan 100                         Pro
 * antara 50 dan 70                          Normal
 * antara 30 dan 50                          Basic
 * kurang dari 30                            Beginner
 * 
 * Proses klasifikasi tersebut adalah jika power dari sebuah karakter 75 
 * maka resultnya : "character is pro"
 * 
 */

let power = 109
if(power > 100) {
    console.log ("character is expert");
} else if (power >=70 && power <=100) {
    console.log ("character is pro");
}
  else if (power >=50 && power <=70) {
    console.log ("character is Normal");
}
  else if (power >=30 && power <=50) {
    console.log ("character is Basic");
}
  else if (power <= 30) {
    console.log ("character is Beginner");
}



/**
 * STUDY CASE 4
 * 
 * Ada 3 jenis access : public, protected, private
 * Jika access kosong, maka tampilan "input access"
 * 
 * Access public, jika level dibawah 5 maka tampilkan "public dibawah 5"
 * Acess public, jika level diatas 5 maka tampilkan "public diatas 5"
 * Acess public, jika level sama dengan 5 maka tampilkan "public five"
 * 
 * Access private, jika level dibawah 5 maka tampilkan "private dibawah 5"
 * Acess private, jika level diatas 5 maka tampilkan "private diatas 5"
 * Acess private, jika level sama dengan 5 maka tampilkan "private five"
 * 
 * 
 * Access protected, jika level dibawah 5 maka tampilkan "protected dibawah 5"
 * Acess protected, jika level diatas 5 maka tampilkan "protected diatas 5"
 * Acess protected, jika level sama dengan 5 maka tampilkan "protected five"
 * 
 * jika acess salah, tampilkan "Acess is not defined"
 * 
 * 
 * buat coding menggunakan nested conditional : switch case dan if else
 * 
 * 
 * pseucode
 * 
 * 
 * 
 */

let access = "public"
let level = 8

switch (access){
    case "public" :
        if(level <5){
            console.log ("public dibawah 5");
        } else if (level > 5){
            console.log ("public diatas 5");
        } else if (level = 5){
            console.log ("public five");
        }
        break;
    case "private":
        if(level <5){
            console.log ("private dibawah 5");
        } else if (level > 5){
            console.log ("private diatas 5");
        } else if (level = 5){
            console.log ("private five");
        }
        break;
    case "protected":
        if(level <5){
            console.log ("protected dibawah 5");
        } else if (level > 5){
            console.log ("protected diatas 5");
        } else if (level = 5){
            console.log ("protected five");
        }
        break;

    default:
        console.log ("Acess is not defined");
}



/**
 * STUDY CASE 5
 * 
 * sebuah layanan IT Service yang bergerak di bidang perbaikan laptop dan gadget
 * memberikan layanan khusus berdasarkan dr status pembeli.
 * 
 * Pembeli merupakan penduduk WNA, dan memiliki ketentuan berikut :
 *   1. lama tinggal di Indonesia 3 tahun kurang, maka tidak dapat diskon
 *   2. lama tinggal di Indonesia 3 hingga 5 tahun, maka dapat diskon. jika memiliki syarat :
 *      - usia dibawah 21 tahun, maka dapat diskon 10%
 *      - usia diatas 21 tahun, maka dapat diskon 5%
 *   3. lama tinggal di Indonesia diatas 5 tahun. jika memiliki syarat:
 *      - usia dibawah 21 tahun, maka diskon 5%
 *      - usia diatas 21 tahun, maka diskon 2,5%
 * 
 * Pembeli merupakan penduduk WNI, dan memiliki ketentuan berikut :
 *  1. WNI tinggal di daerah Barat Indonesia, mendapatkan diskon 10%,
 *  2. WNI tinggal di daerah Tengah Indonesia, mendapatkan diskon 15%,
 *  3. WNI tinggal di daerah Timur Indonesia, mendapatkan diskon 17.5%,
 * 
 * Contoh perhitungan :
 * Warga merupakan WNA, lama tinggal 3 tahun dan umur 27 tahun. Total pembelian Rp. 100.000
 * Maka mendapatkan diskon 5%, sehingga total yang dibayar Rp. 95.000
 * 
 * 
 * 
 */

let status = "WNA";
let period = 3;
let age = 27;
let location = "barat";
let price = 100000;
let discount = 0;


switch (status){
    case "WNA":
    if (period < 3) {
        price = price;
    } else if (period >= 3 && period <= 5){
        if (age < 21) {
            price = price * 0.9;
        } else if (age > 21) {
            price = price * 0.95;
        }
    } else if (period > 5 ) {
        if (age < 21) {
            price = price * 0.95;
        } else if (age > 21) {
            price = price * 0.97;
        }

    }
    break;
    case "WNI":
    if (location === "barat"){
        price = price * 0.9;
    } else if (location === "Tengah"){
        price = price * 0.85;
    } else if (location === "Timur"){
        price = price * 0.825;
    }
    break;
}

console.log (price);



