var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer: " Ahsen Ümit Çelik",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "4",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "HD İskender",
        adres: "İyaş AVM",
        puan: "3",
        imkanlar: ["öğün", "kahvaltı", "yemek"],
        mesafe: "5km",
      },  
     {
        ad: "Mackbear",
        adres: "Şehir Merkezi",
        puan: "5",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "4km",
      },
      {
        ad: "Çay ve Ötesi",
        adres: "Centrum Garden",
        puan: "2",
        imkanlar: ["kahve", "çay", "kek"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyaş AVM",
        puan: "4",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer: " Ahsen Ümit Çelik",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Ahsen Ümit Çelik",
          puan: "3",
          tarih: "3 Aralık 2020",
          yorumMetni: "Kahveler Normal",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};