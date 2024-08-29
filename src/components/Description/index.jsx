import React from 'react'
import '../../styles/decription.styles.scss'
import vector from '../../assets/Vector (2).svg'
import plantimage from '../../assets/pngwing 1.svg'
import Button from '../../common/Button'

const Description = () => {
    return (
        <div className='description-container'>
            <div className='description-content'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button text="Read More" />
            </div>
            <div className='description-image-content'>
                <img src={vector} />
                <img src={plantimage} />
            </div>
        </div>
    )
}

export default Description