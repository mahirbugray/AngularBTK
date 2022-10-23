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
  
  function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
  }
  function giris() {
    if (kullaniciVarmi(email,sifre)) {
      console.log(twitler);
    }
    else{
      console.log("Kullanici adi veya sifre hatali");
    }
  }
  
  giris(email,sifre)  