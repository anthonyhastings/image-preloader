/**
 *	Wrapper to run the imagePreloading method.
 */
function preloadImage(imageElement) {
	new ImagePreloader(imageElement.src, function() {
		imageElement.className = '';
	});
}

// Select images needing preloaded, then cycle through them run the preload method.
var imagesToPreload = document.querySelectorAll('#imgContainer > .hiddenUntilPreloaded');
for (var i = 0, length = imagesToPreload.length; i < length; i++) {
	preloadImage(imagesToPreload[i]);
}