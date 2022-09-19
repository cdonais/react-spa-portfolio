import React from 'react';
import CatDog from "../../assets/catanddog.jpeg";
import RunBuddy from "../../assets/run-buddy.jpeg";
import Florida from "../../assets/florida.jpeg";

function Portfolio() {
    return (
        <section className='portfolio'>
        <h2>Portfolio</h2>
        <br></br>
            <div className='work'>
                <h4>Run Buddy</h4>
                <a href= 'https://cdonais.github.io/run-buddy/' target="_blank">
                <img src={RunBuddy}className="my-2" style={{ width: "25%" }} alt="cover"/>
                </a>
            </div>
            <div className='work'>  
                <h4>Furever Home Finder</h4>
                <a href='https://israel386.github.io/furever-home-finder/' target="_blank">  
                <img src={CatDog}className="my-2" style={{ width: "25%" }} alt="cover" />
                </a>
            </div>    
            <div className='work'>
                <h4>Cultural Florida Travel Blog</h4>
                <a href='https://calm-eyrie-85145.herokuapp.com/' target="_blank">
                <img src={Florida}className="my-2" style={{ width: "25%" }} alt="cover" />
                </a>
            </div>
            </section>
       
    )
}

export default Portfolio;