import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/FullstacksCafe.png'
import IMG2 from '../../assets/BrewsNChews.png'
import IMG3 from '../../assets/socialnetworkAPI.png'
import IMG4 from '../../assets/notetaker.png'
import IMG5 from '../../assets/workdayscheduler.png'
import IMG6 from '../../assets/teamgenerator.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fullstacks Cafe: A Fullstack Ordering Application for a Cafe',
    github: 'https://github.com/JoshuaToback/FullStacks-Cafe',
    demo: 'https://fullstackscafe.herokuapp.com/home.html'
  },
  {
    id: 2,
    image: IMG2,
    title: "Brews 'N Chews: A Brewery and Restaurant Locator",
    github: 'https://github.com/mdh1080/Brews-and-Chews',
    demo: 'https://mdh1080.github.io/Brews-and-Chews/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Social Network API Using NOSQL',
    github: 'https://github.com/jjohnson673/personable_antelope',
    demo: 'https://app.castify.com/view/c77c8050-cc50-4d07-a657-25f94de4481e'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Note Taking Application using Express.js',
    github: 'https://github.com/jjohnson673/Note-Taker',
    demo: 'https://damp-tundra-43822.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Workday Scheduler',
    github: 'https://github.com/jjohnson673/planning_to_seize_the_day',
    demo: 'https://jjohnson673.github.io/planning_to_seize_the_day/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Team Profile Generator using Node.js',
    github: 'https://github.com/jjohnson673/team-builder',
    demo: 'https://app.castify.com/view/4eb018d1-dc64-42bb-9b1a-09d7a0f4483d'
  }
]


const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio