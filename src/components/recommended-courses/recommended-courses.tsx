import React from 'react'
import Wrapper from '../wrapper/wrapper'
import Title from '../courses/title/title'
import Marketing from '../blog/marketing-articles/marketing'

function RecommendedCourses() {
    return (
        <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
            <Title text='Recommended for you'/>
            <Marketing />
        </Wrapper>
    )
}

export default RecommendedCourses