import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img
        src="/my-image.jpg"
        alt="my image"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-[#a2adb4]">Orkhan </span>
        Rahimli
      </h3>
      <p className="mb-4 rounded-[10px]">React developer</p>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-slate-400 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 hover:text-slate-500" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 hover:text-slate-500" />
        </a>
        <a href="">
          <BsTelegram className="w-8 h-8 hover:text-slate-500" />
        </a>
      </div>
      <a
        className="px-2 py-1 my-3 rounded-[10px] bg-gray-200 flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download resume
      </a>
      <button
        onClick={() => window.open('mailto:orduxa144@gmail.com')}
        className="text-white rounded-[5px] py-2 px-5 my-2 bg-[#111111] focus:outline-none"
      >
        Contact me
      </button>

      <div
        className="py-4 my-5 bg-gray-100"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center gap-2">
          <GoLocation />
          Orenburg, Russia
        </div>
        <p className="my-2">orduxan144@gmail.com</p>
        <p className="my-2">+994 50 879 73 21</p>
      </div>

      <button className="px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Change theme
      </button>
    </div>
  )
}

export default Sidebar
