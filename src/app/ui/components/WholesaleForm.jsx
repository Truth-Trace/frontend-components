import React from 'react'

const WholesaleForm = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    <div className="m-auto">
      <div>
        <div className="mt-5 bg-white rounded-lg shadow">
          <div className="flex">
            <div className="flex-1 py-5 pl-5 overflow-hidden">
              <svg
                className="inline align-text-top"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g>
                  <path
                    d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                    fill="none"
                    id="svg_1"
                    stroke="null"
                  />
                  <path
                    d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                    id="svg_2"
                  />
                  <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3" />
                </g>
              </svg>
              <h1 className="inline text-2xl font-semibold leading-none">
                Transporter Form
              </h1>
            </div>
          </div>
          <div className="px-5 pb-5">
          <input
              placeholder="Batch Id"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />

            <input
              placeholder="Departure Time"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <input
              placeholder="Arrival Time"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <input
              placeholder="Temperature"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <input
              placeholder="Humidity"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WholesaleForm