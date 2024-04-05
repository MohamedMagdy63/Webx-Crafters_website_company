import React, { useEffect, useRef, useState } from 'react';
import DemoImages from '../Data/Demos';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger) 

const Demos = () => {
  const [sliderGsap,setSliderGsap] = useState([])
  const [activeSlideImagesGsap,setActiveSlideImagesGsap] = useState()
  const [activeDivGsap,setAactiveDivGsap] = useState()
  const [activeBgImagesGsap,setActiveBgImagesGsapp] = useState()
  const ref = useRef([])
  const image = useRef([])
  const title = useRef([])
  const bg = useRef([])
  const container = useRef()
  const section = useRef()
  const sildes = (el) => ref.current.push(el)
  const activeSlideImages = (el) => image.current.push(el)
  const titleDiv = (el) => title.current.push(el)
  const backgroundImage = (el) => bg.current.push(el)

  
  const getInitialTranslatez = (slider)=>{
    const style = window.getComputedStyle(slider)
    const matrix = style.transform.match(/matrix3d\((.+)\)/)
    if(matrix){
      const values = matrix[1].split(", ")
      return parseFloat(values[14] || 0)
    }
    return 0
  }

  const mapRangr = (value, inMin, inMax, outMin, outMax)=>{
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }


  useEffect(() => {
    if(ref.current) setSliderGsap(gsap.utils.toArray(ref.current))
    if(image.current) setActiveSlideImagesGsap(gsap.utils.toArray(image.current))
    if(title.current) setAactiveDivGsap(gsap.utils.toArray(title.current))
    if(bg.current) setActiveBgImagesGsapp(gsap.utils.toArray(bg.current))

  }, [ref,image,title])

  
  useEffect(()=>{
    if(sliderGsap){
      sliderGsap.forEach((slide,index)=>{
        const initialZ = getInitialTranslatez(slide)

        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self)=>{
            let size = DemoImages.length - 1
            const progress = self.progress
            const zIncrement = progress * (size * 2500)
            const currentZ = initialZ + zIncrement
            let opacity;
            if(currentZ > -2500){
              opacity = mapRangr( currentZ, -2500, 0, 0.5, 1)
            }else{
              opacity = mapRangr( currentZ, -5000, -2500, 0, 0.5)
            }
            
            slide.style.opacity = opacity
            slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`
            // activeBgImagesGsap[index].style.opacity = opacity

            if(currentZ < 20){
              gsap.to(activeSlideImagesGsap[index], 0.5, {
                opacity: 1,
                ease: "power3.out"
              })
              gsap.to(activeDivGsap[index], 0.5, {
                opacity: 1,
                ease: "power3.out"
              })
              gsap.to(activeBgImagesGsap[index], 1.5, {
                opacity: 0,
                ease: "power3.out"
              })
            }else{
              gsap.to(activeSlideImagesGsap[index], 0.5, {
                opacity: 0,
                ease: "power3.out"
              })
              gsap.to(activeDivGsap[index], 0.5, {
                opacity: 0,
                ease: "power3.out"
              })
              gsap.to(activeBgImagesGsap[index], 1.5, {
                opacity: 1,
                ease: "power3.out"
              })
            }
          }
        })
      })
    }
  })

  return (
    <div ref={section} className="w-full z-[-1]">
      <div ref={container} className="relative w-full h-[2000vh] mt-8 z-20">
        <Navbar />
        <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r 
        from-blue-500 to-green-500 bg-clip-text text-transparent">Explore Our Projects</h1>
        <div className={`fixed top-0 left-0 flex flex-col-reverse w-full h-full overflow-hidden bg-black opacity-35 z-[-1]`}>
          {
            DemoImages.map((item, index) => (
              <img  src={item.project} 
              key={index} alt="" 
              ref={ backgroundImage }
              className={`object-cover w-full h-full blur-[10px] absolute scale-[1.125] ${ index === 0 ? 'opacity-100' : 'opacity-0' }`} />
            )) 
          }
          
        </div>
        <div
        className={`fixed top-10 left-0 w-[100vw] h-[100vh] transform-style-3d perspective-800`}>
          {DemoImages.map((item, index) => (
            <div ref={sildes} key={index} className={`absolute w-[600px] h-[600px] overflow-hidden 
              ${index % 2 === 0 ? 'top-[50%] left-[70%]' : 'top-[50%] left-[30%]' } ${ index === 0 ? 'opacity-100' : index === 1 ? 'opacity-50' : 'opacity-0' }`}
              style={{transform:`translateX(-50%) translateY(-50%) translateZ(-${index * 2500}px)`}}>
              <div ref={titleDiv} className="flex justify-start py-3">
                  <p className='font-bold text-xl text-black' >{item.desc}</p>
              </div>
              <img
                ref={activeSlideImages}
                className='h-full w-full object-cover'
                src={item.project}
                alt=""
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demos;
