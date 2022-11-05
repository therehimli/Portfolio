import React, { FC } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { IProjects } from '../type'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'

const ProjectCard: FC<{ project: IProjects }> = ({
  project: { title, description, imgUrl, deploymentUrl, gitHubUrl, key_techs },
}) => {
  const [showDetails, setShowDetails] = React.useState(false)
  return (
    <div>
      <Image
        src={imgUrl}
        alt={title}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
        layout="responsive"
        width="300"
        height="150"
      />
      <p className="font-bold text-center">{title}</p>

      {showDetails && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto gap-4 p-2 my-3 text-black bg-gray-100 gap-x-12 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <Image src={imgUrl} alt={title} width="300" height="150" />

            <div className="flex items-center gap-6 mt-4">
              <a
                className="flex items-center gap-2 p-1 font-bold bg-slate-500 rounded-xl"
                href={gitHubUrl}
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                className="flex items-center gap-2 p-1 font-bold bg-slate-500 rounded-xl"
                href={deploymentUrl}
              >
                <AiFillProject /> <span>Visit</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between ml-10">
              {' '}
              <h2 className="mt-1 font-bold text-center">{title}</h2>
              <button onClick={() => setShowDetails(false)}>
                <MdClose size={30} />
              </button>
            </div>

            <div className="flex flex-col ">
              Stack:
              <p>{description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              {key_techs.map((key) => (
                <span
                  className="p-1 text-center bg-gray-200 hover:bg-gray-400 rounded-xl"
                  key={key}
                >
                  {key}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
