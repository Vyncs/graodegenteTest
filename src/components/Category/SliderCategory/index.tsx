import Image from "next/image";
import produto1 from "../../../assets/category/produto1.png"
import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { CategoryContainer, CustomImage, Product } from "./style";


export default function SliderCategory() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 20
    }
  })
  return (
    <CategoryContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <CustomImage src={produto1} alt="camisa-1"/>
        <footer>
          <strong> Almofada Amamentação</strong>
          <span>A amamentação é primordial para a saúde</span>
        </footer>
      </Product>
    </CategoryContainer>
  );
}
