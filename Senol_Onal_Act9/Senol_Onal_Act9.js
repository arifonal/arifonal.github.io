$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		$("#caption, #image").fadeOut(1000, function() {
			
			$("#caption").text(caption);
			$("#image").attr("src", imageURL);

			// caption and image to fade in
			$("#caption, #image").fadeIn(1000);
		});

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready