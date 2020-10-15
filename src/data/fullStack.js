import splash from '../assets/Garden/splash.png';
import courses from '../assets/Garden/courses.png';
import d8splash from '../assets/D8Picker/splash.png';
import d8apply from '../assets/D8Picker/apply.png';
import vacations from '../assets/Journey2/vacations.png';
import dates from '../assets/Journey2/dates.png';

export const fullStack = [
  {
name: "Garden of Knowledge",
image1: splash, 
image2: courses,
description: "Learning Management System",
skills: ["React", "Redux", "Node.js", "Express.js", "Knex.js", "PostreSQL", "SCSS", "AWS" ],

links: {
  notion: "https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818",
  github: "https://github.com/Labs24GOK",
  site: "https://gardenofknowledge.netlify.app/",
}
},
{
name: "D8Picker",
image1: d8splash, 
image2: d8apply,
skills: ["React", "ContextAPI", "Node.js" , "Express.js", "Knex.js", "GoogleAPI", "Heroku"],
description: "Aperiodic Recurrence Scheduler",
links: {
  notion: "https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1",
  github: "https://github.com/Labs20-D8Picker",
  site: "https://labs20d8picker.netlify.app/",
}
},
{
name: "Journey2",
image1: vacations, 
image2: dates,
skills: ["React", "Node.js" , "GraphQL" , "Prisma", "Apollo", "PostreSQL", "Heroku","Jest", "Material-UI" ],
description: "Vacation Budget Planner",
links: {
  notion: "https://www.notion.so/Vacation-Planner-e81c29178ad8410eb10f298e4f6d5860",
  github: "https://github.com/VacationJourney",
  site: "https://journey2.netlify.app/",
}
}
]