"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

// Video size limits (in bytes)
const MAX_VIDEO_SIZE = 100 * 1024 * 1024 // 100MB
const MIN_VIDEO_SIZE = 1 * 1024 * 1024 // 1MB

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const router = useRouter()

  const [videoSizeError, setVideoSizeError] = useState<string>("")
  const [videoSize, setVideoSize] = useState<number>(0)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "diyar" && password === "diyar") {
      setIsLoggedIn(true)
    } else {
      alert("Yanlış kullanıcı adı veya şifre!")
    }
  }

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoFile) {
      alert("Lütfen bir video seçin!")
      return
    }

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      // Convert file to URL for display
      const videoUrl = URL.createObjectURL(videoFile)
      localStorage.setItem("birthdayVideo", videoUrl)
      localStorage.setItem("birthdayVideoName", videoFile.name)

      setIsUploading(false)
      setUploadSuccess(true)

      setTimeout(() => {
        router.push("/birthday")
      }, 2000)
    }, 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setVideoSizeError("")
    setVideoSize(0)

    if (!file) {
      setVideoFile(null)
      return
    }

    if (!file.type.startsWith("video/")) {
      setVideoSizeError("Lütfen geçerli bir video dosyası seçin!")
      setVideoFile(null)
      return
    }

    const fileSize = file.size
    setVideoSize(fileSize)

    if (fileSize > MAX_VIDEO_SIZE) {
      setVideoSizeError(
        `Video boyutu çok büyük! Maksimum ${formatFileSize(MAX_VIDEO_SIZE)} olmalı. Seçilen dosya: ${formatFileSize(fileSize)}`,
      )
      setVideoFile(null)
      return
    }

    if (fileSize < MIN_VIDEO_SIZE) {
      setVideoSizeError(
        `Video boyutu çok küçük! Minimum ${formatFileSize(MIN_VIDEO_SIZE)} olmalı. Seçilen dosya: ${formatFileSize(fileSize)}`,
      )
      setVideoFile(null)
      return
    }

    setVideoFile(file)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-pink-800">Admin Paneli</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-pink-700 mb-1">
                  Kullanıcı Adı
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adını girin"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-pink-700 mb-1">
                  Şifre
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifreyi girin"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                Giriş Yap
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* Site Owner Footer */}
        <div className="fixed bottom-2 right-2 text-xs text-pink-600/70">Site Owner Achsanto</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pink-200 p-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-pink-800">Video Yükleme Paneli</CardTitle>
            <p className="text-center text-pink-600">Doğum günü videosu yükleyin</p>
          </CardHeader>
          <CardContent>
            {uploadSuccess ? (
              <div className="text-center space-y-4">
                <div className="text-green-600 text-xl font-semibold">✅ Video başarıyla yüklendi!</div>
                <p className="text-pink-700">Doğum günü sayfasına yönlendiriliyorsunuz...</p>
              </div>
            ) : (
              <form onSubmit={handleVideoUpload} className="space-y-6">
                <div>
                  <label htmlFor="video" className="block text-sm font-medium text-pink-700 mb-2">
                    Video Dosyası Seçin
                  </label>
                  <div className="space-y-2">
                    <Input
                      id="video"
                      type="file"
                      accept="video/*"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                      required
                    />

                    {/* Size limits info */}
                    <div className="text-xs text-pink-600 bg-pink-50 p-2 rounded">
                      📏 Video boyut limitleri: {formatFileSize(MIN_VIDEO_SIZE)} - {formatFileSize(MAX_VIDEO_SIZE)}
                    </div>

                    {/* File info */}
                    {videoFile && (
                      <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                        ✅ Seçilen dosya: {videoFile.name} ({formatFileSize(videoSize)})
                      </div>
                    )}

                    {/* Error message */}
                    {videoSizeError && (
                      <div className="text-sm text-red-600 bg-red-50 p-2 rounded border border-red-200">
                        ❌ {videoSizeError}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isUploading || !videoFile || !!videoSizeError}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
                  >
                    {isUploading ? "Yükleniyor..." : "Video Yükle"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => router.push("/birthday")} className="flex-1">
                    Doğum Günü Sayfasına Git
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Current Video Preview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-pink-800">Mevcut Video</CardTitle>
          </CardHeader>
          <CardContent>
            <VideoPreview />
          </CardContent>
        </Card>
        {/* Site Owner Footer */}
        <div className="fixed bottom-2 right-2 text-xs text-pink-600/70">Site Owner Achsanto</div>
      </div>
    </div>
  )
}

function VideoPreview() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [videoName, setVideoName] = useState<string | null>(null)

  useState(() => {
    const video = localStorage.getItem("birthdayVideo")
    const name = localStorage.getItem("birthdayVideoName")
    setCurrentVideo(video)
    setVideoName(name)
  })

  if (!currentVideo) {
    return <p className="text-pink-600 text-center">Henüz video yüklenmemiş</p>
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-pink-700">Yüklenen video: {videoName}</p>
      <video controls className="w-full rounded-lg">
        <source src={currentVideo} />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  )
}
