// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();









function page1Animation()
{
    const page1Content = document.querySelector("#page1-content")
const cursor = document.querySelector("#cursor")
const video = document.querySelector("#page1 video")

page1Content.addEventListener("mousemove",(e)=>{
gsap.to(cursor,{
    x:e.x,
    y:e.y,
    duration:0.5,
    ease:"back.out"
})
})

page1Content.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1
    })
})

page1Content.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:0
    })
})
}
page1Animation()


function page2Animation() {
    const page2TopH3 = document.querySelector('#page2 .top h3');
    const page2TopH4 = document.querySelector('#page2 .top h4');
    // const page2BottomSpan = document.querySelector('#page2 .bottom .element span p');
    const borderBottom = document.querySelector('.elem')
    gsap.from(borderBottom, {
        x: -1520,
        duration: 1,
        // opacity:0,
        scrollTrigger: {

            trigger: borderBottom, // Change the trigger to the specific element
           
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });

    gsap.from(page2TopH3, {
        x: 120,
        duration: 1,
        opacity:0,
        scrollTrigger: {
            trigger: page2TopH3, // Change the trigger to the specific element
            
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });
    gsap.from(page2TopH4, {
        x: 120,
        duration: 1,
        opacity:0,
        scrollTrigger: {
            trigger: page2TopH4, // Change the trigger to the specific element
            
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });
    const page2BottomSpans = document.querySelectorAll('#page2 .bottom .element span');

    page2BottomSpans.forEach((span) => {
        const paragraphs = span.querySelectorAll('p');
        gsap.from(paragraphs, {
            y: 120,
            stagger: 0.3,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: span,
            
                start: "top 80%",
                end: "top 77%",
                scrub: 2,
                // markers: true
            }
        });
    });
}

page2Animation();


function page3Animation(){
    const page3 = document.querySelector('#page3')
    const page3Top = document.querySelector('#page3-top')
    const page3TopH4 = document.querySelector('#page3 #page3-top h4')
    const page3TopH2 = document.querySelector('#page3-top h2')
  
    gsap.from(page3TopH4, {
        y: 120,
        duration: 1,
        opacity:0,
        scrollTrigger: {
            trigger: page3TopH4, // Change the trigger to the specific element
            // scroller:"#page3/",
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });

    gsap.from(page3TopH2, {
        y: 120,
        duration: 1,
        opacity:0,
        // stagger:0.3,
        scrollTrigger: {
            trigger: page3TopH2, // Change the trigger to the specific element
            // scroller:"#page3/",
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });
    gsap.from("#h23", {
        y: 120,
        duration: 1,
        opacity:0,
        // delay:1,
        // stagger:0.3,
        scrollTrigger: {
            trigger: "#h23", // Change the trigger to the specific element
            // scroller:"#page3/",
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });


}
page3Animation()


function page4Animation(){
    const page4 = document.querySelector('#page4')
    const page4H3 = document.querySelector('#page4 .top h3')
    const element = document.querySelector('.elem')
     
    gsap.from("#page4 .top h3", {
        y: 120,
        duration: 1,
        stagger:0.3,
        // opacity:0,
        scrollTrigger: {
            trigger: "#page4 .top", // Change the trigger to the specific element
            
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });

    const borderBottom = document.querySelector('#page4 .elem')
    gsap.from(borderBottom, {
        x: -1520,
        duration: 1,
        delay:2,
        // opacity:0,
        scrollTrigger: {

            trigger: borderBottom, // Change the trigger to the specific element
           
            start: "top 80%",
            end: "top 77%",
            scrub: 2,
            // markers: true
        }
    });
     const page4BottomSpans = document.querySelectorAll('#page4 .mid .element span');

    page4BottomSpans.forEach((span) => {
        const paragraphs = span.querySelectorAll('p');
        gsap.from(paragraphs, {
            y: 120,
            stagger: 0.3,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: span,
            
                start: "top 80%",
                end: "top 77%",
                scrub: 2,
                // markers: true
            }
        });
    });


}
page4Animation()

function swiper()
{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });
    
}
swiper()

function loader()
{
    const tl = gsap.timeline()
    tl.from("#loader h3",{
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-20,
        duration:1,
        stagger:0.1
    })

    tl.to("#loader",{
        opacity:0,
    })
    tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5
    })
    tl.to("#loader",{
        display:"none",
    })
}
loader()

function menu() {
    const menu = document.querySelector('nav h4');
    const headerRight = document.querySelectorAll('#menu .header .right h3');
    
    menu.addEventListener('click', () => {
        const tl = gsap.timeline();
        tl.to("#menu", {
            transform: "translateY(0%)"
        });
        // Animation for each h3 element in header right
        headerRight.forEach((h3, index) => {
            tl.from(h3, {
                y: 20,
                opacity: 0,
                duration: 0.3, // Adjust duration as needed
                // delay:  0.1, // Add delay for stagger effect
                ease: "back.out" // Add easing if desired
            });
        });
        const borderBottom = document.querySelector('#menu .elem')
        gsap.from(borderBottom, {
            x: -1520,
            duration: 1,
            // opacity:0,
            scrollTrigger: {
    
                trigger: borderBottom, // Change the trigger to the specific element
               
                start: "top 80%",
                end: "top 77%",
                scrub: 2,
                // markers: true
            }
        });
    });

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        gsap.to("#menu", {
            transform: "translateY(-100%)"
        });
    });
}
menu();


