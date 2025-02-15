chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('fetchWallpaper', {
        when: Date.now(),
        periodInMinutes: 24 * 60 // Daily
    });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'fetchWallpaper') {
        fetchAndSetWallpaper();
    }
});

async function fetchAndSetWallpaper() {
    try {
        const response = await fetch('YOUR_WEBAPP_ENDPOINT');
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);

        chrome.wallpaper.setWallpaper({
            url: imageUrl,
            layout: 'CENTER'
        });
    } catch (error) {
        console.error('Wallpaper fetch failed:', error);
    }
}