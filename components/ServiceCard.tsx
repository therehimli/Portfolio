import { FC } from 'react'
import { IService } from '../type'

const ServiceCard: FC<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  return (
    <div>
      <Icon />
      <div>
        <strong>{title}</strong>
        <p>{about}</p>
      </div>
    </div>
  )
}

export default ServiceCard
