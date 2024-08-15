function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

function cursor(){
    const cursor = document.querySelector('.cursor')
    const Main =document.querySelector('.main')
    const Video = document.querySelector('.page1 video')
    document.addEventListener('mousemove',(e)=>{
        
        gsap.to(cursor,{
          x:e.x+20,
          y:e.y+20
        })
        // cursor.style.left = e.x+"px"
        // cursor.style.top = e.y+"px"
    })


    Video.addEventListener('mouseenter',(e)=>{

        cursor.style.width="70px";
        cursor.style.borderRadius="7px"
        cursor.innerHTML="Sound On"
        cursor.style.fontFamily="PP Mori"
        cursor.style.fontSize="15px"
        cursor.style.padding="2px 0px"
        
    })
    Video.addEventListener('mouseleave',(e)=>{
        cursor.style.width="20px";
        cursor.style.borderRadius="50%"
        cursor.innerHTML=""
        cursor.style.padding=""
    })

}
cursor()

function GSAP(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1 h1',
            scroller:'.main',
            // markers:true,
            start:'top 27%',
            end:'top 0',
            scrub:2
        }
    })
    tl.to('.page1 h1',{
        x:-100
    },"anim")
    
    tl.to('.page1 h2',{
        x:120
    },"anim")
    
    tl.to('.page1 video',{
        width:"90%"
    },'anim')
    
    const tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1 h1',
            scroller:'.main',
            // markers:true,
            start:'top -116%',
            end:'top -120%',
            scrub:3
        }
    })
    
    tl2.to('.main',{
        backgroundColor:"#fff",
    })
    
    const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1 h1',
            scroller:'.main',
            // markers:true,
            start:'top -280%',
            end:'top -300%',
            scrub:3
        }
    })
    
    tl3.to('.main',{
        backgroundColor:"#0f0d0d"
    })
}
GSAP()

function box(){
const cursor = document.querySelector('.cursor')
const boxes = document.querySelectorAll('.box')
boxes.forEach((e)=>{
    e.addEventListener('mouseenter',(d)=>{
        const att = e.getAttribute('data-image')
        cursor.style.width="300px"
        cursor.style.height="250px"
        cursor.style.borderRadius='5px'
        cursor.style.backgroundImage=`url(${att})`
        cursor.style.zIndex="10"
    })
    e.addEventListener('mouseleave',(d)=>{
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius='50%'
        cursor.style.backgroundImage=`none`
        cursor.style.zIndex="8"
    })
})
}
box()


const h4 = document.querySelectorAll('#nav h4')
const purple = document.querySelector('#purple')
h4.forEach((e)=>{
    e.addEventListener('mouseenter',(d)=>{
        purple.style.display='block'
        purple.style.opacity="1"
    })
    e.addEventListener('mouseleave',(d)=>{
        purple.style.display='none'
        purple.style.opacity="0"
    })
})