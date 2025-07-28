# 🎉 Doğum Günü Web Sitesi - Zeynep & Bennu

Bu proje Zeynep ve Bennu'nun doğum günü için özel olarak hazırlanmış bir web sitesidir.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js (18.0 veya üzeri)
- npm veya yarn

### Kurulum

1. **Projeyi klonlayın veya indirin**
\`\`\`bash
git clone <repository-url>
cd birthday-website
\`\`\`

2. **Bağımlılıkları yükleyin**
\`\`\`bash
npm install
# veya
yarn install
\`\`\`

3. **Geliştirme sunucusunu başlatın**
\`\`\`bash
npm run dev
# veya
yarn dev
\`\`\`

4. **Tarayıcınızda açın**
   - http://localhost:3000 adresine gidin

## 📁 Proje Yapısı

\`\`\`
birthday-website/
├── app/
│   ├── page.tsx              # Ana sayfa
│   ├── birthday/
│   │   └── page.tsx          # Doğum günü sayfası
│   ├── admin/
│   │   └── page.tsx          # Admin paneli
│   ├── layout.tsx            # Ana layout
│   └── globals.css           # Global stiller
├── components/
│   └── ui/                   # UI bileşenleri
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
\`\`\`

## 🎯 Özellikler

- **Ana Sayfa**: Doğum günü sayfasına yönlendiren buton
- **Doğum Günü Sayfası**: 
  - Animasyonlu başlık
  - Video oynatıcı
  - Kişisel doğum günü mesajı
  - Uçan balonlar animasyonu
  - Konfeti efektleri
- **Admin Paneli**: 
  - Güvenli giriş (kullanıcı: diyar, şifre: diyar)
  - Video yükleme özelliği
  - Video boyut kontrolü (1MB - 100MB)
  - Mevcut video önizleme

## 🔧 Admin Paneli Kullanımı

1. `/admin` sayfasına gidin
2. Giriş bilgileri:
   - **Kullanıcı Adı**: diyar
   - **Şifre**: diyar
3. Video dosyası seçin (1MB - 100MB arası)
4. "Video Yükle" butonuna tıklayın
5. Video otomatik olarak doğum günü sayfasında görünecek

## 🎨 Tasarım Özellikleri

- **Renk Paleti**: Pembe tonları
- **Animasyonlar**: 
  - Uçan balonlar
  - Düşen konfeti
  - Pulse efektli başlık
- **Responsive**: Mobil ve masaüstü uyumlu
- **Modern UI**: Tailwind CSS ile stillendirilmiş

## 📱 Sayfa Yapısı

1. **Ana Sayfa** (`/`): Giriş sayfası
2. **Doğum Günü** (`/birthday`): Ana kutlama sayfası
3. **Admin Panel** (`/admin`): Video yönetim paneli

## 🛠️ Geliştirme Komutları

\`\`\`bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Kod kontrolü
npm run lint
\`\`\`

## 🎁 Site Sahibi

Site Owner: **Achsanto**

## 📝 Notlar

- Videolar tarayıcı localStorage'ında saklanır
- Desteklenen video formatları: MP4, AVI, MOV, WebM
- Video boyut limiti: 1MB - 100MB
- Site tamamen client-side çalışır

## 🎉 Kullanım

1. Siteyi başlatın
2. Ana sayfadaki butona tıklayın
3. Doğum günü kutlamasının tadını çıkarın!
4. Admin panelinden video ekleyebilirsiniz

**İyi Eğlenceler! 🎈**
