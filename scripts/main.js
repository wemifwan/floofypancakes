function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

var rootElement = document.documentElement
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.05) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
    }
}

document.addEventListener("scroll", handleScroll)

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('—app - height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()