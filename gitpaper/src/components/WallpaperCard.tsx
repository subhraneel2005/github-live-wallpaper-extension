import { useEffect, useState } from "react"

import type { WallpaperCardProps } from "~types/WallpaperProps"

import { Button } from "./ui/button"

export default function WallpaperCard({
  backgroundImageLink,
  bentoLink
}: WallpaperCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleSetWallpaper = () => {
    chrome.storage.local.set(
      {
        newtabWallpaper: {
          backgroundImage: backgroundImageLink,
          bentoImage: bentoLink
        }
      },
      () => {
        chrome.tabs.create({ url: "chrome://newtab" }) // triggers override
      }
    )
  }

  return (
    <div
      className="relative w-full h-[200px] flex justify-center items-center flex-col rounded-xl bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageLink})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={bentoLink} alt="" className="w-2/3 object-cover" />

      {isHovered && (
        <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black/50">
          <Button onClick={handleSetWallpaper}>Set Wallpaper</Button>
        </div>
      )}
    </div>
  )
}
