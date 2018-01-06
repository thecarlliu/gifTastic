$(".gif").on("click", function() {
        // STEP ONE: study the html above.
        // Look at all the data attributes.
        // Run the file in the browser. Look at the images.

        // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.
        // ============== FILL IN CODE HERE FOR STEP TWO =========================

        // CODE GOES HERE
        var state = $(this).attr("data-state");

        // =============================================

        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.

        if (state == "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }

        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================

        // CODE GOES HERE
        else if (state == "animate") {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
        // ==============================================

        // STEP FOUR: open the file in the browser and click on the images.
        // Then click again to pause.
    });