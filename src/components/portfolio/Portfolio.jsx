import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/iNotebook.png"
import Img2 from "../../assets/gptClone.png"
import Img3 from "../../assets/newsApp.png"
import Img4 from "../../assets/memeExt.png"
import Img5 from "../../assets/v_gpt.png"
import Img6 from "../../assets/ml.png"

const Portfolio = () => {

  const data = [{
    id: 1,
    "name": "MERN Stack Note App ",
    "url": "https://github.com/VarunX7/MERN-Stack-Note-App",
    "img": Img1
  },
  {
    id: 2,
    "name": " React Chat gpt clone",
    "url": "https://github.com/VarunX7/React-Chat-gpt-clone",
    "img": Img2
  },
  {
    id: 3,
    "name": "React news app",
    "url": "https://github.com/VarunX7/React-News-App",
    "img": Img3
  },
  {
    id: 4,
    "name": "React meme extension",
    "url": "https://github.com/VarunX7/React-meme-generator-extension",
    "img": Img4
  },
  {
    id: 5,
    "name": " ChatGPT Discord Bot",
    "url": "https://github.com/VarunX7/Chat_GPT-Discord-Bot",
    "img": Img5
  },
  {
    id: 6,
    "name": "Data Science & ML Projects",
    "url": "https://github.com/VarunX7/Data-Science-and-ML-Course-minor-Projects",
    "img": Img6
  }]
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       { data.map(({id, name, url, img}) => {
          return (
            <article key={id} className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={img} alt="" className='portfolio__items-img' />
          </div>
          <h3>{name}</h3>
          <div className="portfolio__items-cta">
            <a href={url} target='_blank' className="btn">Github</a>
            <a href="https://github.com/VarunX7" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
