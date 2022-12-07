var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function() {
	document.hidden ? (document.title = "👀你不喜欢我了么~", clearTimeout(titleTime)) : (document.title = "🎉我请你吃糖～", titleTime = setTimeout((function() {
		document.title = OriginTitile
	}), 2e3))
}));