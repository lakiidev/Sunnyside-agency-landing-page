export let showNav = () => {
    let burger = document.querySelector(".hamburger")
    let navLinks = document.querySelector(".navLinks")
    let wind = window.matchMedia("(max-width: 700px)")
    let tl = gsap.timeline()
    burger.addEventListener('click', () => {
        if (navLinks.style.visibility == "visible") {
            navLinks.style.visibility = "hidden";
            document.body.style.overflow = "visible"
        }
        else {
            tl.set(navLinks, { visibility: "visible" })
            tl.to(navLinks, { opacity: 1 })
            tl.from(navLinks, { y: 200, opacity: 0, scale: 0, duration: 1 }, "<")
            document.body.style.overflow = "hidden"
        }
    })
}

export let navAnimations = (doorTl, hedingTimeLine) => {

    doorTl.set("body", { "overflow": "hidden" })
    doorTl.to("body", { "--doorHeight": "50%", duration: 0.2 })
    doorTl.to(".door1", { "--doorHeight": "0%", duration: 2, ease: "power5.inOut" }, ">")
    doorTl.to(".door2", { "--doorHeight": "0%", duration: 2, ease: "power5.inOut" }, "<")
    doorTl.set("body", { "overflow": "visible" })
    doorTl.set(".doors", { "display": "none" })
    hedingTimeLine.set(".navLinks", { "display": "flex" })
    hedingTimeLine.from("header .logo", { x: -150, opacity: 0, duration: 1, ease: "power5.inOut" })
    hedingTimeLine.from(".navLinks", { x: 150, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%",)
    let footerTl = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            ease: "power5.inOut",

        }
    });
    footerTl.from("footer .logo", { opacity: 0, y: 250, duration: 1, ease: "power5.inOut" })
    footerTl.from("footer li", { opacity: 0, y: 100, duration: 1, ease: "power5.inOut" }, ">20%")
    footerTl.from("footer .social-icons", { opacity: 0, y: 10, duration: 1, ease: "power5.inOut" })

}

