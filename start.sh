#!/bin/bash

echo "🎉 Doğum Günü Web Sitesi Başlatılıyor..."
echo "=================================="

# Node.js kontrolü
if ! command -v node &> /dev/null; then
    echo "❌ Node.js bulunamadı! Lütfen Node.js yükleyin."
    echo "İndirme linki: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js bulundu: $(node --version)"

# npm kontrolü
if ! command -v npm &> /dev/null; then
    echo "❌ npm bulunamadı!"
    exit 1
fi

echo "✅ npm bulundu: $(npm --version)"

# Bağımlılıkları kontrol et
if [ ! -d "node_modules" ]; then
    echo "📦 Bağımlılıklar yükleniyor..."
    npm install
else
    echo "✅ Bağımlılıklar mevcut"
fi

echo ""
echo "🚀 Sunucu başlatılıyor..."
echo "🌐 Site adresi: http://localhost:3000"
echo "🔧 Admin paneli: http://localhost:3000/admin"
echo ""
echo "Durdurmak için Ctrl+C tuşlarına basın"
echo "=================================="

# Sunucuyu başlat
npm run dev
