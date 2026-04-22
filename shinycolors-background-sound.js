// ==UserScript==
// @name         shinycolors-background-sound
// @author       hajime0512
// @version      0.1
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.documentElement.appendChild(Object.assign(document.createElement('script'), {
textContent: `
window.addEventListener('blur', e=>e.stopImmediatePropagation(), true);
document.addEventListener('visibilitychange', e=>e.stopImmediatePropagation(), true);
`
}));