import { IProjects, IService } from './type'
import { RiComputerLine } from 'react-icons/ri'

export const services: IService[] = [
  {
    title: 'Front-end development',
    about:
      'JavaScript/TypeScript, React js/Next js, React Router, JQuery, Redux Toolkit/RTK query, axios, Webpack, SCSS/CSS-modules/BEM/Tailwindcss, Material UI',
    Icon: RiComputerLine,
  },
  {
    title: 'Back-end development',
    about: 'Firebase, Python',
    Icon: RiComputerLine,
  },
  {
    title: 'Other skills',
    about:
      'Git/GitHub, JSON, BEM (CSS), Figma, Adobe Photoshop, Bitrix24, amoCRM',
    Icon: RiComputerLine,
  },
]

export const projects: IProjects[] = [
  {
    title: 'Burger app',
    description:
      'React js, Redux toolkit, RTK query, React Router, JavaScript, Tailwindcss, scss',
    imgUrl: '/burger-app.png',
    gitHubUrl: 'https://github.com/therehimli/burger-store',
    deploymentUrl: 'https://therehimli.github.io/burger-store/',
    key_techs: ['React js', 'Tailwindcss', 'Redux toolkit'],
  },
  {
    title: 'Bank app',
    description: ' React js, React Router, JavaScript, Tailwindcss, scss',
    imgUrl: '/bank-app.png',
    gitHubUrl: 'https://github.com/therehimli/atlas-bank',
    deploymentUrl: 'https://therehimli.github.io/atlas-bank/',
    key_techs: ['React js', 'Tailwindcss', 'scss'],
  },
]
