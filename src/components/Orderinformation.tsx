import React from 'react'
import TableIcon from '../assets/tableIcon.svg'
import Image from 'next/image'

export default function Orderinformation() {
  return (
    <div className='p-[10px] flex justify-between items-center'>
      <div className='w-[125px] h-[30px] rounded-[10px] bg-button-gradient text-white flex justify-center items-center gap-2'>
        <p className='text-12'>{`Total:`}</p>
        <p className='text-12'>{`0.00 €`}</p>
      </div>
      <div className='relative'>
        <Image src={TableIcon} alt='Table number icon'></Image>
        <p className='absolute top-[-4px] right-[-1px] border border-white text-6 text-white bg-button-gradient rounded-full w-[12px] h-[12px] text-center pt-[1px]'>4</p>
      </div>
    </div>
  )
}
