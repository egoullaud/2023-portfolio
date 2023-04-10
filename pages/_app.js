import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Open_Sans, Lora } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin-ext"],
  variable: "--openSans-font",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--lora-font",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${openSans.variable}, ${lora.variable}`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
