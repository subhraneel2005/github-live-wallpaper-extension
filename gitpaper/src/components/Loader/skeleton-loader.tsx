import React from "react"

import { Skeleton } from "~components/ui/skeleton"

export default function SkeletonLoader() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-semibold flex justify-center items-center">
        <span className="italic font-bold ml-1">Your Wallpapers</span>
      </h1>
      <div className="w-full p-4 mt-6 flex justify-center items-center">
        <Skeleton className="w-[80%] h-[250px] rounded-xl " />
      </div>
    </div>
  )
}
