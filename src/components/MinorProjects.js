import React from 'react'

const MinorProjects = () => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Other Noteworthy Projects
        </h2>
        <div className="w-full mb-4">
          <div style={{ background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)' }}  className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                React App
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Text-Specs
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
              Introducing Text-Spec, a React-based web app that goes beyond ordinary text manipulation. With a sleek dark mode and three vibrant color modes, Text-Spec lets you fine-tune text properties. Customize fonts, sizes, and more for a tailored reading experience. Explore the art of words effortlessly.              </p>
            </a>
          </div>


          <div className='flex items-center text-gray-800 pt-3 justify-between'>
          <a className=' inline-block' target="_blank" href='https://uadeshay-saini.github.io/Text-Spec/'>
    <button className=" flex bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <polyline points="3 7 12 2 21 7"></polyline>
        <line x1="12" y1="2" x2="12" y2="15"></line>
      </svg>
      <span>Visit This Web App</span>
    </button>
      </a>
      </div>
          {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button style={{ background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)' }}  className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
              </button>
            </div>
          </div> */}
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
               JavaScript HTML5 CSS3
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
              RockPaperScissor
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
              Experience the classic game reimagined with RockPaperScissor, a dynamic web app crafted with HTML, CSS, and JavaScript. Immerse yourself in nostalgic gameplay with stored local data. Play autonomously, track your wins, losses, and ties, and relive the timeless fun with a modern twist.              </p>
            </a>
          </div>
          <div className='flex items-center text-gray-800 pt-3 justify-between'>
          <a className=' inline-block' target="_blank" href='https://uadeshay-saini.github.io/RockPaperScissor/'>
    <button className=" flex bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <polyline points="3 7 12 2 21 7"></polyline>
        <line x1="12" y1="2" x2="12" y2="15"></line>
      </svg>
      <span>Visit This Web App</span>
    </button>
      </a>
      </div>
       
        </div>
    
      </div>
    </section>
  )
}

export default MinorProjects