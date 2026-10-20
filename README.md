# Cümle Atölyesi

İngilizce gramer yapıları (70 konu) ile Oxford 3000 kelimelerini birleştiren, cümle kurma pratiği uygulaması.
Tek sayfa, sunucu gerektirmez. Hem web (PWA) hem Android APK olarak yayınlanır.

## Klasörler

- `web/` uygulamanın kendisi (`index.html`, manifest, servis çalışanı, ikonlar)
- `assets/` Android uygulama ikonu kaynakları
- `.github/workflows/pages.yml` web sürümünü GitHub Pages'e yayınlar
- `.github/workflows/android.yml` her push'ta Android APK derler

## 1. Web sürümü (GitHub Pages) ve telefona kurma

1. GitHub'da yeni bir depo aç, bu klasörün içeriğini `main` dalına yükle.
2. Depoda **Settings → Pages → Build and deployment → Source** bölümünü **GitHub Actions** yap.
3. **Actions** sekmesinde "GitHub Pages (PWA)" çalışınca adres şu olur: `https://KULLANICI-ADIN.github.io/DEPO-ADI/`
4. Android'de Chrome ile bu adresi aç, menüden **Ana ekrana ekle** (ya da **Uygulamayı yükle**) de.
   Uygulama kendi ikonuyla, tam ekran ve çevrimdışı çalışır.

## 2. Android APK

1. Depoyu yükledikten sonra **Actions → Android APK** akışı kendiliğinden çalışır (**Run workflow** ile elle de başlatabilirsin).
2. Akış bitince sayfanın altındaki **Artifacts** bölümünden `cumle-atolyesi-apk` dosyasını indir, zip'ten `app-debug.apk` çıkar.
3. APK'yı telefona gönder, aç. Android "bilinmeyen kaynaklardan yükleme" izni isteyebilir.

Bu APK kendi kullanımın için yeterlidir (debug imzalı). Google Play'e yüklemek için imzalı bir release sürümü ve Play geliştirici hesabı gerekir.

Kendi bilgisayarında derlemek istersen: Node 20, JDK 17 ve Android SDK kur, sonra

```
npm install
npm run build:www
npx cap add android
npx capacitor-assets generate --android --assetPath assets
npx cap sync android
cd android && ./gradlew assembleDebug
```

## Notlar

- İlerleme (öğrenilen kelimeler, seri, ayarlar) cihazda saklanır. Tarayıcı verisini silersen sıfırlanır.
- Sesli okuma cihazın İngilizce ses paketini kullanır. Ses gelmezse Android ayarlarından İngilizce (ABD) metin okuma verisini yükle.
- Yazı tipleri ilk açılışta internetten gelir ve sonra saklanır. Çevrimdışıyken sistem yazı tipi görünür.
- Uygulama içeriğini değiştirmek için `web/index.html` dosyasını düzenle, depoya yükle. Yayınlar kendiliğinden yenilenir.
- Servis çalışanı yeni sürümü almak için `web/sw.js` içindeki `CACHE` adını (`cumle-atolyesi-v1`) her büyük değişiklikte artır.
