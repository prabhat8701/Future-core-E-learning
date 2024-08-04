import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Solution from '@/components/solution/solution'
import Oursuccess from '@/components/success/our-success'
import Image from 'next/image'

import instructorPortrait from '../../public/instructor-image.png'
import studentPortrait from '../../public/student-image.png'
import news1 from '../../public/news1.png'
import news2 from '../../public/news2.png'
import news3 from '../../public/news3.png'
import news4 from '../../public/news4.png'
import WhatIsCard from '@/components/whatIs/WhatIsCard'
import Title from '@/components/title/title'
import Link from 'next/link'
import ExploreCourses from '@/components/explore-courses/explore-courses'
import NewsCard from '@/components/news-card/news-card'
import Footer from '@/components/footer/footer'
import EverythingNote from '@/components/everything-note/everything-note'
import FeatureTtems from '../components/home/feature-items/feature-items'
import Testimonial from '../components/home/testimonial/testimonial'
import ScrollBtn from '../components/scroll-btn/scroll-btn'
import OurFeatures from '../components/home/our-features/our-features'

export default function Home() {
  return (
    <div>
      <ScrollBtn />
      <div className='bg-primary relative md:h-screen after:bg-primary after:utils after:[clip-path:ellipse()] after:z-10 before:utils before:bg-white before:h-10'>
        <Header textColor='#FFF' linkColor="#5B5B5B" />
        <Hero />
      </div>
      <main>
        <div className='max-w-6xl mx-auto px-4'>
          <Oursuccess />
          <Solution />
          <div className="container mx-auto">
            <section className=' max-w-5xl mx-auto pb-20 md:py-20'>
              <Title
                blueText='What is'
                turqoiseText='TOTC?'
                note='TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
              />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pb-0 md:pb-10 pt-10 overflow-hidden'>
                <WhatIsCard 
                  image={instructorPortrait} 
                  type='INSTRUCTORS'
                  buttonText="Start a class today"
                />
                <WhatIsCard 
                  image={studentPortrait} 
                  type='STUDENTS'
                  buttonText="Enter access code"
                />
              </div>
            </section>

            <EverythingNote />

            <section className='py-20'>
              <Title
                blueText='Our'
                turqoiseText='Features'
                note='This very extraordinary feature, can make learning activities more efficient'
              />
              <OurFeatures />
            </section>

            <FeatureTtems />
            
          </div>
        </div>
        <ExploreCourses />

        <Testimonial />

        <section className="py-10">
          <div className='max-w-6xl mx-auto px-4'>
            <Title blueText='Latest News and Resources' turqoiseText='' note='See the developments that have occurred to TOTC in the world' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col gap-12 pt-5 md:pt-10'>
              <article className='flex flex-col md:flex-row lg:flex-col gap-4 lg:row-span-3'>
                <div className='aspect-[1.88/1] w-full md:w-[186px] md:h-[133px] lg:w-full lg:h-[unset] rounded-2xl overflow-hidden relative'>
                  <Image
                    src={news1}
                    fill
                    alt='Classroom Image'
                    placeholder='blur'
                    className='object-cover'
                  />
                  <span className='label w-fit absolute right-2 bottom-2 lg:hidden'>NEWS</span>
                </div>
                <div className='flex flex-col justify-between flex-1 gap-4'>
                  <span className='label w-fit hidden lg:block'>NEWS</span>
                  <h6 className='text-blue font-medium hover:underline cursor-pointer'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h6>
                  <p className='text-sm'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  <Link href="" className='underline text-sm hidden lg:block'>Read more</Link>
                </div>
              </article>
              <NewsCard
                image={news2}
                title='Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand'
                note='Class Technologies Inc., the company that created Class,...'
                label='PRESS RELEASE'
              />
              <NewsCard
                image={news3}
                title='Zoom’s earliest investors are betting millions on a better Zoom for schools'
                note='Zoom was never created to be a consumer product. Nonetheless, the...'
                label='NEWS'
              />
              <NewsCard
                image={news4}
                title='Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms'
                note='This year, investors have reaped big financial returns from betting on Zoom...'
                label='NEWS'
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}