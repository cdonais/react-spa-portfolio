import React from 'react';
import IMG_7745 from "../../assets/IMG_7745.jpeg"


function About() {
    return (
        <section>
        <h2>About Me</h2>
        <img src={IMG_7745} className="my-2" style={{ width: "25%" }} alt="cover" />
        <p>My name is Carly Donais, I am a full stack web developer and sports content writer living in Orlando, Florida. In my spare time I enjoy watching sports, reading, and spending time with my two children.</p>
        </section>
    )
}

export default About;