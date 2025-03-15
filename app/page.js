'use client';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <>
   < Navbar/>
   <Header/>
   < About/>
   <Skills/>
   <Qualification/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  );
}
