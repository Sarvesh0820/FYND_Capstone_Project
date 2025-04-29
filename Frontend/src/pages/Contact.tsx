import {assets} from "../assets/asset.js"

const Contact = () => {
  return (
   <section className="max-w-6xl mx-auto px-4 py-12">
         <h2 className="text-3xl font-semibold text-center mb-10">
           <span className="text-gray-500">CONTACT </span><span className="text-black font-bold">US</span>
         </h2>
         <div className="flex flex-col md:flex-row items-center gap-10">
           <div className="w-full md:w-1/2">
             <img
               src={assets.contact}
               alt="About Shopwise"
               className="rounded-lg shadow-md w-full h-auto object-cover"
             />
           </div>
           <div className=" w-full md:w-1/2 text-gray-700">
             <div>
            <h4 className="mb-4 text-lg font-semibold text-black">Our Store</h4>
            <p >2001, 20th Floor, BKC Towers</p>
            <p className='mb-4'>BKC, Mumbai, India</p>
          </div>

          <div>
            <p>
              <strong className='text-black'>Tel:</strong> +91-9130460775
            </p>
            <p className='mb-4'>
              <strong className='text-black'>Email:</strong>{' '}
              <a href="mailto:admin@shopwise.com" className="text-blue-600">
                admin@shopwise.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Careers at Shopwise</h4>
            <p>Learn more about our teams and job openings.</p>

            <button className="mt-4 px-5 py-2 text-black border border-black rounded hover:bg-black hover:text-white transition duration-200">
              Explore Jobs
            </button>
          </div>
           </div>
         </div>
       </section>
  )
}

export default Contact