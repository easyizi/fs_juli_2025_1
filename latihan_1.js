/**
 * Latihan 1
 * STORE sisi WITH ANY NUMBER
 * 
 * SET volume TO sisi MUL sisi MUL sisi 
 * PRINT luas
 */

/**
 * Latihan 2
 * STORE r WITH ANY NUMBER
 * 
 * SET luas TO phi MUL r MUL r
 * PRINT luas
 * 
 */

let sisi = 5
let volume = sisi*sisi*sisi
console.log(volume)


let phi = 3.14
let r = 7
let luas = phi * r * r
console.log(luas)

console.log("DIBAWAH INI LATIHAN VARIABEL")


// VARIABEL TIPE DATA
/**
 * 
 * 
 * 
 * 
 */


/**
 * STUDY CASE 1
 * Tentukan algoritma dan pseucode untuk menghitung LP balok
 * 
 * // ALGORITMA 
 * 1. buat panjang dengan p
 * 2. buat lebar dengan l
 * 3. buat tinggi dengan t
 * 4. buat luas permukaan 
 * 5. cetak luas permukaan
 * 
 * // PSEUCODE
 * 1. STORE p with ANY NUMBER
 * 2. STORE l with ANY NUMBER
 * 3. STORE t with ANY NUMBER
 * 
 */

let p = 5
let l = 2
let t = 4
let LP = 2 * [(p+l)+(p+t)+(l+t)]
console.log(LP)

/**
 * STUDY CASE 2
 * Tentukan algoritma dan pseucode untuk menghitung massa jenis suatu benda
 * 
 * // ALGORITMA 
 * 1. buat massa jenis dengan p
 * 2. buat volume dengan V
 * 3. buat massa jenis
 * 4. cetak massa jenis 
 * 
 * 
 * // PSEUCODE
 * 1. STORE p with ANY NUMBER
 * 2. STORE V with ANY NUMBER
 * 
 * 
 */

let pI = 10;
let V = 3;
let MS = pI / V;
console.log(MS.toFixed(2));

/**
 * STUDY CASE 3
 * Tentukan algoritma dan pseucode untuk menghitung luas permukaan tabung
 * 
 * // ALGORITMA 
 * 1. buat phi dengan phii
 * 2. buat jari2 dengan r
 * 3. buat tinggi dengan ti
 * 4. buat Luas Permukaan tabung dengan LPT
 * 5. Cetak Luas permukaan 
 * 
 * 
 * // PSEUCODE
 * 1. STORE p with ANY NUMBER
 * 2. STORE V with ANY NUMBER
 * 
 * 
 */

let phii = 10;
let ri = 4;
let ti = 5;
LuasPermukaanTbg = 2 * phii * ri * (ri+ti);
console.log(LuasPermukaanTbg)