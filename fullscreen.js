(() => {
  if (window.top !== window || document.getElementById("__lemur_fullscreen_host")) return;

  const host = document.createElement("div");
  host.id = "__lemur_fullscreen_host";
  host.style.cssText = "all:initial;position:fixed!important;right:12px!important;bottom:18px!important;z-index:2147483647!important;";
  const shadow = host.attachShadow({ mode: "closed" });

  const style = document.createElement("style");
  style.textContent = `
    button {
      all: initial;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 48px;
      height: 48px;
      padding: 0 14px;
      border-radius: 24px;
      background: #202124;
      color: white;
      border: 1px solid rgba(255,255,255,.35);
      box-shadow: 0 2px 10px rgba(0,0,0,.35);
      font: 600 14px/1 Arial, sans-serif;
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }
    button:active { transform: scale(.96); }
  `;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "⛶ Fullscreen";
  button.setAttribute("aria-label", "Toggle fullscreen");

  function updateLabel() {
    button.textContent = document.fullscreenElement ? "✕ Exit fullscreen" : "⛶ Fullscreen";
  }

  // Call requestFullscreen directly inside the real tap handler so the
  // browser receives the user activation it requires.
  button.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else {
        button.textContent = "Not supported";
      }
    } catch (error) {
      button.textContent = "Denied";
      setTimeout(updateLabel, 1600);
      console.warn("Fullscreen request was rejected:", error);
    }
  });

  document.addEventListener("fullscreenchange", updateLabel);
  shadow.append(style, button);

  const mount = () => {
    if (document.documentElement && !host.isConnected) {
      document.documentElement.appendChild(host);
    }
  };

  mount();
  new MutationObserver(mount).observe(document, { childList: true, subtree: true });
})();