import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </>
    );
}

