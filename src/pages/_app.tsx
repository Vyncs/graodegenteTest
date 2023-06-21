import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { DiscountMessage } from "@/components/DiscountMessage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DiscountMessage />
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
