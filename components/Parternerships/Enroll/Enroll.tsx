import React from 'react'

const Enroll = () => {
   const steps = [
    "Reach Out via the corporate inquiry form below",
    "We Connect to understand your team's requirements",
    "We Curate a custom enrollment and benefit structure",
    "You Share Access to your employees",
    "Children Enroll with priority placement and onboarding support",
  ]

  return (
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,229.3C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="h-max bg-purple px-4 md:px-14 flex flex-col gap-6 items-center justify-center">
        <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                       How To Enroll
                    </h2>
                    <p className="text-center text-balance text-2xl relative font-medium">
                        Getting Started Is Simple And Seamless.
                    </p>
                </header>
        {/* Steps */}
        <div className="max-w-[400px] mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Content */}
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg text-purple font-extrabold">{index + 1}</span>
                </div>

                {/* Step Text */}
                <p className="text-lg text-white">{step}</p>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="mt-6 sm:mt-8 mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z"
                      clipRule="evenodd"
                      transform="rotate(180 10 10)"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,229.3C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </section>
  )
}

export default Enroll