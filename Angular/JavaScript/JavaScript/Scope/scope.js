var sayi = 10;
var sehir = "Ankara";

sayi = 11;
sehir = "İstanbul";

var sehir = "Adana";

let il = "Ankara";
il = "Bursa";
//let il ="İzmir" bu kullanımda bize kızar let de değişiklik yapılamaz.

function mesajVer() {
  var isim = "Engin";
  console.log(sehir);
}

// console.log(sayi);
// console.log(sehir);
// console.log(il);

//mesajVer();
//console.log(isim); fonksiyon içinde tanımlanırsa dışarıdan ulaşılamaz.

// for(let i=1;i<10;i++){

// }

// console.log(i);

const soyad = "Demiroğ"; //const değişmeyen sabit

//soyad = "Demir";

//console.log(soyad);

const sehirler = ["Ankara", "İstanbul"];
sehirler.push("İzmir"); //Bir dizide veya objede yani referans tipli olaylarda bunu yapmamıza izin verir

//sehirler = ["Bursa","Mardin"]; bunu yapmamıza izin vermez.

console.log(sehirler);
