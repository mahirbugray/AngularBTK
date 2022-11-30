function selamVer(isim: string) {
  return "Merhaba" + " " + isim;
}

let mesaj = selamVer("Mahir");

console.log(mesaj);

let sayi: number;
sayi = 10;
sayi = 10.4;

let sehir: string;
sehir = "Ankara";
sehir = "İstanbul";

let dogruMu: boolean = false;
dogruMu = true;
dogruMu = false;

let sayilar: number[] = [1, 2, 3];
let sayilar2: Array<number> = [1, 2, 3];

let dizi: [number, string] = [2, "Ankara"];

enum Renk {
  Kirmizi = 1,
  Siyah,
  Mavi,
}
let renk: Renk = Renk.Kirmizi;

let deger: any = "Ankara";
deger = 2;
deger = {};

let deger2: void = undefined;

function selamVer2(): void {
  console.log("Merhaba");
}

//undefine null

let yas: number;
yas = 10;

class Musteri {}
