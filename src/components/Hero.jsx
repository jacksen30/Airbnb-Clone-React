import React from "react-dom";

import heroimage from "../assets/images/heroimage.png";

export default function Hero() {
    return (
        <section className="hero-section">
            <img className="hero-section__image" src={heroimage} alt="logo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}