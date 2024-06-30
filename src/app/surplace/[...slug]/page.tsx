"use client"
import useMenuStore from '@/store/menu';
import useUserStore from '@/store/user';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import AddIcon from '@/assets/AddIcon.svg'
/* 
- This route will match https://mcaisse.com/surplace/{idUser}/{idSalle}/{idTable}
- [...slug] is used to match all routes afer surplace
*/
export default function Home() {
  const params = useParams();

  const { data } = useMenuStore();

  console.log('filter', data?.menu?.filter((row: any) => row?.type === data?.activeTab));
  return (
    <section className='py-[10px] px-[20px]'>
      {data?.menu?.filter((row: any) => row?.type === data?.activeTab).map((menuItem: any) => {
        return (
          <div className='py-[10px] flex justify-between items-center'>
            <div>
              <h2 className='w-[170px] text-12 font-bold text-primaryText-light'>{menuItem?.titre}</h2>
              <text className='w-[170px] text-8 font-semibold text-secondaryText-light'>{menuItem?.description}</text>
              <p className='text-10 font-bold text-primaryText-light'>{`${menuItem?.price} €`}</p>
            </div>
            <div className='flex items-center gap-[20px]'>
              <Image src={menuItem?.urls[0].url} alt='' width={80} height={80} className='rounded-[5px] w-[80px] h-[80px] object-cover aspect-square' />
              <Image src={AddIcon} alt='' width={20} height={20} className='w-[20xp] h-[20px] object-cover aspect-square' />
            </div>
          </div>
        )
      })}
    </section>
  );
}
