import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Template/Navbar";
import globals from "../styles/globals.module.scss";

export default function Home() {
  return (
    <div className={globals.home}>
      <div>HOMEです</div>
    </div>
  );
}
