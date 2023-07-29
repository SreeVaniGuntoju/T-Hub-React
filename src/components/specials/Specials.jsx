import React from "react";

import {motion} from 'framer-motion'
const Specials = () => {
  return (
    <section id="specials">
     <div className="container flex-center">
          <div className="flex-center">

      <h2>Experience the True Taste of Nature With Our Popular Blends</h2>
      <p>Discover The Magic Of " T "</p>
          </div>
      <div className="specials-box">
        <div className="card">
       < motion.p className="title" 
        initial={{y:'-100%',opacity:0}}
        whileInView={{y:'0%',opacity:1}}
        transition={{delay:.1}}
        >
        Black Tea<span className="icon"> </span>
       </motion.p>
       < motion.p className="title"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}
       >
        Chamomile Tea<span className="icon"></span>
       </motion.p>
       < motion.p className="title mc"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
       >
        Masala Chai<span className="icon"> </span>
       </motion.p>
       < motion.p className="title ic"
        initial={{x:'-100%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
       >
        Rooibos Tea<span className="icon">
       
       </span>
       </motion.p>
       < motion.p className="title Hb"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}>
        Hibiscus Tea<span className="icon"> </span>
       </motion.p>
       < motion.p className="title"
        initial={{x:'-100%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
       >
       Matcha Tea<span className="icon"> 
       </span>
       </motion.p>
       < motion.p className="title ic"
            initial={{x:'100%',opacity:0}}
            whileInView={{x:'0%',opacity:1}}
            transition={{delay:.1}}
        >
        Iced Tea<span className="icon">
       </span>
       </motion.p>
       < motion.p className="title ic"
           initial={{x:'100%',opacity:0}}
           whileInView={{x:'0%',opacity:1}}
           transition={{delay:.2}}>
       Lemon Tea<span className="icon">
       </span>
       </motion.p>
       < motion.p className="title"
            initial={{y:'100%',opacity:0} }
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}
            >
        Earl Grey<span className="icon"></span>
       </motion.p>
       < motion.p  className="title"
            initial={{y:'100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}>
         Pu'erh Tea<span className="icon">
         </span>
       </motion.p>
       < motion.p className="title"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}>
        Rose Tea<span className="icon"> </span>
       </motion.p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Specials;
