import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Template/Navbar";
import globals from "../styles/globals.module.scss";
import Slider from "../components/Organism/Slider";

export default function Home() {
  return (
    <div className={globals.home}>
      <Slider />
    </div>
  );
}
