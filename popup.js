document.getElementById('setWallpaper').addEventListener('click', () => {
    const imageUrl = document.getElementById('imageUrl').value;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setWallpaper", url: imageUrl });
    });
});