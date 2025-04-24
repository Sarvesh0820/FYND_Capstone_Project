import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const{currency, getCartAmount, gst} = useContext(ShopContext)
  return (
      <div className='w-full'>
          <div className='text-2xl'>
              <h2 className='text-gray-400 text-4xl'>Cart <span className='text-gray-600'>Total</span></h2>
          </div>
          <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>{currency}{getCartAmount()}.00</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                  <p>GST 18%</p>
                  <p>{currency}{gst}</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                  <b>Total</b>
                  <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + gst }</b>
              </div>

          </div>
    </div>
  )
}

export default CartTotal