# Fullscreen for Lemur

A small extension for Chromium-based Android browsers such as Lemur.

## How it works

The extension adds a floating **⛶ Fullscreen** button to normal webpages. Tap that button on the page itself. It calls the webpage Fullscreen API directly from your tap, which is important because browsers require a real user gesture before allowing fullscreen.

When fullscreen is active, tap **✕ Exit fullscreen** to leave it.

## Install in Lemur

1. Download the repository as a ZIP and extract it.
2. Open Lemur's Extensions page.
3. Enable Developer mode if Lemur shows that option.
4. Choose **Load unpacked** and select the extracted folder containing manifest.json.
5. Open an ordinary website. The floating **⛶ Fullscreen** button appears near the bottom-right corner.

## Notes

- This uses webpage fullscreen, not the desktop-only chrome.windows fullscreen API.
- It works only on ordinary http and https webpages. Browser internal pages and some protected video/player pages may block it.
- Whether the address bar and status bar disappear is controlled by Lemur and Android. If Lemur does not hide its toolbar when a page enters fullscreen, an extension cannot force the native browser UI to disappear.
- On recent Lemur versions, check the browser settings for the option to hide the address/status bars with a swipe-down gesture.
