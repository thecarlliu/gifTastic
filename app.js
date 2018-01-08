//list of cartoons
var topics = ["Spongebob", "Jimmy Neutron", "Fairly Odd Parents", "Rugrats", "Hey Arnold!", "Duck Tales", "Rocko's Modern Life", "Dexter's Laboratory", "Johnny Bravo"];
//api Key for giphy
var apiKey = "api_key=loX0t5aG3GyUZgI5LQ5UJt8wZUdUmcT2";

//setting background color
$("body").css("background-color", "azure");

//create the buttons at the start
createBtns();

//creates a button for each cartton in topics[]
function createBtns() {
    for (i=0;i<topics.length;i++) {
        var newBtn = $("<button>", {
            class: "gifBtn",
            text: topics[i]
        });
        $("#buttonArea").append(newBtn);
    }
}

//When a topics[] button is clicked, the queryURL is changed appropriately to retrieve 10 gifs of the cartoon chosen along with their ratings.
//The gifs are then displayed.
$(".gifBtn").on("click", function() {
    var topic = $(this).text();
    topic = topic.replace(" ", "+");
    topic = topic.toLowerCase();
    console.log(topic);
    var searchTerm = topic;
    var queryURL = "https://api.giphy.com/v1/gifs/searchq?="+searchTerm+"&"+apiKey+"&limit=10";
    var queryURL2 = "https://api.giphy.com/v1/gifs/trending?"+apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(result) {
        $("#gifArea").empty();
        console.log(result);

        for (i=0; i<10; i++) {
            var imgBox = $("<div>", {
                height: "120px"
            });
            var gif = $("<img>", {
                class: "gifImg",
                animate: result.data[i].images.fixed_height_small.url,
                still: result.data[i].images.fixed_height_small_still.url,
                dataState: "animate"
            });
            var rating = $("<div>", {
                text: "Rating: "+result.data[i].rating,
                height: "10px",
                width: "100px"
            })
            gif.attr("src", result.data[i].images.fixed_height_small_still.url);

            imgBox.append(gif);
            imgBox.append(rating);

            rating.css("position", "relative");
            rating.css("bottom", "0px");
            rating.css("font-size", "12px")
            rating.css("left", "10px");
            imgBox.css("float", "left");
            imgBox.css("padding-left", "10px");
            imgBox.css("padding-right", "10px");
            imgBox.css("padding-top", "5px");
            imgBox.css("padding-bottom", "5px");

            $("#gifArea").append(imgBox);
        }
    });
});

//when a gif is clicked, its state will change between "animate" and "still", using the different urls stored as attributes in the creation of each gif to either animate it or set it to be a still image.

$(".gifImg").on("click", function() {

    var state = $(this).attr("dataState");

    if (state == "still") {
      $(this).attr("src", $(this).attr("animate"));
      $(this).attr("dataState", "animate");
    }
    else if (state == "animate") {
      $(this).attr("src", $(this).attr("still"));
      $(this).attr("dataState", "animate");
    }
});

//when the submit button is clicked, whatever the user has entered in the "Add a Cartoon!" input field will become a new button and will be stored in the topics[], thus a new search term for the query.
$("#submitBtn").on("click", function() {
    var input = $("#newTopic").val().trim();
    topics.push(input);
    $("#buttonArea").empty();
    $("#newTopic").val("");
    createBtns();
});
