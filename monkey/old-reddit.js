// ==UserScript==
// @name					Old Reddit
// @description				Always redirects to old-Reddit, avoiding Reddit's redesign.
// @icon					https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png
// @author					RandomUsername404
// @version					1.00
// @include					*://www.reddit.com/*
// @run-at					document-start
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
