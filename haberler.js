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
    no: 2,
    donem: "19–25 Ekim 2026",
    yayin: "25 Ekim Pazar",
    en: { donem: "19–25 October 2026", yayin: "Sunday, 25 October" }
  },
  sayilar: [
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
