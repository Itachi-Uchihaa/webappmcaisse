"use client"
import useMenuStore from '@/store/menu';
import useUserStore from '@/store/user';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import AddIcon from '@/assets/AddIcon.svg'
import ImageModal from '@/components/ImageModal';
import MenuModal from '@/components/MenuModal';
/* 
- This route will match https://mcaisse.com/surplace/{idUser}/{idSalle}/{idTable}
- [...slug] is used to match all routes afer surplace
*/
export default function Home() {
  const params = useParams();

  const { data } = useMenuStore();

  console.log('filter', data?.menu?.filter((row: any) => row?.type === data?.activeTab));
  const [modalImg, setModalImg] = useState<string>();
  const [modalTitle, setModalTitle] = useState<string>();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const openImageModalHander = (image: string, title: string): void => {
    setModalImg(image);
    setModalTitle(title);
    setOpenModal(true);
  }
  const cloaseModalHander = (): void => {
    setOpenModal(false);
  }


  const [selectedMenuItem, setSelectedMenuItem] = useState<any>();
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);

  const openMenuModalHander = (menuItem: any): void => {
    setSelectedMenuItem(menuItem);
    setOpenMenuModal(true);
  }
  const cloaseMenuModalHander = (): void => {
    setOpenMenuModal(false);
  }

  return (
    <>
      {
        openModal &&
        <ImageModal imageUrl={modalImg} title={modalTitle} closeModal={cloaseModalHander} />
      }
      {
        openMenuModal &&
        <MenuModal menuItem={selectedMenuItem} closeModal={cloaseMenuModalHander} />
      }
      <section className='py-[10px] px-[20px]'>
        {data?.menu?.filter((row: any) => row?.type === data?.activeTab).map((menuItem: any) => {
          return (
            <div className='py-[10px] flex justify-between items-center' key={menuItem.id}>
              <div>
                <h2 className='w-[170px] text-12 font-bold text-primaryText-light'>{menuItem?.titre}</h2>
                <text className='w-[170px] text-8 font-semibold text-secondaryText-light'>{menuItem?.description}</text>
                <p className='text-10 font-bold text-primaryText-light'>{`${menuItem?.price} €`}</p>
              </div>
              <div className='flex items-center gap-[20px]'>
                <Image onClick={() => { openImageModalHander(menuItem?.urls[0].url, menuItem?.titre) }} src={menuItem?.urls[0].url} alt='' width={80} height={80} className='rounded-[5px] w-[80px] h-[80px] object-cover aspect-square' />
                <Image onClick={() => openMenuModalHander(menuItem)} src={AddIcon} alt='' width={20} height={20} className='w-[20xp] h-[20px] object-cover aspect-square' />
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
}
