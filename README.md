# Fullscreen for Lemur

Tap the extension icon once to request fullscreen for the current webpage. No floating page button, polling, loops, or repeated retries.

## Install

1. Download the repository ZIP and extract it.
2. Open Lemur's Extensions page.
3. Load the extracted folder containing manifest.json.
4. Open a normal http/https webpage and tap the extension icon once.

## Compatibility

The extension makes one request to the webpage Fullscreen API. Browser rules may reject fullscreen unless the request has an eligible user gesture. If Lemur rejects a request initiated from its extension toolbar, an extension cannot bypass that browser restriction; the bookmarklet run from a page gesture may still work.

Whether the browser's own address/search bar disappears is controlled by Lemur and Android.