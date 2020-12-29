// ==UserScript==
// @name					Anti-Mobile Wikipedia
// @description				Redirects mobile Wikipedia links to normal Wikipedia
// @icon					https://en.m.wikipedia.org/static/favicon/wikipedia.ico
// @author					j-james
// @version					1.0
// @include					*://*.m.wikipedia.org/*
// @run-at					document-start
// ==/UserScript==

window.location.replace("https://en.wikipedia.org" + window.location.pathname);
