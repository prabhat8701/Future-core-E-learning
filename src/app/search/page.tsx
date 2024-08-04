import MarketingArticles from '@/components/blog/marketing-articles/marketing-articles';
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image';
import React from 'react'
import groupImage from '../../../public/classroom-image.png'
import RecommendedCourses from '@/components/recommended-courses/recommended-courses';
import Wrapper from '@/components/wrapper/wrapper';
import Title from '@/components/courses/title/title';
import RealCreatorCourses from '@/components/real-creators-card/real-creator-courses';
import smilingWoman from '../../../public/smiling-woman.png'
import ImageCircle from '@/components/image-circle/image-circle';
import TopEducationOffer from '@/components/top-education-offer/top-education-offer';

const courses = [
    {
        courseBanner: '/coding.jpg',
        category: 'Web Development',
        durationMonths: 3,
        title: 'Full Stack Web Development Bootcamp',
        description: 'Comprehensive web development bootcamp covering front-end and back-end technologies.',
        creator: {
            image: '/portrait.jpg',
            name: 'John Doe',
        },
        price: {
            initialPrice: 199.99,
            currentPrice: 149.99,
        }
    },
    {
        courseBanner: '/course-banner.jpg',
        category: 'Data Science',
        durationMonths: 4,
        title: 'Data Science Fundamentals',
        description: 'Learn the basics of data science, from data analysis to machine learning.',
        creator: {
            image: '/creator-3.jpg',
            name: 'Jane Smith',
        },
        price: {
            initialPrice: 149.99,
            currentPrice: 99.99,
        }
    },
    {
        courseBanner: '/news4.png',
        category: 'Graphic Design',
        durationMonths: 2,
        title: 'Graphic Design Essentials',
        description: 'Master the art of graphic design with hands-on projects and creative techniques.',
        creator: {
            image: '/creator-1.jpg',
            name: 'Mike Johnson',
        },
        price:{
            initialPrice: 99.99,
            currentPrice: 79.99,
        }
    },
    {
        courseBanner: '/coding2.png',
        category: 'Mobile App Development',
        durationMonths: 3,
        title: 'Mobile App Development with React Native',
        description: 'Build cross-platform mobile apps using React Native with practical projects.',
        creator: {
            image: '/creator-2.jpg',
            name: 'Sara Adams',
        },
        price: {
            initialPrice: 179.99,
            currentPrice: 129.99,
        }
    },
    {
        courseBanner: '/news3.png',
        category: 'Digital Marketing',
        durationMonths: 2,
        title: 'Digital Marketing Strategies',
        description: 'Learn effective digital marketing strategies to grow your online presence.',
        creator: {
            image: '/creator-4.jpeg',
            name: 'David Lee',
        },
        price:{
            initialPrice: 129.99,
            currentPrice: 99.99,
        }
    },
    {
        courseBanner: '/news3.png',
        category: 'Photography',
        durationMonths: 1,
        title: 'Photography Basics',
        description: 'Get started with photography and explore the fundamentals of capturing great shots.',
        creator: {
            image: '/creator-4.jpeg',
            name: 'Emily Turner',
        },
        price:{
            initialPrice: 69.99,
            currentPrice: 49.99,
        }
    },
    {
        courseBanner: '/student-image.png',
        category: 'Finance',
        durationMonths: 2,
        title: 'Financial Planning and Investment',
        description: 'Learn the principles of financial planning and investment strategies for long-term growth.',
        creator: {
            image: '/creator-3.jpg',
            name: 'Jane Smith',
        },
        price:{
            initialPrice: 149.99,
            currentPrice: 119.99,
        }
      },
      {
        courseBanner: '/news3.png',
        category: 'Languages',
        durationMonths: 1,
        title: 'Spanish Language Basics',
        description: 'Begin your journey to learn Spanish with essential vocabulary and phrases.',
        creator: {
            image: '/portrait.jpg',
            name: 'John Doe',
        },
        price:{
            initialPrice: 49.99,
            currentPrice: 39.99,
        }
    },
];

const instructors = [
    {
        name: 'John Doe',
        image: '/portrait.jpg',
    },
    {
        name: 'Jane Smith',
        image: '/instructor-4.png',
    },
    {
        name: 'Mike Johnson',
        image: '/creator-4.jpeg',
    },
    {
        name: 'Sara Adams',
        image: '/instructor-3.png',
    },
    {
        name: 'David Lee',
        image: '/instructor-2.png',
    },
    {
        name: 'Emily Turner',
        image: '/instructor-1.avif',
    },
];
  

