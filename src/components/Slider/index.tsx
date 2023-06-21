import {useKeenSlider} from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import produto1 from '../../assets/produtos/image1.png'
import produto2 from '../../assets/produtos/image2.png'
import produto3 from '../../assets/produtos/image3.png'
import React from 'react'


export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><Image src={produto1} alt=''/></div>
        <div className="keen-slider__slide number-slide2"><Image src={produto2} alt=''/></div>
        <div className="keen-slider__slide number-slide3"><Image src={produto3} alt=''  /></div>
      </div>
    </>
  )
}