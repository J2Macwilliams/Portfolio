import alive from '../assets/Life/alive.png';
import github from '../assets/GitHub.png'
import nasa from '../assets/nasa.jpeg'

export const frontEnd = [{
  name: "Game of Life",
  image: alive,
  description: "Learning Management System",
  skills: ["React", "Material-UI"],

  links: {
    github: "https://github.com/J2Macwilliams/game_of_life ",
    site: "https://j2-game-of-life.netlify.app/",
  }
}, {
  name: "Github User Card",
  image: github,
  skills: ["React", "Responsive Design", "Material-UI"],
  links: {
    notion: "https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818",
    github: "https://github.com/J2Macwilliams/React-Github-User-Card",
    site: "https://react-github-user-card-git-jeremy-mcwilliams.j2macwilliams.now.sh/",
  }
}, {
  name: "Photo of the Day",
  image: nasa,
  skills: ["React", "Typescript", "Eslint", "Material-UI"],
  links: {
    github: "https://github.com/J2Macwilliams/Nasa-apod-TS",
    site: "https://nasa-photography.netlify.app/",
  }
}]

