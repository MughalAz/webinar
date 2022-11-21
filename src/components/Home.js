import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='heading'>JOIN OUR<br /> WEB INAR</h1>
                        <p className='para'>At Seashell Ballroom 203</p>
                        <div className='read'>
                            <button className='btn-2 ms-4'>READ MORE</button>
                            <button className='btn-3 ms-4 mt-2'>JOIN US</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="./assets/images/image-1.png" class="card-img-top pt-3 h-100" alt="..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <p className='para-2'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
