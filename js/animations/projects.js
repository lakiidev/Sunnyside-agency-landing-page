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
let projecstTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top 60%",
        ease: "power5.inOut",
    }
})
navAnimations(doorTl, hedingTimeLine)

hedingTimeLine.from("header h1", { y: 500, opacity: 0, duration: 1, ease: "power5.inOut" }, "<60%")

projecstTl.from(".projects .heading", { x: -500, opacity: 0, duration: 1, ease: "power3.inOut" })
projecstTl.from(".projects .projects-grid .project", { y: 500, stagger: 0.5, opacity: 0, duration: 1, ease: "power3.inOut" }, "<")

let project = document.querySelectorAll(".project")
for (let i = 0; i < project.length; i++) {
    project[i].addEventListener("mouseover", () => {
        gsap.to(project[i], { scale: 1.2 })
    })
    project[i].addEventListener("mouseleave", () => {
        gsap.to(project[i], { scale: 1 })
    })

}