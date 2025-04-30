import logo from "data-base64:~images/logo.png"
import React, { useEffect, useState } from "react"

import { fetchWallpapers } from "~helpers/fetchWallpapers"
import type { WallpaperCardProps } from "~types/WallpaperProps"

import SkeletonLoader from "./Loader/skeleton-loader"
import WallpaperCard from "./WallpaperCard"

export default function Wallpapers() {
  const [wallpapers, setWallpapers] = useState<WallpaperCardProps[]>([])
  const [loading, setloading] = useState(false)

  const userId = localStorage.getItem("userId")

  async function fetchHandler() {
    setloading(true)
    try {
      const data = await fetchWallpapers(userId)
      setWallpapers(data)
    } catch (error) {
      alert("error fetching wallpapers")
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    fetchHandler()
  }, [userId])

  if (loading) {
    return <SkeletonLoader />
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-lg px-6 space-y-6">
      <h1 className="text-2xl font-semibold flex justify-center items-center">
        <span className="italic font-bold ml-1">Your Wallpapers</span>
        <img src={logo} alt="gitpaper-logo" className="ml-1 size-10" />
      </h1>

      <div className="w-full flex flex-col justify-center items-center space-y-4 mt-6">
        {wallpapers?.map((w, index) => (
          <WallpaperCard
            key={index}
            bentoLink={w?.bentoLink}
            backgroundImageLink={w?.backgroundImageLink}
          />
        ))}
      </div>
    </div>
  )
}
