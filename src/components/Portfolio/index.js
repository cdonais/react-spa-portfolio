import React from 'react';
import CatDog from "../../assets/catanddog.jpeg";
import RunBuddy from "../../assets/run-buddy.jpeg";
import Florida from "../../assets/florida.jpeg";

function Portfolio() {
    return (
        <section>
        <h2>Portfolio</h2>
        <img src={RunBuddy}className="my-2" style={{ width: "25%" }} alt="cover" />
        <img src={CatDog}className="my-2" style={{ width: "25%" }} alt="cover" />
        <img src={Florida}className="my-2" style={{ width: "25%" }} alt="cover" />
        </section>
    )
}

export default Portfolio;