'use client'

import { useSelector, useDispatch } from "react-redux"
import { toggle as toggleNav, setActiveSection } from "../../state/navState/navStateSlice"
import Link from "next/link"
import { RootState } from "@/app/state/store"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Vibrancy from "./vibrancy"
import SwitchThemes from "./switchTheme"

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
    {/* hamburgir */}
    <div className="flex items-center justify-between gap-2 absolute top-5 right-5">
      <SwitchThemes />
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.90 }}
        className="relative group size-12 z-50 cursor-pointer"
        onClick={() => dispatch(toggleNav())}
      >
        {isOpen ? (
          <>
            <span className="absolute inline-block w-3/5 h-0.5 bg-foreground rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 duration-300 md:group-hover:rotate-28"></span>
            <span className="absolute inline-block w-3/5 h-0.5 bg-foreground rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 duration-300 md:group-hover:-rotate-28"></span>
          </>
        ) : (
          <>
            <span className="absolute inline-block w-3/5 h-0.5 bg-foreground rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-[5px] duration-300 md:group-hover:rotate-12"></span>
            <span className="absolute inline-block w-3/5 h-0.5 bg-foreground rounded-full left-1/2 top-1/2 -translate-x-1/2 translate-y-[5px] duration-300 md:group-hover:-rotate-12"></span>
          </>
        )}
      </motion.button>
    </div>


      {/* overlay for close nav panel*/}
      <div
        className={`fixed inset-0 z-1 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => dispatch(toggleNav())}
      />

      {/* nav panel */}
      <div className="fixed inset-y-0 right-0 z-1 w-[80vw] sm:w-[50vw] md:w-[30vw] overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delayChildren:0}}
          style={{ originX: 1 }}
          className="absolute inset-0 z-1"
        >
          <Vibrancy wrapperClass="h-full">
            {/* Nav Items */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="nav"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delayChildren: 0.3 }}
                  className="relative h-full w-full origin-right z-1"
                >
                  <div className="px-16 py-32 space-y-4 text-gray-500">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: 'easeInOut',
                        }}
                      >
                        <Link
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
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Vibrancy>
        </motion.div>
      </div>
    </>
  )
}
