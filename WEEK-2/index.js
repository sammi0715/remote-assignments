// assignment 4 //
// Request 1 //
let welcomeSection = document.querySelector("#first-describe");
const onclickedSection = document.querySelector("#clicked-describe");
welcomeSection.onclick = () => {
    welcomeSection.style.display = "none";
    onclickedSection.style.display = "flex";
}

// Request 2 //
let menuIcon = document.querySelector("#menu-icon");
let sideNavBar = document.querySelector(".side-navbar");
let closeSideNavBar = document.querySelector("#close-sidebar");

menuIcon.onclick = () => {
    sideNavBar.classList.add("active");
};
closeSideNavBar.onclick = () => {
    sideNavBar.classList.remove("active");
}
// Request 3 //
let hideGrid = document.querySelectorAll(".hide");
let viewmoreBtn = document.querySelector("#view-more-btn");

viewmoreBtn.onclick = () => {
        hideGrid.forEach(item => {
            item.classList.remove("hide");
        })
   
}


