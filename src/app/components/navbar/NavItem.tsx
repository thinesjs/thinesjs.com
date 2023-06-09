'use client';

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const NavItem = () => {
    const pathname = usePathname();
    const [nav, setNav] = useState(false)
    const navbarItems = [{id: 1, route: 'home'}, {id: 2, route: 'about'}, {id: 3, route: 'projects'}]

    return ( 
        <div>
            {/* web navbar */}
            {(pathname == "/gallery.html")? 
                <ul className="hidden md:flex">
                    <li className="px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer">
                        <a href={'/'}>Back</a>
                    </li>
                </ul>
            :
                <ul className="hidden md:flex">
                    {navbarItems.map(({id, route}) => (
                        <li key={id} className="px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer">
                            <Link to={route} smooth={'easeInOutCubic'} duration={500}>{route}</Link>
                        </li>
                    ))}
                    <li className="px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer">
                        <a href={'/gallery.html'}>Gallery</a>
                    </li>
                </ul>
            }
            

            {/* mobile navbar toggle */}
            <div onClick={() => setNav(!nav)} className="pr-4 cursor-pointer text-gray-800 hover:scale-105 duration-200 md:hidden">
                {nav ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars} /> }
            </div>

            {/* mobile navbar */}
            {nav && ((pathname == "/gallery.html")? 
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-100 text-gray-500 duration-200">
                    <li className="px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200">
                            <a href={'/'}>Back</a>
                    </li>
                    <li onClick={() => setNav(!nav)} className="cursor-pointer hover:scale-105 duration-200"><FontAwesomeIcon icon={faCircleXmark}/></li>
                </ul>
            :
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-100 text-gray-500 duration-200">
                    {navbarItems.map(({id, route}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200">
                            <Link onClick={() => setNav(!nav)} to={route} smooth={'easeInOutCubic'} offset={-50} duration={500}>{route}</Link>
                        </li>
                    ))}
                    <li className="px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200">
                            <a href={'/gallery.html'}>Gallery</a>
                    </li>
                    <li onClick={() => setNav(!nav)} className="cursor-pointer hover:scale-105 duration-200"><FontAwesomeIcon icon={faCircleXmark}/></li>
                </ul>
            )}

            
            
        </div>
        
     );
}
 
export default NavItem;