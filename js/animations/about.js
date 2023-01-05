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
let aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "30% bottom",
        ease: "power5.inOut",
    }
})
let empTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".employees",
        start: "top 80%",
        ease: "power5.inOut",
    }
})
let projectTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top 90%",
        ease: "power5.inOut",
    }
})

navAnimations(doorTl, hedingTimeLine)

hedingTimeLine.from("header .hero img", { y: 500, opacity: 0, duration: 1, ease: "power5.inOut" }, "<80%")
hedingTimeLine.from("header .hero h1", { x: 100, opacity: 0, duration: 1, ease: "power3.inOut" }, "<50%")
hedingTimeLine.from("header .hero p", { x: 100, opacity: 0, duration: 1, ease: "power3.inOut" }, "<50%")

aboutTl.from(".about-section img", { x: -100, opacity: 0, duration: 1, ease: "power4.inOut" }, "<50%")
aboutTl.from(".about-section .about-cnt", { x: 100, opacity: 0, duration: 1, ease: "power4.inOut" }, "<50%")

empTl.from(".employees .no1 .image-con", { x: -500, opacity: 0, duration: 1, ease: "power4.inOut" }, "<50%")
empTl.from(".employees .no2 .image-con", { x: 500, opacity: 0, duration: 1, ease: "power4.inOut" }, ">")
empTl.from(".employees .no1 .text-con h2", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")
empTl.from(".employees .no1 .text-con h3", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")
empTl.from(".employees .no1 .text-con p", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")
empTl.from(".employees .no2 .text-con h2", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")
empTl.from(".employees .no2 .text-con h3", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")
empTl.from(".employees .no2 .text-con p", { y: 200, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")

projectTl.from(".contact", { y: 200, scale: 0.3, opacity: 0, duration: 1, ease: "power5.inOut" }, "<50%")

