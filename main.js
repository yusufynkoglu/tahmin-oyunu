// console.log("baglandi")

function valorant() {
    const chars = [
      "Brimstone",
      "Jett",
      "Phoenix",
      "Sage",
      "Sova",
      "Breach",
      "Cypher",
      "Omen",
      "Raze",
      "Reyna",
      "Viper",
      "Killjoy",
      "Skye",
      "Yoru",
      "Astra",
      "KAY/O",
      "Chamber",
      "Neon",
      "Fade",
      "Harbor",
      "Gekko",
      "Deadlock",
      "Iso"
    ];
  
    // input'ların içeriğini almak için value
    const tahminKarakter = document.getElementById("char").value;
    // div'lerin içeriğini almak için innerhtml
    const puan = document.getElementById("puan").innerHTML;
  
    const tahminEdilecekSayi = Math.floor(Math.random() * 23);
  
    const karakter = chars[tahminEdilecekSayi]
  
    
    
    if (tahminKarakter == karakter) {
      alert("Tahmin Başarılı !!!")
    }else{
      alert("Hata! Doğru cevap : " + karakter)
    }
    
  
  }
  
  function tahmin() {
    // bizim tahminimizin alındığı alan
    const tahminSayisi = document.getElementById("number").value;
  
    // rastgele sayıların oluştuğu alan
    const tahminEdilecekSayi = Math.floor(Math.random() * 11);
  
    if (tahminSayisi == tahminEdilecekSayi) {
      alert("Tahmin Başarılı");
    } else {
      alert("Tahmin Başarısız. Doğru tahmin : " + tahminEdilecekSayi);
    }
  }