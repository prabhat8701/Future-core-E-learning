import Image from 'next/image';
import React from 'react'

const courses = [
    {
      bannerImage: "/news1.png",
      courseTitle: "Introduction to Web Development",
      courseCreator: {
        image: "https://images.pexels.com/photos/6948652/pexels-photo-6948652.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Sarah Johnson"
      },
      courseLength: 16,
      courseTaken: 10
    },
    {
      bannerImage: "/news2.png",
      courseTitle: "Advanced JavaScript Techniques",
      courseCreator: {
        image: "https://images.pexels.com/photos/18017529/pexels-photo-18017529/free-photo-of-man-with-back-slide-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "John Smith"
      },
      courseLength: 7,
      courseTaken: 5
    },
    {
      bannerImage: "/news3.png",
      courseTitle: "Digital Marketing Strategies",
      courseCreator: {
        image: "https://images.pexels.com/photos/17938980/pexels-photo-17938980/free-photo-of-portrait-of-a-young-smiling-man-in-patterned-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Emily Davis"
      },
      courseLength: 15,
      courseTaken: 10
    }
];
  

function CourseProgress() {
    return (
        <div>
            <ul className='flex py-10 overflow-scroll'>
                {courses.map((item, index) =>{
                    return(
                        <li key={index} className='px-2 lg:px-4 w-2/3 sm:w-1/3 shrink-0'>
                            <div className='p-4 rounded-xl bg-white h-full flex flex-col shadow-[0px_18px_47px_0px_rgba(47,50,125,0.10)]'>
                                <div className="aspect-[1.88/1] rounded-lg overflow-hidden relative">
                                    <Image
                                        src={item.bannerImage}
                                        fill
                                        alt='Course Banner Image'
                                        className='object-cover'
                                    />
                                </div>
                                <h4 className="text-dark-blue font-medium py-1 text-sm lg:text-base mb-auto">{item.courseTitle}</h4>
                                <div className='flex items-center gap-2 mb-3 pt-2'>
                                    <div className="relative h-8 w-8 lg:h-10 lg:w-10 rounded-full overflow-hidden">
                                        <Image
                                            src={item.courseCreator.image}
                                            fill
                                            alt={item.courseCreator.name + ' Image'}
                                            className='object-cover rounded-full'
                                        />
                                    </div>
                                    <span className='text-sm font-medium'>{item.courseCreator.name}</span>
                                </div>
                                <div className='w-full rounded-sm bg-[#D9D9D9] h-1 overflow-hidden'>
                                    <div className="h-full bg-primary" style={{width: `${item.courseTaken / item.courseLength * 100}%`}}/>
                                </div>
                                <p className='text-right text-xs font-semibold text-black/50 pt-4'>Lesson {item.courseTaken} / {item.courseLength}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CourseProgress