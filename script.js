async function updateVideo() {
    const url = "https://script.google.com/macros/s/AKfycbzLGe7RYsq7eZCDgkNKXkhxVd0pxXpOFpg81-E4VxZPCGZCzStBeNpOxP05Vg08c_-l/exec";
    fetch(url).then(function (data) {
        return data.json();
    }).then(function (json) {
        document.getElementById('vt').textContent = `${json.videoTitle}`
        document.getElementById('vl').src = `${json.videoEmbedURL}`
    });
}
updateVideo();

let reloadButton = document.getElementById('rb');
reloadButton.onclick = doReload;

function doReload() {
    window.location.reload(false);
}