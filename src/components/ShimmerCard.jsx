import React from 'react'

function ShimmerCard() {
  return (
    <div className='product_listing_main py-4 max-w-[1440px] m-auto p-[0 15px] text-white'>
      <div className={`procuct_card_main  flex flex-wrap gap-5 transition-opacity duration-500`}>
        <div className="shimmer_card_main w-full flex flex-wrap gap-5">
          {[...Array(5)].map((_, index) => (
            <div className="shimmer_card_inner flex justify-between flex-wrap gap-3 lg:w-[49%] w-[100%]" key={index}>
              <figure
                style={{ lineHeight: '0' }}
                className="lg:w-[48%] w-[100%] shimmer"
              >
                <div className="shimmer_img w-[100%] h-[300px] bg-gray-300"></div>
              </figure>
              <div className="content_div lg:w-[48%] w-[100%]">
                <div className="shimmer_title bg-gray-300 h-6 mb-2"></div>
                <div className="shimmer_text bg-gray-300 h-4 mb-2"></div>
                <div className="shimmer_text bg-gray-300 h-4 mb-2"></div>
                <div className="shimmer_price bg-gray-300 h-6 mb-2"></div>
                <div className="shimmer_btns flex gap-4">
                  <div className="shimmer_btn bg-gray-300 h-8 w-24"></div>
                  <div className="shimmer_btn bg-gray-300 h-8 w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShimmerCard