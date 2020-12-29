// ==UserScript==
// @name					Hacker News - Dark Theme
// @description				A dark theme for Hacker News (YCombinator). Easily extendable.
// @icon					https://news.ycombinator.com/y18.gif
// @author					zackkrida
// @version					2.0
// @include					*://news.ycombinator.com/*
// ==/UserScript==

function addStyle(css) {	// making my own god damn jquery over here
	var style = document.createElement("style");
	style.textContent = css;
	document.documentElement.appendChild(style);
	return style;	// optional, but convenient for changing the styling later.
}

addStyle(`
	body {background-color: #2A2B2E;}		/*#272727*/
	#hnmain {background-color: #202124;}	/*#222222*/

	a:link, .sitestr {
		color: #9AA0A6;
	}
	.title a:link {
		color: #E8EAED;
	}
	.pagetop a:link {
		color: black;
	}
	.hnuser, .togg, .reply a:link {
		color: #9AA0A6 !important;
	}

	/* fade from #E8EAED to #202124 */
	.c00, .c00 a:link {color: #E8EAED;}
	.c5a, .c5a a:link {color: #B6B8BB;}
	.c73, .c73 a:link {color: #A5A7AA;}
	.c82, .c82 a:link {color: #959699;}
	.c88, .c88 a:link {color: #848588;}
	.c9c, .c9c a:link {color: #737578;}
	.cae, .cae a:link {color: #636467;}
	.cbe, .cbe a:link {color: #525356;}
	.cce, .cce a:link {color: #414245;}
	.cdd, .cdd a:link {color: #313235;}
`);

