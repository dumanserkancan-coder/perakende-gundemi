/*
  HAFTALIK PERAKENDE GÜNDEMİ — HABER DOSYASI
  Her hafta sadece bu dosya değişir. Her sayı Pazartesi–Pazar haftasını kapsar, o haftanın
  pazar günü yayımlanır ve pazartesi üst yönetimle paylaşılır.

  İÇERİK İLKELERİ
  - Sadece o haftanın haberleri (Pazartesi–Pazar).
  - Haftanın en iyi 5–6 haberi önem sırasıyla dizilir; başlıklar en fazla 8–10 kelime; Türkiye ve dünya arasında yaklaşık denge gözetilir (katı kota yok).
  - Güçlü bir haber varsa "İşgücü ve Mağaza" ve "İç Giyim, Çorap ve Mayo" haberlerine öncelik verilir;
    güçlü haber yoksa zorla eklenmez.
  - Her haberin "onemi" (Neden önemli?) satırı, Türkiye'deki moda perakendesi açısından yazılır.
    Bu satır yorumdur; sitede haber metninden ayrı ve etiketli gösterilir. Şirkete özel bilgi yazılmaz
    (site herkese açıktır).

  ARŞİV NASIL ÇALIŞIR?
  - Tüm sayılar aşağıdaki "sayilar" listesinde durur. Yeni sayıyı listenin EN ÜSTÜNE ekle,
    eski sayıları SİLME. Site açılınca en üstteki (en yeni) sayıyı gösterir.
  - Eski sayılar sayfanın altındaki "Arşiv" bölümünde listelenir; arama ve konu filtresi tüm
    sayılarda çalışır. Her sayının kendi adresi vardır: …/#sayi-1, …/#sayi-2
  - "siradaki": henüz yayımlanmamış sayının bilgisi; arşivde "Hazırlanıyor" olarak görünür.

  Bir sayının bölümleri (bu sırayla görünür):
    birDakika    Bu hafta 1 dakikada: en önemli 3 gelişme + "anlam" satırı; ref = açılacak haber
    ana          Haftanın ana gelişmesi: tek konu, büyük görsel                       (HABER)
    haberler     Haftalık gündem: haftanın en iyi 5–6 gelişmesi, önem sırasıyla;
                 gundemNotu = başlık altındaki kısa not (örnek "3 Türkiye, 2 dünya")   (HABER)
                 kisa: sektörel gözlemdeki düğmede görünen kısa ad
    takipte      Takipte: önceki sayılardaki bir konuda bu hafta gerçekten yeni bir gelişme varsa (en fazla 3).
                 { baslik, kategori, tarih, onceki: { no: 1, id: "h1" }, simdi: "bu haftaki gelişme",
                   kaynaklar: [...], en: {...} }. "Ne yazmıştık" satırı önceki haberin başlığından otomatik gelir.
                 Yeni gelişme yoksa bu bölüm hiç yazılmaz ve sitede görünmez.
    sinyal       Sektörel gözlem: haberlerin birlikte gösterdiği eğilim              (YORUM)
                 dayanak: dayandığı haberlerin id'leri ("ana" ve "veri" de olabilir)
    veri         Sayılarla gündem: tek önemli veri; olcek = çubukların tam boyu (%),
                 vurgu: true = öne çıkan çubuk, eksi değerler de gösterilebilir      (VERİ)
    etkinlikler  Yaklaşan etkinlikler ve önemli tarihler                            (TAKVİM)

  Konu anahtarları: "tr" Türkiye Pazarı ve Tüketici · "moda" Küresel Moda Perakendesi
                    "tek" Perakendede AI ve Teknoloji · "eticaret" E-ticaret ve Tüketici Trendleri
                    "isgucu" İşgücü ve Mağaza · "icgiyim" İç Giyim, Çorap ve Mayo
  Kaynak tipi (tip): "resmi" = şirketin / kurumun kendi duyurusu, "ikinci" = bağımsız haber kaynağı
  Tarihler (baslangic, bitis): YIL-AY-GÜN biçiminde; tarihi geçen etkinlik kendiliğinden gizlenir.
  Kesin tarihi açıklanmamış etkinlik: tahmini: true ve tahminiMetin ("Aralık'ın ilk haftası (tahmini)") yazılır;
  sitede geri sayım yerine "Tahmini tarih" etiketi çıkar, takvime ekleme düğmesi gösterilmez.
  kapak.gorsel: Görsel dosyasının adı; dosyayı index.html ile aynı yere yükle (her sayıya ayrı ad).

  yeni: İki sayı arasında çıkan gerçekten büyük bir gelişme için ("Yeni" şeridi). Boşsa görünmez.
*/
/*
  İKİ DİL (TÜRKÇE / ENGLISH)
  - Sitede sağ üstte TR / EN düğmesi var. İngilizce bağlantı: adresin sonuna ?lang=en eklenir.
  - Her nesnenin Türkçe alanları olduğu gibi kalır; İngilizcesi aynı nesnenin içindeki "en" alanına yazılır.
    Örnek: { baslik: "Türkçe başlık", ozet: "...", en: { baslik: "English headline", ozet: "..." } }
  - "en" içinde olmayan alan için Türkçesi gösterilir. Rakamlar ve bağlantılar iki dilde aynıdır.
  - Tarih alanlarında (tarih, donem, yayin, sonraki) "en" yoksa ay ve gün adları otomatik çevrilir.
*/
window.BULTEN = {
  ad: "Haftalık Perakende Gündemi",
  aciklama: "Türkiye ve dünya perakendesinde bu haftanın öne çıkan gelişmeleri.",
  kisaAd: "Perakende Gündemi",
  altBaslik: "Haftalık Perakende Gelişmeleri",
  hazirlayan: "Serkan Can Duman",
  kategoriler: {
    tr: { ad: "Türkiye Pazarı ve Tüketici", ikon: "store", renk: "turuncu", en: { ad: "Türkiye Market & Consumer" } },
    moda: { ad: "Küresel Moda Perakendesi", ikon: "hanger", renk: "pembe", en: { ad: "Global Fashion Retail" } },
    tek: { ad: "Perakendede AI ve Teknoloji", ikon: "ai-net", renk: "mor", en: { ad: "AI & Technology in Retail" } },
    eticaret: { ad: "E-ticaret ve Tüketici Trendleri", ikon: "cart", renk: "mavi", en: { ad: "E-commerce & Consumer Trends" } },
    isgucu: { ad: "İşgücü ve Mağaza", ikon: "people", renk: "yesil", en: { ad: "Workforce & Stores" } },
    icgiyim: { ad: "İç Giyim, Çorap ve Mayo", ikon: "sock", renk: "erik", en: { ad: "Intimates, Hosiery & Swimwear" } }
  },
  yeni: [],
  siradaki: {
    no: 3,
    donem: "26 Ekim – 1 Kasım 2026",
    yayin: "1 Kasım Pazar",
    en: { donem: "26 October – 1 November 2026", yayin: "Sunday, 1 November" }
  },
  sayilar: [
    {
      no: 2,
      donem: "19–25 Ekim 2026",
      yayin: "25 Ekim 2026",
      sonraki: "1 Kasım Pazar",
      okuma: 6,
      gundemNotu: "2 Türkiye, 2 dünya",
      birDakika: [
        {
          baslik: "Tüketici güveni Ekim'de %7,7 düşüşle 84,8'e indi; Merkez Bankası politika faizini %37'den %36'ya indirdi; karar metninde iç talebin zayıf seyrettiği belirtildi.",
          anlam: "Kasım indirimleri ve yılbaşı sezonuna, tüketicinin bütçesine dair beklentisinin belirgin biçimde kötüleştiği bir ortamda giriliyor.",
          ref: "ana",
          en: {
            baslik: "Consumer confidence fell 7.7% to 84.8 in October; the Central Bank cut its policy rate from 37% to 36%, noting in its decision that domestic demand remains weak.",
            anlam: "The November sales and the year-end season begin at a time when consumers' expectations for their own budgets have worsened markedly."
          }
        },
        {
          baslik: "Ticaret Bakanlığı: Alışverişte müşteriyi hedefli reklam onayı vermeye zorlamak haksız ticari uygulama.",
          anlam: "Sorun olarak görülen izin istemek değil, iznin alışverişin şartı gibi sunulması; kasadaki onay akışları daha görünür hâle geliyor.",
          ref: "h1",
          en: {
            baslik: "Ministry of Trade: forcing shoppers to consent to targeted advertising is an unfair commercial practice.",
            anlam: "The issue is not asking for consent but presenting it as a condition of the purchase; consent flows at the checkout are coming under closer view."
          }
        },
        {
          baslik: "Reuters: Shein, ABD'deki FTC soruşturmasını 100 milyon dolarla kapatıyor; AB'de düşük değerli paketlere 1 Kasım'dan itibaren 2 euroluk ek ücret geliyor.",
          anlam: "Ultra hızlı modanın Avrupa'daki fiyat avantajı daralıyor; teslimat sözü de düzenleyicilerin denetlediği bir taahhüt.",
          ref: "h2",
          en: {
            baslik: "Reuters: Shein is settling a US FTC probe for $100 million; from 1 November the EU adds a €2 fee on low-value parcels.",
            anlam: "Ultra-fast fashion's price advantage in Europe is narrowing; delivery promises are also commitments that regulators check."
          }
        }
      ],
      ana: {
        id: "ana",
        kisa: "Tüketici güveni",
        kategori: "tr",
        tarih: "22 Ekim",
        tur: "Resmî veri ve karar",
        okumaSuresi: 2,
        baslik: "Tüketici güveni sert düştü, Merkez Bankası faizi indirdi",
        ozet: "TÜİK verilerine göre tüketici güven endeksi Ekim'de bir önceki aya göre %7,7 azalarak 91,9'dan 84,8'e geriledi; dört alt endeksin dördü de düştü. Aynı gün Merkez Bankası politika faizini 100 baz puan indirerek %37'den %36'ya çekti. Karar metninde, iktisadi faaliyet verilerinin iç talepteki zayıf seyrin devam ettiğini gösterdiği belirtildi.",
        onemi: "Tüketicinin hem bugünkü hem de gelecek 12 aydaki maddi durumuna dair beklentisi bir ayda belirgin biçimde kötüleşti; Merkez Bankası da iç talebin zayıf olduğunu açıkça yazdı. Kasım indirimleri ve yılbaşı dönemine girerken bu tablo, sezonun talep tarafında temkinli bir başlangıca işaret ediyor. Faiz indiriminin kredi ve taksitli harcamaya ne zaman ve ne ölçüde yansıyacağı ise açık bir soru.",
        bolumler: [
          {
            baslik: "Tüketici güveni (Ekim 2026, bir önceki aya göre)",
            maddeler: [
              "Tüketici güven endeksi: 84,8 (Eylül: 91,9; %7,7 düşüş)",
              "Hanenin mevcut maddi durumu: 68,3 (Eylül: 75,3; %9,3 düşüş)",
              "Gelecek 12 ayda hanenin maddi durum beklentisi: 86,4 (Eylül: 93,7; %7,7 düşüş)",
              "Gelecek 12 ayda genel ekonomik durum beklentisi: 81,7 (Eylül: 89,8; %9 düşüş)",
              "Gelecek 12 ayda dayanıklı tüketim mallarına harcama yapma düşüncesi: 102,7 (Eylül: 108,8; %5,6 düşüş)",
              "Endeks24'ün hesabına göre bu, Ağustos 2023'ten bu yana en sert aylık düşüş; endeks Ocak 2026'dan (83,7) bu yana en düşük seviyede."
            ]
          },
          {
            baslik: "Merkez Bankası kararı (22 Ekim)",
            maddeler: [
              "Politika faizi (bir hafta vadeli repo ihale faiz oranı): %37'den %36'ya",
              "Gecelik borç verme faizi %40'tan %39'a, gecelik borçlanma faizi %35,5'ten %34,5'e indi.",
              "Ocak'tan bu yana ilk faiz indirimi (Ocak'ta politika faizi %38'den %37'ye inmişti).",
              "Kurul, son enflasyon verilerinin ve öncü göstergelerin ana eğilimdeki gerilemeyi teyit ettiğini, yüksek enerji fiyatlarının ise enflasyon görünümü için yukarı yönlü risk oluşturmaya devam ettiğini belirtti.",
              "Sonraki adımların büyüklüğü ve zamanlaması toplantı bazlı ve ihtiyatlı bir yaklaşımla belirlenecek; bir sonraki karar 10 Aralık'ta."
            ]
          }
        ],
        not: "Tüketici güven endeksi: 100'ün altındaki değerler tüketicinin genel olarak kötümser olduğunu gösterir. Baz puan: Yüzde puanın yüzde biri; 100 baz puan 1 yüzde puana eşittir.",
        kapak: {
          gorsel: "kapak-sayi2.jpg",
          gorselAciklama: "Düşük bölgeye inen bir güven göstergesi, bir alışveriş çantası ve kısalan çubukların üzerinde aşağı yönlü bir ok",
          en: { gorselAciklama: "A confidence gauge dipping into the low zone, a shopping bag and a downward arrow over shrinking bars" }
        },
        kaynaklar: [
          {
            ad: "TCMB · Faiz kararı basın duyurusu (2026-45)",
            url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Duyurular/Basin/2026/DUY2026-45",
            tip: "resmi",
            en: { ad: "CBRT · Rate decision press release (2026-45)" }
          },
          {
            ad: "Medyascope · TÜİK tüketici güveni",
            url: "https://medyascope.tv/2026/10/22/tuketici-guveni-dokuz-ayin-en-dusuk-seviyesine-indi/",
            tip: "ikinci",
            en: { ad: "Medyascope · TurkStat consumer confidence" }
          },
          {
            ad: "Takvim · Alt endeksler",
            url: "https://www.takvim.com.tr/ekonomi/2026/10/22/tuketici-guven-endeksi-ekim-2026-verileri",
            tip: "ikinci",
            en: { ad: "Takvim · Sub-indices" }
          },
          {
            ad: "Endeks24 · Düşüşün karşılaştırması",
            url: "https://www.endeks24.com/tuketici-guven-endeksi-ekimde-848e-geriledi",
            tip: "ikinci",
            en: { ad: "Endeks24 · How the drop compares" }
          },
          {
            ad: "TRT Haber · Faiz kararı",
            url: "https://www.trthaber.com/haber/ekonomi/merkez-bankasi-faiz-kararini-acikladi-960891.html",
            tip: "ikinci",
            en: { ad: "TRT Haber · Rate decision" }
          }
        ],
        en: {
          kisa: "Consumer confidence",
          tarih: "22 Oct",
          tur: "Official data and decision",
          baslik: "Consumer confidence falls sharply; Central Bank cuts rates",
          ozet: "According to TurkStat, the consumer confidence index fell 7.7% month on month in October, from 91.9 to 84.8; all four sub-indices declined. On the same day the Central Bank cut its policy rate by 100 basis points, from 37% to 36%. The decision text said economic activity data show that the weak trend in domestic demand is continuing.",
          onemi: "Consumers' views of both their current financial situation and the next 12 months worsened markedly in a single month, and the Central Bank stated plainly that domestic demand is weak. Heading into the November sales and the year-end period, this points to a cautious start to the season on the demand side. When and how far the rate cut will feed through to credit and instalment spending remains an open question.",
          bolumler: [
            {
              baslik: "Consumer confidence (October 2026, month on month)",
              maddeler: [
                "Consumer confidence index: 84.8 (September: 91.9; down 7.7%)",
                "Household's current financial situation: 68.3 (September: 75.3; down 9.3%)",
                "Household financial expectations, next 12 months: 86.4 (September: 93.7; down 7.7%)",
                "General economic expectations, next 12 months: 81.7 (September: 89.8; down 9%)",
                "Intention to spend on durable goods, next 12 months: 102.7 (September: 108.8; down 5.6%)",
                "By Endeks24's calculation, this is the steepest monthly fall since August 2023; the index is at its lowest since January 2026 (83.7)."
              ]
            },
            {
              baslik: "Central Bank decision (22 Oct)",
              maddeler: [
                "Policy rate (one-week repo auction rate): from 37% to 36%",
                "The overnight lending rate fell from 40% to 39% and the overnight borrowing rate from 35.5% to 34.5%.",
                "The first rate cut since January (when the policy rate was cut from 38% to 37%).",
                "The Committee said recent inflation data and leading indicators confirm the decline in the underlying trend, while high energy prices continue to pose upside risks to the inflation outlook.",
                "The size and timing of further steps will be set meeting by meeting with a cautious approach; the next decision is on 10 Dec."
              ]
            }
          ],
          not: "Consumer confidence index: values below 100 indicate that consumers are generally pessimistic. Basis point: one hundredth of a percentage point; 100 basis points equal 1 percentage point."
        }
      },
      haberler: [
        {
          id: "h1",
          kisa: "Reklam onayı",
          kategori: "tr",
          tarih: "21 Ekim",
          tur: "Düzenleyici açıklama",
          baslik: "Bakanlık: Alışverişte reklam onayına zorlamak haksız uygulama",
          ozet: "Ticaret Bakanlığı Basın ve Halkla İlişkiler Müşavirliği, mağazada ya da internette alışveriş veya hizmet alımı sırasında tüketicinin hedefli reklam amacıyla onay vermeye zorlanmasının haksız ticari uygulama olduğunu açıkladı. Bakanlık, bu şekilde davranan işletmelerin Reklam Kurulu tarafından incelemeye alınacağını belirtti ve tüketicileri bu tür taleplere sessiz kalmamaya çağırdı.",
          ek: "Haberlere göre tüketiciler şikâyetlerini e-Reklam portalı, e-Devlet'teki \"Reklam ve Haksız Ticari Uygulama Şikâyeti\" hizmeti ya da CİMER üzerinden yapabiliyor. Ajans 344'ün haberine göre uyarı, SMS doğrulamasının tamamen yasaklandığı anlamına gelmiyor; sorun, reklam izninin alışverişin zorunlu bir adımı olarak sunulması. Haberlerde bir ceza tutarına yer verilmedi.",
          onemi: "Kasada telefon numarası ve ileti izni almak, moda perakendesinde sadakat programlarının ve müşteri iletişiminin yaygın bir parçası. Bakanlığın vurgusu izin istenmesine değil, iznin alışverişin şartı gibi sunulmasına. Bu ayrımın mağazadaki konuşmada ve kasa ekranındaki akışta nasıl karşılık bulduğu, bundan sonra daha görünür bir soru.",
          not: "Hedefli reklam: Kişinin bilgilerine ve alışveriş davranışına göre seçilerek gösterilen reklam. Haksız ticari uygulama: Tüketicinin ekonomik davranışını bozan, mevzuatta yasaklanan ticari uygulama.",
          kaynaklar: [
            {
              ad: "GZT · Bakanlık açıklaması",
              url: "https://www.gzt.com/gundem/magazalarda-sms-onayina-zorlanan-tuketiciler-dikkat-ticaret-bakanligi-noktayi-koydu-4271440",
              tip: "ikinci",
              en: { ad: "GZT · Ministry statement" }
            },
            {
              ad: "Ajans 344 · Şikâyet kanalları",
              url: "https://www.ajans344.com/genel/magazada-reklam-onayi-baskisina-bakanliktan-uyari/411002",
              tip: "ikinci",
              en: { ad: "Ajans 344 · Complaint channels" }
            }
          ],
          en: {
            kisa: "Ad consent",
            tarih: "21 Oct",
            tur: "Regulatory statement",
            baslik: "Ministry: forcing ad consent while shopping is an unfair practice",
            ozet: "The Ministry of Trade's Press and Public Relations Office said that forcing consumers to give consent for targeted advertising while shopping or buying a service, in store or online, is an unfair commercial practice. The ministry said businesses that do so will be reviewed by the Advertising Board and urged consumers not to stay silent when faced with such demands.",
            ek: "According to reports, consumers can file complaints through the e-Reklam portal, the \"Advertising and Unfair Commercial Practice Complaint\" service on e-Devlet, or CİMER. According to Ajans 344, the warning does not mean SMS verification is banned altogether; the problem is presenting advertising consent as a mandatory step of the purchase. The reports did not mention any fine amount.",
            onemi: "Collecting phone numbers and messaging consent at the checkout is a common part of loyalty programmes and customer communication in fashion retail. The ministry's emphasis is not on asking for consent but on presenting it as a condition of the purchase. How this distinction plays out in conversations at the till and in checkout-screen flows is now a more visible question.",
            not: "Targeted advertising: ads selected and shown based on a person's data and shopping behaviour. Unfair commercial practice: a commercial practice, prohibited by law, that distorts the consumer's economic behaviour."
          }
        },
        {
          id: "h2",
          kisa: "Shein",
          kategori: "eticaret",
          tarih: "23 Ekim",
          tur: "Düzenleyici gelişme",
          baslik: "Reuters: Shein, ABD soruşturmasını 100 milyon dolarla kapatıyor",
          ozet: "Reuters'ın konuya doğrudan bilgisi olan bir kaynağa dayandırdığı habere göre Shein, ABD Federal Ticaret Komisyonu'nun (FTC) teslimat gecikmeleri ve diğer müşteri şikâyetleri üzerine yürüttüğü soruşturmayı kapatmak için 100 milyon dolar ödemeyi kabul etti. Shein, Reuters'a FTC ile \"yapıcı bir sonuca\" ulaştığını söyledi; FTC yorum yapmadı.",
          ek: "Reuters'ın incelediği FTC kayıtlarına göre Ocak 2020–Haziran 2026 arasında toplam 11 milyon doları aşan alışverişlerle ilgili 12 binden fazla şikâyet yapıldı. Reuters'ın hesabına göre tutar, Shein'ın ikinci çeyrek kârının yaklaşık %44'üne denk geliyor. Reuters'a göre Shein hisseleri 1 Eylül'deki halka arz fiyatının %22 altında ve yatırımcıların odağında AB'nin düşük değerli paketlere getirdiği 3 euroluk vergi var. Avrupa Komisyonu'na göre AB, 1 Temmuz'dan beri değeri 150 euroya kadar olan gönderilerde ürün başına 3 euro gümrük vergisi uyguluyor; 1 Kasım'dan itibaren buna 2 euroluk Birlik işlem ücreti de ekleniyor.",
          onemi: "Reuters'a göre Shein, ABD'de ve ardından Avrupa'da gümrük muafiyetlerinin kalkmasıyla fiyatlarını artırdı; yani ultra hızlı modanın fiyat avantajı daralıyor. Avrupa'ya online satış yapan markalar açısından fiyat rekabetinin nasıl değişeceği izlenecek bir soru. ABD'deki uzlaşma ise teslimat sözünün de denetlenen bir taahhüt olduğunu hatırlatıyor.",
          not: "FTC: ABD'de tüketiciyi korumaktan ve rekabetten sorumlu federal kurum. Düşük değerli gönderi: AB'de değeri 150 euroya kadar olan gönderi.",
          kaynaklar: [
            {
              ad: "Investing.com (Reuters) · Shein-FTC uzlaşması",
              url: "https://www.investing.com/news/stock-market-news/exclusivefastfashion-group-shein-agrees-to-pay-100-million-to-settle-us-ftc-probe-4969789",
              tip: "ikinci",
              en: { ad: "Investing.com (Reuters) · Shein-FTC settlement" }
            },
            {
              ad: "Gulf Times (Reuters) · Şikâyet ve AB ücreti ayrıntıları",
              url: "https://www.gulf-times.com/article/736548/business/fast-fashion-group-shein-agrees-to-pay-100mn-to-settle-us-ftc-probe",
              tip: "ikinci",
              en: { ad: "Gulf Times (Reuters) · Complaint and EU fee details" }
            },
            {
              ad: "Avrupa Komisyonu · AB gümrük reformu ve düşük değerli gönderiler",
              url: "https://taxation-customs.ec.europa.eu/customs/eu-customs-reform_en",
              tip: "resmi",
              en: { ad: "European Commission · EU customs reform and low-value consignments" }
            }
          ],
          en: {
            kisa: "Shein",
            tarih: "23 Oct",
            tur: "Regulatory development",
            baslik: "Reuters: Shein to settle US probe for $100 million",
            ozet: "According to Reuters, citing a source with direct knowledge, Shein has agreed to pay $100 million to settle a US Federal Trade Commission (FTC) investigation into delivery delays and other customer complaints. Shein told Reuters it had \"reached a constructive outcome with the FTC\"; the FTC declined to comment.",
            ek: "According to FTC records reviewed by Reuters, more than 12,000 complaints were filed between January 2020 and June 2026 over purchases totalling more than $11 million. By Reuters' calculation, the amount equals about 44% of Shein's second-quarter profit. According to Reuters, Shein's shares are 22% below their 1 September listing price, with investors focused on the EU's €3 duty on low-value parcels. According to the European Commission, since 1 July the EU has applied a €3 customs duty per item on consignments worth up to €150; from 1 November a €2 Union handling fee is added.",
            onemi: "According to Reuters, Shein raised prices after customs exemptions were removed in the US and then in Europe; in other words, ultra-fast fashion's price advantage is narrowing. How price competition will shift for brands selling online into Europe is a question to watch. The US settlement is also a reminder that delivery promises are commitments that regulators check.",
            not: "FTC: the US federal agency responsible for consumer protection and competition. Low-value consignment: in the EU, a shipment worth up to €150."
          }
        },
        {
          id: "h3",
          kisa: "Hazır giyim istihdamı",
          kategori: "tr",
          tarih: "19 Ekim",
          tur: "Sektör raporu",
          baslik: "TGSD: Hazır giyimde kayıtlı istihdam 2022'den beri %29,7 azaldı",
          ozet: "Türkiye Giyim Sanayicileri Derneği'nin (TGSD) TÜİK, Merkez Bankası ve SGK verilerine dayanan Hazır Giyim ve Tekstil Katma Değer Raporu 2025'e göre, sektördeki kayıtlı istihdam Aralık 2022'den Temmuz 2026'ya 362.879 kişi (%29,7) azaldı; sigortalı çalışanı olan iş yeri sayısı 10.624 (%16,6) geriledi. Aynı dönemde imalat sanayisindeki kayıtlı istihdam kaybının %64'ü bu sektörden geldi.",
          ek: "Rapora göre sektör, 2025'te ortalama 897.671 kayıtlı çalışanla imalat sanayisinin en büyük işvereni oldu ve mal ticaretinde 15,8 milyar dolar net fazla verdi. Sektörde yaratılan katma değerin %62'si ücret ve personel giderlerine gidiyor (imalat ortalaması %49). TGSD Başkanı Toygar Narbay, hazır giyim ve tekstilin stratejik sektör ilan edilmesini istedi.",
          onemi: "Yurt içinde üretim yapan tedarikçi tabanı belirgin biçimde daralıyor ve sektörde yaratılan değerin büyük kısmı işçiliğe gidiyor. Bu tablo, yakın tedarikin sağladığı hız ve sipariş tekrarlama esnekliğinin önümüzdeki dönemde ne ölçüde korunabileceği sorusunu gündeme getiriyor.",
          not: "Katma değer: Üretim değerinden, üretimde kullanılan mal ve hizmetlerin değeri çıkarıldıktan sonra kalan tutar. Yakın tedarik: Ürünlerin satış pazarına yakın ülkelerde üretilmesi.",
          kaynaklar: [
            {
              ad: "Ticaret Gazetesi · TGSD raporu",
              url: "https://ticaretgazetesi.com.tr/2026/10/19/tgsd-baskani-toygar-narbay-hazir-giyim-ve-tekstil-stratejik-sektor-ilan-edilmeli/",
              tip: "ikinci",
              en: { ad: "Ticaret Gazetesi · TGSD report" }
            },
            {
              ad: "Ekonomim · TGSD raporu",
              url: "https://www.ekonomim.com/sektorler/tgsd-baskani-toygar-narbay-hazir-giyim-ve-tekstil-stratejik-sektor-ilan-edilmeli-haberi-925576",
              tip: "ikinci",
              en: { ad: "Ekonomim · TGSD report" }
            }
          ],
          en: {
            kisa: "Apparel jobs",
            tarih: "19 Oct",
            tur: "Industry report",
            baslik: "TGSD: registered apparel employment down 29.7% since Dec 2022",
            ozet: "According to the Turkish Clothing Manufacturers' Association's (TGSD) Apparel and Textile Value Added Report 2025, based on TurkStat, Central Bank and social security (SGK) data, registered employment in the sector fell by 362,879 people (29.7%) between December 2022 and July 2026, and the number of workplaces with insured employees fell by 10,624 (16.6%). Over the same period, the sector accounted for 64% of registered job losses in manufacturing.",
            ek: "According to the report, the sector was manufacturing's largest employer in 2025 with an average of 897,671 registered workers and posted a net surplus of $15.8 billion in goods trade. 62% of the value added in the sector goes to wages and staff costs (manufacturing average: 49%). TGSD President Toygar Narbay called for apparel and textiles to be declared a strategic sector.",
            onemi: "The domestic supplier base is shrinking markedly, and most of the value created in the sector goes to labour. This raises the question of how far the speed and repeat-order flexibility that near-sourcing provides can be preserved in the period ahead.",
            not: "Value added: the value of production minus the value of goods and services used in production. Near-sourcing: producing goods in countries close to the market where they are sold."
          }
        },
        {
          id: "h4",
          kisa: "Walmart AI ajanları",
          kategori: "tek",
          tarih: "21 Ekim",
          tur: "Şirket duyurusu",
          baslik: "Walmart, AI ajanlarına harcama limitiyle alışveriş izni veriyor",
          ozet: "Walmart, müşterilerin yapay zekâ ajanlarına kendi hesapları üzerinden alışveriş yetkisi vermesini sağlayacak \"Agent Profiles\" özelliğini duyurdu. Şirketin açıklamasına göre her ajan için ayrı bir profil oluşuyor; müşteri her ajana harcama limiti (örnek olarak 50, 100 veya 200 dolar) koyabiliyor ya da her alışverişte onay isteyebiliyor. Özelliğin önümüzdeki ay içinde kullanıma açılması planlanıyor.",
          ek: "Şirketin yeni kurallarına göre ajanların alışverişleri varsayılan olarak müşteri onayı gerektiriyor; Walmart limit içinde bile ek onay isteyebiliyor ve müşteri izinleri istediği an kapatabiliyor. Şirket, ajanların Walmart.com'daki fiyatların aynısını gördüğünü belirtti. Duyuruda, ajanların siteye tarayıcı üzerinden değil doğrudan bağlanmasını sağlayacak Walmart Agent Gateway altyapısının şirketler ve geliştiriciler için sınırlı beta olarak başlayacağı da açıklandı.",
          onemi: "Geçen sayıda yer alan Google'ın ortak sepetinin ardından bu hafta büyük bir perakendeci, ajanlara kendi kurallarıyla kapı açtı. Walmart örneğinde, ajanların hangi limitle ve hangi onay adımıyla alışveriş yapacağını perakendecinin kendisi belirliyor. Bu kuralların müşterinin güvenini ve satın alma kararını nasıl etkileyeceği açık bir soru.",
          not: "AI ajanı: Kullanıcı adına ürün arayan, karşılaştıran ve izin verilirse satın alma adımlarını tamamlayan yazılım asistanı. Beta: Yeni bir hizmetin sınırlı bir kullanıcı grubuyla denendiği ilk sürüm.",
          kaynaklar: [
            {
              ad: "Walmart · Resmî duyuru",
              url: "https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers",
              tip: "resmi",
              en: { ad: "Walmart · Official announcement" }
            },
            {
              ad: "Digital Commerce 360 · Walmart'ın ajan kuralları",
              url: "https://www.digitalcommerce360.com/2026/10/23/walmart-unveils-ai-agent-shopping-controls-spending-limits/amp/",
              tip: "ikinci",
              en: { ad: "Digital Commerce 360 · Walmart's agent rules" }
            }
          ],
          en: {
            kisa: "Walmart AI agents",
            tarih: "21 Oct",
            tur: "Company announcement",
            baslik: "Walmart lets AI agents shop within spending limits",
            ozet: "Walmart announced \"Agent Profiles\", which will let customers authorise AI agents to shop through their accounts. According to the company, each agent gets its own profile; customers can set a spending limit for each agent (for example $50, $100 or $200) or require approval for every purchase. The feature is planned to launch within the next month.",
            ek: "Under the company's new terms, agent purchases require customer approval by default; Walmart may ask for additional approval even within a limit, and customers can switch permissions off at any time. The company said agents see the same prices as on Walmart.com. The announcement also said Walmart Agent Gateway, which lets agents connect directly rather than navigating the website through a browser, will start as a limited beta for companies and developers.",
            onemi: "After Google's shared cart, covered in the last issue, a major retailer this week opened its doors to agents on its own terms. In Walmart's case, the retailer itself sets the limits and approval steps agents shop with. How these rules will affect customer trust and purchase decisions is an open question.",
            not: "AI agent: a software assistant that searches for and compares products on the user's behalf and, if permitted, completes the purchase steps. Beta: an early version of a new service tested with a limited group of users."
          }
        }
      ],
      takipte: [
        {
          baslik: "Asgari ücret: Bütçede vergi istisnası ödeneği %33,7 artıyor",
          kategori: "isgucu",
          tarih: "22–23 Ekim",
          onceki: { no: 1, id: "h1" },
          simdi: "A Haber'in bütçe verilerine dayanan haberine göre 2027 bütçesinde asgari ücret vergi istisnası desteği için ayrılan ödenek, 2026'daki 1,092 trilyon TL'den %33,7 artışla 1,460 trilyon TL'ye çıkıyor. Vergi uzmanı Ozan Bingöl bu veriden hareketle 2027 net asgari ücretinin 36.500 TL civarında olabileceğini söyledi; resmî rakam henüz yok.",
          kaynaklar: [
            {
              ad: "A Haber · Bütçedeki ödenek",
              url: "https://www.ahaber.com.tr/galeri/ekonomi/2027-asgari-ucret-zammi-icin-yeni-senaryo",
              tip: "ikinci",
              en: { ad: "A Haber · Budget allocation" }
            },
            {
              ad: "Karar · Ozan Bingöl'ün tahmini",
              url: "https://karar.com/ekonomi-haberleri/butce-rakamlari-uzerinden-2027-asgari-ucret-tahminini-acikladi-net-36-2080243",
              tip: "ikinci",
              en: { ad: "Karar · Ozan Bingöl's forecast" }
            }
          ],
          en: {
            baslik: "Minimum wage: budget allocation for tax exemption up 33.7%",
            tarih: "22–23 Oct",
            simdi: "According to A Haber, citing budget data, the 2027 budget allocation for the minimum wage tax exemption rises 33.7%, from ₺1.092 trillion in 2026 to ₺1.460 trillion. Based on this, tax expert Ozan Bingöl said the 2027 net minimum wage could be around ₺36,500; there is no official figure yet."
          }
        }
      ],
      sinyal: {
        baslik: "Güven, yeni rekabet alanı",
        metin: "Bu haftanın haberleri farklı yerlerden aynı konuya çıkıyor: güven. Tüketicinin ekonomiye ve kendi bütçesine güveni zayıflarken, düzenleyiciler müşterinin güvenini zedeleyen uygulamalara daha yakından bakıyor: Türkiye'de reklam onayına zorlamak haksız uygulama sayıldı, Reuters'a göre ABD'de Shein'a yönelik teslimat şikâyetleri bir uzlaşmayla kapanıyor. Yapay zekâ ajanlarıyla alışverişte de Walmart'ın modeli limit ve onay gibi güven mekanizmaları üzerine kuruluyor. Talebin zayıfladığı bir dönemde, verilen sözün tutulması (teslimat, iletişim izni, fiyat) müşteri ilişkisinde daha görünür bir unsur hâline geliyor.",
        once: { ad: "Alışılmış bakış", metin: "Güven, marka iletişiminin bir parçası." },
        sonra: { ad: "Bu haftanın gösterdiği", metin: "Güven; izin, teslimat ve ödeme süreçlerinde sınanan bir uygulama." },
        dayanak: ["ana", "h1", "h2", "h4"],
        en: {
          baslik: "Trust as a new arena of competition",
          metin: "This week's stories arrive at the same theme from different directions: trust. As consumers' confidence in the economy and their own budgets weakens, regulators are looking more closely at practices that erode customer trust: in Türkiye, forcing advertising consent was deemed an unfair practice, and in the US, according to Reuters, delivery complaints against Shein are being settled. In shopping with AI agents, too, Walmart's model is built on trust mechanisms such as limits and approvals. At a time of weakening demand, keeping promises (delivery, messaging consent, price) is becoming a more visible part of the customer relationship.",
          once: { ad: "The usual view", metin: "Trust is part of brand communication." },
          sonra: { ad: "What this week shows", metin: "Trust is a practice tested in consent, delivery and payment processes." }
        }
      },
      veri: {
        id: "veri",
        kisa: "Kartlı ödemeler",
        kategori: "tr",
        tarih: "23 Ekim",
        tur: "Sektör verisi",
        deger: "%35",
        baslik: "BKM: Kartlı ödemeler Eylül'de yıllık %35 arttı",
        metin: "Bankalararası Kart Merkezi (BKM) verilerine göre Eylül 2026'da kartlı ödemeler, geçen yılın aynı ayına göre %35 artarak 2.965,5 milyar TL'ye ulaştı. İşlem adedindeki yıllık artış %11 oldu. Aynı ay yıllık enflasyon %29,73'tü.",
        karsilastirma: [
          { etiket: "Temassız ödemeler (tutar)", deger: 43, en: { etiket: "Contactless payments (value)" } },
          { etiket: "Banka kartı ödemeleri (tutar)", deger: 39, en: { etiket: "Debit card payments (value)" } },
          { etiket: "Toplam kartlı ödeme (tutar)", deger: 35, vurgu: true, en: { etiket: "Total card payments (value)" } },
          { etiket: "İnternetten kartlı ödeme (tutar)", deger: 35, en: { etiket: "Online card payments (value)" } },
          { etiket: "Yıllık enflasyon (TÜFE)", deger: 29.73, en: { etiket: "Annual inflation (CPI)" } },
          { etiket: "Toplam işlem adedi", deger: 11, en: { etiket: "Total number of transactions" } }
        ],
        olcek: 50,
        orneklem: "Yıllık değişim (nominal), Eylül 2026 · BKM verisi 23 Ekim'de açıklandı; TÜFE: TÜİK, 5 Ekim",
        ozet: "BKM'nin Eylül 2026 verilerinden öne çıkanlar:",
        maddeler: [
          "Toplam kartlı ödeme: 2.965,5 milyar TL (Eylül 2025: 2.189,2 milyar TL), yıllık %35 artış.",
          "İşlem adedi: 1,95 milyar, yıllık %11 artış.",
          "İnternetten kartlı ödemeler: 901 milyar TL, yıllık %35 artış; toplam tutardaki payı %30.",
          "Temassız ödemeler: 1.024,5 milyar TL, yıllık %43 artış; adet bazında mağaza içi kartlı ödemelerin %81'i temassız yapıldı.",
          "Yıllık enflasyon Eylül'de %29,73 oldu (TÜİK, 5 Ekim). Kartlı ödeme tutarları nominaldir, yani fiyat etkisinden arındırılmamıştır; iki seri birebir karşılaştırılamaz."
        ],
        onemi: "Kartlı ödemelerdeki %35'lik nominal artış, %29,73'lük yıllık enflasyonun çok üzerinde değil; işlem adedindeki artış ise %11'de kalıyor. Bu, harcama tutarındaki büyümenin önemli bölümünün fiyattan geldiğine işaret ediyor. İnternetin toplam tutardaki payının %30'a ulaşması ve mağaza içi ödemelerin adet bazında beşte dördünün temassız yapılması da ödeme alışkanlıklarındaki değişimi gösteriyor.",
        not: "Nominal: Fiyat artışlarının etkisi çıkarılmamış, cari fiyatlarla hesaplanan tutar. Temassız ödeme: Kartın ya da telefonun POS cihazına yaklaştırılarak yapılan ödeme.",
        kaynaklar: [
          {
            ad: "FinTech İstanbul · BKM Eylül verileri",
            url: "https://fintechistanbul.org/2026/10/23/bkm-2026-yili-eylul-ayi-verilerini-acikladi/",
            tip: "ikinci",
            en: { ad: "FinTech İstanbul · BKM September data" }
          },
          {
            ad: "YatırımX · BKM Eylül verileri",
            url: "https://www.yatirimx.com.tr/ekonomi/bkm-eylul-verileri-aciklandi-kartli-odemelerde-296-trilyon-tl-rekor/27087",
            tip: "ikinci",
            en: { ad: "YatırımX · BKM September data" }
          },
          {
            ad: "Medyascope · TÜİK Eylül enflasyonu",
            url: "https://medyascope.tv/2026/10/05/eylulde-ayinda-enflasyon-tuik-yuzde-2973-enag-yuzde-4661-dedi/",
            tip: "ikinci",
            en: { ad: "Medyascope · TurkStat September inflation" }
          }
        ],
        en: {
          kisa: "Card payments",
          tarih: "23 Oct",
          tur: "Industry data",
          deger: "35%",
          baslik: "BKM: card payments up 35% year on year in September",
          metin: "According to Interbank Card Center (BKM) data, card payments rose 35% year on year in September 2026 to ₺2,965.5 billion. The number of transactions rose 11% year on year. Annual inflation was 29.73% in the same month.",
          orneklem: "Annual change (nominal), September 2026 · BKM data published 23 Oct; CPI: TurkStat, 5 Oct",
          ozet: "Highlights from BKM's September 2026 data:",
          maddeler: [
            "Total card payments: ₺2,965.5 billion (September 2025: ₺2,189.2 billion), up 35% year on year.",
            "Number of transactions: 1.95 billion, up 11% year on year.",
            "Online card payments: ₺901 billion, up 35% year on year; 30% of the total value.",
            "Contactless payments: ₺1,024.5 billion, up 43% year on year; by number of transactions, 81% of in-store card payments were contactless.",
            "Annual inflation was 29.73% in September (TurkStat, 5 Oct). Card payment values are nominal, meaning they are not adjusted for price effects; the two series are not directly comparable."
          ],
          onemi: "The 35% nominal rise in card payments is not far above annual inflation of 29.73%, while the number of transactions rose just 11%. This suggests that much of the growth in spending value is coming from prices. Online reaching 30% of total value and four in five in-store payments (by number) being contactless also show how payment habits are changing.",
          not: "Nominal: an amount calculated at current prices, without removing the effect of price increases. Contactless payment: a payment made by holding a card or phone near the POS terminal."
        }
      },
      etkinlikler: [
        {
          ad: "AB'de düşük değerli paketlere ek ücret",
          tur: "Düzenleme",
          baslangic: "2026-11-01",
          bitis: "2026-11-01",
          yer: "Avrupa Birliği",
          aciklama: "Değeri 150 euroya kadar olan gönderilerde, 1 Temmuz'dan beri uygulanan ürün başına 3 euroluk gümrük vergisine ek olarak 2 euroluk Birlik işlem ücreti uygulanmaya başlıyor.",
          url: "https://taxation-customs.ec.europa.eu/customs/eu-customs-reform_en",
          en: {
            ad: "New EU fee on low-value parcels",
            tur: "Regulation",
            yer: "European Union",
            aciklama: "A €2 Union handling fee starts to apply to consignments worth up to €150, on top of the €3 per-item customs duty in place since 1 July."
          }
        },
        {
          ad: "Ekim ayı enflasyonu",
          tur: "Veri günü",
          baslangic: "2026-11-03",
          bitis: "2026-11-03",
          yer: "TÜİK",
          aciklama: "TÜİK Ekim ayı tüketici fiyatlarını açıklayacak; giyimde sezon geçişinin fiyatlara etkisi görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "October inflation",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish October consumer prices, showing the effect of the seasonal changeover on clothing prices."
          }
        },
        {
          ad: "Eylül ayı perakende satışları",
          tur: "Veri günü",
          baslangic: "2026-11-09",
          bitis: "2026-11-13",
          yer: "TÜİK",
          aciklama: "TÜİK Eylül ayı perakende satış verilerini açıklayacak; tekstil, giyim ve ayakkabı satış hacmindeki seyir görülecek. Ağustos verisi 12 Ekim'de açıklanmıştı; kesin tarih doğrulanamadı.",
          en: {
            ad: "September retail sales",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish September retail sales, showing the trend in textiles, clothing and footwear sales volume. August data was published on 12 Oct; the exact date could not be verified.",
            tahminiMetin: "Second week of November (estimated)"
          },
          tahmini: true,
          tahminiMetin: "Kasım'ın ikinci haftası (tahmini)"
        },
        {
          ad: "11.11 ile Kasım indirim dönemi",
          tur: "İndirim dönemi",
          baslangic: "2026-11-11",
          bitis: "2026-11-11",
          yer: "Online",
          aciklama: "Online platformlarda 11.11 kampanyalarıyla Kasım indirim dönemi başlıyor.",
          en: {
            ad: "11.11 and the November sales season",
            tur: "Sales period",
            yer: "Online",
            aciklama: "The November sales season kicks off with 11.11 campaigns on online platforms."
          }
        },
        {
          ad: "Black Friday",
          tur: "İndirim dönemi",
          baslangic: "2026-11-27",
          bitis: "2026-11-27",
          yer: "Küresel",
          aciklama: "ABD'de Şükran Günü'nün ertesi günü; yılın en büyük indirim günlerinden.",
          en: {
            ad: "Black Friday",
            tur: "Sales period",
            yer: "Global",
            aciklama: "The day after Thanksgiving in the US; one of the biggest discount days of the year."
          }
        },
        {
          ad: "Asgari Ücret Tespit Komisyonu",
          tur: "Beklenen toplantı",
          baslangic: "2026-12-01",
          bitis: "2026-12-07",
          yer: "Türkiye",
          aciklama: "Komisyonun Aralık'ın ilk haftasında toplanması bekleniyor; kesin tarih henüz açıklanmadı.",
          url: "https://sozcu.com.tr/asgari-ucret-buyuk-ihtimalle-bu-iki-rakam-arasinda-olacak-p369379",
          en: {
            ad: "Minimum Wage Determination Commission",
            tur: "Expected meeting",
            yer: "Türkiye",
            aciklama: "The commission is expected to meet in the first week of December; the exact date has not been announced.",
            tahminiMetin: "First week of December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "Aralık'ın ilk haftası (tahmini)"
        },
        {
          ad: "Inditex 9 aylık sonuçları",
          tur: "Rakip sonuçları",
          baslangic: "2026-12-02",
          bitis: "2026-12-02",
          yer: "Arteixo",
          aciklama: "Zara'nın sahibi Inditex, Şubat–Ekim dönemi sonuçlarını açıklayacak. Tarih piyasa takviminden; şirket henüz teyit etmedi.",
          url: "https://www.marketscreener.com/quote/stock/INDITEX-46535998/calendar/",
          en: {
            ad: "Inditex nine-month results",
            tur: "Competitor results",
            yer: "Arteixo",
            aciklama: "Zara owner Inditex will publish its February–October results. Date from a market calendar; not yet confirmed by the company.",
            tahminiMetin: "2 December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "2 Aralık (tahmini)"
        }
      ],
      en: {
        donem: "19–25 October 2026",
        yayin: "25 October 2026",
        sonraki: "Sunday, 1 November",
        gundemNotu: "2 Türkiye, 2 global"
      }
    },
    {
      no: 1,
      donem: "12–18 Ekim 2026",
      yayin: "18 Ekim 2026",
      sonraki: "25 Ekim Pazar",
      okuma: 7,
      gundemNotu: "3 Türkiye, 2 dünya",
      birDakika: [
        {
          baslik: "Perakende büyüyor, giyim geride: Ağustos'ta satış hacmi %10,1 arttı (saat ve mücevher hariç %6,1), tekstil-giyim-ayakkabıda artış %2,9'da kaldı.",
          anlam: "Tüketici harcıyor ama giyime daha az pay ayırıyor; büyüme internete kayıyor (%17,9).",
          ref: "ana",
          en: {
            baslik: "Retail is growing, clothing is lagging: sales volume rose 10.1% in August (6.1% excluding watches and jewellery), while textiles, clothing and footwear rose just 2.9%.",
            anlam: "Consumers are spending, but a smaller share is going to clothing; growth is shifting online (17.9%)."
          }
        },
        {
          baslik: "2027 asgari ücreti için senaryolar %25–35 artış arasında; bütçede 2027 enflasyon hedefi %21.",
          anlam: "Tahminler tutarsa mağaza personel maliyeti enflasyonun üzerinde artar; 2027 bütçesinde artış senaryoları önem kazanıyor.",
          ref: "h1",
          en: {
            baslik: "2027 minimum wage scenarios range from a 25% to a 35% rise; the budget targets 21% inflation for 2027.",
            anlam: "If the forecasts hold, store staff costs will rise faster than inflation; increase scenarios are gaining weight in 2027 budgets."
          }
        },
        {
          baslik: "Avrupa'da moda perakendecilerine yönelik siber saldırılar sürüyor; bu hafta TFG London ve H&M olayları inceliyor.",
          anlam: "ASOS'ta saldırganın bir çalışanı kandırarak girdiği bildiriliyor; risk yalnızca teknolojide değil, insan tarafında da.",
          ref: "h2",
          en: {
            baslik: "Cyber attacks on European fashion retailers continue; this week TFG London and H&M are investigating incidents.",
            anlam: "In the ASOS case, the attacker reportedly got in by deceiving an employee; the risk lies not only in technology but also with people."
          }
        }
      ],
      ana: {
        id: "ana",
        kisa: "Giyim talebi",
        kategori: "tr",
        tarih: "12 Ekim",
        tur: "Resmî veri",
        okumaSuresi: 2,
        baslik: "Perakende büyüyor, giyim geride kalıyor",
        ozet: "TÜİK verilerine göre Ağustos'ta perakende satış hacmi geçen yılın aynı ayına göre %10,1 arttı. Bu büyüme giyime yansımadı: tekstil, giyim ve ayakkabı satış hacmindeki yıllık artış %2,9'da kaldı (Temmuz'da %7,6); satış hacmi bir önceki aya göre değişmedi. Saat ve mücevher hariç tutulduğunda perakendedeki yıllık artış %6,1'e iniyor.",
        onemi: "Tüketici harcamaya devam ediyor ama bu harcamanın giyime giden payı küçülüyor; büyüme daha çok internetten ve saat-mücevher gibi kalemlerden geliyor. Bu tablo, giyimde büyümenin pazarın genel büyümesinden çok pazar payına ve kanal tercihine bağlı hâle geldiğine işaret ediyor.",
        bolumler: [
          {
            baslik: "Rakamlar (Ağustos 2026, yıllık değişim)",
            maddeler: [
              "Perakende satış hacmi: %10,1 (bir önceki aya göre %1,4)",
              "Saat ve mücevher hariç perakende: %6,1",
              "Posta veya internet üzerinden satışlar: %17,9",
              "Gıda dışı satışlar: %12,8 · Gıda, içecek ve tütün: %5,3",
              "Tekstil, giyim ve ayakkabı: %2,9 (Temmuz'da %7,6; satış hacmi bir önceki aya göre değişmedi)"
            ]
          },
          {
            baslik: "Fiyat tarafı",
            maddeler: ["Giyim fiyatları da enflasyonun çok altında artıyor; ayrıntılar Sayılarla gündem bölümünde."]
          }
        ],
        not: "Satış hacmi, fiyat artışlarının etkisi çıkarılarak hesaplanır; yani satılan ürün miktarındaki değişimi gösterir.",
        kapak: {
          gorsel: "kapak-sayi1.jpg",
          gorselAciklama: "Yükselen perakende çubukları, yanında daha kısa kalan bir giyim askısı ve büyüyen online alışveriş ekranı",
          en: { gorselAciklama: "Rising retail bars next to a shorter clothing rail and a growing online shopping screen" }
        },
        kaynaklar: [
          {
            ad: "Karar · TÜİK perakende verileri",
            url: "https://www.karar.com/ekonomi-haberleri/perakende-satis-hacmi-agustosta-yillik-yuzde-101-artti-2077787",
            tip: "ikinci",
            en: { ad: "Karar · TurkStat retail data" }
          },
          {
            ad: "Dünya · TÜİK ticaret verileri",
            url: "https://www.dunya.com/ekonomik-veriler/ticaret-verileri-yayimlandi-perakende-yukseldi-otomotiv-geriledi-haberi-843504",
            tip: "ikinci",
            en: { ad: "Dünya · TurkStat trade data" }
          },
          {
            ad: "FashionUnited · Türkiye moda verileri",
            url: "https://fashionunited.com/news/business/fashion-pulse-turkiye-august-2026/2026101575211",
            tip: "ikinci",
            en: { ad: "FashionUnited · Türkiye fashion data" }
          }
        ],
        en: {
          kisa: "Clothing demand",
          tarih: "12 Oct",
          tur: "Official data",
          baslik: "Retail is growing, but clothing is lagging behind",
          ozet: "According to TurkStat, retail sales volume rose 10.1% year on year in August. That growth did not reach clothing: textiles, clothing and footwear sales volume rose only 2.9% year on year (July: 7.6%) and was unchanged from the previous month. Excluding watches and jewellery, annual retail growth drops to 6.1%.",
          onemi: "Consumers are still spending, but a smaller share of that spending is going to clothing; growth is coming more from online sales and items such as watches and jewellery. This suggests that growth in clothing now depends less on overall market growth and more on market share and channel choice.",
          bolumler: [
            {
              baslik: "The numbers (August 2026, annual change)",
              maddeler: [
                "Retail sales volume: 10.1% (1.4% month on month)",
                "Retail excluding watches and jewellery: 6.1%",
                "Mail-order or online sales: 17.9%",
                "Non-food sales: 12.8% · Food, beverages and tobacco: 5.3%",
                "Textiles, clothing and footwear: 2.9% (July: 7.6%; sales volume unchanged month on month)"
              ]
            },
            {
              baslik: "The price side",
              maddeler: ["Clothing prices are also rising far below inflation; see By the numbers for details."]
            }
          ],
          not: "Sales volume is calculated after removing the effect of price increases, so it shows the change in the quantity of goods sold."
        }
      },
      haberler: [
        {
          id: "h1",
          kisa: "Asgari ücret",
          kategori: "isgucu",
          tarih: "15–16 Ekim",
          tur: "Tahmin ve hedefler",
          baslik: "2027 asgari ücret senaryoları: %25 ile %35 arası artış",
          ozet: "2027 asgari ücreti için resmî bir rakam henüz yok; Asgari Ücret Tespit Komisyonu'nun Aralık'ın ilk haftasında toplanması bekleniyor. Sosyal güvenlik uzmanı Özgür Erdursun, şu an net 28.075 TL olan asgari ücretin %25 artışla 35.000 TL civarına çıkacağını öngördü. Sözcü'nün %25, %28,4, %30 ve %35'lik artış senaryolarına göre net asgari ücretin 35 bin TL ile 37.900 TL arasında şekillenmesi bekleniyor.",
          ek: "16 Ekim'de açıklanan 2027 bütçe hedeflerine göre yıl sonu enflasyon hedefi %21, işsizlik hedefi %8; istihdamın 657 bin kişi artması bekleniyor. Sözcü'nün hesabına göre %25'lik artışta brüt ücret 41.287,50 TL'ye, işverenin indirimli maliyeti 51.093,29 TL'ye çıkıyor.",
          onemi: "Asgari ücret, mağaza personel maliyetinin ana belirleyicisi. Artış %25–35 aralığında olur ve enflasyon %21 hedefine yakın gerçekleşirse, personel maliyeti enflasyonun belirgin biçimde üzerinde artabilir. Bu da 2027 bütçe çalışmalarında farklı artış senaryolarını öne çıkarıyor.",
          kaynaklar: [
            {
              ad: "Forbes Türkiye · 2027 bütçe hedefleri",
              url: "https://www.forbes.com.tr/ekonomi/2027-butcesinde-enflasyon-buyume-ve-istihdam-hedefleri-aciklandi",
              tip: "ikinci",
              en: { ad: "Forbes Türkiye · 2027 budget targets" }
            },
            {
              ad: "GZT · Özgür Erdursun'un tahmini",
              url: "https://www.gzt.com/ekonomi/2027-asgari-ucret-ne-kadar-olacak-emekli-maasina-kac-tl-zam-gelecek-ozgur-erdursun-acikladi-4270110",
              tip: "ikinci",
              en: { ad: "GZT · Özgür Erdursun's forecast" }
            },
            {
              ad: "Sözcü · Zam senaryoları",
              url: "https://sozcu.com.tr/asgari-ucret-buyuk-ihtimalle-bu-iki-rakam-arasinda-olacak-p369379",
              tip: "ikinci",
              en: { ad: "Sözcü · Wage scenarios" }
            }
          ],
          en: {
            kisa: "Minimum wage",
            tarih: "15–16 Oct",
            tur: "Forecasts and targets",
            baslik: "2027 minimum wage scenarios: a rise of 25% to 35%",
            ozet: "There is no official figure yet for Türkiye's 2027 minimum wage; the Minimum Wage Determination Commission is expected to meet in the first week of December. Social security expert Özgür Erdursun expects the minimum wage, currently ₺28,075 net, to rise by 25% to around ₺35,000. Based on Sözcü's scenarios of 25%, 28.4%, 30% and 35% increases, the net minimum wage is expected to land between ₺35,000 and ₺37,900.",
            ek: "According to the 2027 budget targets announced on 16 Oct, the year-end inflation target is 21% and the unemployment target 8%, with employment expected to grow by 657,000 people. By Sözcü's calculation, a 25% rise would take the gross wage to ₺41,287.50 and the employer's discounted cost to ₺51,093.29.",
            onemi: "The minimum wage is the main driver of store staff costs. If the rise falls in the 25–35% range and inflation comes in close to the 21% target, staff costs could rise well above inflation. This puts different increase scenarios at the centre of 2027 budget work."
          }
        },
        {
          id: "h2",
          kisa: "Siber saldırılar",
          kategori: "tek",
          tarih: "13–15 Ekim",
          tur: "Sektör gelişmesi",
          baslik: "Avrupa'da moda perakendecilerine siber saldırılar sürüyor",
          ozet: "Geçen hafta ASOS'un müşteri bilgilerinin ele geçirildiğini doğrulamasının ardından bu hafta yeni olaylar geldi. Phase Eight, Hobbs ve Whistles markalarının sahibi TFG London, BT sistemlerini etkileyen bir olay yaşadığını açıkladı. H&M ise bir hacker grubunun iddialarını incelediğini, şu ana kadar verilerinin ele geçirildiğine dair bir işaret bulmadığını söyledi. Hollandalı süpermarket grubu Ahold Delhaize de bir güvenlik sorunu sonrası bazı sistemlerini kapattı.",
          bolumler: [
            {
              baslik: "Bu hafta neler oldu?",
              maddeler: [
                "TFG London (14 Ekim): Phase Eight, Hobbs ve Whistles'ı etkileyen olayı pazar günü tespit etti. Mağazalar normal çalışıyor, bazı web sitesi işlevleri kullanılamayabiliyor. Şirket ödeme bilgilerinin etkilendiğini düşünmüyor; başka kişisel verilere erişilip erişilmediğini inceliyor.",
                "H&M (13–14 Ekim): ShinyHunters adlı grubun iddialarını inceliyor. Şirket sözcüsü The Times'a, H&M Grubu verilerinin sınırlı bir kısmını içerebilecek olası bir siber güvenlik olayını incelediklerini söyledi; BBC'ye ise veri ortamının ele geçirildiğine dair bir işaret bulmadığını açıkladı. 14 Ekim'deki web sitesi kesintisinin ise uzayan bir bakım çalışmasından kaynaklandığını, dış bir etkiyle ilgisi olmadığını söyledi.",
                "Ahold Delhaize: Hollandalı süpermarket grubu, ağındaki bir güvenlik sorunu sonrası bazı sistemlerini kapattı."
              ]
            },
            {
              baslik: "Geçen haftadan arka plan: ASOS",
              maddeler: [
                "ASOS (6–8 Ekim) müşterilerin ad ve iletişim bilgilerinin ele geçirildiğini doğruladı; ödeme kartı bilgilerine ve hesap şifrelerine erişilmediğini açıkladı.",
                "City AM'in haberine göre saldırgan, bir çalışanın güvendiği biri gibi davranarak şirketin veri sistemlerine erişti. Bu yöntem şirket tarafından ayrıca doğrulanmadı."
              ]
            },
            {
              baslik: "Bir saldırının maliyeti",
              maddeler: [
                "İngiltere'de 2025 baharında saldırıya uğrayan Co-op, saldırının kendisine 206 milyon sterlin gelir kaybettirdiğini açıklamıştı."
              ]
            }
          ],
          onemi: "City AM'e göre ASOS'ta saldırgan, bir çalışanın güvendiği biri gibi davranarak sisteme girdi. Bu örnek, müşteri verisi tutan perakendeciler için riskin yalnızca sistemlerde değil, mağaza, çağrı merkezi ve merkez ofis çalışanlarının bu tür taleplere ne kadar hazırlıklı olduğunda da yattığını gösteriyor.",
          not: "Sosyal mühendislik: Saldırganın kendini güvenilir biri gibi tanıtıp çalışandan şifre ya da erişim alması. İki aşamalı doğrulama: Şifreye ek olarak telefona gelen kod gibi ikinci bir onay istenmesi.",
          kaynaklar: [
            {
              ad: "FashionUnited · TFG London ve H&M",
              url: "https://fashionunited.uk/news/business/tfg-london-and-h-m-investigate-cyber-security-incidents/2026101490841",
              tip: "ikinci",
              en: { ad: "FashionUnited · TFG London and H&M" }
            },
            {
              ad: "Cybernews · H&M sözcüsünün açıklaması",
              url: "https://cybernews.com/security/h-m-investigates-data-breach-shinyhunters/",
              tip: "ikinci",
              en: { ad: "Cybernews · H&M spokesperson's statement" }
            },
            {
              ad: "FashionNetwork (Reuters) · H&M açıklaması",
              url: "https://ww.fashionnetwork.com/news/H-m-says-website-availability-affected-by-maintenance-not-external-influence,1875729.html",
              tip: "ikinci",
              en: { ad: "FashionNetwork (Reuters) · H&M statement" }
            },
            {
              ad: "FashionNetwork · ASOS açıklaması",
              url: "https://uk.fashionnetwork.com/news/Asos-says-hack-exposed-some-customer-personal-data-but-payment-info-is-safe,1874167.html",
              tip: "ikinci",
              en: { ad: "FashionNetwork · ASOS statement" }
            },
            {
              ad: "City AM · Perakende siber saldırıları",
              url: "https://cityam.com/retailers-back-on-alert-after-new-wave-of-cyber-attacks",
              tip: "ikinci",
              en: { ad: "City AM · Retail cyber attacks" }
            }
          ],
          en: {
            kisa: "Cyber attacks",
            tarih: "13–15 Oct",
            tur: "Industry development",
            baslik: "Cyber attacks on European fashion retailers continue",
            ozet: "After ASOS confirmed last week that customer data had been exposed, new incidents followed this week. TFG London, owner of the Phase Eight, Hobbs and Whistles brands, said an incident had affected its IT systems. H&M said it is investigating claims by a hacker group and has so far found no indication that its data has been compromised. Dutch supermarket group Ahold Delhaize also shut down some systems after a security issue.",
            bolumler: [
              {
                baslik: "What happened this week?",
                maddeler: [
                  "TFG London (14 Oct): Detected the incident affecting Phase Eight, Hobbs and Whistles on Sunday. Stores are operating normally; some website functions may be unavailable. The company does not believe payment information was affected and is checking whether other personal data was accessed.",
                  "H&M (13–14 Oct): Investigating claims by a group called ShinyHunters. A spokesperson told The Times the company was looking into a potential cybersecurity incident that may involve a limited scope of H&M Group data; it told the BBC it had found no indication that its data environment had been compromised. It said a website outage on 14 Oct was caused by a maintenance update that ran long and was not related to any external influence.",
                  "Ahold Delhaize: The Dutch supermarket group shut down some systems after a security issue on its network."
                ]
              },
              {
                baslik: "Background from last week: ASOS",
                maddeler: [
                  "ASOS (6–8 Oct) confirmed that customers' names and contact details had been exposed; it said no payment card information or account passwords were accessed.",
                  "According to City AM, the attacker accessed the company's data systems by posing as someone an employee trusted. ASOS has not separately confirmed this method."
                ]
              },
              {
                baslik: "What an attack can cost",
                maddeler: ["Co-op, attacked in the UK in spring 2025, said the incident cost it £206m in revenue."]
              }
            ],
            onemi: "According to City AM, the ASOS attacker got in by posing as someone an employee trusted. The case shows that, for retailers holding customer data, the risk lies not only in systems but also in how prepared store, call-centre and head-office staff are for such requests.",
            not: "Social engineering: an attacker posing as a trusted person to obtain a password or access from an employee. Two-factor authentication: requiring a second confirmation, such as a code sent to a phone, in addition to a password."
          }
        },
        {
          id: "h3",
          kisa: "Yapay zekâ ajanları",
          kategori: "tek",
          tarih: "14–15 Ekim",
          tur: "Şirket duyurusu",
          baslik: "Alışverişte yapay zekâ asistanları yaygınlaşıyor",
          ozet: "Google, farklı mağazalardan ürünleri tek sepette toplayan Universal Cart'ı 15 Ekim'de ABD'de Google Arama ve Gemini uygulamasında kullanıma açmaya başladı. Aynı hafta perakende grubu Majid Al Futtaim'in CEO'su Ahmed Galal Ismail, Sharjah Yatırım Forumu'nda şirketin müşteri işlemlerinin %9'unda artık bir yapay zekâ ajanının yer aldığını, işlerinin dörtte birinin online yürüdüğünü söyledi.",
          ek: "Google'ın sepetinde ödeme Google Pay ile ya da mağazanın kendi sepetinde yapılabiliyor; satışı yapan taraf mağaza olmaya devam ediyor. İlk katılanlar arasında Nike, Sephora, Target ve Walmart var. 14 Ekim'de haberleştirilen Numerator araştırmasına göre ABD'de hanelerin %30'undan fazlası yapay zekâyı her hafta kullanıyor; araştırma yapay zekâdan en çok etkilenebilecek kategoriler arasında giyim, ayakkabı ve aksesuarı sayıyor.",
          onemi: "Müşterilerin ürünü bir yapay zekâ asistanına sorarak bulduğu bir dönem başlıyor. Bu durumda asistanların önerilerinde hangi ürünlerin çıkacağını, ürün bilgilerinin (beden, kumaş, stok, fiyat) ne kadar eksiksiz ve düzenli olduğu da etkileyecek.",
          not: "Yapay zekâ ajanı: Kullanıcı adına ürün arayan, karşılaştıran ve bazı adımları kendisi yapan yazılım asistanı.",
          kaynaklar: [
            {
              ad: "Google · Resmî duyuru",
              url: "https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/",
              tip: "resmi",
              en: { ad: "Google · Official announcement" }
            },
            {
              ad: "Gulf News · Majid Al Futtaim CEO'su",
              url: "https://gulfnews.com/business/retail/majid-al-futtaim-ceo-treat-ai-like-financial-capital-1.500710544",
              tip: "ikinci",
              en: { ad: "Gulf News · Majid Al Futtaim CEO" }
            },
            {
              ad: "Chain Store Age · Numerator araştırması",
              url: "https://chainstoreage.com/numerator-product-categories-most-likely-be-disrupted-ai-are",
              tip: "ikinci",
              en: { ad: "Chain Store Age · Numerator study" }
            }
          ],
          en: {
            kisa: "AI agents",
            tarih: "14–15 Oct",
            tur: "Company announcement",
            baslik: "AI shopping assistants are gaining ground",
            ozet: "On 15 Oct Google began rolling out Universal Cart, which gathers products from different stores into a single cart, in Google Search and the Gemini app in the US. The same week, Ahmed Galal Ismail, CEO of retail group Majid Al Futtaim, told the Sharjah Investment Forum that 9% of the company's customer transactions now involve an AI agent and that a quarter of its business runs online.",
            ek: "In Google's cart, payment can be made with Google Pay or in the merchant's own checkout; the merchant remains the seller. Early participants include Nike, Sephora, Target and Walmart. According to a Numerator study reported on 14 Oct, more than 30% of US households now use AI weekly; the study lists apparel, footwear and accessories among the categories most exposed to AI-driven disruption.",
            onemi: "A period is beginning in which customers find products by asking an AI assistant. Which products these assistants recommend will be shaped partly by how complete and consistent the product information (size, fabric, stock, price) is.",
            not: "AI agent: a software assistant that searches for and compares products on the user's behalf and can complete some steps itself."
          }
        },
        {
          id: "h4",
          kisa: "Boyner",
          kategori: "tr",
          tarih: "15 Ekim",
          tur: "Rakip hamlesi",
          baslik: "Boyner'in indirim koruması 2 milyon müşteriye ulaştı",
          ozet: "Boyner, 2024'te başlattığı \"İndirim Korumalı Alışveriş\" uygulamasının sonuçlarını paylaştı: Satın alınan ürünün fiyatı 30 gün içinde düşerse aradaki fark müşterinin Hopi hesabına Paracık olarak yükleniyor. Şimdiye kadar yaklaşık 2 milyon müşteri toplam 1,7 milyar Paracık kazandı; müşteri başına ortalama 857 TL.",
          ek: "Koruma yeni sezon ve sezonsuz ürünlerde geçerli; müşterinin fiyat takibi yapması ya da başvurması gerekmiyor. Kazanılan Paracıklar Boyner'in tüm kanallarında ve tüm ürünlerde, alt harcama limiti olmadan kullanılabiliyor. Açıklamayı Boyner Büyük Mağazacılık CEO'su Eren Çamurdan yaptı.",
          onemi: "Müşterinin \"nasılsa indirime girer\" diye alışverişi ertelemesine karşı geliştirilmiş bir yöntem. Fark nakit yerine sadakat puanı olarak verildiği için para şirketin kendi ekosisteminde kalıyor. Sık kampanya yapılan bir pazarda tam fiyatlı satışı korumanın örneklerinden biri.",
          not: "Hopi: Boyner grubunun sadakat ve alışveriş uygulaması. Paracık: Hopi'de alışverişte kullanılabilen puan.",
          kaynaklar: [
            {
              ad: "Perakende.org · Boyner açıklaması",
              url: "https://perakende.org/boynerden-alisveriste-ya-sonra-indirime-girerse-endisesine-karsi-guvence/",
              tip: "ikinci",
              en: { ad: "Perakende.org · Boyner announcement" }
            }
          ],
          en: {
            kisa: "Boyner",
            tarih: "15 Oct",
            tur: "Competitor move",
            baslik: "Boyner's price protection reaches 2 million customers",
            ozet: "Boyner shared results from the \"Price-Protected Shopping\" scheme it launched in 2024: if a product's price drops within 30 days of purchase, the difference is credited to the customer's Hopi account as Paracık points. So far about 2 million customers have earned a total of 1.7 billion Paracık, an average of ₺857 per customer.",
            ek: "Protection covers new-season and non-seasonal products; customers do not need to track prices or apply. Earned Paracık can be spent across all Boyner channels and products with no minimum spend. The announcement was made by Eren Çamurdan, CEO of Boyner Büyük Mağazacılık.",
            onemi: "A way to counter customers postponing purchases because \"it will go on sale anyway\". Because the difference is paid in loyalty points rather than cash, the money stays within the company's own ecosystem. One example of protecting full-price sales in a market with frequent promotions.",
            not: "Hopi: the Boyner group's loyalty and shopping app. Paracık: points that can be spent when shopping through Hopi."
          }
        },
        {
          id: "h5",
          kisa: "Rossmann",
          kategori: "isgucu",
          tarih: "13 Ekim",
          tur: "Uygulama örneği",
          baslik: "Rossmann'a göre haftada iki gün izin çalışan devrini düşürdü",
          ozet: "Rossmann Türkiye, mağaza çalışanlarına haftada iki gün izin veren çalışma modeliyle Stevie Awards 2026'da 3 altın ve 1 gümüş ödül aldı; halk oylamasında da \"Yılın Şirketi\" seçildi (toplam 5 ödül). Şirketin açıklamasına göre mağaza çalışanı devir oranı, 2025 ile Mayıs 2026 karşılaştırıldığında yaklaşık 4 kat iyileşti; hedef gerçekleşmesi %100'ün üzerine çıktı.",
          ek: "Model, 50 mağazada bir yıl süren saha analizleri ve çalışan geri bildirimlerinin ardından pilot olarak başladı, sonra tüm mağazalara yayıldı. Devir oranındaki iyileşme şirketin kendi açıklamasıdır; bağımsız olarak doğrulanmış değildir.",
          onemi: "Rossmann da mağazalarında çok sayıda çalışan istihdam eden bir perakendeci. Şirketin, ücret dışı bir düzenlemenin (izin günü) çalışan devrini bu ölçüde düşürdüğü yönündeki açıklaması, mağaza çalışanlarını elde tutmada ücret dışı araçların da etkili olabileceğine dair bir örnek.",
          not: "Çalışan devir oranı: Belirli bir dönemde işten ayrılan çalışanların toplam çalışan sayısına oranı.",
          kaynaklar: [
            {
              ad: "Perakende.org · Rossmann haberi",
              url: "https://perakende.org/rossmann-turkiyeye-stevie-awards-2026dan-5-odul-birden/",
              tip: "ikinci",
              en: { ad: "Perakende.org · Rossmann story" }
            },
            {
              ad: "Gazete Anadolu · Rossmann haberi",
              url: "https://www.gazeteanadolu.com/rossmann-turkiyeye-stevie-awards-2026dan-5-odul/157505",
              tip: "ikinci",
              en: { ad: "Gazete Anadolu · Rossmann story" }
            }
          ],
          en: {
            kisa: "Rossmann",
            tarih: "13 Oct",
            tur: "Practice example",
            baslik: "Rossmann says two days off a week cut staff turnover",
            ozet: "Rossmann Türkiye won three gold and one silver Stevie Awards 2026 for a working model that gives store employees two days off a week, and was also voted \"Company of the Year\" in a public vote (five awards in total). According to the company, store staff turnover improved roughly fourfold comparing 2025 with May 2026, and target achievement rose above 100%.",
            ek: "The model started as a pilot after a year of field analysis and employee feedback in 50 stores, then was rolled out to all stores. The improvement in turnover is the company's own statement and has not been independently verified.",
            onemi: "Rossmann is also a retailer employing many people in its stores. The company's statement that a non-pay measure (an extra day off) cut turnover this much is an example of how non-pay tools may also help retain store staff.",
            not: "Staff turnover rate: the share of employees who leave during a period, relative to total headcount."
          }
        }
      ],
      sinyal: {
        baslik: "Bu haftanın ortak paydası: çalışan",
        metin: "Bu haftanın üç ayrı başlığı aynı yere çıkıyor: mağaza ve merkez çalışanı. Siber saldırılarda hedef yalnızca sistemler değil, çalışanlar da; City AM'e göre ASOS örneğinde saldırgan bir çalışanı kandırarak içeri girdi. Maliyet tarafında 2027 asgari ücret senaryoları, enflasyon hedefinin üzerinde bir artışa işaret ediyor. Bağlılık tarafında ise Rossmann, ücret dışı bir düzenlemeyle (haftada iki gün izin) çalışan devrini düşürdüğünü açıklıyor. Personel maliyetinin hızla arttığı bir yılda çalışanı elde tutmak ve doğru eğitmek, hem riski hem de işe alım ve eğitim maliyetini azaltmanın yolu olabilir.",
        once: { ad: "Alışılmış bakış", metin: "Çalışan, kontrol altında tutulması gereken bir maliyet kalemi." },
        sonra: { ad: "Bu haftanın gösterdiği", metin: "Çalışan; maliyet, güvenlik ve bağlılığın kesiştiği yer." },
        dayanak: ["h2", "h1", "h5"],
        en: {
          baslik: "This week's common thread: the employee",
          metin: "Three separate stories this week point to the same place: store and head-office employees. In cyber attacks, the targets are not only systems but also people; according to City AM, in the ASOS case the attacker got in by deceiving an employee. On cost, the 2027 minimum wage scenarios point to a rise above the inflation target. On retention, Rossmann says a non-pay measure (two days off a week) has cut staff turnover. In a year when staff costs are rising fast, keeping employees and training them well may be a way to reduce both risk and the cost of hiring and training.",
          once: { ad: "The usual view", metin: "Employees are a cost line to be kept under control." },
          sonra: { ad: "What this week shows", metin: "Employees are where cost, security and retention meet." }
        }
      },
      veri: {
        id: "veri",
        kisa: "Giyim fiyatları",
        kategori: "tr",
        tarih: "3 Eylül",
        tur: "Resmî veri",
        deger: "%8,1",
        baslik: "TÜİK: Ağustos'ta kadın ve kız çocuk giyiminde yıllık fiyat artışı %8,1",
        metin: "Ağustos'ta genel enflasyon %31,51 iken giyim ve ayakkabı fiyatları yıllık %13,16 arttı. Erkek ve erkek çocuk giyiminde artış %22,64, kadın ve kız çocuk giyiminde ise %8,1 oldu.",
        karsilastirma: [
          { etiket: "Genel enflasyon (TÜFE)", deger: 31.51, en: { etiket: "Headline inflation (CPI)" } },
          { etiket: "Erkek ve erkek çocuk giyimi", deger: 22.64, en: { etiket: "Men's and boys' garments" } },
          { etiket: "Giyim ve ayakkabı", deger: 13.16, en: { etiket: "Clothing and footwear" } },
          {
            etiket: "Kadın ve kız çocuk giyimi",
            deger: 8.1,
            vurgu: true,
            en: { etiket: "Women's and girls' garments" }
          }
        ],
        olcek: 35,
        orneklem: "Yıllık fiyat değişimi, Ağustos 2026 · FashionUnited derlemesi, 15 Ekim",
        ozet: "TÜİK'in Ağustos 2026 enflasyon verilerinden giyimle ilgili öne çıkanlar:",
        maddeler: [
          "Genel enflasyon yıllık %31,51 (TÜİK, 3 Eylül'de açıkladı).",
          "Giyim ve ayakkabı fiyatları yıllık %13,16 arttı.",
          "Erkek ve erkek çocuk giyiminde artış %22,64, kadın ve kız çocuk giyiminde %8,1 oldu.",
          "Eylül'de giyim ve ayakkabı malları (hizmetler hariç) yıllık %12,91 arttı, genel enflasyon %29,73 oldu (Merkez Bankası'nın Eylül fiyat gelişmeleri raporu). Bu seri yukarıdaki Ağustos rakamlarıyla birebir karşılaştırılamaz.",
          "Kadın ve erkek giyimi ayrımı, FashionUnited'ın 15 Ekim'de yayımladığı Türkiye derlemesinden (TÜİK verisi) alındı."
        ],
        onemi: "Kadın giyiminde fiyatların enflasyonun bu kadar gerisinde kalması, bu kategoride fiyat rekabetinin yoğun olduğuna ve fiyat artışıyla ciro büyütme alanının dar olduğuna işaret ediyor. Erkek giyimiyle aradaki fark, kategoriler arasında fiyatlama gücünün farklı olabileceğini düşündürüyor.",
        not: "Yıllık fiyat değişimi: bir ürün grubunun fiyatının geçen yılın aynı ayına göre ne kadar arttığı.",
        kaynaklar: [
          {
            ad: "FashionUnited · Türkiye moda verileri (TÜİK)",
            url: "https://fashionunited.com/news/business/fashion-pulse-turkiye-august-2026/2026101575211",
            tip: "ikinci",
            en: { ad: "FashionUnited · Türkiye fashion data (TurkStat)" }
          },
          {
            ad: "TEKSİF · Ağustos 2026 TÜFE",
            url: "https://teksif.org.tr/tuketici-fiyat-endeksi-agustos-2026/",
            tip: "ikinci",
            en: { ad: "TEKSİF · August 2026 CPI" }
          },
          {
            ad: "TCMB · Eylül ayı fiyat gelişmeleri",
            url: "https://www.tcmb.gov.tr/wps/wcm/connect/fde48874-969e-40f6-a1a9-7316841714d7/afiyateylul26.pdf?MOD=AJPERES",
            tip: "resmi",
            en: { ad: "CBRT · September price developments" }
          }
        ],
        en: {
          kisa: "Clothing prices",
          tarih: "3 Sep",
          tur: "Official data",
          deger: "8.1%",
          baslik: "TurkStat: Women's and girls' garment prices up 8.1% year on year in August",
          metin: "In August, headline inflation was 31.51%, while clothing and footwear prices rose 13.16% year on year. Prices of garments for men and boys rose 22.64%, and for women and girls 8.1%.",
          orneklem: "Annual price change, August 2026 · FashionUnited round-up, 15 Oct",
          ozet: "Clothing highlights from TurkStat's August 2026 inflation data:",
          maddeler: [
            "Headline inflation was 31.51% year on year (published by TurkStat on 3 Sep).",
            "Clothing and footwear prices rose 13.16% year on year.",
            "Prices of garments for men and boys rose 22.64%, and for women and girls 8.1%.",
            "In September, clothing and footwear goods (excluding services) rose 12.91% year on year and headline inflation was 29.73% (Central Bank's September price developments report). This series is not directly comparable with the August figures above.",
            "The split between women's and men's clothing comes from FashionUnited's Türkiye round-up published on 15 Oct (TurkStat data)."
          ],
          onemi: "Women's clothing prices lagging so far behind inflation points to intense price competition in this category and limited room to grow revenue through price increases. The gap with men's clothing suggests that pricing power may differ across categories.",
          not: "Annual price change: how much a product group's price has risen compared with the same month last year."
        }
      },
      etkinlikler: [
        {
          ad: "Merkez Bankası faiz kararı",
          tur: "Karar günü",
          baslangic: "2026-10-22",
          bitis: "2026-10-22",
          yer: "TCMB",
          aciklama: "Para Politikası Kurulu'nun Ekim toplantısı; karar Türkiye saatiyle 14:00'te açıklanır.",
          url: "https://www.ekonomist.com.tr/ekonomi-haberleri/merkez-bankasi-ekim-ayi-faiz-karari-ne-zaman-aciklanacak-ekim-ayi-faiz-beklentisi-ne-yonde--79565",
          en: {
            ad: "Central Bank rate decision",
            tur: "Decision day",
            yer: "CBRT",
            aciklama: "October meeting of the Monetary Policy Committee; the decision is announced at 14:00 Türkiye time."
          }
        },
        {
          ad: "Ekim ayı enflasyonu",
          tur: "Veri günü",
          baslangic: "2026-11-03",
          bitis: "2026-11-03",
          yer: "TÜİK",
          aciklama: "TÜİK Ekim ayı tüketici fiyatlarını açıklayacak; giyimde sezon geçişinin fiyatlara etkisi görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "October inflation",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish October consumer prices, showing the effect of the seasonal changeover on clothing prices."
          }
        },
        {
          ad: "11.11 ile Kasım indirim dönemi",
          tur: "İndirim dönemi",
          baslangic: "2026-11-11",
          bitis: "2026-11-11",
          yer: "Online",
          aciklama: "Online platformlarda 11.11 kampanyalarıyla Kasım indirim dönemi başlıyor.",
          en: {
            ad: "11.11 and the November sales season",
            tur: "Sales period",
            yer: "Online",
            aciklama: "The November sales season kicks off with 11.11 campaigns on online platforms."
          }
        },
        {
          ad: "Black Friday",
          tur: "İndirim dönemi",
          baslangic: "2026-11-27",
          bitis: "2026-11-27",
          yer: "Küresel",
          aciklama: "ABD'de Şükran Günü'nün ertesi günü; yılın en büyük indirim günlerinden.",
          en: {
            ad: "Black Friday",
            tur: "Sales period",
            yer: "Global",
            aciklama: "The day after Thanksgiving in the US; one of the biggest discount days of the year."
          }
        },
        {
          ad: "Asgari Ücret Tespit Komisyonu",
          tur: "Beklenen toplantı",
          baslangic: "2026-12-01",
          bitis: "2026-12-07",
          yer: "Türkiye",
          aciklama: "Komisyonun Aralık'ın ilk haftasında toplanması bekleniyor; kesin tarih henüz açıklanmadı.",
          url: "https://sozcu.com.tr/asgari-ucret-buyuk-ihtimalle-bu-iki-rakam-arasinda-olacak-p369379",
          en: {
            ad: "Minimum Wage Determination Commission",
            tur: "Expected meeting",
            yer: "Türkiye",
            aciklama: "The commission is expected to meet in the first week of December; the exact date has not been announced.",
            tahminiMetin: "First week of December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "Aralık'ın ilk haftası (tahmini)"
        },
        {
          ad: "NRF 2027: Retail's Big Show",
          tur: "Konferans ve fuar",
          baslangic: "2027-01-10",
          bitis: "2027-01-12",
          yer: "New York",
          aciklama: "Perakende sektörünün dünyadaki en büyük etkinliklerinden.",
          url: "https://nrfbigshow.nrf.com/",
          en: {
            ad: "NRF 2027: Retail's Big Show",
            tur: "Conference and expo",
            yer: "New York",
            aciklama: "One of the largest retail industry events in the world."
          }
        }
      ],
      en: {
        donem: "12–18 October 2026",
        yayin: "18 October 2026",
        sonraki: "Sunday, 25 October",
        gundemNotu: "3 Türkiye, 2 global"
      }
    }
  ],
  en: {
    ad: "Weekly Retail Agenda",
    aciklama: "This week's key developments in Turkish and global retail.",
    altBaslik: "Weekly Retail Developments",
    kisaAd: "Retail Agenda"
  }
};
