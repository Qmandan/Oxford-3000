# Cümle Atölyesi

İngilizce gramer yapıları ile Oxford 3000 kelimelerini birleştiren cümle kurma uygulaması.
Tek sayfa, sunucu gerektirmez. Telefonda web uygulaması (PWA) ya da Android APK olarak kullanılır.

## Klasörler

- `docs/` uygulamanın kendisi (`index.html`, manifest, servis çalışanı, ikonlar)
- `index.html` (kökte) sadece `docs/` klasörüne yönlendirir
- `assets/` Android uygulama ikonu kaynakları
- `.github/workflows/android.yml` APK'yı derleyen GitHub Actions akışı

Uygulamayı güncellemek için tek dosya yeter: `docs/index.html`.

---

## 1. Web sürümü (GitHub Pages) ve telefona kurma

1. **Depo Public (herkese açık) olmalı.** Ücretsiz hesapta özel (private) depoda Pages çalışmaz.
   Kontrol: Settings → en altta "Danger Zone" → Change visibility.
2. **Zip'i değil, zip'in içindekileri yükle.** Deponun ana sayfasında doğrudan `docs` klasörü, `index.html` ve `README.md` görünmeli.
   `cumle-atolyesi` diye bir üst klasör görünüyorsa dosyalar bir seviye aşağıda kalmıştır, taşı.
3. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, klasör: **/docs** → Save
4. 1-2 dakika bekle, sayfayı yenile. Üstte "Your site is live at https://KULLANICI-ADIN.github.io/DEPO-ADI/" yazar.
   Bu adresi telefondaki Chrome'da aç.
   (Depodaki `index.html` dosyasına tıklarsan kodu görürsün, uygulama açılmaz. Uygulama yalnızca bu adreste açılır.)
5. Chrome menüsü (⋮) → **Ana ekrana ekle** ya da **Uygulamayı yükle**. Uygulama kendi ikonuyla, tam ekran ve çevrimdışı çalışır.

Klasör olarak "/ (root)" seçersen de çalışır, kökteki `index.html` seni `docs/` klasörüne yönlendirir.

---

## 2. Android APK

### Yol A: GitHub Actions ile (bu depoda)

1. Depoda `.github/workflows/android.yml` dosyası olmalı. `.github` gizli bir klasör olduğu için sürükle-bırakta bazen yüklenmez.
   Yoksa: **Add file → Create new file** → ad kutusuna `.github/workflows/android.yml` yaz (eğik çizgiler klasör oluşturur) → bu zip'teki `android.yml` içeriğini yapıştır → **Commit changes**.
2. **Actions** sekmesine gir. İlk seferde "I understand my workflows, go ahead and enable them" düğmesi çıkarsa bas.
3. Soldan **Android APK** → **Run workflow** → yeşil düğme. İlk derleme 5-8 dakika sürer.
4. Bitince APK iki yerde olur:
   - Deponun ana sayfasında sağdaki **Releases** bölümü → en son sürüm → `app-debug.apk` (telefondan doğrudan indirilir).
   - Akışın sayfasında en altta **Artifacts** → `cumle-atolyesi-apk` (zip içinde).
5. APK'yı telefonda aç. Android "bilinmeyen kaynaklardan yükleme" izni isteyebilir, ver.

Bu APK kendi kullanımın için yeterlidir (debug imzalı). Google Play için imzalı sürüm ve geliştirici hesabı gerekir.

### Yol B: GitHub Actions olmadan (PWABuilder)

1. Web sürümünü yukarıdaki adımlarla yayına al.
2. https://www.pwabuilder.com adresine sitenin adresini yapıştır → **Start** → **Package for stores** → **Android** → **Generate**.
3. İndirdiğin zip içindeki `.apk` dosyasını telefona kur.

---

## Sorun giderme

| Ne görüyorsun | Neden | Çözüm |
|---|---|---|
| Site adresinde 404 | Depo private, Pages ayarı yok ya da klasör yanlış | Adım 1 ve 3'ü kontrol et |
| Site adresi açılıyor ama boş sayfa | Eski önbellek | Sayfayı yenile, olmazsa Chrome'da site verisini temizle |
| Actions sekmesinde akış yok | `.github` klasörü yüklenmemiş | APK, Yol A adım 1 |
| Akışta kırmızı ✗ | Derleme hatası | Akışa tıkla → kırmızı adıma tıkla → hata satırlarını kopyalayıp gönder |
| APK kurulmuyor | Bilinmeyen kaynak izni kapalı | Android ayarlarından Chrome/Dosyalar için izin ver |

## Notlar

- İlerleme (öğrenilen kelimeler, seri, ayarlar) cihazda saklanır. Tarayıcı verisini silersen sıfırlanır.
- Sesli okuma cihazın İngilizce ses paketini kullanır. Ses gelmezse Android ayarlarından İngilizce (ABD) metin okuma verisini yükle.
- Yazı tipleri ilk açılışta internetten gelir ve sonra saklanır. Çevrimdışıyken sistem yazı tipi görünür.
- Yeni sürümü almak için `docs/sw.js` içindeki `CACHE` adını (`cumle-atolyesi-v1`) büyük değişikliklerde artır.
