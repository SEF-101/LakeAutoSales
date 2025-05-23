import {Menu, X, CarFront} from "lucide-react"
import { useState } from "react"
import { navItems } from "../constants"
const Navbar = () => {
  const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="nav.sticky.top-0.z-50 py-3 backdrop-blur-lg border-b 
    border-neutral-700/80">
        <div className="container.px-4.mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0">
                  <CarFront/>
                    <span className="text-xl tracking-tight">Lakes Auto Sales</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className="py-4">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
