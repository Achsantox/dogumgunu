@echo off
echo 🎉 Doğum Günü Web Sitesi Başlatılıyor...
echo ==================================

REM Node.js kontrolü
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js bulunamadı! Lütfen Node.js yükleyin.
    echo İndirme linki: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js bulundu
node --version

REM npm kontrolü
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm bulunamadı!
    pause
    exit /b 1
)

echo ✅ npm bulundu
npm --version

REM Bağımlılıkları kontrol et
if not exist "node_modules" (
    echo 📦 Bağımlılıklar yükleniyor...
    npm install
) else (
    echo ✅ Bağımlılıklar mevcut
)

echo.
echo 🚀 Sunucu başlatılıyor...
echo 🌐 Site adresi: http://localhost:3000
echo 🔧 Admin paneli: http://localhost:3000/admin
echo.
echo Durdurmak için Ctrl+C tuşlarına basın
echo ==================================

REM Sunucuyu başlat
npm run dev

pause
