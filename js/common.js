var reallyDocumentTitle = document.title
document.addEventListener("visibilitychange", function() {
	document.title = document.hidden ? "你妹的，死回来！" : reallyDocumentTitle;
});