import { IconType } from 'react-icons'

export interface IService {
  title: string
  about: string
  Icon: IconType
}

export interface IProjects {
  title: string
  description: string
  imgUrl: string
  deploymentUrl: string
  gitHubUrl: string
  key_techs: string[]
}
