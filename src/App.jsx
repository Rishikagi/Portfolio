import React from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Traits from './Traits'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-scroll';
import Certifications from './Certifications'

function App() {
  return (
   
    <>
    <Navbar />
      
    <HeroSection/>
    <Traits />
    <section id='about'><About /></section>
    <section id="skills"><Skills/></section>
    <section id='experience'><Experience/></section>
    <section id='projects'><Projects/></section>
    <section id='certifications'><Certifications/></section>
    <section id='contact'><Contact/></section>
    <Footer/>
   
    </>
   
  )
}

export default App



