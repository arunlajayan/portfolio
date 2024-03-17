import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'

const Hero5 = () => {
    return(
        <section className="wpo-hero-style-5" >
            <div className="wpo-slide-wrap">
                <div className='max-w-screen-xl'>
                    <div className="flex flex-wrap my-14">
                        <div className="col col-md-8 slide-caption">
                            <h2>I’m <span>Arun</span>A.L</h2>
                            <p>Full Stack Developer</p>
                            <div className="bg-social">
                                <ul>
                                    <li><Link href="/"><i className="fa fa-github"></i></Link></li>
                                    <li><Link href="/"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link href="/"><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img">
                        <Image src='/images/slider/img-1.png' width={600} height={600} alt="Description of the image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero5;