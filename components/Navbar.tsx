import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { pathname } = useRouter()

  const [activeItem, setActiveItem] = React.useState<string>('')

  React.useEffect(() => {
    if (pathname === '/') {
      setActiveItem('About')
    }
    if (pathname === '/Projects') {
      setActiveItem('Projects')
    }
    if (pathname === '/Skills') {
      setActiveItem('Skills')
    }
  }, [pathname])

  const NavItem: FC<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
  }> = ({ name, route, activeItem, setActiveItem }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a className="hover:text-black">
          <span onClick={() => setActiveItem(name)}>{name}</span>
        </a>
      </Link>
    ) : null
  }

  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <span className="font-bold text-[#111111] border-b-4 text-xl md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-gray-400 font-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Skills"
          route="/skills"
        />
      </div>
    </div>
  )
}

export default Navbar
