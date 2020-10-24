import splash from '../assets/Garden/splash.png';
import d8splash from '../assets/D8Picker/splash.png';
import vacations from '../assets/Journey2/vacations.png';
import alive from '../assets/Life/gameOLife.png';


export const projectsData = [
  {
name: "Garden of Knowledge",
type: "Full-Stack",
image: splash, 
description: "Learning Management System",
skills: ["React", "Redux", "Node.js", "Express.js", "Knex.js", "PostreSQL", "SCSS", "AWS" ],

links: {
  notion: "https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818",
  github: "https://github.com/Labs24GOK",
  site: "https://gardenofknowledge.netlify.app/",
}
},
{
  name: "Journey2",
  type: "Full-Stack",
  image: vacations, 
  skills: ["React", "Node.js" , "GraphQL" , "Prisma", "Apollo", "PostreSQL", "Jest", "Material-UI" ],
  description: "Vacation Budget Planner",
  links: {
    notion: "https://www.notion.so/Vacation-Planner-e81c29178ad8410eb10f298e4f6d5860",
    github: "https://github.com/VacationJourney",
    site: "https://journey2.netlify.app/",
  }
  },
{
name: "D8Picker",
type: "Full-Stack",
image: d8splash, 
skills: ["React", "Node.js" , "Express.js", "Knex.js", "MongoDB", "AuthO", "Chakra-UI"],
description: "Aperiodic Recurrence Scheduler",
links: {
  notion: "https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1",
  github: "https://github.com/Labs20-D8Picker",
  site: "https://labs20d8picker.netlify.app/",
}
},{
  name: "Game of Life",
  type: "Front End",
  image: alive,
  description: "Learning Management System",
  skills: ["React", "Material-UI"],

  links: {
    github: "https://github.com/J2Macwilliams/game_of_life ",
    site: "https://j2-game-of-life.netlify.app/",
  }
},

]