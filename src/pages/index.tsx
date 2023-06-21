import BasicTabs from "@/components/Category";
import { InfosSend } from "@/components/InfosSend";
import SliderSeeAlso from "@/components/SeeAlso";
import Slider from "@/components/Slider";

export default function Home() {

  return (
    <>
      <Slider/>
      <InfosSend/>
      <BasicTabs/>
      <SliderSeeAlso/>
    </>
  )
}
