'use client'

import Image from 'next/image'
import React from 'react'
import Title from '../title/title'
import Wrapper from '../wrapper/wrapper'
import { motion } from 'framer-motion'

function Solution() {
    return (
        <Wrapper backgroundColor='transparent'>
            <Title
                blueText='All-in-one'
                turqoiseText='Cloud Solution'
                note='TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.'
            />
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 lg:gap-16 py-20'
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5 }}
            >
                <Cards
                    icon='/icon/file-invoice.svg'
                    title='Online Billing, Invoicing, & Contracts'
                    note='Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts'
                    bgColor='#2F327D'
                />
                <Cards
                    icon='/icon/calender.svg'
                    title='Easy Scheduling & Attendance Tracking'
                    note='Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance'
                    bgColor='#00CBB8'
                />
                <Cards
                    icon='/icon/users.svg'
                    title='Customer Tracking'
                    note='Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization '
                    bgColor='#49BBBD'
                />
            </motion.div>
        </Wrapper>
    )
}

function Cards({icon, title, note, bgColor}: {icon: string, title: string, note: string, bgColor: string}){
    return(
        <div className='bg-white text-center rounded-[1.25rem] flex flex-col shadow-[0px_5px_30px_0px_rgba(38,45,118,0.08)]'>
            <div 
                className={`rounded-full mb-12 h-16 w-16 -mt-8 mx-auto grid place-content-center drop-shadow-[0px_10px_40px_rgba(54,61,136,0.06)]`}
                style={{backgroundColor: bgColor}}
            >
                <Image
                    src={icon}
                    height={30}
                    width={30}
                    alt=''
                />
            </div>
            <h5 className='text-xl lg:text-2xl font-medium text-blue mb-6 p-4 lg:p-8 pb-0 mt-auto'>{title}</h5>
            <p className='p-8 pt-0 mt-auto'>{note}</p>
        </div>
    )
}

export default Solution