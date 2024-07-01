'use client'
import Image from 'next/image'
import React from 'react'
import CrossIcon from '@/assets/CrossIcon.svg'

interface ImageModalProps {
  imageUrl: string | undefined
  title: string | undefined
  closeModal: () => void
}

export default function ImageModal({ imageUrl, title, closeModal }: ImageModalProps) {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.8)] top-0 fixed'>
      <div>
        <div className='relative h-[300px] w-[300px]'>
          <Image onClick={closeModal} className='absolute h-[30px] w-[30px] right-2 top-2' src={CrossIcon} alt='' width={30} height={30}></Image>
          <Image className='h-[300px] w-[300px] object-cover aspect-square rounded-[10px]' src={imageUrl ? imageUrl : ''} alt='' width={300} height={300}></Image>
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  )
}
