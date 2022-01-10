import Head from "next/head";
import Image from "next/image";
import Hotdog from "../components/hotdog";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-yellowBg">
      <Head>
        <title>T-loc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-redBg h-screen w-full -mt-40 ">
        <button>click here</button>
      </div>
      <Hotdog />

      <Menu />
    </div>
  );
}
