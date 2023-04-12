import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Alike, Hind_Guntur } from "@next/font/google";

const alike = Alike({
  subsets: ["latin"],
  variable: "--alike-font",
  weight: ["400"],
});

const hind = Hind_Guntur({
  subsets: ["latin"],
  variable: "--hind-font",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${alike.variable} font-alike,${hind.variable} font-hind`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
