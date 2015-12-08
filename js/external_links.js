$("document").ready(function() {
	$("#side-stuff").mouseover(function () {
		$("#ext-links").css("display", "block");
	});
});

$("document").ready(function() {
	$("#side-stuff").mouseleave(function () {
		$("#ext-links").css("display", "none");
	});
});