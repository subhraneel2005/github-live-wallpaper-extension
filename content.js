chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setWallpaper") {
        document.body.style.backgroundImage = `url('${request.url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }
});