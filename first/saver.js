const all_terms = [
    "Home",
    "About Me",
    "Contact",
    "Algorithms",
    "Skills",
    "Projects",
    "Internships",
    "CodePen",
    "GitHub",
    "Sports and Extracurriculars",
    "Interview Questions",
    "Competitive Applications",
    "Artificial Intelligence Camps",
    "BancBridge Software Systems",
    "Ved"
]

const all_links = [
    "index.html",
    "about_more.html",
    "contact.html",
    "algorithms.html",
    "skills.html",
    "projects.html",
    "internships.html",
    "https://codepen.io/vedpanse",
    "https://github.io/vedpanse",
    "sports.html",
    "interview.html",
    "competitve.html",
    "artificial.html",
    "https://www.bancbridge.com/",
    "about_more.html"
]

let query = "home"

document.querySelector("#search_box").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        query = e.target.value.trim().toLowerCase().split(' ').join('')
        if (document.querySelector("#query_suggestions").style.display = "none") {
            document.querySelector("#query_suggestions").style.display = "block";
        } else {
            document.querySelector("#query_suggestions").style.display = "none";
        }
        verifyTerms()
        getLink()

    }

})

let ind = -1


function verifyTerms() {
    // Checks if query lies in all_terms
    let my_list = []
    let term = "home"
    all_terms.forEach(function (term) {
        my_list.push(term.toLowerCase().split(' ').join('').includes(query))
    })
    if (my_list.includes(true)) {
        term = all_terms[my_list.indexOf(true)]
        document.querySelector("#query").innerHTML = term 
        ind = all_terms.indexOf(term)
    } else {
        document.querySelector("#query").innerHTML = "Term not found"
    }

}

let url = "home.html"

function getLink() {
    //get Link and redirect
    url = all_links[ind]
    window.location.replace(url)
}
