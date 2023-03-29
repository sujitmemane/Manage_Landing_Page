import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className='bg-brightRed'>
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex md:flex-row md:space-y-0">
            <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                Siplify how your team works today
            </h2>
            <div>
                <a href="#" className="  p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline shadow-2xl hover:bg-gray-300">
             Get Started
            </a>  
            </div>
        </div>
    </section>
  )
}

export default CTA
