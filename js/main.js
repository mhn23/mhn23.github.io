$(document).ready(function() {
    
    $(".nav li").click(function() {
        var linkvalue = $(this).children().attr("name");
        $('html, body').animate({
            scrollTop: ($(linkvalue).offset().top -50)
        }, 225);
    });
   
    $(".nav li").last().css("margin-right", "0px");
    
    $(".wrapper").children().each(function() {
        $(this).parent().css("backgroundColor", $(this).css("backgroundColor"));
    });
    
    $(".img-viewer li img").click(function () {
        // find the current selected and remove the selection
        $(".img-viewer li").removeClass("img-selected");
        // add the selected class to the clicked img's parent li
        $(this).parent().addClass("img-selected");
        // set the source of the clicked img as the source of the viewers img
        var viewportsource = $(this).attr("src");
        $("#img-display").attr("src", viewportsource);
        // show the viewer
        $(".viewer").css("display", "block");
        
        // when closed the viewer and reached the end or start of the images reset the disabled states of the buttons
        // check if we are on the start
        if ($(".img-selected").prev().children().attr("src") == null) {
            $("#prev").attr("disabled", "true");
            $("#next").removeAttr("disabled");
        }
        // check if we are on the end
        else if ($(".img-selected").next().children().attr("src") == null) {
            $("#next").attr("disabled", "true");
            $("#prev").removeAttr("disabled");
        }
        // check if nothing is the case and enable both controls
        else {
            $("#prev").removeAttr("disabled");
            $("#next").removeAttr("disabled");
        }
    });
    
    $("#next").click(function () {
        // check if the next li's children has a source
        if ($(".img-selected").next().children().attr("src") == null) {
            console.log("no image found");
        }
        else {
            // setting the next source from the source of the next li's children
            var nextviewport = $(".img-selected").next().children().attr("src");
            // find the next li and add a temporary id to find it
            $(".img-selected").next().attr("id", "img-marker");
            // remove the class img-selected to reuse it when clicked again
            $(".img-selected").removeAttr("class", "img-selected");
            // add the class img-selected to the marker
            $("#img-marker").addClass("img-selected");
            // remove the marker helper class
            $("#img-marker").removeAttr("id", "img-marker");
            // show the Source of the next image
            $("#img-display").attr("src", nextviewport);
            
            if ($(".img-selected").next().children().attr("src") == null) {
                $("#next").attr("disabled", "true");
            }
            
            $("#prev").removeAttr("disabled");
        }
    });
    
    $("#prev").click(function () {
        // check if the next li's children has a source
        if ($(".img-selected").prev().children().attr("src") == null) {
            console.log("no image found");
        }
        else {
            // setting the next source from the source of the next li's children
            var nextviewport = $(".img-selected").prev().children().attr("src");
            // find the next li and add a temporary id to find it
            $(".img-selected").prev().attr("id", "img-marker");
            // remove the class img-selected to reuse it when clicked again
            $(".img-selected").removeAttr("class", "img-selected");
            // add the class img-selected to the marker
            $("#img-marker").addClass("img-selected");
            // remove the marker helper class
            $("#img-marker").removeAttr("id", "img-marker");
            // show the Source of the next image
            $("#img-display").attr("src", nextviewport);
            
            if ($(".img-selected").prev().children().attr("src") == null) {
                $("#prev").attr("disabled", "true");
            }
            
            $("#next").removeAttr("disabled");
        }
    });
    
    $("#close").click(function () {
        $(".viewer").css("display", "none");
        $(".img-viewer li").removeClass("img-selected");
    });
       
    $(".img-slider-init").click(function () {
        $(".img-slider").scrollLeft($(".img-slider img").width());
    });
});