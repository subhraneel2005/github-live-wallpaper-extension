import React from "react"

import { Skeleton } from "~components/ui/skeleton"
import logo from "data-base64:~images/logo.png"

export default function SkeletonLoader() {
  return (
    <div className="w-full h-full flex items-center flex-col">
      <h1 className="text-2xl font-semibold flex justify-center items-center mt-6">
        <span className="font-bold ml-1">Your Wallpapers</span>
        <img src={logo} alt="gitpaper-logo" className="ml-1 size-10" />
      </h1>
      <div className="w-full p-4 mt-6 flex justify-center items-center">
        <Skeleton className="w-[80%] h-[250px] rounded-xl " />
      </div>
    </div>
  )
}
