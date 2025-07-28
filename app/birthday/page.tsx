"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function BirthdayPage() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [videoName, setVideoName] = useState<string | null>(null)

  useEffect(() => {
    const video = localStorage.getItem("birthdayVideo")
    const name = localStorage.getItem("birthdayVideoName")
    setVideoUrl(video)
    setVideoName(name)
  }, [])

  return (
    <div className="min-h-screen bg-pink-200 relative overflow-hidden">
      {/* Flying Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="balloon balloon-1">🎈</div>
        <div className="balloon balloon-2">🎈</div>
        <div className="balloon balloon-3">🎈</div>
        <div className="balloon balloon-4">🎈</div>
        <div className="balloon balloon-5">🎈</div>
        <div className="balloon balloon-6">🎈</div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Admin Link */}
        <div className="absolute top-4 right-4">
          <Link href="/admin" className="text-pink-600 hover:text-pink-800 text-sm underline">
            Admin Panel
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-800 mb-4 animate-pulse">
            İKİNİZİN DOĞUM GÜNÜSÜ KUTLU OLSUNNNN
          </h1>
          <div className="text-3xl md:text-4xl mb-4">🎂🎉🎊</div>
          <p className="text-xl md:text-2xl text-pink-700 font-semibold">Zeynep VE Bennu</p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
              {videoUrl ? (
                <video controls className="w-full h-full object-cover">
                  <source src={videoUrl} />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🎬</div>
                    <p>Video henüz yüklenmemiş</p>
                    <Link href="/admin" className="text-pink-600 hover:text-pink-800 underline">
                      Video yüklemek için tıklayın
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {videoName && <p className="text-center text-pink-600 mt-2 text-sm">📹 {videoName}</p>}
          </div>
        </div>

        {/* Birthday Message */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-6">🌟 SİZ İKİNİZ İÇİN MEKTUP 🌟</h2>
            <div className="text-lg md:text-xl text-pink-700 leading-relaxed space-y-4">
              <p>Öncelikle değerli arkadaşlarım zeynep ve bennu,</p>
              <p>
                sizin doğum gününüzü öncelikle kutlarım siz iki tatlı insan bugun dunyaya geldi ve aramıza girdiniz siz
                bizim için çok özelsiniz bunu bilin öncelikle
              </p>
              <p>
                yenı bır yıl ve yenı güzel günler sizi bekliyo sizi çok sevdiğimi söylemek istiyorum cidden ikinizde
                benım EN EN EN EN EN İYİ KARDEŞIMSINIZ hep neşeniz sizle olsun sizi çok ama çok sevdiğimi unutmayın bu
                siteyi sizin için yaptım ki size pek değmez siz en iyisine daha güzellerine layıksınız doğum gününüz
                kutlu olsun güzellerim
              </p>
              <p className="font-semibold text-pink-800">Mutluluk hep sizle olsun.. İYİKİ DOĞDUNUZ 🎈✨</p>
              <div className="text-2xl mt-6">🎂🎉🎊🎁🌟💖</div>
            </div>
          </div>
        </div>

        {/* Confetti Effect */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="confetti confetti-1">🎊</div>
          <div className="confetti confetti-2">🎉</div>
          <div className="confetti confetti-3">✨</div>
          <div className="confetti confetti-4">🎊</div>
          <div className="confetti confetti-5">🎉</div>
          <div className="confetti confetti-6">✨</div>
        </div>

        {/* Site Owner Footer */}
        <div className="fixed bottom-2 right-2 text-xs text-pink-600/70 z-20">Site Owner Achsanto</div>
      </div>
    </div>
  )
}
