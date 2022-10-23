var kullanicilar = [
    { email: "engindemirog@gmail.com", sifre: "12345" },
    { email: "derindemirog@gmail.com", sifre: "12345" },
  ];
  
  var twitler = [
    { email: "engindemirog@gmail.com", twit: "Bugün hava çok güzel." },
    { email: "engindemirog@gmail.com", twit: "Bugün hava çok güzel 2." },
    { email: "derindemirog@gmail.com", twit: "Kapıyı ben açacağım." },
  ];
  
  var email = prompt("Email?");
  var sifre = prompt("Sifre?");
  
  function giris() {
    if (
      (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
      (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
    ) {
      console.log(twitler);
    }
    else{
      console.log("Kullanici adi veya sifre hatali");
    }
  }
  
  giris(email,sifre)  