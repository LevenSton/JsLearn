import React from 'react'
import Image from 'next/image'

//{imgUrl, changeBigShoeImage, bigShoeImg}: {imgUrl:string, changeBigShoeImage:string, bigShoeImg:string}

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-red-400" : "border-transparent" } cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image 
          src={imgURL.thumbnail}
          alt='show collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard