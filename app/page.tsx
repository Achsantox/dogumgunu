import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-4">🎉 Özel günnn 🎉</h1>
          <p className="text-xl md:text-2xl text-pink-700 mb-8">Siz ikinizi çok özel bişi bekliyor...</p>
        </div>

        <Link href="/birthday">
          <Button
            size="lg"
            className="text-xl px-8 py-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            TIKLA! 🎈
          </Button>
        </Link>

        <div className="text-pink-600 text-lg animate-bounce">↑ butona tıklayın ↑</div>

        {/* Admin Access */}
        <div className="mt-8">
          <Link href="/admin" className="text-pink-600 hover:text-pink-800 text-sm underline">
            Admin Panel
          </Link>
        </div>

        {/* Site Owner Footer */}
        <div className="fixed bottom-2 right-2 text-xs text-pink-600/70">Site Owner Achsanto</div>
      </div>
    </div>
  )
}
