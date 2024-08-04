import React from 'react'
import MarketingArticles from './marketing-articles'

function Marketing() {
    return (
        <div className='flex flex-wrap'>                         
            <MarketingArticles
                bannerImage='/news2.png'
                tag='Cloud'
                duration='3 months'
                title='AWS Certified solutions Architect'
                text='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
                creator={{image: "/portrait.jpg", name: "Lina"}}
                price={{initialPrice: 100, currentPrice: 80}}
            />
            <MarketingArticles
                bannerImage='/news3.png'
                tag='Scrum'
                duration='2 months'
                title='Introduction to Scrum master'
                text='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
                creator={{image: "/portrait.jpg", name: "Lina"}}
                price={{initialPrice: 70, currentPrice: 50}}
            />
            <MarketingArticles
                bannerImage='/news1.png'
                tag='Development'
                duration='9 months'
                title='Full Frontend Career Course'
                text='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
                creator={{image: "/portrait.jpg", name: "Lina"}}
                price={{initialPrice: 190, currentPrice: 160}}
            />
            <MarketingArticles
                bannerImage='/news4.png'
                tag='Development'
                duration='1 months'
                title='Introduction to Element of Design'
                text='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
                creator={{image: "/portrait.jpg", name: "Lina"}}
                price={{initialPrice: 70, currentPrice: 50}}
            />
        </div>
    )
}

export default Marketing