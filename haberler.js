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
    no: 5,
    donem: "9–15 Kasım 2026",
    yayin: "15 Kasım Pazar",
    en: { donem: "9–15 November 2026", yayin: "Sunday, 15 November" }
  },
  sayilar: [
    {
      no: 4,
      donem: "2–8 Kasım 2026",
      yayin: "8 Kasım 2026",
      sonraki: "15 Kasım Pazar",
      okuma: 7,
      gundemNotu: "1 Türkiye, 3 dünya",
      birDakika: [
        {
          baslik: "Koton, 2026 satış beklentisini \"düşük tek haneli daralma\"ya çekti; şirketin üçüncü çeyrek satışları yıllık %9,1 geriledi.",
          anlam: "Borsada işlem gören bir geniş kitle moda perakendecisinin beklentisini büyümeden daralmaya çevirmesi, şirketin yılın son çeyreğine zayıf talep ve marj baskısıyla girdiğini gösteriyor; sunumda talepteki belirgin zayıflama vurgulandı.",
          ref: "ana",
          en: {
            baslik: "Koton cut its 2026 sales outlook to a \"low single-digit decline\"; the company's third-quarter sales fell 9.1% year on year.",
            anlam: "A listed mass-market fashion retailer turning its outlook from growth to decline shows the company entering the final quarter with weak demand and margin pressure; its presentation highlighted a marked weakening in demand."
          }
        },
        {
          baslik: "Ekim'de giyim ve ayakkabı fiyatları aylık %12,58 ile en çok artan grup oldu; yıllık artış ise %13,38 ile ana gruplar arasında en düşük.",
          anlam: "Yıllık enflasyon %29,77'ye çıkarken giyimde yıllık fiyat artışı genel enflasyonun yarısının altında kaldı; Kasım'da uygulanacak kira artış sınırı ise %31,23.",
          ref: "veri",
          en: {
            baslik: "In October, clothing and footwear prices were the fastest-rising group month on month at 12.58%; the annual increase, at 13.38%, was the lowest among the main groups.",
            anlam: "As annual inflation rose to 29.77%, the annual price increase in clothing stayed below half of headline inflation; the rent increase cap for November is 31.23%."
          }
        },
        {
          baslik: "Primark'ın yıllık düzeltilmiş faaliyet kârı yaklaşık %11 düştü; Avrupa kıtasında benzer mağaza satışları %4,7 geriledi.",
          anlam: "Şirket, zayıf tüketici ortamında Temmuz'da yüzlerce üründe fiyat indirdi; yeni mali yıl için faaliyet kâr marjı beklentisi yaklaşık %10.",
          ref: "h2",
          en: {
            baslik: "Primark's annual adjusted operating profit fell about 11%; like-for-like sales in continental Europe fell 4.7%.",
            anlam: "In a weak consumer environment, the company cut prices on hundreds of lines in July; it expects an operating margin of about 10% for the new financial year."
          }
        }
      ],
      ana: {
        id: "ana",
        kisa: "Koton sonuçları",
        kategori: "tr",
        tarih: "5 Kasım",
        tur: "Şirket sonuçları",
        okumaSuresi: 2,
        baslik: "Koton, 2026 beklentisini ikinci kez düşürdü",
        ozet: "Koton, 5 Kasım'da 2026'nın ilk dokuz ayına ait finansal sonuçlarını ve güncellenmiş 2026 beklentilerini açıkladı. Şirketin enflasyon muhasebesine (TMS 29) göre hazırlanan sunumuna göre üçüncü çeyrek satışları bir önceki yılın aynı dönemine göre %9,1 azalarak 9,33 milyar TL'ye geriledi; dokuz aylık satışlar 28,2 milyar TL oldu. Şirket dokuz ayı 940,3 milyon TL net zararla kapattı.",
        ek: "Koton, 2026 satış büyümesi beklentisini \"yatay–düşük tek haneli büyüme\"den \"düşük tek haneli daralma\"ya çekti. Bu, yıl içindeki ikinci güncelleme. Şirketin sunumunda üçüncü çeyrek için tüketici talebinde belirgin bir zayıflama olduğu belirtildi.",
        onemi: "Borsa İstanbul'da işlem gören geniş kitle moda perakendecilerinden birinin, yılın son çeyreğine girerken satış beklentisini büyümeden daralmaya çevirmesi, talep tarafındaki zayıflığın şirket sonuçlarına yansıdığı bir örnek. Satıştaki gerilemenin yanında brüt marj beklentisinin de düşürülmesi, Kasım indirimleri ve yılbaşı sezonunda fiyat ve promosyon rekabetinin nasıl şekilleneceği sorusunu öne çıkarıyor. Türkiye satışları gerilerken yurt dışı satışların dolar bazında büyümesi de dikkat çekici.",
        bolumler: [
          {
            baslik: "Dokuz ay ve üçüncü çeyrek (şirket sunumu, TMS 29)",
            maddeler: [
              "Üçüncü çeyrek satışları: 9,33 milyar TL (geçen yılın aynı dönemi: 10,27 milyar TL), yıllık %9,1 düşüş.",
              "Dokuz aylık satışlar: 28,2 milyar TL (geçen yılın aynı dönemi: 29,7 milyar TL).",
              "Türkiye satışları dokuz ayda yıllık %6,9 geriledi; yurt dışı satışlar dolar bazında %7,4 arttı.",
              "Dokuz aylık brüt kâr marjı %54,8; FAVÖK 5,96 milyar TL, FAVÖK marjı %21,1.",
              "Dokuz aylık net zarar: 940,3 milyon TL.",
              "Mağaza sayısı Ekim sonunda 470; yılbaşından bu yana net artış 6 mağaza."
            ]
          },
          {
            baslik: "2026 beklentisi: önceki ve yeni (şirket sunumu, TMS 29 dahil)",
            maddeler: [
              "Satış büyümesi: \"yatay–düşük tek haneli büyüme\" → \"düşük tek haneli daralma\".",
              "Brüt kâr marjı: yaklaşık %54 → yaklaşık %52.",
              "FAVÖK marjı: yaklaşık %24 → yaklaşık %21.",
              "Net finansal borç/FAVÖK: yaklaşık 0,5 kat → yaklaşık 0,6 kat.",
              "Net yeni mağaza: 5+ (değişmedi)."
            ]
          }
        ],
        not: "TMS 29: Yüksek enflasyon dönemlerinde finansal tabloların enflasyona göre düzeltilmesini öngören muhasebe standardı; bu nedenle geçmiş dönem rakamları da bugünkü fiyatlarla gösterilir. FAVÖK: Faiz, amortisman ve vergi öncesi kâr; şirketin esas faaliyetlerinden ne kadar nakit ürettiğine dair yaygın bir gösterge. Brüt kâr marjı: Satış gelirinden satılan malın maliyeti düşüldükten sonra kalan tutarın satışlara oranı.",
        kapak: {
          gorsel: "kapak-sayi4.jpg",
          gorselAciklama: "Askılıkta pembe bir elbise ve nane yeşili bir tişört; yanında boyları giderek kısalan lavanta renkli sütunlar, üzerlerinden aşağı doğru kıvrılan sarı bir ok ve pembe bir alışveriş çantası",
          en: { gorselAciklama: "A pink dress and a mint-green T-shirt on a clothes rail; beside them, lavender columns getting progressively shorter, a yellow arrow curving down over them and a pink shopping bag" }
        },
        kaynaklar: [
          {
            ad: "Koton · 3. çeyrek 2026 sonuç sunumu",
            url: "https://kurumsal.koton.com.tr/wp-content/uploads/2026/11/KOTON-Q3-9M-2026-Earnings-Presentation.pdf",
            tip: "resmi",
            en: { ad: "Koton · Q3 2026 earnings presentation" }
          },
          {
            ad: "Koton Yatırımcı İlişkileri · 2026 çeyrek sonuçları",
            url: "https://kurumsal.koton.com.tr/en/investor-relations/quarterly-results/2026-2/",
            tip: "resmi",
            en: { ad: "Koton Investor Relations · 2026 quarterly results" }
          },
          {
            ad: "YatırımX · Koton'un dokuz aylık sonuçları",
            url: "https://www.yatirimx.com.tr/sirket-haberleri/kotonun-zarari-940-milyon-tlye-ulasti-satislar-da-geriledi/27784",
            tip: "ikinci",
            en: { ad: "YatırımX · Koton's nine-month results" }
          },
          {
            ad: "Matriks (TradingView) · Koton 3. çeyrek değerlendirmesi",
            url: "https://tr.tradingview.com/news/matriks:6880445:0/",
            tip: "ikinci",
            en: { ad: "Matriks (TradingView) · Koton Q3 review" }
          }
        ],
        en: {
          kisa: "Koton results",
          tarih: "5 Nov",
          tur: "Company results",
          baslik: "Koton lowers its 2026 outlook for the second time",
          ozet: "On 5 November, Koton published its financial results for the first nine months of 2026 and updated 2026 guidance. According to the company's presentation, prepared under inflation accounting (TAS 29), third-quarter sales fell 9.1% year on year to ₺9.33 billion; nine-month sales were ₺28.2 billion. The company ended the nine months with a net loss of ₺940.3 million.",
          ek: "Koton lowered its 2026 sales growth guidance from \"flat to low single-digit growth\" to a \"low single-digit decline\". This is the second update during the year. The company's presentation said consumer demand weakened markedly in the third quarter.",
          onemi: "One of the mass-market fashion retailers listed on Borsa Istanbul turning its sales outlook from growth to decline as the final quarter begins is an example of demand weakness feeding through to company results. Alongside lower sales, the cut in its gross margin expectation raises the question of how price and promotional competition will play out during the November sales and the year-end season. The growth of international sales in dollar terms while Türkiye sales decline is also notable.",
          bolumler: [
            {
              baslik: "Nine months and third quarter (company presentation, TAS 29)",
              maddeler: [
                "Third-quarter sales: ₺9.33 billion (same period last year: ₺10.27 billion), down 9.1% year on year.",
                "Nine-month sales: ₺28.2 billion (same period last year: ₺29.7 billion).",
                "Türkiye sales fell 6.9% year on year over nine months; international sales rose 7.4% in dollar terms.",
                "Nine-month gross margin 54.8%; EBITDA ₺5.96 billion, EBITDA margin 21.1%.",
                "Nine-month net loss: ₺940.3 million.",
                "Store count 470 at the end of October; a net increase of 6 stores since the start of the year."
              ]
            },
            {
              baslik: "2026 guidance: previous and new (company presentation, including TAS 29)",
              maddeler: [
                "Sales growth: \"flat to low single-digit growth\" → \"low single-digit decline\".",
                "Gross margin: about 54% → about 52%.",
                "EBITDA margin: about 24% → about 21%.",
                "Net financial debt/EBITDA: about 0.5x → about 0.6x.",
                "Net new stores: 5+ (unchanged)."
              ]
            }
          ],
          not: "TAS 29: the accounting standard requiring financial statements to be restated for inflation in high-inflation periods; prior-period figures are therefore also shown in current prices. EBITDA: earnings before interest, tax, depreciation and amortisation; a common indicator of how much cash a company generates from its core operations. Gross margin: the share of sales remaining after deducting the cost of goods sold."
        }
      },
      haberler: [
        {
          id: "h1",
          kisa: "Hazır giyim ihracatı",
          kategori: "tr",
          tarih: "3 Kasım",
          tur: "Resmî veri",
          baslik: "Hazır giyim ihracatı Ekim'de yıllık %14,1 düştü",
          ozet: "Ticaret Bakanlığı ve Türkiye İhracatçılar Meclisi'nin (TİM) 3 Kasım'da açıkladığı verilere göre Türkiye'nin toplam ihracatı Ekim'de yıllık %8,1 artışla 25,9 milyar dolar olurken hazır giyim ihracatı bir önceki yılın aynı ayına göre %14,1 geriledi. İstanbul Hazır Giyim ve Konfeksiyon İhracatçıları Birliği'nin (İHKİB) raporuna göre hazır giyim ve konfeksiyon ihracatı Ocak–Ekim döneminde %3,8 azalarak 13,66 milyar dolara indi.",
          ek: "Açıklanan verilere göre toplam ihracat miktar bazında Ekim'de %1,7, on aylık dönemde %2,1 azaldı. TİM Başkanı Mustafa Gültepe, Ekim'de parite nedeniyle toplam ihracatta 463 milyon dolarlık kayıp yaşandığını söyledi. İHKİB verilerine göre ilk on ayda hazır giyimde en büyük pazar Almanya'ya ihracat %12,9, Hollanda'ya %7,0, İngiltere'ye %7,2 azalırken İspanya'ya %1,0, ABD'ye %3,8 arttı.",
          onemi: "Toplam ihracat artarken hazır giyimin Ekim'de en sert düşen sektörler arasında yer alması dikkat çekici. Düşüşün Almanya, Hollanda ve İngiltere gibi büyük Avrupa pazarlarında yoğunlaşması, bu hafta Primark'ın Avrupa'daki zayıf satışlarına ve M&S'in İngiltere'de küçülen giyim pazarına dair açıklamalarıyla aynı döneme denk geliyor. Türkiye'deki üretim ve tedarik tabanının bu daralmadan nasıl etkileneceği, yerli tedarikle çalışan moda perakendecileri için izlenecek bir soru.",
          not: "Parite etkisi: İhracatın bir kısmı euro gibi farklı para birimleriyle yapıldığı için bu para birimlerinin dolar karşısındaki değişiminin, dolar cinsinden hesaplanan ihracat rakamına etkisi. Miktar bazında ihracat: Fiyat değişimlerinden arındırılmış, satılan ürün miktarındaki değişim.",
          kaynaklar: [
            {
              ad: "İHKİB · Hazır giyim ve konfeksiyon sektörü Ocak–Ekim 2026 raporu",
              url: "https://www.ihkib.org.tr/content/files/uploads/4170/hazir-giyim-ve-konfeksiyon-sektoru-2026-ekim-ihracat-bilgi-notu.pdf",
              tip: "resmi",
              en: { ad: "İHKİB · Apparel and clothing sector January–October 2026 report" }
            },
            {
              ad: "Ticaret Gazetesi · Ekim ayı ihracatı",
              url: "https://ticaretgazetesi.com.tr/2026/11/03/turkiyenin-ekim-ayi-ihracati-259-milyar-dolar-oldu/",
              tip: "ikinci",
              en: { ad: "Ticaret Gazetesi · October exports" }
            },
            {
              ad: "Ekonomist (Anadolu Ajansı) · TİM Başkanı Gültepe'nin değerlendirmesi",
              url: "https://www.ekonomist.com.tr/ekonomi-haberleri/tim-baskani-mustafa-gultepe-ekim-ayi-dis-ticaret-verilerini-degerlendirdi-80506",
              tip: "ikinci",
              en: { ad: "Ekonomist (Anadolu Agency) · TİM Chairman Gültepe's assessment" }
            }
          ],
          en: {
            kisa: "Apparel exports",
            tarih: "3 Nov",
            tur: "Official data",
            baslik: "Apparel exports fell 14.1% year on year in October",
            ozet: "According to data announced on 3 November by the Ministry of Trade and the Turkish Exporters Assembly (TİM), Türkiye's total exports rose 8.1% year on year to $25.9 billion in October, while apparel exports fell 14.1% compared with the same month last year. According to the report of the Istanbul Apparel Exporters' Association (İHKİB), apparel and clothing exports fell 3.8% to $13.66 billion in January–October.",
            ek: "According to the data, total exports fell 1.7% in volume terms in October and 2.1% over the ten-month period. TİM Chairman Mustafa Gültepe said the parity effect caused a $463 million loss in total exports in October. According to İHKİB data, in the first ten months apparel exports to Germany, the largest market, fell 12.9%, to the Netherlands 7.0% and to the UK 7.2%, while exports to Spain rose 1.0% and to the US 3.8%.",
            onemi: "It is notable that apparel was among the sectors with the sharpest declines in October while total exports rose. The concentration of the decline in large European markets such as Germany, the Netherlands and the UK coincides with this week's statements by Primark on weak sales in Europe and by M&S on a shrinking clothing market. How Türkiye's manufacturing and supply base will be affected by this contraction is a question to watch for fashion retailers sourcing locally.",
            not: "Parity effect: because part of exports is invoiced in other currencies such as the euro, the effect of changes in those currencies against the dollar on export figures calculated in dollars. Exports in volume terms: the change in the quantity of products sold, excluding price changes."
          }
        },
        {
          id: "h2",
          kisa: "Primark",
          kategori: "moda",
          tarih: "3 Kasım",
          tur: "Şirket sonuçları",
          baslik: "Primark'ın kârı düştü, Avrupa'da benzer mağaza satışları geriledi",
          ozet: "Associated British Foods'un (ABF) açıkladığı yıllık sonuçlara göre Primark'ın satışları 12 Eylül 2026'da biten 52 haftalık dönemde 9,8 milyar sterline yükseldi; yeni mağazalar büyümeye yaklaşık 5 puan katkı yaptı. Benzer mağaza satışları ise %2,6 azaldı: İngiltere'de %0,5 artarken Avrupa kıtasında %4,7 geriledi. Düzeltilmiş faaliyet kârı yaklaşık %11 düşüşle 1,126 milyar sterlinden 1,005 milyar sterline indi; faaliyet kâr marjı %11,9'dan %10,2'ye geriledi.",
          ek: "Şirket, kârdaki düşüşü daha zayıf benzer mağaza satışlarına, daha yüksek indirimlere ve fiyat, ürün, pazarlama ve dijitale yaptığı yatırımlara bağladı; Primark Temmuz'da yüzlerce üründe fiyat indirmişti. Yıl içinde 14'ü ABD'de olmak üzere 33 yeni mağaza açıldı; ABD'de satışlar %13 arttı. Şirket yeni mali yıl için yaklaşık %10 faaliyet kâr marjı bekliyor. ABF, Primark'ı gıda işlerinden ayırma planının takvimde olduğunu açıkladı.",
          onemi: "Avrupa'nın en büyük düşük fiyatlı moda perakendecilerinden biri, zayıf tüketici ortamında fiyata yatırım yapmayı seçti; bunun bedeli faaliyet kâr marjında görüldü. Primark örneğinde büyümenin ağırlıkla yeni mağazalardan gelmesi, mevcut mağazalarda ise benzer mağaza satışlarının gerilemesi dikkat çekiyor. Talebin zayıf seyrettiği bir dönemde büyük bir oyuncunun fiyat indirimiyle hacmi korumaya çalışması, sezon boyunca fiyat rekabetinin yönüne dair izlenecek bir örnek.",
          not: "Benzer mağaza satışları (LFL): En az bir yıldır açık olan mağazaların satışlarının bir önceki yılla karşılaştırılması; yeni mağazaların etkisini dışarıda bırakır. Düzeltilmiş faaliyet kârı: Tek seferlik kalemler hariç tutularak hesaplanan faaliyet kârı.",
          kaynaklar: [
            {
              ad: "ABF · 2026 yıllık sonuç duyurusu",
              url: "https://www.abf.co.uk/content/dam/abf/corporate/Documents/investors/results-and-presentations/2026/abf-annual-results-2026-announcement.pdf",
              tip: "resmi",
              en: { ad: "ABF · 2026 annual results announcement" }
            },
            {
              ad: "TheJournal.ie · Primark'ın kârı düştü",
              url: "https://www.thejournal.ie/penneys-primark-profits-fall-abf-7213303-Nov2026/",
              tip: "ikinci",
              en: { ad: "TheJournal.ie · Primark profits fall" }
            }
          ],
          en: {
            kisa: "Primark",
            tarih: "3 Nov",
            tur: "Company results",
            baslik: "Primark's profit falls as European like-for-like sales decline",
            ozet: "According to the annual results published by Associated British Foods (ABF), Primark's sales rose to £9.8 billion in the 52 weeks to 12 September 2026; new stores contributed about 5 points to growth. Like-for-like sales, however, fell 2.6%: up 0.5% in the UK and down 4.7% in continental Europe. Adjusted operating profit fell about 11%, from £1.126 billion to £1.005 billion; the operating margin fell from 11.9% to 10.2%.",
            ek: "The company attributed the fall in profit to weaker like-for-like sales, higher markdowns and investment in prices, product, marketing and digital; Primark had cut prices on hundreds of lines in July. It opened 33 new stores during the year, 14 of them in the US; US sales rose 13%. The company expects an operating margin of about 10% for the new financial year. ABF said its plan to separate Primark from its food businesses is on track.",
            onemi: "One of Europe's largest low-price fashion retailers chose to invest in price in a weak consumer environment; the cost showed up in its operating margin. In Primark's case, it is notable that growth came mainly from new stores while like-for-like sales in existing stores fell. A major player trying to protect volumes through price cuts at a time of weak demand is an example worth watching for the direction of price competition through the season.",
            not: "Like-for-like (LFL) sales: a comparison of sales at stores open for at least a year with the previous year; excludes the effect of new stores. Adjusted operating profit: operating profit calculated excluding one-off items."
          }
        },
        {
          id: "h3",
          kisa: "M&S",
          kategori: "moda",
          tarih: "4 Kasım",
          tur: "Şirket sonuçları",
          baslik: "M&S: Giyim pazarı zayıf, satışlar online'a kayıyor",
          ozet: "Marks & Spencer, 2026/27 mali yılının ilk yarısında grup satışlarının %16,2 artışla 9,3 milyar sterline, düzeltilmiş vergi öncesi kârın ise 184,1 milyon sterlinden 403,2 milyon sterline yükseldiğini açıkladı. Şirket artışı, geçen yıl yaşadığı siber saldırının yol açtığı aksaklıktan toparlanmaya bağladı. Moda, Ev ve Güzellik bölümünün satışları %17,5 artışla 1,995 milyar sterlin oldu; ancak bölümün satış ve kârı iki yıl önceki seviyenin altında kaldı (iki yıl önceki satış 2,031 milyar sterlin).",
          ek: "Şirketin iki yıl önceyle yaptığı karşılaştırmaya göre bölümün online satışları (mobilya hariç) %11,2 artarken mağaza satışları %5,2 azaldı; CEO Stuart Machin'e göre online artık bölüm satışlarının %35'ini oluşturuyor. Şirket bülteninde, Worldpanel verilerine göre giyim pazarının 13 Eylül'de biten 12 haftada iki yıl öncesine göre %5,5 küçüldüğünü belirtti; CFO Alison Brittain, dönem boyunca mevsim normallerinin üzerinde seyreden sıcak havanın yoğun promosyonlu bir pazara yol açtığını söyledi. Machin ise ilk yarıda potansiyelin altında kaldıklarını belirtti. Şirket, bölümün ikinci yarıda ilk yarıya göre iyileşmesini bekliyor.",
          onemi: "Yüksek büyüme oranlarının geçen yılki düşük bazdan kaynaklandığı göz önüne alındığında, asıl dikkat çeken M&S'in giyim pazarını küçülen ve yoğun promosyonlu bir pazar olarak tanımlaması; bu, Primark'taki fiyat indirimleriyle aynı tabloya işaret ediyor. M&S örneğinde satışlar online kanala kayarken mağaza satışları iki yıl öncesinin altında kaldı.",
          not: "Düzeltilmiş vergi öncesi kâr: Tek seferlik kalemler hariç tutularak hesaplanan vergi öncesi kâr.",
          kaynaklar: [
            {
              ad: "M&S · İlk yarı sonuç bülteni",
              url: "https://corporate.marksandspencer.com/sites/marksandspencer/files/2026-11/m-s-fy27-h1-rns-final.pdf",
              tip: "resmi",
              en: { ad: "M&S · Half-year results release" }
            },
            {
              ad: "Investing.com · M&S ilk yarı sonuçları",
              url: "https://www.investing.com/news/company-news/marks--spencer-h1-2026-slides-profit-doubles-on-food-strength-93CH-4998226",
              tip: "ikinci",
              en: { ad: "Investing.com · M&S half-year results" }
            },
            {
              ad: "Investing.com · M&S analist toplantısı metni",
              url: "https://www.investing.com/news/transcripts/earnings-call-transcript-marks--spencer-h1-2026-profit-more-than-doubles-93CH-4997604",
              tip: "ikinci",
              en: { ad: "Investing.com · M&S earnings call transcript" }
            }
          ],
          en: {
            kisa: "M&S",
            tarih: "4 Nov",
            tur: "Company results",
            baslik: "M&S: clothing market weak, sales shifting online",
            ozet: "Marks & Spencer reported that group sales rose 16.2% to £9.3 billion in the first half of its 2026/27 financial year, while adjusted profit before tax rose from £184.1 million to £403.2 million. The company attributed the increase to recovery from the disruption caused by last year's cyber incident. Sales in the Fashion, Home & Beauty division rose 17.5% to £1.995 billion; however, the division's sales and profit remained below their level of two years ago (sales two years ago: £2.031 billion).",
            ek: "Compared with two years earlier, the division's online sales (excluding furniture) rose 11.2% while store sales fell 5.2%; according to CEO Stuart Machin, online now accounts for 35% of the division's sales. In its release, the company said the clothing market declined by 5.5% versus two years ago in the 12 weeks to 13 September, according to Worldpanel data; CFO Alison Brittain said unseasonably hot weather throughout the half drove a heavily promotional market. Machin said they fell short of their full potential in the first half. The company expects the division to improve in the second half compared with the first.",
            onemi: "Given that the high growth rates reflect last year's low base, what stands out is M&S describing the clothing market as shrinking and heavily promotional; this points to the same picture as Primark's price cuts. In M&S's case, sales shifted to online while store sales remained below their level of two years ago.",
            not: "Adjusted profit before tax: profit before tax calculated excluding one-off items."
          }
        },
        {
          id: "h4",
          kisa: "Next",
          kategori: "moda",
          tarih: "5 Kasım",
          tur: "Şirket açıklaması",
          baslik: "Next: Büyüme yurt dışından, AB vergileri maliyet ekledi",
          ozet: "Next, 31 Ekim'de biten 13 haftalık üçüncü çeyrekte tam fiyatlı satışlarının %8,1 arttığını açıkladı. İngiltere'deki tam fiyatlı satışlar %2 artarken, İngiltere'de online satışlar %4,4 arttı, mağaza satışları ise %1,7 azaldı. Yurt dışı online satışlar %32,2 yükseldi. Şirket, 1,26 milyar sterlinlik yıllık vergi öncesi kâr beklentisini korudu.",
          ek: "Şirketin açıklamasına göre Eylül'deki sıcak hava satışları olumsuz etkiledi, Ekim'de seyir normale döndü. Next, AB dışındaki stoktan AB adreslerine yapılan sınır ötesi online siparişlere 1 Temmuz ve 1 Kasım 2026'da başlayan AB vergilerinin bu yıl net yaklaşık 5 milyon sterlinlik maliyet getireceğini belirtti; bu nedenle tedarik zincirinde yeniden düzenleme ve bazı bölgelerde sınırlı fiyat ayarlamaları planlıyor.",
          onemi: "AB'nin AB dışından gelen online siparişlere yönelik yeni vergi ve ücretleri, Next örneğinde Çinli platformların yanı sıra AB dışındaki stoktan Avrupa'ya online satış yapan moda perakendecilerine de maliyet getirdi. Next'te büyümenin neredeyse tamamı yurt dışından ve online kanaldan gelirken İngiltere'de mağaza satışları geriledi.",
          not: "Tam fiyatlı satış: İndirimli ürünler hariç, etiket fiyatından yapılan satışlar. Sınır ötesi online satış: Tüketiciye başka bir ülkedeki depodan doğrudan gönderilen siparişler.",
          kaynaklar: [
            {
              ad: "FashionUnited · Next'in üçüncü çeyreği",
              url: "https://fashionunited.uk/news/business/next-maintains-full-year-profit-guidance-as-international-sales-drive-third-quarter-growth/2026110591198",
              tip: "ikinci",
              en: { ad: "FashionUnited · Next's third quarter" }
            }
          ],
          en: {
            kisa: "Next",
            tarih: "5 Nov",
            tur: "Company statement",
            baslik: "Next: growth from abroad, EU duties add costs",
            ozet: "Next reported that full-price sales rose 8.1% in the 13-week third quarter to 31 October. UK full-price sales rose 2%, with UK online sales up 4.4% and store sales down 1.7%. International online sales rose 32.2%. The company maintained its full-year profit before tax guidance of £1.26 billion.",
            ek: "According to the company, warm weather weighed on sales in September, and trading returned to normal in October. Next said EU duties on cross-border online orders shipped to EU addresses from stock outside the EU, which started on 1 July and 1 November 2026, will bring a net cost of about £5 million this year; it is therefore planning a supply-chain realignment and modest regional price adjustments.",
            onemi: "In Next's case, the EU's new duties and fees on online orders from outside the EU added costs not only for Chinese platforms but also for fashion retailers selling online into Europe from stock held outside the EU. At Next, almost all growth came from overseas and from the online channel, while UK store sales declined.",
            not: "Full-price sales: sales at the ticket price, excluding discounted items. Cross-border online sales: orders shipped directly to the consumer from a warehouse in another country."
          }
        }
      ],
      takipte: [
        {
          baslik: "Asgari ücret: Komisyon Aralık'ta toplanacak",
          kategori: "isgucu",
          tarih: "3 Kasım",
          onceki: { no: 1, id: "h1" },
          simdi: "Bakan Vedat Işıkhan, 3 Kasım'da TBMM Plan ve Bütçe Komisyonu'nda Asgari Ücret Tespit Komisyonu'nun Aralık'ta toplanacağını söyledi; ilk toplantının günü henüz açıklanmadı.",
          kaynaklar: [
            {
              ad: "Karar · Bakan Işıkhan'ın açıklaması",
              url: "https://www.karar.com/ekonomi-haberleri/bakan-isikhan-acikladi-asgari-ucret-ve-memur-zamminda-takvim-2082111",
              tip: "ikinci",
              en: { ad: "Karar · Minister Işıkhan's statement" }
            },
            {
              ad: "Milli Gazete · Asgari ücret takvimi",
              url: "https://www.milligazete.com.tr/bakan-isikhandan-asgari-ucret-ve-emekli-maasi-aciklamasi-2027-zam-takvimi-belli-oldu",
              tip: "ikinci",
              en: { ad: "Milli Gazete · Minimum wage timetable" }
            }
          ],
          en: {
            baslik: "Minimum wage: commission to meet in December",
            tarih: "3 Nov",
            simdi: "Minister Vedat Işıkhan told the parliamentary Planning and Budget Committee on 3 November that the Minimum Wage Determination Commission will meet in December; the date of the first meeting has not yet been announced."
          }
        }
      ],
      sinyal: {
        baslik: "Satış fiyatı ile maliyet arasındaki makas",
        metin: "Bu haftanın sonuçlarında ortak nokta marj baskısı. Primark fiyat indirimlerini ve daha yüksek indirimleri kârdaki düşüşün nedenleri arasında saydı, Koton brüt marj beklentisini aşağı çekti, M&S de giyim pazarını zayıf olarak tanımladı. Türkiye'de giyimde yıllık fiyat artışı genel enflasyonun belirgin biçimde altında kalırken kira gibi maliyet kalemlerindeki artış sınırı genel enflasyona yakın. Satış fiyatı ile maliyet artışı arasındaki bu makas, sezonun belirleyici başlıklarından biri.",
        dayanak: ["ana", "h2", "h3", "veri"],
        en: {
          baslik: "The gap between selling prices and costs",
          metin: "The common thread in this week's results is margin pressure. Primark cited price cuts and higher markdowns among the reasons for its lower profit, Koton lowered its gross margin expectation, and M&S described the clothing market as weak. In Türkiye, the annual price increase in clothing remained well below headline inflation, while the cap on increases in cost items such as rent is close to headline inflation. This gap between selling prices and cost increases is one of the defining issues of the season."
        }
      },
      veri: {
        id: "veri",
        kisa: "Ekim enflasyonu",
        kategori: "tr",
        tarih: "3 Kasım",
        tur: "Resmî veri",
        deger: "%13,38",
        baslik: "Giyimde yıllık fiyat artışı %13,38 ile en düşük",
        metin: "TÜİK verilerine göre tüketici fiyatları Ekim'de aylık %2,58, yıllık %29,77 arttı. Giyim ve ayakkabı grubunda fiyatlar Ekim'de bir önceki aya göre %12,58 ile en yüksek artışı gösterdi; buna karşın grubun yıllık artışı %13,38 ile 13 ana harcama grubu arasında en düşük oldu.",
        karsilastirma: [
          { etiket: "Eğitim", deger: 48.86, en: { etiket: "Education" } },
          { etiket: "Sağlık", deger: 43.29, en: { etiket: "Health" } },
          { etiket: "Konut", deger: 40.24, en: { etiket: "Housing" } },
          { etiket: "Genel TÜFE", deger: 29.77, en: { etiket: "Headline CPI" } },
          { etiket: "Gıda ve alkolsüz içecekler", deger: 27.73, en: { etiket: "Food and non-alcoholic beverages" } },
          { etiket: "Giyim ve ayakkabı", deger: 13.38, vurgu: true, en: { etiket: "Clothing and footwear" } }
        ],
        olcek: 50,
        orneklem: "Yıllık değişim (%), Ekim 2026 · TÜİK, 3 Kasım 2026'da açıklandı",
        ozet: "TÜİK'in Ekim 2026 fiyat verilerinden öne çıkanlar:",
        maddeler: [
          "Tüketici fiyatları (TÜFE): aylık %2,58, yıllık %29,77 (Eylül'de yıllık %29,73).",
          "Giyim ve ayakkabı: aylık %12,58 (ana gruplar arasında en yüksek), yıllık %13,38 (en düşük).",
          "Çekirdek enflasyon (C endeksi): yıllık %28,28.",
          "Yurt içi üretici fiyatları (Yİ-ÜFE): aylık %1,65, yıllık %27,41.",
          "TÜFE'nin 12 aylık ortalamalara göre değişimi %31,23; bu oran Kasım'da ev ve iş yeri kira artışlarında üst sınır olarak uygulanıyor."
        ],
        onemi: "Giyimde aylık artış yüksek olsa da yıllık artışın genel enflasyonun yarısının altında kalması dikkat çekici. Kira gibi temel maliyet kalemleri genel enflasyona yakın ya da üzerinde artarken satış fiyatlarının daha yavaş artması, marj üzerindeki baskının nereden geldiğine dair bir gösterge. Kasım verisi, indirim döneminin fiyatlara yansımasını gösterecek.",
        not: "Çekirdek enflasyon (C endeksi): Enerji, gıda ve alkolsüz içecekler, alkollü içecekler, tütün ve altın hariç tutularak hesaplanan enflasyon. Yİ-ÜFE: Üreticilerin yurt içinde sattığı ürünlerin fiyatlarındaki değişim. 12 aylık ortalama değişim: Son 12 ayın endeks ortalamasının, bir önceki 12 ayın ortalamasına göre değişimi.",
        kaynaklar: [
          {
            ad: "Strateji ve Bütçe Başkanlığı · Ekim 2026 fiyat gelişmeleri",
            url: "https://www.sbb.gov.tr/2026-yili-ekim-ayi-tuketici-ve-uretici-fiyat-gelismeleri/",
            tip: "resmi",
            en: { ad: "Presidency of Strategy and Budget · October 2026 price developments" }
          },
          {
            ad: "Anadolu Ajansı · Ekim enflasyon rakamları",
            url: "https://www.aa.com.tr/tr/ekonomi/enflasyon-rakamlari-aciklandi/4109355",
            tip: "ikinci",
            en: { ad: "Anadolu Agency · October inflation figures" }
          },
          {
            ad: "Euronews Türkçe · Ekim enflasyonu ve kira artış oranı",
            url: "https://tr.euronews.com/2026/11/03/ekimde-yillik-enflasyon-tuik-yuzde-2977-enag-yuzde-4512-acikladi",
            tip: "ikinci",
            en: { ad: "Euronews Turkish · October inflation and rent cap" }
          }
        ],
        en: {
          kisa: "October inflation",
          tarih: "3 Nov",
          tur: "Official data",
          deger: "13.38%",
          baslik: "Clothing has the lowest annual price rise at 13.38%",
          metin: "According to TurkStat, consumer prices rose 2.58% month on month and 29.77% year on year in October. Clothing and footwear prices posted the highest month-on-month increase in October at 12.58%; however, the group's annual increase, at 13.38%, was the lowest among the 13 main expenditure groups.",
          orneklem: "Annual change (%), October 2026 · TurkStat, published 3 November 2026",
          ozet: "Highlights from TurkStat's October 2026 price data:",
          maddeler: [
            "Consumer prices (CPI): 2.58% month on month, 29.77% year on year (annual 29.73% in September).",
            "Clothing and footwear: 12.58% month on month (highest among the main groups), 13.38% year on year (lowest).",
            "Core inflation (C index): 28.28% year on year.",
            "Domestic producer prices (D-PPI): 1.65% month on month, 27.41% year on year.",
            "The change in CPI based on 12-month averages was 31.23%; this rate applies as the cap on residential and commercial rent increases in November."
          ],
          onemi: "Although the monthly increase in clothing was high, it is notable that the annual increase stayed below half of headline inflation. With key cost items such as rent rising close to or above headline inflation while selling prices rise more slowly, this is an indicator of where the pressure on margins comes from. November data will show how the sales period is reflected in prices.",
          not: "Core inflation (C index): inflation excluding energy, food and non-alcoholic beverages, alcoholic beverages, tobacco and gold. D-PPI: the change in prices of products sold domestically by producers. 12-month average change: the change in the average index of the last 12 months compared with the average of the previous 12 months."
        }
      },
      etkinlikler: [
        {
          ad: "Eylül ayı ticaret ve perakende satışları",
          tur: "Veri günü",
          baslangic: "2026-11-11",
          bitis: "2026-11-11",
          yer: "TÜİK",
          aciklama: "TÜİK Eylül ayı ticaret satış hacim endekslerini açıklayacak; perakendede tekstil, giyim ve ayakkabı satış hacmindeki seyir görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "September trade and retail sales",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish its September trade sales volume indices, showing the trend in textiles, clothing and footwear sales volume in retail."
          }
        },
        {
          ad: "Merkez Bankası Enflasyon Raporu",
          tur: "Rapor",
          baslangic: "2026-11-12",
          bitis: "2026-11-12",
          yer: "TCMB",
          aciklama: "Yılın son Enflasyon Raporu'nda Merkez Bankası'nın yıl sonu ve 2027 enflasyon tahminleri güncellenecek.",
          url: "https://www.cnbce.com/faiz/turkiye-cumhuriyet-merkez-bankasi-2026-yili-para-politikasi-kurulu-ppk-toplantilari-ve-rapor-takvimini-acikladi-h22037",
          en: {
            ad: "Central Bank Inflation Report",
            tur: "Report",
            yer: "CBRT",
            aciklama: "In the last Inflation Report of the year, the Central Bank will update its year-end and 2027 inflation forecasts."
          }
        },
        {
          ad: "Kasım ayı tüketici güveni",
          tur: "Veri günü",
          baslangic: "2026-11-20",
          bitis: "2026-11-20",
          yer: "TÜİK",
          aciklama: "Ekim'de %7,7 düşüşle 84,8'e inen tüketici güven endeksinin Kasım değeri açıklanacak.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "November consumer confidence",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "The November reading of the consumer confidence index, which fell 7.7% to 84.8 in October, will be published."
          }
        },
        {
          ad: "Black Friday",
          tur: "İndirim dönemi",
          baslangic: "2026-11-27",
          bitis: "2026-11-27",
          yer: "Küresel",
          aciklama: "ABD'de Şükran Günü'nün ertesi günü olan küresel indirim günü; Türkiye'de Kasım indirimleri döneminin içinde.",
          url: "https://ticaret.gov.tr/haberler/kasim-ayi-indirim-kampanyalari-ticaret-bakanliginin-yakin-takibinde",
          en: {
            ad: "Black Friday",
            tur: "Sales period",
            yer: "Global",
            aciklama: "The global sales day after Thanksgiving in the US; in Türkiye it falls within the November sales period."
          }
        },
        {
          ad: "Asgari Ücret Tespit Komisyonu",
          tur: "Beklenen toplantı",
          baslangic: "2026-12-01",
          bitis: "2026-12-31",
          yer: "Türkiye",
          aciklama: "Bakan Işıkhan'a göre komisyon Aralık'ta toplanacak; ilk toplantının tarihi henüz açıklanmadı.",
          url: "https://www.karar.com/ekonomi-haberleri/bakan-isikhan-acikladi-asgari-ucret-ve-memur-zamminda-takvim-2082111",
          en: {
            ad: "Minimum Wage Determination Commission",
            tur: "Expected meeting",
            yer: "Türkiye",
            aciklama: "According to Minister Işıkhan, the commission will meet in December; the date of the first meeting has not yet been announced.",
            tahminiMetin: "December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "Aralık (tahmini)"
        },
        {
          ad: "Inditex 9 aylık sonuçları",
          tur: "Şirket sonuçları",
          baslangic: "2026-12-02",
          bitis: "2026-12-02",
          yer: "Arteixo",
          aciklama: "Zara'nın sahibi Inditex, Şubat–Ekim dönemi sonuçlarını açıklayacak. Tarih piyasa takviminden; şirket henüz teyit etmedi.",
          url: "https://www.marketscreener.com/quote/stock/INDITEX-46535998/calendar/",
          en: {
            ad: "Inditex nine-month results",
            tur: "Company results",
            yer: "Arteixo",
            aciklama: "Zara owner Inditex will publish its February–October results. Date from a market calendar; not yet confirmed by the company.",
            tahminiMetin: "2 December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "2 Aralık (tahmini)"
        },
        {
          ad: "Kasım ayı enflasyonu",
          tur: "Veri günü",
          baslangic: "2026-12-03",
          bitis: "2026-12-03",
          yer: "TÜİK",
          aciklama: "TÜİK Kasım ayı tüketici fiyatlarını açıklayacak; indirim döneminin giyim fiyatlarına yansıması görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "November inflation",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish November consumer prices, showing how the sales period is reflected in clothing prices."
          }
        },
        {
          ad: "Merkez Bankası faiz kararı",
          tur: "Karar günü",
          baslangic: "2026-12-10",
          bitis: "2026-12-10",
          yer: "TCMB",
          aciklama: "Para Politikası Kurulu'nun yılın son toplantısı. Ekim'deki toplantıda politika faizi %37'den %36'ya indirilmişti.",
          url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Duyurular/Basin/2026/DUY2026-45",
          en: {
            ad: "Central Bank rate decision",
            tur: "Decision day",
            yer: "CBRT",
            aciklama: "The Monetary Policy Committee's last meeting of the year. At the October meeting the policy rate was cut from 37% to 36%."
          }
        }
      ],
      en: {
        donem: "2–8 November 2026",
        yayin: "8 November 2026",
        sonraki: "Sunday, 15 November",
        gundemNotu: "1 Türkiye, 3 global"
      }
    },
    {
      no: 3,
      donem: "26 Ekim – 1 Kasım 2026",
      yayin: "1 Kasım 2026",
      sonraki: "8 Kasım Pazar",
      okuma: 6,
      gundemNotu: "1 Türkiye, 2 dünya",
      birDakika: [
        {
          baslik: "Ticaret Bakanlığı Kasım indirim reklamlarını mecra ayrımı gözetmeden takibe aldı; indirimden önceki fiyatın son 10 günün en düşük fiyatı olması kuralı denetimin merkezinde.",
          anlam: "Kasım, 1 Ağustos'ta yürürlüğe giren kurallarla girilen ilk büyük indirim dönemlerinden; Bakanlığa göre aykırılıkta 99.339 TL ile 39.916.524 TL arasında idari para cezası uygulanabiliyor.",
          ref: "ana",
          en: {
            baslik: "The Ministry of Trade is monitoring November discount ads across all channels; the rule that the pre-discount price must be the lowest price of the previous 10 days is at the centre of the checks.",
            anlam: "November is one of the first major sales periods under the rules in force since 1 August; according to the ministry, violations can draw administrative fines of between ₺99,339 and ₺39,916,524."
          }
        },
        {
          baslik: "İşsizlik oranı Eylül'de 0,5 puan artarak %8,4'e çıktı; işsiz sayısı bir ayda 198 bin arttı.",
          anlam: "Bloomberg HT'ye göre oran Şubat'tan bu yana en yüksek seviyede; aynı hafta açıklanan ekonomik güven endeksi de 100'ün altına indi.",
          ref: "h1",
          en: {
            baslik: "The unemployment rate rose 0.5 points to 8.4% in September; the number of unemployed rose by 198,000 in a month.",
            anlam: "According to Bloomberg HT, the rate is at its highest since February; the economic confidence index, published the same week, also fell below 100."
          }
        },
        {
          baslik: "Adidas üçüncü çeyrekte rekor gelir açıkladı, Puma'nın satışları kur etkisinden arındırılmış olarak %6,3 düştü; Puma, Avrupa'daki talebin durgun seyrettiğini belirtti.",
          anlam: "Aynı kategoride iki büyük oyuncu arasında belirgin bir ayrışma var; iki şirkette de kendi mağaza ve online kanalları toptan satıştan daha iyi seyretti.",
          ref: "h2",
          en: {
            baslik: "Adidas reported record third-quarter revenue, while Puma's sales fell 6.3% currency-adjusted; Puma said demand in Europe was subdued.",
            anlam: "There is a clear divergence between two major players in the same category; at both companies, their own stores and online channels performed better than wholesale."
          }
        }
      ],
      ana: {
        id: "ana",
        kisa: "Kasım indirimleri",
        kategori: "tr",
        tarih: "28 Ekim",
        tur: "Düzenleyici açıklama",
        okumaSuresi: 2,
        baslik: "Kasım indirimleri Ticaret Bakanlığı'nın yakın takibinde",
        ozet: "Ticaret Bakanlığı, Kasım ayı boyunca indirimli satış reklamlarının \"mecra ayrımı gözetilmeksizin\" yakından takip edileceğini açıkladı. Bakanlığa göre mevzuata aykırı bulunan reklamlar için ihlalin niteliğine göre 99.339 TL ile 39.916.524 TL arasında idari para cezası uygulanabiliyor. Açıklamada, indirimli satış reklamlarına ilişkin kuralların 1 Ağustos 2026'da yürürlüğe giren mevzuat değişikliğiyle güncellendiği hatırlatıldı.",
        ek: "Haberlere göre değişiklik, 1 Temmuz 2026 tarihli Resmî Gazete'de yayımlanan Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği değişikliğiyle yapıldı. Tüketiciler şikâyetlerini Reklam Kurulu'na iletebiliyor.",
        onemi: "Kasım, yeni kurallarla girilen ilk büyük indirim dönemlerinden. Denetimin odağı indirim oranının kendisinden çok, indirimden önceki fiyatın nasıl belirlendiği, kampanya tarihlerinin ve koşullarının nasıl gösterildiği. Mağaza, web sitesi ve pazaryerinde aynı anda yürüyen kampanyalarda fiyat geçmişinin ve koşulların tutarlı görünmesi bu sezonun belirgin bir sorusu.",
        bolumler: [
          {
            baslik: "Bakanlığın saydığı aykırılık örnekleri",
            maddeler: [
              "İndirim başlangıç tarihinden önceki on gün içinde uygulanan en düşük fiyatın esas alınmaması",
              "Gerçekte olmayan bir indirimin varmış gibi sunulması",
              "Kampanyanın başlangıç ve bitiş tarihlerinin belirtilmemesi",
              "\"%70 + %10 + %5\" gibi birden fazla indirim oranının kullanılması",
              "Sadakat programı ve şartlı satış reklamlarına ilişkin kurallara uyulmaması",
              "Reklamdaki ana vaat ile istisnalar arasında uyumsuzluk; koşulların gizlenmesi ya da zor bulunur olması"
            ]
          },
          {
            baslik: "1 Ağustos'tan bu yana geçerli kurallar",
            maddeler: [
              "İndirimden önceki fiyat olarak, indirimin başlangıç tarihinden önceki son on gün içinde uygulanan en düşük fiyat, üzeri çizilerek gösterilebiliyor.",
              "İndirim ya da başka bir faydayı bir şarta bağlayan şartlı satış reklamları da indirimli satış kurallarına tabi.",
              "Ceza aralığı: 99.339 TL ile 39.916.524 TL; tutar ihlalin niteliğine ve reklamın yayımlandığı mecraya göre belirleniyor."
            ]
          }
        ],
        not: "İdari para cezası: Mahkeme kararı olmadan, ilgili kurumun (burada Reklam Kurulu) verdiği para cezası. Şartlı satış: İndirimin bir koşula bağlandığı satış (örneğin belirli bir tutarın üzerindeki alışverişe indirim).",
        kapak: {
          gorsel: "kapak-sayi3.jpg",
          gorselAciklama: "Üzerindeki bir satırı çizilmiş pembe bir fiyat etiketi, arkasında yeşil bir etiket, etiketi inceleyen sarı bir büyüteç ve bir günü vurgulanmış takvim yaprağı",
          en: { gorselAciklama: "A pink price tag with one line struck through, a green tag behind it, a yellow magnifying glass examining the tag and a calendar page with one day highlighted" }
        },
        kaynaklar: [
          {
            ad: "Ticaret Bakanlığı · Kasım ayı indirim kampanyaları duyurusu",
            url: "https://ticaret.gov.tr/haberler/kasim-ayi-indirim-kampanyalari-ticaret-bakanliginin-yakin-takibinde",
            tip: "resmi",
            en: { ad: "Ministry of Trade · November sales campaigns announcement" }
          },
          {
            ad: "GZT (Anadolu Ajansı) · Kasım indirimlerine denetim",
            url: "https://www.gzt.com/gundem/efsane-cuma-ve-kasim-indirimleri-icin-siki-denetim-supheli-indirimi-tespit-eden-cezasini-odeyecek-4273454",
            tip: "ikinci",
            en: { ad: "GZT (Anadolu Agency) · Checks on November sales" }
          },
          {
            ad: "NTV · 1 Ağustos'ta yürürlüğe giren reklam kuralları",
            url: "https://www.ntv.com.tr/ntvpara/influencer-yapay-zeka-ve-indirimlere-1-agustos-freni-1734728",
            tip: "ikinci",
            en: { ad: "NTV · Advertising rules in force since 1 August" }
          }
        ],
        en: {
          kisa: "November sales",
          tarih: "28 Oct",
          tur: "Regulatory statement",
          baslik: "November sales under close watch by the Ministry of Trade",
          ozet: "The Ministry of Trade announced that discount advertising will be closely monitored throughout November \"regardless of channel\". According to the ministry, advertisements found to breach the rules can draw administrative fines of between ₺99,339 and ₺39,916,524, depending on the nature of the violation. The statement noted that the rules on discount advertising were updated by a regulatory change that took effect on 1 August 2026.",
          ek: "According to reports, the change was made through an amendment to the Regulation on Commercial Advertising and Unfair Commercial Practices published in the Official Gazette on 1 July 2026. Consumers can file complaints with the Advertising Board.",
          onemi: "November is one of the first major sales periods under the new rules. The focus of the checks is less the size of the discount than how the pre-discount price is set and how campaign dates and conditions are shown. Whether price histories and conditions look consistent across campaigns running at the same time in stores, on websites and on marketplaces is a clear question for this season.",
          bolumler: [
            {
              baslik: "Examples of violations listed by the ministry",
              maddeler: [
                "Not using the lowest price applied in the ten days before the discount start date as the reference",
                "Presenting a discount that does not actually exist",
                "Not stating the campaign's start and end dates",
                "Using multiple discount rates such as \"70% + 10% + 5%\"",
                "Not following the rules on loyalty programme and conditional-sale advertising",
                "A mismatch between the ad's main promise and its exceptions; hidden or hard-to-find conditions"
              ]
            },
            {
              baslik: "Rules in force since 1 August",
              maddeler: [
                "The lowest price applied in the last ten days before the discount start date can be shown, struck through, as the pre-discount price.",
                "Conditional-sale ads that tie a discount or other benefit to a condition are also subject to the discount advertising rules.",
                "Fine range: ₺99,339 to ₺39,916,524; the amount depends on the nature of the violation and the channel in which the ad was published."
              ]
            }
          ],
          not: "Administrative fine: a fine imposed by the relevant authority (here the Advertising Board) without a court ruling. Conditional sale: a sale where the discount depends on a condition (for example a discount on purchases above a certain amount)."
        }
      },
      haberler: [
        {
          id: "h1",
          kisa: "İşsizlik",
          kategori: "isgucu",
          tarih: "27 Ekim",
          tur: "Resmî veri",
          baslik: "İşsizlik Eylül'de %8,4'e yükseldi",
          ozet: "TÜİK'in mevsim etkisinden arındırılmış verilerine göre işsizlik oranı Eylül 2026'da bir önceki aya göre 0,5 puan artarak %8,4 oldu. İşsiz sayısı bir ayda 198 bin kişi artarak 2 milyon 967 bine çıktı; istihdam 49 bin kişi azalarak 32 milyon 445 bine indi. İstihdam oranı 0,1 puan düşüşle %48,3 oldu.",
          ek: "15–24 yaş grubunda işsizlik oranı bir önceki aya göre 1,6 puan artarak %14,8'e çıktı. Bloomberg HT'ye göre işsizlik oranı Şubat'tan bu yana en yüksek seviyede.",
          onemi: "İşgücü arzı artarken özellikle gençlerde işsizliğin bir ayda hızla yükselmesi dikkat çekici. Aynı tablo, Kasım ve yılbaşı sezonuna girerken hanelerin harcama gücüne dair temkinli bir işaret. Tek aylık bir veri olduğu için eğilimin kalıcı olup olmadığı önümüzdeki aylarda netleşecek.",
          not: "Mevsim etkisinden arındırılmış: Her yıl aynı dönemlerde tekrarlanan dalgalanmaların (tatil, hasat gibi) çıkarıldığı veri.",
          kaynaklar: [
            {
              ad: "Strateji ve Bütçe Başkanlığı · Eylül 2026 işgücü piyasası gelişmeleri",
              url: "https://www.sbb.gov.tr/2026-yili-eylul-ayi-isgucu-piyasasi-gelismeleri/",
              tip: "resmi",
              en: { ad: "Presidency of Strategy and Budget · September 2026 labour market developments" }
            },
            {
              ad: "Forbes Türkiye · TÜİK Eylül işgücü verileri",
              url: "https://www.forbes.com.tr/haberler/tuik-eylul-2026-issizlik-oranlari-issizlik-yuzde-8-4-e-yukseldi",
              tip: "ikinci",
              en: { ad: "Forbes Türkiye · TurkStat September labour data" }
            },
            {
              ad: "Bloomberg HT · Şubat'tan bu yana en yüksek seviye",
              url: "https://www.bloomberght.com/issizlik-yedi-ayin-zirvesinde-3792634",
              tip: "ikinci",
              en: { ad: "Bloomberg HT · Highest level since February" }
            }
          ],
          en: {
            kisa: "Unemployment",
            tarih: "27 Oct",
            tur: "Official data",
            baslik: "Unemployment rose to 8.4% in September",
            ozet: "According to TurkStat's seasonally adjusted data, the unemployment rate rose 0.5 points month on month to 8.4% in September 2026. The number of unemployed rose by 198,000 in a month to 2,967,000; employment fell by 49,000 to 32,445,000. The employment rate fell 0.1 points to 48.3%.",
            ek: "Unemployment among 15–24-year-olds rose 1.6 points month on month to 14.8%. According to Bloomberg HT, the unemployment rate is at its highest since February.",
            onemi: "As labour supply grows, the rapid one-month rise in youth unemployment in particular is notable. The same picture is a cautious signal for household spending power heading into the November and year-end season. As this is a single month of data, whether the trend persists will become clearer in the coming months.",
            not: "Seasonally adjusted: data with recurring fluctuations at the same time each year (holidays, harvests, etc.) removed."
          }
        },
        {
          id: "h2",
          kisa: "Adidas ve Puma",
          kategori: "moda",
          tarih: "29–30 Ekim",
          tur: "Şirket sonuçları",
          baslik: "Adidas'ta rekor çeyrek, Puma'da satışlar geriledi",
          ozet: "Adidas, Temmuz–Eylül döneminde gelirlerinin %9 artışla 7,25 milyar euroya ulaştığını açıkladı (kur etkisinden arındırılmış artış %7); faaliyet kârı %37 artışla 1,008 milyar euro oldu. Puma'nın aynı dönemdeki satışları ise kur etkisinden arındırılmış olarak %6,3 azalarak 1,776 milyar euroya geriledi (euro bazında düşüş %5).",
          ek: "Adidas'ın açıklamasına göre giyim satışları kur etkisinden arındırılmış olarak %19 arttı; şirket yıllık faaliyet kârı beklentisini yaklaşık 2,3 milyar eurodan yaklaşık 2,5 milyar euroya yükseltti. Adidas, Avrupa'da gelirlerin %4 gerilemesini toptan satışta izlediği temkinli sevkiyat politikasına ve teslimatların bir kısmının dördüncü çeyreğe kaymasına bağladı. Puma'da Avrupa, Orta Doğu ve Afrika (EMEA) satışları kur etkisinden arındırılmış olarak %11,5 geriledi; şirket Avrupa'daki talebin, Orta Doğu'daki çatışmanın yayılan etkileri nedeniyle durgun seyrettiğini belirtti.",
          onemi: "İki şirkette de kendi mağaza ve online kanalları toptan satıştan daha iyi seyretti: Adidas'ta doğrudan tüketiciye satışlar %17 artarken toptan satış %2 arttı, Puma'da doğrudan satışlar %1,2 artarken toptan satış %9,6 geriledi. Avrupa'da ise Puma talep zayıflığına işaret ederken Adidas düşüşü kendi sevkiyat kararına bağladı. Aynı kategoride iki büyük oyuncu arasındaki bu ayrışma, marka gücünün zayıf talep ortamında ne ölçüde fark yarattığı sorusunu öne çıkarıyor.",
          not: "Kur etkisinden arındırılmış: Döviz kurlarındaki değişimin etkisi çıkarılarak hesaplanan büyüme. Toptan satış: Ürünlerin başka perakendecilere (mağaza zincirleri, pazaryerleri) satılması. Doğrudan tüketiciye satış (DTC): Markanın kendi mağazaları ve online kanalları üzerinden yaptığı satış.",
          kaynaklar: [
            {
              ad: "Adidas · Üçüncü çeyrek sonuçları (resmî duyuru)",
              url: "https://www.adidas-group.com/en/media/press-releases/adidas-achieves-record-results-in-the-third-quarter-of-2026-and-increases-full-year-profit-outlook",
              tip: "resmi",
              en: { ad: "Adidas · Third-quarter results (official release)" }
            },
            {
              ad: "Puma · Üçüncü çeyrek sonuçları (resmî duyuru, EQS)",
              url: "https://www.tradingview.com/news/eqs:3bc9f41a5094b:0-puma-q3-2026-sales-performance-improves-sequentially-fy-2026-outlook-updated/",
              tip: "resmi",
              en: { ad: "Puma · Third-quarter results (official release, EQS)" }
            },
            {
              ad: "TheIndustry.fashion · Puma'nın üçüncü çeyreği",
              url: "https://www.theindustry.fashion/puma-narrows-annual-loss-forecast-as-q3-sales-fall-5/",
              tip: "ikinci",
              en: { ad: "TheIndustry.fashion · Puma's third quarter" }
            }
          ],
          en: {
            kisa: "Adidas and Puma",
            tarih: "29–30 Oct",
            tur: "Company results",
            baslik: "Record quarter at Adidas, sales decline at Puma",
            ozet: "Adidas reported that revenues rose 9% to €7.25 billion in July–September (up 7% currency-neutral); operating profit rose 37% to €1.008 billion. Puma's sales in the same period fell 6.3% currency-adjusted to €1.776 billion (down 5% in euro terms).",
            ek: "According to Adidas, apparel sales rose 19% currency-neutral; the company raised its full-year operating profit outlook from around €2.3 billion to around €2.5 billion. Adidas attributed the 4% decline in revenues in Europe to its conservative sell-in approach in wholesale and to some deliveries shifting into the fourth quarter. At Puma, sales in Europe, the Middle East and Africa (EMEA) fell 11.5% currency-adjusted; the company said demand in Europe was subdued amid spillover effects from the conflict in the Middle East.",
            onemi: "At both companies, their own stores and online channels performed better than wholesale: at Adidas, direct-to-consumer sales rose 17% while wholesale rose 2%; at Puma, direct sales rose 1.2% while wholesale fell 9.6%. In Europe, Puma pointed to weak demand, while Adidas attributed the decline to its own sell-in decision. This divergence between two major players in the same category raises the question of how much brand strength makes a difference in a weak demand environment.",
            not: "Currency-adjusted / currency-neutral: growth calculated excluding the effect of exchange-rate changes. Wholesale: selling products to other retailers (store chains, marketplaces). Direct-to-consumer (DTC): sales through the brand's own stores and online channels."
          }
        },
        {
          id: "h3",
          kisa: "AB ve Temu",
          kategori: "eticaret",
          tarih: "26 Ekim",
          tur: "Düzenleyici karar",
          baslik: "AB, Temu'nun yasa dışı ürün eylem planını kabul etti",
          ozet: "Avrupa Komisyonu, Dijital Hizmetler Yasası (DSA) kapsamındaki ihlali gidermek için Temu'nun sunduğu eylem planını kabul ettiğini açıkladı. Plan, platformda yasa dışı ürünlerin bulunmasıyla mücadeleye yönelik beş önlemden oluşuyor. Temu'nun, 30 Kasım 2026'ya kadarki altı aylık dönemi kapsayan ara risk değerlendirmesini yapmak için dört ayı var.",
          ek: "Eylem planı, Komisyon'un Mayıs 2026'da Temu'nun risk değerlendirme yükümlülüklerini yerine getirmediğini tespit ederek verdiği 200 milyon euroluk cezanın ardından geldi.",
          onemi: "Avrupa Komisyonu, ultra ucuz pazaryerlerinden platformda satılan ürünler için ölçülebilir önlem istiyor. Geçen hafta yer alan düşük değerli paket ücretleriyle birlikte bu, söz konusu platformların Avrupa'daki faaliyet koşullarını ağırlaştıran bir başka adım.",
          not: "Dijital Hizmetler Yasası (DSA): AB'de çevrim içi platformların yasa dışı içerik ve ürünlere karşı yükümlülüklerini düzenleyen yasa. Öneri sistemi: Platformun kullanıcıya hangi ürünü göstereceğini seçen algoritma.",
          kaynaklar: [
            {
              ad: "Avrupa Komisyonu · Temu eylem planının kabulü",
              url: "https://digital-strategy.ec.europa.eu/en/news/commission-accepts-temus-action-plan-remedy-breach-digital-services-act",
              tip: "resmi",
              en: { ad: "European Commission · Acceptance of Temu's action plan" }
            },
            {
              ad: "The Brussels Times · AB'nin Temu kararı",
              url: "https://www.brusselstimes.com/eu-affairs/2378864/eu-forces-temu-to-act-after-e200m-fine-under-european-digital-law",
              tip: "ikinci",
              en: { ad: "The Brussels Times · EU decision on Temu" }
            }
          ],
          en: {
            kisa: "EU and Temu",
            tarih: "26 Oct",
            tur: "Regulatory decision",
            baslik: "EU accepts Temu's action plan on illegal products",
            ozet: "The European Commission announced that it has accepted the action plan Temu submitted to remedy its breach of the Digital Services Act (DSA). The plan consists of five measures to tackle the availability of illegal products on the platform. Temu has four months to carry out an interim risk assessment covering a six-month period until 30 November 2026.",
            ek: "The action plan follows the €200 million fine the Commission imposed in May 2026 after finding that Temu had failed to meet its risk assessment obligations.",
            onemi: "The European Commission is requiring ultra-low-cost marketplaces to take measurable steps on the products sold on their platforms. Together with the low-value parcel fees covered last week, this is another step tightening the conditions under which these platforms operate in Europe.",
            not: "Digital Services Act (DSA): the EU law setting out online platforms' obligations regarding illegal content and products. Recommender system: the algorithm that chooses which products a platform shows to the user."
          }
        }
      ],
      sinyal: {
        baslik: "Kasım'a temkinli talep ve sıkı kurallarla giriliyor",
        metin: "Bu haftanın Türkiye verileri Kasım sezonuna temkinli bir tablo çiziyor: işsizlik yükseldi, ekonomik güven 100'ün altına indi ve perakendecilerin önümüzdeki üç aya dair satış beklentisi de geriledi. Aynı hafta Ticaret Bakanlığı, indirim reklamlarını Kasım boyunca izleyeceğini duyurdu. Talebin zayıf seyrettiği bir dönemde indirimler daha çok öne çıkarken, bu indirimlerin yeni kurallara göre doğrulanabilir olması da aynı ölçüde önem kazanıyor.",
        dayanak: ["ana", "h1", "veri"],
        en: {
          baslik: "November begins with cautious demand and strict rules",
          metin: "This week's Turkish data paint a cautious picture for the November season: unemployment rose, economic confidence fell below 100, and retailers' sales expectations for the next three months also declined. In the same week, the Ministry of Trade announced it will monitor discount ads throughout November. At a time of weak demand, as discounts become more prominent, it matters just as much that those discounts can be verified under the new rules."
        }
      },
      veri: {
        id: "veri",
        kisa: "Güven endeksleri",
        kategori: "tr",
        tarih: "26 ve 30 Ekim",
        tur: "Resmî veri",
        deger: "97,3",
        baslik: "Ekonomik güven 100'ün altına indi, perakende güveni arttı",
        metin: "TÜİK verilerine göre ekonomik güven endeksi Ekim'de bir önceki aya göre %3,9 azalarak 101,3'ten 97,3'e geriledi. Alt endekslerde en sert düşüş tüketici güveninde görüldü; perakende ticaret güven endeksi ise aynı ay %1,1 artışla 112,5'e yükseldi.",
        karsilastirma: [
          { etiket: "Perakende ticaret güveni", deger: 1.1, en: { etiket: "Retail trade confidence" } },
          { etiket: "İnşaat güveni", deger: 0.4, en: { etiket: "Construction confidence" } },
          { etiket: "Reel kesim güveni", deger: -1.4, en: { etiket: "Real sector confidence" } },
          { etiket: "Hizmet güveni", deger: -2.4, en: { etiket: "Services confidence" } },
          { etiket: "Ekonomik güven endeksi", deger: -3.9, vurgu: true, en: { etiket: "Economic confidence index" } },
          { etiket: "Tüketici güveni", deger: -7.7, en: { etiket: "Consumer confidence" } }
        ],
        olcek: 10,
        orneklem: "Aylık değişim (%), Ekim 2026 · Sektörel güven 26 Ekim'de, ekonomik güven 30 Ekim'de açıklandı; tüketici güveni 22 Ekim'de açıklanmıştı (geçen sayının ana gelişmesi)",
        ozet: "TÜİK'in Ekim 2026 güven endekslerinden öne çıkanlar (mevsim etkisinden arındırılmış; tüketici güveninde mevsim etkisi yok):",
        maddeler: [
          "Ekonomik güven endeksi: 97,3 (Eylül: 101,3), %3,9 düşüş.",
          "Tüketici güveni: 84,8 (Eylül: 91,9), %7,7 düşüş.",
          "Reel kesim güveni: 101,1 (Eylül: 102,5), %1,4 düşüş.",
          "Hizmet güveni: 109,2 (Eylül: 111,9), %2,4 düşüş.",
          "Perakende ticaret güveni: 112,5 (Eylül: 111,3), %1,1 artış. Alt endekslerde son üç aydaki iş hacmi-satışlar %6,2 ve mevcut stok seviyesi %1,2 artarken, gelecek üç aya dair iş hacmi-satış beklentisi %3,4 düştü.",
          "İnşaat güveni: 83,3 (Eylül: 83,0), %0,4 artış."
        ],
        onemi: "Perakende güvenindeki artışı son üç ayın satışları sürükledi; perakendecilerin önümüzdeki üç aya dair satış beklentisi ise geriledi. Tüketici güveninin de bir ayda belirgin biçimde düşmesiyle birlikte, hem tüketici hem perakendeci tarafında ileriye dönük beklentiler zayıflamış görünüyor. Kasım ve yılbaşı satışlarının bu beklentileri ne ölçüde değiştireceği sezonun temel sorusu.",
        not: "Güven endeksi: 100'ün üzerindeki değerler iyimserliği, altındaki değerler kötümserliği gösterir. Ekonomik güven endeksi: Tüketici, reel kesim (imalat), hizmet, perakende ticaret ve inşaat güven endekslerinin birleşiminden oluşan genel gösterge.",
        kaynaklar: [
          {
            ad: "YatırımX · TÜİK ekonomik güven endeksi, Ekim",
            url: "https://www.yatirimx.com.tr/ekonomi/ekonomik-guven-endeksi-ekim-2026da-yuzde-39-dustu/27374",
            tip: "ikinci",
            en: { ad: "YatırımX · TurkStat economic confidence index, October" }
          },
          {
            ad: "CNBC-e · Perakende güveni alt endeksleri",
            url: "https://www.cnbce.com/veriler/tuik-acikladi-hizmet-sektorunde-guven-ekimde-azaldi-insaat-ve-perakende-ticarette-artti-h40291",
            tip: "ikinci",
            en: { ad: "CNBC-e · Retail confidence sub-indices" }
          },
          {
            ad: "YatırımX · TÜİK sektörel güven endeksleri, Ekim",
            url: "https://www.yatirimx.com.tr/ekonomi/tuik-sektorel-guven-endeksleri-aciklandi-iste-ekim-verileri/27152",
            tip: "ikinci",
            en: { ad: "YatırımX · TurkStat sectoral confidence indices, October" }
          }
        ],
        en: {
          kisa: "Confidence indices",
          tarih: "26 and 30 Oct",
          tur: "Official data",
          deger: "97.3",
          baslik: "Economic confidence falls below 100, retail confidence rises",
          metin: "According to TurkStat, the economic confidence index fell 3.9% month on month in October, from 101.3 to 97.3. Among the sub-indices, the sharpest fall was in consumer confidence, while the retail trade confidence index rose 1.1% to 112.5 in the same month.",
          orneklem: "Monthly change (%), October 2026 · Sectoral confidence published 26 Oct, economic confidence 30 Oct; consumer confidence was published on 22 Oct (last issue's main story)",
          ozet: "Highlights from TurkStat's October 2026 confidence indices (seasonally adjusted; consumer confidence has no seasonal effect):",
          maddeler: [
            "Economic confidence index: 97.3 (September: 101.3), down 3.9%.",
            "Consumer confidence: 84.8 (September: 91.9), down 7.7%.",
            "Real sector confidence: 101.1 (September: 102.5), down 1.4%.",
            "Services confidence: 109.2 (September: 111.9), down 2.4%.",
            "Retail trade confidence: 112.5 (September: 111.3), up 1.1%. Among the sub-indices, business volume-sales over the last three months rose 6.2% and current stock levels rose 1.2%, while the business volume-sales expectation for the next three months fell 3.4%.",
            "Construction confidence: 83.3 (September: 83.0), up 0.4%."
          ],
          onemi: "The rise in retail confidence was driven by sales over the last three months, while retailers' sales expectations for the next three months declined. With consumer confidence also falling markedly in a single month, forward-looking expectations appear to have weakened on both the consumer and the retailer side. How far November and year-end sales will change these expectations is the key question of the season.",
          not: "Confidence index: values above 100 indicate optimism, values below 100 pessimism. Economic confidence index: an overall indicator combining the consumer, real sector (manufacturing), services, retail trade and construction confidence indices."
        }
      },
      etkinlikler: [
        {
          ad: "Koton üçüncü çeyrek sonuçları",
          tur: "Şirket sonuçları",
          baslangic: "2026-11-02",
          bitis: "2026-11-13",
          yer: "KAP",
          aciklama: "Koton'un Temmuz–Eylül dönemi sonuçları. Şirketin finansal takviminde henüz tarih yok; geçen yıl üçüncü çeyrek sonuçları 6 Kasım'da açıklanmıştı.",
          url: "https://kurumsal.koton.com.tr/en/investor-relations/financial-calendar/",
          en: {
            ad: "Koton third-quarter results",
            tur: "Company results",
            yer: "KAP",
            aciklama: "Koton's July–September results. There is no date yet in the company's financial calendar; last year's third-quarter results were published on 6 November.",
            tahminiMetin: "First half of November (estimated)"
          },
          tahmini: true,
          tahminiMetin: "Kasım'ın ilk yarısı (tahmini)"
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
          ad: "Eylül ayı ticaret ve perakende satışları",
          tur: "Veri günü",
          baslangic: "2026-11-11",
          bitis: "2026-11-11",
          yer: "TÜİK",
          aciklama: "TÜİK Eylül ayı ticaret satış hacim endekslerini açıklayacak; perakendede tekstil, giyim ve ayakkabı satış hacmindeki seyir görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "September trade and retail sales",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish its September trade sales volume indices, showing the trend in textiles, clothing and footwear sales volume in retail."
          }
        },
        {
          ad: "Black Friday",
          tur: "İndirim dönemi",
          baslangic: "2026-11-27",
          bitis: "2026-11-27",
          yer: "Küresel",
          aciklama: "ABD'de Şükran Günü'nün ertesi günü; Türkiye'de de Kasım indirimlerinin en yoğun haftası. Ticaret Bakanlığı indirim reklamlarını Kasım boyunca takip ediyor.",
          url: "https://ticaret.gov.tr/haberler/kasim-ayi-indirim-kampanyalari-ticaret-bakanliginin-yakin-takibinde",
          en: {
            ad: "Black Friday",
            tur: "Sales period",
            yer: "Global",
            aciklama: "The day after Thanksgiving in the US; in Türkiye too, the busiest week of the November sales. The Ministry of Trade is monitoring discount ads throughout November."
          }
        },
        {
          ad: "Asgari Ücret Tespit Komisyonu",
          tur: "Beklenen toplantı",
          baslangic: "2026-12-01",
          bitis: "2026-12-07",
          yer: "Türkiye",
          aciklama: "Komisyonun Aralık'ın ilk haftasında toplanması bekleniyor; kesin tarih henüz açıklanmadı.",
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
          tur: "Şirket sonuçları",
          baslangic: "2026-12-02",
          bitis: "2026-12-02",
          yer: "Arteixo",
          aciklama: "Zara'nın sahibi Inditex, Şubat–Ekim dönemi sonuçlarını açıklayacak. Tarih piyasa takviminden; şirket henüz teyit etmedi.",
          url: "https://www.marketscreener.com/quote/stock/INDITEX-46535998/calendar/",
          en: {
            ad: "Inditex nine-month results",
            tur: "Company results",
            yer: "Arteixo",
            aciklama: "Zara owner Inditex will publish its February–October results. Date from a market calendar; not yet confirmed by the company.",
            tahminiMetin: "2 December (estimated)"
          },
          tahmini: true,
          tahminiMetin: "2 Aralık (tahmini)"
        },
        {
          ad: "Kasım ayı enflasyonu",
          tur: "Veri günü",
          baslangic: "2026-12-03",
          bitis: "2026-12-03",
          yer: "TÜİK",
          aciklama: "TÜİK Kasım ayı tüketici fiyatlarını açıklayacak; indirim döneminin giyim fiyatlarına yansıması görülecek.",
          url: "https://www.foreks.com/haber/detay/69566f3367ad3132ebdf7774/PICNEWS/tr/tuik-2026-yili-veri-yayin-takvimini-acikladi-01-01-26/",
          en: {
            ad: "November inflation",
            tur: "Data release",
            yer: "TurkStat",
            aciklama: "TurkStat will publish November consumer prices, showing how the sales period is reflected in clothing prices."
          }
        },
        {
          ad: "Merkez Bankası faiz kararı",
          tur: "Karar günü",
          baslangic: "2026-12-10",
          bitis: "2026-12-10",
          yer: "TCMB",
          aciklama: "Para Politikası Kurulu'nun bir sonraki faiz kararı. Ekim'deki toplantıda politika faizi %37'den %36'ya indirilmişti.",
          url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Duyurular/Basin/2026/DUY2026-45",
          en: {
            ad: "Central Bank rate decision",
            tur: "Decision day",
            yer: "CBRT",
            aciklama: "The Monetary Policy Committee's next rate decision. At the October meeting the policy rate was cut from 37% to 36%."
          }
        }
      ],
      en: {
        donem: "26 October – 1 November 2026",
        yayin: "1 November 2026",
        sonraki: "Sunday, 8 November",
        gundemNotu: "1 Türkiye, 2 global"
      }
    },
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
