// Runs when the user taps the extension icon.
// Uses the page Fullscreen API rather than the desktop windows API.
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url || !/^https?:\/\//.test(tab.url)) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (document.fullscreenElement) {
          return document.exitFullscreen();
        }
        if (document.documentElement.requestFullscreen) {
          return document.documentElement.requestFullscreen();
        }
        throw new Error("Fullscreen API is not supported on this page.");
      }
    });
  } catch (error) {
    console.warn("Fullscreen could not be started. The browser may require a tap inside the webpage:", error);
  }
});
