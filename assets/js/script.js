$(document).ready(function () {
    //Loader mais fake do mundo só pra página ficar mais legalzinha
    setTimeout(function () {
        $("#loading").fadeOut("slow", function () {
            $(".container").fadeIn("slow")
        })
    }, 1000)

})