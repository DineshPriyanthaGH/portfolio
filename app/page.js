'use client';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <About/>
   <Skills/>
   <Qualification/>
   </>
  );
}
