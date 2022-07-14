
let showNav=()=>
{
    let burger=document.querySelector(".hamburger")
    let navLinks=document.querySelector(".navLinks")
    let wind = window.matchMedia("(max-width: 700px)")
    let tl=gsap.timeline()
    burger.addEventListener('click',()=>
    {
        if(navLinks.style.visibility == "visible"){
            navLinks.style.visibility = "hidden";  
        }
        else{
            tl.set(navLinks,{visibility:"visible"})
            tl.to(navLinks,{opacity:1})
            tl.from(navLinks,{y:200,opacity:0,scale:0,duration:1},"<")
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
        navLinks.style.visibility = "visibility"; 
    } else {
        navLinks.style.visibility="visible";
    }
}
