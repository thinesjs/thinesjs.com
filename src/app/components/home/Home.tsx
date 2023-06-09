import React from 'react'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";
import useSWR, { Fetcher } from 'swr';

const HomeSection = () => {
  return (
    <div id='home' className='w-full text-black h-screen'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='sm:text-5xl font-bold text-4xl'>Hey, I&apos;m Thines {String.fromCodePoint(Number('0x1F44B'))}</h2>
          <p className='text-gray-800 py-4 max-w-md'>
            A website & software developer based in Malaysia. 
          </p>
          <div>
            <Link to={'projects'} smooth={'easeInOutCubic'} duration={500}>
              <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Projects 
                <span className='ml-3 group-hover:scale-110 duration-300'>
                  <FontAwesomeIcon icon={faCircleArrowRight} bounce />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mx-auto w-2/3 md:w-2/4'>
          <img src={'/image.png'} alt={'image'} className='rounded-2xl m-6' />
        </div>
      </div>
    </div>
  )
}

export default HomeSection