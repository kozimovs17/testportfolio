let navbar = document.querySelector(".navbar");
let navbarx = document.querySelector(".navbarx");
let ul = document.querySelector("ul");
let body = document.querySelector("body")

navbar.addEventListener("click", () => {
        ul.style.display = "flex";
        navbar.style.display = "none";
        navbarx.style.display = "flex";

});

navbarx.addEventListener("click", () => {
        ul.style.display = "none";
        navbar.style.display = "flex";
        navbarx.style.display = "none";
});
/******************************************NAVBAR****************************************/

let porfoliolinks = document.querySelectorAll("#portfolio-links")
let projects = document.querySelectorAll("#projects");
porfoliolinks.forEach((item) => {
        item.addEventListener("click", () => {
                if (item.dataset.link == "ALL") {
                        porfoliolinks[0].style.color = "#fff";
                        porfoliolinks[1].style.color = "#7C7C7C";
                        porfoliolinks[2].style.color = "#7C7C7C";
                        projects[0].style.display = "flex";
                        projects[1].style.display = "flex";
                        projects[2].style.display = "flex";
                        projects[3].style.display = "flex";
                        projects[4].style.display = "flex";
                        projects[5].style.display = "flex";

                }
                if (item.dataset.link == "CODED") {
                        porfoliolinks[0].style.color = "#7C7C7C";
                        porfoliolinks[1].style.color = "#fff";
                        porfoliolinks[2].style.color = "#7C7C7C";
                        projects[0].style.display = "flex";
                        projects[1].style.display = "flex";
                        projects[2].style.display = "none";
                        projects[3].style.display = "none";
                        projects[4].style.display = "none";
                        projects[5].style.display = "flex";

                }
                if (item.dataset.link == "DESIGNED") {
                        porfoliolinks[0].style.color = "#7C7C7C";
                        porfoliolinks[1].style.color = "#7C7C7C";
                        porfoliolinks[2].style.color = "#fff";
                        projects[0].style.display = "none";
                        projects[1].style.display = "none";
                        projects[2].style.display = "flex";
                        projects[3].style.display = "flex";
                        projects[4].style.display = "flex";
                        projects[5].style.display = "none";
                }
        })
})
/******************************************PORTFOLIO****************************************/

let dennoch = document.querySelector(".dennoch");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let headerbackground = document.querySelector(".header-background2");
let aboutback = document.querySelector(".background-frame");
let section = document.querySelector("section");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");
let footer = document.querySelector(".footer");
let n = 0;

dennoch.addEventListener("click", ()=>{
        n++;
        if(n % 2 !=0){
                sun.style.display = "flex";
                moon.style.display = "none";
                headerbackground.style.backgroundColor = "#1D1D1D";
                section.style.background = "#000";
                portfolio.style.background = "#000";
                aboutback.style.background = "#1D1D1D";
                contact.style.background = "#1D1D1D";
                footer.style.background = "#000";
        }else{
                sun.style.display = "none";
                moon.style.display = "flex";
                section.style.background = "#1D1D1D";
                headerbackground.style.backgroundColor = "#D7D7D7";
                section.style.background = "#1D1D1D";
                aboutback.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0.00) 0%, rgba(1, 1, 1, 0.16) 100%), #FFF";
                contact.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0.00) 0%, rgba(1, 1, 1, 0.16) 100%), #FFF";
                footer.style.background = "#1D1D1D";
        }
})