alert("Welcome to my Javascript page! We're going to get interactive now.")

function makeImageBig(x) {
    x.style.hight = "600px"
    x.style.width = "600px"
}

function makeImageOriginalSize(x) {
    x.style.hight = "400px"
    x.style.width = "400px"
}

function showHideSection(resume) {
    var thingToHide = document.getElementById(resume);
    if (thingToHide.style.display == "none") {
        thingToHide.style.display = "block";
        document.getElementById("brags").innerHTML = "HIDE SUMMARY";
    }
    else {
        thingToHide.style.display = "none";
        document.getElementById("brags").innerHTML = "SHOW SUMMARY";
    }
}

