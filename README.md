# Fullscreen

A tiny cross-browser extension that hides the browser toolbar, including the address/search bar, by switching the current window into fullscreen mode.

## Use

- Click the extension's toolbar button to enter fullscreen.
- Click it again to return to normal mode.
- Keyboard shortcut: `Alt+Shift+F` (you can change it in your browser's extension shortcut settings).

## Install for testing

1. Open `chrome://extensions` in Chrome, Edge, or Brave, or `about:debugging#/runtime/this-firefox` in Firefox.
2. Enable developer mode (or temporary add-on debugging).
3. Choose **Load unpacked** (Chromium) or **Load Temporary Add-on** (Firefox), then select this folder.

The extension uses the browser's window fullscreen state; it does not inject scripts into websites or request host permissions.
