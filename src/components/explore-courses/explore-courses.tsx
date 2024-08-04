import React from 'react'
import Courses from './courses'
import CourseTag from './course-tag'
import CourseCard from './course-card'

function ExploreCourses() {
    return (
        <section className='pt-10 md:pt-20 pb-1 relative mb-20 overflow-hidden'>
            <div className='hidden md:block absolute left-0 top-0 h-full w-5/6 bg-[#9DCCFF]/20 -z-10 rounded-br-[5rem]' />
            <div className="max-w-6xl mx-auto px-4">
                <div className="container mx-auto">
                    <h4 className='text-black/[87] font-bold text-3xl mb-5'>Explore Courses</h4>
                    <p>Ut sed eros finibus, placerat, orci id, dapibus</p>
                </div>
                <div className='mt-10'>
                    <Courses courseTitle='Element of Design'>
                        <CourseTag index={1} text='Ut Sed Eros' />
                        <CourseTag index={2} text='Curabitur Egestas' />
                        <CourseTag index={3} text='Ut Sed Eros' />
                        <CourseTag index={4} text='Vestibulum fauci…' />
                        <CourseTag index={5} text='Ut Sed Eros' />
                        <CourseTag index={6} text='Vestibulum faucibu' />
                        <CourseCard 
                            image = "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title = "Integer id Orc Sed Ante Tincidunt"
                            intro = "Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel."
                            amount={450}
                        />
                    </Courses>
                    <Courses courseTitle='Element of Design'>
                        <CourseTag index={1} text='Ut Sed Eros' />
                        <CourseTag index={2} text='Curabitur Egestas' />
                        <CourseTag index={3} text='Ut Sed Eros' />
                        <CourseCard 
                            image = "https://images.pexels.com/photos/17675575/pexels-photo-17675575/free-photo-of-a-face-style-handmade-candle.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title = "Integer id Orc Sed Ante Tincidunt"
                            intro = "Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel."
                            amount={450}
                        />
                        <CourseTag index={4} text='Vestibulum fauci…' />
                        <CourseTag index={5} text='Ut Sed Eros' />
                        <CourseTag index={6} text='Vestibulum faucibu' />
                    </Courses>
                    <Courses courseTitle='Element of Design'>
                        <CourseTag index={1} text='Ut Sed Eros' />
                        <CourseCard 
                            image = "https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600"
                            title = "Integer id Orc Sed Ante Tincidunt"
                            intro = "Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel."
                            amount={450}
                        />
                        <CourseTag index={2} text='Curabitur Egestas' />
                        <CourseTag index={3} text='Ut Sed Eros' />
                        <CourseTag index={4} text='Vestibulum fauci…' />
                        <CourseTag index={5} text='Ut Sed Eros' />
                        <CourseTag index={6} text='Vestibulum faucibu' />
                    </Courses>
                </div>
            </div>

            
        </section>
    )
}

export default ExploreCourses