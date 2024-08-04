'use client'

import Image from 'next/image'
import React from 'react'


const testimonials_list = [
    {
      image: "https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Alice Johnson",
      testimonial: "I've been using this e-learning platform for a while now, and I'm amazed by the quality of courses available. The instructors are knowledgeable, and the content is engaging. Learning has never been so enjoyable!"
    },
    {
      image: "https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John Smith",
      testimonial: "As a busy professional, finding time to attend classes was challenging. This platform changed the game for me. I can learn at my own pace and access the materials anytime, anywhere. It's a game-changer!"
    },
    {
      image: "https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Emily Davis",
      testimonial: "I used to struggle with certain subjects in school, but the courses on this platform helped me gain a better understanding. The interactive lessons and quizzes keep me engaged, and I've seen a significant improvement in my grades."
    },
    {
      image: "https://images.pexels.com/photos/6948652/pexels-photo-6948652.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "David Lee",
      testimonial: "I've taken courses from various online platforms, but this one stands out. The instructors are top-notch, and the community aspect allows me to connect with fellow learners. I highly recommend it to anyone looking to expand their knowledge."
    },
    {
      image: "https://images.pexels.com/photos/18017529/pexels-photo-18017529/free-photo-of-man-with-back-slide-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sophia Miller",
      testimonial: "The courses here are comprehensive and well-structured. The platform's interface is user-friendly, making navigation a breeze. I appreciate the effort that goes into creating a seamless learning experience."
    },
    {
      image: "https://images.pexels.com/photos/17938980/pexels-photo-17938980/free-photo-of-portrait-of-a-young-smiling-man-in-patterned-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Daniel Adams",
      testimonial: "Being a visual learner, the interactive content on this platform suits my learning style perfectly. The videos, quizzes, and hands-on exercises have helped me grasp complex concepts with ease."
    }
  ];  

function Testimonial() {

    const scrollTo = () => {

    }

    return (
        <div className='relative py-10'>
            <button className='scroll-btn -left-2 sm:-left-5'>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.453125 7.20312C0.03125 7.67188 0.03125 8.375 0.453125 8.79688L6.82812 15.1719C7.29688 15.6406 8 15.6406 8.42188 15.1719L9.5 14.1406C9.92188 13.6719 9.92188 12.9688 9.5 12.5469L4.95312 8L9.5 3.5C9.92188 3.07812 9.92188 2.32812 9.5 1.90625L8.42188 0.828125C8 0.40625 7.29688 0.40625 6.82812 0.828125L0.453125 7.20312Z" fill="white"/>
                </svg>
            </button>
            <button className='scroll-btn -right-2 sm:-right-5'>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 8.79688C9.92188 8.375 9.92188 7.67188 9.5 7.20312L3.125 0.828125C2.65625 0.40625 1.95312 0.40625 1.53125 0.828125L0.453125 1.90625C0.03125 2.375 0.03125 3.07812 0.453125 3.5L5 8.04688L0.453125 12.5469C0.03125 12.9688 0.03125 13.6719 0.453125 14.1406L1.53125 15.1719C1.95312 15.6406 2.65625 15.6406 3.125 15.1719L9.5 8.79688Z" fill="white"/>
                </svg>
            </button>
            <ul className='flex flex-nowrap overflow-scroll text-center'>
                {testimonials_list.map((item, index) => {
                    return(
                    <li key={index} className='w-3/4 min-[400px]:w-2/4 sm:w-1/3 md:w-1/4 px-2 shrink-0'>
                        <div className="h-full w-full bg-white rounded-md p-4">
                            <div className=' h-20 w-20 overflow-hidden bg-top rounded-md block mx-auto'>
                                <Image 
                                    src={item.image}
                                    height={120}
                                    width={120}
                                    alt='Testimonial image'
                                    className='object-cover'
                                />
                            </div>
                            <h5 className=' text-dark font-semibold mt-2 mb-3'>{item.name}</h5>
                            <p className='text-xs'>{item.testimonial}</p>
                        </div>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Testimonial