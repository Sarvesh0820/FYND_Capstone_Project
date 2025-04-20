import React from 'react'
import { asset } from '../assets/assets'

const Add = () => {
  return (
      <form className='flex flex-col w-full items-start gap-3'>
          <div className='mt-2'>
              <p className='mb-2'>Upload Image</p>
              <div className='flex gap-2'>
                  <label htmlFor="image1">
                      <img className =  "w-20" src={asset.upload} alt="" />
                      <input type="file" id="image1" hidden />
                  </label>
                  <label htmlFor="image2">
                      <img className =  "w-20" src={asset.upload} alt="" />
                      <input type="file" id="image2" hidden />
                  </label>
                  <label htmlFor="image3">
                      <img className =  "w-20" src={asset.upload} alt="" />
                      <input type="file" id="image3" hidden />
                  </label>
                  <label htmlFor="image4">
                      <img className =  "w-20" src={asset.upload} alt="" />
                      <input type="file" id="image4" hidden />
                  </label>
              </div>
          </div>
          <div className='w-full'>
              <p className='mb-2'>Product Name</p>
              <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
          </div>
          <div className='w-full'>
              <p className='mb-2'>Product Description</p>
              <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
          </div>
          <div>
              <p className='mb-2'>Select Category</p>
              <select className='w-full px-3 py-2 '>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
              </select>
          </div>
          <div>
              <p className='mb-2'>Select Sub Category</p>
              <select className='w-full px-3 py-2 '>
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Accesories">Accesories</option>
              </select>
          </div>
          <div>
              <p>Price</p>
              <input type="Number" placeholder='99' />
          </div>
    </form>
  )
}

export default Add