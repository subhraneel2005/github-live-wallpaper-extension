import { useEffect, useState } from "react"

import type { WallpaperCardProps } from "~types/WallpaperProps"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

export default function WallpaperCard({
  backgroundImageLink,
  bentoLink
}: WallpaperCardProps) {
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
        <Button>Set wallpaper</Button>
      </CardFooter>
    </Card>
  )
}
