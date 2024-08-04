import React from 'react'
import {FaDatabase, FaDesktop, FaPaintBrush, FaBriefcase, FaBook, FaTeamspeak, FaFilm, FaLightbulb} from "react-icons/fa"

const categories = [
  {
    icon: FaPaintBrush,
    title: "Design",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "73, 187, 189"
  },
  {
    icon: FaDesktop,
    title: "Development",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "91, 114, 238"
  },
  {
    icon: FaDatabase,
    title: "Database",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "157, 204, 255"
  },
  {
    icon: FaBriefcase,
    title: "Business",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "0, 203, 184"
  },
  {
    icon: FaLightbulb,
    title: "Marketing",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "244, 140, 6"
  },
  {
    icon: FaBook,
    title: "Photography",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "238, 100, 91"
  },
  {
    icon: FaFilm,
    title: "Acting",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "37, 38, 65"
  },
  {
    icon: FaTeamspeak,
    title: "Soft Skills",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    color: "0, 203, 184"
  },
]

function CategoryCard() {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-16'>
      {categories.map((item, index) => {
        return (
          <li key={index} className='bg-whit text-center rounded-xl flex flex-col items-center p-4 pb-8 shadow-[0px_11px_31px_0px_rgba(47,50,125,0.10)]'>
            <div 
              className='h-10 w-10 rounded grid place-content-center text-2xl' 
              style={{backgroundColor: `rgba(${item.color}, 0.30)`, color: `rgba(${item.color}, 1)`}}
            >
              <item.icon />
            </div>
            <h4 className='font-bold text-black md:text-xl my-3 md:mb-3.5'>{item.title}</h4>
            <p className='text-xs lg:text-sm'>{item.note}</p>
          </li>
        )})}
    </ul>
  )
}

export default CategoryCard