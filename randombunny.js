function getRandomImage() {
    var image_number = Math.floor( Math.random() * NUMBER_OF_IMAGES );
	return "image" + image_number + ".png";
}

function changeImage() {
	var image = getRandomImage();

	// don't show the same one twice in a row
	while ( image == document.getElementById("bunny").src.substr(-image.length) ) {
		image = getRandomImage();
	}
	document.getElementById("bunny").src = image;
}

changeImage();