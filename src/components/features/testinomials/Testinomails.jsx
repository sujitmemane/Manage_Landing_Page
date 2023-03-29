import React from 'react'
import profile1 from '../../../assets/avatar-anisha.png'
import profile2 from '../../../assets/avatar-ali.png'
import profile3 from '../../../assets/avatar-richard.png'
const Testinomails = () => {
  return (
    <section id='testinomails'>
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* container-header */}
        <h2 className="text-4xl font-bold text-center">
            What's Different About Manager ?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg  md:w-1/3 " >
             <img src={profile1} className='w-16 -mt-14' />
             <h5 className="text-lg font-bold">
              Anisha Li
             </h5>
              <p className="text-sm text-darkGrayishBlue">
                 “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” 
              </p>
            </div>

               <div className=" hidden  flex-col items-center p-6 space-y-6 rounded-lg md:flex   md:w-1/3 " >
             <img src={profile2} className='w-16 -mt-14' />
             <h5 className="text-lg font-bold">
              Ali Bravo
             </h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
              </p>
            </div>


               <div className=" hidden  flex-col items-center p-6 space-y-6 rounded-lg md:flex  md:w-1/3 " >
             <img src={profile3} className='w-16 -mt-14' />
             <h5 className="text-lg font-bold">
             Richard Watts 
             </h5>
              <p className="text-sm text-darkGrayishBlue">
               “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” 
              </p>
            </div>
        </div>
           <div className="my-16">
             <a href="#" className="  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline ">
             Get Started
            </a>
           </div>
      </div>
    </section>
  )
}

export default Testinomails
