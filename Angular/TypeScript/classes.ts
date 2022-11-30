class Ev {
  _odaSayisi: number;
  _pencereSayisi: number;
  _kat: number;
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this._odaSayisi = odaSayisi;
    this._pencereSayisi = pencereSayisi;
    this._kat = kat;
  }
  yemekYe() {
    console.log(this._kat + " katlı evde " + "Yemek yenildi.");
  }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev._kat);

class Kisi {
  kaydet() {
    console.log("Kişi kaydedildi");
  }
}

class Musteri extends Kisi {
  satisYap() {
    console.log("Satış yapıldı.");
  }
}

class Personel extends Kisi {
  maasOde() {
    console.log("Maaş ödendi");
  }
}

let musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();
