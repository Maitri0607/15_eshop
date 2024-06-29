import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xlx md:text-5xl text-primary' />,
    title: "Free Shipping",
    descriiption: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: < FaCheckCircle className='text-4xlx md:text-5xl text-primary' />,
    title: "Safe Money",
    descriiption: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xlx md:text-5xl text-primary' />,
    title: "Secure Payment",
    descriiption: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className='text-4xlx md:text-5xl text-primary' />,
    title: "Online Support 24/7",
    descriiption: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <>
      <div className='container mt-14 md:mt-20'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4 ">
          {
            ServiceData.map((data) => (
              <div className='flex flex-col items-start sm:flex-row gap-4'>
                {data.icon}
                <div>
                  <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                  <h1 className='text-sm text-gray-400'>{data.descriiption}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Services