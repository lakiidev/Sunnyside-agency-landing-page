
let showNav=()=>
{
    let burger=document.querySelector(".hamburger")
    let navLinks=document.querySelector(".navLinks")
    let wind = window.matchMedia("(max-width: 700px)")
    burger.addEventListener('click',()=>
    {
        if(navLinks.style.visibility == "visible"){
            navLinks.style.visibility = "hidden";   
        }
        else{
            navLinks.style.visibility = "visible";
        }
    })
    document.addEventListener('scroll',()=>
    {
        match(wind,navLinks);
    })
}
showNav();
wind.addListener(match)
function match(wind,navLinks)
{
    if (wind.matches) { // If media query matches
        navLinks.style.visibility = "hidden"; 
    } else {
        navLinks.style.visibility="visible";
    }
}
