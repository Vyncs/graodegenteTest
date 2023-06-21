import produto1 from "../../assets/category/produto1.png";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import {
  CategoryContainer,
  CustomImage,
  Product,
  TitleCategory,
} from "./style";

export default function SliderSeeAlso() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 20,
    },
  });
  return (
    <>
      <TitleCategory>
        <h1>
          Conheça <strong>também</strong>
        </h1>
      </TitleCategory>

      <CategoryContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <CustomImage src={produto1} alt="camisa-1" />
          <footer>
            <span>Tapetes</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <CustomImage src={produto1} alt="camisa-1" />
          <footer>
            <span>Tapetes</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <CustomImage src={produto1} alt="camisa-1" />
          <footer>
            <span>Tapetes</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <CustomImage src={produto1} alt="camisa-1" />
          <footer>
            <span>Tapetes</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <CustomImage src={produto1} alt="camisa-1" />
          <footer>
            <span>Tapetes</span>
          </footer>
        </Product>
      </CategoryContainer>
    </>
  );
}
