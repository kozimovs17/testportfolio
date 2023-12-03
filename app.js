let navbar = document.querySelector(".navbar");
let navbarx = document.querySelector(".navbarx");
let ul = document.querySelector("ul");

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

let porfoliolinks = document.querySelectorAll("#portfolio-links")
let projects = document.querySelectorAll("#projects");
porfoliolinks.forEach((item) => {
        item.addEventListener("click", () => {
                if(item.dataset.link == "ALL"){
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
                if(item.dataset.link == "CODED"){
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
                if(item.dataset.link == "DESIGNED"){
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