import React from 'react'
import '../../styles/hero.styles.scss'
import vector from '../../assets/Vector (1).svg'
import Button from '../../common/Button'

function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-content-section'>
                <h1>Lorem ipsum dolor, sit amet </h1>
                <Button text="Read More" />
            </div>
            <div className='hero-image-section'>
                <img src={vector} />
            </div>
        </div>
    )
}

export default Hero