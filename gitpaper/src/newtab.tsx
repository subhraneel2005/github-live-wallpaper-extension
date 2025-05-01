import { useEffect, useState } from "react"

export default function NewTab() {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null)
    const [bentoImage, setBentoImage] = useState<string | null>(null)

    useEffect(() => {
        chrome.storage.local.get("newtabWallpaper", (res) => {
            const wallpaperData = res.newtabWallpaper
            if (wallpaperData?.backgroundImage) {
                setBackgroundImage(wallpaperData.backgroundImage)
            }
            if (wallpaperData?.bentoImage) {
                setBentoImage(wallpaperData.bentoImage)
            }
        })

        document.body.style.margin = "0"
        document.body.style.padding = "0"
        document.documentElement.style.margin = "0"
        document.documentElement.style.padding = "0"
    }, [])

    return (
        <div
            style={{
                padding: "0",
                margin: "0",
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
            }}
        >
            {bentoImage && (
                <img
                    src={bentoImage}
                    alt="Bento Overlay"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "70%",
                        objectFit: "contain"
                    }}
                />
            )}
        </div>
    )
}
