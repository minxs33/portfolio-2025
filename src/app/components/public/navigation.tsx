'use client'

import { useSelector, useDispatch } from "react-redux"
import { toggle as toggleNav, setActiveSection } from "../../state/navState/navStateSlice"
import Link from "next/link"
import { RootState } from "@/app/state/store"

export default function Navigation() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.navState.isOpen)
  const activeSection = useSelector((state: RootState) => state.navState.activeSection)

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ]

  return (
    <>
    <button 
      className="group size-12 absolute top-5 right-5 md:right-10 z-50 cursor-pointer"
      onClick={() => dispatch(toggleNav())}
    >
      {isOpen ? (
        <>
          <span className="inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 rotate-45 -translate-y-1/2 md:group-hover:rotate-20"></span>
          <span className="inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -rotate-45 -translate-y-1/2 md:group-hover:-rotate-20"></span>
        </>
      ) : (
        <>
          <span className="inline-block w-3/5 h-0.5 bg-gray-800 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] md:group-hover:rotate-12"></span>
          <span className="inline-block w-3/5 h-0.5 bg-gray-800 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] md:group-hover:-rotate-12"></span>
        </>
      )}

       
      </button>

      <>
        {/* Overlay that fades in/out behind the menu */}
        <div
          className={`fixed inset-0 z-10 bg-gray-800 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => dispatch(toggleNav())}
        />

        {/* Outer container for the drawer */}
<div className="fixed inset-y-0 right-0 z-20 w-[50vw] md:w-[33vw] overflow-hidden">
  {/* Background layer that fills in */}
  <div
    className={`
      absolute inset-0 bg-gray-800 origin-right 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'scale-x-100' : 'scale-x-0'}
    `}
  />

  {/* Content layer that fills in with the background */}
  <div
    className={`
      relative h-full w-full origin-right 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'scale-x-100' : 'scale-x-0'}
    `}
  >
    <div className="px-16 py-32 space-y-4 text-gray-500">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`block text-lg hover:text-gray-300 ${
            activeSection === item.label ? 'text-white' : ''
          }`}
          onClick={() => {
            dispatch(toggleNav());
            dispatch(setActiveSection(item.label));
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</div>



      </>

    </>
  )
}
