document.querySelectorAll(".bottom a").forEach((item) => {
    item.addEventListener("click", () => {
        if (item.id === "current") {
            document.querySelector("#aboutme").classList.remove("activate-blue")
            document.querySelector("#current").classList.add("activate-red")
            document.querySelector("#skills").classList.remove("activate-violet")
            document.querySelector("#intern").classList.remove("activate-yellow")

            document.querySelector("#about").style.display = "none";
            document.querySelector("#current-div").style.display = "block";
            document.querySelector("#skills-div").style.display = "none";
            document.querySelector("#intern-div").style.display = "none";

            document.querySelector("#quiz").classList.remove("activate-green")
            document.querySelector("#quiz-div").style.display = "none";

            document.querySelector("#language").classList.remove("activate-orange")
            document.querySelector("#language-div").style.display = "none";
        } else if (item.id === "aboutme") {
            document.querySelector("#aboutme").classList.add("activate-blue")
            document.querySelector("#current").classList.remove("activate-red")
            document.querySelector("#skills").classList.remove("activate-violet")
            document.querySelector("#intern").classList.remove("activate-yellow")

            document.querySelector("#about").style.display = "block";
            document.querySelector("#current-div").style.display = "none";
            document.querySelector("#skills-div").style.display = "none";
            document.querySelector("#intern-div").style.display = "none";

            document.querySelector("#quiz").classList.remove("activate-green")
            document.querySelector("#quiz-div").style.display = "none";

            document.querySelector("#language").classList.remove("activate-orange")
            document.querySelector("#language-div").style.display = "none";
        } else if (item.id === "skills") {
            document.querySelector("#aboutme").classList.remove("activate-blue")
            document.querySelector("#current").classList.remove("activate-red")
            document.querySelector("#skills").classList.add("activate-violet")
            document.querySelector("#intern").classList.remove("activate-yellow")

            document.querySelector("#about").style.display = "none";
            document.querySelector("#current-div").style.display = "none";
            document.querySelector("#skills-div").style.display = "block";
            document.querySelector("#intern-div").style.display = "none";

            document.querySelector("#quiz").classList.remove("activate-green")
            document.querySelector("#quiz-div").style.display = "none";

            document.querySelector("#language").classList.remove("activate-orange")
            document.querySelector("#language-div").style.display = "none";
        } else if (item.id === "intern") {
            document.querySelector("#aboutme").classList.remove("activate-blue")
            document.querySelector("#current").classList.remove("activate-red")
            document.querySelector("#skills").classList.remove("activate-violet")
            document.querySelector("#intern").classList.add("activate-yellow")

            document.querySelector("#about").style.display = "none";
            document.querySelector("#current-div").style.display = "none";
            document.querySelector("#skills-div").style.display = "none";
            document.querySelector("#intern-div").style.display = "block";

            document.querySelector("#quiz").classList.remove("activate-green")
            document.querySelector("#quiz-div").style.display = "none";

            document.querySelector("#language").classList.remove("activate-orange")
            document.querySelector("#language-div").style.display = "none";
        } else if (item.id === "quiz") {
            document.querySelector("#aboutme").classList.remove("activate-blue")
            document.querySelector("#current").classList.remove("activate-red")
            document.querySelector("#skills").classList.remove("activate-violet")
            document.querySelector("#intern").classList.remove("activate-yellow")

            document.querySelector("#about").style.display = "none";
            document.querySelector("#current-div").style.display = "none";
            document.querySelector("#skills-div").style.display = "none";
            document.querySelector("#intern-div").style.display = "none";

            document.querySelector("#quiz").classList.add("activate-green")
            document.querySelector("#quiz-div").style.display = "block";

            document.querySelector("#language").classList.remove("activate-orange")
            document.querySelector("#language-div").style.display = "none";
        } else if (item.id === "language") {
            document.querySelector("#aboutme").classList.remove("activate-blue")
            document.querySelector("#current").classList.remove("activate-red")
            document.querySelector("#skills").classList.remove("activate-violet")
            document.querySelector("#intern").classList.remove("activate-yellow")

            document.querySelector("#about").style.display = "none";
            document.querySelector("#current-div").style.display = "none";
            document.querySelector("#skills-div").style.display = "none";
            document.querySelector("#intern-div").style.display = "none";


            document.querySelector("#quiz").classList.remove("activate-green")
            document.querySelector("#quiz-div").style.display = "none";

            document.querySelector("#language").classList.add("activate-orange");
            document.querySelector("#language-div").style.display = "block";
        }
    });
})

function scroll() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var height = window.innerHeight

    if (scrollTop >= height / 2) {
        document.querySelector("#about-me").style.display = "none";
        document.querySelector(".on-scroll").style.display = "inline";

        document.querySelector(".bi.bi-chevron-double-down").style.display = "none";
        document.querySelector(".bi.bi-chevron-double-up").style.display = "inline-block";
    } else {
        document.querySelector("#about-me").style.display = "inline";
        document.querySelector(".on-scroll").style.display = "none";

        document.querySelector(".bi.bi-chevron-double-up").style.display = "none";
        document.querySelector(".bi.bi-chevron-double-down").style.display = "inline";
    }
}

const activa = document.querySelector(".nav-link.active").getBoundingClientRect().left;

switch (document.querySelector(".nav-link.active").innerHTML) {

    case "BLOGS":
        document.querySelector(".underline").style.left = activa + 3 + "px";
        break;
    case "PROJECTS":
        document.querySelector(".underline").style.left = activa + "px";
        document.querySelector(".underline").style.width = 78 + "px";
        break;
    case "SOCIAL WORK":
        document.querySelector(".underline").style.width = 100 + "px";
        document.querySelector(".underline").style.left = activa + "px";
        break;
    case "GALLERY":
        document.querySelector(".underline").style.left = activa + "px";
        document.querySelector(".underline").style.width = 70 + "px";
        break;
    case "HOME":
        document.querySelector(".underline").style.left = activa + "px";
        break;
}


const topper = document.querySelector(".navbar").offsetHeight;
document.querySelector(".underline").style.top = topper - 2 + "px";


document.querySelector(".top-left").style.left = (document.querySelector(".left").getBoundingClientRect().width) - 1 + "px";
document.querySelector(".top-right").style.right = (document.querySelector(".right").getBoundingClientRect().width) - 1 + "px";

document.querySelector(".bottom-left").style.left = (document.querySelector(".left").getBoundingClientRect().width) - 1 + "px";
document.querySelector(".bottom-right").style.right = (document.querySelector(".right").getBoundingClientRect().width) - 1 + "px";

document.querySelector(".bi-chevron-double-down").style.left = (document.querySelector(".left").getBoundingClientRect().width - 1) / 2 - 5 + "px";
document.querySelector(".bi-chevron-double-up").style.left = (document.querySelector(".left").getBoundingClientRect().width - 1) / 2 - 5 + "px";

document.querySelector(".share").addEventListener("click", () => {
    var text = document.URL;
    navigator.clipboard.writeText(text).then(function() {
        alert("Link copied to clipboard.")
    }, function(err) {
        alert("Could not copy text to clipboard. Try copying the link from the browser instead.")
    });
});

document.querySelector(".search svg").addEventListener("click", () => {
    document.querySelector("#search-form").style.visibility = "visible";
});

document.querySelector("#form-close").addEventListener("click", () => {
    document.querySelector("#search-form").style.visibility = "hidden";
});

document.querySelector("#search-form input").addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        alert("Entered")
    }
});