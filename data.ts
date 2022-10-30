import { IService } from './type'
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
