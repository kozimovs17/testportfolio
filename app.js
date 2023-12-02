let navbar = document.querySelector(".navbar");
let navbarx = document.querySelector(".navbarx");
let ul = document.querySelector("ul");
let n = 0;
let x = 0;

navbar.addEventListener("click", () =>{
        ul.style.display = "flex";
        navbar.style.display = "none";
        navbarx.style.display = "flex";
    
});

navbarx.addEventListener("click", ()=>{
        ul.style.display = "none";
        navbar.style.display = "flex";
        navbarx.style.display = "none";
})