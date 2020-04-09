// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        { src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4" },
        { src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg" }
    ]
};

window.onload = function () {
    var vidContainer = document.querySelector("#outputVid");
    var vidOut = '<video width=' + video.width + 'height=' + video.height;
    if (video.controls == true)
        vidOut += " controls>";
    else vidOout += ">";
    for (var i = 0; i < video.source.length; i++) {
        vidOut += '<source src=' + video.source[i].src + ' type=' + video.source[i].type + '>';
    }
    vidContainer.innerHTML += vidOut + "</video>";
};

