import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import user from "../../assets/Banner1.jpg";


const Hero = () => {
    const [text] = useTypewriter({
        words: ['BETTER','Faster','Stronger'],
        loop: true,
      })
  return (
    <section id="hero">
        <div className="container flex-center">
        <div className="left-side">
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/g-sreevani-406525256/"
        >
          <BsLinkedin />
        </a>

        <a target={"_blank"} href="https://github.com/SreevaniGuntoju">
          <BsGithub />
        </a>
      </div>
      <div className="right-side">
        <div>
          <h1 className='title'>T-Hub👋</h1>
          <p className='head-title'>
           I'm <span>{text}</span>
          </p>
          <p className="scroll-down">
            <BsMouse />
            <span>
              Scroll Down <FaAngleDown className="angle" />
            </span>
          </p>
        </div>
        <div>
          <img src={user} alt="Banner" />
        </div>
      </div>
        </div>
    </section>
    
    )
}

export default Hero