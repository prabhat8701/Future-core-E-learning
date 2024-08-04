'use client'
import React from 'react'

const faqs = [
    {
      question: "What is the e-learning platform?",
      answer: "Our e-learning platform is an online education platform that offers a wide range of courses and learning resources for students of all ages and levels."
    },
    {
      question: "How do I enroll in a course?",
      answer: "Enrolling in a course is simple! Just browse our course catalog, select the course you're interested in, and click on the 'Enroll' button. You'll gain instant access to the course content."
    },
    {
      question: "Can I access the courses on any device?",
      answer: "Absolutely! Our e-learning platform is designed to be responsive and accessible on various devices, including computers, tablets, and smartphones."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, most of our courses are self-paced, allowing you to learn at your own convenience. You can progress through the course content based on your schedule."
    },
    {
      question: "Do you offer certificates upon course completion?",
      answer: "Yes, we provide certificates of completion for many of our courses. Once you successfully finish a course, you'll receive a certificate to showcase your achievement."
    },
    {
      question: "What if I need help during the course?",
      answer: "Our courses come with dedicated support. If you have questions or need assistance, you can reach out to our instructors and support team via the course's communication channels."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we have a refund policy. If you're not satisfied with a course within a specified timeframe, you may be eligible for a refund. Please refer to our refund policy for more details."
    },
    {
      question: "How do I access my course materials?",
      answer: "Once you enroll in a course, you'll gain access to the course materials through your account dashboard. You can view and download the content as needed."
    }
];

function Faq() {

    const toggleAnswer = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        e.currentTarget.nextElementSibling?.classList.toggle('h-0');
    }

    return (
        <ul>
            {faqs.map((item, index) => {
                return(
                    <li key={index} className=' border-b border-b-[#696984] py-2'>
                        <h4 className='flex items-center gap-4 text-dark mb-1 cursor-pointer' onClick={(e)=>toggleAnswer(e)}>
                            <div className='h-4 w-4 shrink-0 bg-primary rounded-full' />
                            {item.question}
                        </h4>
                        <p className='text-sm pl-8 h-0 transition-all overflow-hidden'>{item.answer}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Faq