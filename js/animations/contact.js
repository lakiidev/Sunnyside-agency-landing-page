import { showNav, navAnimations } from "../general.js"

showNav();
let hedingTimeLine = gsap.timeline({

    scrollTrigger: {
        trigger: "#header",
        end: "top 1%",
        ease: "power5.inOut",
    }
});
let doorTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#header",
        end: "top 1%",
        ease: "power5.inOut",
    }
})
let contactsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
        ease: "power5.inOut",
    }
})
navAnimations(doorTl, hedingTimeLine)
hedingTimeLine.from("header .hero img", { x: -300, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")
hedingTimeLine.from("header .hero h1", { x: 300, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")
hedingTimeLine.from("header .hero p", { x: 300, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")

contactsTl.from(".contact-form .credentials", { y: 300, opacity: 0, duration: 1, ease: "power5.inOut" })

contactsTl.from(".contact-form .text", { y: 300, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")
contactsTl.from(".contact-form button", { y: 300, opacity: 0, duration: 1, ease: "power5.inOut" }, "<80%")

let button = document.querySelector("#btn")
let arrow = document.querySelector("#arrow")
button.addEventListener("mouseover", () => {
    arrow.setAttribute('src', "./images/contact/Arrow-white.png")
    gsap.to(arrow, { opacity: 1, duration: 1, x: 20 })

})
button.addEventListener("mouseleave", () => {
    gsap.to(arrow, { duration: 1, x: 0 })
    arrow.setAttribute('src', "./images/contact/arrow.png")
})


