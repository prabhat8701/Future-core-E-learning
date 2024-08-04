import React from 'react'
import Wrapper from '../wrapper/wrapper'
import Title from '../courses/title/title'
import EducationalOffer from '../courses/educational-offer/educational-offer'

function TopEducationOffer() {
    return (
        <Wrapper backgroundColor='transparent'>
            <Title text='Top Educational Offers are listed here' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 lg:gap-12">
                <EducationalOffer img="/news1.png" />
                <EducationalOffer img="/news2.png" />
                <EducationalOffer img="/news3.png" />
            </div>
        </Wrapper>
    )
}

export default TopEducationOffer