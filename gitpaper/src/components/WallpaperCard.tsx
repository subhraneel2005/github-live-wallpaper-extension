import { useEffect, useState } from "react"

import type { WallpaperCardProps } from "~types/WallpaperProps"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

export default function WallpaperCard({
  backgroundImageLink,
  bentoLink
}: WallpaperCardProps) {
  const [isExtensionContext, setIsExtensionContext] = useState(false)

  useEffect(() => {
    setIsExtensionContext(
      typeof chrome !== "undefined" && chrome?.storage?.local !== undefined
    )
  }, [])

  const handleSetWallpaper = () => {
    if (!isExtensionContext) {
      console.error("Chrome storage API is not available in this context")
      alert("Error: Chrome storage API not available")
      return
    }

    try {
      chrome.storage.local.set(
        {
          backgroundImageLink,
          bentoLink
        },
        () => {
          if (chrome.runtime.lastError) {
            console.error("Error setting wallpaper:", chrome.runtime.lastError)
            alert(
              "Error setting wallpaper: " + chrome.runtime.lastError.message
            )
          } else {
            alert("Wallpaper set successfully!")
          }
        }
      )
    } catch (error) {
      console.error("Failed to set wallpaper:", error)
      alert("An error occurred while setting the wallpaper")
    }
  }

  return (
    <Card>
      <CardContent className="flex justify-center items-center">
        <div
          className="bg-cover bg-center flex justify-center items-center w-[80%] p-8 rounded-xl"
          style={{ backgroundImage: `url(${backgroundImageLink})` }}>
          <div className="h-full w-full overflow-hidden">
            <img src={bentoLink} alt="Inner" className="w-full object-cover" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button onClick={handleSetWallpaper} disabled={!isExtensionContext}>
          {isExtensionContext ? "Set wallpaper" : "Extension API not available"}
        </Button>
      </CardFooter>
    </Card>
  )
}
