var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function() {
	document.hidden ? (document.title = "πδ½ δΈεζ¬’ζδΊδΉ~", clearTimeout(titleTime)) : (document.title = "πζθ―·δ½ εη³ο½", titleTime = setTimeout((function() {
		document.title = OriginTitile
	}), 2e3))
}));