function Search() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF'/>
                <main>
                    <div className=' bg-search bg-cover bg-center bg-no-repeat'>
                        <div className='py-16 w-full bg-primary/30'>
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl mx-auto">
                                    <form className='bg-white rounded p-1 flex' action="">
                                        <input type="text" placeholder='Search your favorite course'  className='flex-1 px-4 py-1.5 sm:py-2.5 focus:outline-none'/>
                                        <button className='bg-primary text-white text-sm sm:text-base px-4 sm:px-8 rounded'>Search</button>
                                    </form>
                                    <div className='pt-5 flex flex-wrap gap-4 justify-center lg:justify-between'>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Subject</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Partner</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Program</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Language</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Availability</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Learning Type</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="container mx-auto">
                            <div className="max-w-6xl mx-auto py-10">
                                <div className='flex flex-wrap'>
                                    {courses.map((item, index) => {
                                        return (
                                            <MarketingArticles
                                                key={index}
                                                bannerImage={item.courseBanner}
                                                tag={item.category}
                                                duration={item.durationMonths + " months"}
                                                title={item.title}
                                                text={item.description}
                                                creator={item.creator}
                                                price={item.price}
                                            />
                                        )})}
                                </div>
                                <div className='px-4 sm:px-8 lg:px-12 bg-wrapper-background rounded-xl text-blue py-6 mt-10 flex flex-col md:flex-row gap-16 items-center pt-10 md:py-6'>
                                    <article className='md:w-2/6'>
                                        <h3 className='font-semibold text-xl mb-4'>Know about learning learning platform</h3>
                                        <ul className='mb-4'>
                                            <li className='search-list'>
                                                <div />
                                                Free E-book, video & consolation
                                            </li>
                                            <li className='search-list'>
                                                <div />
                                                Top instructors from around world
                                            </li>
                                            <li className='search-list'>
                                                <div />
                                                Top courses from your team
                                            </li>
                                        </ul>
                                        <button className='rounded-md bg-primary text-white text-bold text-lg py-2.5 px-6'>Start learning now</button>
                                    </article>
                                    <div className='w-full md:flex-1 aspect-[1.72/1] relative'>
                                        <Image
                                            src={groupImage}
                                            fill
                                            alt='Image in classroom'
                                            placeholder='blur'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <RecommendedCourses />
                    <Wrapper backgroundColor='transparent'>
                        <div className="max-w-6xl mx-auto">
                            <Title
                                text='Classes taught my real creators'
                            />
                            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                                {instructors.map((item, index) => {
                                    return(
                                        <RealCreatorCourses
                                            key={index}
                                            name={item.name}
                                            image={item.image}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </Wrapper>
                    <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                        <div className="max-w-6xl mx-auto">
                            <h4 className=' tracking-[0.6px] mb-8 text-xl text-black font-medium'>
                                What our students have to say
                            </h4>
                            <div className="bg-white rounded-2xl px-4 sm:px-8 lg:px-12 py-16 flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
                                <div className='pl-8 lg:pl-16 relative w-fit'>
                                    <div className='rounded-full z-10 overflow-hidden h-64 lg:h-80 w-64 lg:w-80 relative'>
                                        <Image  
                                            src={smilingWoman}
                                            fill
                                            alt='Smiling Woman'
                                            placeholder='blur'
                                            className='object-cover object-top'
                                        />
                                    </div>
                                    <div className=' h-20 w-20 rounded-full absolute top-0 right-4 bg-[#F0FF92]/[69]' />
                                    <div className=' h-36 lg:h-48 w-36 lg:w-48 rounded-full absolute bottom-0 left-0 bg-[#88FFD4]/[47]' />
                                    <div className=' h-24 w-24 rounded-full absolute bottom-0 right-0 bg-[#FBBC82]/[62]' />
                                </div>
                                <article className=' max-w-sm'>
                                    <h4 className="text-dark-blue font-bold text-lg mb-3">Savannah Nguyen</h4>
                                    <h5 className='text-dark-blue font-medium mb-2'>tanya.hill@example.com</h5>
                                    <p className='mb-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor<br/>
                                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor<br/>
                                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                                    </p>
                                    <div className='gap-5 flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z" fill="#49BBBD"/>
                                        </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#49BBBD"/>
                                            <path d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z" fill="white"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#49BBBD"/>
                                            <path d="M15.9992 9.19995C18.1992 9.19995 18.4992 9.19995 19.3992 9.19995C20.1992 9.19995 20.5992 9.39995 20.8992 9.49995C21.2992 9.69995 21.5992 9.79995 21.8992 10.1C22.1992 10.4 22.3992 10.7 22.4992 11.1C22.5992 11.4 22.6992 11.8 22.7992 12.6C22.7992 13.5 22.7992 13.7 22.7992 16C22.7992 18.3 22.7992 18.5 22.7992 19.4C22.7992 20.2 22.5992 20.6 22.4992 20.9C22.2992 21.3 22.1992 21.6 21.8992 21.9C21.5992 22.2 21.2992 22.4 20.8992 22.5C20.5992 22.6 20.1992 22.7 19.3992 22.8C18.4992 22.8 18.2992 22.8 15.9992 22.8C13.6992 22.8 13.4992 22.8 12.5992 22.8C11.7992 22.8 11.3992 22.6 11.0992 22.5C10.6992 22.3 10.3992 22.2 10.0992 21.9C9.79922 21.6 9.59922 21.3 9.49922 20.9C9.39922 20.6 9.29922 20.2 9.19922 19.4C9.19922 18.5 9.19922 18.3 9.19922 16C9.19922 13.7 9.19922 13.5 9.19922 12.6C9.19922 11.8 9.39922 11.4 9.49922 11.1C9.69922 10.7 9.79922 10.4 10.0992 10.1C10.3992 9.79995 10.6992 9.59995 11.0992 9.49995C11.3992 9.39995 11.7992 9.29995 12.5992 9.19995C13.4992 9.19995 13.7992 9.19995 15.9992 9.19995ZM15.9992 7.69995C13.6992 7.69995 13.4992 7.69995 12.5992 7.69995C11.6992 7.69995 11.0992 7.89995 10.5992 8.09995C10.0992 8.29995 9.59922 8.59995 9.09922 9.09995C8.59922 9.59995 8.39922 9.99995 8.09922 10.6C7.89922 11.1 7.79922 11.7 7.69922 12.6C7.69922 13.5 7.69922 13.8 7.69922 16C7.69922 18.3 7.69922 18.5 7.69922 19.4C7.69922 20.3 7.89922 20.9 8.09922 21.4C8.29922 21.9 8.59922 22.4 9.09922 22.9C9.59922 23.4 9.99922 23.6 10.5992 23.9C11.0992 24.1 11.6992 24.1999 12.5992 24.2999C13.4992 24.2999 13.7992 24.2999 15.9992 24.2999C18.1992 24.2999 18.4992 24.2999 19.3992 24.2999C20.2992 24.2999 20.8992 24.1 21.3992 23.9C21.8992 23.7 22.3992 23.4 22.8992 22.9C23.3992 22.4 23.5992 22 23.8992 21.4C24.0992 20.9 24.1992 20.3 24.2992 19.4C24.2992 18.5 24.2992 18.2 24.2992 16C24.2992 13.8 24.2992 13.5 24.2992 12.6C24.2992 11.7 24.0992 11.1 23.8992 10.6C23.6992 10.1 23.3992 9.59995 22.8992 9.09995C22.3992 8.59995 21.9992 8.39995 21.3992 8.09995C20.8992 7.89995 20.2992 7.79995 19.3992 7.69995C18.4992 7.69995 18.2992 7.69995 15.9992 7.69995Z" fill="white"/>
                                            <path d="M15.9992 11.7C13.5992 11.7 11.6992 13.6 11.6992 16C11.6992 18.4 13.5992 20.3 15.9992 20.3C18.3992 20.3 20.2992 18.4 20.2992 16C20.2992 13.6 18.3992 11.7 15.9992 11.7ZM15.9992 18.8C14.4992 18.8 13.1992 17.6 13.1992 16C13.1992 14.5 14.3992 13.2 15.9992 13.2C17.4992 13.2 18.7992 14.4 18.7992 16C18.7992 17.5 17.4992 18.8 15.9992 18.8Z" fill="white"/>
                                            <path d="M20.3992 12.6C20.9515 12.6 21.3992 12.1522 21.3992 11.6C21.3992 11.0477 20.9515 10.6 20.3992 10.6C19.8469 10.6 19.3992 11.0477 19.3992 11.6C19.3992 12.1522 19.8469 12.6 20.3992 12.6Z" fill="white"/>
                                        </svg>
                                    </div>
                                </article>
                                <div className='flex md:flex-col gap-2 items-center md:ml-auto mt-auto'>
                                    <ImageCircle path='/instructor-2.png' />
                                    <ImageCircle path='/instructor-4.png' />
                                    <ImageCircle path='/instructor-3.png' />
                                    <ImageCircle path='/instructor-5.png' />
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                    <TopEducationOffer />
                </main>
            <Footer/>
        </div>
    )
}

export default Search