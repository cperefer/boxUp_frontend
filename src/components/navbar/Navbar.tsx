import { useMainStore } from '@/store/mainStore';
import type { RefObject } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSpeaker } from 'react-icons/bs';

interface Props {
  menuButtonRef: RefObject<HTMLDivElement | null>
}

export const Navbar = ({ menuButtonRef }: Props) => {
  const { toggleMenu, isMenuOpen } = useMainStore();

  return (
    <div className="fixed flex flex-row items-center justify-between px-2.5 bg-primary w-screen h-10 text-white z-2">
      <div
        ref={menuButtonRef}
        onClick={toggleMenu}
        className='h-full w-10 flex flex-row-reverse items-center text-2xl cursor-pointer'
      >
        {
          // TODO: En un futuro animar el icono en lugar de cambiarlo
          isMenuOpen ?
            <AiOutlineClose /> :
            <AiOutlineMenu />
        }
      </div>
      <div className='h-full flex items-center'>
        <p>CrossFit La Virgos</p>
      </div>
      <div className='h-full w-10 flex flex-row items-center text-2xl cursor-pointer'>
        <BsSpeaker />
      </div>

    </div>
  )
}
