import { GetStaticPropsContext } from 'next'
import { AiOutlineSmile } from 'react-icons/ai'
import { BsFillEmojiSmileFill, BsEmojiSmileUpsideDown } from 'react-icons/bs'

const resume = () => {
  const FrontEnd = [
    '--JavaScript/TypeScript',
    '--React js/Next js',
    '--React Router',
    '--JQuery',
    '--Redux Toolkit/RTK query',
    '--axios',
    '--Webpack',
    '--SCSS/CSS-modules/BEM/Tailwindcss',
    '--Material UI',
    'Jest/enzyme/React-testing-library',
  ]

  const BackEnd = ['--Firebase', '--Python']

  const OtherSkills = [
    'GitHub',
    'JSON',
    'BEM(CSS)',
    'Figma/Adobe Photoshop',
    'Bitrix24/amoCRM',
  ]

  return (
    <div className="p-4 ">
      <div className="border-b-[1px] mb-6"></div>
      <h2 className="text-center font-bold text-[23px] mb-5">My Skills</h2>
      <div className="flex justify-around max-sm:flex-col">
        <div className="bg-gradient-to-r from-[#ebedee] to-[#414e5bb5] rounded-xl p-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <AiOutlineSmile className="mb-2" />
              <h3 className="mb-1 font-semibold text-center">
                Front-end development
              </h3>
            </div>
            {FrontEnd.map((skill, id) => (
              <p key={id}>{skill}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 max-sm:">
          <div className=" rounded-xl p-5 bg-gradient-to-r from-[#818588] to-[#414e5bb5] ">
            <div className="flex items-center gap-2">
              <BsFillEmojiSmileFill className="mb-2" />
              <h3 className="mb-1 font-semibold text-center">
                Back-end development
              </h3>
            </div>
            <div>
              {BackEnd.map((skill, id) => (
                <p key={id}>{skill}</p>
              ))}
            </div>
          </div>
          <div className=" rounded-xl p-5 mt-3 bg-gradient-to-r from-[#d0d1d2d7] to-[#414e5bb5]">
            <div className="flex items-center gap-2">
              <BsEmojiSmileUpsideDown className="mb-2" />
              <h3 className="mb-1 font-semibold text-center">Other skills</h3>
            </div>
            {OtherSkills.map((skill, id) => (
              <p key={id}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume
