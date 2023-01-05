import { showNav, navAnimations } from "../general.js"

showNav();
let hedingTimeLine = gsap.timeline({

    scrollTrigger: {
        trigger: "#header",
        start: "top 10%",
        end: "bottom",
        ease: "power5.inOut",
    }
});
let servicesTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        ease: "power5.inOut",
    }
})
let doorTl = gsap.timeline({})
navAnimations(doorTl, hedingTimeLine)
hedingTimeLine.from("header h1", { y: 500, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")
hedingTimeLine.from(".services .wrapper", { scale: 0.3, stagger: 1, opacity: 0, duration: 1, ease: "power3.inOut" })
