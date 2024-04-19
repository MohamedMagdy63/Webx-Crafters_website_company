import React, { useState, useEffect, useRef } from 'react';
import Layout from '../Images/Icons/layers.png';
import Responsive from '../Images/Icons/responsive.png';
import TechnicalSupport from '../Images/Icons/technical-support.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const MainSlide = () => {
  const container = useRef()
  const service = useRef([])
  const subdiv = (el)=>{
    if(el){
      service.current.push(el)
    }
  }
  
  const mainContainer = useRef()
  const designDiv = useRef()
  const designEle = useRef()
  const Webpages = useRef()
  const textAnd = useRef()
  const textSplit = useRef()
  const textContainer = useRef()
  const test = useRef()

  const courser = useRef()
  const leftSection = useRef()
  const [styleState,setStyleState] = useState(false)
  const [activeCursur,setActiveCursur] = useState(false)

  gsap.registerPlugin(ScrollTrigger);

  // animation text useEffect
  useEffect(()=>{
    let design = gsap.timeline()
    design.from(designEle.current,{
      duration: 1,
      ease: "power3.out",
      y:"0"
    }).to(designDiv.current,{
      duration: 1,
      ease: "elastic.out",
      height:"80px"
    })
    let grid = gsap.timeline().pause()
    let sw = gsap.timeline().pause()
    design.to(textAnd.current,{
      duration: 0.5,
      delay: 0.5,
      scale: 1.5,
      onComplete:()=> grid.play()
    })
    grid.from(Webpages.current,{
      direction: -1,
      duration: 0.5,
      delay: 0.5,
      backgroundImage: "none",
      opacity: 0
    })
    grid.to(Webpages.current,{
      direction: -1,
      duration: 0.5,
      delay: 0.5,
      backgroundImage: "linear-gradient(to right, #3b82f6 , #22c55e)",
      opacity: 1,
      onComplete: ()=> sw.play()
    })

    sw.from(textSplit.current,{
      duration: 0.5,
      delay: 0.2,
      x: "-100px",
      opacity: 0
    }).to(textSplit.current,{
      duration: 0.5,
      delay: 0.2,
      x: "0px",
      opacity: 1
    })

  },[])
  // slider motion
  const horizontalLoop = (items, config) => {
    config = config || {};
    let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
      gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
        xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
        return xPercents[i];
      }
    });
    gsap.set(items, {x: 0});
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    const toIndex = (index, vars) => {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex+1, vars);
    tl.previous = vars => toIndex(curIndex-1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }
  useEffect(()=>{
    let loops = horizontalLoop(service.current, {
          repeat: -1, 
          speed: 1.5 ,
          reversed: false,
          paddingRight: parseFloat(gsap.getProperty(service.current[0], "marginRight", "px"))
    });
    let currentScroll = 0;
    let scrollDirection = 1;

    window.addEventListener("scroll", () => {
      let direction = (window.pageYOffset > currentScroll) ? 1 : -1;
      if (direction !== scrollDirection) {
          gsap.to(loops, {timeScale: direction, overwrite: true});
          scrollDirection = direction;
      }
      currentScroll = window.pageYOffset;
    });
  },[])

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if(mainContainer.current){
        if(window.pageYOffset >= (mainContainer.current.offsetHeight / 2)){
          setActiveCursur(true)
        }else{
          setActiveCursur(false)
        }
      }
    });
  },[activeCursur])

  useEffect(()=>{
    mainContainer.current.addEventListener("mousemove",(e)=>{
      gsap.to(courser.current,{
        duration: 1,
        css:{
          top: e.clientY,
          left: e.clientX,
          
        },
        ease: "power3.out"
      })
    })
    
    gsap.utils.toArray(textContainer.current.children).forEach((items)=>{
      items.addEventListener('mousemove',()=>{
        gsap.to(courser.current,{
          scale: 2.5,
          background: "#fff",
          border: 0
        })
        setStyleState(true)
      })
      items.addEventListener('mouseleave',()=>{
        gsap.to(courser.current,{
          css:{
            background: "#ffff",
            scale: 1,
            border: "2px solid red"
          },
          ease:"power3.in"
        })
        setStyleState(false)
      })
    })
  },[styleState])



  return (
    <div ref={mainContainer} className="relative w-full lg:h-screen sm:h-screen lg:flex lg:justify-center lg:flex-row lg:items-center select-none cursor-none
    lg:before:content-normal lg:before:absolute lg:before:top-0 lg:before:right-0 lg:before:w-[60%] lg:before:h-full 
    lg:before:bg-[rgb(64,213,224)] lg:before:rounded-bl-full lg:before:z-10
    
    sm:before:content-normal sm:before:absolute sm:before:top-0 sm:before:right-0 sm:before:w-[80%] sm:before:h-[70%] 
    sm:before:bg-[rgb(64,213,224)] sm:before:rounded-bl-full
    sm:flex sm:flex-col-reverse sm:justify-center sm:items-center

    max-sm:before:content-normal max-sm:before:absolute max-sm:before:top-0 max-sm:before:right-0 max-sm:before:w-[70%] max-sm:before:h-[50%] 
    max-sm:before:bg-[rgb(64,213,224)] max-sm:before:rounded-bl-full
    max-sm:flex max-sm:flex-col-reverse max-sm:justify-end max-sm:items-end">
      <div ref={courser} className={`fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] w-[40px] h-[40px] rounded-full border-2 
      border-red-400 bg-[#ffff] ${styleState ? "mix-blend-difference" : "mix-blend-normala"} ${activeCursur ? 'hidden' : 'visible'} pointer-events-none z-30`}></div>

      <div ref={leftSection} className='lg:w-[60%] lg:h-screen lg:flex lg:justify-center lg:items-center lg:z-10
      sm:w-[90%] sm:h-screen sm:flex sm:justify-start sm:items-start sm:z-10 sm:pt-10
      max-sm:w-full max-sm:h-[60vh] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:z-10 max-sm:pt-10'>

        <div ref={textContainer} className='w-fit h-fit flex flex-col lg:justify-center lg:items-start lg:pl-[100px] sm:pl-0 sm:justify-start sm:items-start max-sm:pl-0 max-sm:justify-start max-sm:items-start'>
          <div ref={designDiv} className='w-full text-start h-1 overflow-hidden'>
            <p ref={designEle} className='lg:text-7xl sm:text-5xl max-sm:text-5xl font-mainFont'>Design, <span ref={test} className='font-bold text-mainColor'>Develop</span></p>
          </div>
          <div className='flex justify-center items-center gap-4 ml-14 '>
            <p ref={textAnd} className='font-bold font-mono text-black lg:text-8xl sm:text-6xl max-sm:text-6xl scale-0'>&</p>
            <p ref={Webpages} className={`font-bold font-mainFont lg:text-7xl sm:text-5xl max-sm:text-5xl relative `} 
            style={{WebkitTextFillColor:"transparent", WebkitTextStroke:"2px black",WebkitBackgroundClip:"text",}}>Create Webpages</p>
          </div>
          <p ref={textSplit} className='lg:text-7xl sm:text-5xl sm:mt-6 max-sm:mt-4 max-sm:text-4xl font-mainFont'>Software <span className='font-bold text-mainColor'>Systems</span></p>
        </div>
      </div>
      <div className='lg:w-[60%] lg:h-screen sm:w-full sm:h-[50%] max-sm:w-[100%] max-sm:h-[100%] z-20'>
        <div className='w-full h-full flex lg:justify-start lg:items-center sm:justify-end sm:items-end max-sm:justify-end max-sm:items-end'>
          <img 
          src="landingPage.png" 
          alt=""
          className='object-cover lg:w-full lg:h-[90%] sm:w-[80%] max-sm:w-full' />
        </div>
      </div>

      <div ref={container} className='absolute overflow-hidden bottom-0 w-full h-[100px] p-0  flex justify-evenly items-center'>
        <div ref={subdiv} className='flex justify-center items-center gap-4 w-[500px]'>
          <img src={Layout} className='lg:w-16 lg:h-16 sm:w-16 sm:h-16 max-sm:w-14 max-sm:h-14  p-1' alt="" />
          <p className="text-sm lg:text-2xl max-sm:lg:text-xl text-center">
            Unique Layout design
          </p>
        </div>
        <div ref={subdiv} className='flex justify-center items-center gap-4 w-[500px]'>
          <img src={Responsive} className='lg:w-16 lg:h-16 sm:w-16 sm:h-16 max-sm:w-14 max-sm:h-14 p-1' alt="" />
          <p className="text-sm lg:text-2xl text-center">
            Beautiful all Device Responsive
          </p>
        </div>
        <div ref={subdiv} className='flex justify-center items-center gap-4 w-[500px]'>
          <img src={TechnicalSupport} className='lg:w-16 lg:h-16 sm:w-16 sm:h-16 max-sm:w-14 max-sm:h-14 p-1' alt="" />
          <p className="text-sm lg:text-2xl text-center">
            24/7 Hours Dedicated Support
          </p>
        </div>
      </div>

    </div>
  );
}

export default MainSlide;
