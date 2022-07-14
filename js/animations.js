let hedingTimeLine=gsap.timeline({})
let transformTl = gsap.timeline({

    scrollTrigger: {
      trigger: ".transform-text",   
      start: "top 80%", 
      ease: "power5.inOut",
      
    }
  });
let standTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".stand-text",   
      start: "top 80%", 
      ease: "power5.inOut",
      
    }
  });
let gphotoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".graphic-design",   
      start: "top center", 
      ease: "power5.inOut",
      
    }
  });
let testimonialsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonials",   
      start: "top center", 
      ease: "power5.inOut",
      
    }
  });
let galleryTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",   
      start: "top 90%", 
      ease: "power5.inOut",
      
    }
  });
let footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",   
      start: "top 80%", 
      ease: "power5.inOut",
      
    }
  });
let body=document.body
hedingTimeLine.set(body,{overflow: "hidden"})
hedingTimeLine.from("header .logo",{x:-150,opacity:0, duration: 1, ease:"power5.inOut"})
hedingTimeLine.from(".navLinks",{x:150,opacity:0, duration: 1,ease:"power5.inOut"},"<50%",)
hedingTimeLine.from("header h1",{y:1000,opacity:0, duration: 1,ease:"power5.inOut"},"<60%")
hedingTimeLine.from(".arrow",{scale: .1,y:450,opacity:0, duration: 1,ease:"power5.inOut"},"<40%")
hedingTimeLine.set(body,{overflow: "visible"})

transformTl.set(".wrapper .line",{"--opacityLine":"1",})
transformTl.to(".wrapper .line",{"--lineX":"90%",duration: 1.2, ease:"power5.inOut"})
transformTl.to(".wrapper .line",{"--opacityLine":"0",duration: 1.2, ease:"power5.inOut"})
transformTl.from(".transform-text",{opacity:0,x:-150,duration:1, ease:"power5.inOut"},"<20%")

standTl.set(".wrapper .line-red",{"--opacityLine":"1"})
standTl.to(".wrapper .line-red",{"--lineX":"90%",duration: 1.2, ease:"power5.inOut"})
standTl.to(".wrapper .line-red",{"--opacityLine":"0",duration: 1.2, ease:"power5.inOut"})
standTl.from(".stand-text",{opacity:0,x:150,duration:1, ease:"power5.inOut"},"<20%")

gphotoTl.from(".graphic-text",{opacity:0,y:150,duration:.7, ease:"power5.inOut"},">")
gphotoTl.from(".photo-text",{opacity:0,y:150,duration:.7, ease:"power5.inOut"},"<")


testimonialsTl.from(".testimonials h2",{opacity:0,y:150,duration:.7, ease:"power5.inOut"},">")
testimonialsTl.from(".testimonials .emily",{opacity:0,x:350,duration:.7, ease:"power5.inOut"},"<20%")
testimonialsTl.from(".testimonials .thomas",{opacity:0,y:350,duration:.7, ease:"power5.inOut"},"<")
testimonialsTl.from(".testimonials .jennie",{opacity:0,x:-350,duration:.7, ease:"power5.inOut"},"<")

galleryTl.from(".gallery",{opacity:0,y:350,duration:.7, ease:"power5.inOut"},">20%")
footerTl.from("footer .logo",{opacity:0,y:250,duration:1, ease:"power5.inOut"})
footerTl.from("footer li",{opacity:0,y:100,duration:1, ease:"power5.inOut"},">20%")
footerTl.from("footer .social-icons",{opacity:0,y:10,duration:1, ease:"power5.inOut"})

var options = {
  wrapperId: 'body',
  wrapperDamper: 0.01,
  cancelOnTouch: true
};

butter.init(options)