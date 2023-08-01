const menuBtn = document.querySelector(".header__menuBarBtn");
const closeBtn = document.querySelector(".header__closeBtn")
const mobileNavBar = document.querySelector(".mobile-NavBar");
const mobileLinks = document.querySelectorAll(".mobile__NavBar-Links");
const themeToggleBtn = document.querySelectorAll("#theme-toggle")
const theme = localStorage.getItem("theme");
theme && document.body.classList.add(theme)
let mobileNavOpen = false

menuBtn.addEventListener("click", function(){
    mobileNavOpen =!mobileNavOpen;
    if (mobileNavOpen === true){
        menuBtn.style.display ="none"
        closeBtn.style.display = "flex"
        mobileNavBar.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
    else{
        mobileNavBar.style.display = "none"
        document.body.style.overflow = "auto"
    }

    mobileLinks.forEach(linksItems => {
        linksItems.addEventListener("click", function(){
            mobileNavOpen = false
            mobileNavBar.style.display= "none"
            document.body.style.overflowY = "auto"
        })
    })
})

closeBtn.addEventListener("click", function(){
    mobileNavOpen =!mobileNavOpen;
    if (mobileNavOpen === false){
        menuBtn.style.display ="flex";
    closeBtn.style.display = "none";
    mobileNavBar.style.display = "none"
    document.body.style.overflowY = "auto"
    }
    else{
        mobileNavBar.style.display = "none"
        document.body.style.overflow = "auto"
    }

})

themeToggleBtn.forEach(btnItem => {
    btnItem.addEventListener("click", function(){
        document.body.classList.toggle("light-Mode");
        if (document.body.classList.contains("light-Mode")) {
            localStorage.setItem("theme", "light-Mode")
        } else {
            localStorage.removeItem("theme")
            document.body.removeAttribute("class")
        }
     
    })
})