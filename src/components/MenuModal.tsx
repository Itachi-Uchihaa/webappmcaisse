import React from 'react';
import CrossIconDark from '@/assets/CrossIconDark.svg';
import Image from 'next/image';

interface ImageModalProps {
  menuItem: any | undefined
  closeModal: () => void
}

export default function MenuModal({ menuItem, closeModal }: ImageModalProps) {
  return (
    <div className='w-screen h-screen flex flex-col bg-[rgba(255,255,255,1)] top-0 fixed px-[20px] overflow-auto'>
      <Image onClick={closeModal} className='absolute h-[30px] w-[30px] left-[20px] top-[60px]' src={CrossIconDark} alt='' width={30} height={30}></Image>
      <div className='pt-[60px] w-full flex flex-col items-center'>
        <Image className='h-[160px] w-[160px] object-cover aspect-square rounded-[10px]' src={menuItem?.urls[0].url ? menuItem?.urls[0].url : ''} alt='' width={160} height={160}></Image>
        <div className='mt-[20px]'>
          <h2 className='w-full text-20 font-bold text-primaryText-light text-center'>{menuItem?.titre}</h2>
          <text className='w-full text-10 font-semibold text-secondaryText-light'>{'menuItem?.description'}</text>
        </div>
      </div>
      {menuItem?.options?.map((option: any) => {
        return (
          <div>
            <div className='flex justify-between items-center my-[30px] mb-[22px]'>
              <p className='text-16 font-bold text-secondaryText-light'>{`${option?.titre} :`}</p>
              {
                option?.isRequired &&
                <p className='text-8 font-bold text-white bg-[#AB1515] rounded-[10px] w-[80px] h-[20px] flex justify-center items-center'>Obligatoire</p>
              }
            </div>
            <div className='flex flex-col'>
              {option?.option1 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option1}</span>
                <input checked={option?.isSelectedByDefault} type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option1} value="option1" />
              </label>}
              {option?.option2 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option2}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option2} value="option1" />
              </label>}
              {option?.option3 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option3}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option3} value="option1" />
              </label>}
              {option?.option4 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option4}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option4} value="option1" />
              </label>}
              {option?.option5 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option5}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option5} value="option1" />
              </label>}
              {option?.option6 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option6}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option6} value="option1" />
              </label>}
              {option?.option7 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option7}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option7} value="option1" />
              </label>}
              {option?.option8 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option8}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option8} value="option1" />
              </label>}
              {option?.option9 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option9}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option9} value="option1" />
              </label>}
              {option?.option10 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option10}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option10} value="option1" />
              </label>}
              {option?.option11 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option11}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option11} value="option1" />
              </label>}
              {option?.option12 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option12}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option12} value="option1" />
              </label>}
              {option?.option13 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option13}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option13} value="option1" />
              </label>}
              {option?.option14 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option14}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option14} value="option1" />
              </label>}
              {option?.option15 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option15}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option15} value="option1" />
              </label>}
              {option?.option16 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option16}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option16} value="option1" />
              </label>}
              {option?.optio17 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.optio17}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.optio17} value="option1" />
              </label>}
              {option?.option18 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option18}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option18} value="option1" />
              </label>}
              {option?.option19 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option19}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.opti1on9} value="option1" />
              </label>}
              {option?.option20 && <label className="inline-flex items-center justify-between pt-2 pb-2 border-b border-[#303C994D]">
                <span className="ml-2 font-14 font-semibold text-[#303C99]">{option?.option20}</span>
                <input type="radio" className="form-radio" name={option?.isRequired ? option?.id : option?.option20} value="option1" />
              </label>}
            </div>
          </div>
        )
      })}
      <div className='m-auto mt-[30px] mb-[60px] w-[250px] min-h-[40px] rounded-[10px] bg-button-gradient text-white flex justify-center items-center gap-2'>
        <p className='text-12'>{`Ajouter au panier - ${16.90} €`}</p>
      </div>
    </div>
  )
}
