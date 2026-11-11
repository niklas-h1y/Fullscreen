// Toggle the current browser window between normal and fullscreen.
// Fullscreen hides browser chrome (including the address/search bar).
async function toggleFullscreen() {
  const currentWindow = await chrome.windows.getCurrent();

  if (!currentWindow?.id) return;

  const enteringFullscreen = currentWindow.state !== "fullscreen";
  await chrome.windows.update(currentWindow.id, {
    state: enteringFullscreen ? "fullscreen" : "normal"
  });

  await chrome.action.setTitle({
    title: enteringFullscreen ? "Exit fullscreen" : "Enter fullscreen"
  });
}

chrome.action.onClicked.addListener(() => {
  toggleFullscreen().catch((error) => {
    console.error("Could not toggle fullscreen:", error);
  });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-fullscreen") {
    toggleFullscreen().catch((error) => {
      console.error("Could not toggle fullscreen:", error);
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setTitle({ title: "Enter fullscreen" });
});
