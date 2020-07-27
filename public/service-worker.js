const CACHE = "myFancyCache";
const DATACACHE = "myFancyDataCache"

const fileCache = [

    "/",
    "/index.js",
    "/db.js",
    "/manifest.webmanifest",
    "/assets/styles.css",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png",
]
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("Cache time!!");
            return (cache.addAll(fileCache))
        })
    )
})

//fetches stuff

