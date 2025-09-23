import React from 'react'

const CuddlesProgram = () => {
  const content = [
    {
      img: './cp1.png',
      title: 'Preschool Programs',
      para: 'Your child discovers math through cooking, explores science in our garden, and builds confidence through music and movement, preparing for school while keeping childhood magical.'
    },
    {
      img: './cp2.png',
      title: 'Day Care',
      para: 'We offer the same attention and care at home as they get at school. While you work, you can be certain that your child is in good hands with qualified carers who provide healthy meals and age-appropriate activities.'
    },
    {
      img: './cp3.png',
      title: 'Parent Counselling',
      para: 'Our experienced counselors provide personalized guidance on developmental milestones and behavior management. We support you with practical advices and guidance in raising your child.'
    },
    {
      img: './cp4.png',
      title: 'Teacher Training',
      para: 'We share our expertise with educators creating transformative learning environments. Our programs focus on active learning methodologies and child development, helping teachers create classrooms where every child feels valued.'
    },
  ]

  const award = [
    "Brainfeed",
    "Parent’s choice awards",
    "Education today",
    "India Preschool Jury Awards"
  ]
  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" className="relative -mb-1" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,224L40,218.7C80,213,160,203,240,197.3C320,192,400,192,480,202.7C560,213,640,235,720,240C800,245,880,235,960,218.7C1040,203,1120,181,1200,192C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className="h-max bg-[#9769A5] pb-14 px-4 md:px-14">
        {/* Top header */}
        <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
          <h2
            className="text-center text-balance text-5xl relative inline font-extrabold"
          >
            Cuddles Program
            <img src="./sun.svg" alt="Sun vector" className="absolute top-[-60] left-[-100] " />
          </h2>
          <h3 className="text-center text-balance text-2xl relative font-medium"
          >What we offer ?</h3>
        </header>
        <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4 p-4 border border-white rounded-2xl'>
          {content.map((item, index) => {
            return (
              <div key={index} className='flex flex-col gap-6 text-white text-center'>
                <img src={item.img} alt={item.title} className='w-full rounded-2xl' />
                <h3 className='text-2xl font-bold'>{item.title}</h3>
                <p className='text-[14px] px-4'>{item.para}</p>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <h2 className="text-center text-balance text-5xl font-extrabold mt-8 text-white">
            We Are Proud Winners Of
          </h2>
          <div className='flex md:flex-row flex-col justify-around items-center w-full gap-6'>
              {award.map((item,index)=>{
                return(
                  <p key={index} className='text-white text-lg'>{item}</p>
                )
              })}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,181.3C560,181,640,107,720,112C800,117,880,203,960,208C1040,213,1120,139,1200,117.3C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </section>
  )
}

export default CuddlesProgram