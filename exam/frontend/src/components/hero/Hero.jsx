import React from 'react'
import './Hero.scss'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="row d-flex align-items-center fex-wrap">
                    <div className="col-md-8 content">
                        <h1 >Select Your New Perfect Style</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ducimus quod nemo.</p>
                        <button className='btn btn-secondary'> Shop Now</button>
                    </div>
                    <div className="col-md-4">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
