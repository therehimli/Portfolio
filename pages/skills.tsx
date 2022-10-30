import { GetStaticPropsContext } from 'next'
import { AiOutlineSmile } from 'react-icons/ai'
import { BsFillEmojiSmileFill, BsEmojiSmileUpsideDown } from 'react-icons/bs'

const resume = () => {
  return (
    <div className="p-4 ">
      <div className="border-b-[1px] mb-6"></div>
      <h2 className="text-center font-bold text-[23px] mb-5">My Skills</h2>
      <div className="flex justify-around max-sm:flex-col">
        <div className="bg-gradient-to-r from-[#ebedee] to-[#414e5bb5] rounded-xl p-5">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <AiOutlineSmile className="mb-2" />
              <h3 className="text-center font-semibold mb-1">
                Front-end development
              </h3>
            </div>
            <p>--JavaScript/TypeScript</p>
            <p>--React js/Next js</p>
            <p>--React Router</p>
            <p>--JQuery</p>
            <p>--Redux Toolkit/RTK query</p>
            <p>--axios</p>
            <p>--Webpack</p>
            <p>--SCSS/CSS-modules/BEM/Tailwindcss</p>
            <p>- Material UI</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-sm:">
          <div className=" rounded-xl p-5 bg-gradient-to-r from-[#818588] to-[#414e5bb5] ">
            <div className="flex gap-2 items-center">
              <BsFillEmojiSmileFill className="mb-2" />
              <h3 className="text-center font-semibold mb-1">
                Back-end development
              </h3>
            </div>
            <div>
              <p>--Firebase</p>
              <p>--Python</p>
            </div>
          </div>
          <div className=" rounded-xl p-5 mt-3 bg-gradient-to-r from-[#d0d1d2d7] to-[#414e5bb5]">
            <div className="flex gap-2 items-center">
              <BsEmojiSmileUpsideDown className="mb-2" />
              <h3 className="text-center font-semibold mb-1">Other skills</h3>
            </div>
            <p>Git/GitHub</p>
            <p>JSON</p>
            <p>BEM (CSS)</p>
            <p>Figma/Adobe Photoshop</p>
            <p>Bitrix24/amoCRM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props: {
      services: data.services,
    },
  }
}
