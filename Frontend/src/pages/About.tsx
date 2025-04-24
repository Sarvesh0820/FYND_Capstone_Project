import React from 'react'
import {assets} from "../assets/asset.js"

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">
        <span className="text-gray-500">ABOUT </span><span className="text-black font-bold">US</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={assets.about}
            alt="About Shopwise"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <p className="mb-4">
            <span className="font-semibold text-lg text-black">Shopwise</span> was founded with the vision to transform how people shop online. 
            Our journey began with a simple mission — to provide a seamless and enjoyable shopping experience across fashion, electronics, home essentials, and more.
          </p>
          <p className="mb-4">
            We take pride in offering a curated range of quality products from trusted brands that meet every taste and lifestyle. Our team works hard to ensure that your shopping journey is smooth, convenient, and rewarding.
          </p>
          <h3 className="font-semibold text-lg text-black mb-2">Our Mission</h3>
          <p>
            Our mission at Shopwise is to empower customers with choices they love, service they trust, and convenience they deserve. 
            We’re dedicated to exceeding expectations from discovery to delivery.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About